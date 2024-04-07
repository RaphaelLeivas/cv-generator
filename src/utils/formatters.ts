export const formatLanguageCodeToText = (languageCode: string): string => {
  switch (languageCode) {
    case 'pt':
      return 'Português'
    case 'en':
      return 'English'
    case 'de':
      return 'Deutsch'
    default:
      return 'Português'
  }
}
