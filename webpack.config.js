const webpack = require('webpack');
const path = require('path');
const pkgpath = require('packpath');

const { directories } = require(path.resolve(pkgpath.self(), 'package.json'));
const source = (...paths) => path.resolve(pkgpath.self(), './', ...paths);

module.exports = {
  webpack: (config, { dev }) => {
    config.resolve.alias = {
      '@tags': source('./src/ui/tags'),
      '@components': source('./src/ui/components'),
      '@sbcomponents': source('./src/ui/storybook'),
      '@layouts': source('./src/ui/layouts'),
      '@css': source('./src/css'),
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
        {
          loader: 'postcss-loader',
        },
      ],
      include: path.resolve(__dirname, '/')
    });
    
    const root = path.relative('/', './');
    config.entry.push(`/${root}/bundle.css.js`);

    return config;
  }
}
