import test from "ava";
import { reducerTest } from "redux-ava";
import { ui } from "../../src/reducers/ui";
import messageTypes from "../../src/actions/messageTypes";

test(
  "UI reducer is unchanged if action type not matched",
  reducerTest(ui, {}, {}, {})
);
test("UI reducer is unchanged if action has no type", t => {
  const state = ui(undefined, {});
  t.deepEqual(state, {});
});

test(
  "UI reducer handles reveal",
  reducerTest(
    ui,
    { revealed: false },
    { type: messageTypes.reveal },
    { revealed: true }
  )
);

test(
  "UI reducer handles reset",
  reducerTest(
    ui,
    { revealed: true },
    { type: messageTypes.reset },
    { revealed: false }
  )
);

test(
  "UI reducer handles youSignedIn",
  reducerTest(
    ui,
    { signedIn: false },
    { type: messageTypes.youSignedIn },
    { signedIn: true }
  )
);

test(
  "UI reducer handles playerCount",
  reducerTest(
    ui,
    { numPlayers: 0 },
    { type: messageTypes.playerCount, data: { numPlayers: 5 } },
    { numPlayers: 5 }
  )
);

test(
  "UI reducer handles error",
  reducerTest(
    ui,
    { showMessage: false },
    { type: messageTypes.error },
    { showMessage: true }
  )
);

test(
  "UI reducer handles hideError",
  reducerTest(
    ui,
    { showMessage: true },
    { type: "hideError" },
    { showMessage: false }
  )
);

test(
  "UI reducer handles setError",
  reducerTest(
    ui,
    { showMessage: false },
    { type: "setError" },
    { showMessage: true }
  )
);
