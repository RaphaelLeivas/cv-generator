import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

interface StackExperienceRowProps {
  Icon: React.FunctionComponent
  name: string
  experience: string
}

const useStyles = makeStyles((theme) => ({
  stackExperienceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    marginTop: 6,
  },
  stackItemRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
  },
  stackIconName: {
    flex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stackRowTopText: {
    width: '100%',
    textAlign: 'left',
    margin: 0,
    padding: 0,
  },
  stackRowBottomText: {
    width: '100%',
    textAlign: 'left',
    margin: 0,
    padding: 0,
  },
}))

export const StackExperienceRow = ({ Icon, name, experience }: StackExperienceRowProps) => {
  const classes = useStyles()

  return (
    <div className={classes.stackExperienceContainer}>
      <div className={classes.stackItemRow}>
        <div className={classes.iconContainer}>
          <Icon />
        </div>

        <div className={classes.stackIconName}>
          <p className={classes.stackRowTopText}>{name}</p>
          <p className={classes.stackRowBottomText}>{experience}</p>
        </div>
      </div>
    </div>
  )
}
