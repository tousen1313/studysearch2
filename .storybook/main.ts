import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../app/**/*.mdx',
    '../app/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      };
    }
    if (config.module) {
      config.module = {
        rules: config.module.rules
          ?.map((rule) => {
            if (typeof rule !== 'object') {
              return rule;
            }
            if (rule && /svg/.test(String(rule.test))) {
              rule.test = /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$/i;
            }
            return rule;
          })
          .concat({
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  icon: true,
                  svgProps: {
                    fill: 'currentColor',
                  },
                },
              },
            ],
          }),
      };
    }
    return config;
  },
};
export default config;
