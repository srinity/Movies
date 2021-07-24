import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: withBack => ({
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: Colors.backgroundColor,
    height: 60,
    flexDirection: 'row',
    ...(withBack ? { justifyContent: 'center' } : {}),
    // justifyContent: 'center',
    alignItems: 'center'
  }),
  titleStyle: {
    fontSize: Fonts.h1,
    fontWeight: 'bold'
  },
  backIconStyle: {
    position: 'absolute',
    left: 15,
    padding: 7
  }
})
