import React from "react";
import { storiesOf, linkTo } from "@kadira/storybook";
import Card from "./";

const CARD_VALUE = "13";

storiesOf("Card", module)
  .add("Default view", () => (
    <Card value={CARD_VALUE} onVote={linkTo("Card", "Selected view")} />
  ))
  .add("Selected view", () => (
    <Card value={CARD_VALUE} selected onVote={linkTo("Card", "Default view")} />
  ));
