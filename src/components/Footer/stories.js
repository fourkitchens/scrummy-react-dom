import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Footer from './';

storiesOf('Footer', module)
  .add('Default view', () => (
    <Footer />
  ));
