const path = require('path');


module.exports = {
    entry: {
        'cli': ['./src/cli.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'cli',
        libraryTarget: 'umd',
    },
    target: "node",
    mode: "production",
    optimization: {
        minimize: true
    },
    externals: ['archiver'],
};