
var http = require('http');
var https = require('https');
var { URL } = require('url');
var toQueryPair = require('../utils/urlQuery');

// 获取当前模版api接口(接口文档：http://tpdoc.cn:7011/public/apidoc/index.html#api-%E6%A8%A1%E6%9D%BF%E6%8E%A5%E5%8F%A3-getTemplateInfo)
let getTemplateInfo = 'https://tpdoc.cn/api_2020/tpCli/template/getTemplateInfo?test=1'

let templates = {

  // 获取模版列表数据
  getTemplates(para) {
    let paraStr = toQueryPair.toQueryString(para)

    // 动态添加参数
    let url = getTemplateInfo
    if (para) {
      url = getTemplateInfo += '&' + paraStr
    }

    return new Promise((resolve, reject) => {
      api(url).then((res) => {
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          // console.log(`响应主体：${chunk}`)

          let data = JSON.parse(chunk)

          // 模版列表的key，value对象数据
          let templateList = {}
          data.data.map((item) => {
            templateList[item.template_name] = item.template_address
          })

          resolve(templateList)

        })
        res.on('end', () => {
          // console.log('响应中已无数据');
        });

      })

    })
  }
}

// 请求接口方法
function api(temPath) {

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


module.exports = templates