import { useMemo, useState } from 'react'
import './App.css'
import { questions, type ColorKey, type ColorWeights, type Option, type Question } from './data/questions'

type Phase = 'intro' | 'quiz' | 'result'
type Scores = Record<ColorKey, number>

const SCORE_DISCRIMINATION_BOOST = 1.6
const SOFTMAX_TEMPERATURE = 0.72

const colorMeta: Record<
  ColorKey,
  {
    label: string
    hex: string
    personality: string
    description: string
    topMode: string
    stressMode: string
    outfit: string
  }
> = {
  red: {
    label: 'Rouge',
    hex: '#e84545',
    personality: 'Le moteur',
    description: 'Direct, energique, oriente action et resultat.',
    topMode: 'Au top: tu fais avancer tout le monde.',
    stressMode: 'Sous stress: tu peux devenir un peu bulldozer.',
    outfit: 'Pieces marquees, coupe franche, contraste fort, sneakers ou veste qui en impose.',
  },
  yellow: {
    label: 'Jaune',
    hex: '#f6b93b',
    personality: 'Le rayon de soleil',
    description: 'Sociable, spontane, creatif et tres expressif.',
    topMode: 'Au top: tu mets une ambiance instantanee.',
    stressMode: 'Sous stress: tu peux partir dans tous les sens.',
    outfit: 'Touches vives, accessoires fun, motifs cool, piece qui attire le sourire.',
  },
  green: {
    label: 'Vert',
    hex: '#43aa8b',
    personality: 'Le pacificateur',
    description: 'Calme, fiable, empathique, tres tourne vers les autres.',
    topMode: 'Au top: tu apaises et rassembles le groupe.',
    stressMode: 'Sous stress: tu evites trop le conflit.',
    outfit: 'Confort chic, matieres douces, tons naturels, look chill qui respire.',
  },
  blue: {
    label: 'Bleu',
    hex: '#3a86ff',
    personality: 'Le precisionniste',
    description: 'Analytique, rigoureux, structure, attentif aux details.',
    topMode: 'Au top: tu fiabilises tout ce qui t entoure.',
    stressMode: 'Sous stress: tu peux sur-analyser.',
    outfit: 'Style net et propre, belles finitions, palette maitrisee, petite touche elegante.',
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
  const withShuffledOptions = source.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }))

  return shuffleArray(withShuffledOptions)
}

