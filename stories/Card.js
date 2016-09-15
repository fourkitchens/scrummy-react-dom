import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from '../src/components/Card';

const value = 13;

storiesOf('Card', module)
  .add('Default view', () => (
    <Card value={value} />
  ))
  .add('Selected view', () => (
    <Card value={value} selected />
  ));
