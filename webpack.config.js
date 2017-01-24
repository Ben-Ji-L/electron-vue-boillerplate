var path = require('path')
var webpack = require('webpack')

module.exports = {
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  babel: {
    "presets": ["latest"],
    "plugins": ["transform-runtime"]
  },
  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
      'electron'
    ])
  ]
}
