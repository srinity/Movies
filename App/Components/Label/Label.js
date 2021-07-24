import React, { Component } from 'react'
import { TouchableOpacity, Text, ViewPropTypes, Animated } from 'react-native'

import PropTypes from 'prop-types'

import styles from './Label.Styles'

class Label extends Component {
  render() {
    const { title, onPress, style, textStyle, ...props } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.containerStyle, style]}
        {...props}
      >
        <Animated.Text style={[styles.textStyle, textStyle]}>
          {title}
        </Animated.Text>
      </TouchableOpacity>
    )
  }
}

Label.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string.isRequired,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style
}

const AnimatedLabel = Animated.createAnimatedComponent(Label)

export { AnimatedLabel }
export default Label
