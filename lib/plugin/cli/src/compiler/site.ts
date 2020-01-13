import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';
import merge from 'webpack-merge';
import logger from "../util/logger";
import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';

const resolveCli = function (dir: string) {
    return path.resolve(__dirname, '../../', dir)
}
const resolvePackage = function (dir: string) {
    return path.resolve(__dirname, '../../../../../', dir)
}

const baseConfig: Webpack.Configuration = {
    stats: "errors-only",
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolvePackage('src'),
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
                include: [resolvePackage('src')],
                use: ['cache-loader', 'babel-loader']
            },
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                loader: 'url-loader',
                include: [resolvePackage('src/assets/img'), resolveCli('site')],
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]',
                }
            },
            {
                test: /\.svg$/,
                loader: 'raw-loader',
                include: [resolvePackage('src/assets/svg')]
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
const devConfig: Webpack.Configuration = {
    mode: 'development',
    entry: {
        'nutui-mobile': resolveCli('site/demo/app.js'),
        'nutui-doc': resolveCli('site/doc/app.js')
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
            template: resolveCli('site/doc/index.html'),
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
            template: resolveCli('site/demo/index.html'),
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

}
const prodConfig: Webpack.Configuration = {
    mode: 'production'
}

function dev() {
    const compiler = Webpack(merge(baseConfig, devConfig));
    const devServerOptions = {
        open: false,
        host: '0.0.0.0',
        stats: 'errors-only',
        publicPath: '/',
        disableHostCheck: true,
        hot: true,
        hotOnly: true,
        inline: true,
        overlay: {
            warnings: true,
            errors: true
        },
        watchOptions: {
            ignored: /node_modules/
        }
    };
    const server = new WebpackDevServer(compiler, devServerOptions);

    server.listen(8001, '127.0.0.1', (err: Error) => {
        if (err) logger.error(err);
    });
}
function build() {
    return new Promise((resolve, reject) => {
        Webpack(merge(baseConfig, prodConfig), (err: any, stats) => {
            if (err || stats.hasErrors()) {
                // 在这里处理错误
                if (err) {
                    logger.error(err.stack || err);
                    if (err.details) {
                        logger.error(err.details);
                    }
                    return;
                }

                const info = stats.toJson();

                if (stats.hasErrors()) {
                    logger.error(info.errors);
                }

                if (stats.hasWarnings()) {
                    logger.warn(info.warnings);
                }
            }
            // 处理完成
            logger.success('build success');
        });
    });
}

export async function compileSite(prod: boolean = false) {
    prod ? await build() : dev()
}