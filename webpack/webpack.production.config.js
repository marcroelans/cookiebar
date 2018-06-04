var path = require('path');

module.exports = {
  mode: 'production',
  entry:  './src/index.js',
  output: {
    library: 'Power',
    libraryTarget: "umd",
    filename: 'power.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
