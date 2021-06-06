const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");

/**Public variables in the app js */
const APP_VAR = {
  /**Path for the API */
  API_URL: JSON.stringify("http://localhost:5556")
}

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin(),
    new DefinePlugin(APP_VAR)
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
});
