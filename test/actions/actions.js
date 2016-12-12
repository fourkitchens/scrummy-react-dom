import test from 'ava';
import sinon from 'sinon';
import { vote, login, reveal, reset, changeGameName } from '../../src/actions';
import messageTypes from '../../src/actions/messageTypes';

test.beforeEach(() => {
  window.scrummyAPI = {};
  window.scrummyAPI.emit = sinon.spy();
});

test('vote action dispatches/emits placeVote', t => {
  const value = 5;
  const dispatch = sinon.spy();
  const state = {
    game: {
      game: 'blue',
      nickname: 'todd',
      votes: { todd: 3 },
    },
  };
  vote(value)(dispatch, () => state);
  t.true(dispatch.calledOnce);
  t.true(dispatch.calledWith({ type: messageTypes.placeVote, value }));
  t.true(window.scrummyAPI.emit.calledOnce);
  t.true(window.scrummyAPI.emit.calledWith(messageTypes.placeVote, {
    vote: value,
    game: state.game.game,
    nickname: state.game.nickname,
  }));
});

test('vote action dispatches/emits revoke when vote value is same', t => {
  const value = 3;
  const dispatch = sinon.spy();
  const state = {
    game: {
      game: 'blue',
      nickname: 'todd',
      votes: { todd: value },
    },
  };
  vote(value)(dispatch, () => state);
  // t.true(dispatch.calledWith({ type: messageTypes.revokeVote }));
  t.true(window.scrummyAPI.emit.calledOnce);
  t.true(window.scrummyAPI.emit.calledWith(messageTypes.revokeVote, {
    game: state.game.game,
    nickname: state.game.nickname,
  }));
});

test('login action emits signIn', t => {
  const nickname = 'suzy';
  const game = 'green';
  const dispatch = sinon.spy();
  login(nickname, game)(dispatch);
  t.true(window.scrummyAPI.emit.calledOnce);
  t.true(window.scrummyAPI.emit.calledWith(messageTypes.signIn, {
    game,
    nickname,
  }));
});

test('reveal action dispatches/emits reveal', t => {
  const dispatch = sinon.spy();
  const state = {
    game: {
      game: 'blue',
      nickname: 'todd',
      votes: { todd: '5' },
    },
  };
  reveal()(dispatch, () => state);
  t.true(dispatch.calledOnce);
  t.true(dispatch.calledWith({ type: messageTypes.reveal }));
  t.true(window.scrummyAPI.emit.calledOnce);
  t.true(window.scrummyAPI.emit.calledWith(messageTypes.reveal, {
    game: state.game.game,
    nickname: state.game.nickname,
  }));
});

test('reset action dispatches/emits reset', t => {
  const dispatch = sinon.spy();
  const state = {
    game: {
      game: 'blue',
      nickname: 'todd',
      votes: { todd: '5' },
    },
  };
  reset()(dispatch, () => state);
  t.true(dispatch.calledOnce);
  t.true(dispatch.calledWith({ type: messageTypes.reset }));
  t.true(window.scrummyAPI.emit.calledOnce);
  t.true(window.scrummyAPI.emit.calledWith(messageTypes.reset, {
    game: state.game.game,
    nickname: state.game.nickname,
  }));
});

test('changeGameName action dispatches changeGameName and emits getPlayerCount', t => {
  const dispatch = sinon.spy();
  const game = 'blue';
  changeGameName(game)(dispatch);
  t.true(dispatch.calledOnce);
  t.true(dispatch.calledWith({ type: 'changeGameName', data: { game } }));
  t.true(window.scrummyAPI.emit.calledOnce);
  t.true(window.scrummyAPI.emit.calledWith('getPlayerCount', { game }));
});
