const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const apiUrl = 'http://api:9000';

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
        test: /\.tsx?$/,
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
        host: '0.0.0.0',
        port: 8080,
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: true,
        stats: 'errors-only',
        overlay: true,
        proxy: {
          '/api': {
            target: apiUrl,
            pathRewrite: { '^/api': '' },
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
