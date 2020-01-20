import Webpack from 'webpack';
import logger from "../util/logger";
import { packageConfig } from '../webpack/package.config';
export async function compilePackage(isMinimize: boolean) {
    Webpack(packageConfig(isMinimize), (err: any, stats) => {
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
        logger.success(`build isMinimize:${isMinimize} package success`);
    });
}