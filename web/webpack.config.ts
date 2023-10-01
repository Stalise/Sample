import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const getPath = (paths: string[]) => path.resolve(__dirname, ...paths);

const config: webpack.Configuration = {
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

export default config;
