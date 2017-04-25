var webpack     = require('webpack'),
    path        = require('path'),
    libraryName = 'demo',
    outputFile  = libraryName + '.js',
    ENV         = process.env.NODE_ENV,
    externals   = {},
    rules       = [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }];

if (ENV === 'production') {
  externals = {
    'angular': 'angular'
  };
}

if (ENV === 'test') {
  rules.push({
    enforce: 'pre',
    test: /\.js$/,
    exclude: [
      /node_modules/,
      /\.spec\.js$/
    ],
    loader: 'istanbul-instrumenter-loader',
    query: {
      esModules: true
    }
  });
}

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: externals,
  module: {
    rules: rules
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      __dirname,
      path.resolve(__dirname, './node_modules')
    ]
  }
};
