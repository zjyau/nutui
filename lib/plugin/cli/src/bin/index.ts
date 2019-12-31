#!/usr/bin/env node


import logger from '../util/logger';
import program from 'commander';
import config from '../../package.json';
import { dev } from '../commands/dev';
import { build } from '../commands/build';

logger.start(`@nut/cli ${config.version}`)

program
    .version(`@nut/cli ${config.version}`, '-v', '--version')
    .command('dev').action(dev)
    .command('build').action(build)
program.parse(process.argv);


