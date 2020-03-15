const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
var settings = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 8080,
  serverUrl: 'http://server:9000',
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
});

let config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', path.join(__dirname, 'src')],
  },
  module: {
    rules: [
      {
        test: /\.(js|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [htmlWebpackPlugin],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };

  config.plugins.push(new MiniCssExtractPlugin());
} else {
  config = {
    ...{
      devServer: {
        compress: true,
        disableHostCheck: true,
        historyApiFallback: true,
        host: settings.host,
        hot: true,
        overlay: true,
        port: settings.port,
        proxy: {
          '/server': {
            target: settings.serverUrl,
            pathRewrite: { '^/server': '' },
          },
        },
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
      },
    },
    ...config,
  };
}

module.exports = config;
