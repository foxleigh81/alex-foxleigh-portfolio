import React from 'react'

/* Import Types */
import Props from './types/props'

/* import SVGs */
import { ReactComponent as Phone } from './images/phone.svg' 
import { ReactComponent as AtDesk } from './images/at-desk.svg' 
import { ReactComponent as Available } from './images/available.svg' 
import { ReactComponent as Blushing } from './images/blushing.svg' 
import { ReactComponent as Skills } from './images/skills.svg' 
import { ReactComponent as Smile } from './images/smile.svg' 


/* import styles */
import styles from './styles.module.scss'

/* Render component */
export const MiniMe: React.FC<Props> = ({ name }: Props) => {
  
  const selectMiniMe = (name: string): any => {
    switch (name) {
      case 'available' :
        return <Available />
      case 'at-desk':
        return <AtDesk/>
      case 'blushing':
        return <Blushing />
      case 'skills':
        return <Skills />
      case 'phone':
        return <Phone />
      case 'smile':
      default:
        return <Smile />
    }
  }

  return <div className={styles['mini-me']}>
    { selectMiniMe(name) }
    </div>
}


export default MiniMe
