---
title: 【网站技术文档】仓库与网站机制
author: '`能动少C71尤佳睿`'
---

> 本文迁移自信息站仓库的对应 wiki 页面。内容与当前的网站架构并不完全一致，需要进一步更新；仅供参考。

本文档将介绍：

- 托管本站的 GitHub Pages 服务如何运作；
- Jekyll 如何将开源仓库中的 Markdown 文档发布为一个网站；
- 使用 Jekyll 时，文档仓库的目录树应如何安排。

## 关于 GitHub Pages

[钱院学辅信息站](https://qyxf.github.io/)是通过 GitHub 提供的 GitHub Pages 服务构建出来的。简而言之，其机制是：

- 名为 `<username>` 用户在存放了若干 Markdown 文档的 `<reponame>` 仓库（的某一分支，本站采用 `master`）中启用 GitHub Pages 服务；
- GitHub 将采用一种名为 Jekyll 的「静态网页生成器」将目录下的 Markdown 文档渲染为 HTML 网页，并按照原来的仓库结构将这些网页存放于一个新的文件夹中（默认的名称为 `_site`）；
- 获得网页文件后，GitHub 将以 `https://<username>.github.io/<reponame>` 的默认域名将这些 HTML 文档发布在互联网上。

特别地，如果 `<username>` 用户创建了一个名为 `<username>.github.io` 的仓库，则在此仓库上启用 GitHub Pages 所得到的网站将直接发布在 `https://<username>.github.io` 上，后面不会跟有 `<reponame>` 作为路径。

> GitHub Pages 支持自定义域名。

在站点的生成过程中，你只需要提供 Markdown 文档（以及自定义的样式表、HTML 模板等），剩余的事情均不需要你自己参与。这使得网站的运维变得异常轻松，更降低了协作者的准入门槛——只需要熟悉 Markdown 文档，就能够参与内容的编辑。

> :book: 可供参考的 GitHub Pages 教程：[GitHub 使用指南 - GitHub Pages 入门](https://github.highlight.ink/github-pages/)。

## Jekyll 工作机制

Jekyll 是一款「静态网页生成器」，可以将指定目录下的 Markdown 文档按给定的方式渲染为一组 HTML 网页，导出到名为 `_site` 的目录下（进而可以发布到互联网上）。在这样的机制下，网页制作变成一件非常轻松的工作，「内容与样式分离」成为基本的原则。

Markdown 文档涉及的是网站的**内容**。除此以外，网站还需要**样式**与**功能**，具体的说就是需要补充布局、样式表与 Javascript 脚本。一方面，Jekyll 允许用户自行组织这些内容；另一方面，为降低设计成本，Jekyll 还允许用户使用他人已设计好的「主题」，并在其上覆写自己的样式。这样，设计的难度便大大降低。

> 本站选用了 GitHub Pages 主题选择器中提供的 [Leap Day](/page-themes/leap-day/) 主题，并在此基础上做了一些调整。
>
> :scroll: 关于主题的覆盖，请参考另一篇技术文档：[网页布局与覆盖](./网页布局与覆盖)

在网站的维护过程中，你可能需要在两种场合下运行 Jekyll：

1. 当你将版本库 `push` 到 GitHub Pages 所依赖的分支（本站为 `master`）后，其将自动开始用 Jekyll 生成网页。这一过程是不可见的——你至多只能接收到 GitHub Pages 服务反馈回来的错误信息。
2. 你可以在本地安装 Jekyll，在本地版本库中自行生成与调试。Jekyll 集成了一个本地服务器，可以在你的计算机上测试网站效果。

> :book: 关于 Jekyll 的本地安装，可参考：[Jekyll 文档 - 安装](http://jekyllcn.com/docs/installation/)。

由于 GitHub Pages 采用的 Jekyll 版本并不频繁更新，并增添了一些额外的生成参数，因此本地测试效果与 Pages 服务效果可能略有差异。

## 目录树

对于 Jekyll 而言，仓库的目录结构非常重要，其决定了网站最终的页面分布。

### 「博客风」与「自由风」

如果你认真阅读 Jekyll 的文档，你会发现其推荐的[目录结构](http://jekyllcn.com/docs/structure/)与学辅信息站所用的不尽相同。这是因为，Jekyll 为「个人博客」量身定制了许多特性，而信息站并非一个「博客」站点。为了便于描述，我们将 Jekyll 所推荐的目录结构称为「博客风」，而把我们所应用的形式称为「自由风」。

对于采用「博客风」的文档仓库，其目录结构相对固定：

    .
    ├── _config.yml
    ├── _drafts
    |   ├── 2019-06-01-summary-of-upper-2019.md
    |   └── 2019-07-01-a-crazy-idea-about-qyxf.md
    ├── _includes
    |   ├── footer.html
    |   └── header.html
    ├── _layouts
    |   ├── default.html
    |   └── post.html
    ├── _posts
    |   ├── 2018-01-01-my-first-blog.md
    |   └── 2019-01-01-summary-of-2018.md
    ├── .jekyll-metadata
    └── index.md

其中，所有的「文章」都放在 `_posts` 目录下（另有 `_drafts` 目录存放未发布的「草稿」），余下的大多是必要的配置文件，会在之后提到。这种目录树结构十分规整，给「强迫症」患者带来了福音。但对于学辅信息站来说，这种结构并不能满足要求。

还好，Jekyll 并没有强制要求我们采用这种目录结构——由此便有了本站所采用的「自由风」。在本站的目录下，没有 `_posts` 与 `_drafts` 目录，而是根据实际的需要设立了若干「分类目录」，如：

- `tutorial` 目录：存放技术教程。
- `program` 目录：存放各专业的培养方案。
- `course` 目录：存放各门课程的信息与指南。

这样，便于将不同类型的页面分门别类，按不同的方式处理。采用「自由风」组织文档的代价是：你将不能享受到 Jekyll 为博客站点所设计的诸多便捷功能，例如自动生成目录、自动提取摘要等。

> :warning: 「博客风」与「自由风」并非对立的概念。准确的说，「博客风」是 Jekyll 希望、鼓励用户采用的目录结构，而「自由风」则代表着 Jekyll 所支持的一般目录结构；在许多站点上，这两种风格是并用的。
>
> :book: 关于「博客风」，读者可以参考：[Jekyll 文档 - 目录结构](http://jekyllcn.com/docs/structure/)。

### 「自由风」站点生成法则

Jekyll 怎样利用散落在目录树中的文档与配置文件呢？简单地说，可以归纳出以下几条「法则」：

- 在运行的最开始，Jekyll 总是于根目录下的 `_config.yml` 文件中读取网站的配置信息，其中包括用户所设定的主题。
- Jekyll 会寻找根目录下有无名为 `index.html` 的文件。如果有，便将其设为网站的主页；如果没有，便去寻找名为 `index.md` 的文件，找到之后将其渲染为 `index.html` 并作为主页；再没有，就去寻找 `README.md`，渲染为 `index.html` 并作为主页。（对各级子目录/路径，过程类似。）
    > 一般而言，`README.md` 文件用于在 GitHub 上展示仓库/子目录信息，而不用做网站的主页。因此，最好在根目录下分别维护 `index.md` 与 `README.md` 两个文件；对各级子路径，如不需要 `README`，则可以用 `README.md` 顶替对应的 `index.md` 文件。
- 通常情况下，Jekyll 会把仓库中的路径直接转换为对应网页路径。例如，信息站的 `/tutorial/git-github` 页面，正是由存放于 `tutorial` 目录下的 `git-github.md` 文件渲染出来的。
- Jekyll 在渲染中文名称文档时往往出错，因此请避免用中文对文档命名。
- 如果目录下某文件并非 Markdown 或 HTML 文档（如 PDF 文件），则其将被原封不动的上传到网站中。由此，即可利用 GitHub 的远程储存空间实现中小文件的下载（可参考[钱院学辅·书库](/qyxf/BookHub)项目）。 


### 关于 `_config.yml`

`_config.yml` 是一个 YAML 格式（常被用来写配置文件）的数据文件，储存着 Jekyll 生成站点时的若干参数，以及你自行添加的一些元数据。此外，由于我们的信息站托管于 GitHub Pages 上，并采用了已有的主题，因此这里也包含一些需要传送给 Pages 服务和主题（而不属于 Jekyll 本身）的参数。

> :book: 如果读者希望详细了解 YAML 文件的写法，可以参考：[YAML 语言教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/07/yaml.html)。

配置文件遵循「覆写原则」：如果你未在 `_config.yml` 中指明某个参数的值，则 Jekyll 会采用[默认配置](http://jekyllcn.com/docs/configuration/#默认配置)。在本站的 `_config.yml` 文件中，没有修改任何 Jekyll 自身的参数，仅修改了几条 GitHub Pages 服务所需的参数。这一部分在 `_config.yml` 文件中表现为：

```yaml
title: 钱院学辅信息站
theme: jekyll-theme-leap-day
plugins:
  - jekyll-mentions
```

这里，声明了本站的标题为「钱院学辅信息站」（出现在网站页面上），采用 Leap Day 主题，并加载了 `jekyll-mentions` 插件（用于在 Markdown 文档中实现 `@` 引用）。

除此以外，在我们的 `_config.yml` 文件中，还定义了一些显示在页面上的元数据，如出现在网页顶部的 `slogan` 等。这样做，主要是为了将具体的文本从网页布局模板 `_layout/default.html` 中剥离出来。

> :book: 关于配置文件的写法，可进一步参考：[Jekyll 文档 - 配置](http://jekyllcn.com/docs/configuration/)。
