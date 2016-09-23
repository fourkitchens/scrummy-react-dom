import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Login from '../src/components/Login';

test('Clicking button calls respective click handler', t => {
  const onSignIn = sinon.spy();
  const onWatch = sinon.spy();
  const wrapper = shallow(<Login
    onSignIn={onSignIn}
    onWatch={onWatch}
  />);
  wrapper.find('#btnSignIn').simulate('click');
  wrapper.find('#btnObserve').simulate('click');
  t.true(onSignIn.calledOnce);
  t.true(onWatch.calledOnce);
});
