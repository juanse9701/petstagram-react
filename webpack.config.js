const HtmlPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const WorkBoxWebpack = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    filename: 'main.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new WebpackPwaManifest({
      name: 'Petstagram - Fotos de mascotas',
      short_name: 'Petgram',
      description: 'Encuentra fotografías de tus mascotas favoritas',
      theme_color: '#8d01ff',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('src/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkBoxWebpack.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com | images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petgram-server.juanse9701.now.sh'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ]
}
