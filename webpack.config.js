const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (env, {mode}) => {
  //console.log({mode})

  const isProduction = mode === 'production'

  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'index.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    devServer: {
      // contentBase: path.resolve(__dirname, 'build'), default,
      open: true, // para abrir el navegador
      overlay: true,
      compress: true,
      port: 3000,
    },
    resolve: {
      extensions:['.js', '.jsx'],
      alias: {
          "@components": path.resolve(__dirname, "src/components/"),
          "@containers": path.resolve(__dirname, "src/containers/"),
          "@pages": path.resolve(__dirname, "src/pages/"),
          "@styles": path.resolve(__dirname, "src/styles/"),
          "@icons": path.resolve(__dirname, "src/assets/icons/"),
          "@logos": path.resolve(__dirname, "src/assets/logos/"),
      }
  },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic'
                }
              ]
            ]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          type: "asset",
          test: /\.(png|svg|jpg|jpeg|gif)$/i
        }
      ]
    }
  }
}