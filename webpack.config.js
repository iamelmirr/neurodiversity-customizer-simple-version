const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  // Define entry points for different parts of the extension
  entry: {
    popup: './src/popup/index.js',       // The popup UI
    background: './src/background/index.js', // Background service worker
    content: './src/content/index.js'    // Content script injected into pages
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public" } // Copy static files from public to dist
      ],
    }),
  ],
  // Enable source maps for debugging
  devtool: 'cheap-module-source-map'
};
