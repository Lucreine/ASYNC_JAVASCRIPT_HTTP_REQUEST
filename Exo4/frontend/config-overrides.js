const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    assert: require.resolve('assert'),
    process: require.resolve('process/browser')
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser'
    })
  );

  return config;
};
