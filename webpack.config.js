const HtmlWebpackPlugin       = require ('html-webpack-plugin'),
      miniCssExtractPlugin    = require ('mini-css-extract-plugin'),
      optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      copyPlugin              = require ('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [ new optimizeCssAssetsPlugin() ]
    },
    module: { 
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    minimize: false,
                    attributes: false,
                },
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            },
            
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new copyPlugin({
            
            patterns:[
                {from: './src/assets', to: 'assets/'},
        ],
     }),
    ]
}