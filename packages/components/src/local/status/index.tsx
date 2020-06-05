import React from 'react'
import moment from 'moment'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Render component */
export const Status: React.FC<Props> = ({ status, date }: Props) => {
  const prettyDate = date ? moment(date, 'DD/MM/YY').format('dddd, Do MMMM, YYYY') : null
  switch(status) {
    default:
    case 'available': 
      return (
        <div>
          <p>I am currently available for work. Please <a href="">Get in touch</a> for more information</p>
        </div>
      )
      break
    case 'unavailable':
        return (
          <div>
            <p>I'm currently fully-booked. {date && <>I expect have availability again on { prettyDate }</>}</p>
          </div>
        )
    case 'holiday':
      return (
        <div>
          <p>I'm currently taking a well-deserved break. {date && <>I should be available again on { prettyDate }</>}</p>
        </div>
      )
  }
}
  

export default Status
