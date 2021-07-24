import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './MovieInfo.Styles'

function MovieInfo({ image, title, voteAverage, ...props }) {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={{ uri: image }}
        style={styles.imageStyle}
        resizeMode="stretch"
      />

      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.voteTextStyle}>{`${voteAverage * 10}%`}</Text>
    </View>
  )
}

MovieInfo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  voteAverage: PropTypes.number
}

export default MovieInfo
