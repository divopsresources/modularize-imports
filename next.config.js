const withTM = require('@vercel/examples-ui/transpile')();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withBundleAnalyzer(
  withMDX(
    withTM({
      poweredByHeader: false,
      trailingSlash: true,
      // basePath: '',
      // If you need to customize the basePath, please don't check the example at https://github.com/ixartz/Next-js-Boilerplate/blob/master/src/layout/Meta.tsx#L27
      reactStrictMode: true,
      // added from hyper
      pageExtensions: ['js', 'jsx', 'tsx', 'ts', 'mdx'],
      experimental: {
        modularizeImports: {
          '../components/halves': {
            transform: '../components/layouts/{{ member }}',
          },
        },
      },
    })
  )
);
