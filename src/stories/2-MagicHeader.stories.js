import React from 'react';
import { linkTo } from '@storybook/addon-links'; // links to other stories

import Heading from '@tags/heading';
import Icon from '@tags/icon';
import MagicHeader from '@components/magic-header';
import Pageshell from '@layouts/pageshell';
import Paragraph from '@tags/paragraph';
import Wrapper from '@layouts/wrapper';

export default {
  title: 'Magic Header'
};

export const ToStorybook = () => (
  <Pageshell>
    <MagicHeader>
      <Heading>Hello,</Heading>
      <Heading element="h4">My name is Conner Wells. My quest, unknown!</Heading>
      <Heading element="h5">
        I build front-end styleguides to transform imagination into
        reality!
      </Heading>
      <Paragraph>
        But that's not all I do! Technology can help humans tell new stories
        in ways like never before. Accessible at the tips of our fingers
        are beams of light that connect to ideas, music, culture, alongside
        the direct line to hundreds of libraries worth of information.
        Cyberspace is a vast sea. Let me help you navigate!
      </Paragraph>
    </MagicHeader>
  </Pageshell>
);

ToStorybook.story = {
  name: '2 - Magic Header',
};
