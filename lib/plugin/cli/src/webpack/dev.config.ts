import Webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { baseConfig } from './base.config';
import { ROOT_CLI_PATH } from '../common/dic';

export const devConfig: Webpack.Configuration = merge(baseConfig, {
    mode: 'development',
    entry: {
        'nutui-mobile': ROOT_CLI_PATH('site/demo/app.js'),
        'nutui-doc': ROOT_CLI_PATH('site/doc/app.js')
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: {
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                    name: 'chunks'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: ROOT_CLI_PATH('site/doc/index.html'),
            filename: 'index.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['chunks', 'nutui-doc'],
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
            chunks: ['chunks', 'nutui-mobile'],
            minify: {
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
        new Webpack.HotModuleReplacementPlugin()
    ]
});