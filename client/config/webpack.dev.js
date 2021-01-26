const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const config = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
};

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    host: config.host,
    port: config.port,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};

module.exports = merge(commonConfig, devConfig);
