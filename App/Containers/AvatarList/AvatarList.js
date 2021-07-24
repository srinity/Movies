import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { Avatar } from '../../Components'

import styles from './AvatarList.Styles'

function AvatarList({ data, ...props }) {
  const renderItem = ({ item }) => {
    return <Avatar {...item} />
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      style={styles.containerStyle}
      {...props}
    />
  )
}

AvatarList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ...Avatar.propTypes
    })
  ),
  onMoviePress: PropTypes.func
}

export default AvatarList
