const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'vendors',
          chunks: chunk => chunk.name == 'main',
          test: /[\\/]node_modules[\\/]/,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
