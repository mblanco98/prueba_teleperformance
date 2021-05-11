require("dotenv").config();
const webpack = require('webpack')

module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          "process.env.MAPBOX_API_PLACES": JSON.stringify(process.env.MAPBOX_API_PLACES),
        })
      );
      webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          "process.env.API_URL": JSON.stringify(process.env.API_URL),
        })
      );
      return webpackConfig
    }
  },
};
