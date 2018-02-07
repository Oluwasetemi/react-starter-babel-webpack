const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  context: __dirname,
  entry: "./index.js",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".json"]
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [HtmlWebpackPluginConfig]
};
