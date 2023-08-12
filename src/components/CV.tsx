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
            <p className={classes.infoSectionTitle}>Geburtsdaten</p>
            <CVText>17.10.2001</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>Zivilstand</p>
            <CVText>Ledig, keine Kinder</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>E-Mail</p>
            <CVText>raphaelhenrique2013@outlook.com</CVText>
            <CVText style={{ marginTop: '-2px' }} >rapha.lei8@gmail.com</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>Adresse</p>
            <CVText>Rua Célia de Souza, 322 apto 201, Sagrada Família, Belo Horizonte, Minas Gerais, {t('brazil')}</CVText>

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
                <p className={classes.infoSectionTitle}>Telefon / {t('whatsapp')}</p>
                <CVText>+55 (31) 9 9563 - 2802</CVText>
              </div>
            </div>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>Kenntnisse & Fähigkeiten</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>Teamarbeit, Führung</CVText></li>
              <li><CVText>Probleme lösen</CVText></li>
              <li><CVText>Proaktivität</CVText></li>
              <li><CVText>Leidenschaft für Technik, Software und Wissenschaft</CVText></li>
              <li><CVText>Streben nach Exzellenz und hohen Qualitätsstandards</CVText></li>
            </ul>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>Sprachen</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>Portugiesisch: Muttersprache</CVText></li>
              <li><CVText>Spanisch: elementares Sprachniveau</CVText></li>
              <li><CVText>Englisch: fortgeschrittenes Sprachniveau</CVText></li>
              <li><CVText>Deutsch: mittleres Sprachniveau</CVText></li>
            </ul>
          </div>
        </div>

        <div className={classes.experienceSection}>
          <p className={classes.infoSectionTitleRight}>Kurzprofil</p>

          <CVText>
            Student im Ingenieurwesen mit 2 Jahren Berufserfahrung und abgeschlossenem Technikerkurs. 
            Derzeit konzentriere ich mich ausschließlich auf das Universitätsstudium und die akademischen Möglichkeiten und 
            entwickle mein akademisches Profil, um nach dem Grundstudium eine weitere Hochschulausbildung in 
            ingenieurwissenschaftlicher Forschung und Innovation anzustreben.
          </CVText>

          <p className={classes.infoSectionTitleRight}>Berufliche Erfahrungen</p>

          <ProfessionalExperienceRow
            role={"Technischer Entwickler"}
            company={"Gründung wissenschaftlicher und technologischer Unternehmen - Finatec"}
            dateStart={"16. Februar 2022"}
            dateEnd={"21. Marsch 2023"}
            activities={[
              "Entwicklung mobiler Anwendungen für Elektrostimulationsgeräte unter Verwendung von NodeJS, React-Native, Typescript, SQLite und Bluetooth 5.0-Kommunikation.",
              "Entwicklung und Wartung von Websystemen und REST-API zur Schnittstelle mit der mobilen Anwendung unter Verwendung von React, PostgreSQL, ExpressJS.",
            ]}
          />

          <ProfessionalExperienceRow
            role={"Entwicklungspraktikant"}
            company={"Visuri-Ausrüstung und -Dienstleistungen LTDA"}
            dateStart={"14. Dezember 2020"}
            dateEnd={"15. Februar 2022"}
            activities={[
              "Entwicklung eines Websystems zur Verwaltung von COVID-19-Schnelltests mit NodeJS, React, ExpressJS, MongoDB.",
              "Gerätetests, Wartung medizinischer Geräte. Berichterstattung."
            ]}
          />

          <ProfessionalExperienceRow
            role={"Leitender Entwickler / Technologieberater"}
            company={"Beratung und Elektroprojekte Junior - CPE Jr"}
            dateStart={"1. Januar 2021"}
            dateEnd={"31. Dezember 2021"}
            activities={[
              "Entwicklung von Websystemen mit NodeJS, React, DynamoDB, ExpressJS.",
              "Unterstützung eines Teams von 5 Beratern bei Entwicklungsaufgaben. Verantwortlich für die endgültige Qualität des Codes und Produkts.",
            ]}
            borderless
          />

          <p className={classes.infoSectionTitleRight}>Ausbildung</p>

          <ProfessionalExperienceRow
            role={"Systemen Ingenieurwissenschaften"}
            company={"Bundesuniversität Minas Gerais - UFMG"}
            dateStart={"3. Marsch 2020"}
            dateEnd={"31. Dezember 2025"}
            activities={[
              "Derzeit im 7. Semester Systemen Ingenieurwissenschaften, von insgesamt 12.",
              "Durchschnittlicher Leistungskoeffizient von 84,92 , wie aus dem Schulzeugnis hervorgeht.",
              "Einjährige ehrenamtliche Bachelor-Forschungen in Biomedizintechnik, Forschungsprojekt mit dem Titel „Tragbares neuromuskuläres Elektrostimulationssystem, gesteuert durch eine mobile Anwendung“ im Labor für Biomedizintechnik.",
              "Zwei Monate lang ehrenamtliche Bachelor-Forschungen in Raumfahrttechnik, Entwicklung eines unbemannten Luftfahrzeugs für Rettungsdienste im Labor für Biomedizintechnik mit der Gruppe Mechatronik, Steuerung und Robotik - MACRO.",
              "Undergraduate Monitor-Stipendium für Infinitesimalrechnung III (Cálculo III) durch die Fakultät für Mathematik des Instituts für Exakte Wissenschaften (ICEx) im Jahr 2023.",
              "Vertretung von Schule für Ingenieurwissenschaften Leichtathletik bei den Universitätswettbewerben CIA 2022 und Engenharíadas Mineiro 2022 - Schachmannschaft, Goldmedaillengewinner"
            ]}
          />

          <ProfessionalExperienceRow
            role={"Technischer Kurs"}
            company={"Bundeszentrum für technologische Bildung von Minas Gerais - CEFET-MG"}
            dateStart={"1. Februar 2017"}
            dateEnd={"29. November 2019"}
            activities={[
              "Abitur abgeschlossen. Techniker für biomedizinische Geräte.",
              "Durchschnittlicher Leistungskoeffizient von 86,64.",
              "Advanced-Level-Zertifizierung - II in Englisch mit der CEFETMinas Foundation."
            ]}
            borderless
          />
        </div>
      </div>
    </div>
  )
})
