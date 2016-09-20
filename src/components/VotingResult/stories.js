import React from 'react';
import { storiesOf, linkTo } from '@kadira/storybook';
import VotingResult from './';

const NICKNAME = 'John Doe';

storiesOf('VotingResult', module)
  .add('Default view', () => (
    <VotingResult
      nickname={NICKNAME}
      onGameLinkToggle={linkTo('VotingResult', 'Game link not toggled')}
      gameLinkToggled
    />
  ))
  .add('Game link not toggled', () => (
    <VotingResult
      nickname={NICKNAME}
      onGameLinkToggle={linkTo('VotingResult', 'Default view')}
    />
  ));
