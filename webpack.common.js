const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const jeet = require('jeet')
const rupture = require('rupture')
const autoprefixer = require('autoprefixer-stylus')

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
        test: /\.styl$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'stylus-loader'
            //'postcss-loader' // To be added
          ]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
    // Delete old build so we have a fresh start each time
    new CleanWebpackPlugin(['dist']),
    // Process styles
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [
            jeet(),
            rupture(),
            autoprefixer({ browsers: ['> 3%'] })
          ]
        },
        context: '/'
      }
    }),
    // Don't inject the styles as a style tag, extract them into core.css
    new ExtractTextPlugin('core.css'),
    // Generate our HTML files for us
    new HtmlWebpackPlugin({
      template: './src/app.html',
      filename: 'index.html',
      inject: 'body'
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

