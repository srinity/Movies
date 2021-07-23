import { API_URLS, NetworkInstance, API_PARAMS } from '../Config'

function mapGenreListResponse(response = { data: {} }) {
  const {
    data: { genres }
  } = response

  return genres
}

function getGenreListData(utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.genreList,
      method: 'GET',
      params: API_PARAMS
    },
    {
      ...utils,
      responseMapper: mapGenreListResponse
    }
  )
}

export { getGenreListData, mapGenreListResponse }
