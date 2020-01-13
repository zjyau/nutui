#!/usr/bin/env node

import program from 'commander';
import { dev } from '../commands/dev';
import { build } from '../commands/build';
import { buildSite } from '../commands/build-site';
import { createComponent } from '../commands/createComponent';
import { commitLint } from '../commands/commitLint';
import { test } from '../commands/test';
import { release } from '../commands/npmPublish';

program
    .version(`@nut/cli 1.0`, '-v', '--version')
    .command('dev').action(dev)
    .command('build').action(build)
    .command('build-site').action(buildSite)
    .command('create').action(createComponent)
    .command('commit-lint').action(commitLint)
    .command('test').action(test)
    .command('release').action(release)
program.parse(process.argv);


