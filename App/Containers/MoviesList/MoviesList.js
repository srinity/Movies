import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { MovieCard } from '../../Components'

import styles from './MoviesList.Styles'

function MoviesList({ data, onMoviePress, ...props }) {
  const renderItem = ({ item }) => {
    return <MovieCard {...item} onPress={() => onMoviePress(item)} />
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.containerStyle}
      {...props}
    />
  )
}

MoviesList.defaultProps = {
  onMoviePress: () => {}
}

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ...MovieCard.propTypes
    })
  ),
  onMoviePress: PropTypes.func
}

export default MoviesList
