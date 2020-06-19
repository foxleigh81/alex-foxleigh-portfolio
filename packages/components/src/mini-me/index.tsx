import React from 'react'
import cx from 'classnames'

/* Import Types */
import Props from './types/props'

/* import SVGs */
import { ReactComponent as Phone } from './images/phone.svg' 
import { ReactComponent as AtDesk } from './images/at-desk.svg' 
import { ReactComponent as Available } from './images/available.svg' 
import { ReactComponent as Blushing } from './images/blushing.svg' 
import { ReactComponent as Skills } from './images/skills.svg' 
import { ReactComponent as Smile } from './images/smile.svg' 
import { ReactComponent as Beach } from './images/beach.svg' 


/* import styles */
import styles from './styles.module.scss'

/* Render component */
export const MiniMe: React.FC<Props> = ({ name, width, position, classes}: Props) => {
  
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
        case 'beach':
          return <Beach />
      case 'smile':
      default:
        return <Smile />
    }
  }



  return <div className={cx(styles['mini-me'], styles[`w-${width}`], classes)}>
    { selectMiniMe(name) }
    </div>
}


export default MiniMe
