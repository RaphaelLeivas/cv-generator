import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CVText } from './CVText'

interface ProfessionalExperienceRowProps {
  role: string
  company: string
  dateStart: string
  dateEnd: string
  activities?: string[]
}

const useStyles = makeStyles((theme) => ({
  professionalExperienceContainer: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    marginTop: 8,
  },
  infoSectionSubtitle: {
    textTransform: 'uppercase',
    marginBottom: 2,
    marginTop: 2,
    fontSize: 14,
  },
  companyAndDates: {
    display: 'flex',
    flexDirection: 'row',
  },
}))

export const ProfessionalExperienceRow = ({
  role,
  company,
  dateStart,
  dateEnd,
  activities = [],
}: ProfessionalExperienceRowProps) => {
  const classes = useStyles()

  return (
    <div className={classes.professionalExperienceContainer}>
      <p className={classes.infoSectionSubtitle}>{role}</p>

      <CVText italic style={{ fontSize: 13 }}>{company}</CVText>
      <CVText italic style={{ marginTop: 2 }}>
        {dateStart} - {dateEnd}
      </CVText>

      <ul style={{ marginTop: 4, marginBottom: 4 }} >
        {activities.map((activity, index) => (
          <li key={index} style={{ marginBottom: 4 }}>{activity}</li>
        ))}
      </ul>

    </div>
  )
}
