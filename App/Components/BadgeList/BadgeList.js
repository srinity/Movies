import React from 'react'
import { View, Text, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import { map as _map } from 'lodash'

import Badge from '../Badge'

import styles from './BadgeList.Styles'

function BadgeList({
  data,
  containerStyle,
  itemStyle,
  itemTextStyle,
  ...props
}) {
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {_map(data, item => (
        <Badge
          key={item.id}
          style={itemStyle}
          textStyle={itemTextStyle}
          {...item}
        />
      ))}
    </View>
  )
}

BadgeList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  ),
  containerStyle: ViewPropTypes.style,
  itemStyle: ViewPropTypes.style,
  itemTextStyle: Text.propTypes.style
}

export default BadgeList
