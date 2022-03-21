const path = require('path');


module.exports = {
    entry: {
        'cli': ['./src/cli.ts'],
    },
    output: {
        filename: 'zid-theme.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'cli',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    target: "node",
    mode: "production",
    optimization: {
        minimize: true
    },
    externals: ['archiver'],
};