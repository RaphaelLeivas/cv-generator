import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

import profileImage from '../assets/images/profile.jpeg'
import randomImage from '../assets/images/random.jpg'
import { COLORS } from '../constants/colors'

// stack icons / SVG
import { ReactComponent as ReactIcon } from '../assets/images/stack/reactIcon.svg'
import { ReactComponent as TypescriptIcon } from '../assets/images/stack/typescriptIcon.svg'
import { ReactComponent as JavascriptIcon } from '../assets/images/stack/javascriptIcon.svg'
import { ReactComponent as NodejsIcon } from '../assets/images/stack/nodejsIcon.svg'
import { ReactComponent as MongodbIcon } from '../assets/images/stack/mongodbIcon.svg'
import { ReactComponent as AwsIcon } from '../assets/images/stack/awsIcon.svg'
import { ReactComponent as WhatsappIcon } from '../assets/images/whatsappIcon.svg'

// stack icons / SVG
import databaseIcon from '../assets/images/stack/databaseIcon.png'
import scrumIcon from '../assets/images/stack/scrumIcon.png'
import apiIcon from '../assets/images/stack/apiIcon.png'

import { StackExperienceRow } from './StackExperienceRow'
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
    textTransform: 'uppercase',
    color: COLORS.PRIMARY,
    fontSize: 16,
    marginBottom: 4,
    marginTop: 10,
  },
  infoSectionSubtitle: {
    textTransform: 'uppercase',
    marginBottom: 2,
    marginTop: 5,
    fontSize: 14,
  },
  cvTitle: {
    textTransform: 'uppercase',
    color: COLORS.PRIMARY,
    fontSize: 22,

    marginBottom: 2,
    marginTop: 2,
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

    marginBottom: '-12px'
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
const CURRENT_AGE = 21

export const CV = React.forwardRef<HTMLDivElement>((props, ref) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div ref={ref}>
      <div className={classes.root}>
        <div className={classes.infoSection}>
          <img
            src={HIDE_PROFILE_IMAGE ? randomImage : profileImage}
            className={classes.profileImage}
            alt="Imagem de perfil do curriculo"
          />

          <div className={classes.textContainer}>
            <p className={classes.infoSectionTitle}>{t('contact')}</p>

            <p className={classes.infoSectionSubtitle}>{t('email')}</p>
            <CVText>raphaelhenrique2013@outlook.com</CVText>
            <CVText style={{ marginTop: '-2px' }} >rapha.lei8@gmail.com</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionSubtitle}>{t('residence')}</p>
            <CVText>Sagrada Família, Belo Horizonte, Minas Gerais, {t('brazil')}</CVText>

            <hr style={{ margin: '2px' }} />

            <div className={classes.socialsContainer}>
              <div style={{ marginTop: 0 }}>
                <p className={classes.infoSectionSubtitle}>{t('linkedin')}</p>
                <a
                  href="https://www.linkedin.com/in/raphaelbleivas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 6, marginBottom: 6 }}
                >
                  /raphaelbleivas/
                </a>
              </div>

              <div style={{ marginTop: 0 }}>
                <p className={classes.infoSectionSubtitle}>{t('github')}</p>
                <a
                  href="https://github.com/RaphaelLeivas"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginTop: 6, marginBottom: 6 }}
                >
                  /RaphaelLeivas
                </a>
              </div>
            </div>

            <hr style={{ margin: '2px' }} />

            <div className={classes.phoneContainer}>
              <div className={classes.wppIcon}>
                <WhatsappIcon />

              </div>
              <div className={classes.phoneInfo}>
                <p className={classes.infoSectionSubtitle}>{t('phone')} / {t('whatsapp')}</p>
                <CVText>(31) 9 9563 - 2802</CVText>
              </div>
            </div>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle} style={{ fontSize: 15 }}>{t('stackExperience')}</p>
          </div>

          <StackExperienceRow Icon={ReactIcon} name="ReactJS" experience={`2 ${t('years')}`} />

          <StackExperienceRow Icon={ReactIcon} name="React-Native" experience={`1 ${t('year')}`} />

          <StackExperienceRow
            Icon={TypescriptIcon}
            name="Typescript"
            experience={`1 ${t('year')}`}
          />

          <StackExperienceRow Icon={NodejsIcon} name="NodeJS" experience={`2 ${t('years')}`} />

          <StackExperienceRow
            Icon={NodejsIcon}
            name="ExpressJS"
            experience={`2 ${t('years')}`}
          />

          <StackExperienceRow
            src={apiIcon}
            name="API REST"
            experience={`2 ${t('years')}`}
          />

          <StackExperienceRow
            src={databaseIcon}
            name="SQLite / PostgreSQL"
            experience={`6 ${t('months')}`}
          />

          <StackExperienceRow Icon={MongodbIcon} name="MongoDB" experience={`6 ${t('months')}`} />

          <StackExperienceRow Icon={AwsIcon} name="AWS / DevOps" experience={`2 ${t('months')}`} />

          <StackExperienceRow
            Icon={JavascriptIcon}
            name="JS / HTML / CSS"
            experience={`2 ${t('years')}`}
          />

          <StackExperienceRow src={scrumIcon} name="Scrum" experience={`2 ${t('years')}`} />
        </div>

        <div className={classes.experienceSection}>
          <p className={classes.cvTitle}>Raphael Henrique Braga Leivas</p>
          <p className={classes.cvSubTitle}>
            {' '}
            {t('subtitle')} - {CURRENT_AGE} {t('age')}
          </p>

          <p className={classes.infoSectionTitle}>{t('professionalExperience')}</p>

          <ProfessionalExperienceRow
            role={t('techinicianDeveloper')}
            company={t('finatec')}
            dateStart={'16 ' + t('february') + ' 2022'}
            dateEnd={'16 ' + t('january') + ' 2023'}
            activities={[t('techinician1'), t('techinician2'), t('techinician3'), t('techinician4')]}
          />

          <ProfessionalExperienceRow
            role={t('developmentIntern')}
            company={t('visuri')}
            dateStart={'14 ' + t('december') + ' 2020'}
            dateEnd={'15 ' + t('february') + ' 2022'}
            activities={[t('developmentIntern1'), t('developmentIntern2'), t('developmentIntern3')]}
          />

          <ProfessionalExperienceRow
            role={t('leadingDeveloper')}
            company={t('cpejr')}
            dateStart={'01 ' + t('july') + ' 2021'}
            dateEnd={'31 ' + t('december') + ' 2021'}
            activities={[t('leadingDeveloper1'), t('leadingDeveloper2'), t('leadingDeveloper3')]}
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

          <p className={classes.infoSectionTitle}>{t('academicFormation')}</p>

          <ProfessionalExperienceRow
            role={t('systemsEngineerUndergraduate')}
            company={t('ufmg')}
            dateStart={'03 ' + t('march') + ' 2020'}
            dateEnd={'31 ' + t('december') + ' 2026'}
            activities={[t('ufmg1')]}
            borderless
          />

          <ProfessionalExperienceRow
            role={t('cefetTechinician')}
            company={t('cefet')}
            dateStart={'01 ' + t('february') + ' 2017'}
            dateEnd={'31 ' + t('november') + ' 2019'}
            activities={[t('cefet1')]}
            borderless
          />

          <p className={classes.infoSectionTitle}>{t('languages')}</p>

          <div className={classes.languagesList}>
            <div className={classes.distanceInfoContainer}>
              <CVText>{t('portuguese')}:</CVText>
              <CVText>{t('native')}</CVText>
            </div>

            <div className={classes.distanceInfoContainer}>
              <CVText>{t('english')}:</CVText>
              <CVText>{t('advanced')}</CVText>
            </div>

            <div className={classes.distanceInfoContainer}>
              <CVText>{t('german')}:</CVText>
              <CVText>{t('basic')}</CVText>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
