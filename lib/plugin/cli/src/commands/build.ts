import { emptyDir } from 'fs-extra';

import { compilePackage } from '../compiler/package';
import { DIST_DIR } from "../common/dic";
import { setNodeEnv } from '../util';
export async function build() {
    setNodeEnv('production');
    await emptyDir(DIST_DIR);
    await compilePackage();
}