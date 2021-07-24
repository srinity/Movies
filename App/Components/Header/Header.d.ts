import { FC } from 'react'
import { TextProps } from 'react-native'

declare const Header: FC<HeaderProps>
export default Header

export interface HeaderProps extends TextProps {
  /**
   * The title of the header
   *
   */
  title?: string

  /**
   * Boolean value that controls whether to show the back button or not.
   *
   * @default false
   */
  withBack?: boolean

  /**
   * Method that will be invoked when back icon is pressed.
   *
   */
  onBackPress?(): void
}
