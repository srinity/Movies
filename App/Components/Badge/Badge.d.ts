import { Component } from 'react'
import { TextProps, ViewStyle, TextStyle, StyleProp } from 'react-native'

export interface BadgeProps extends Omit<TextProps, 'style'> {
  /**
   * The name that will appear in the badge
   *
   */
  name: string

  /**
   * optional custom styles for the container
   *
   */
  style: StyleProp<ViewStyle>

  /**
   * optional custom styles for the name text
   *
   */
  textStyle: StyleProp<TextStyle>
}

export default class Badge extends Component<BadgeProps> {}
