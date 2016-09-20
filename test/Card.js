import test from 'ava';
import React from 'react';
import { render } from 'enzyme';
import Card from '../src/components/Card';

function getCard(value, selected) {
  return render(<Card value={value} selected={selected} />);
}

test('Card is selected', t => {
  const wrapper = getCard('5', true);
  t.true(wrapper.find('.card').hasClass('selected'));
});

test('Card is not selected', t => {
  const wrapper = getCard('5', false);
  t.false(wrapper.find('.card').hasClass('selected'));
});

test('Card value is rendered', t => {
  const VALUE = '13';
  const wrapper = getCard(VALUE, false);
  t.is(wrapper.find('.card-text').text(), VALUE);
});
