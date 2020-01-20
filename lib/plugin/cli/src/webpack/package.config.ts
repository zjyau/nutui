import Webpack from 'webpack';
import merge from 'webpack-merge';
import { ROOT_PACKAGE_PATH } from '../common/dic';
import { baseConfig } from './base.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function packageConfig(isMinimize: boolean) {
    return merge(baseConfig, {
        mode: 'production',
        entry: {
            nutui: './src/nutui.js',
        },
        output: {
            path: ROOT_PACKAGE_PATH('dist/'),
            filename: isMinimize ? 'nutui.min.js' : 'nutui.js',
            library: 'nutui',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
            globalObject: `(typeof self !== 'undefined' ? self : this)`

        },
        externals: {
            vue: {
                root: 'Vue',
                commonjs: 'vue',
                commonjs2: 'vue',
                amd: 'vue'
            }
        },
        optimization: {
            minimize: isMinimize
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        ]
    } as Webpack.Configuration)
}