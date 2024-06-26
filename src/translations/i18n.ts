import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'
import pt from './pt'
import de from './de'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
      de: {
        translation: de,
      },
    },
    lng: 'pt',
    fallbackLng: 'pt',

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
