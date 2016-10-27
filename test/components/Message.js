import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../src/components/Message';

function getMessage(value, show) {
  return shallow(<Message message={value} showError={show} />);
}

test('Message shows/hides', t => {
  const wrapper = getMessage('This is a message', true);
  t.true(wrapper.find('.message').hasClass('showError'));
  const wrapperNotShow = getMessage('This is a message', false);
  t.false(wrapperNotShow.find('.message').hasClass('showError'));
});
