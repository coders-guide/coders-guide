const webpack = require("webpack");
const path = require("path");

const sourcePath = path.resolve(__dirname, ".");
const outPath = path.resolve(__dirname, "dist");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  return {
    context: sourcePath,
    entry: {
      app: "./src/index.tsx"
    },
    devtool: "none",
    mode: "development",
    output: {
      path: outPath,
      filename: "bundle.js",
      chunkFilename: "[name].bundle.js",
      publicPath: ""
    },
    target: "web",
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      mainFields: ["module", "browser", "main"]
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|svg|jpe?g|mp4)$/,
          loader: "file-loader",
          options: {
            name: "assets/[name]-[hash].[ext]"
          }
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        targetEnv: process.env.TARGET_ENV,
        gaUid: process.env.CG_GA_UID
      }),
      new CopyWebpackPlugin([
        { from: path.resolve(__dirname, "static/*"), to: "." }
      ])
    ]
  };
};
