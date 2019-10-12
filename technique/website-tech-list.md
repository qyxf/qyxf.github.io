---
date: 2019-10-12
author: '`能动少C71尤佳睿`'
---

# 钱院学辅信息站技术一览

此处张贴钱院学辅信息站用到的各方面技术手段，供站点维护者及其他开源社区成员参考。

## 站点基本功能

- 网页三剑客：HTML、CSS、JavaScript
- 日常文档撰写：Markdown（使用 [Kramdown](https://kramdown.gettalong.org/) 引擎编译）
- 一站式网站生成：[Jekyll](https://jekyllrb.com/)（V3.8.6）
- 版本控制：[Git](https://git-scm.com/)
- 开源协作：[GitHub](https://github.com/)
- 静态网站托管：[GitHub Pages](https://pages.github.com/) 服务
- 自定义域名与域名解析：……

## 页面美化

- 矢量图标：[Font Awesome](https://fontawesome.com/)（V4.7.0）
- 数学公式：$$\mathrm{\TeX}$$/$$\mathrm{\LaTeX}$$ 公式语法，MathJax 公式引擎
- 彩色标牌：[shields.io](https://shields.io/) 静态/动态标牌服务
- 字体改良：webfont（目前暂未优化中文字体）
- 访问量统计：[不蒜子](https://busuanzi.ibruce.info/)
- 中西文混排空格：[pangu.js](https://github.com/vinta/pangu.js)

## 效率提升

- 自定义参数：YAML 文件与 Markdown 中的 YAML 头信息
- 低门槛脚本撰写：[JQuery](https://jquery.com/)（V3.3.0）
- 持续集成：[Travis CI](https://travis-ci.org/)（暂未大规模引入）
- 高效 CSS：[Sass](https://sass-lang.com/)（使用 SCSS 语法）
- 静态嵌入信息：[Liquid](https://shopify.github.io/liquid/) 模版语言
- 插件加速：[BootCDN](https://www.bootcdn.cn/) 提供的国内 CDN 服务
