import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as ReactIcon } from "../assets/images/stack/reactIcon.svg"

interface StackExperienceRowProps {
  icon: React.FunctionComponent
  name: string
  experience: string
}

const useStyles = makeStyles((theme) => ({
  stackExperienceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    marginTop: '32px'
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
  stackRowText: {
    flex: 1, 
    textAlign: 'center', 
    margin: 0,
    padding: 0,
    marginLeft: '8px',
  }
}))

export const StackExperienceRow = ({ icon, name, experience }: StackExperienceRowProps) => {
  const classes = useStyles()

  return (
    <div className={classes.stackExperienceContainer}>
      <div className={classes.stackItemRow}>
        <div className={classes.stackIconName}>
          <ReactIcon />
          <p className={classes.stackRowText}>{name}</p>
        </div>
        <p className={classes.stackRowText}>{experience}</p>
      </div>
    </div>
  )
}
