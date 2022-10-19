import 'react-i18next'
import pt from './pt'

declare module 'react-i18next' {
  export interface Resources {
    translation: typeof pt
  }
}
