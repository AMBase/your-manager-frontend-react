import path from 'path';
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import HtmlWebpackPlugin from 'html-webpack-plugin';

const devServer: DevServerConfiguration = {
    static: './dist_webpack',
};

const config: Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../../dist_webpack/assets'),
        filename: '[name]-[chunkhash].js',
        clean: true,
    },
    devServer,
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
        // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
            '.js': ['.js', '.ts'],
            '.cjs': ['.cjs', '.cts'],
            '.mjs': ['.mjs', '.mts']
        }
    },
    module: {
        rules: [
            // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
            {
                test: /\.svg$/i,
                type: 'asset/resource'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html",
        templateParameters: {
            "injectScript": `<script type="module" src="./inject.js"></script>`,
        },
        scriptLoading: "module"
    })],
};

export default config;
