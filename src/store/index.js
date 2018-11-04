import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import vk from './vk/reducer';

export default combineReducers({
  vk: vk,
  router: routerReducer,
});
