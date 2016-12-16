import messageTypes from './messageTypes';
import Cookies from 'js-cookie';

export function vote(value) {
  return (dispatch, getState) => {
    // If the user has already vote this value, revoke the vote. Otherwise, place vote.
    if (getState().game.votes[getState().game.nickname] === value) {
      window.scrummyAPI.emit(messageTypes.revokeVote, {
        game: getState().game.game,
        nickname: getState().game.nickname,
      });
    } else {
      dispatch({ type: messageTypes.placeVote, value });
      window.scrummyAPI.emit(messageTypes.placeVote, {
        vote: value,
        game: getState().game.game,
        nickname: getState().game.nickname,
      });
    }
  };
}

export function login(nickname, game, watch = false) {
  return () => {
    Cookies.set('nickname', nickname, { expires: 31536000 });
    window.scrummyAPI.emit(messageTypes.signIn, {
      nickname,
      game,
      watch,
    });
  };
}

export function reveal() {
  return (dispatch, getState) => {
    dispatch({ type: messageTypes.reveal });
    window.scrummyAPI.emit(messageTypes.reveal, {
      game: getState().game.game,
      nickname: getState().game.nickname,
    });
  };
}

export function reset() {
  return (dispatch, getState) => {
    dispatch({ type: messageTypes.reset });
    window.scrummyAPI.emit(messageTypes.reset, {
      game: getState().game.game,
      nickname: getState().game.nickname,
    });
  };
}

export function changeGameName(game) {
  return (dispatch) => {
    dispatch({ type: 'changeGameName', data: { game } });
    window.scrummyAPI.emit('getPlayerCount', { game });
  };
}
