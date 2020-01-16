import logger from "./logger";

export type NodeEnv = 'production' | 'development' | 'test';
export function setNodeEnv(value: NodeEnv) {
  logger.info('setting', value);
  process.env.NODE_ENV = value;
}

export function isDev() {
  return process.env.NODE_ENV === 'development';
}