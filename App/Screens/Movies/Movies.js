import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Movies.Styles'

class Movies extends Component {
  componentDidMount() {
    const { getUpcomingMovies, genreList } = this.props
    getUpcomingMovies(genreList, 1)
  }

  render() {
    console.tron.warn(this.props)
    return (
      <View style={styles.containerStyle}>
        <Text>Movies Screen</Text>
      </View>
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
  )
}

export default Movies
