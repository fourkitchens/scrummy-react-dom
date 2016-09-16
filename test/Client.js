import test from 'ava';
import React from 'react';
import Client from '../src/components/Client';
import { render } from 'enzyme';

test('Client voted', t => {
  const wrapper = render(<Client nickname="John Doe" vote="13" />);
  t.true(wrapper.find('.client').hasClass('voted'));
});

test('Card did not vote', t => {
  const wrapper = render(<Client nickname="John Doe" />);
  t.false(wrapper.find('.client').hasClass('voted'));
});
