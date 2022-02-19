#!/usr/bin/env node

const { Command } = require('commander');
const handlebars = require('handlebars');
const fs = require('fs');
const chalk = require('chalk');
const symbols = require('log-symbols');
var http = require('http');
var https = require('https');
var { URL } = require('url');
var library = require('./utils/library.js')

// 获取组件目录(模版池子)
var template = require('./template/templateList')

const program = new Command();
program.version('0.0.1');

program
  .option('-n --componentName <type>', '组件文件夹命名', '')
  .option('-pid --pageId <id>', '目标页面的pageId', '')
  .option('-p --componentPath <path>', '组件目标路径（选传）', '')
  .option('-f --componentFrom <from>', '组件模版名称', 'vueTemplate') // 组件模版名称，默认下载vueTemplate的vue空模版

program.parse(process.argv);


// -n参数必传
let name = program.componentName
let pid = program.pageId // 页面id
let nameFirst = name.charAt(0).toUpperCase() + name.slice(1) // 首字母大写
if (name && name !== '-p' && pid) {

  template.getTemplates().then((templateList) => {
    let from = program.componentFrom // 传入模版名称
    let temPath = templateList[from] // 模版下载路径(获取模版池子中的模版地址)

    // console.log(temPath)

    // 生成初始化vue模版
    startTemplate(program, fs, temPath)

  })

} else {
  if (!name) { console.log(symbols.error, chalk.red('未带-n参数，请传入文件名；如：tp_p -n home.vue')); }
  if (!pid) { console.log(symbols.error, chalk.red('未带-pid参数，请传入文件名；如：tp_p -pid 3')); }
}


// 生成vue模版
async function startTemplate(program, fs, temPath) {
  let path = program.componentPath // 组件路径
  let pwd = process.cwd()

  // 最终组件目标路径位置
  let componentPath = path ? path : pwd

  if (temPath instanceof Object && temPath.template_type == 1) {
    // 模板代码
    let template_code = temPath.template_code || ''

    const entitys = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '{{name}}': `${name.split('.')[0]}-container`,
      '{{Name}}': `${nameFirst.split('.')[0]}`,
    }
    // html实体还原
    template_code = library.convert(entitys, template_code)

    makeFile(componentPath, template_code)
  } else {
    const data = await downTemplateAsync(temPath)
    makeFile(componentPath, data)
  }

}

// 生成组件目录
function makeFile(componentPath, data) {

  // 根路径
  const dirName = /\./g.test(name) ? name.split('.')[0] : name
  const rootPath = componentPath ? `${componentPath}/${dirName}` : `${dirName}`

  if (fs.existsSync(rootPath)) {
    console.log(symbols.success, chalk.green('已经存在此目录'));
  } else {
    fs.mkdirSync(rootPath);
    fs.mkdirSync(`${rootPath}/components`);

    // 引入子组件集合
    importPlugins(rootPath, data)
  }
}

// 引入子组件集合
async function importPlugins(rootPath, data) {

  // 引入子组件集合（接口获取）
  const para = {
    page_id: pid
  }
  const plugins = await template.getPluginsData(para)

  plugins.forEach(async (item, index) => {
    const dataItem = await downTemplateAsync(item.module_address)
    fs.writeFile(`${rootPath}/components/${item.module_key}${index}.vue`, dataItem, 'utf8', function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      // console.log(symbols.success, chalk.green('写入成功，模版路径：' + componentPath + '/' + nameFirstAddSuffix));
    })
  })

  // 解析主文件模版
  let usePlugin = []
  let importPlugin = []
  let inPlugin = []
  plugins.forEach((item, index) => {
    const moduleKey = `${item.module_key}${index}`

    usePlugin.push(`<${moduleKey}></${moduleKey}>\n    `)
    importPlugin.push(`import ${moduleKey} from './components/${moduleKey}.vue'\n`)
    inPlugin.push(`${moduleKey},\n    `)
  })

  // 创建主组件文件
  data = data.replace(/{{usePlugin}}/g, usePlugin.join(''))
  data = data.replace(/{{importPlugin}}/g, importPlugin.join(''))
  data = data.replace(/{{inPlugin}}/g, inPlugin.join(''))

  let nameFirstAddSuffix = /\./g.test(name) ? nameFirst : nameFirst + '.vue'
  fs.writeFile(`${rootPath}/${nameFirstAddSuffix}`, data, 'utf8', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(symbols.success, chalk.green('写入成功，模版路径：' + `${rootPath}/${nameFirstAddSuffix}`));
  })
}

// 下载模版方法二次封装
function downTemplateAsync(temPath) {
  return new Promise((resolve, reject) => {
    downTemplate(temPath).then((res) => {
      // 请求的响应数据累加
      let data = ''

      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        // 响应主体
        let content = chunk.replace(/{{name}}/g, `${name.split('.')[0]}-container`).replace(/{{Name}}/g, `${nameFirst.split('.')[0]}`) // 替换组件内名称
        data += content

      })
      res.on('end', () => {
        // console.log('响应中已无数据');
        // console.log(data)
        resolve(data)
      });

    })
  })
}
// 下载模版方法
function downTemplate(temPath) {
  return new Promise((resolve, reject) => {

    let url = new URL(temPath)
    let options = {}

    let req = ''

    let protocol = url.protocol
    switch (protocol) {
      case ('https:'): req = https.request(url, options, resolve); break;
      case ('http:'): req = http.request(url, options, resolve); break;
    }
    req.addListener('error', (err) => {
      reject(err); // 请求失败
    });
    req.end(); // refresh request stream

  })

}

// console.log(`组件名字: ${program.componentName}`);
// console.log(`当前路径: ${__dirname}`);
// console.log(`当前路径: ${process.cwd()}`);