import test from 'ava';
import React from 'react';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';
import VotingResult from '../src/components/VotingResult';

test('Toggle hides game link', t => {
  const NICKNAME = 'John Doe';
  const NOOP = () => {};
  const wrapper = render(<VotingResult
    nickname={NICKNAME}
    onReveal={NOOP}
    onReset={NOOP}
    onGameLinkToggle={NOOP}
    gameLinkToggled
  />);
  t.true(wrapper.find('#gameLink').hasClass('open'));
  t.true(wrapper.find('#btnLink').hasClass('active'));
});

test('Clicking button calls respective click handler', t => {
  const NICKNAME = 'John Doe';
  const onReveal = sinon.spy();
  const onReset = sinon.spy();
  const onGameLinkToggle = sinon.spy();
  const wrapper = shallow(<VotingResult
    nickname={NICKNAME}
    onReveal={onReveal}
    onReset={onReset}
    onGameLinkToggle={onGameLinkToggle}
    gameLinkToggled
  />);
  wrapper.find('#btnReveal').simulate('click');
  wrapper.find('#btnReset').simulate('click');
  wrapper.find('#btnLink').simulate('click');
  t.true(onReveal.calledOnce);
  t.true(onReset.calledOnce);
  t.true(onGameLinkToggle.calledOnce);
});
