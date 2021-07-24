import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import { isNaN as _isNaN } from 'lodash'
import moment from 'moment'

import BadgeList from '../BadgeList'
import TouchableComponent from '../TouchableComponent'

import styles from './MovieCard.Styles'

function MovieCard({
  image,
  title,
  releaseDate,
  genres,
  voteAverage,
  onPress,
  ...props
}) {
  return (
    <TouchableComponent onPress={onPress} {...props}>
      <View style={styles.containerStyle}>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
          resizeMode="stretch"
        />

        <View style={styles.infoContainerStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.dateTextStyle}>
            {moment(releaseDate).format('MMM D, YYYY')}
          </Text>

          <BadgeList data={genres} />
        </View>

        {!_isNaN(voteAverage) ? (
          <View style={styles.voteContainerStyle}>
            <Text style={styles.voteTextStyle}>{`${voteAverage * 10}%`}</Text>
          </View>
        ) : null}
      </View>
    </TouchableComponent>
  )
}

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  ),
  voteAverage: PropTypes.number,
  onPress: PropTypes.func
}

export default MovieCard
