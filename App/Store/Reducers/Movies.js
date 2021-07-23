import { ActionTypes } from '../Actions'

const initialState = {
  movies: {
    upcoming: [],
    topRated: [],
    popular: []
  },
  isLoading: {
    upcoming: false,
    topRated: false,
    popular: false
  },
  error: {
    upcoming: null,
    topRated: null,
    popular: null
  }
}

function MoviesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.GET_UPCOMING_MOVIES_STARTED:
      return {
        ...state,
        error: {
          ...state.error,
          upcoming: null
        },
        isLoading: { ...state.isLoading, upcoming: true }
      }

    case ActionTypes.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        movies: { ...state.movies, upcoming: action.payload },
        isLoading: { ...state.isLoading, upcoming: false }
      }

    case ActionTypes.GET_UPCOMING_MOVIES_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          upcoming: action.payload
        },
        isLoading: { ...state.isLoading, upcoming: false }
      }

    case ActionTypes.GET_POPULAR_MOVIES_STARTED:
      return {
        ...state,
        error: {
          ...state.error,
          popular: null
        },
        isLoading: { ...state.isLoading, popular: true }
      }

    case ActionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: { ...state.movies, popular: action.payload },
        isLoading: { ...state.isLoading, popular: false }
      }

    case ActionTypes.GET_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          popular: action.payload
        },
        isLoading: { ...state.isLoading, popular: false }
      }

    case ActionTypes.GET_TOP_RATED_MOVIES_STARTED:
      return {
        ...state,
        error: {
          ...state.error,
          topRated: null
        },
        isLoading: { ...state.isLoading, topRated: true }
      }

    case ActionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        movies: { ...state.movies, topRated: action.payload },
        isLoading: { ...state.isLoading, topRated: false }
      }

    case ActionTypes.GET_TOP_RATED_MOVIES_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          topRated: action.payload
        },
        isLoading: { ...state.isLoading, topRated: false }
      }

    default:
      return state
  }
}

export default MoviesReducer
