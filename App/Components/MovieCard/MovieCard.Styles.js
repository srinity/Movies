import { StyleSheet, Platform } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: Colors.whiteColor,
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    minHeight: 150,
    borderRadius: 12.5,
    ...Platform.select({
      android: {
        elevation: 3
      },
      ios: {
        shadowColor: Colors.getBlackColor(0.3),
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 1 }
      }
    })
  },
  imageStyle: {
    height: '100%',
    width: 85,
    borderRadius: 12.5
  },
  infoContainerStyle: {
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 7,
    flex: 1
  },
  titleStyle: {
    fontSize: Fonts.h5,
    color: Colors.blackColor,
    fontWeight: 'bold'
  },
  dateTextStyle: {
    fontSize: Fonts.h6,
    color: Colors.blackColor,
    marginVertical: 10
  },
  voteContainerStyle: {
    justifyContent: 'flex-end'
  },
  voteTextStyle: {
    fontSize: Fonts.h3,
    fontWeight: 'bold',
    color: Colors.brandColor
  }
})
