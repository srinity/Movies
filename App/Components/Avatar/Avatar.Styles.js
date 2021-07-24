import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    marginRight: 15,
    width: 85
  },
  imageStyle: {
    height: 75,
    width: 75,
    borderRadius: 37.5,
    overflow: 'hidden'
  },
  titleStyle: {
    color: Colors.blackColor,
    fontSize: Fonts.h5,
    marginTop: 7,
    textAlign: 'center'
  }
})
