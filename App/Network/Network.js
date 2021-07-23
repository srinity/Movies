import Axios from 'axios'
import { isFunction as _isFunction } from 'lodash'

import InternetConnection from './InternetConnection'
import { InternetConnectionError } from './Utils/Exceptions'

import { retrieveUtilities } from './Utils/Utilities'

class Network {
  constructor({
    baseURL,
    commonHeaders,
    timeout = 5000,
    onInternetConnectionFail,
    ...config
  }) {
    this.axiosInstance = Axios.create({
      baseURL,
      headers: commonHeaders,
      timeout,
      ...config
    })

    InternetConnection.checkConnection()

    this.onInternetConnectionFail = onInternetConnectionFail
  }

  request = async (config, utils) => {
    const {
      errorMapper,
      onError,
      onStart,
      onSuccess,
      responseMapper,
      onInternetConnectionFail
    } = retrieveUtilities(utils)

    try {
      if (!InternetConnection.isConnected) {
        const retry = () => this.request(config, utils)

        if (_isFunction(onInternetConnectionFail)) {
          onInternetConnectionFail(retry)
        } else if (_isFunction(this.onInternetConnectionFail)) {
          this.onInternetConnectionFail(retry)
        } else {
          throw new InternetConnectionError('Internet connection issue')
        }
      }

      onStart()

      const response = await this.axiosInstance(config)

      const _response = responseMapper(response)

      onSuccess(_response)
      return _response
    } catch (error) {
      const _error = errorMapper(error)

      if (_isFunction(onError)) {
        onError(_error)
      } else {
        throw _error
      }
    }
  }
}

export default Network
