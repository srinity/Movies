import React, { Component } from 'react'
import { View, Text } from 'react-native'

import styles from './Movies.Styles'

class Movies extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Movies Screen</Text>
      </View>
    )
  }
}

export default Movies
