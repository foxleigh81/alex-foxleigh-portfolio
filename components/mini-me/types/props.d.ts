import { MiniMes } from '@afp/custom-types'

export default interface Props {
  /**
   * The name of the mini-me to use
   */
  name: MiniMes
  /**
   * The width (in pixels) of the mini-me 
   * @default: 200
   */
  width?: 'narrow' | 'regular' | 'wide'
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
