import { GenresServices } from '../../Services'

import {
  GET_GENRE_LIST_FAILED,
  GET_GENRE_LIST_STARTED,
  GET_GENRE_LIST_SUCCESS
} from './ActionTypes'

function getGenreList(onFinish) {
  return dispatch => {
    GenresServices.getGenreListData({
      onStart: () => dispatch(getGenreListStarted()),
      onSuccess: response => {
        dispatch(getGenreListSuccess(response))
        onFinish(response)
      },
      onError: error => {
        dispatch(getGenreListFailed(error))
        onFinish([])
      }
    })
  }
}

function getGenreListStarted() {
  return { type: GET_GENRE_LIST_STARTED }
}

function getGenreListSuccess(data) {
  return { type: GET_GENRE_LIST_SUCCESS, payload: data }
}

function getGenreListFailed(error) {
  return {
    type: GET_GENRE_LIST_FAILED,
    error: true,
    payload: error
  }
}

export {
  getGenreList,
  getGenreListStarted,
  getGenreListSuccess,
  getGenreListFailed
}
