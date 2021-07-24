import { ActionTypes } from '../Actions'

// TODO: should probably save previous visited movies to avoid re-requesting data from the server
const initialState = {
  movieDetails: {},
  isMovieDetailsLoading: false,
  movieDetailsError: null,
  movieCredits: [],
  isMovieCreditsLoading: false,
  movieCreditsError: null
}

function MovieReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_DETAILS_STARTED:
      return { ...state, isMovieDetailsLoading: true, movieDetailsError: null }

    case ActionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        isMovieDetailsLoading: false,
        movieDetails: action.payload
      }

    case ActionTypes.GET_MOVIE_DETAILS_FAILED:
      return {
        ...state,
        isMovieDetailsLoading: false,
        movieDetailsError: action.payload
      }

    case ActionTypes.GET_MOVIE_CREDITS_STARTED:
      return { ...state, isMovieCreditsLoading: true, movieCreditsError: null }

    case ActionTypes.GET_MOVIE_CREDITS_SUCCESS:
      return {
        ...state,
        isMovieCreditsLoading: false,
        movieCredits: action.payload
      }

    case ActionTypes.GET_MOVIE_CREDITS_FAILED:
      return {
        ...state,
        isMovieCreditsLoading: false,
        movieCreditsError: action.payload
      }

    default:
      return state
  }
}

export default MovieReducer
