import React from 'react';
import { linkTo } from '@storybook/addon-links'; // links to other stories

import MagicHeader from '@components/magic-header';
import Pageshell from '@layouts/pageshell';
import Paragraph from '@tags/paragraph';
import Wrapper from '@layouts/wrapper';

export default {
  title: 'Magic Header'
};

export const ToStorybook = () => (
  <Pageshell>
    <Wrapper hasRhythm size="small">
      <MagicHeader
        heading="Hello,"
        prefix="I "
        middle=" build front-end styleguides "
        variable={
          [
            "cast magic spells",
            "brew and bubble potions",
            "make dreams come true",
            "grant wishes",
            "commit sorcery"
          ]
        }
        suffix="with HTML, CSS, and Javascript!"
      >
        <Paragraph>
          That's not all I do! Technology can help humans tell new stories
          in ways like never before. Accessible at the tips of our fingers
          are beams of light that connect to ideas, music, culture, alongside
          the direct line to hundreds of libraries worth of information.
          Cyberspace is a vast sea. Let me help you navigate!
        </Paragraph>
      </MagicHeader>
    </Wrapper>
  </Pageshell>
);

ToStorybook.story = {
  name: '2 - Magic Header',
};
