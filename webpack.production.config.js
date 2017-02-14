const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,
      screw_ie8: true,
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
       }
    })
  ]
}