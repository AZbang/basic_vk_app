import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'

import registerServiceWorker from './sw';
import {saveState} from './storage';
import {store, history} from './store';
import App from './containers/App';
import './index.css';

store.subscribe(() => {
  saveState('bookmarks', store.getState().movies.bookmarks);
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path='/:pageId?' component={(props) => <App pageId={props.match.params.pageId}/>}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
