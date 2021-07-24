import { Component } from 'react'

// eslint-disable-next-line import/named
import { BadgeItem } from '../BadgeList/BadgeList'

export interface MovieDetails {
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
   * The overview of the movie.
   *
   */
  overview: string

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

export interface MovieInfoProps
  extends Omit<MovieDetails, 'genres' | 'releaseDate' | 'overview'> {}

export default class MovieInfo extends Component<MovieInfoProps> {}
