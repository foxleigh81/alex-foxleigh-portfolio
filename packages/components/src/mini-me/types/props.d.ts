export default interface Props {
  /**
   * The name of the mini-me to use
   */
  name: string
  /**
   * The width (in pixels) of the mini-me 
   * @default: 200
   */
  width?: number
  /**
   * The position of the mini-me, can be one of 'left', 'right' or 'none'
   * @default: 'right'
   */
  position?: 'left' | 'right' | 'none'
  /**
   * The ability to add custom classes
   */
  classes?: string
}
