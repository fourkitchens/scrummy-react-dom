import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import VotingResult from '../src/components/VotingResult';

test('Clicking button calls respective click handler', t => {
  const NICKNAME = 'John Doe';
  const onReveal = sinon.spy();
  const onReset = sinon.spy();
  const wrapper = shallow(<VotingResult
    nickname={NICKNAME}
    onReveal={onReveal}
    onReset={onReset}
  />);
  wrapper.find('#btnReveal').simulate('click');
  wrapper.find('#btnReset').simulate('click');
  t.true(onReveal.calledOnce);
  t.true(onReset.calledOnce);
});
