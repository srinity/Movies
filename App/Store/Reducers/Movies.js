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
  isAdditionalPagesLoading: {
    upcoming: false,
    topRated: false,
    popular: false
  },
  error: {
    upcoming: null,
    topRated: null,
    popular: null
  },
  currentPage: {
    upcoming: 0,
    topRated: 0,
    popular: 0
  },
  totalPages: {
    upcoming: undefined,
    topRated: undefined,
    popular: undefined
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
        ...(action.meta
          ? { isLoading: { ...state.isLoading, upcoming: true } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                upcoming: true
              }
            })
      }

    case ActionTypes.GET_UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          upcoming: [...state.movies.upcoming, ...action.payload.movies]
        },
        currentPage: {
          ...state.currentPage,
          upcoming: action.payload.currentPage
        },
        totalPages: {
          ...state.totalPages,
          upcoming: action.payload.totalPages
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, upcoming: false } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                upcoming: false
              }
            })
      }

    case ActionTypes.GET_UPCOMING_MOVIES_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          upcoming: action.payload
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, upcoming: false } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                upcoming: false
              }
            })
      }

    case ActionTypes.GET_POPULAR_MOVIES_STARTED:
      return {
        ...state,
        error: {
          ...state.error,
          popular: null
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, popular: true } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                popular: true
              }
            })
      }

    case ActionTypes.GET_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: [...state.movies.popular, ...action.payload.movies]
        },
        currentPage: {
          ...state.currentPage,
          popular: action.payload.currentPage
        },
        totalPages: {
          ...state.totalPages,
          popular: action.payload.totalPages
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, popular: false } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                popular: false
              }
            })
      }

    case ActionTypes.GET_POPULAR_MOVIES_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          popular: action.payload
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, popular: false } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                popular: false
              }
            })
      }

    case ActionTypes.GET_TOP_RATED_MOVIES_STARTED:
      return {
        ...state,
        error: {
          ...state.error,
          topRated: null
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, topRated: true } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                topRated: true
              }
            })
      }

    case ActionTypes.GET_TOP_RATED_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          topRated: [...state.movies.topRated, ...action.payload.movies]
        },
        currentPage: {
          ...state.currentPage,
          topRated: action.payload.currentPage
        },
        totalPages: {
          ...state.totalPages,
          topRated: action.payload.totalPages
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, topRated: false } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                topRated: false
              }
            })
      }

    case ActionTypes.GET_TOP_RATED_MOVIES_FAILED:
      return {
        ...state,
        error: {
          ...state.error,
          topRated: action.payload
        },
        ...(action.meta
          ? { isLoading: { ...state.isLoading, topRated: false } }
          : {
              isAdditionalPagesLoading: {
                ...state.isAdditionalPagesLoading,
                topRated: false
              }
            })
      }

    default:
      return state
  }
}

export default MoviesReducer
