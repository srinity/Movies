import { Component } from 'react'
import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps
} from 'react-native'

export interface TouchableComponentProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {}

export default class TouchableComponent extends Component<TouchableComponentProps> {}
