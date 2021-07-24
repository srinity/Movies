import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'
import { isNil as _isNil } from 'lodash'

import { Images } from '../../Theme'

import styles from './Avatar.Styles'

function Avatar({ image, name, ...props }) {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={_isNil(image) ? Images.avatar : { uri: image }}
        style={styles.imageStyle}
        resizeMode="cover"
      />

      <Text style={styles.titleStyle}>{name}</Text>
    </View>
  )
}

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default Avatar
