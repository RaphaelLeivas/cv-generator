import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import profileImage from '../assets/images/profile.jpeg'
import randomImage from '../assets/images/random.jpg'

// stack icons / SVG
import { ReactComponent as ReactIcon } from "../assets/images/stack/reactIcon.svg"

import { StackExperienceRow } from './StackExperienceRow'

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: `Verdana`,
    border: '1px solid black',
    minHeight: '400px',

    display: 'flex',
    flexDirection: 'row',
  },
  infoSection: {
    flex: 1,
    border: '1px solid red',

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
    marginTop: '32px'
  },
  experienceSection: {
    flex: 2,
    border: '1px solid green',
    padding: 20,

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
}))

const DEV = true

export const CV = React.forwardRef<HTMLDivElement>((props, ref) => {
  const classes = useStyles()

  return (
    <div ref={ref}>
      <div className={classes.root}>
        <div className={classes.infoSection}>
          <img
            src={DEV ? randomImage : profileImage}
            className={classes.profileImage}
            alt="Imagem de perfil do curriculo"
          />

          <StackExperienceRow
            icon={ReactIcon}
            name="ReactJS"
            experience="2 anos"
          />
          <StackExperienceRow
            icon={ReactIcon}
            name="ReactJS"
            experience="2 anos"
          />
          <StackExperienceRow
            icon={ReactIcon}
            name="ReactJS"
            experience="2 anos"
          />
          <StackExperienceRow
            icon={ReactIcon}
            name="ReactJS"
            experience="2 anos"
          />

        </div>
        <div className={classes.experienceSection}>

        </div>
      </div>
    </div>
  )
})
