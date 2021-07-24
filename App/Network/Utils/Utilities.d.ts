import { AxiosResponse, AxiosError } from 'axios'

export interface RequestUtilities<T, R = any, E = any, F = any> {
  onStart?(): void
  onSuccess?(response: T): void
  onError?(error: E): void
  responseMapper?(response: AxiosResponse<R>): T
  errorMapper?(error: AxiosError<F>): E
  onInternetConnectionFail?(retry: () => void): void
}

export function constructUtilities(
  utilities: RequestUtilities
): RequestUtilities

export function validateUtilities(utilities: RequestUtilities): boolean

export function retrieveUtilities(utilities: RequestUtilities): RequestUtilities
