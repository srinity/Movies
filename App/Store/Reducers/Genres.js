import { ActionTypes } from '../Actions'

const initialState = {
  genreList: [],
  isGenreListLoading: false,
  genreListError: null
}

function GenresReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.GET_GENRE_LIST_STARTED:
      return { ...state, isGenreListLoading: true, genreListError: null }

    case ActionTypes.GET_GENRE_LIST_SUCCESS:
      return { ...state, isGenreListLoading: false, genreList: action.payload }

    case ActionTypes.GET_GENRE_LIST_FAILED:
      return {
        ...state,
        isGenreListLoading: false,
        genreListError: action.payload
      }

    default:
      return state
  }
}

export default GenresReducer
