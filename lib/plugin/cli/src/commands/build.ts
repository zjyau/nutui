import { emptyDir } from 'fs-extra';
import { compilePackage } from '../compiler/package';
import { DIST_DIR } from "../common/dic";
export async function build() {
    await emptyDir(DIST_DIR);
    await compilePackage();
}