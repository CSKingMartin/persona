import React from 'react';
import { linkTo } from '@storybook/addon-links'; // links to other stories
import ColorSwatch from '@sbcomponents/color-swatch';
import Grid from '@layouts/grid';

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
  <Grid col="4">
    {colors.map((color, index) => (
      <ColorSwatch key={index} name={color.name} hex={color.hex}>
        waa
      </ColorSwatch>
    ))}
  </Grid>
);

ToStorybook.story = {
  name: '0 - Overview',
};
