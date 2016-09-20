import test from 'ava';
import React from 'react';
import { render } from 'enzyme';
import Hand from '../src/components/Hand';

test('Hand displays cards for points and nickname', t => {
  const NICKNAME = 'John Doe';
  const wrapper = render(<Hand nickname={NICKNAME} points={['1', '2', '3']} />);
  t.is(wrapper.find('.card').length, 3);
  t.is(wrapper.find('#nickname-display').text(), NICKNAME);
});
