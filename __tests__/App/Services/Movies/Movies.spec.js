import {
  mapUpcomingMoviesDataResponse,
  mapPopularMoviesDataResponse,
  mapTopRatedMoviesDataResponse
} from '../../../../App/Services/Movies/Movies'

import mockUpcomingMoviesResponse from '../../../__mocks__/UpcomingMoviesResponse.json'
import mockUpcomingMoviesResponseMapped from '../../../__mocks__/UpcomingMoviesResponseMapped.json'

import mockPopularMoviesResponse from '../../../__mocks__/PopularMoviesResponse.json'
import mockPopularMoviesResponseMapped from '../../../__mocks__/PopularMoviesResponseMapped.json'

import mockTopRatedMoviesResponse from '../../../__mocks__/TopRatedMoviesResponse.json'
import mockTopRatedMoviesResponseMapped from '../../../__mocks__/TopRatedMoviesResponseMapped.json'

import mockGenresListResponse from '../../../__mocks__/GenreListResponse.json'

describe('MoviesServices', () => {
  describe('mapUpcomingMoviesDataResponse method', () => {
    it('should return response mapped', () => {
      const mappedResponse = mapUpcomingMoviesDataResponse(
        mockUpcomingMoviesResponse,
        mockGenresListResponse.data.genres
      )

      expect(mappedResponse).toEqual(mockUpcomingMoviesResponseMapped)
    })
  })

  describe('mapPopularMoviesDataResponse method', () => {
    it('should return response mapped', () => {
      const mappedResponse = mapPopularMoviesDataResponse(
        mockPopularMoviesResponse,
        mockGenresListResponse.data.genres
      )

      expect(mappedResponse).toEqual(mockPopularMoviesResponseMapped)
    })
  })

  describe('mapTopRatedMoviesDataResponse method', () => {
    it('should return response mapped', () => {
      const mappedResponse = mapTopRatedMoviesDataResponse(
        mockTopRatedMoviesResponse,
        mockGenresListResponse.data.genres
      )

      expect(mappedResponse).toEqual(mockTopRatedMoviesResponseMapped)
    })
  })
})
