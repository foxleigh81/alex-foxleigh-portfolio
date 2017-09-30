const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js',
    vendor: [
      'lodash'
    ]
  },
  output: {
    // name will match each entry point above and 'chunkchash' will ensure each new build doesn't cache
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Process css styles
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // Process images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // Process fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    // Generate our HTML files for us
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    // Prevent unchanging modules from updating their hash
    new webpack.HashedModuleIdsPlugin(),
    // Put common vendor chunks into their own bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Put common internal chunks into their own bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    })
  ]
}

