#!/usr/bin/env node

const { Command } = require('commander');
const handlebars = require('handlebars');
const fs = require('fs');

const program = new Command();
program.version('0.0.1');

program
  .option('-n --componentName <type>', '组件生成路径', './src/components')

program.parse(process.argv);

// 生成初始化vue模版
startTemplate(program, fs)

// 启动模版
function startTemplate(program, fs) {
  let name = program.componentName
  let pwd = process.cwd()

  const content = fs.readFileSync(`${__dirname}/template/vueTemplate.vue`).toString();
  fs.writeFile(`${pwd + '/' + name}.vue`, content, 'utf8', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('写入成功');
  })
}

// console.log(`组件名字: ${program.componentName}`);
// console.log(`当前路径: ${__dirname}`);
// console.log(`当前路径: ${process.cwd()}`);