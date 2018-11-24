import { takeEvery } from 'redux-saga/effects'
import { searchMovies, getPopularMovies } from './imdb'

export default function* rootSaga() {
  yield takeEvery('FETCH_SEARCH_MOVIES', searchMovies)
  yield takeEvery('FETCH_POPULAR_MOVIES', getPopularMovies)
}
