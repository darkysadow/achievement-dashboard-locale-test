import 'server-only'
import { LocalesType } from '../types/types'

const dictionaries = {
  uk: () => import('@/app/dictionaries/uk.json').then((module) => module.default),
  en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
  nl: () => import('@/app/dictionaries/nl.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  const shortLocale = locale.split('-')[0] as LocalesType
  return dictionaries[shortLocale]()
}
