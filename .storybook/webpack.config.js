const path = require('path');
const pkgpath = require('packpath');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const source = (...paths) => path.resolve(pkgpath.self(), './src', ...paths);

module.exports = async ({ config }) => {
  config.resolve.alias = {
    '@tags': source('ui/tags'),
    '@components': source('ui/components'),
    '@sbcomponents': source('ui/storybook'),
    '@layouts': source('ui/layouts'),
    '@css': source('css'),
    '@assets': source('assets'),
    '@js': source('js'),
    ...config.resolve.alias
  },

  config.module.rules.push({
    test: /\.css$/,
    use: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './',
          },
        },
      },
    ],
    include: path.resolve(__dirname, '../')
  });

  const root = path.relative('/', './');
  config.entry.push(`/${root}/src/js/bundle.js`);

  return config;
};
