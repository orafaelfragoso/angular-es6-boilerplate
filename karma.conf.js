var path = require('path');

module.exports = function karmaConfig(config) {
  config.set({
    basePath: '',
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity,
    browsers: ['PhantomJS'],
    frameworks: [
      'jasmine',
    ],
    plugins : [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-coverage')
    ],
    files: [
      './tests.webpack.js'
    ],
    preprocessors: {
      './tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'coverage'],
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      stats: "errors-only"
    },
    coverageReporter: {
      reporters: [
        {
          type: 'html',
          subdir: 'html',
        },
        {
          type: 'text',
        },
        {
          type: 'lcovonly',
          subdir: '.',
        },
      ],
    }
  });
};
