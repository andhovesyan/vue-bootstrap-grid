var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'vue-bs-grid.js',
    library: 'vue-bs-grid',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules|dist/
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
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
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
