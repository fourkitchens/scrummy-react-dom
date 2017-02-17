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
    ga('send', 'event', 'Actions', 'vote', getState().game.game);
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
    ga('send', 'event', 'Actions', 'login', nickname);
  };
}

export function reveal() {
  return (dispatch, getState) => {
    dispatch({ type: messageTypes.reveal });
    window.scrummyAPI.emit(messageTypes.reveal, {
      game: getState().game.game,
      nickname: getState().game.nickname,
    });
    ga('send', 'event', 'Actions', 'reveal', getState().game.game);
  };
}

export function reset() {
  return (dispatch, getState) => {
    dispatch({ type: messageTypes.reset });
    window.scrummyAPI.emit(messageTypes.reset, {
      game: getState().game.game,
      nickname: getState().game.nickname,
    });
    ga('send', 'event', 'Actions', 'reset', getState().game.game);
  };
}

export function changeGameName(game) {
  return (dispatch) => {
    dispatch({ type: 'changeGameName', data: { game } });
    window.scrummyAPI.emit('getPlayerCount', { game });
  };
}

export function setError(message) {
  return {
    type: 'setError',
    data: { message },
  };
}
