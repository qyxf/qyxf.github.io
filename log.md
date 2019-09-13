---
date: 2019-9-13
author: '[![能动少C71尤佳睿](person)](@xjtu-blacksmith)、[![自动化钱71吴思源](person)](@edmundwsy)'
---

# 站点更新日志
> 这里记录本站的更新状况。目前本站的版本为 `V2.1`，代号为**青云·雪峰**。

## 青云·雪峰（V2.1）
- **2019.09.13**：修复了页面顶端导航栏过短、导航菜单加载时闪入的问题。
- **2019.09.11**：为网站启用了 [qyxf.site](https://qyxf.site/) 的自定义域名。该域名与「钱院学辅信息站」较好的对应，实意更大。
- **2019.09.05**：初始化了自定义的 404 页面。
- **2019.09.04**：鉴于国内实际情况，将 Fontawesome 官网模块用国内 [Bootstrap 中文网](https://www.bootcss.com)提供的 CDN 代替。
- **2019.08.30**：解决了引用块中字体过小、网站顶部标题配色不协调的问题。
- **2019.08.24**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)对站点的样式进行了大幅度调整，由原来的蓝紫标题、淡蓝色配色、默认木黄色背景，改为蓝色渐变标题、灰黑配色（夜间风格）、黑色图样背景。此外，将原来采用的 [Leap Day](https://github.com/pages-themes/leap-day) 主题文件全部 fork 到网站代码仓库中，并进行了大幅度的重定义、校正，摆脱对远端文件的依赖；将原来的覆写样式表 `style.scss` 中合理部分移植到本地主题文件中，暂定新的修改主题名为「Leap Month」（`leap-month.scss`）。本次更新后，将版本号记录为 `V2.1`，并给予「青云·雪峰」的代号。


## 青云·新风（V2.0）
- **2019.08.12**：将首页标题由「钱院学辅·Qyxf」改为「学辅首页」。
- **2019.08.08**：将在 GitHub 上展示的 `README.md` 与网站首页 `index.md` 分离开来，并将 `2.0` 的版本号重定位于此。调整了 HTML 的模板文件，将各部分内容拆分成小文件。为网站采用了 [qyxf.tk](http://qyxf.tk) 的免费域名（现已弃用）。
- **2019.08.07**：引入了 Travis CI 持续集成功能（暂时只用于检测页面生成状态）。
- **2019.08.06**：引入了 YAML 头信息与 Liquid 标签语言至文档与 HTML 模板之中，实现了页面信息的同步。
- **2019.08.02**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)将技术文档移动至网站代码仓库的 [wiki 页面](https://github.com/qyxf/qyxf.github.io/wiki)，并完善了其内容。由于钱院学辅转隶于钱院学生会，[![自动化钱71吴思源](person)](@edmundwsy)对相关介绍进行了调整。
- **2019.07.30**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith) 为标牌（`sheildsMenu.js`）附加了引用到 GitHub 用户页面的功能。
- **2019.07.26**：考虑到在两处同时更新仓库的麻烦，[![能动少C71尤佳睿](person)](@xjtu-blacksmith)将 `bookhub` 页面模块从本站架构中移除，直接在其[仓库](https://github.com/qyxf/BookHub/)中开启了 GitHub Pages 服务，现已独立为[钱院学辅·书库](/BookHub/)站点。同时，引入了自动生成 [Shields](https://shields.io) 标牌的 [`shieldsManu.js`](https://github.com/qyxf/qyxf.github.io/blob/master/assets/js/shieldsManu.js) 模块（通过 jQuery 实现）与本地生成、填充目录树的 [`buildTree.js`](https://github.com/qyxf/BookHub/blob/master/buildTree.js) 模块（通过 Node.js 实现）。
- **2019.07.22**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)对站点的布局、样式和辅助功能做了较大幅度的更新。为记录、区分各次网站更新后的版本，引入版本号及代号制度；本次更新后，将版本号记录为 `V2.0`，并给予「青云·新风」的代号。

## 框架搭设期（V1.1）
- **2019.07.16**：[![物试82华润森](person)](@RunsenHua)将[新生手册·生活部分](/intro/life-in-xjtu)添加到网站中。
- **2019.07.06**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)小幅更新了网站的页面样式，并新增了[西安交大网址导航](/navigator)。
- **2019.06.06**：[![自动化钱71吴思源](person)](@edmundwsy)将书库（[BookHub](https://github.com/qyxf/BookHub/)）项目文档导入到信息站，并为各书目添加了用户友好的下载链接。
- **2019.06.05**：自五月末开始，[![计试81易韬](person)](@NODDeeVan)尝试在 Jekyll 框架下重新设计网站。虽付出很大心血，但因种种原因没有实现预期效果。经协商讨论，[![自动化钱71吴思源](person)](@edmundwsy)将站点仓库复原至 2019.05.26 时的版本。
- **2019.05.26**：[![自动化钱71吴思源](person)](@edmundwsy)为本站设置了浏览统计，并新设了[贡献指导](/contribution)。
- **2019.05.23**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)修正了网站的标题栏，并更改导航栏图标为西安交通大学校徽。
- **2019.05.21**：[![自动化钱71吴思源](person)](@edmundwsy)新建了本站的第一篇、第二篇文章：[Git 与 GitHub 教程](/totorials/git-github)与 [OneNote 教程](/tutorials/onenote)。
- **2019.05.15**：钱院学辅学研部召开会议，讨论了网站筹办的有关事项，网站建设就此提上日程。开始大范围整理培养方案。[![钱84费立涵](person)](@a05323749033) 贡献了[第一篇培养方案](/program/qianxuesen)。
- **2019.05.12**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)新建了「[培养方案查询](/program/)」和「[课程中心](/course/)」模块，并初步架设了相关框架。

## 建站之始（V1.0）
- **2019.05.10**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)在首页上发布了第一批信息内容。
- **2019.05.08**：[![能动少C71尤佳睿](person)](@xjtu-blacksmith)创立了网站的仓库，并配置了 GitHub Pages 功能所需的相关环境。初步采用 [Leap Day](https://github.com/pages-themes/leap-day) 作为基本主题。
