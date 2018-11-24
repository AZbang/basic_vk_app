import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import loading from './loading'
import movies from './movies'
import vk from './vk'

export default (history) => combineReducers({
  router: connectRouter(history),
  vk, movies, loading
});
