import React from 'react'
import moment from 'moment'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import { Button } from '../button'

const contactMe = () => console.log('This will go to the contact page or email me')
const downloadCV = () => console.log('This will download my cv')

/* Render component */
export const Status: React.FC<Props> = ({ status, date }: Props) => {
  const prettyDate = date ? moment(date, 'DD/MM/YY').format('Do MMMM, YYYY') : null
  
  let inner

  switch(status) {
    default:
    case 'available': 
      inner = <>
        <p>I am currently <strong>available for work.</strong></p>
        <p>For more information, click below:</p>
        <div className={styles.buttons}>
          <Button classes="welcome-button add-shadow" action={contactMe}>Get in touch</Button>
          <Button classes="add-shadow" action={downloadCV}>Download CV</Button>
        </div>
      </>
      break
    case 'unavailable':
      inner = <>
        <p>I'm currently <strong>fully-booked.</strong> <br /> {date && <>I should be available from: <br /> <span className={styles.date}>{ prettyDate }</span></>}</p>
        <div className={styles.buttons}>
          <Button action={downloadCV}>Download CV</Button>
        </div>
      </>
      break
    case 'holiday':
      inner = <>
        <p>I'm currently taking a well-deserved break. {date && <>I should be available again on { prettyDate }</>}</p>
      </>
      break
  }
  
  return <div className={styles.status}>{inner}</div>
}
  

export default Status
