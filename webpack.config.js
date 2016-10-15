var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js',
    'bs-grid': './src/bs_grid/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'bs-grid',
    libraryTarget: 'umd',
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')],
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file',
      query: {
        name: '[name].[ext]?[hash]'
      }
    },
    {
      test: /\.scss$/,
      loaders: [
        "style",
        "css",
        "sass",
      ]
    }]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
