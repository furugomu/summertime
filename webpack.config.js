const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "babel-loader" }]
  },
  resolve: { extensions: [".ts", ".tsx", ".js", ".json"] }
};
