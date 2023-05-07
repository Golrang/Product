const { mergeConfig } = require("vite");
const tsconfigPaths = require("vite-tsconfig-paths");
module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    interactionsDebugger: true,
    buildStoriesJson: true,
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths.default()],
      build: {
        sourcemap: false,
      },
    });
  },
};
