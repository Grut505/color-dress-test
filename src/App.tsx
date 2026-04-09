import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { questions, type ColorKey, type ColorWeights, type Option, type Question } from './data/questions'

type Phase = 'intro' | 'quiz' | 'result'
type Scores = Record<ColorKey, number>

type AnswerRecord = {
  questionId: number
  prompt: string
  choiceLabel: string
}

type SavedResult = {
  createdAt: string
  sorted: [ColorKey, number][]
  percentages: Record<ColorKey, number>
  answers: AnswerRecord[]
}

const STORAGE_KEY = 'color-dress-test:last-result'
const QUESTIONS_PER_RUN = 12
const SCORE_DISCRIMINATION_BOOST = 1.02
const PERCENTAGE_CONTRAST = 1.14

const colorMeta: Record<ColorKey, { label: string; hex: string; traits: string; signal: string }> = {
  red: {
    label: 'Rouge',
    hex: '#e84545',
    traits: 'Direct, rapide, énergique, challengeur, orienté décision.',
    signal: 'Tu passes vite de l idée à l action.',
  },
  yellow: {
    label: 'Jaune',
    hex: '#f6b93b',
    traits: 'Influent, sociable, démonstratif, tonique, communicatif.',
    signal: 'Tu fais circuler l information et l adhésion.',
  },
  green: {
    label: 'Vert',
    hex: '#43aa8b',
    traits: 'Stable, attentionné, patient, calme, coopérant.',
    signal: 'Tu maintiens la qualité relationnelle du groupe.',
  },
  blue: {
    label: 'Bleu',
    hex: '#3a86ff',
    traits: 'Formel, réfléchi, précis, analytique, consciencieux.',
    signal: 'Tu rends les décisions fiables et compréhensibles.',
  },
}

const initialScores: Scores = { red: 0, yellow: 0, green: 0, blue: 0 }

function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function createRandomizedQuestions(source: Question[]): Question[] {
  const selected = shuffleArray(source).slice(0, QUESTIONS_PER_RUN)
  return selected.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }))
}

function toPercentages(scores: Scores): Record<ColorKey, number> {
  const entries = Object.entries(scores) as [ColorKey, number][]
  const minValue = Math.min(...entries.map(([, value]) => value))

  const normalizedEntries = entries.map(([key, value]) => {
    const shifted = value - minValue + 1
    return [key, Math.pow(shifted, PERCENTAGE_CONTRAST)] as [ColorKey, number]
  })

  const total = normalizedEntries.reduce((acc, [, value]) => acc + value, 0)
  const withRemainder = normalizedEntries.map(([key, value]) => {
    const exact = (value / total) * 100
    return { key, floor: Math.floor(exact), remainder: exact - Math.floor(exact) }
  })

  let missing = 100 - withRemainder.reduce((acc, item) => acc + item.floor, 0)
  withRemainder.sort((a, b) => b.remainder - a.remainder)

  let i = 0
  while (missing > 0) {
    withRemainder[i % withRemainder.length].floor += 1
    missing -= 1
    i += 1
  }

  const percentages = { red: 0, yellow: 0, green: 0, blue: 0 }
  for (const item of withRemainder) {
    percentages[item.key] = item.floor
  }

  return percentages
}

function buildSummary(sorted: [ColorKey, number][]) {
  const [primary, secondary] = sorted
  const [primaryKey, primaryPct] = primary
  const [secondaryKey, secondaryPct] = secondary
  const gap = primaryPct - secondaryPct

  const pairing: Record<string, string> = {
    'red-yellow': 'Tu avances vite et tu entraînes les autres sans devoir forcer.',
    'red-green': 'Tu décides franchement, avec attention à la cohésion.',
    'red-blue': 'Tu combines vitesse de décision et exigence de qualité.',
    'yellow-red': 'Tu influences naturellement, avec une vraie capacité à déclencher.',
    'yellow-green': 'Tu relies les personnes et tu gardes une dynamique saine.',
    'yellow-blue': 'Tu communiques bien, sans perdre la rigueur.',
    'green-red': 'Tu gardes le collectif stable tout en faisant avancer.',
    'green-yellow': 'Tu fédères calmement et tu facilites les échanges.',
    'green-blue': 'Tu sécurises les relations et la méthode.',
    'blue-red': 'Tu structures vite et tu assumes les arbitrages.',
    'blue-yellow': 'Tu rends le complexe clair et partageable.',
    'blue-green': 'Tu fais tenir le système sans bruit inutile.',
  }

  const styleLine =
    gap >= 10
      ? 'Ton style est assez affirmé: on identifie vite ta façon de fonctionner.'
      : 'Ton profil est mixte: tu adaptes ton style selon le contexte.'

  return `${colorMeta[primaryKey].label} (${primaryPct}%) devant ${colorMeta[secondaryKey].label} (${secondaryPct}%). ${pairing[`${primaryKey}-${secondaryKey}`]} ${styleLine}`
}

