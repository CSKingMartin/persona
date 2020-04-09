import React from 'react';
import { linkTo } from '@storybook/addon-links'; // links to other stories

import Button from '@tags/button';
import ColorSwatch from '@sbcomponents/color-swatch';
import Grid from '@layouts/grid';
import Heading from '@tags/heading';
import Icon from '@tags/icon';
import Link from '@tags/link';
import Pageshell from '@layouts/pageshell';
import Paragraph from '@tags/paragraph';
import Wrapper from '@layouts/wrapper';

const colors = [
  {
    name: 'Wine',
    hex: '#6b3039'
  },
  {
    name: 'Mughal Green',
    hex: '#335e28'
  },
  {
    name: 'Pale Cerulean',
    hex: '#98d0e0'
  },
  {
    name: 'Light Moss Green',
    hex: '#bad9b5'
  },
  {
    name: 'Light Goldenrod Yellow',
    hex: '#eff7cf'
  }
];

export default {
  title: 'Styleguide'
};

export const ToStorybook = () => (
  <Pageshell>
    <Wrapper hasRhythm size="small">
      <Heading>Typography</Heading>
      <Heading element="h1">Heading h1 - Lorem ipsum dolor sit amet.</Heading>
      <Heading element="h2">Heading h2 - Lorem ipsum dolor sit amet.</Heading>
      <Heading element="h3">Heading h3 - Lorem ipsum dolor sit amet.</Heading>
      <Heading element="h4">Heading h4 - Lorem ipsum dolor sit amet.</Heading>
      <Heading element="h5">Heading h5 - Lorem ipsum dolor sit amet.</Heading>
      <Heading element="h6">Heading h6 - Lorem ipsum dolor sit amet.</Heading>
      <Paragraph>
        Body copy
      </Paragraph>
      <Paragraph>
        Laborum et sed aute culpa ut do duis veniam duis velit velit labore qui
        esse duis ad laborum exercitation quis sint officia tempor sunt voluptate
        irure ullamco ut non labore adipisicing anim culpa dolore culpa fugiat cillum
        veniam tempor duis eu sunt et dolore enim est anim in anim commodo sit
        elit eu ut qui commodo ut exercitation incididunt qui pariatur voluptate
        in enim magna aliqua aliquip reprehenderit sint nisi fugiat tempor culpa
        ea eiusmod exercitation qui magna velit eu magna veniam non dolore et ullamco
        adipisicing nulla ullamco laborum sint aliquip laboris occaecat ex sed sint
        irure commodo in ut culpa ut amet veniam qui velit qui cupidatat anim
        dolor nostrud ut occaecat laboris qui mollit elit mollit esse veniam esse
        et velit nostrud adipisicing elit aliqua laborum anim veniam cupidatat
        deserunt et irure aliquip ut dolore magna duis id aliquip irure in cupidatat
        ut incididunt incididunt.
      </Paragraph>
      <Paragraph>Be careful where you <Link href="#hi-mom">click!</Link></Paragraph>
      <Grid col="3">
        {colors.map((color, index) => (
          <ColorSwatch key={index} name={color.name} hex={color.hex} />
        ))}
      </Grid>
      <Button>Click me</Button>

      <Wrapper hasRhythm size="small">
        I keep bits of my online persona around places like:
        <Grid col="4">
          <Icon name="github" />
          <Icon name="linkedin-square" />
          <Icon name="last-fm" />
          <Icon name="instagram" />
        </Grid>
      </Wrapper>
    </Wrapper>
  </Pageshell>
);

ToStorybook.story = {
  name: '0 - Overview',
};
