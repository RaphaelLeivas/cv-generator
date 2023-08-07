import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import profileImage from '../assets/images/profile.jpeg'
import randomImage from '../assets/images/random.jpg'
import { COLORS } from '../constants/colors'

// stack icons / SVG
import { ReactComponent as WhatsappIcon } from '../assets/images/whatsappIcon.svg'

import { ProfessionalExperienceRow } from './ProfessionalExperienceRow'
import { CVText } from './CVText'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: `Verdana`,
    fontSize: 12,

    display: 'flex',
    flexDirection: 'row',
  },
  infoSection: {
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHTGRAY,
    padding: '10px 20px 10px 20px',
  },
  stackExperience: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    marginTop: '32px',
  },
  experienceSection: {
    flex: 2.5,
    padding: 20,
    paddingTop: 0,

    display: 'flex',
    flexDirection: 'column',
  },
  profileImage: {
    borderRadius: '50%',
    width: '200px',
  },
  stackItemRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stackIconName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  stackIcon: {
    width: '32px',
  },
  textContainer: {
    width: '100%',
  },
  distanceInfoContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '0px 24px',
    borderRight: '1px solid #00000077',

    '&:last-child': {
      borderRight: '0px solid #00000077',
    }
  },
  infoSectionTitle: {
    textTransform: 'none',
    color: COLORS.PRIMARY,
    fontSize: 16,
    marginBottom: 4,
    marginTop: 10,
  },
  infoSectionSubtitle: {
    textTransform: 'none',
    marginBottom: 2,
    marginTop: 5,
    fontSize: 14,
  },
  cvTitle: {
    textTransform: 'none',
    color: COLORS.PRIMARY,
    fontSize: 32,

    marginBottom: 8,
    marginTop: 8,
  },
  cvSubTitle: {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 6,
  },
  languagesContainer: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  languagesTitle: {
    flex: 1,
  },
  languagesList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',

    marginBottom: '-12px',
    marginTop: '-4px'
  },
  phoneContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '2px 0px 2px 0px',
  },
  wppIcon: {
    flex: 1,
  },
  phoneInfo: {
    flex: 4,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  socialsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '4px 0px 8px 0px',
  }
}))

const HIDE_PROFILE_IMAGE = false
// const CURRENT_AGE = 21

interface CVProps {
  isAcademic: boolean
}

