import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { Configuration as WebpackConfiguration, ProgressPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
    devServer: WebpackDevServerConfiguration;
}

interface IEnvironmentVariables {
    mode: WebpackConfiguration["mode"];
    port: number;
    analyze: boolean;
}

const getPath = (paths: string[]) => path.resolve(__dirname, ...paths);

export default (env: IEnvironmentVariables): Configuration => {
    const PORT = env.port || 9000;
    const mode: WebpackConfiguration["mode"] = env.mode || "development";
    const isDev = mode === "development";

    return {
        mode,
        entry: getPath(["source", "index.tsx"]),
        output: {
            filename: "bundle.[contenthash:4].js",
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
                {
                    test: /\.(c|sc)ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    auto: true,
                                    localIdentName: isDev
                                        ? "[local]__[hash:base64:4]"
                                        : "[hash:base64:8]",
                                },
                            },
                        },
                        "sass-loader",
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".js", ".tsx", ".ts", ".module.scss"],
            plugins: [
                new TsconfigPathsPlugin({
                    extensions: [".js", ".tsx", ".ts", ".module.scss"],
                }),
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: getPath(["public", "index.html"]),
            }),
            new ProgressPlugin(),
            new MiniCssExtractPlugin({
                filename: "bundle.[contenthash:4].css",
                chunkFilename: "[name].[contenthash:4].css",
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: env.analyze ? "server" : "disabled",
            }),
        ],
        devtool: isDev ? "inline-source-map" : undefined,
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        output: { comments: false },
                    },
                }),
            ],
        },
        devServer: {
            port: PORT,
            open: true,
            compress: true,
        },
    };
};