function buildOutfitAdvice(dominant: ColorKey, secondary: ColorKey) {
  const accessoryByColor: Record<ColorKey, string> = {
    red: 'une ceinture bordeaux ou une paire de chaussettes rouges',
    yellow: 'une montre dorée ou un foulard jaune moutarde',
    green: 'une casquette vert sauge ou un bracelet kaki',
    blue: 'une surchemise bleu marine ou une paire de lacets bleus',
  }

  const dominantTone: Record<ColorKey, string> = {
    red: 'bordeaux',
    yellow: 'moutarde',
    green: 'sauge',
    blue: 'marine',
  }

  const secondaryTone: Record<ColorKey, string> = {
    red: 'terracotta',
    yellow: 'ocre',
    green: 'kaki clair',
    blue: 'bleu acier',
  }

  const simpleLook = `Tenue simple: jean brut + t-shirt uni (écru, gris ou noir) + ${accessoryByColor[dominant]}.`
  const mixedLook = `Version mix ${colorMeta[dominant].label}/${colorMeta[secondary].label}: base neutre + une pièce ${dominantTone[dominant]} (veste légère, maille ou sneakers) + un rappel ${secondaryTone[secondary]} (sac, montre, foulard).`

  return { simpleLook, mixedLook }
}

function formatSavedDate(iso: string) {
  const date = new Date(iso)
  return date.toLocaleString('fr-FR', { dateStyle: 'medium', timeStyle: 'short' })
}

