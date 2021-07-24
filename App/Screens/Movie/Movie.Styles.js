import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingHorizontal: 15
  },
  indicatorContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    fontSize: Fonts.h4,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.blackColor
  },
  overviewTextStyle: {
    fontSize: Fonts.h5,
    color: Colors.getBlackColor(0.7),
    marginBottom: 15
  },
  badgeTextStyle: {
    fontSize: Fonts.h5,
    fontWeight: 'bold'
  }
})
