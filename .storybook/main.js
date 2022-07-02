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
};
