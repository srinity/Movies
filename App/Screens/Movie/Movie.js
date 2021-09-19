import React, { Component } from 'react'
import { Text, ScrollView, View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import { Screen, MovieInfo, BadgeList } from '../../Components'
import { AvatarList } from '../../Containers'

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

  renderError = () => {
    // TODO: Decide what the error will look like
    return null
  }

  renderContent = (movieDetails, movieCredits) => {
    return (
      <ScrollView style={styles.containerStyle}>
        <MovieInfo {...movieDetails} />

        <Text style={styles.headerTextStyle}>Overview</Text>
        <Text style={styles.overviewTextStyle}>{movieDetails?.overview}</Text>

        <Text style={styles.headerTextStyle}>Genres</Text>
        <BadgeList
          data={movieDetails?.genres}
          itemTextStyle={styles.badgeTextStyle}
          containerStyle={styles.badgeListContainerStyle}
        />

        <Text style={styles.headerTextStyle}>Credits</Text>
        <AvatarList data={movieCredits} />
      </ScrollView>
    )
  }

  render() {
    const {
      movieDetails,
      movieCredits,
      isMovieDetailsLoading,
      isMovieCreditsLoading,
      movieDetailsError,
      movieCreditsError
    } = this.props

    console.tron.warn(this.props)
    return (
      <Screen withBack onBackPress={this.onBackPress}>
        {isMovieDetailsLoading || isMovieCreditsLoading
          ? this.renderLoading()
          : movieDetailsError || movieCreditsError
          ? this.renderError()
          : this.renderContent(movieDetails, movieCredits)}
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
