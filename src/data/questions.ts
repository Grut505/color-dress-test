export type ColorKey = 'red' | 'yellow' | 'green' | 'blue'

export type ColorWeights = Record<ColorKey, number>

export type Option = {
  id: string
  label: string
  weights: ColorWeights
}

export type Question = {
  id: number
  prompt: string
  contexte: 'quotidien' | 'sortie'
  options: Option[]
}

type QuestionSetFile = {
  id: string
  description: string
  createdAt?: string
  questions: Question[]
}

type ActiveSetSource = 'query' | 'env' | 'default' | 'fallback'

export type QuestionSetMeta = {
  id: string
  description: string
  createdAt?: string
  questionCount: number
}

export type ActiveQuestionSetMeta = {
  id: string
  description: string
  createdAt?: string
  source: ActiveSetSource
}

const DEFAULT_SET_ID = 'default'

const questionSetModules = import.meta.glob('./question-sets/*.json', { eager: true }) as Record<string, { default: unknown }>

function isQuestionSetFile(value: unknown): value is QuestionSetFile {
  if (!value || typeof value !== 'object') return false

  const maybeSet = value as Partial<QuestionSetFile>
  if (typeof maybeSet.id !== 'string' || maybeSet.id.length === 0) return false
  if (typeof maybeSet.description !== 'string' || maybeSet.description.length === 0) return false
  if (!Array.isArray(maybeSet.questions) || maybeSet.questions.length === 0) return false

  return true
}

function loadQuestionSets() {
  const entries = Object.entries(questionSetModules)
  const map = new Map<string, QuestionSetFile>()

  for (const [filePath, moduleValue] of entries) {
    const payload = moduleValue.default

    if (!isQuestionSetFile(payload)) {
      console.warn(`[questions] Ignored invalid question set file: ${filePath}`)
      continue
    }

    if (map.has(payload.id)) {
      console.warn(`[questions] Duplicate question set id "${payload.id}" in ${filePath}. Keeping first occurrence.`)
      continue
    }

    map.set(payload.id, payload)
  }

  return map
}

function getRequestedSetId() {
  if (typeof window === 'undefined') {
    return { source: 'env' as const, setId: import.meta.env.VITE_QUESTION_SET as string | undefined }
  }

  const querySetId = new URLSearchParams(window.location.search).get('set')?.trim()
  if (querySetId) {
    return { source: 'query' as const, setId: querySetId }
  }

  const envSetId = (import.meta.env.VITE_QUESTION_SET as string | undefined)?.trim()
  return { source: 'env' as const, setId: envSetId }
}

function resolveActiveSet(questionSets: Map<string, QuestionSetFile>) {
  const defaultSet = questionSets.get(DEFAULT_SET_ID)

  if (!defaultSet) {
    throw new Error(`[questions] Missing required default question set with id "${DEFAULT_SET_ID}".`)
  }

  const request = getRequestedSetId()
  if (!request.setId) {
    return { set: defaultSet, source: 'default' as const }
  }

  const requestedSet = questionSets.get(request.setId)
  if (requestedSet) {
    return { set: requestedSet, source: request.source }
  }

  console.warn(
    `[questions] Unknown set "${request.setId}" requested via ${request.source}. Falling back to "${DEFAULT_SET_ID}".`,
  )
  return { set: defaultSet, source: 'fallback' as const }
}

const availableQuestionSets = loadQuestionSets()
const activeResolution = resolveActiveSet(availableQuestionSets)
const maybeDefaultQuestionSet = availableQuestionSets.get(DEFAULT_SET_ID)

if (!maybeDefaultQuestionSet) {
  throw new Error(`[questions] Missing required default question set with id "${DEFAULT_SET_ID}".`)
}

const defaultQuestionSet = maybeDefaultQuestionSet

export const availableQuestionSetsMeta: QuestionSetMeta[] = [...availableQuestionSets.values()]
  .map((set) => ({
    id: set.id,
    description: set.description,
    createdAt: set.createdAt,
    questionCount: set.questions.length,
  }))
  .sort((a, b) => a.id.localeCompare(b.id, 'fr-FR'))

export function getQuestionsBySetId(setId: string): Question[] {
  const requested = availableQuestionSets.get(setId)
  if (requested) {
    return requested.questions
  }

  console.warn(`[questions] Unknown set "${setId}" requested in app runtime. Falling back to "${DEFAULT_SET_ID}".`)
  return defaultQuestionSet.questions
}

export const questions: Question[] = activeResolution.set.questions

export const activeQuestionSetMeta: ActiveQuestionSetMeta = {
  id: activeResolution.set.id,
  description: activeResolution.set.description,
  createdAt: activeResolution.set.createdAt,
  source: activeResolution.source,
}
