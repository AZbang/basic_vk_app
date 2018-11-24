import { call, put } from 'redux-saga/effects'
import MovieDb from 'moviedb-promise'
import API_KEYS from '../API_KEYS'

const moviedb = new MovieDb(API_KEYS.TMDB_API);

export function* searchMovies(action) {
  yield put({type: 'LOADING_START'});
  const movies = yield call(moviedb.searchMulti, {query: action.query, language: 'ru'});
  yield put({type: 'SET_SEARCH_MOVIES', data: movies});
  yield put({type: 'LOADING_END'});
}

export function* addMovie(action) {
  const movie = yield call(moviedb.movieInfo, {id: action.id, language: 'ru'});
  yield put({type: 'ADD_MOVIE', movie});
}
