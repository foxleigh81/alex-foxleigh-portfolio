import * as React from 'react';

/* Import components */

import { Welcome } from '@components/welcome';

/* Import Stylesheet */
import styles from './styles.module.scss';

/* Render component */
export const Home: React.FC = () => (
  <div className={styles['page']}>
    <Welcome status="available" nextDate="01/06/22" miniMeName="available" />
  </div>
);

export default Home;
