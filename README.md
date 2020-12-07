# topay-cli
#### 项目基础架构脚手架：
##### 1.基于vue-cli的空项目脚手架
##### 2.基于vue-cli和elementui的管理后台空项目脚手架
##### 3.基于uniapp的空项目脚手架
##### 4.基于egg的空项目脚手架

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
tp_manage_v1 init ***(你的项目名称) // 管理后台空项目(全新ui)脚手架
tp_uniapp init ***(你的项目名称) // 基于uniapp的空项目脚手架
tp_egg init ***(你的项目名称) // 基于egg的空项目脚手架
~~~

## 四、所有脚手架自定义指令，如下：
~~~
tp_c (-n *** -f *** -p ***) // 在当前目录下生成一个vue组件空模版
~~~
### tp_create 
#### -n：***(生成的模版文件名称) 
#### -p：***(生成路径：如：/Users/username/caofanghui/person/tp-cli/template，选传) 
#### -f：***(要下载的组件名，默认vueTemplate，选传) : 在当前路径下生成一个vue模版

## 五、查看所有指令，如下：
~~~
tp_list // 查看所有脚手架指令
tp -v // 查看当前脚手架工具版本
~~~



