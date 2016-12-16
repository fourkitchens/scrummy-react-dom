import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Login from '../../src/components/Login';

test('Click Play/watch calls respective handler', t => {
  const onPlay = sinon.spy();
  const onWatch = sinon.spy();
  const onChange = sinon.spy();
  const wrapper = shallow(<Login
    onPlayClick={onPlay}
    onWatchClick={onWatch}
    welcomeText={'Welcome!'}
    onChangeGameName={onChange}
  />);
  wrapper.find('#txtNickname').simulate('change', { target: { value: 'luke' } });
  wrapper.find('#txtGame').simulate('change', { target: { value: 'blue' } });
  wrapper.find('#btnSignIn').simulate('click', { preventDefault() {} });
  wrapper.find('#btnObserve').simulate('click', { preventDefault() {} });
  t.true(onPlay.calledOnce);
  t.true(onWatch.calledOnce);
});
