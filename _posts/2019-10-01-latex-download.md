---
title: LaTeX 环境配置教程
author: '`自动化钱71吴思源`，`能动少C71尤佳睿`'
---

## 环境

由于Microsoft Word 糟糕又麻烦的公式编辑和繁琐的文档排版方式，我们不得不选择更加优雅的环境进行我们的编写。

目前我们使用LaTeX排版系统进行排版，需要大家在自己电脑上配置LaTeX环境

LaTeX系统已经广泛应用于国外的科技类文档的写作于排版中，国内的论文写作和slide制作也在使用这个系统进行

> 之后大家参加数学建模竞赛、做科研、发 paper 的时候，还要不止一次的用 LaTeX。

## 编译器

- TeXlive：https://www.tug.org/texlive/
- MikTeX：https://miktex.org

> 千万别装 CTeX 套装。

### TeXLive

TeX Live 的官方站点是[https://tug.org/texlive/](https://tug.org/texlive/)，

可以从[官方站点](http://mirror.ctan.org/systems/texlive/Images/texlive2018.iso)下载安装包

但同时，也可以尝试[清华大学](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/texlive2018.iso)和[中国科学技术大学](https://mirrors.ustc.edu.cn/CTAN/systems/texlive/Images/texlive2018.iso)的镜像站，点击即可下载 iso 镜像文件。

打开下载得到的 `texlive2018.iso`文件，以管理员身份运行 `install-tl-advanced.bat`，点击 continue 会进入安装设置界面，根据自己的需要进行设置，即可进行安装。整个安装过程可能比较长，需要耐心等待。



### MikTeX

笔者下载后和接下来要安利的 TexStudio 一起放到了百度网盘，以下是链接：

> 链接：https://pan.baidu.com/s/1mWyefxDxPKvK4-ECEAgsZw
>
> 提取码：`bsmx`



## 编辑器

可选的文本编辑器为 Atom，VS Code，Sublime Text 等，其中 Atom 和 VSCode 软件功能较多，但是比较大。

如果只写 LaTeX语言，还能使用 TexStudio，这个编辑器是 LaTeX 语境下最好的 IDE。

### 关于TexStudio

![1552817408941](/img/latex-download/1552817408941.png)

TexStudio 的配置可能稍微困难一点，请同学们自行百度，我记得需要在设置里面修改一些东西。太久没用了有点陌生。

刚下载下来的是英文版，需要修改语言才可以调为中文版，请百度「关于 TexStudio 的中文界面设置」查看详情。

这个软件十分专业，功能比 VS Code 多很多，支持对应文字查看等

书写 LaTeX，然后摁 <kbd>F5</kbd> 编译，下面会提示编译情况，错误了也会提示错在哪里。

![1552820099818](/img/latex-download/1552820099818.png)

比如故意少写一个括号，立刻标红提示：

![1552820218537](/img/latex-download/1552820218537.png)

然后报错具体位置：

![1552820373455](/img/latex-download/1552820373455.png)

没啥好写的，因为比较好用。

> 这里强烈推荐使用 TeXStudio 进行编写。


### 关于VS Code

笔者目前 Win 平台上的主力 IDE，所以对这个比较熟悉。

下载地址：https://code.visualstudio.com/

> 设置中文语言需要修改 json 文件，可能也是比较麻烦，所以就没改。
>
> **补充**：近来已经有比较方便的中文插件，在 Package 中可以轻松安装。

![1552817666666](/img/latex-download/1552817666666.png)

点击最下面的这个图标（安装插件），搜索 LaTeX WorkShop。

![1552817715027](/img/latex-download/1552817715027.png)

然后点击下载就行，下载之后 enable 即可。

为了使用这款插件，可以 `File` -> `OpenFolder` 然后新建一个文件，文件名 `test.tex`（或者直接`New File`, 但是文件名一定要后缀为`.tex`）；这时候左边会变成这个样子：

![1552817971372](/img/latex-download/1552817971372.png)

编译时则为：

![1552818053223](/img/latex-download/1552818053223.png)

点击 `Recipe: latexmk`（当然按 <kbd>Ctrl</kbd> + <kbd>S</kbd> 保存，将会触发自动编译）

> 千万不要按 <kbd>F5</kbd>！！！ 因为按 <kbd>F5</kbd> 是运行程序，在 VS Code 中 LaTeX 只是排版语言，没有对应的编译器去运行 LaTeX 程序。
>
> **补充**：并非没有对应的编译器；在默认情况下，VS Code（以及相近的 Atom）会使用一套默认的设置编译 LaTeX 文件，对中文文档十有八九会出问题。此外，它的编译环境、路径等可能没有像插件中那样正确地配置。

下面会显示编译进度，右下角会弹出来编译结果：

![1552818122162](/img/latex-download/1552818122162.png)

弹出来这个框，说明代码写错了……

![1552819697296](/img/latex-download/1552819697296.png)

然后点击 output 找语法错误，接下来就可以改错误，如果下面出现「√」图标，说明编译成功，而且可以看到编译所用的时间。

![1552819793379](/img/latex-download/1552819793379.png)

乱码显示是因为我在文件目录里面使用了 CJK 字符，建议不要在文件目录中出现 CJK 字符和空格，以免带来不必要的麻烦。点击第二个按钮（就是红点放大镜）可以查看 PDF，当然也可以选择浏览器查看。

最后记得点击 `Clean up auxiliary files`，清理掉目录下的各个附属文件，如 `test.aux`、`text.xdv`、`text.toc`、`text.out` 等。

> **补充**：
>
> 1. 「CJK 字符」指「中日韩统一表意字符」（China-Japan-Korea Unified Ideographs），简单来说就是一种编码手段，将同一汉字在繁简中文、韩国与日本的汉字、越南的喃字、儒字等不同字形变种的不同形态用同一个计算机字符编码表示。目前我们所广泛使用的 Unicode 编码（「万国码」）即是用这种方式来表示汉字。网络上大家也常用「CJK 字符」来泛指汉字、各式日韩文字符等东亚字符。
>
> 2. 关于附属文件：清理附属文件，应当在一切编译工作完成、文章基本「封笔」之后进行，因为这些附属文件存在的意义就是为了加快再次编译的速度。

## 示例

> 此处原来的示例代码较为杂乱，涉及太多实际内容，因此计划在近期重新编写。


## LaTeX 教程推荐
- [从零开始 LaTeX 快速入门](http://liuchengxu.org/blog-cn/posts/quick-latex/)
- [常用符号的 LaTeX 表示方法](http://mohu.org/info/symbols/symbols.htm)
- [实战经验](https://blog.csdn.net/simple_the_best/article/details/51244631)
- [数学公式排版](https://zhuanlan.zhihu.com/p/24502400)
- [参考文献排版](https://zhuanlan.zhihu.com/p/25013341)
