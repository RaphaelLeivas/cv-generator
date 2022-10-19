import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import profileImage from '../assets/images/profile.jpeg'
import randomImage from '../assets/images/random.jpg'
import { LOREM_IPSUM_TEXT } from '../constants/random'
import { COLORS } from '../constants/colors'

// stack icons / SVG
import { ReactComponent as ReactIcon } from '../assets/images/stack/reactIcon.svg'
import { ReactComponent as TypescriptIcon } from '../assets/images/stack/typescriptIcon.svg'
import { ReactComponent as JavascriptIcon } from '../assets/images/stack/javascriptIcon.svg'
import { ReactComponent as NodejsIcon } from '../assets/images/stack/nodejsIcon.svg'
import { ReactComponent as MongodbIcon } from '../assets/images/stack/mongodbIcon.svg'

// stack icons / SVG
import databaseIcon  from '../assets/images/stack/databaseIcon.png'
import scrumIcon  from '../assets/images/stack/scrumIcon.png'
import apiIcon  from '../assets/images/stack/apiIcon.png'

import { StackExperienceRow } from './StackExperienceRow'
import { ProfessionalExperienceRow } from './ProfessionalExperienceRow'
import { CVText } from './CVText'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: `Verdana`,
    fontSize: 12,

    minHeight: '400px',

    display: 'flex',
    flexDirection: 'row',
  },
  infoSection: {
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'lightGray',
    padding: 20,
  },
  stackExperience: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    marginTop: '32px',
  },
  experienceSection: {
    flex: 2,
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottom: '1px solid #00000022',
  },
  infoSectionTitle: {
    textTransform: 'uppercase',
    color: COLORS.PRIMARY,
    fontSize: 16,
    marginBottom: 4,
  },
  infoSectionSubtitle: {
    textTransform: 'uppercase',
    marginBottom: 2,
    fontSize: 14,
  },
}))

const HIDE_PROFILE_IMAGE = false

export const CV = React.forwardRef<HTMLDivElement>((props, ref) => {
  const classes = useStyles()

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
            <p className={classes.infoSectionTitle}>Contato</p>

            <p className={classes.infoSectionSubtitle}>Email</p>
            <CVText>raphaelhenrique2013@gmail.com</CVText>

            <p className={classes.infoSectionSubtitle}>Residência</p>
            <CVText>Bairro Sagrada Família, Belo Horizonte, MG, Brasil</CVText>

            <p className={classes.infoSectionSubtitle}>Telefone</p>
            <CVText>(31) 9 9563 - 2802</CVText>

            <p className={classes.infoSectionSubtitle}>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/raphaelbleivas/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 6, marginBottom: 6 }}
            >
              /raphaelbleivas/
            </a>

            {/* <p className={classes.infoSectionTitle}>Linguagens</p>

            <div className={classes.distanceInfoContainer}>
              <CVText>Português</CVText>
              <CVText>Nativo</CVText>
            </div>

            <div className={classes.distanceInfoContainer}>
              <CVText>Inglês</CVText>
              <CVText>Avançado</CVText>
            </div>

            <div className={classes.distanceInfoContainer}>
              <CVText>Alemão</CVText>
              <CVText>Básico</CVText>
            </div> */}

            <p className={classes.infoSectionTitle}>Experiência por Stack</p>
          </div>

          <StackExperienceRow Icon={ReactIcon} name="ReactJS" experience="2 anos" />

          <StackExperienceRow Icon={ReactIcon} name="React-Native" experience="1 ano" />

          <StackExperienceRow Icon={TypescriptIcon} name="Typescript" experience="1 ano" />

          <StackExperienceRow Icon={NodejsIcon} name="NodeJS" experience="2 anos" />

          <StackExperienceRow Icon={NodejsIcon} name="ExpressJS" experience="2 anos" />

          <StackExperienceRow src={apiIcon} name="API REST" experience="2 anos" />

          <StackExperienceRow src={databaseIcon} name="SQLite / PostgreSQL" experience="6 meses" />

          <StackExperienceRow Icon={MongodbIcon} name="MongoDB" experience="6 meses" />

          <StackExperienceRow Icon={JavascriptIcon} name="JS / HTML / CSS" experience="2 anos" />

          <StackExperienceRow src={scrumIcon} name="Metodologia Scrum" experience="2 anos" />
        </div>

        <div className={classes.experienceSection}>
          <p>Raphael Henrique Braga Leivas</p>
          <p>Desenvolvedor React / React Native</p>

          <p>Perfil</p>
          <p>{LOREM_IPSUM_TEXT}</p>

          <p>Experiência Profissional</p>

          <ProfessionalExperienceRow
            role="Teste"
            company="Teste"
            dateStart="Teste"
            dateEnd="Teste"
            activities="Teste"
          />
        </div>
      </div>
    </div>
  )
})
