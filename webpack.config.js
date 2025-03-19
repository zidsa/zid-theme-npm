const path = require('path');

module.exports = {
    entry: {
        'cli': [path.resolve(__dirname, './src/cli.ts')],
    },
    output: {
        filename: 'zid-theme.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '', // Ensure all paths are relative
        library: 'cli',
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    resolve: {
        alias: {
            'open': path.resolve(__dirname, 'node_modules/open'),
        },
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
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
    externals: ['open'],
    cache: false,
};