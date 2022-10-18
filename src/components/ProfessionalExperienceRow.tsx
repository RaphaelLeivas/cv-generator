import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

interface ProfessionalExperienceRowProps {
  role: string
  company: string
  dateStart: string
  dateEnd: string
  activities: string
}

const useStyles = makeStyles((theme) => ({
  professionalExperienceContainer: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    marginTop: '32px',
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
  },
}))

export const ProfessionalExperienceRow = ({
  role,
  company,
  dateStart,
  dateEnd,
  activities,
}: ProfessionalExperienceRowProps) => {
  const classes = useStyles()

  return (
    <div className={classes.professionalExperienceContainer}>
      <p>{role}</p>
      <p>{company}</p>
      <p>{dateStart}</p>
      <p>{dateEnd}</p>
      <p>{activities}</p>
    </div>
  )
}
