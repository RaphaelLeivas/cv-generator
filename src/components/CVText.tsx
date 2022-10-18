import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

interface CVTextProps {
  children?: React.ReactNode
}

const useStyles = makeStyles((theme) => ({
  CVText: {
    marginTop: 6,
    marginBottom: 6,
  },
}))

export const CVText = ({ children }: CVTextProps) => {
  const classes = useStyles()

  return <p className={classes.CVText}>{children}</p>
}
