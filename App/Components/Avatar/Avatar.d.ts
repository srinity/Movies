import { Component } from 'react'

export interface AvatarData {
  /**
   * The id of the movie.
   *
   */
  id: number

  /**
   * The image of the avatar/actor/actress.
   *
   */
  image: string

  /**
   * The name of the avatar/actor/actress.
   *
   */
  name: string
}

export interface AvatarProps extends AvatarData {}

export default class Avatar extends Component<AvatarProps> {}
