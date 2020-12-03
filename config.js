#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const symbols = require('log-symbols');
const packageJson = require('./package.json');

program.version(packageJson.version, '-v, --version')
program.parse(process.argv);

console.log(chalk.green('初始化项目：'))
console.log(symbols.success, chalk.green('tp init ***(项目名) : 初始化新项目'))
console.log(symbols.success, chalk.green('tp_manage init ***(项目名) : 初始化管理端脚手架项目'))
console.log(symbols.success, chalk.green('tp_manage_v1 init ***(项目名) : 初始化管理端(全新ui)脚手架项目'))
console.log(symbols.success, chalk.green('tp_uniapp init ***(项目名) : 初始化uniapp小程序跨平台脚手架项目'))

console.log(chalk.green('初始化vue空模版：'))
console.log(symbols.success, chalk.green('tp_create -n ***(组件名) : 在当前路径下生成一个vue空模版'))

console.log(chalk.green('脚手架基础指令：'))
console.log(symbols.success, chalk.green('tp -v: 脚手架版本'))
console.log(symbols.success, chalk.green('tp_list: 展示脚手架所有指令及其作用'))