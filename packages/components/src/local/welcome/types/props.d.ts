export default interface Props {
  /**
   * My current availability status
   */
  status: 'available' | 'unavailable' | 'holiday'
  /**
   * The date I expect my status to change
   */
  nextDate?: string
  /**
   * The mini-me to use
   */
  minime: 'available' | 'at-desk' | 'blushing' | 'skills' | 'phone' | 'smile'
  /**
   * The hour of day in 24 hour format. Used to force a specific time setting
   */
  hour?: number
}
