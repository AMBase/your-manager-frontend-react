import path from 'path';
import webpack from 'webpack';


const config: webpack.Configuration = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../../dist_webpack/assets'),
        filename: '[name]-[chunkhash].js',
    },
};

export default config;