function App() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Scores>(initialScores)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(() => createRandomizedQuestions(questions))
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [savedResult, setSavedResult] = useState<SavedResult | null>(null)
  const [showingSavedResult, setShowingSavedResult] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return

    try {
      const parsed = JSON.parse(raw) as SavedResult
      if (parsed?.sorted && parsed?.percentages && parsed?.answers) {
        setSavedResult(parsed)
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  const currentQuestion = quizQuestions[step]
  const progress = Math.round((step / quizQuestions.length) * 100)

  const livePercentages = useMemo(() => toPercentages(scores), [scores])
  const liveSorted = useMemo(
    () => (Object.entries(livePercentages) as [ColorKey, number][]).sort((a, b) => b[1] - a[1]),
    [livePercentages],
  )

  const resultSorted = showingSavedResult && savedResult ? savedResult.sorted : liveSorted
  const resultAnswers = showingSavedResult && savedResult ? savedResult.answers : answers

  const dominant = resultSorted[0][0]
  const secondary = resultSorted[1][0]
  const summary = useMemo(() => buildSummary(resultSorted), [resultSorted])
  const outfit = useMemo(() => buildOutfitAdvice(dominant, secondary), [dominant, secondary])

  useEffect(() => {
    if (phase !== 'result' || showingSavedResult || answers.length === 0) {
      return
    }

    const snapshot: SavedResult = {
      createdAt: new Date().toISOString(),
      sorted: liveSorted,
      percentages: livePercentages,
      answers,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
    setSavedResult(snapshot)
  }, [phase, showingSavedResult, answers, liveSorted, livePercentages])

  function startQuiz() {
    setQuizQuestions(createRandomizedQuestions(questions))
    setPhase('quiz')
    setStep(0)
    setScores(initialScores)
    setAnswers([])
    setShowingSavedResult(false)
  }

  function viewLastSavedResult() {
    if (!savedResult) return
    setShowingSavedResult(true)
    setPhase('result')
  }

  function answerQuestion(option: Option) {
    const selectedWeights: ColorWeights = option.weights
    const optionCount = currentQuestion.options.length

    const averageWeights: ColorWeights = currentQuestion.options.reduce(
      (acc, currentOption) => ({
        red: acc.red + currentOption.weights.red / optionCount,
        yellow: acc.yellow + currentOption.weights.yellow / optionCount,
        green: acc.green + currentOption.weights.green / optionCount,
        blue: acc.blue + currentOption.weights.blue / optionCount,
      }),
      { red: 0, yellow: 0, green: 0, blue: 0 },
    )

    setScores((prev) => ({
      red: prev.red + (selectedWeights.red - averageWeights.red) * SCORE_DISCRIMINATION_BOOST,
      yellow: prev.yellow + (selectedWeights.yellow - averageWeights.yellow) * SCORE_DISCRIMINATION_BOOST,
      green: prev.green + (selectedWeights.green - averageWeights.green) * SCORE_DISCRIMINATION_BOOST,
      blue: prev.blue + (selectedWeights.blue - averageWeights.blue) * SCORE_DISCRIMINATION_BOOST,
    }))

    setAnswers((prev) => [...prev, { questionId: currentQuestion.id, prompt: currentQuestion.prompt, choiceLabel: option.label }])

    if (step === quizQuestions.length - 1) {
      setShowingSavedResult(false)
      setPhase('result')
      return
    }

    setStep((prev) => prev + 1)
  }

  return (
    <main className="app-shell">
      <section className="panel">
        <header className="panel-head">
          <p className="eyebrow">Profil couleur</p>
          <h1>Color Dress Test</h1>
          <p className="subtitle">12 questions tirées au hasard dans une banque de 36. Réponds spontanément.</p>
        </header>

        {phase === 'intro' && (
          <div className="intro card pop-in">
            <h2>Comment ça marche ?</h2>
            <p>
              Tu réponds à {QUESTIONS_PER_RUN} questions, puis tu obtiens ta répartition Rouge/Jaune/Vert/Bleu,
              un résumé concret et une proposition de tenue simple.
            </p>
            <div className="intro-actions">
              <button className="primary-btn" onClick={startQuiz}>
                Lancer le test
              </button>
              {savedResult && (
                <button className="secondary-btn" onClick={viewLastSavedResult}>
                  Voir mon dernier résultat
                </button>
              )}
            </div>
          </div>
        )}

        {phase === 'quiz' && (
          <div className="quiz card pop-in">
            <div className="progress-meta">
              <span>
                Question {step + 1} / {quizQuestions.length}
              </span>
              <span>{currentQuestion.vibe === 'party' ? 'Mode social' : 'Mode quotidien'}</span>
            </div>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <h2 className="question">{currentQuestion.prompt}</h2>

            <div className="answers">
              {currentQuestion.options.map((option) => (
                <button key={option.id} className="answer-btn" onClick={() => answerQuestion(option)}>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div className="result card pop-in">
            <h2>Ton profil couleur</h2>
            <p className="subtitle">
              Dominante <strong>{colorMeta[dominant].label}</strong>, secondaire <strong>{colorMeta[secondary].label}</strong>.
            </p>

            {showingSavedResult && savedResult && (
              <p className="saved-meta">Résultat sauvegardé le {formatSavedDate(savedResult.createdAt)}.</p>
            )}

            <div className="distribution">
              {resultSorted.map(([key, value]) => (
                <article className="bar-row" key={key}>
                  <div className="bar-label">
                    <span>{colorMeta[key].label}</span>
                    <strong>{value}%</strong>
                  </div>
                  <div className="bar-bg" aria-hidden="true">
                    <div className="bar-fill" style={{ width: `${value}%`, backgroundColor: colorMeta[key].hex }}></div>
                  </div>
                </article>
              ))}
            </div>

            <article className="summary-box">
              <h3>Résumé</h3>
              <p>{summary}</p>
            </article>

            <article className="outfit-box">
              <h3>Tenue proposée</h3>
              <p>{outfit.simpleLook}</p>
              <p>{outfit.mixedLook}</p>
            </article>

            <div className="grid">
              {resultSorted.slice(0, 2).map(([key]) => (
                <article className="profile-card" key={key}>
                  <h3 style={{ color: colorMeta[key].hex }}>{colorMeta[key].label}</h3>
                  <p>{colorMeta[key].traits}</p>
                  <p>{colorMeta[key].signal}</p>
                </article>
              ))}
            </div>

            <article className="history-box">
              <h3>Tes réponses</h3>
              <ol className="history-list">
                {resultAnswers.map((item, index) => (
                  <li key={`${item.questionId}-${index}`}>
                    <p className="history-question">{item.prompt}</p>
                    <p className="history-answer">{item.choiceLabel}</p>
                  </li>
                ))}
              </ol>
            </article>

            <button className="primary-btn" onClick={startQuiz}>
              Refaire le test
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
