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
    .command('dev')
    .description('本地调试运行官网和Demo示例')
    .action(dev)

    .command('build')
    .description('构建完整版nutui和各个组件可发布到npm的静态资源包')
    .action(build)

    .command('build-site')
    .description('构建官网和Demo示例，进行官网发布')
    .action(buildSite)

    .command('create')
    .description('新增组件使用该命令')
    .action(createComponent)

    .command('commit-lint')
    .description('git commit 提交校验配置文件')
    .action(commitLint)

    .command('test')
    .description('运行单元测试')
    .action(test)

    .command('lint')
    .description('运行stylelint和eslint')
    .action(test)

    .command('release')
    .description('发布版本...待开发')
    .action(release)
program.parse(process.argv);


