export const formatLanguageCodeToText = (languageCode: string): string => {
  switch (languageCode) {
    case 'pt':
      return 'Português'
    case 'en':
      return 'Inglês'
    default:
      return 'Portguês'
  }
}
