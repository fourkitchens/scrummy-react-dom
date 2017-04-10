import test from "ava";
import React from "react";
import { shallow } from "enzyme";
import Hand from "../../src/components/Hand";

test("Hand displays nickname", t => {
  const NICKNAME = "John Doe";
  const wrapper = shallow(
    <Hand nickname={NICKNAME} points={["1", "2", "3"]} vote={() => {}} />
  );
  t.is(wrapper.find("#nickname-display").text(), NICKNAME);
});
