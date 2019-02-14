const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const IgnoreNotFoundExportPlugin = require('ignore-not-found-export-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: { loader: 'html-loader' },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new HardSourceWebpackPlugin(),
        // required because of https://github.com/babel/babel/issues/7640
        new IgnoreNotFoundExportPlugin([
            'CallbackSideEffect',
            'NotificationSideEffect',
            'RedirectionSideEffect',
            'RefreshSideEffect',
        ]),
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx', '.json'],
        alias: {
            'vn-kooch-core': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-core',
                'src'
            ),
            'vn-kooch-ui-materialui': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-ui-materialui',
                'src'
            ),
            'vn-kooch-react-admin': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-react-admin',
                'src'
            ),
            'vn-kooch-data-fakerest': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-data-fakerest',
                'src'
            ),
            'vn-kooch-input-rich-text': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-input-rich-text',
                'src'
            ),
            'vn-kooch-tree-core': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-tree-core',
                'src'
            ),
            'vn-kooch-tree-ui-materialui': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-tree-ui-materialui',
                'src'
            ),
            'vn-kooch-tree-language-english': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'vn-kooch-tree-language-english'
            ),
            'ra-tree-language-french': path.join(
                __dirname,
                '..',
                '..',
                'packages',
                'ra-tree-language-french'
            ),
        },
    },
    devServer: {
        stats: {
            children: false,
            chunks: false,
            modules: false,
        },
    },
};
