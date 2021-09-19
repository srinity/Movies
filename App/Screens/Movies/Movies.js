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
    this.getUpcomingMoviesPage(true)
  }

  onSelectedTabChange = tab => {
    const { movies } = this.props

    switch (tab.label) {
      case TABS_DATA[1].label: {
        if (_isEmpty(movies.popular)) {
          this.getPopularMoviesPage(true)
        }

        break
      }
      case TABS_DATA[2].label: {
        if (_isEmpty(movies.topRated)) {
          this.getTopRatedMoviesPage(true)
        }

        break
      }
    }
  }

  onMoviePress = movie => {
    const { navigation } = this.props

    navigation.navigate('Movie', { movieId: movie.id })
  }

  getUpcomingMoviesPage = (initialPage = false) => {
    const { getUpcomingMovies, genreList, currentPage, totalPages } = this.props

    getUpcomingMovies(
      genreList,
      currentPage?.upcoming + 1,
      totalPages.upcoming,
      initialPage
    )
  }

  getPopularMoviesPage = (initialPage = false) => {
    const { genreList, currentPage, totalPages, getPopularMovies } = this.props

    getPopularMovies(
      genreList,
      currentPage?.popular + 1,
      totalPages.popular,
      initialPage
    )
  }

  getTopRatedMoviesPage = (initialPage = false) => {
    const { genreList, currentPage, totalPages, getTopRatedMovies } = this.props

    getTopRatedMovies(
      genreList,
      currentPage?.topRated + 1,
      totalPages.topRated,
      initialPage
    )
  }

  renderProductsFooter = isAdditionalPagesLoading => {
    return isAdditionalPagesLoading ? (
      <View style={styles.footerIndicatorContainerStyle}>
        <ActivityIndicator color={Colors.brandColor} size="large" />
      </View>
    ) : null
  }

  renderMovieList = ({
    isLoading,
    isAdditionalPagesLoading,
    movies,
    onPressHandler,
    onEndReached,
    error
  }) => {
    if (error) {
      // TODO: Decide what the error will look like
      return null
    }

    return isLoading ? (
      <View style={styles.indicatorContainerStyle}>
        <ActivityIndicator color={Colors.brandColor} size="large" />
      </View>
    ) : (
      <MoviesList
        data={movies}
        onMoviePress={onPressHandler}
        onEndReached={() => onEndReached()}
        ListFooterComponent={this.renderProductsFooter(
          isAdditionalPagesLoading
        )}
      />
    )
  }

  render() {
    const { movies, isLoading, error, isAdditionalPagesLoading } = this.props
    console.tron.warn(this.props)
    return (
      <Screen title="Movies">
        <Tabs data={TABS_DATA} onSelectedTab={this.onSelectedTabChange}>
          <Tabs.Tab index={0}>
            {this.renderMovieList({
              isLoading: isLoading.upcoming,
              isAdditionalPagesLoading: isAdditionalPagesLoading.upcoming,
              movies: movies.upcoming,
              onPressHandler: this.onMoviePress,
              onEndReached: this.getUpcomingMoviesPage,
              error: error.upcoming
            })}
          </Tabs.Tab>

          <Tabs.Tab index={1}>
            {this.renderMovieList({
              isLoading: isLoading.popular,
              isAdditionalPagesLoading: isAdditionalPagesLoading.popular,
              movies: movies.popular,
              onPressHandler: this.onMoviePress,
              onEndReached: this.getPopularMoviesPage,
              error: error.popular
            })}
          </Tabs.Tab>

          <Tabs.Tab index={2}>
            {this.renderMovieList({
              isLoading: isLoading.topRated,
              isAdditionalPagesLoading: isAdditionalPagesLoading.topRated,
              movies: movies.topRated,
              onPressHandler: this.onMoviePress,
              onEndReached: this.getTopRatedMoviesPage,
              error: error.topRated
            })}
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
  }),
  error: PropTypes.shape({
    upcoming: PropTypes.object,
    topRated: PropTypes.object,
    popular: PropTypes.object
  }),
  isAdditionalPagesLoading: PropTypes.shape({
    upcoming: PropTypes.bool,
    topRated: PropTypes.bool,
    popular: PropTypes.bool
  }),
  currentPage: PropTypes.shape({
    upcoming: PropTypes.number,
    topRated: PropTypes.number,
    popular: PropTypes.number
  }),
  totalPages: PropTypes.shape({
    upcoming: PropTypes.number,
    topRated: PropTypes.number,
    popular: PropTypes.number
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default Movies
