import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { Select, InputLabel, MenuItem, FormControl, Button, TextField, Switch, Typography } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { formatLanguageCodeToText } from './utils/formatters'

import './translations/i18n'
import { CV } from './components/CV'
import { COLORS } from './constants/colors'

const LANGUAGES_LIST = ['pt', 'en', 'de']

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('pt')
  const [title, setTitle] = useState('CV - RaphaelLeivas (DE)')
  const [isAcademic, setIsAcademic] = useState(true)

  const componentRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: title,
  })
  const { i18n } = useTranslation()

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage)
  }, [selectedLanguage])

  return (
    <div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '12px 0px',
        }}
      >
        <div style={{ flex: 1, margin: '0px 16px' }}>
          <FormControl style={{ width: '50%' }} >
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
        </div>

        <TextField
          label="Nome do documento"
          variant="standard"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography style={{ marginLeft: '8px' }}>
            Profissional
          </Typography>
          <Switch
            color="primary"
            checked={isAcademic}
            onChange={() => setIsAcademic((prev) => !prev)}
          />
          <Typography style={{ marginRight: '8px' }}>
            Acadêmico
          </Typography>
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={handlePrint}
            style={{ backgroundColor: COLORS.PRIMARY, color: 'white' }}
            variant="contained"
          >
            Gerar Currículo
          </Button>
        </div>
      </div>
      <p>OBS: use "Salvar como PDF", e não "Microsoft Print to PDF" na hora de salvar o PDF para evitar que o PDF desconfigure!</p>

      <CV ref={componentRef} isAcademic={isAcademic} />
    </div>
  )
}

export default App
