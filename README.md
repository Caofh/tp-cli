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

## 三、初始化管理端脚手架项目，如下：
~~~
tp_manage init ***(你的项目名称)
~~~

## 四、查看所有指令，如下：
~~~
tp_config list
~~~

