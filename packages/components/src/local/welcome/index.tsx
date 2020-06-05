import React from 'react'
import { capitalize } from 'lodash'
import cx from 'classnames'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import helpers */
import salutation from './helpers/salutation'
import MiniMe from '../mini-me'
import Status from '../status'


/* Render component */
export const Welcome: React.FC<Props> = ({ status, nextDate, minime, hour }: Props) => { 
 const { segment, lightLevel } = salutation(hour || undefined)
 return <div className={cx(styles['block'], styles[lightLevel])}>
    <h1>{capitalize(segment)}</h1>
    <h2>I'm Alex, I like to make things</h2>
    <MiniMe name={minime} />
    <div style={{
      position: 'absolute',
      left: '5rem',
      bottom: '8rem'
    }}>
      <Status status={status} date={nextDate} />
    </div>
  </div>
}

export default Welcome
