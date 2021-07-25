import { mapGenreListResponse } from '../../../../App/Services/Genres/Genres'

import mockGenresListResponse from '../../../__mocks__/GenreListResponse.json'

describe('mapGenreListResponse method', () => {
  it('should return response mapped', () => {
    const mappedResponse = mapGenreListResponse(mockGenresListResponse)

    expect(mappedResponse).toBe(mockGenresListResponse.data.genres)
  })
})
