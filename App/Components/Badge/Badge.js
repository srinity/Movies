import React from 'react'
import { View, Text, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'

import styles from './Badge.Styles'

function Badge({ name, style, textStyle, ...props }) {
  return (
    <View style={[styles.containerStyle, style]}>
      <Text style={[styles.textStyle, textStyle]} {...props}>
        {name}
      </Text>
    </View>
  )
}

Badge.propTypes = {
  name: PropTypes.string,
  style: ViewPropTypes.style,
  textStyle: Text.propTypes.style
}

export default Badge
