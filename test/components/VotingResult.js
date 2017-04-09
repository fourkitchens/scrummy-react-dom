import test from "ava";
import React from "react";
import { shallow, render } from "enzyme";
import sinon from "sinon";
import VotingResult from "../../src/components/VotingResult";

test("Watch users do not show in VotingResult client list", t => {
  const USERS = [
    { nickname: "John Doe", watch: true },
    { nickname: "Jane Doe" }
  ];
  const wrapper = shallow(
    <VotingResult
      users={USERS}
      votes={{}}
      revealed={false}
      reveal={() => {}}
      reset={() => {}}
    />
  );
  t.is(wrapper.find("#clients").length, 1);
});

test("Clicking button calls respective click handler", t => {
  const USERS = [{ nickname: "John Doe" }, { nickname: "Jane Doe" }];

  const VOTES = {
    "John Done": 5
  };
  const reveal = sinon.spy();
  const reset = sinon.spy();
  const wrapper = shallow(
    <VotingResult
      users={USERS}
      votes={VOTES}
      revealed={false}
      reveal={reveal}
      reset={reset}
    />
  );
  wrapper.find("#btnReveal").simulate("click");
  wrapper.find("#btnReset").simulate("click");
  t.true(reveal.calledOnce);
  t.true(reset.calledOnce);
});

test("Results do not show if not revealed", t => {
  const USERS = [{ nickname: "John Doe" }, { nickname: "Jane Doe" }];

  const VOTES = {
    "John Done": 5
  };
  const reveal = sinon.spy();
  const reset = sinon.spy();
  const wrapper = render(
    <VotingResult
      users={USERS}
      votes={VOTES}
      revealed={false}
      reveal={reveal}
      reset={reset}
    />
  );
  const text = wrapper.find(".vote").text();
  t.falsy(text);
});

test("Results show if revealed and not watching", t => {
  const USERS = [{ nickname: "John Doe" }, { nickname: "Jane Doe" }];

  const VOTES = {
    "John Doe": "5"
  };
  const reveal = sinon.spy();
  const reset = sinon.spy();
  const wrapper = render(
    <VotingResult
      users={USERS}
      votes={VOTES}
      reveal={reveal}
      reset={reset}
      revealed
    />
  );
  const text = wrapper.find(".vote").text();
  t.is(text, "5");
});

test("Game url text is selected if clicked", t => {
  const spy = sinon.spy();
  const value = "http://localhost:8080";
  const temp = document.getElementById;
  document.getElementById = () => ({
    setSelectionRange: spy,
    value
  });
  const wrapper = shallow(
    <VotingResult
      users={[]}
      votes={{}}
      revealed={false}
      reveal={() => {}}
      reset={() => {}}
    />
  );
  wrapper
    .find("#txtUrl")
    .simulate("click", { currentTarget: { id: "txtUrl" } });
  t.true(spy.calledOnce);
  t.true(spy.calledWith(0, value.length));
  document.getElementById = temp;
});
