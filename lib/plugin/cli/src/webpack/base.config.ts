import Webpack from 'webpack';
import WebpackBar from 'webpackbar';
import { VueLoaderPlugin } from 'vue-loader';
import { ROOT_CLI_PATH, ROOT_PACKAGE_PATH } from '../common/dic';

export const baseConfig: Webpack.Configuration = {
    stats: "errors-only",
    output: {
        publicPath: './',//相对路径
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': ROOT_PACKAGE_PATH('src'),
        },
        symlinks: false
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData: `@import "@/styles/index.scss"; `,
                        },
                    }
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'cache-loader',
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                sass: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
                            }

                        }
                    }
                ]
            },
            {
                test: /\.(js|ts)$/,
                include: [ROOT_PACKAGE_PATH('src')],
                use: ['cache-loader', 'babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                loader: 'url-loader',
                include: [ROOT_PACKAGE_PATH('src/assets/img'), ROOT_CLI_PATH('site')],
                options: {
                    limit: 3000,
                    name: 'img/[name].[ext]',
                    esModule: false// 否则加载时为 [object]
                }
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
                include: [ROOT_PACKAGE_PATH('src/assets/svg')],
                options: {
                    esModule: false// 否则加载时为 [object]
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new WebpackBar({
            name: 'NutUI Cli',
            color: '#5396ff'
        }),
    ]
};