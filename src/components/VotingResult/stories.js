import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import VotingResult from './';

const NICKNAME = 'John Doe';

storiesOf('VotingResult', module)
  .add('Default view', () => (
    <VotingResult
      nickname={NICKNAME}
      onReveal={action('Signed in')}
      onReset={action('Watching')}
    />
  ));
