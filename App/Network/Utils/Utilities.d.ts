import { AxiosResponse, AxiosError } from 'axios'

export interface RequestUtilities {
  onStart?(): void
  onSuccess?<T>(response: T): void
  onError?<T>(error: T): void
  responseMapper?<T, R>(response: AxiosResponse<T>): R
  errorMapper?<T, R>(error: AxiosError<T>): R
  onInternetConnectionFail?(retry: () => void): void
}

export function constructUtilities(
  utilities: RequestUtilities
): RequestUtilities

export function validateUtilities(utilities: RequestUtilities): boolean

export function retrieveUtilities(utilities: RequestUtilities): RequestUtilities
