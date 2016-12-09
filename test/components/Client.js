import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Client from '../../src/components/Client';

test('Client voted but not revealed', t => {
  const wrapper = shallow(<Client nickname="John Doe" vote="13" />);
  t.true(wrapper.find('.client').hasClass('voted'));
  t.false(wrapper.find('.client').hasClass('vote'));
});

test('Client did not vote or reveal', t => {
  const wrapper = shallow(<Client nickname="John Doe" />);
  t.false(wrapper.find('.client').hasClass('voted'));
  t.false(wrapper.find('.client').hasClass('vote'));
});

test('Client is revealed and voted', t => {
  const wrapper = shallow(<Client nickname="John Doe" vote="5" revealed />);
  t.true(wrapper.find('.client').hasClass('reveal'));
  t.is(wrapper.find('.vote').text(), '5');
});

test('Client is revealed and did not vote', t => {
  const wrapper = shallow(<Client nickname="John Doe" revealed />);
  t.true(wrapper.find('.client').hasClass('reveal'));
  t.is(wrapper.find('.vote').text(), '');
});
