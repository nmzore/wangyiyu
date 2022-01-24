# vue-网抑郁-项目

基于 **Vue 全家桶 (2.x)** 制作的音乐APP ，一个媲美原生的移动端外卖 App，项目完整、功能完备、UI美观、交互一流。

# :book: 技术栈

【前端】

- **Vue**：构建用户界面的 MVVM 框架，核心是响应的数据绑定和组系统件
- **vue-router**：为单页面应用提供的路由系统，项目上线前使用了路由懒加载技术，来异步加载路由优化性能
- **vuex**：Vue 集中状态管理，在多个组件共享某些状态时非常便捷
- **vue-resource**：服务端通讯，项目后期改用 `axios`
- **axios**：服务端通讯。基于 `Promise` 的网络请求插件
- **Sass(Scss)**：css 预编译处理器
- **ES6**：ECMAScript 新一代语法，模块化、解构赋值、Promise、Class 等方法非常好用
- **Moment.js**：日期时间格式化插件

【后端】

- **Node.js**：利用 Express 起一个本地测试服务器
- **Express**：一个自身功能极简，完全是由路由和中间件构成一个的WEB开发框架

【自动化构建及其他工具】

- **vue-cli**：Vue 脚手架工具，快速初始化项目代码

- **ESLint**：代码风格检查工具，规范代码书写

- 

  ## :closed_book: 收获

  1. 对 vue 的组件、指令、选项、模版渲染、事件绑定、计算属性等有了一定了解
  2. 了解了 vue 组件之间的交互、传值
  3. 熟悉了在 vue 项目中使用第三方插件（组件）
  4. 熟悉了组件化、模块化的开发思维
  5. 熟悉了 vue-router 控制路由和子路由的方式
  6. 再次熟悉项目开发流程：项目分析设计 -> 项目环境搭建 -> 依赖安装 -> 页面架构设计 -> 组件开发 -> 测试联调 -> 发布上线
  7. 总结了一套 Vue 通用组件，可以在其它项目中复用的 10+ 个基础组件、15+ 个业务组件
  8. 总结了一套常用的 JS 工具函数库
  9. 体会到组件化、模块化开发带来的便捷
  10. 学会利用过渡效果及动画效果制作良好的用户交互体验

# **搭建-项目**

```
搭建项目 
//git clone git@github.com:zhan12345678/wangyiyu.git
安装依赖 
// npm i
运行
//npm run serve
```

**搭建-服务器**

```
搭建服务器
//git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git 
安装依赖
// npm install
运行
//node app.js
```

**git命令**

```
git init # 初始化一个空白仓库
git add . # 加入本地缓存区
git commit -m '提交' # 提交
git rebase  # 变基
git reset logid # 回退
git merge xx # 合并
git push # 推送
git pull # 拉取
git checkout -b # 创建一个新的分支比切换过去
git branch # 查看所有的峰值
```

# 任务-以及难点
-我的

难点：歌单助手的移动模块(未实现)

-发现

-云村

-K歌
-播客

难点：双重循环里面截取接口不同的数据

优点：亮点就是全部组件化，结构清晰

