var webpack = require('webpack');

module.exports = {
  entry: {
    // photocarousel: '../photo-carousel/client/index.jsx',
    // castphotos: '../castphotos/client/index.jsx',
    AUDIENCEREVIEWS: './rachel-audience-reviews/client/src/index.jsx'
    // CRITICREVIEWS: '../CRITIC_REVIEWS/client/index.jsx',
    // moviepreview: ['@babel/polyfill', '../movie-preview/client/src/index.jsx']
  },
  output: {
    path: __dirname + '/public',
    chunkFilename: '[name].bundle.js',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.SplitChunksPlugin()
  ]
};
