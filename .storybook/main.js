const path = require('path');

// your app's webpack.config.js
const custom = require('./webpack.config.js');
    
const root = path.relative('/', './');
config.entry.push(`/${root}/bundle.css.js`);

module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: {custom.webpack}
};


