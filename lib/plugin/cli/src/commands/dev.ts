import { emptyDir } from 'fs-extra';

import { compileSite } from '../compiler/site';
import { DIST_DIR } from "../common/dic";
import { setNodeEnv } from '../util';
export async function dev() {
    setNodeEnv('development');
    await emptyDir(DIST_DIR);
    await compileSite();
}