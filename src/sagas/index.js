import { takeEvery } from 'redux-saga/effects'
import { searchMovies } from './imdb'

export default function* rootSaga() {
  yield takeEvery('FETCH_SEARCH_MOVIES', searchMovies)
}
