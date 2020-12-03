#!/usr/bin/env node

const { Command } = require('commander');
const handlebars = require('handlebars');
const fs = require('fs');

const program = new Command();
program.version('0.0.1');

program
  .option('-n --componentName <type>', '组件名称', './src/components')

program.parse(process.argv);

// 生成初始化vue模版
startTemplate(program, fs)

// 启动模版
function startTemplate(program, fs) {
  let name = program.componentName
  let nameFirst = name.charAt(0).toUpperCase() + name.slice(1) // 首字母大写
  let pwd = process.cwd()

  let content = fs.readFileSync(`${__dirname}/template/vueTemplate.vue`).toString();
  content = content.replace(/\{{name}}/g, `${name}-container`).replace(/{{Name}}/g, `${nameFirst}`) // 替换组件内名称

  fs.writeFile(`${pwd + '/' + nameFirst}.vue`, content, 'utf8', function (error) {
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