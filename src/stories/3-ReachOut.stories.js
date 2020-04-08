import React from 'react';
import { linkTo } from '@storybook/addon-links'; // links to other stories

import ContactCard from '@components/contact-card';
import Pageshell from '@layouts/pageshell';
import Paragraph from '@tags/paragraph';
import Wrapper from '@layouts/wrapper';

export default {
  title: 'Contact Card'
};

export const ToStorybook = () => (
  <Pageshell>
    <Wrapper hasRhythm>
      <ContactCard heading="Manning a ship? Searching for a navigator?" cta="Contact me!">
        <Paragraph>I am seeking out opportunities to help channel your web vision.</Paragraph>
      </ContactCard>
    </Wrapper>
  </Pageshell>
);

ToStorybook.story = {
  name: '3 - Contact Card',
};
