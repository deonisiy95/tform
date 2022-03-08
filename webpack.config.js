const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getCSP = require('./src/core/const/csp.ts');

const isDevelopment = () => (process.env.NODE_ENV || 'development') === 'development';

const meta = {
  'Content-Security-Policy': {
    'http-equiv': 'Content-Security-Policy',
    content: getCSP()
  }
};

module.exports = {
  entry: './src/index.tsx',
  output: {path: path.join(__dirname, 'build'), filename: 'index.bundle.js'},
  mode: process.env.NODE_ENV || 'development',
  devtool: isDevelopment() ? 'cheap-module-source-map' : false,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      styles: path.resolve(__dirname, 'src/styles'),
      process: 'process/browser'
    }
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: 'asset'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment(),
              importLoaders: 2,
              modules: {
                mode: 'global',
                localIdentName: isDevelopment()
                  ? '[name]__[local]___[hash:base64:5]'
                  : '[local]__[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment()
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: isDevelopment(),
              lessOptions: {
                noIeCompat: true,
                strictMath: true,
                relativeUrls: false
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './node_modules/bootstrap'),
          path.resolve(__dirname, './node_modules/shards-ui'),
          path.resolve(__dirname, './src')
        ],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment(),
              importLoaders: 2,
              modules: {
                mode: 'global',
                localIdentName: isDevelopment()
                  ? '[name]__[local]___[hash:base64:5]'
                  : '[local]__[hash:base64:5]'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment()
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '{}',
      global: {}
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      templateParameters(compilation, assets, options) {
        return {
          compilation: compilation,
          webpack: compilation.getStats().toJson(),
          webpackConfig: compilation.options,
          htmlWebpackPlugin: {
            files: assets,
            options: options
          },
          process
        };
      },
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      },
      meta: meta,
      isBrowser: false,
      isDevelopment: process.env.NODE_ENV !== 'production',
      nodeModules:
        process.env.NODE_ENV !== 'production' ? path.resolve(__dirname, '../node_modules') : false
    }),
    new ForkTsCheckerWebpackPlugin({
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    })
  ]
};
