import { FC } from 'react'
import { FlatListProps } from 'react-native'

// eslint-disable-next-line import/named
import { MovieData } from '../../Components/MovieCard/MovieCard'

declare const MoviesList: FC<MoviesListProps>
export default MoviesList

export interface MoviesListProps
  extends Omit<
    FlatListProps<MovieData>,
    'data' | 'onEndReachedThreshold' | 'onMomentumScrollBegin'
  > {
  /**
   * The list of movies.
   *
   */
  data: MovieData[]

  /**
   * Method that will be invoked with the movie pressed.
   *
   */
  onMoviePress(movie: MovieCardProps): void
}
