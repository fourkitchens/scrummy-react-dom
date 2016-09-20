import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hand from './';

const POINTS = ['1', '2', '3', '5', '13'];
const NICKNAME = 'John Doe';

storiesOf('Hand', module)
  .add('Default view', () => (
    <Hand points={POINTS} nickname={NICKNAME} />
  ));
