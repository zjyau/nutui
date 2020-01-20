import Webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { baseConfig } from './base.config';
import { ROOT_CLI_PATH } from '../common/dic';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { isDev } from '../util';
export const devConfig: Webpack.Configuration = merge(baseConfig, {
    mode: 'development',
    entry: {
        'nutui-mobile': ROOT_CLI_PATH('site/demo/app.js'),
        'nutui-doc': ROOT_CLI_PATH('site/doc/app.js')
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: {
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                    name: 'common_chunks'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDev() ? '[name].css' : 'css/[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: ROOT_CLI_PATH('site/doc/index.html'),
            filename: 'index.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['common_chunks', 'nutui-doc'],
            minify: {
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
        new HtmlWebpackPlugin({
            template: ROOT_CLI_PATH('site/demo/index.html'),
            filename: 'demo.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['common_chunks', 'nutui-mobile'],
            minify: {
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
        new Webpack.HotModuleReplacementPlugin()
    ]
});