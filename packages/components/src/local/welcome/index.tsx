import React from 'react'
import { capitalize } from 'lodash'
import cx from 'classnames'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import salutation from './helpers/salutation'

const { segment, lightLevel } = salutation()

/* Render component */
export const Welcome: React.FC<Props> = ({ name }: Props) =>
  <div className={cx(styles['block'], styles[lightLevel])}>
    <h1>Good {capitalize(segment)}!</h1>
    <h2>I'm Alex, I like to make things</h2>
  </div>

export default Welcome