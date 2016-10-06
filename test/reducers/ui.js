import test from 'ava';
import { reducerTest } from 'redux-ava';
import { ui } from '../../src/reducers/ui';
import messageTypes from '../../src/actions/messageTypes';

test('UI reducer is unchanged if action type not matched', reducerTest(ui, {}, {}, {}));
test('UI reducer is unchanged if action has no type', t => {
  const state = ui(undefined, {});
  t.deepEqual(state, {});
});

test('UI reducer handles reveal', reducerTest(
  ui,
  { revealed: false },
  { type: messageTypes.reveal },
  { revealed: true }
));

test('UI reducer handles reset', reducerTest(
  ui,
  { revealed: true },
  { type: messageTypes.reset },
  { revealed: false }
));

test('UI reducer handles youSignedIn', reducerTest(
  ui,
  { signedIn: false },
  { type: messageTypes.youSignedIn },
  { signedIn: true }
));
