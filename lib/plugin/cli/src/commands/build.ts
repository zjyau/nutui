import { emptyDir } from 'fs-extra';
import { compilePackage } from '../compiler/package';
import { DIST_DIR } from "../common/dic";
import logger from '../util/logger';
export async function build() {
    try {
        await emptyDir(DIST_DIR);
        await compilePackage(false);
        logger.success(`build minimize:false package success!`);
        await compilePackage(true);
        logger.success(`build minimize:true package success!`);
    } catch (error) {
        logger.error(error)
    }
}