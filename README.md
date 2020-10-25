# tp-cli
项目基础架构脚手架

## 一、全局安装脚手架，命令行执行：
~~~
npm install topay-cli -g
~~~

## 二、初始化脚手架项目，如下：
##### 1.进入测试目录test
~~~
cd ~/test // 进入测试目录test
~~~

##### 2.初始化项目，命令行执行：
~~~
tp init ***(你的项目名称)
~~~

##### 3.进入刚才自定义的项目名，并下载npm依赖包，命令行执行：
~~~
cd ***(刚才输入的项目名) && npm i
~~~

##### 4.各环境打包项目，命令行执行：
~~~
npm run serve // 开发
npm run test // 测试
npm run pre // 预发布
npm run build // 线上
~~~

## 三、所有脚手架项目，如下：
~~~
tp init ***(你的项目名称) // 基于vue-cli的空项目脚手架
tp_manage init ***(你的项目名称) // 基于vue-cli和elementui的管理后台空项目脚手架
tp_uniapp init ***(你的项目名称) // 基于uniapp的空项目脚手架
~~~

## 四、查看所有指令，如下：
~~~
tp_config list
~~~

