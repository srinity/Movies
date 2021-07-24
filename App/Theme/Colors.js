export default {
  brandColor: '#32CD32',
  getBrandColor: alphaValue => `rgba(50, 205, 50, ${alphaValue})`,
  backgroundColor: '#f5f5f5',
  getBackgroundColor: alphaValue => `rgba(245, 245, 245, ${alphaValue})`,
  whiteColor: '#ffffff',
  getWhiteColor: alphaValue => `rgba(255, 255, 255, ${alphaValue})`,
  blackColor: '#000000',
  getBlackColor: alphaValue => `rgba(0, 0, 0, ${alphaValue})`,
  successColor: '#28a745',
  getSuccessColor: alphaValue => `rgba(40, 167, 69, ${alphaValue})`,
  warningColor: '#ff8800',
  getWarningColor: alphaValue => `rgba(255, 136, 0, ${alphaValue})`,
  dangerColor: '#dc3545',
  getDangerColor: alphaValue => `rgba(220, 53, 69, ${alphaValue})`,
  notAvailableColor: '#dddddd',
  getNotAvailableColor: alphaValue => `rgba(221, 221, 221, ${alphaValue})`
}
