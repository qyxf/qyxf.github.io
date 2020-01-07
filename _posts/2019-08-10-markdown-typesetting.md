---
title: 【网站技术文档】Markdown 入门与排版规范
author: '`能动少C71尤佳睿`'
---

> 本文迁移自信息站仓库的对应 wiki 页面。此份文档中内容偏于严谨、琐碎，不宜作入门教材使用，而可作提高的材料；本站已发布更贴合读者需求的 [Markdown 入门指南](/2019/10/04/typeset-beginner) 与 [排版规范](/2019/01/03/typeset-standard)，点击对应链接即可访问。此外，本文中所涉及的标牌语法已经发生变化，届时将发布新的说明。

在本文档中，您可以了解到：

- 什么是 Markdown「方言」，GitHub 所采用的 GFM 与通常所言的 Markdown 有什么区别；
- 头信息是什么，如何在 Markdown 文档中填写头信息；
- 如何在 Markdown 文档中使用标牌，甚至用标牌来显示钱院同学的信息；
- **在钱院学辅**以什么方式撰写 Markdown 文档足称「规范」。


## 关于 GFM

### Markdown 的「哲学」

Markdown 是一种「标记语言」，用于在一份纯文本中区分出标题、正文等不同的内容，便于之后的样式处理、格式转换（特别是转换到 HTML 文档）。正如 Markdown 的原作者 John Gruber 所言：

> A Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.
>
> 一份 Markdown 文档应能如纯文本一样「如实」反映其最终形式，而不应通篇充斥着标签或样式说明（以供转换）。

换句话说，与 HTML 相较，Markdown 追求文档的可读性，并要求其注重内容、隔绝样式。这便是 Markdown 的哲学。

