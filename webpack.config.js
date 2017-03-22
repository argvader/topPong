const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const buildPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './src');
const publicPath = path.join(__dirname, './public');

// Common plugins
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(publicPath, 'index.html'),
    path: buildPath,
    filename: 'index.html'
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10'
          ]
        })
      ],
      context: sourcePath
    }
  })
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|Worker\/index\.js)/,
    use: [
      'babel-loader'
    ]
  },
  {
    test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
    loader: 'file-loader?name=img/[name].[ext]'
  }
];

// Development plugins
plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new DashboardPlugin()
);

// Development rules
rules.push(
  {
    test: /\.scss$/,
    loader: combineLoaders([
      {
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }, {
        loader: 'sass-loader'
      }
    ])
  }
);
rules.push(
  {
    test: /\.css$/,
    loader: combineLoaders([
      {
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }])
  }
);

module.exports = {
  context: sourcePath,
  entry: {
    js: './index.js'
  },
  output: {
    path: buildPath,
    publicPath: isProduction ? '' : '',
    filename: 'app-[hash].js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ]
  },
  plugins,
  devServer: {
    contentBase: './source',
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    }
  }
};
