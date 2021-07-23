import { NetInfoState } from '@react-native-community/netinfo'

class InternetConnection {
  /**
   * Flag that represents whether the device is connected to the internet or not.
   *
   */
  static isConnected: boolean

  /**
   * Method that returns the isConnected value, it also add a listener to changes of internet state and updates the isConnected flag.
   *
   * @returns Promise
   */
  static checkConnection(): Promise<boolean>

  /**
   * Private method that handle the internet state update.
   *
   */
  private static _internetEventListener(networkState: NetInfoState): void
}

export default InternetConnection
