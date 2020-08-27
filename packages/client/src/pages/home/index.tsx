import React from 'react'

/* Import components */

import { Welcome } from '@afp/components'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const Home: React.FC<Props> = ({ name, colour }: Props) =>
  <div className={styles[colour]}>
    This is an example component, the name provided to it was {name}
    <Welcome status="available" nextDate="25/12/20" miniMeName="available" />
  </div>

export default Home
