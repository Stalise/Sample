import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration as WebpackConfiguration, ProgressPlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
    devServer: WebpackDevServerConfiguration;
}

interface IEnvironmentVariables {
    mode: WebpackConfiguration["mode"];
    port: number;
}

const getPath = (paths: string[]) => path.resolve(__dirname, ...paths);

export default (env: IEnvironmentVariables): Configuration => {
    const PORT = env.port || 9000;
    const mode: WebpackConfiguration["mode"] = env.mode || "development";
    const isDev = mode === "development";

    return {
        mode,
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
            new ProgressPlugin(),
        ],
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: {
            port: PORT,
            open: true,
            compress: true,
        },
    };
};
