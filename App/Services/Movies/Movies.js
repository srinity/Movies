import { map as _map, find as _find } from 'lodash'

import {
  API_URLS,
  NetworkInstance,
  API_PARAMS,
  BASE_IMAGE_URL
} from '../Config'

function mapUpcomingMoviesDataResponse(response = { data: {} }, genreList) {
  const {
    data: { results, total_pages: totalPages, page: currentPage }
  } = response

  const mappedResponse = { totalPages, currentPage }

  mappedResponse.movies = _map(results, result => {
    const {
      id,
      title,
      poster_path: poster,
      release_date: releaseDate,
      vote_average: voteAverage,
      genre_ids: genreIds
    } = result

    const genres = _map(genreIds, genreId =>
      _find(genreList, genre => genre.id === genreId)
    )

    return {
      id,
      title,
      image: `${BASE_IMAGE_URL}${poster}`,
      releaseDate,
      voteAverage,
      genres
    }
  })

  return mappedResponse
}

function mapPopularMoviesDataResponse(response = { data: {} }, genreList) {
  return mapUpcomingMoviesDataResponse(response, genreList)
}

function mapTopRatedMoviesDataResponse(response = { data: {} }, genreList) {
  return mapUpcomingMoviesDataResponse(response, genreList)
}

function getUpcomingMoviesData(params, genreList, utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.upcomingMovies,
      method: 'GET',
      params: {
        ...params,
        ...API_PARAMS
      }
    },
    {
      ...utils,
      responseMapper: response =>
        mapUpcomingMoviesDataResponse(response, genreList)
    }
  )
}

function getPopularMoviesData(params, genreList, utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.popularMovies,
      method: 'GET',
      params: {
        ...params,
        ...API_PARAMS
      }
    },
    {
      ...utils,
      responseMapper: response =>
        mapPopularMoviesDataResponse(response, genreList)
    }
  )
}

function getTopRatedMoviesData(params, genreList, utils) {
  return NetworkInstance.request(
    {
      url: API_URLS.topRatedMovies,
      method: 'GET',
      params: {
        ...params,
        ...API_PARAMS
      }
    },
    {
      ...utils,
      responseMapper: response =>
        mapTopRatedMoviesDataResponse(response, genreList)
    }
  )
}

export {
  getUpcomingMoviesData,
  getPopularMoviesData,
  getTopRatedMoviesData,
  mapUpcomingMoviesDataResponse,
  mapPopularMoviesDataResponse,
  mapTopRatedMoviesDataResponse
}
