import test from 'ava';
import React from 'react';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';
import VotingResult from '../../src/components/VotingResult';

test('Clicking button calls respective click handler', t => {
  const USERS = [
    { nickname: 'John Doe' },
    { nickname: 'Jane Doe' },
  ];

  const VOTES = {
    'John Done': 5,
  };
  const onReveal = sinon.spy();
  const onReset = sinon.spy();
  const wrapper = shallow(<VotingResult
    users={USERS}
    votes={VOTES}
    revealed={false}
    onReveal={onReveal}
    onReset={onReset}
  />);
  wrapper.find('#btnReveal').simulate('click');
  wrapper.find('#btnReset').simulate('click');
  t.true(onReveal.calledOnce);
  t.true(onReset.calledOnce);
});

test('Results do not show if not revealed', t => {
  const USERS = [
    { nickname: 'John Doe' },
    { nickname: 'Jane Doe' },
  ];

  const VOTES = {
    'John Done': 5,
  };
  const onReveal = sinon.spy();
  const onReset = sinon.spy();
  const wrapper = render(<VotingResult
    users={USERS}
    votes={VOTES}
    revealed={false}
    onReveal={onReveal}
    onReset={onReset}
  />);
  const text = wrapper.find('.vote').text();
  t.falsy(text);
});

test('Results show if revealed', t => {
  const USERS = [
    { nickname: 'John Doe' },
    { nickname: 'Jane Doe' },
  ];

  const VOTES = {
    'John Doe': '5',
  };
  const onReveal = sinon.spy();
  const onReset = sinon.spy();
  const wrapper = render(<VotingResult
    users={USERS}
    votes={VOTES}
    onReveal={onReveal}
    onReset={onReset}
    revealed
  />);
  const text = wrapper.find('.vote').text();
  t.is(text, '5');
});