function toPercentages(scores: Scores): Record<ColorKey, number> {
  const entries = Object.entries(scores) as [ColorKey, number][]
  const maxValue = Math.max(...entries.map(([, value]) => value))
  const expEntries = entries.map(([key, value]) => {
    const shifted = (value - maxValue) / SOFTMAX_TEMPERATURE
    return [key, Math.exp(shifted)] as [ColorKey, number]
  })

  const total = expEntries.reduce((acc, [, value]) => acc + value, 0)

  const withRemainder = expEntries.map(([key, value]) => {
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

function getPlayfulSummary(sorted: [ColorKey, number][]) {
  const [primary, secondary] = sorted
  const [primaryKey, primaryPct] = primary
  const [secondaryKey, secondaryPct] = secondary
  const [leastKey, leastPct] = sorted[sorted.length - 1]
  const gap = primaryPct - secondaryPct

  const openers: Record<ColorKey, string> = {
    red: `Tu as ${primaryPct}% de Rouge: clairement, quand il faut decider, tu n attends pas l autorisation du comite.`,
    yellow: `Avec ${primaryPct}% de Jaune, ton energie sociale arrive souvent avant toi dans la piece.`,
    green: `Avec ${primaryPct}% de Vert, tu es la personne qui peut calmer un debat rien qu en servant des chips.`,
    blue: `Avec ${primaryPct}% de Bleu, ton cerveau classe deja les invites par niveau d organisation.`,
  }

  const combos: Record<string, string> = {
    'red-yellow': 'Ton duo principal dit: meneur charismatique, un peu showman, jamais vraiment discret.',
    'red-green': 'Ton duo principal dit: leader protecteur, ferme mais avec un vrai coeur d equipe.',
    'red-blue': 'Ton duo principal dit: chef de mission. Tu as un plan, un timing et probablement un plan B.',
    'yellow-red': 'Ton duo principal dit: animateur officiel, avec une excellente capacite a lancer des idees folles.',
    'yellow-green': 'Ton duo principal dit: sunshine diplomate. Tu fais rire puis tu rassembles.',
    'yellow-blue': 'Ton duo principal dit: creatif methodique, le cocktail qui surprend et fonctionne.',
    'green-red': 'Ton duo principal dit: force tranquille, tu es doux mais impossible a deplacer quand tu as decide.',
    'green-yellow': 'Ton duo principal dit: ambiance safe et joyeuse, la meilleure combinaison pour une bonne soiree.',
    'green-blue': 'Ton duo principal dit: stabilite premium. Tu rassures et tu structures sans bruit.',
    'blue-red': 'Ton duo principal dit: precision offensive. Tu analyses vite et tu agis encore plus vite.',
    'blue-yellow': 'Ton duo principal dit: cerveau creatif. Tu veux des idees, mais propres et bien executees.',
    'blue-green': 'Ton duo principal dit: zen et carre. Fiable, pose, redoutablement coherent.',
  }

  const gapLine =
    gap >= 12
      ? 'Tu as un style bien affirme: quand tu arrives, on comprend vite l energie que tu apportes.'
      : 'Tu es un profil mixte: adaptable, imprevisible, et plutot dur a mettre dans une case.'

  const leastLine: Record<ColorKey, string> = {
    red: `Ton cote Rouge est a ${leastPct}%: tu n es pas la pour faire du bras de fer a chaque conversation.`,
    yellow: `Ton cote Jaune est a ${leastPct}%: tu peux etre social, mais tu n es pas animateur de colonie 24h/24.`,
    green: `Ton cote Vert est a ${leastPct}%: tu es sympa, mais pas forcement en mode zen permanent.`,
    blue: `Ton cote Bleu est a ${leastPct}%: tu aimes le cadre, sans transformer la soiree en audit qualite.`,
  }

  const comboKey = `${primaryKey}-${secondaryKey}`
  return [openers[primaryKey], combos[comboKey], gapLine, leastLine[leastKey]].join(' ')
}

function App() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState<Scores>(initialScores)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>(() => createRandomizedQuestions(questions))

  const currentQuestion = quizQuestions[step]
  const progress = Math.round((step / quizQuestions.length) * 100)

  const percentages = useMemo(() => toPercentages(scores), [scores])
  const sorted = useMemo(
    () => (Object.entries(percentages) as [ColorKey, number][]).sort((a, b) => b[1] - a[1]),
    [percentages],
  )

  const dominant = sorted[0][0]
  const secondary = sorted[1][0]
  const playfulSummary = useMemo(() => getPlayfulSummary(sorted), [sorted])
  const outfitSuggestion = `${colorMeta[dominant].outfit} Bonus ${colorMeta[secondary].label.toLowerCase()}: ${colorMeta[secondary].outfit.toLowerCase()}`

  function startQuiz() {
    setQuizQuestions(createRandomizedQuestions(questions))
    setPhase('quiz')
    setStep(0)
    setScores(initialScores)
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

    if (step === quizQuestions.length - 1) {
      setPhase('result')
      return
    }

    setStep((prev) => prev + 1)
  }

  return (
    <main className="app-shell">
      <section className="panel">
        <header className="panel-head">
          <p className="eyebrow">Soiree Maison Edition</p>
          <h1>Color Dress Test</h1>
          <p className="subtitle">
            Reponds vite, sans sur-reflechir. On transforme ta personnalite en vibe de tenue.
          </p>
        </header>

        {phase === 'intro' && (
          <div className="intro card pop-in">
            <h2>Comment ca marche ?</h2>
            <p>
              {questions.length} questions, 2 minutes max, resultat en repartition complete Rouge Jaune Vert Bleu.
              Ensuite tu recois ton portrait et une reco tenue fun, version souple.
            </p>
            <button className="primary-btn" onClick={startQuiz}>
              Lancer le test
            </button>
          </div>
        )}

        {phase === 'quiz' && (
          <div className="quiz card pop-in">
            <div className="progress-meta">
              <span>
                Question {step + 1} / {quizQuestions.length}
              </span>
              <span>{currentQuestion.vibe === 'party' ? 'Mode soiree' : 'Mode quotidien'}</span>
            </div>
            <div className="progress-track" aria-hidden="true">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <h2 className="question">{currentQuestion.prompt}</h2>

            <div className="answers">
              {currentQuestion.options.map((option) => {
                return (
                  <button
                    key={option.id}
                    className="answer-btn"
                    onClick={() => answerQuestion(option)}
                  >
                    <span>{option.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div className="result card pop-in">
            <h2>Ton profil couleur</h2>
            <p className="subtitle">
              Dominante <strong>{colorMeta[dominant].label}</strong>, secondaire{' '}
              <strong>{colorMeta[secondary].label}</strong>.
            </p>

            <div className="distribution">
              {sorted.map(([key, value]) => (
                <article className="bar-row" key={key}>
                  <div className="bar-label">
                    <span>{colorMeta[key].label}</span>
                    <strong>{value}%</strong>
                  </div>
                  <div className="bar-bg" aria-hidden="true">
                    <div
                      className="bar-fill"
                      style={{ width: `${value}%`, backgroundColor: colorMeta[key].hex }}
                    ></div>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid">
              {(Object.keys(colorMeta) as ColorKey[]).map((key) => (
                <article className="profile-card" key={key}>
                  <h3 style={{ color: colorMeta[key].hex }}>
                    {colorMeta[key].label} - {colorMeta[key].personality}
                  </h3>
                  <p>{colorMeta[key].description}</p>
                  <p>{colorMeta[key].topMode}</p>
                  <p>{colorMeta[key].stressMode}</p>
                </article>
              ))}
            </div>

            <article className="summary-box">
              <h3>Resume perso (gentiment moqueur)</h3>
              <p>{playfulSummary}</p>
            </article>

            <article className="outfit-box">
              <h3>Inspiration tenue pour la soiree</h3>
              <p>{outfitSuggestion}</p>
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
