import { Platform, Dimensions } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const X_WIDTH = 375
const X_HEIGHT = 812
const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896
const IPHONE12_WIDTH = 390
const IPHONE12_HEIGHT = 844
const IPHONE12_PROMAX_WIDTH = 428
const IPHONE12_PROMAX_HEIGHT = 926

export function isIPhoneDeviceWithNotch() {
  return (
    Platform.OS === 'ios' &&
    ((screenHeight === X_HEIGHT && screenWidth === X_WIDTH) ||
      (screenHeight === XSMAX_HEIGHT && screenWidth === XSMAX_WIDTH) ||
      (screenHeight === IPHONE12_HEIGHT && screenWidth === IPHONE12_WIDTH) ||
      (screenHeight === IPHONE12_PROMAX_HEIGHT &&
        screenWidth === IPHONE12_PROMAX_WIDTH))
  )
}
