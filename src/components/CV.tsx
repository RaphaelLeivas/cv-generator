import React from 'react'
import { useTranslation } from 'react-i18next'

import profileImage from '../assets/images/profile.jpeg'
import randomImage from '../assets/images/random.jpg'
import { useStyles } from '../styles/useStyles'

// stack icons / SVG
import { ReactComponent as WhatsappIcon } from '../assets/images/whatsappIcon.svg'
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedinIcon.svg'
import { ReactComponent as GitHubIcon } from '../assets/images/githubIcon.svg'
import { ReactComponent as ReactIcon } from '../assets/images/stack/reactIcon.svg'
import { ReactComponent as TypescriptIcon } from '../assets/images/stack/typescriptIcon.svg'
import { ReactComponent as JavascriptIcon } from '../assets/images/stack/javascriptIcon.svg'
import { ReactComponent as NodejsIcon } from '../assets/images/stack/nodejsIcon.svg'
import { ReactComponent as MongodbIcon } from '../assets/images/stack/mongodbIcon.svg'
import { ReactComponent as AwsIcon } from '../assets/images/stack/awsIcon.svg'

import { StackExperienceRow } from './StackExperienceRow'
import { ProfessionalExperienceRow } from './ProfessionalExperienceRow'
import { CVText } from './CVText'

// stack icons / SVG
import databaseIcon from '../assets/images/stack/databaseIcon.png'
import scrumIcon from '../assets/images/stack/scrumIcon.png'
import apiIcon from '../assets/images/stack/apiIcon.png'

const HIDE_PROFILE_IMAGE = false
// const CURRENT_AGE = 21

interface CVProps {
  isAcademic: boolean
}

export const CV = React.forwardRef<HTMLDivElement, CVProps>((props, ref) => {
  const classes = useStyles()
  const { isAcademic } = props
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

          <p className={classes.cvTitle}>Raphael Henrique Braga Leivas</p>

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

            {!isAcademic && (
              <>
                <hr style={{ margin: '2px' }} />
                <div className={classes.phoneContainer}>
                  <div className={classes.linkedinIcon}>
                    <GitHubIcon />
                  </div>
                  <div className={classes.phoneInfo}>
                    <p className={classes.infoSectionTitle}>GitHub</p>
                    <a
                      href="https://github.com/RaphaelLeivas"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginTop: 6, marginBottom: 6 }}
                    >
                      /RaphaelLeivas/
                    </a>
                  </div>
                </div>
              </>
            )}

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>{t('knowlegde')}</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>{t('knowlegde1')}</CVText></li>
              <li><CVText>{t('knowlegde2')}</CVText></li>
              <li><CVText>{t('knowlegde3')}</CVText></li>
              <li><CVText>{t('knowlegde4')}</CVText></li>
              <li><CVText>{t('knowlegde5')}</CVText></li>
            </ul>

            {isAcademic ? <>
              <hr style={{ margin: '2px', marginBottom: '8px' }} />
              <p className={classes.infoSectionTitle}>{t('languages')}</p>
              <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
                <li><CVText><b>{t('language1Name')}</b>: {t('language1Level')}</CVText></li>
                <li><CVText><b>{t('language2Name')}</b>: {t('language2Level')}</CVText></li>
                <li><CVText><b>{t('language3Name')}</b>: {t('language3Level')}</CVText></li>
                <li><CVText><b>{t('language4Name')}</b>: {t('language4Level')}</CVText></li>
                <li><CVText><b>{t('language5Name')}</b>: {t('language5Level')}</CVText></li>
              </ul>
            </> : null}

            {!isAcademic && (
              <>
                <hr style={{ margin: '2px', marginBottom: '8px' }} />
                <p className={classes.infoSectionTitle} style={{ fontSize: 15 }}>{t('stackExperience')}</p>
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
              </>
            )}
          </div>
        </div>

        <div className={classes.experienceSection}>
          {isAcademic ? <>
            <p className={classes.infoSectionTitleRight}>{t('profile')}</p>

            <CVText>
              {t('profileText')}
            </CVText>
          </> : null}

          <p className={classes.infoSectionTitleRight}>{t('professionalExperience')}</p>

          <ProfessionalExperienceRow
            role={t('techinicianDeveloper')}
            company={t('finatec')}
            dateStart={t('dateStartFinatec')}
            dateEnd={t('dateEndFinatec')}
            activities={isAcademic ? [
              t('techinician1'),
              t('techinician2'),
              t('techinician3'),
              t('techinician4'),
            ] : [
              t('techinician1'),
              t('techinician4'),
              t('techinician5'),
              t('techinician6'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('developmentIntern')}
            company={t('visuri')}
            dateStart={t('dateStartVisuri')}
            dateEnd={t('dateEndVisuri')}
            activities={isAcademic ? [
              t('developmentIntern1'),
              t('developmentIntern2'),
            ] : [
              t('developmentIntern1'),
              t('developmentIntern3'),
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
            activities={isAcademic ? [
              t('ufmg1'),
              t('ufmg2'),
              t('ufmg3'),
              t('ufmg4'),
              t('ufmg5'),
              t('ufmg6'),
              t('ufmg7'),
            ] : [
              t('ufmg1'),
              t('ufmg3'),
              t('ufmg4'),
            ]}
          />

          <ProfessionalExperienceRow
            role={t('cefetTechinician')}
            company={t('cefet')}
            dateStart={t('dateStartCefet')}
            dateEnd={t('dateEndCefet')}
            activities={isAcademic ? [
              t('cefet1'),
              t('cefet2'),
              t('cefet3'),
            ] : [
              t('cefet1'),
            ]}
            borderless
          />
        </div>
      </div>
    </div>
  )
})
