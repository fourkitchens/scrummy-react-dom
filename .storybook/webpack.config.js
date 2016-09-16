const webpackConfig = require('../webpack.config');

// Reuse app webpack configuration for Storybook.
module.exports = {
  module: webpackConfig.module,
  postcss: webpackConfig.postcss
};
