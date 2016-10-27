import test from 'ava';
import { reducerTest } from 'redux-ava';

import { game } from '../../src/reducers/game';
import messageTypes from '../../src/actions/messageTypes';

test('Game reducer is unchanged if action type not matched', reducerTest(game, {}, {}, {}));
test('Game reducer is unchanged if action has no type', t => {
  const state = game(undefined, {});
  t.deepEqual(state, {});
});

test('Game reducer handles placeVote', reducerTest(
  game,
  { nickname: 'flip', votes: {} },
  { type: messageTypes.placeVote, value: '5' },
  { nickname: 'flip', votes: { flip: '5' } }
));

test('Game reducer handles youSignedIn', reducerTest(
  game,
  { nickname: '', users: [], points: [] },
  {
    type: messageTypes.youSignedIn,
    data: { nickname: 'flip', users: [{ nickname: 'flip' }], points: ['1', '2', '3'] },
  },
  { nickname: 'flip', users: [{ nickname: 'flip' }], points: ['1', '2', '3'] }
));

test('Game reducer handles someoneSignedIn', reducerTest(
  game,
  { nickname: 'flip', users: [{ nickname: 'flip' }] },
  {
    type: messageTypes.someoneSignedIn,
    data: { users: [{ nickname: 'flip' }, { nickname: 'luke' }] },
  },
  { nickname: 'flip', users: [{ nickname: 'flip' }, { nickname: 'luke' }] }
));

test('Game reducer handles reset', reducerTest(
  game,
  { nickname: 'flip', votes: { flip: '5' } },
  {
    type: messageTypes.reset,
    data: { votes: {} },
  },
  { nickname: 'flip', votes: {} }
));

test('Game reducer handles reveal', reducerTest(
  game,
  { nickname: 'flip', votes: { flip: '5' } },
  {
    type: messageTypes.reveal,
    data: {},
  },
  { nickname: 'flip', votes: { flip: '5' } }
));


test('Game reducer handles reveal', reducerTest(
  game,
  { nickname: 'flip', votes: { flip: '5' } },
  {
    type: messageTypes.reveal,
    data: {},
  },
  { nickname: 'flip', votes: { flip: '5' } }
));

test('Game reducer handles someoneVoted', reducerTest(
  game,
  { nickname: 'flip', votes: { flip: '5' } },
  {
    type: messageTypes.someoneVoted,
    data: { votes: { flip: '5', luke: '13' } },
  },
  { nickname: 'flip', votes: { flip: '5', luke: '13' } }
));

test('Game reducer handles clientRevoke', reducerTest(
  game,
  { nickname: 'flip', votes: { flip: '5', luke: '13' } },
  {
    type: messageTypes.clientRevoke,
    data: { nickname: 'flip' },
  },
  { nickname: 'flip', votes: { luke: '13' } }
));


test('Game reducer handles error', reducerTest(
  game,
  {},
  {
    type: messageTypes.error,
    data: { message: 'This is an error' },
  },
  { message: 'This is an error' }
));
