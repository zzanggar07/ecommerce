const path = require('path');
const webpack = require('webpack');
const BUILD_DIR = path.resolve(__dirname, 'public/js/');

module.exports = {
    entry: './src/index',
    output: {
        path: BUILD_DIR + '',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json', '.ts','.tsx'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@component': path.resolve(__dirname, 'src/component'),
            '@mainContainer': path.resolve(__dirname, 'src/component/main-container'),
            '@modal': path.resolve(__dirname, 'src/component/modal'),
            '@notify': path.resolve(__dirname, 'src/component/notify'),
            '@router': path.resolve(__dirname, 'src/component/router'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@api': path.resolve(__dirname, 'src/models/api'),
            '@service': path.resolve(__dirname, 'src/models/service'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: [/node_modules[\\\/](?!callbag-\w+)/, /bower_components/],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182'},
            {test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file'}
        ]
    }
};
