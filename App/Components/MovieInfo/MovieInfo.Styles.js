import { StyleSheet } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 15
  },
  imageStyle: {
    height: 300,
    width: 200,
    borderRadius: 12.5
  },
  titleStyle: {
    marginVertical: 10,
    color: Colors.blackColor,
    fontSize: Fonts.h1,
    fontWeight: 'bold'
  },
  voteTextStyle: {
    fontSize: Fonts.h2,
    fontWeight: 'bold',
    color: Colors.brandColor
  }
})
