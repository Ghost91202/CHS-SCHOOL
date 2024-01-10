// webpack.config.js

module.exports = {
    // ... other configurations
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify'),
        querystring: require.resolve('querystring-es3'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        constants: require.resolve('constants-browserify'),
        os: require.resolve('os-browserify/browser'),
        vm: require.resolve('vm-browserify'),
      },
    },
  };
  