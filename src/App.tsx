import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Select, InputLabel, MenuItem, FormControl, Button } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { formatLanguageCodeToText } from './utils/formatters'

import './translations/i18n'
import { CV } from './components/CV'
import { COLORS } from './constants/colors'

const LANGUAGES_LIST = ['pt', 'en']

function App() {
  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })
  const { i18n } = useTranslation()

  const [selectedLanguage, setSelectedLanguage] = useState('pt')

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage)
  }, [selectedLanguage])

  return (
    <div>
      <CV ref={componentRef} />

      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '12px 0px',
        }}
      >
        <FormControl style={{ flex: 1, marginLeft: 16 }}>
          <InputLabel>Idioma</InputLabel>
          <Select
            value={selectedLanguage}
            label="Selecionar Idiomna"
            onChange={(event: any) => setSelectedLanguage(event.target.value)}
          >
            {LANGUAGES_LIST.map((language, index) => (
              <MenuItem key={index} value={language}>
                {formatLanguageCodeToText(language)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handlePrint}
            style={{ backgroundColor: COLORS.PRIMARY }}
            variant="contained"
          >
            Gerar Currículo
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
