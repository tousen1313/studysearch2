/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
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
    });
    return config;
  },
  compiler: {
    reactRemoveProperties:
      process.env.NODE_ENV === 'production' ? { properties: ['^data-testid$'] } : false,
  },
  async rewrites() {
    return [
      {
        source: '/ad/:word',
        destination: '/:word',
      },
    ];
  },
  images: {
    domains: ['dev.en-gage.net', 'image-dev.en-gage.net', 'image.en-gage.net'],
  },
};

module.exports = nextConfig;
