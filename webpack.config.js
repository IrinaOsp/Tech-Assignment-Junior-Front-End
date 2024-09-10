const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  mode: isProduction ? "production" : "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve("node_modules")],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpe?g|svg|webp|avif)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]_[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/images/favicon.png"),
      showErrors: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[fullhash].css",
      chunkFilename: "[id].css",
    }),
  ],
  stats: isProduction ? "normal" : "errors-only",
  devtool: isProduction ? false : "source-map",
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
};
