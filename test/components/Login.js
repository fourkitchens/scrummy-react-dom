import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Login from '../../src/components/Login';

test('Submiting calls handler', t => {
  const onClick = sinon.spy();
  const wrapper = shallow(<Login
    onSubmitClick={onClick}
  />);
  wrapper.find('#txtNickname').simulate('change', { target: { value: 'luke' } });
  wrapper.find('#txtGame').simulate('change', { target: { value: 'blue' } });
  wrapper.find('form').simulate('submit', { preventDefault() {} });
  t.true(onClick.calledOnce);
});
