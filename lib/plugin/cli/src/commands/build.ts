import { emptyDir } from 'fs-extra';

import { compileSite } from '../compiler/site';
import { DIST_DIR } from "../common/dic";
export async function build() {
    await emptyDir(DIST_DIR);
    await compileSite();
}