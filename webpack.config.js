const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client?reload=true',
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
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
       }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}