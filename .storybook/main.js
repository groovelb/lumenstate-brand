

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  // Serve static assets from /public so /product/* media works in stories
  "staticDirs": ["../public"],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;