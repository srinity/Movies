import React, { Component } from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'

import { Screen } from '../../Components'

import styles from './Movie.Styles'

class Movie extends Component {
  onBackPress = () => {
    const { navigation } = this.props

    navigation.pop()
  }

  render() {
    console.tron.warn(this.props)
    return (
      <Screen withBack onBackPress={this.onBackPress}>
        <Text>Movie Details Screen</Text>
      </Screen>
    )
  }
}

Movie.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func
  })
}

export default Movie
