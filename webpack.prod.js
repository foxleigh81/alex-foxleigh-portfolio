const webpack = require('webpack')
const merge = require('webpack-merge')
const RobotstxtPlugin = require('robotstxt-webpack-plugin').default
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

const options = {
  policy: [
    {
      userAgent: '*',
      disallow: '/'
    }
  ]
}

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new RobotstxtPlugin(options)
  ]
})

