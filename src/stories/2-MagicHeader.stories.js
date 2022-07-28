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
    <MagicHeader
      heading="Hello,"
      middle="My name is Conner Parsley."
    >
      <Heading variant="h3" element="h2">
        I transform imagination into a web-reality.
      </Heading>
      <Paragraph>
        Technology can help humans tell new stories
        in ways like never before, but Cyberspace is a vast sea. Let me help you navigate!
      </Paragraph>
    </MagicHeader>
  </Pageshell>
);

ToStorybook.story = {
  name: '2 - Magic Header',
};
