import { CSSProperties } from '@material-ui/core/styles/withStyles'
import React from 'react'

interface CVTextProps {
  children?: React.ReactNode
  style?: CSSProperties
  italic?: boolean
}

export const CVText = ({ children, style, italic }: CVTextProps) =>
  italic ? (
    <i
      style={{
        marginTop: 6,
        marginBottom: 6,
        ...style,
      }}
    >
      {children}
    </i>
  ) : (
    <p
      style={{
        marginTop: 6,
        marginBottom: 6,
        ...style,
      }}
    >
      {children}
    </p>
  )
