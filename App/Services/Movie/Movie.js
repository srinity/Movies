import { map as _map } from 'lodash'

import {
  API_URLS,
  NetworkInstance,
  API_PARAMS,
  BASE_IMAGE_URL
} from '../Config'

function mapMovieDetailsResponse(response = { data: {} }) {
  const {
    data: {
      genres,
      id,
      overview,
      poster_path: poster,
      release_date: releaseDate,
      title,
      vote_average: voteAverage
    }
  } = response

  const mappedResponse = {
    genres,
    id,
    overview,
    releaseDate,
    title,
    voteAverage
  }

  mappedResponse.image = `${BASE_IMAGE_URL}${poster}`

  return mappedResponse
}

function mapMovieCreditsResponse(response = { data: {} }) {
  const {
    data: { cast }
  } = response

  const mappedResponse = _map(cast, castMember => {
    const { id, original_name: name, profile_path: profile } = castMember

    return {
      id,
      name,
      image: `${BASE_IMAGE_URL}${profile}`
    }
  })

  return mappedResponse
}

function getMovieDetails(movieId, utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.movieDetails(movieId),
      method: 'GET',
      params: API_PARAMS
    },
    {
      ...utils,
      responseMapper: mapMovieDetailsResponse
    }
  )
}

function getMovieCredits(movieId, utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.movieCredits(movieId),
      method: 'GET',
      params: API_PARAMS
    },
    {
      ...utils,
      responseMapper: mapMovieCreditsResponse
    }
  )
}

export {
  getMovieDetails,
  getMovieCredits,
  mapMovieDetailsResponse,
  mapMovieCreditsResponse
}
