import { isFunction as _isFunction, get as _get, isNil as _isNil } from 'lodash'

import { InvalidParameterException } from './Exceptions'

function constructUtilities(utilities = {}) {
  const _utilities = Object.assign(
    {},
    {
      onStart: () => {},
      onSuccess: () => {},
      onError: undefined,
      responseMapper: response => _get(response, 'data', response),
      errorMapper: error => _get(error, 'response', error),
      onInternetConnectionFail: undefined
    },
    utilities
  )

  return _utilities
}

function validateUtilities(utilities = {}) {
  const {
    errorMapper,
    onError,
    onStart,
    onSuccess,
    responseMapper,
    onInternetConnectionFail
  } = utilities

  if (
    !_isFunction(errorMapper) ||
    (!_isNil(onError) && !_isFunction(onError)) ||
    !_isFunction(onStart) ||
    !_isFunction(onSuccess) ||
    !_isFunction(responseMapper) ||
    (!_isNil(onInternetConnectionFail) &&
      !_isFunction(onInternetConnectionFail))
  ) {
    throw new InvalidParameterException(
      'Provided utilities parameter contains invalid value',
      'onStart, onSuccess, onError, responseMapper, errorMapper, onInternetConnectionFail',
      'undefined || function'
    )
  }

  return true
}

function retrieveUtilities(utilities = {}) {
  const _utilities = constructUtilities(utilities)
  validateUtilities(_utilities)

  return _utilities
}

export { validateUtilities, constructUtilities, retrieveUtilities }
