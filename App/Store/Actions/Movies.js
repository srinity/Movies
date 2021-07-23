import { isEmpty as _isEmpty } from 'lodash'

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

function getUpcomingMovies(genreList, pageNumber) {
  return dispatch => {
    const action = genres => {
      MoviesServices.getUpcomingMoviesData({ page: pageNumber }, genres, {
        onStart: () => dispatch(getUpcomingMoviesStarted()),
        onSuccess: response => dispatch(getUpcomingMoviesSuccess(response)),
        onError: error => dispatch(getUpcomingMoviesFailed(error))
      })
    }

    if (_isEmpty(genreList)) {
      dispatch(getGenreList(_genreList => action(_genreList)))
    } else {
      action(genreList)
    }
  }
}

function getPopularMovies(genreList, pageNumber) {
  return dispatch => {
    MoviesServices.getPopularMoviesData({ page: pageNumber }, genreList, {
      onStart: () => dispatch(getPopularMoviesStarted()),
      onSuccess: response => dispatch(getPopularMoviesSuccess(response)),
      onError: error => dispatch(getPopularMoviesFailed(error))
    })
  }
}

function getTopRatedMovies(genreList, pageNumber) {
  return dispatch => {
    MoviesServices.getTopRatedMoviesData({ page: pageNumber }, genreList, {
      onStart: () => dispatch(getTopRatedMoviesStarted()),
      onSuccess: response => dispatch(getTopRatedMoviesSuccess(response)),
      onError: error => dispatch(getTopRatedMoviesFailed(error))
    })
  }
}

function getUpcomingMoviesStarted() {
  return { type: GET_UPCOMING_MOVIES_STARTED }
}

function getUpcomingMoviesSuccess(data) {
  return { type: GET_UPCOMING_MOVIES_SUCCESS, payload: data }
}

function getUpcomingMoviesFailed(error) {
  return {
    type: GET_UPCOMING_MOVIES_FAILED,
    error: true,
    payload: error
  }
}

function getPopularMoviesStarted() {
  return { type: GET_POPULAR_MOVIES_STARTED }
}

function getPopularMoviesSuccess(data) {
  return { type: GET_POPULAR_MOVIES_SUCCESS, payload: data }
}

function getPopularMoviesFailed(error) {
  return {
    type: GET_POPULAR_MOVIES_FAILED,
    error: true,
    payload: error
  }
}

function getTopRatedMoviesStarted() {
  return { type: GET_TOP_RATED_MOVIES_STARTED }
}

function getTopRatedMoviesSuccess(data) {
  return { type: GET_TOP_RATED_MOVIES_SUCCESS, payload: data }
}

function getTopRatedMoviesFailed(error) {
  return {
    type: GET_TOP_RATED_MOVIES_FAILED,
    error: true,
    payload: error
  }
}

export { getUpcomingMovies, getPopularMovies, getTopRatedMovies }
