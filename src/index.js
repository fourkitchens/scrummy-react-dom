import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import ScrummyAPI from './actions/ScrummyAPI';
import Scrummy from './containers/Scrummy';
import './scss/main.scss';

const initialState = {
  game: {
    nickname: '',
    votes: {},
    users: [],
    points: [],
  },
  ui: {
    revealed: false,
    loggedIn: false,
  },
};

const startUp = () => {
  const setup = applyMiddleware(thunkMiddleware)(createStore);
  const store = setup(rootReducer, initialState);
  window.scrummyAPI = new ScrummyAPI('ws://localhost:8001', store);
  return store;
};

render(
  <Provider store={startUp()}>
    <Scrummy />
  </Provider>,
  document.getElementsByTagName('main')[0]
);
