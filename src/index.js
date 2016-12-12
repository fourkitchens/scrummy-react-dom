import config from '../config';
import React from 'react';
import Cookies from 'js-cookie';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import ScrummyAPI from './actions/ScrummyAPI';
import App from './components/App';
import './scss/main.scss';

const nickname = Cookies.get('nickname') || '';
const game = window.location.hash.length ? window.location.hash.substring(1) : '';

const initialState = {
  game: {
    nickname,
    votes: {},
    users: [],
    points: [],
    game,
  },
  ui: {
    revealed: false,
    loggedIn: false,
  },
};

const startUp = () => {
  const setup = applyMiddleware(thunkMiddleware)(createStore);
  const devTools = process.env.NODE_ENV !== 'production' ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : // eslint-disable-line no-underscore-dangle, max-len
    undefined;
  const store = setup(rootReducer, initialState, devTools);
  window.scrummyAPI = new ScrummyAPI(config.apiUrl, store);
  window.scrummyAPI.init();
  return store;
};

render(
  <Provider store={startUp()}>
    <App />
  </Provider>,
  document.getElementsByTagName('main')[0]
);
