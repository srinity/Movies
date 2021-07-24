import React, { Component } from 'react'
import { Text, ScrollView, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { Screen, MovieInfo } from '../../Components'

import { Colors } from '../../Theme'

import styles from './Movie.Styles'

class Movie extends Component {
  componentDidMount() {
    const {
      getMovieDetailsAndCredits,
      route: { params }
    } = this.props

    getMovieDetailsAndCredits(params.movieId)
  }

  onBackPress = () => {
    const { navigation } = this.props

    navigation.pop()
  }

  renderLoading = () => {
    return (
      <View style={styles.indicatorContainerStyle}>
        <ActivityIndicator color={Colors.brandColor} size="large" />
      </View>
    )
  }

  render() {
    const { movieDetails, isMovieDetailsLoading, isMovieCreditsLoading } =
      this.props

    console.tron.warn(this.props)
    return (
      <Screen withBack onBackPress={this.onBackPress}>
        {isMovieDetailsLoading || isMovieCreditsLoading ? (
          this.renderLoading()
        ) : (
          <ScrollView style={styles.containerStyle}>
            <MovieInfo {...movieDetails} />
          </ScrollView>
        )}
      </Screen>
    )
  }
}

Movie.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func
  }),
  route: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.number
    })
  }),
  getMovieDetailsAndCredits: PropTypes.func,
  movieDetails: PropTypes.object,
  isMovieDetailsLoading: PropTypes.bool,
  movieDetailsError: PropTypes.object,
  movieCredits: PropTypes.array,
  isMovieCreditsLoading: PropTypes.bool,
  movieCreditsError: PropTypes.object
}

export default Movie
