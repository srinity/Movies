import {
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native'

const TouchableComponent =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

export default TouchableComponent
