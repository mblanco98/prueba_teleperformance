require("dotenv").config();
const webpack = require('webpack')

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { env }) => {
      let config = webpackConfig
      config.plugins.push(
        new webpack.DefinePlugin({
          GOOGLE_PLACES_APIKEY: JSON.stringify(
            process.env.GOOGLE_PLACES_APIKEY
          ),
        })
      );
      return webpackConfig
    }
  },
};
