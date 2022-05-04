const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app : './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "js-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".ts", ".js"]
    },
    output: {
        path: path.resolve("./public"),
        filename: '[name].js' // [name]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};