import { AxiosRequestConfig } from 'axios'

// eslint-disable-next-line import/named
import { RequestUtilities } from './Utils/Utilities'

export interface NetworkConfig extends AxiosRequestConfig {
  onInternetConnectionFail?(retry: () => void): void
}

// eslint-disable-next-line import/export
export default interface Network {
  /**
   * Method used to make network requests.
   *
   * @param  {AxiosRequestConfig} config
   * @param  {RequestUtilities} utils
   * @returns Promise
   */
  request<T>(config: AxiosRequestConfig, utils: RequestUtilities): Promise<T>
}

// eslint-disable-next-line import/export
export default class Network {
  /**
   * Initialize and configure the network layer.
   *
   * @param  {NetworkConfig} config
   */
  constructor(config: NetworkConfig)

  private onInternetConnectionFail?(retry: () => void): void
}
