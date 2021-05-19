const {
  override,
  overrideDevServer,
  addWebpackPlugin,
  addDecoratorsLegacy
} = require("customize-cra");
const paths = require('react-scripts/config/paths');
const CopyPlugin = require('copy-webpack-plugin');


const multipleEntry = require('react-app-rewire-multiple-entry')([
  {
    // points to the popup entry point
    entry: paths.appIndexJs,
    template: 'public/popup.html',
    outPath: '/popup.html'
  },
  {
    // points to the options page entry point
    entry: paths.appSrc + '/options.js',
    template: 'public/index.html',
    outPath: '/index.html'
  }
]);

const devServerConfig = () => config => {
  return {
    ...config,
    // webpackDevService doesn't write the files to desk
    // so we need to tell it to do so so we can load the
    // extension with chrome
    writeToDisk: true
  }
}

const copyPlugin = new CopyPlugin({
  patterns: [
    // copy assets
    { from: 'public', to: '' },
    { from: 'src/background.js', to: '' }
  ]
})

module.exports = {
  webpack: override(
    addWebpackPlugin(
      copyPlugin
    ),
    addDecoratorsLegacy(),
    multipleEntry.addMultiEntry
  ),
  devServer: overrideDevServer(
    devServerConfig()
  ),

};
