import { Component } from 'react'

// eslint-disable-next-line import/named
import { BadgeItem } from '../BadgeList/BadgeList'
// eslint-disable-next-line import/named
import { TouchableComponentProps } from '../TouchableComponent/TouchableComponent'

export interface MovieData {
  /**
   * The id of the movie.
   *
   */
  id: number

  /**
   * The image of the movie.
   *
   */
  image: string

  /**
   * The title of the movie.
   *
   */
  title: string

  /**
   * The release date of the movie.
   *
   */
  releaseDate: string

  /**
   * The genres of the movie.
   *
   */
  genres: BadgeItem[]

  /**
   * The average vote of the movie.
   *
   */
  voteAverage: number
}

export interface MovieCardProps extends MovieData, TouchableComponentProps {
  /**
   * Method that will be invoked when card is pressed.
   *
   */
  onPress(): void
}

export default class MovieCard extends Component<MovieCardProps> { }
