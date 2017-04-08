import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import VotingResult from "./";

const USERS = [{ nickname: "John Doe" }, { nickname: "Jane Doe" }];

const VOTES = {
  "John Doe": "5",
  "Jane Doe": "8"
};

storiesOf("VotingResult", module)
  .add("Default view", () => (
    <VotingResult
      users={USERS}
      votes={VOTES}
      onReveal={linkTo("VotingResult", "Reveal votes")}
      onReset={linkTo("VotingResult", "Reset votes")}
    />
  ))
  .add("Reveal votes", () => (
    <VotingResult
      users={USERS}
      votes={VOTES}
      onReveal={action("Revealed votes")}
      onReset={linkTo("VotingResult", "Reset votes")}
      revealed
    />
  ))
  .add("Reset votes", () => (
    <VotingResult
      users={USERS}
      votes={{}}
      revealed={false}
      onReveal={action("Revealed votes")}
      onReset={action("Reset votes")}
    />
  ));
