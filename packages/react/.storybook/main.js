const rootMain = require('../../../.storybook/main');
const { mergeConfig } = require('vite');
const viteNxProjectPaths =
  require('@nxext/vite/src/executors/utils/nx-project-paths/index').default;
const { resolve } = require('path');
const {
  vanillaExtractPlugin
} = require('@vanilla-extract/vite-plugin');

const workspaceRoot = resolve(__dirname, '../../../');

module.exports = {
  ...rootMain,

  core: {
    ...rootMain.core,
    builder: '@storybook/builder-vite'
  },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    ...rootMain.addons,
    '@nrwl/react/plugins/storybook',
    'storybook-dark-mode'
  ],
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [
        viteNxProjectPaths({ workspaceRoot }),
        vanillaExtractPlugin()
      ]
      // customize the Vite config here
    });
  }
};
