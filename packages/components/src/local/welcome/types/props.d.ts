export default interface Props {
  /**
   * My current availability status
   */
  status: 'available' | 'unavailable' | 'holiday'
  /**
   * The mini-me to use
   */
  minime: 'available' | 'at-desk' | 'blushing' | 'skills' | 'phone' | 'smile'
}
