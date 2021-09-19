import React, { useRef } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { MovieCard } from '../../Components'

import styles from './MoviesList.Styles'

function MoviesList({ data, onMoviePress, onEndReached, ...props }) {
  const onEndReachedCalledDuringMomentum = useRef(false)

  const onMomentumScrollBegin = () => {
    onEndReachedCalledDuringMomentum.current = false
  }

  const _onEndReached = info => {
    if (!onEndReachedCalledDuringMomentum.current) {
      onEndReachedCalledDuringMomentum.current = true

      onEndReached?.(info)
    }
  }

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
      onEndReached={_onEndReached}
      onEndReachedThreshold={0.2}
      onMomentumScrollBegin={onMomentumScrollBegin}
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
  onMoviePress: PropTypes.func,
  onEndReached: PropTypes.func
}

export default MoviesList
