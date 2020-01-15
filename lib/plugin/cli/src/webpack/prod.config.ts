import Webpack from 'webpack';
import merge from 'webpack-merge';
import { devConfig } from './dev.config';
import { ROOT_PACKAGE_PATH } from '../common/dic';

console.log()
export const prodConfig: Webpack.Configuration = merge(devConfig, {
    mode: 'production',
    output: {
        path: ROOT_PACKAGE_PATH('dist/sites'),
        filename: 'js/[name].[hash:5].bundle.js',
        chunkFilename: 'js/[name].[chunkhash:5].chunk.js'
    }
});