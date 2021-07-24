import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { isEmpty as _isEmpty } from 'lodash'

import { Screen, Tabs } from '../../Components'

import { MoviesList } from '../../Containers'

import { Colors } from '../../Theme'

import styles from './Movies.Styles'

const TABS_DATA = [
  { label: 'Upcoming' },
  { label: 'Popular' },
  { label: 'Top Rated' }
]

class Movies extends Component {
  componentDidMount() {
    const { getUpcomingMovies, genreList } = this.props
    getUpcomingMovies(genreList, 1)
  }

  onSelectedTabChange = tab => {
    const { movies, genreList, getPopularMovies, getTopRatedMovies } =
      this.props

    switch (tab.label) {
      case TABS_DATA[1].label: {
        if (_isEmpty(movies.popular)) {
          getPopularMovies(genreList, 1)
        }

        break
      }
      case TABS_DATA[2].label: {
        if (_isEmpty(movies.topRated)) {
          getTopRatedMovies(genreList, 1)
        }

        break
      }
    }
  }

  onMoviePress = movie => {
    alert(movie.id)
  }

  renderMovieList = (isLoading, movies, onPressHandler) => {
    return isLoading ? (
      <View style={styles.indicatorContainerStyle}>
        <ActivityIndicator color={Colors.brandColor} size="large" />
      </View>
    ) : (
      <MoviesList data={movies} onMoviePress={onPressHandler} />
    )
  }

  render() {
    const { movies, isLoading } = this.props
    console.tron.warn(this.props)
    return (
      <Screen title="Movies">
        <Tabs data={TABS_DATA} onSelectedTab={this.onSelectedTabChange}>
          <Tabs.Tab index={0}>
            {this.renderMovieList(
              isLoading.upcoming,
              movies.upcoming,
              this.onMoviePress
            )}
          </Tabs.Tab>

          <Tabs.Tab index={1}>
            {this.renderMovieList(
              isLoading.popular,
              movies.popular,
              this.onMoviePress
            )}
          </Tabs.Tab>

          <Tabs.Tab index={2}>
            {this.renderMovieList(
              isLoading.topRated,
              movies.topRated,
              this.onMoviePress
            )}
          </Tabs.Tab>
        </Tabs>
      </Screen>
    )
  }
}

Movies.propTypes = {
  getUpcomingMovies: PropTypes.func,
  getPopularMovies: PropTypes.func,
  getTopRatedMovies: PropTypes.func,
  genreList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ),
  movies: PropTypes.shape({
    upcoming: PropTypes.array,
    topRated: PropTypes.array,
    popular: PropTypes.array
  }),
  isLoading: PropTypes.shape({
    upcoming: PropTypes.bool,
    topRated: PropTypes.bool,
    popular: PropTypes.bool
  })
}

export default Movies
