//webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash'); 
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// создаем переменную для development-сборки
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
  entry: { 
      main: './src/pages/main/index.js',
      about: './src/pages/about/about.js',
      statistics: './src/pages/statist/statist.js'
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './scripts/[name].[chunkhash].js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
             'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
             {
                 loader: 'image-webpack-loader',
                 options: {}
             }
        ]
        },
        {
            test: /\.css$/i,
            use: [
                (isDev ? 'style-loader' : {loader: MiniCssExtractPlugin.loader, options: {publicPath: '../'}}),
                'css-loader', 
                'postcss-loader'
            ]
          },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
        },
        {
          test: /\.(ico)$/,
          use: 'file-loader?name=[name].[ext]'
        },
        { test: /node_modules\/flickity/, loader: 'imports-loader?define=>undefined' }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ // 
      filename: './styles/[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
                preset: ['default'],
        },
        canPrint: true
   }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/main/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
        inject: false,
        template: './src/pages/about/about.html',
        filename: 'about.html'
      }),
    new HtmlWebpackPlugin({
        inject: false,
        template: './src/pages/statist/statist.html',
        filename: 'statist.html'
      }),
    new WebpackMd5Hash(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};