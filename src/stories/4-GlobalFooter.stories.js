import React from 'react';
import { linkTo } from '@storybook/addon-links'; // links to other stories

import GlobalFooter from '@components/global-footer';
import Icon from '@tags/icon';
import Link from '@tags/link';
import Pageshell from '@layouts/pageshell';
import Paragraph from '@tags/paragraph';
import Wrapper from '@layouts/wrapper';

export default {
  title: 'Global Footer'
};

export const ToStorybook = () => (
  <Pageshell>
    <GlobalFooter>
      <Paragraph>Want to learn more?</Paragraph>
      <Paragraph>See my <Link target="_blank" href="https://github.com/CSKingMartin/persona"><Icon name="github" /></Link> code or <Link><Icon name="storybook" /></Link> Storybook</Paragraph>
    </GlobalFooter>
  </Pageshell>
);

ToStorybook.story = {
  name: '4 - Global Footer',
};
