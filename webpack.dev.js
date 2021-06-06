const { merge } = require("webpack-merge");
const { DefinePlugin } = require("webpack");

const common = require("./webpack.common.js");

/**Public variables in the app js */
const APP_VAR = {
  /**Path for the API */
  API_URL: JSON.stringify("http://localhost:5556")
}

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  target: "web",
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new DefinePlugin(APP_VAR)
  ]
});
