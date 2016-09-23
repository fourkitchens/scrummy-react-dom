import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Readme from './';

storiesOf('Readme', module)
  .add('Default view', () => (
    <Readme />
  ));
