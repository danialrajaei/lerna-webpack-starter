const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: "tsconfig.dev.json"
                    }
                }],
                exclude: /node_modules/,
            }
        ]
    },
    devServer: {
        static: '../../dist/api',
    },
});