import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from './';

const CARD_VALUE = 13;

storiesOf('Card', module)
  .add('Default view', () => (
    <Card value={CARD_VALUE} />
  ))
  .add('Selected view', () => (
    <Card value={CARD_VALUE} selected />
  ));
