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
            <p className={classes.infoSectionTitle}>Birthday</p>
            <CVText>17/10/2001</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>Civil status</p>
            <CVText>Single, no children</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>E-Mail</p>
            <CVText>raphaelhenrique2013@outlook.com</CVText>
            <CVText style={{ marginTop: '-2px' }} >rapha.lei8@gmail.com</CVText>

            <hr style={{ margin: '2px' }} />

            <p className={classes.infoSectionTitle}>Residential Address</p>
            <CVText>Street Célia de Souza 322 apto 201, Sagrada Família, Belo Horizonte, Minas Gerais, Brazil</CVText>

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
                <p className={classes.infoSectionTitle}>Phone / {t('whatsapp')}</p>
                <CVText>+55 (31) 9 9563 - 2802</CVText>
              </div>
            </div>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>Knowledge and skills</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText>Teamwork, Leadership</CVText></li>
              <li><CVText>Problem Solving</CVText></li>
              <li><CVText>Proactivity</CVText></li>
              <li><CVText>Passionate about technology, software and science</CVText></li>
              <li><CVText>Strive for excellence and high quality standards</CVText></li>
            </ul>

            <hr style={{ margin: '2px', marginBottom: '8px' }} />

            <p className={classes.infoSectionTitle}>Languages</p>
            <ul style={{ listStyle: 'square', paddingLeft: 16 }}>
              <li><CVText><b>Portuguese</b>: Native Language</CVText></li>
              <li><CVText><b>English</b>: Excellent knowledge</CVText></li>
              <li><CVText><b>German</b>: B1 - onSET Deutsch</CVText></li>
              <li><CVText><b>Spanish</b>: Elementary language use</CVText></li>
            </ul>
          </div>
        </div>

        <div className={classes.experienceSection}>
          <p className={classes.infoSectionTitleRight}>Profile</p>

          <CVText>
            Engineering student with 2 years of professional experience and completed technician course.
            Currently I am focusing exclusively on my university studies and academic opportunities.
            In the future, I seek to participate in 
            engineering research and innovation either at companies or graduate programs.
          </CVText>

          <p className={classes.infoSectionTitleRight}>Professional Experience</p>

          <ProfessionalExperienceRow
            role={"Technician Developer"}
            company={"Foundation of Scientific and Technological Enterprises - Finatec"}
            dateStart={"16 February 2022"}
            dateEnd={"21 March 2023"}
            activities={[
              "Development and maintenance of web systems, mobile applications and REST API for electrical stimulation devices using NodeJS, React Native, Typescript, SQLite and Bluetooth 5.0 communication.",
              "Experience in an interdisciplinary team for project development. Conflict resolution to meet project requirements and deadlines.",
              "Flexibility and communication with medical professionals during product development."
            ]}
          />

          <ProfessionalExperienceRow
            role={"Development Intern"}
            company={"Visuri Equipments and Services SA"}
            dateStart={"14 December 2020"}
            dateEnd={"15 February 2022"}
            activities={[
              "Development of a web system to manage quick COVID-19 tests using NodeJS, React, ExpressJS, MongoDB.",
              "Equipment testing, medical equipment maintenance. Reporting. Experience in organization, maintenance management and quality control."
            ]}
          />

          <ProfessionalExperienceRow
            role={"Technology Consultant / Lead Developer"}
            smallRole
            company={"Junior Electrical Projects and Consulting - CPE Jr"}
            dateStart={"1 January 2021"}
            dateEnd={"31 December 2021"}
            activities={[
              "Development of web systems with NodeJS, React, DynamoDB, ExpressJS.",
              "Technical support of a 5 consultant-team with development tasks. Responsible for the final quality of the code and product.",
              "Firmware development with ESP32 for measuring temperature and acceleration sensors, with communication via Wi-Fi with developed REST API, for remote monitoring of equipments and engines."
            ]}
            borderless
          />

          <p className={classes.infoSectionTitleRight}>Academic Formation</p>

          <ProfessionalExperienceRow
            role={"Systems Engineering"}
            company={"Federal University of Minas Gerais - UFMG"}
            dateStart={"3 March 2020"}
            dateEnd={"31 December 2026"}
            activities={[
              "Currently in the 7th semester of Systems Engineering course, total of 12.",
              "Average performance coefficient of 84.92, as shown in the university records.",
              "One-year voluntary scientific initiation in biomedical engineering, research project entitled “Wearable neuromuscular electrical stimulation system controlled by a mobile application” in the biomedical engineering laboratory.",
              "Three months of voluntary scientific initiation in aerospace technology, development of an unmanned aircraft for emergency services with the Mechatronics, Control and Robotics group - MACRO.",
              "Scholarship for Undergraduate Monitor / Tutor in Calculus III (Vector Calculus) by the Faculty of Mathematics of the Institute of Exact Sciences (ICEx) for the year 2023.",
              "Representation of School of Engineering Athletics at university competitions CIA 2022 and Engenharíadas Mineiro 2022 - Chess team, gold medalist.",
              "Volunteer for two weeks at the Summer School of Brazilian Studies 2023. Intercultural exchange with students from over 20 different countries."
            ]}
          />

          <ProfessionalExperienceRow
            role={"Technician Course"}
            company={"Federal Center of Technological Education of Minas Gerais - CEFET-MG"}
            dateStart={"1 February 2017"}
            dateEnd={"29 November 2019"}
            activities={[
              "Technician in Biomedical Equipments.",
              "Completed high school with an average coefficient of performance of 86.64.",
              "Awarded 2nd place at the 29th META, with the development and presentation of an electronic project entitled “Use of accelerometers in physiotherapy recovery”.",
            ]}
            borderless
          />
        </div>
      </div>
    </div>
  )
})
