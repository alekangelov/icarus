

const rootMain = require('../../../.storybook/main');
const { mergeConfig } = require('vite');
const viteNxProjectPaths =
  require('@nxext/vite/src/executors/utils/nx-project-paths/index').default;
const { resolve } = require('path');
const {
  vanillaExtractPlugin
} = require('@vanilla-extract/vite-plugin');

const workspaceRoot = resolve(__dirname, '../../../');

const tsconfigPath = resolve(__dirname, './tsconfig.base.json');

module.exports = {
  ...rootMain,

  core: {
    ...rootMain.core,
  },

  stories: [
    ...rootMain.stories,
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    ...rootMain.addons,
    '@nrwl/react/plugins/storybook',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: './tsconfig.base.json',
      shouldExtractLiteralValuesFromEnum: false,
      esModuleInterop: false,
      propFilter: (prop) =>
        prop.parent
          ? !/node_modules/.test(prop.parent.fileName)
          : true
    }
  },
  async viteFinal(config, { configType }) {
    config.base = process.env.BASE_URL || config.base;

    // return the customized config
    return mergeConfig(config, {
      plugins: [
        viteNxProjectPaths({ workspaceRoot }),
        vanillaExtractPlugin()
      ],

      // customize the Vite config here
    });
  }
}