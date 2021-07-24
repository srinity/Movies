import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Reactotron from '../Config/ReactotronConfig'

import { GenresReducer, MovieReducer, MoviesReducer } from './Reducers'

const persistGenreListConfig = {
  key: 'genres',
  storage: AsyncStorage,
  whitelist: ['genreList']
}

const middleWares = [Thunk]

const rootReducer = combineReducers({
  movies: MoviesReducer,
  movie: MovieReducer,
  genres: persistReducer(persistGenreListConfig, GenresReducer)
})

const initialData = {}
const storeAppliedMiddleWare = applyMiddleware(...middleWares)

const store = createStore(
  rootReducer,
  initialData,
  compose(storeAppliedMiddleWare, Reactotron.createEnhancer())
)

const persistor = persistStore(store)

export { persistor }

export default store
