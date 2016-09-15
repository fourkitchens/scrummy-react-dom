const webpackConfig = require('../webpack.config');

// Reuse app webpack configuration for storybook.
module.exports = {
  module: webpackConfig.module,
  postcss: webpackConfig.postcss
};
