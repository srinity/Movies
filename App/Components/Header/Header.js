import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

import { Icon } from '../Icon'

import styles from './Header.Styles'

function Header({ withBack, title, onBackPress, ...props }) {
  return (
    <View style={styles.containerStyle(withBack)}>
      {withBack ? (
        <TouchableWithoutFeedback onPress={onBackPress}>
          <Icon
            type="entypo"
            name="chevron-small-left"
            size={35}
            style={styles.backIconStyle}
          />
        </TouchableWithoutFeedback>
      ) : null}

      {title ? (
        <Text style={styles.titleStyle} {...props}>
          {title}
        </Text>
      ) : null}
    </View>
  )
}

Header.propTypes = {
  withBack: PropTypes.bool,
  title: PropTypes.string,
  onBackPress: PropTypes.func
}

export default Header
