const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/scss/spectre.scss'],
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
        filename: 'styles.css',
        allChunks: true,
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [
          {
            test: /\.(css|sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader', 'postcss-loader']),
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images/'
                }
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['env']
                }
              }
            ]
          }
      ]
  }
};