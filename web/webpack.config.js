const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getPath = (paths) => path.resolve(__dirname, ...paths);

module.exports = {
    entry: getPath(["source", "index.ts"]),
    output: {
        filename: "bundle.[contenthash].js",
        path: getPath(["build"]),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: getPath(["public", "index.html"]),
        }),
        new webpack.ProgressPlugin(),
    ],
};
