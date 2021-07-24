import { isEmpty as _isEmpty, isNil as _isNil } from 'lodash'

import { MoviesServices } from '../../Services'

import {
  GET_POPULAR_MOVIES_FAILED,
  GET_POPULAR_MOVIES_STARTED,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_FAILED,
  GET_TOP_RATED_MOVIES_STARTED,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_UPCOMING_MOVIES_FAILED,
  GET_UPCOMING_MOVIES_STARTED,
  GET_UPCOMING_MOVIES_SUCCESS
} from './ActionTypes'

import { getGenreList } from './Genres'

function isValidatePage(pageNumber, totalPages) {
  return _isNil(totalPages) || pageNumber <= totalPages
}

function getUpcomingMovies(genreList, pageNumber, totalPages, initialPage) {
  return dispatch => {
    const action = genres => {
      MoviesServices.getUpcomingMoviesData({ page: pageNumber }, genres, {
        onStart: () => dispatch(getUpcomingMoviesStarted(initialPage)),
        onSuccess: ({ totalPages: _totalPages, movies, currentPage }) =>
          dispatch(
            getUpcomingMoviesSuccess(
              movies,
              currentPage,
              _totalPages,
              initialPage
            )
          ),
        onError: error => dispatch(getUpcomingMoviesFailed(error, initialPage))
      })
    }

    if (isValidatePage(pageNumber, totalPages)) {
      if (_isEmpty(genreList)) {
        dispatch(getGenreList(_genreList => action(_genreList)))
      } else {
        action(genreList)
      }
    }
  }
}

function getPopularMovies(genreList, pageNumber, totalPages, initialPage) {
  return dispatch => {
    if (isValidatePage(pageNumber, totalPages)) {
      MoviesServices.getPopularMoviesData({ page: pageNumber }, genreList, {
        onStart: () => dispatch(getPopularMoviesStarted(initialPage)),
        onSuccess: ({ totalPages: _totalPages, movies, currentPage }) =>
          dispatch(
            getPopularMoviesSuccess(
              movies,
              currentPage,
              _totalPages,
              initialPage
            )
          ),
        onError: error => dispatch(getPopularMoviesFailed(error, initialPage))
      })
    }
  }
}

function getTopRatedMovies(genreList, pageNumber, totalPages, initialPage) {
  return dispatch => {
    if (isValidatePage(pageNumber, totalPages)) {
      MoviesServices.getTopRatedMoviesData({ page: pageNumber }, genreList, {
        onStart: () => dispatch(getTopRatedMoviesStarted(initialPage)),
        onSuccess: ({ totalPages: _totalPages, movies, currentPage }) =>
          dispatch(
            getTopRatedMoviesSuccess(
              movies,
              currentPage,
              _totalPages,
              initialPage
            )
          ),
        onError: error => dispatch(getTopRatedMoviesFailed(error, initialPage))
      })
    }
  }
}

function getUpcomingMoviesStarted(initialPage) {
  return { type: GET_UPCOMING_MOVIES_STARTED, meta: initialPage }
}

function getUpcomingMoviesSuccess(
  movies,
  currentPage,
  totalPages,
  initialPage
) {
  return {
    type: GET_UPCOMING_MOVIES_SUCCESS,
    payload: { movies, currentPage, totalPages },
    meta: initialPage
  }
}

function getUpcomingMoviesFailed(error, initialPage) {
  return {
    type: GET_UPCOMING_MOVIES_FAILED,
    error: true,
    payload: error,
    meta: initialPage
  }
}

function getPopularMoviesStarted(initialPage) {
  return { type: GET_POPULAR_MOVIES_STARTED, meta: initialPage }
}

function getPopularMoviesSuccess(movies, currentPage, totalPages, initialPage) {
  return {
    type: GET_POPULAR_MOVIES_SUCCESS,
    payload: { movies, currentPage, totalPages },
    meta: initialPage
  }
}

function getPopularMoviesFailed(error, initialPage) {
  return {
    type: GET_POPULAR_MOVIES_FAILED,
    error: true,
    payload: error,
    meta: initialPage
  }
}

function getTopRatedMoviesStarted(initialPage) {
  return { type: GET_TOP_RATED_MOVIES_STARTED, meta: initialPage }
}

function getTopRatedMoviesSuccess(
  movies,
  currentPage,
  totalPages,
  initialPage
) {
  return {
    type: GET_TOP_RATED_MOVIES_SUCCESS,
    payload: { movies, currentPage, totalPages },
    meta: initialPage
  }
}

function getTopRatedMoviesFailed(error, initialPage) {
  return {
    type: GET_TOP_RATED_MOVIES_FAILED,
    error: true,
    payload: error,
    meta: initialPage
  }
}

export { getUpcomingMovies, getPopularMovies, getTopRatedMovies }
