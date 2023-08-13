import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CVText } from './CVText'

interface ProfessionalExperienceRowProps {
  role: string
  company: string
  dateStart: string
  dateEnd: string
  activities?: string[]
  borderless?: boolean
}

const useStyles = makeStyles((theme) => ({
  professionalExperienceContainer: {
    display: 'flex',
    flexDirection: 'column',

    width: '100%',
    marginTop: 8,
  },
  professionalExperienceHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoSectionSubtitle: {
    textTransform: 'none',
    marginBottom: 2,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 600,
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
  borderless,
}: ProfessionalExperienceRowProps) => {
  const classes = useStyles()

  return (
    <div
      className={classes.professionalExperienceContainer}
      style={{ borderBottom: borderless ? 0 : '1px solid #00000033' }}
    >
      <div className={classes.professionalExperienceHeader}>
        <p className={classes.infoSectionSubtitle}>{role}</p>
        <CVText italic style={{ margin: 0, marginLeft: 4, fontSize: 10, textAlign: 'right' }}>
          {dateStart} - {dateEnd}
        </CVText>
      </div>

      <CVText italic style={{ fontSize: 13 }}>
        {company}
      </CVText>

      <ul style={{ marginTop: 4, marginBottom: 4, paddingLeft: 20 }}>
        {activities.map((activity, index) => (
          <li key={index} style={{ marginBottom: 4 }}>
            {activity}
          </li>
        ))}
      </ul>
    </div>
  )
}
