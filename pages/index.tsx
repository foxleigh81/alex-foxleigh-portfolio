import * as React from 'react'

/* Import components */

import { Welcome } from '@components/welcome'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const Home: React.FC = () =>
  <div className={styles['page']}>
    <Welcome status="available" nextDate="01/04/23" miniMeName="available" />
  </div>

export default Home
