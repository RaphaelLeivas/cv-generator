import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import profileImage from '../assets/images/profile.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 'small',
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
  },
  experienceSection: {
    flex: 2,
    border: '1px solid green',
    padding: 20,

  },
  profileImage: {
    borderRadius: '50%',
    width: '200px',
  }
}))

export const CV = React.forwardRef<HTMLDivElement>((props, ref) => {
  const classes = useStyles()

  return (
    <div ref={ref}>
      <div className={classes.root}>
        <div className={classes.infoSection}>
          <img
            src={profileImage}
            className={classes.profileImage}
            alt="Imagem de perfil do curriculo"
          />

          <div className={classes.stackExperience}>

          </div>

        </div>
        <div className={classes.experienceSection}>

        </div>
      </div>
    </div>
  )
})
