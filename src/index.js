import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import rootReducer from './reducers';
import promise from 'redux-promise';
import { fetchCoins } from './actions/fetch_coins';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';


function devToolsCompose(...args) {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    args.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return compose.apply(null, args);
}


const configureStore = createStore (
  rootReducer,
  devToolsCompose(
    applyMiddleware(promise, thunkMiddleware)
  )
);

configureStore.dispatch(fetchCoins());


ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
