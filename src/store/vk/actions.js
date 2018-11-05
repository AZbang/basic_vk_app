import * as VKConnect from '@vkontakte/vkui-connect';
// import * as types from './actionTypes';

// const API_VERSION = '5.80';
const APP_ID =  process.env.NODE_ENV === 'production' ? 6738897 : 6738897;

export function fetchAccessToken() {
  return async () => {
    VKConnect.send('VKWebAppGetAuthToken', {'app_id': APP_ID});
  }
}

export function initApp() {
  return async (dispatch) => {
    VKConnect.subscribe(e => {
      console.log(e)
    });
    VKConnect.send('VKWebAppInit');
  }
}

//
// function getNewRequestId() {
//   return (Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)).toString();
// }
