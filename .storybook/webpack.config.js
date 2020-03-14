const path = require('path');
const pkgpath = require('packpath');

const source = (...paths) => path.resolve(pkgpath.self(), './src', ...paths);

module.exports = async ({ config }) => {
  config.resolve.alias = {
    '@tags': source('ui/tags'),
    '@components': source('ui/components'),
    '@sbcomponents': source('ui/storybook'),
    '@layouts': source('ui/layouts'),
    '@css': source('css'),
    ...config.resolve.alias
  },
  config.module.rules.push({
    test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf)$/,
    use: [{
      loader: 'url-loader'
    }]
  })

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
  config.entry.push(`/${root}/bundle.css.js`);

  return config;
};
