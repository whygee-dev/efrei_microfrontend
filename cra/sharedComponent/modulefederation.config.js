const { dependencies } = require('./package.json');

module.exports = {
  name: 'cra_sharedcomponent',
  exposes: {
    './Button': './src/Button',
    './Footer': './shared/Footer',
    './Header': './shared/Header',
  },
  filename: 'remoteEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