> :book: 如果你还没有接触过 Markdown，可以把以下的几份文档（之一）作为你的入门教程：
> 
> - [精通 Markdown（中文翻译）](https://github.highlight.ink/mastering-markdown/intro)；
> - [Markdown 语法说明（简体中文版）](https://www.appinn.com/markdown/basic.html)；
> - [Markdown Guide（English）](https://www.markdownguide.org/basic-syntax)。
>
> 它们的内容都较为基本，阅读起来不会有什么障碍。

### 「方言」现象
许多 Markdown 用户不知道的是：Markdown 仅仅是一种文档格式，需要「处理」成其他格式（一般是 HTML）才能呈现为美观的页面。这使得 Markdown 的「解释」绝非唯一的，以下几个因素都能导致最终结果的差异：

- 处理程序可以由不同的编程语言实现，用 C 语言，用 Python，用 Javascript，都能够完成这转换过程。这自然可以造成差异。
- 即使用同一种编程语言来编写「处理」Markdown 文档的程序，也存在着搜索方式不同、匹配或执行顺序不同的问题。
- 不同的作者对一些标记的复杂组合持有不同的看法，这导致他们的程序以不同的方式解释某些标记。
- 除了以上三点外，最常见的差异往往来源于各种「附加功能」，如表格、超链接、代码高亮等。

Markdown 在创立之初并没有制定语法标准，这导致 Markdown「方言」层出。幸好，对于绝大多数「中规中矩」的文档而言，这些差异可以忽略不计。这也正是许多用户不知 Markdown 有「方言」一说的原因。

> :warning: 有些 Markdown 处理器允许用户决定是否采用拓展功能，或部分支持其他语法，如 Pandoc、MultiMarkdown、Kramdown 等。这使得「方言」的判定更加复杂——对于这样的程序，可以归纳出好几种「方言」。

简单来说，以下四个 Markdown「方言」是需要读者了解的：

- `markdown.pl`：最早的 Markdown 版本，从文件名可以看出其用 Perl 语言写成。最初，它被作为事实上的 Markdown 标准；但由于这份代码中错漏不少，又停止了更新，因此已经失去其价值。
- CommonMark：一个「无歧义」（unambiguous）的 Markdown 语法规范，你可以将其比喻为 Markdown 世界中的「普通话」。许多的 Markdown「方言」都是基于 CommonMark 所做的拓展。
- GitHub Flavored Markdown（GFM）：GitHub 上采用的 Markdown 语法规范，主要语法与 CommonMark 一致，并根据 GitHub 的需要增添了一些新特性。由于 GitHub 的影响力日渐增大，GFM 已经成为许多人学习的第一种（及唯一一种）Markdown「方言」。
- Kramdown：一种在 Markdown 基础上大幅拓展的 Markdown 语法（它自称为 Markdown 的「超集」），Jekyll 使用的 Markdown 渲染引擎就是 Kramdown。

> :warning: 如果读者一定想要选定一种「方言」作为自己心中的「范本」，则 CommonMark 会是一个较好的选择——你可以用 CommonMark 的语法来映照其他「方言」的特性。

因此，如果有人问你「GFM 与 Markdown 的区别」，你应该直觉地意识到这是一个「伪问题」，就像「汉语与粤语的区别」一样。（当然，在一些编辑器中，往往用「Markdown」这个名词指代某种基本或通行的 Markdown 语法，如 CommonMark，这就是另一回事情了。）

> :book: 关于上面的四种「方言」，你可以分别参考它们的语法文档：
>
> - `markdown.pl`：[Daring Fireball: Markdown Syntax Documentation](https://daringfireball.net/projects/markdown/syntax)
> - CommonMark：[CommonMark Spec](https://spec.commonmark.org/current/)
> - GFM：[GitHub Flavored Markdown Spec](https://github.github.com/gfm/)
> - Kramdown：[Syntax \| kramdown](https://kramdown.gettalong.org/syntax.html)
>
> :book: 你还可以在 [babelmark3](https://babelmark.github.io) 上比较不同「方言」对同一份 Markdown 文档的解释。

### GFM 的拓展特性
通常而言，用 GFM 撰写 Markdown 文档是较为保险的做法：大多数 Markdown 引擎都兼容 GFM。不过，它们并非都完全支持 GFM 的所有拓展功能，特别是其在 CommonMark 基础上延伸出来的功能。GFM 的拓展特性包括：

拓展特性|说明
---|---
:star: 表格|这里用的就是表格。（大家都以为，表格是 Markdown 的「标准特性」。）
:star: 任务列表|与一般的项目列表类似，不过将 `-` 改为 `- [ ]` 或 `- [x]`，以实现类似于复选框（Combox）的表单项。
:star: 删除线|使用一对 `~~` 来标记出~~需要划掉的文本~~。
自动链接|将诸如 `www.github.com` 的文本自动转换为链接。
禁用部分 HTML 标签|GFM 不会处理诸如 `<title>`、`<script>` 等不应出现在正文中的标签。

标注了 :star: 的三项语法尤须注意：一方面，它们非常常用；另一方面，它们**不一定**能在其他的「方言」中实现。

## 头信息
在使用 Jekyll 渲染 Markdown 文档时，「头信息」是需要额外填写的内容。它并不属于 Markdown 的范畴。

所谓的头信息，是一段「嵌入」在 Markdown 文件中的 YAML 数据代码。它在 Markdown 文档中必须写在开头，用两端 `---` 形式的分割线隔开：

```markdown
---
date: 2019-1-1
category: article
---
```

这段头信息中，指定了文章的日期（`date`）和类别（`category`）。在 Jekyll 的机制下，一些变量有相应的处理机制，其他的则完全由用户定义与处理。

### 本站采用的头信息
基于本站的需要，我们要求用户参与编辑时填写以下头信息：

名称|示例|意义及说明
---|---|---
`date`|`date: 2019-1-1`|文章的最后修改日期。会显示在最终生成的文档之底部。
`author`|`author: 张三`<br>`author: '[阮一峰](http://www.ruanyifeng.com/blog/)'`<br>`author: '[![能动少C71尤佳睿](person)](@xjtu-blacksmith)'`|文章正文的原作者，该字段**会按 Markdown 格式转换**，再显示于最终生成的文档之底部。如果作者是本校学生，请采用 `sheildsManu` 插件填写作者信息。
`editor`|`editor: '![电机31江学长](person)、[![能动少C71尤佳睿](person)](@xjtu-blacksmith)'`|文章的编辑、排版者，处理规则与 `author` 相同。

> :warning: 填写字段时，应注意以下几点，避免生成错误：
>
> - `date` 字段读取的是日期数据。除非你了解 YAML 中的日期类型，否则应严格按照这里的示例格式填写日期。
> - 在 `author` 与 `editor` 字段中，只要采用了 Markdown 格式所需的特殊字符（如`()`、`!`），就应将整个字符串用引号括起来。

## 标牌生成
[shields.io](https://shields.io/) 是一个提供「标牌」（badge）服务的网站，已经广泛地应用于 GitHub 上各开源项目之中。以下这些都是由 shields.io 所生成的标牌：

- ![static](https://img.shields.io/badge/progress-100%25-brightgreen)
- ![stars](https://img.shields.io/github/stars/qyxf/qyxf.github.io?style=social)
- ![release](https://img.shields.io/github/release/qyxf/BookHub?style=for-the-badge)
- ![person](https://img.shields.io/badge/电机31-江学长-grey?style=plastic&labelColor=yellow&logo=Sina-Weibo)

你不需要用任何特殊的工具，即可借助 shields.io 生成美观的标牌。

### 基本用法
最简单的「静态」标牌，可以通过以下的图片链接访问获得：

```markdown
![](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)
```

- `<LABEL>` 中填写标牌左半侧的内容，一般是辅助说明、次要信息、前缀等。
- `<MESSAGE>` 中填写标牌右半侧的内容，一般是主要信息。
- `<COLOR>` 中填写如 `red` 或 `#000000` 这样的色彩代码，这个颜色最终会反映在 `<MESSAGE>` 上。

例如，在以上的路径中，填写 `成立时间-1896-blue`，就将得到 ![](https://img.shields.io/badge/成立时间-1896-blue)。

> :warning: 不要在以上的三个标签中出现如 `-`、`_` 或 `%` 等特殊字符。
>
> - 对于连字符 `-`，应采用 `--` 替代；对于下划线 `_`，应采用 `__` 替代。
> - 空格用下划线替代。
> - 其他可能存在问题的特殊字符，用 [ASCII 编码方式](https://www.w3school.com.cn/html/html_urlencode.asp)（如 `%` 写为 `%25`）替代。

shields.io 不仅支持静态文本的转换，也支持动态提取数据再转换为标牌。例如，它可以提取某个 GitHub 仓库的 Stars 数，并生成像 ![stars](https://img.shields.io/github/stars/qyxf/qyxf.github.io) 这样的标牌。

> :book: 你可以直接访问 [shields.io](https://shields.io) 网站，生成静态、动态标牌的链接，或修改标牌的色彩、样式。

### 并不足够：shieldsManu
shields.io 所提供的功能已经足够便捷，但我们还希望得到更多。例如：

- 每次生成标牌时，需要完整的填写 `https://img.shields.io/badge/` 这一大串前置路径，我们希望在 Markdown 文档中更简洁地调用标牌；
- shields.io 所提供的标牌并不为正文设计（一般用在文档顶部），我们却希望用它来装点正文，故应将标牌调整到文本的基线位置；
- 作为钱院的辅导组织，我们希望以一种方便的方式将文档中的同学姓名转换为标牌，并根据专业分配不同的颜色。

为此，我们定制了一款名为 `shieldsManu.js` 的 jQuery 脚本，用来处理这些关于标牌的需求。在本站的 Markdown 文档中，你可以用以下三种方式调用该脚本。

> :warning: `shieldsManu.js` 是一份学辅自用的脚本，它在别的地方当然不能生效。因此，不要将这个脚本实现的简化写法看作「理所应当」。

### sheildsManu 生成静态标牌
对于 `<LABEL>-<MESSAGE>-<COLOR>` 形式的静态标牌，可用

```markdown
![<LABEL>-<MESSAGE>-<COLOR>](shield)
```

的简化写法直接生成。例如，`![成立时间-1896-blue](shield)` 就能直接生成 ![](https://img.shields.io/badge/成立时间-1896-blue)。

> :warning: 填写在链接的 `shield` （不是 `shields`）是识别的依据，不能省略或拼错。

### shieldsManu 转化同学信息
可采用如

```markdown
![钱81张三](person)
```

这样的简化写法，将同学信息转化为标牌：![钱81张三](https://img.shields.io/badge/钱81-张三-grey?style=plastic&labelColor=yellow&logo=GitHub)。

> :warning: 填写在链接的 `person` 是识别的依据，不能省略或拼错。

标牌的颜色由专业决定，目前支持所有的钱院专业：

专业班级|识别关键词|颜色|示例
---|---|---|---
钱学森班|钱|`yellow`|![](https://img.shields.io/badge/钱81-张三-grey?style=plastic&labelColor=yellow)
少年班|少|`red`|![](https://img.shields.io/badge/电气少81-张三-grey?style=plastic&labelColor=red)
越杰班|越杰|`brightgreen`|![](https://img.shields.io/badge/越杰81-张三-grey?style=plastic&labelColor=brightgreen)
数学试验班|数试、数__试|`lightblue`|![](https://img.shields.io/badge/数试81-张三-grey?style=plastic&labelColor=lightblue)
物理试验班|物试、物__试|`blue`|![](https://img.shields.io/badge/物试81-张三-grey?style=plastic&labelColor=blue)
化生实验班|化生、化__生|`blueviolet`|![](https://img.shields.io/badge/化生81-张三-grey?style=plastic&labelColor=blueviolet)
计算机实验班|计试、计__试|`orange`|![](https://img.shields.io/badge/计试81-张三-grey?style=plastic&labelColor=orange)
人工智能实验班|人试、人__试|`silver`|![](https://img.shields.io/badge/人试81-张三-grey?style=plastic&labelColor=silver)
侯宗濂医学试验班|宗濂|`violet`|![](https://img.shields.io/badge/宗濂81-张三-grey?style=plastic&labelColor=violet)
非钱院班级|/|`grey`|![](https://img.shields.io/badge/电气813-张三-grey?style=plastic&labelColor=grey)

### shieldsManu 转换同学信息并附加站内链接
对于在 GitHub 上有个人主页的同学，可以将上面的图片写法进一步嵌套在一个链接中：

```markdown
[![能动少C71尤佳睿](person)](@xjtu-blacksmith)
```

其中，链接部分使用 GitHub 站内的 `@` 引用实现，指向该同学的 GitHub 主页。以上标牌将生成形如 [![](https://img.shields.io/badge/能动少C71-尤佳睿-grey?style=plastic&labelColor=red&logo=GitHub)](https://github.com/xjtu-blacksmith) 的带链接标牌，附有 GitHub 图标。

> :scroll: 关于 `shieldsManu.js` 的实现，请参考另一篇技术文档：[网页布局与覆盖](网页布局与覆盖#新建实例shieldsmanujs)。

## 排版规范

「排版」是一项十分讲究的工作，但常常被大家所忽视。诸如 Microsoft Word、在线富文本编辑器等「傻瓜」式处理程序的出现，虽然降低了人们处理文档的门槛，却也因其功能的冗余和「实现粗暴」而进一步加剧了人们的审美缺失（乃至扭曲）。过去，人们认为这仅仅是「白菜青菜，各有所爱」；现在，已经有越来越多的人遭受糟糕排版的困扰，影响到学习、记录、交流的效率与效果。

作为一种简洁的标记语言，Markdown 充分实现了「内容与样式分离」的原则，从根源上阻止用户在样式方面自作主张，有效地提高了许多网络社区的页面质量。尽管如此，在文本内容方面，仍有一些需要注意的地方；这些细节，并不能由 Markdown 解决，因此需要额外的予以「规范」。

「规范」是人为定义的。但无论是哪种排版规范，首要的原则都是：

> 规则、样式、风格要前后一致，不要此处用此规范、彼处用彼规范。

因此，这里参考目前已经较为通行的一些规范要求，结合钱院学辅的实际情况，做如下规定。

### 钱院学辅中文排版规范

1. 请使用直角引号。

    :star: 「这样」，「这样地『这样』」。

    :x: “这样”，“这样地‘这样’”

> :warning: 选择直角引号而非横排引号，并非由于谁优谁劣，而是想推动读者在此尝试新方式。
>
> :book: 你可能需要参考：[知乎 - 如何输入直角引号（「」和『』 ）？](https://www.zhihu.com/question/19755746)。

2. 中文字符与西文、数字之间必须留有空格。

    :star: 我们学校的名称是 Xi'an Jiaotong University 或西安交通大学，创建于 1896 年。

    :x: 我们学校的名称是Xi'an Jiaotong University或西安交通大学，创建于1896年。

3. 中文半角符号与西文之间不留空格。

    :star: 西安交通大学，英文名为 Xi'an Jiaotong University，是一所坐落在西安市（Xi'an）的综合性大学。

    :x: 西安交通大学，英文名为 Xi'an Jiaotong University ，是一所坐落在西安市（ Xi'an ）的综合性大学。

4. 除非是纯西文的短语、句子、段落、文档，均采用中文的标点符号（Markdown 所需的标记符号当然除外）。

    :star: Notes：普通话（Mandarin）是一种非常棒的语言，真的！

    :x: Notes: 普通话 (Mandarin) 是一种非常棒的语言, 真的! 

    :star: 你可以参见《Legendary: Guides to Mandarin & Cantonese》。

    :x: 你可以参见《Legendary：Guides to Mandarin＆Cantonese》。

5. 在遵守以上原则的前提下，链接文本与其他文本之间不留空格。

    :star: 你可以参考[开源中国](https://www.oschina.net/)或 [GitHub 首页](https://github.com/)给出的说明。

    :x: 你可以参考 [开源中国](https://www.oschina.net/) 或 [GitHub 首页](https://github.com/) 给出的说明。

6. 在遵守以上原则的前提下，对于带字母单位的数字，值与单位之间不留空格。

    :star: 今天的天气为「中雨」，最高气温为 26℃，城区降水量可达 15mm 以上。

    :x: 今天的天气为「中雨」，最高气温为 26 ℃，城区降水量可达 15 mm 以上。

> :book: 如果你对以上所说的原则缺乏直观感知，可参考这篇博文所给出的实例：[中文文案排版指北](https://mazhuang.org/wiki/chinese-copywriting-guidelines/)。因其所提出的原则与我们的不完全一致，故仅供参考。
