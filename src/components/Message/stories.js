import React from "react";
import { storiesOf } from "@kadira/storybook";
import Message from "./";

const MESSAGE = "Something happened and this is a message.";

storiesOf("Message", module).add("Show message", () => (
  <Message message={MESSAGE} showMessage />
));
