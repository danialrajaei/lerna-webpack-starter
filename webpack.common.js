const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        modules: [path.resolve(__dirname, './node_modules')],
        symlinks: true,
    },
    target: "node"
};