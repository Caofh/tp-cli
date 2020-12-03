#!/usr/bin/env node
const fs = require('fs');
const program = require('commander');
const program1 = require('commander');
const download = require('download-git-repo');
const handlebars = require('handlebars');
const inquirer = require('inquirer');
const ora = require('ora');
const chalk = require('chalk');
const symbols = require('log-symbols');
const packageJson = require('./package.json');

program1.version(packageJson.version, '-v, --version')
    .command('list')
    .action((name) => {
        console.log(symbols.success, chalk.green('tp init ***(项目名) : 初始化新项目'))
        console.log(symbols.success, chalk.green('tp_manage init ***(项目名) : 初始化管理端脚手架项目'))
        console.log(symbols.success, chalk.green('tp_manage_v1 init ***(项目名) : 初始化管理端(全新ui)脚手架项目'))
        console.log(symbols.success, chalk.green('tp_uniapp init ***(项目名) : 初始化uniapp小程序跨平台脚手架项目'))
        console.log(symbols.success, chalk.green('tp_create -n ***(组件名) : 在当前路径下生成一个vue空模版'))

    })
program1.parse(process.argv);