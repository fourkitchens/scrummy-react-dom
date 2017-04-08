import React from "react";
import { storiesOf } from "@kadira/storybook";
import Client from "./";

const VOTE = 5;
const NICKNAME = "John Doe";

storiesOf("Client", module)
  .add("Default view", () => <Client nickname={NICKNAME} />)
  .add("Voted view", () => <Client nickname={NICKNAME} vote={VOTE} />);
