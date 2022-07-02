const { mergeConfig } = require("vite")

const { resolve } = require("path")

const alias = {
  '@icarus/core': resolve(__dirname, '../packages/core/src/index.ts')
}

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@storybook/builder-vite'],
  features: {
    storyStoreV7: true,
  },
  core: { builder: "@storybook/builder-vite" },

  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
  viteFinal: (config, { configType }) => {
    console.log(alias)
    return mergeConfig(config, {
      alias,
    })
  }
};
