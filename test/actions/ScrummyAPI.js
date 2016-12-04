import test from 'ava';
import ScrummyAPI from '../../src/actions/ScrummyAPI';
import configureStore from 'redux-mock-store';
import sinon from 'sinon';
const mockStore = configureStore([]);

test('onmessage dispatches respective action to store', t => {
  const payload = { value: '13', type: 'placeVote' };
  const store = mockStore({});
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.ws.onmessage({ data: JSON.stringify(payload) });
  const actions = store.getActions();
  t.deepEqual(actions[0], payload);
});

test('onmessage calls error when error message is recieved', t => {
  t.plan(1);
  const payload = { message: 'Something bad happened', type: 'error' };
  const store = mockStore({});
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.dispatchErrorHide = () => { t.pass(); };
  scrummyAPI.ws.onmessage({ data: JSON.stringify(payload) });
});

test('onbeforeunload calls emits a disconnect message with game and nickname', t => {
  t.plan(3);
  const payload = { message: 'Something bad happened', type: 'error' };
  const store = mockStore({ game: {
    game: 'coolName',
    nickname: 'name',
    users: [{ nickname: 'name' }],
  } });
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.emit = (type, data) => {
    t.is(type, 'disconnect');
    t.is(data.game, 'coolName');
    t.is(data.nickname, 'name');
  };
  window.onbeforeunload({ data: JSON.stringify(payload) });
});

test('onbeforeunload does nothing if not in a game', t => {
  t.plan(1);
  const payload = { message: 'Something bad happened', type: 'error' };
  const store = mockStore({ game: {} });
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  sinon.spy(scrummyAPI, 'emit');
  t.true(scrummyAPI.emit.notCalled);
  window.onbeforeunload({ data: JSON.stringify(payload) });
});

test('emit sends message', t => {
  t.plan(1);
  const nickname = 'Jess';
  const game = 'True American';
  const payload = { type: 'signIn', data: { nickname, game } };
  const store = mockStore({});
  global.WebSocket = class WebSocket {
    send(msg) {
      t.is(JSON.stringify(payload), msg);
    }
  };
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.emit(payload.type, payload.data);
});

test.cb('error dispatch actions', t => {
  t.plan(1);
  const store = mockStore({});
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.dispatchErrorHide(store, 1);
  // Wait for all actions to be done.
  setTimeout(() => {
    const actions = store.getActions();
    t.deepEqual(actions[0], { type: 'hideError' });
    t.end();
  }, 2);
});

test.cb('error dispatch actions, use default', t => {
  t.plan(1);
  const store = mockStore({});
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.dispatchErrorHide(store);
  // Wait for all actions to be done.
  setTimeout(() => {
    const actions = store.getActions();
    t.deepEqual(actions[0], { type: 'hideError' });
    t.end();
  }, 3002);
});

test('setHash is called when you sign in', t => {
  t.plan(1);
  const payload = {
    type: 'youSignedIn',
    data: { nickname: 'Coach', users: [{ nickname: 'Coach' }], points: ['1', '2', '3'] },
  };
  const store = mockStore({});
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.setHash = () => { t.pass(); };
  scrummyAPI.ws.onmessage({ data: JSON.stringify(payload) });
});

test('setHash pushes game name to history', t => {
  t.plan(2);
  const data = { data: { game: 'gamename' } };
  const store = mockStore({});
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  const spy = sinon.spy(history, 'pushState');
  scrummyAPI.setHash(data);
  t.true(spy.calledOnce);
  t.is(spy.args[0][2], `#${data.data.game}`);
});

test('onopen gets the player count if game is set', t => {
  t.plan(2);
  const game = 'gamename';
  const store = mockStore({ game: { game } });
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  scrummyAPI.emit = (type, data) => {
    t.is(type, 'getPlayerCount');
    t.is(data.game, game);
  };
  scrummyAPI.ws.onopen();
});

test('onopen does not get player count count if game is not set', t => {
  t.plan(1);
  const store = mockStore({ game: { game: '' } });
  const scrummyAPI = new ScrummyAPI('ws://fake.com', store);
  const spy = sinon.spy(scrummyAPI, 'emit');
  scrummyAPI.ws.onopen();
  t.true(spy.notCalled);
});
