import { emptyDir } from 'fs-extra';
import { compileSite } from '../compiler/site';
import { DIST_DIR } from "../common/dic";
export async function buildSite() {
    await emptyDir(DIST_DIR);
    await compileSite(true);
}