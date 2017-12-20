resume-auto：DIY 自己的 web 版简历
===============================
最近打算换工作了，找工作怎能没有简历呢？作为一名前端程序员，怎能没有一份 web 版的简历呢？，说做就做！

虽然是个小项目，但也五脏俱全，那也得用前端工程化的手法来做啊，既然是个人项目，那为何不用点没有用过的技术栈呢，正所谓实践才是学习的好帮手！

由此我采用了以前没用过的 [gulp](https://gulpjs.com/ "gulp") + [browserify](http://browserify.org/ "browserify") 组合：

* gulp：自动化项目构建利器，解决 [less](http://lesscss.org/ "less") 编译、图片压缩、 js 压缩等静态资源的处理
* browserify：构建 js 代码，解决 js 模块化

虽然现在（2017年度）有了 [webpack](https://webpack.github.io/ "webpack") ，这个更好的模块化解决方案，但哪又怎样呢？

主要功能
-------
* 页面内容可配置：页面内容全由一个 JSON 文件结合 [handlebars](http://handlebarsjs.com/ "handlebars") 渲染生成
* 页面支持响应式：采用 [Bootstrap](http://www.bootcss.com/) 响应式布局
* 新功能迭代中...

技术栈
------
* [gulp](https://gulpjs.com/ "gulp")
* [browserify](http://browserify.org/ "browserify")
* [handlebars](http://handlebarsjs.com/ "handlebars")
* [less](http://lesscss.org/ "less")
* [Bootstrap](http://www.bootcss.com/)

安装
----
首先确保电脑上安装 [Node.js](https://nodejs.org/zh-cn/ "Node.js") 和 [Git](https://git-scm.com/ "Git")

```bash
git clone https://github.com/funlee/resume-auto.git
cd resume-auto
npm install
gulp server
```
然后在浏览器里输入：http://localhost:8080 即可访问

在线访问：[funlee's resume](http://show.funlee.cn/resume/index.html "funlee's resume")

制作自己的简历
-------------
如果你喜欢 [此简历](http://show.funlee.cn/resume/index.html "funlee's resume") 的模版，那你用此项目的代码进行 DIY ，进而制作属于自己的简历：
* 进入 data 文件夹，编辑 [data](/src/data/resume.json "内容配置项") 中的内容即可定制属于你的内容
* 如需修改配色、布局等，可自行修改样式文件 [resume.less](/src/less/resume.less "简历样式")
* 导出图片格式或者 PDF 格式，我的方法是使用 [360浏览器](http://se.360.cn/ "360浏览器") 的网页导出为图片功能，然后在 PS 里面编辑（裁剪）图片，进而制作 JPG 格式或者 PDF 格式



