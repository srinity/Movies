class InvalidParameterException extends Error {
  constructor(message, parameterName, expectedType) {
    super(message)

    this.name = 'InvalidParameterException'
    this.details = `Provided Parameter is not valid, Parameter: ${parameterName} is of wrong type expected type: ${expectedType}.`
  }
}

class InternetConnectionError extends Error {
  constructor(message) {
    super(message)

    this.name = 'InternetConnectionError'
    this.status = 700 // unique status code(something that can not be returned from server)
    this.details =
      'Internet connection error, check your connection and try again'
  }
}

export { InvalidParameterException, InternetConnectionError }
