import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
import rootReducer from './reducers';
import apiSaga from './sagas';
// import promise from 'redux-promise';
// import { fetchCoins } from './actions/fetch_coins';
import AppContainer from './containers/app_container';
import registerServiceWorker from './registerServiceWorker';


function devToolsCompose(...args) {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    args.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  return compose.apply(null, args);
}

const sagaMiddleware = createSagaMiddleware();

const configureStore = createStore (
  rootReducer,
  devToolsCompose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(apiSaga);

// const action = type => store.dispatch({ type });


// configureStore.dispatch(fetchCoins());


ReactDOM.render(
  <Provider store={configureStore}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
