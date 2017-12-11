const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { sourceMap: true }},
              { loader: 'postcss-loader'},
              { loader: 'stylus-loader'}
            ]
            // use: ['css-loader', 'postcss-loader', 'stylus-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('style.css')
     ]
};
