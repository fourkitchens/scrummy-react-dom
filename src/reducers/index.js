import { combineReducers } from 'redux';
import { game } from './game';
import { ui } from './ui';

export default combineReducers({
  game,
  ui,
});
