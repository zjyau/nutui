#!/usr/bin/env node

import program from 'commander';
import { dev } from '../commands/dev';
import { build } from '../commands/build';

program
    .version(`@nut/cli 1.0`, '-v', '--version')
    .command('dev').action(dev)
    .command('build').action(build)
program.parse(process.argv);