export const CV = React.forwardRef<HTMLDivElement, CVProps>((props, ref) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const { isAcademic } = props

  return (
    <div ref={ref}>
      <div className={classes.root}>
        <div className={classes.infoSection}>
          <p className={classes.cvTitle}>Raphael Henrique Braga Leivas</p>

          <img
            src={HIDE_PROFILE_IMAGE ? randomImage : profileImage}
            className={classes.profileImage}
            alt="Imagem de perfil do curriculo"
          />

          <div className={classes.textContainer}>
            <p className={classes.infoSectionTitle}>Geburtsdaten</p>
            <CVText>17.10.2001</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>Zivilstand</p>
            <CVText>Ledig, keine Kinder</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>{t('email')}</p>
            <CVText>raphaelhenrique2013@outlook.com</CVText>
            <CVText style={{ marginTop: '-2px' }} >rapha.lei8@gmail.com</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>Adresse</p>
            <CVText>Rua Célia de Souza, 322 apto 201, Sagrada Família, Belo Horizonte, Minas Gerais, {t('brazil')}</CVText>

            <hr style={{ margin: '2px' }} />

            <div className={classes.phoneContainer}>
              <div className={classes.wppIcon}>
                <WhatsappIcon />
              </div>
              <div className={classes.phoneInfo}>
                <p className={classes.infoSectionTitle}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/raphaelbleivas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 6, marginBottom: 6 }}
                >
                  /raphaelbleivas/
                </a>
              </div>
            </div>

            <hr style={{ margin: '2px' }} />

            <div className={classes.phoneContainer}>
              <div className={classes.wppIcon}>
                <WhatsappIcon />

              </div>
              <div className={classes.phoneInfo}>
                <p className={classes.infoSectionTitle}>Telefon / {t('whatsapp')}</p>
                <CVText>(31) 9 9563 - 2802</CVText>
              </div>
            </div>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>Core Competencies</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>Software Development</CVText></li>
              <li><CVText>Frontend, backend, databases</CVText></li>
              <li><CVText>REST API</CVText></li>
              <li><CVText>Agile methodologies</CVText></li>
            </ul>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>Sprachen</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>Portugiesisch: Muttersprache</CVText></li>
              <li><CVText>Spanisch: Muttersprache</CVText></li>
              <li><CVText>Englisch: Muttersprache</CVText></li>
              <li><CVText>Deutsch: Muttersprache</CVText></li>
            </ul>

          </div>
        </div>

        <div className={classes.experienceSection}>
          <p className={classes.infoSectionTitle}>Kurzprofil</p>


          <p className={classes.infoSectionTitle}>Berufliche Erfahrungen</p>

          <ProfessionalExperienceRow
            role={t('techinicianDeveloper')}
            company={t('finatec')}
            dateStart={'16 ' + t('february') + ' 2022'}
            dateEnd={'21 ' + t('march') + ' 2023'}
            activities={
              isAcademic
                ? [t('techinician1'), t('techinician2'), t('techinician4')]
                : [t('techinician1'), t('techinician2'), t('techinician3'), t('techinician4')]
            }
          />

          <ProfessionalExperienceRow
            role={t('developmentIntern')}
            company={t('visuri')}
            dateStart={'14 ' + t('december') + ' 2020'}
            dateEnd={'15 ' + t('february') + ' 2022'}
            activities={
              isAcademic
                ? [t('developmentIntern1'), t('developmentIntern3')]
                : [t('developmentIntern1'), t('developmentIntern2'), t('developmentIntern3')]
            }
          />

          <ProfessionalExperienceRow
            role={t('leadingDeveloper')}
            company={t('cpejr')}
            dateStart={'01 ' + t('july') + ' 2021'}
            dateEnd={'31 ' + t('december') + ' 2021'}
            activities={
              isAcademic
                ? [t('leadingDeveloper2'), t('leadingDeveloper3')]
                : [t('leadingDeveloper1'), t('leadingDeveloper2'), t('leadingDeveloper3')]
            }
          />

          <ProfessionalExperienceRow
            role={t('technologyConsultant')}
            company={t('cpejr')}
            dateStart={'01 ' + t('january') + ' 2021'}
            dateEnd={'31 ' + t('june') + ' 2021'}
            activities={[t('technologyConsultant1')]}
          />

          <ProfessionalExperienceRow
            role={t('trainee')}
            company={t('cpejr')}
            dateStart={'01 ' + t('september') + ' 2020'}
            dateEnd={'31 ' + t('december') + ' 2020'}
            activities={[t('trainee1')]}
            borderless
          />

          <p className={classes.infoSectionTitle}>Ausbildung</p>

          <ProfessionalExperienceRow
            role={t('systemsEngineerUndergraduate')}
            company={t('ufmg')}
            dateStart={'03 ' + t('march') + ' 2020'}
            dateEnd={'31 ' + t('december') + ' 2025'}
            activities={
              isAcademic
                ? [t('ufmg1'), t('ufmg2'), t('ufmg3')]
                : [t('ufmg1')]
            }
          />

          <ProfessionalExperienceRow
            role={t('cefetTechinician')}
            company={t('cefet')}
            dateStart={'01 ' + t('february') + ' 2017'}
            dateEnd={'31 ' + t('november') + ' 2019'}
            activities={
              isAcademic
                ? [t('cefet1'), t('cefet2')]
                : [t('cefet1')]
            }
            borderless
          />
        </div>
      </div>
    </div>
  )
})
