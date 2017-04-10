import test from "ava";
import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import Card from "../../src/components/Card";

function getCard(value, selected, vote) {
  return shallow(<Card value={value} selected={selected} vote={vote} />);
}

test("Card is selected", t => {
  const wrapper = getCard("5", true);
  t.true(wrapper.find(".card").hasClass("selected"));
});

test("Card is not selected", t => {
  const wrapper = getCard("5", false);
  t.false(wrapper.find(".card").hasClass("selected"));
});

test("Clicking Card triggers vote", t => {
  const vote = sinon.spy();
  const wrapper = getCard("5", false, vote);
  wrapper.find(".card").simulate("click");
  t.true(vote.calledOnce);
});

test("Card value is rendered", t => {
  const VALUE = "13";
  const wrapper = getCard(VALUE, false);
  t.is(wrapper.find(".card-text").text(), VALUE);
});
