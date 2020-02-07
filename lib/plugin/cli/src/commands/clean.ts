import { emptyDir } from 'fs-extra';
import { DIST_DIR } from "../common/dic";
import logger from '../util/logger';

export async function clean() {
  await emptyDir(DIST_DIR);
  logger.success(`clean ${DIST_DIR} success!`);
}
