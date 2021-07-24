import { Component } from 'react'
import { TextProps, ViewStyle, TextStyle, StyleProp } from 'react-native'

export type BadgeItem = {
  id: number
  name: string
}

export interface BadgeListProps extends Omit<TextProps, 'style'> {
  /**
   * The name that will appear in the badge.
   *
   */
  data: BadgeItem[]

  /**
   * optional custom styles for the container.
   *
   */
  containerStyle: StyleProp<ViewStyle>

  /**
   * optional custom styles for the item container.
   *
   */
  itemStyle: StyleProp<ViewStyle>

  /**
   * optional custom styles for the each item text
   *
   */
  itemTextStyle: StyleProp<TextStyle>
}

export default class BadgeList extends Component<BadgeListProps> {}
