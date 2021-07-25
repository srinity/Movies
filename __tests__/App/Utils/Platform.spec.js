import { Dimensions } from 'react-native'

import * as PlatformUtils from '../../../App/Utils/Platform'

const dimensionsBeforeMock = Dimensions.get('window')

describe('Platform utils', () => {
  const setMockValues = (OS, dimensions) => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
      OS: OS,
      select: obj => obj[OS]
    }))

    jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
      get: jest.fn().mockReturnValue(dimensions || dimensionsBeforeMock)
    }))
  }

  describe('isIPhoneDeviceWithNotch method', () => {
    it('should return true', () => {
      setMockValues('ios', { height: 812, width: 375 })
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeTruthy()
      jest.resetModules()

      setMockValues('ios', { height: 896, width: 414 })
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeTruthy()
      jest.resetModules()
    })

    it('should return false', () => {
      setMockValues('android')
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeFalsy()
      jest.resetModules()

      setMockValues('ios', { height: 1333, width: 414 })
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeFalsy()
      jest.resetModules()

      setMockValues('ios', { height: 896, width: 444 })
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeFalsy()
      jest.resetModules()

      setMockValues('ios', { height: 1333, width: 375 })
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeFalsy()
      jest.resetModules()

      setMockValues('ios', { height: 812, width: 400 })
      expect(PlatformUtils.isIPhoneDeviceWithNotch()).toBeFalsy()
      jest.resetModules()
    })
  })
})
