#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const symbols = require('log-symbols');
const packageJson = require('./package.json');

// 获取组件目录(模版池子)
var template = require('./template/templateList')

program.version(packageJson.version, '-v, --version')
program.parse(process.argv);

template.getTemplates().then((templateList) => {
    // console.log(templateList)
    console.log(chalk.green('脚手架基础指令：'))
    console.log(symbols.success, chalk.green('tp -v: 脚手架版本'))
    console.log(symbols.success, chalk.green('tp_list: 展示脚手架所有指令及其作用'))
    console.log('')

    console.log(chalk.green('初始化项目：'))
    console.log(symbols.success, chalk.green('tp init ***(项目名) : 初始化新项目'))
    console.log(symbols.success, chalk.green('tp_manage init ***(项目名) : 初始化管理端脚手架项目'))
    console.log(symbols.success, chalk.green('tp_manage_v1 init ***(项目名) : 初始化管理端(全新ui)脚手架项目'))
    console.log(symbols.success, chalk.green('tp_uniapp init ***(项目名) : 初始化uniapp小程序跨平台脚手架项目'))
    console.log(symbols.success, chalk.green('tp_egg init ***(项目名) : 初始化egg(nodejs)项目脚手架'))
    console.log('')

    console.log(chalk.green('初始化vue模版：'))
    console.log(symbols.success, chalk.green(`tp_c ${chalk.yellow(`-n`)} ***(生成的模版文件名称) ${chalk.yellow(`-p`)} ***(生成路径：如：/Users/username/caofanghui/person/tp-cli/template，选传) ${chalk.yellow(`-f`)} ***(要下载的组件名，默认${chalk.yellow(`vueTemplate`)}，选传) : 在当前路径下生成一个vue模版`))
    console.log(symbols.info, chalk.yellow('组件目录（模版目录）：'))
    Object.keys(templateList).map((key) => {
        console.log(symbols.info, chalk.yellow(`组件名称：${key} 组件地址：${templateList[key]}`))
    })
    console.log('')

})

