const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {

    //console.log(JSON.stringify(config));
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

// Remove the existing css rule
config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['css-loader'],
    include: path.resolve(__dirname, '../'),
  });

config.module.rules.push({
    test: /\.svg$/,
    loader: 'raw-loader',
    include: path.resolve(__dirname,'../')
});
config.resolve.extensions.push('.svg');
config.module.rules.forEach(function(data, key) {
    if (data.test.toString().indexOf('svg|') >= 0) {
        config.module.rules[key].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
        return false;
    }
});

config.module.rules.forEach(function(data, key) {
    if (data.test.toString().indexOf('css|') >= 0) {
        config.module.rules[key].options.modules = false;
        return false;
    }
});

  // Return the altered config
  return config;
};