import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import profileImage from '../assets/images/profile.jpeg'
import randomImage from '../assets/images/random.jpg'
import { COLORS } from '../constants/colors'

// stack icons / SVG
import { ReactComponent as WhatsappIcon } from '../assets/images/whatsappIcon.svg'
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedinIcon.svg'

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
    paddingBottom: 0,

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
    marginTop: 6,
  },
  infoSectionTitleRight: {
    color: COLORS.PRIMARY,
    fontSize: 20,
    marginBottom: 4,
    marginTop: 4,
    fontWeight: 'bold',

    '&:first-child': {
      marginTop: 12,
    }
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
  linkedinIcon: {
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
            <p className={classes.infoSectionTitle}>{t('birthday')}</p>
            <CVText>17/10/2001</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>{t('civilStatus')}</p>
            <CVText>{t('currentCivilStatus')}</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>{t('email')}</p>
            <CVText>raphaelhenrique2013@outlook.com</CVText>
            <CVText style={{ marginTop: '-2px' }} >rapha.lei8@gmail.com</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>{t('residentialAddress')}</p>
            <CVText>{t('street')} Célia de Souza 322 apto 201, Sagrada Família, Belo Horizonte, Minas Gerais, {t('brazil')}</CVText>
            <CVText>{t('zipcode')}: 31030-500</CVText>

            <hr style={{ margin: '2px' }} />

            <div className={classes.phoneContainer}>
              <div className={classes.wppIcon}>
                <LinkedinIcon />
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
              <div className={classes.linkedinIcon}>
                <WhatsappIcon />
              </div>
              <div className={classes.phoneInfo}>
                <p className={classes.infoSectionTitle}>{t('phone')} / {t('whatsapp')}</p>
                <CVText>+55 (31) 9 9563 - 2802</CVText>
              </div>
            </div>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>{t('knowlegde')}</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>{t('knowlegde1')}</CVText></li>
              <li><CVText>{t('knowlegde2')}</CVText></li>
              <li><CVText>{t('knowlegde3')}</CVText></li>
              <li><CVText>{t('knowlegde4')}</CVText></li>
              <li><CVText>{t('knowlegde5')}</CVText></li>
            </ul>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>{t('languages')}</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText><b>{t('language1Name')}</b>: {t('language1Level')}</CVText></li>
              <li><CVText><b>{t('language2Name')}</b>: {t('language2Level')}</CVText></li>
              <li><CVText><b>{t('language3Name')}</b>: {t('language3Level')}</CVText></li>
              <li><CVText><b>{t('language4Name')}</b>: {t('language4Level')}</CVText></li>
              <li><CVText><b>{t('language5Name')}</b>: {t('language5Level')}</CVText></li>
            </ul>
          </div>
        </div>

        <div className={classes.experienceSection}>
          <p className={classes.infoSectionTitleRight}>{t('profile')}</p>

          <CVText>
            {t('profileText')}
          </CVText>

          <p className={classes.infoSectionTitleRight}>{t('professionalExperience')}</p>

          <ProfessionalExperienceRow
            role={t('techinicianDeveloper')}
            company={t('finatec')}
            dateStart={t('dateStartFinatec')}
            dateEnd={t('dateEndFinatec')}
            activities={[
              t('techinician1'),
              t('techinician2'),
              t('techinician3'),
              t('techinician4'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('developmentIntern')}
            company={t('visuri')}
            dateStart={t('dateStartVisuri')}
            dateEnd={t('dateEndVisuri')}
            activities={[
              t('developmentIntern1'),
              t('developmentIntern2'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('leadingDeveloper')}
            smallRole
            company={t('cpejr')}
            dateStart={t('dateStartCpe')}
            dateEnd={t('dateEndCpe')}
            activities={[
              t('leadingDeveloper1'),
              t('leadingDeveloper2'),
              t('leadingDeveloper3'),
            ]}
            borderless
          />

          <p className={classes.infoSectionTitleRight}>{t('academicFormation')}</p>

          <ProfessionalExperienceRow
            role={t('labInternship')}
            company={t('nhlStenden')}
            dateStart={t('dateStartNhl')}
            dateEnd={t('dateEndNhl')}
            activities={[
              t('nhl1'),
              t('nhl2'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('winterkurs')}
            company={t('uniMannheim')}
            dateStart={t('dateStartWinterkurs')}
            dateEnd={t('dateEndWinterkurs')}
            activities={[
              t('winterkurs1'),
              t('winterkurs2'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('systemsEngineerUndergraduate')}
            company={t('ufmg')}
            dateStart={t('dateStartUfmg')}
            dateEnd={t('dateEndUfmg')}
            activities={[
              t('ufmg1'),
              t('ufmg2'),
              t('ufmg3'),
              t('ufmg4'),
              t('ufmg5'),
              t('ufmg6'),
              t('ufmg7'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('cefetTechinician')}
            company={t('cefet')}
            dateStart={t('dateStartCefet')}
            dateEnd={t('dateEndCefet')}
            activities={[
              t('cefet1'),
              t('cefet2'),
              t('cefet3'),
            ]}
            borderless
          />
        </div>
      </div>
    </div>
  )
})
