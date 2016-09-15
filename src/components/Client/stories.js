import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Client from './';

const vote = 5;
const nickname = 'John Doe';

storiesOf('Client', module)
  .add('Default view', () => (
    <Client nickname={nickname} />
  ))
  .add('Voted view', () => (
    <Client nickname={nickname} vote={vote} />
  ));
