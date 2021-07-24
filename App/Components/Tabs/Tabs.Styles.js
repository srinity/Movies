import { StyleSheet, Platform } from 'react-native'

import { Colors, Fonts } from '../../Theme'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginHorizontal: 15,
    marginBottom: 15
  },
  label: {
    color: Colors.getBlackColor(0.3),
    fontSize: Fonts.h5,
    paddingVertical: 5,
    paddingHorizontal: 0
  },
  mainView: {
    flexDirection: 'row'
  },
  tab: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.notAvailableColor,
    borderRadius: 25,
    marginRight: 7,
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
  lastTab: {
    marginRight: 0
  }
})
