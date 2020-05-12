import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const Status: React.FC<Props> = ({ status }: Props) =>
  <div>
    I am currently {status}
  </div>

export default Status
