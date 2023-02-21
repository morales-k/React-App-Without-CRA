const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    static: {
      directory: path.join(__dirname, "./public")
  },
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"], 
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCSSExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: false,
              sourceMap: true,
            }
          },
          "sass-loader"
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
    new MiniCSSExtractPlugin({
      filename: "style.css",
      chunkFilename: "[name].css"
    })
  ]
};
