import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { storiesOf } from "@kadira/storybook";
import Hand from "./";

const Store = story => (
  <Provider
    store={createStore(() => ({
      game: {
        votes: {},
        nickname: ""
      }
    }))}
  >
    {story()}
  </Provider>
);

const POINTS = ["1", "2", "3", "5", "13"];
const NICKNAME = "John Doe";

storiesOf("Hand", module)
  .addDecorator(Store)
  .add("Default view", () => <Hand points={POINTS} nickname={NICKNAME} />);
