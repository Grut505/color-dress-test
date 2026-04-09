import rawQuestions from './questions.json'

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
  vibe: 'party' | 'daily'
  options: Option[]
}

export const questions: Question[] = rawQuestions as Question[]
