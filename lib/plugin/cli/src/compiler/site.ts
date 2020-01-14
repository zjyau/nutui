import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import logger from "../util/logger";
import { devConfig } from '../webpack/dev.config';
import { prodConfig } from '../webpack/prod.config';


function dev() {
    const compiler = Webpack(devConfig);
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

    server.listen(8001, '0.0.0.0', (err: Error) => {
        if (err) logger.error(err);
    });
}
function build() {
    return new Promise((resolve, reject) => {
        Webpack(prodConfig, (err: any, stats) => {
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