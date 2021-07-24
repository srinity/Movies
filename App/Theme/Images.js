import { Image } from 'react-native'

const Images = {
  avatar: Image.resolveAssetSource(
    require('../Assets/avatar-profile-picture.jpeg')
  )
}

export default Images

export const imageNames = Object.keys(Images)
