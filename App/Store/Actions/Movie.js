import { MovieServices } from '../../Services'

import {
  GET_MOVIE_DETAILS_FAILED,
  GET_MOVIE_DETAILS_STARTED,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_CREDITS_FAILED,
  GET_MOVIE_CREDITS_STARTED,
  GET_MOVIE_CREDITS_SUCCESS
} from './ActionTypes'

function getMovieDetailsAndCredits(movieId) {
  return dispatch => {
    MovieServices.getMovieDetails(movieId, {
      onStart: () => dispatch(getMovieDetailsStarted()),
      onSuccess: response => dispatch(getMovieDetailsSuccess(response)),
      onError: error => dispatch(getMovieDetailsFailed(error))
    })

    MovieServices.getMovieCredits(movieId, {
      onStart: () => dispatch(getMovieCreditsStarted()),
      onSuccess: response => dispatch(getMovieCreditsSuccess(response)),
      onError: error => dispatch(getMovieCreditsFailed(error))
    })
  }
}

function getMovieDetailsStarted() {
  return { type: GET_MOVIE_DETAILS_STARTED }
}

function getMovieDetailsSuccess(data) {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: data
  }
}

function getMovieDetailsFailed(error) {
  return {
    type: GET_MOVIE_DETAILS_FAILED,
    error: true,
    payload: error
  }
}

function getMovieCreditsStarted() {
  return { type: GET_MOVIE_CREDITS_STARTED }
}

function getMovieCreditsSuccess(data) {
  return {
    type: GET_MOVIE_CREDITS_SUCCESS,
    payload: data
  }
}

function getMovieCreditsFailed(error) {
  return {
    type: GET_MOVIE_CREDITS_FAILED,
    error: true,
    payload: error
  }
}

export { getMovieDetailsAndCredits }
