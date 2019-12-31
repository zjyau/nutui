import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';
import merge from 'webpack-merge';
import logger from "../util/logger";
import path from 'path';
import { VueLoaderPlugin } from 'vue-loader';



const baseConfig: Webpack.Configuration = {
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackBar({
            name: 'Nut Cli',
            color: '#5396ff'
        }),
        new VueLoaderPlugin()
    ]
};
const devConfig: Webpack.Configuration = {
    mode: 'development',
    entry: {
        'nutui-mobile': path.resolve(__dirname, '../../../site/demo/app.js'),
        'nutui-doc': path.resolve(__dirname, '../../../site/doc/app.js')
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
            template: path.resolve(__dirname, '../../../site/doc/index.html'),
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
            template: path.resolve(__dirname, '../../../site/demo/index.html'),
            filename: 'index.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['chunks', 'nutui-mobile'],
            minify: {
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        })
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
        disableHostCheck: true
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