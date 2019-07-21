# Git 与 GitHub 快速上手教程
> **警告：**本教程仍在撰写当中，部分内容有待完善。

## 1 什么是 Git 与 GitHub？
[Git](https://git-scm.com)是一个版本控制软件，这类软件能够精确的记录制定目录下代码的增删变动，在必要时允许还原到原来的状态。当然，对Git而言，其还有许多特有的功能，在此暂不详述[^0]。Git并非一个在线软件，它自身只能够实现本地的版本控制。

[GitHub](https://github.com)则是一个基于Git而建立的代码在线托管平台，一般的免费用户可使用公共仓库（代码要公开），付费后可以建立私人仓库。至2019年四月，GitHub上已托管超过一亿个开源代码仓库，有超过3600万名用户活跃其中[^1]。

GitHub的出现[^2]，使我们不再担心备份与远程协作：一切提交，均有记录。

> **小结：**GitHub是这个星球上最流行的开源托管服务。让人不再担心备份与远程协作，一切提交，均有记录。

## 2 GitHub指南：如何直接使用 GitHub
对于新手来说，Git是一个“高深莫测”的工具，其所提供的功能也往往显得太“高级”，有牛刀宰鸡之感。如果仅仅是希望用GitHub实现简单的文档或代码协作，则不必如此大费周折，只需要在GitHub的网页或客户端上操作就已足够了。下面针对这一部分内容作简单的讲解。

开始之前，需要先完成下面的两项工作：

- [注册GitHub](https://github.com/join)；
- 如果你希望以**小白**的身份获得 Git + GitHub 的最佳体验，可以尝试[下载GitHub客户端](https://desktop.github.com)。当然，这一步可以略去不做，这样的后果是：你只能在网页上创建或上传文件，而不能建立起远程仓库与本地仓库的联系。

由于一些原因，GitHub在国内访问时速度很慢，常常掉线或中断连接。针对这种情况，你有两种选择：

1. 访问网页、上传文件时，学会更加耐心~~或者充分利用加载的时间完成泡茶、点外卖、洗衣服、写作业等闲杂事项~~；
2. 自备梯子（本站不提供相关资源）。

### 2.1 GitHub是怎么运作的
### 2.2 玩转自己的仓库
### 2.3 参与协作
### 2.4 体验GitHub客户端

## 3 Git 指南：进入深水区
在开始下面的内容之前，首先需要[下载Git](https://git-scm.com/downloads)并安装之（或许你还需要一份[安装教程](https://git-scm.com/book/zh/v2/起步-安装-Git)）。

### 3.1 本地创建
在Git页面中，输入命令

    git clone /path/to/repository 

即可创建一个本地仓库的克隆版本（从现有的仓库中拷贝）。而

    git init

可从本地创建新目录。

初始化后，会在 newrepo 目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中。

### 3.2 加入文件
    git add ./Handout3.tex

当然还有其它的选项，比如add文件夹里面所有文件

    git add --all


### 3.3 提交
    git commit -m "Adding files"

将修改提交版本库

- 工作区：就是你在电脑里能看到的目录。
- 暂存区：英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
- 版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。

### 3.4 与远程同步

    git remote add origin git@github.com:edmundwsy/new.git

将本地库与远程关联

    git remote remove origin

取消关联

    git clone https://github.com/qyxf/Tutorials.git

将我们远程的repo克隆至本地

    git pull

拉取远程更新，以在你的工作目录中 *获取（fetch）* 并 *合并（merge）* 远端的改动。

    git push origin master

    git push <远程主机名> <本地分支名>  <远程分支名>

即是将本地的master分支推送到远程主机origin上的对应master分支， origin 是远程主机名，

    git push -h

### 3.5 设置公钥

    git config --global user.name "My Name" 
    git config --global user.email myEmail@example.com

如果报错

```powershell
$ git push origin master                                 
git@github.com: Permission denied (publickey).
```

在GitHub设置远程公钥就可以解决这个问题

在GitHub网页端：Setting -> SSH Keys->New SSH key

- title处填写：`id_rsa.pub`
- `cat ~/.ssh/id_rsa.pub`
  - 若没有，则`ssh-keygen -t rsa`
  - 一路回车......
  - 最后，输入`ssh -T git@github.com`确认OK即可。
- 然后把这个复制到GitHub中，保存
- 再尝试就ok了

再解决不了了估计就是没有权限了。。。。。。请联系仓库管理员

### 3.6 分支


    git checkout -b feature_x

创建一个叫做“feature_x”的分支，并切换过去：

    git checkout master

切换回主分支：

    git branch -d feature_x

再把新建的分支删掉：

    git push origin <branch>

除非你将分支推送到远端仓库，不然该分支就是 *不为他人所见的*

### 3.7 合并分支


要合并其他分支到你的当前分支（例如 master），执行：

    git merge <branch>

在这两种情况下，git 都会尝试去自动合并改动。遗憾的是，这可能并非每次都成功，并可能出现*冲突（conflicts）*。 这时候就需要你修改这些文件来手动合并这些*冲突（conflicts）*。改完之后，你需要执行如下命令以将它们标记为合并成功：

    git add <filename>

在合并改动之前，你可以使用如下命令预览差异：

    git diff <source_branch> <target_branch>

### 3.8 历史记录

如果你想了解本地仓库的历史记录，最简单的命令就是使用: 

    git log

你可以添加一些参数来修改他的输出，从而得到自己想要的结果。 只看某一个人的提交记录:

    git log --author=bob

一个压缩后的每一条提交记录只占一行的输出:

    git log --pretty=oneline

或者你想通过 ASCII 艺术的树形结构来展示所有的分支, 每个分支都标示了他的名字和标签: 

    git log --graph --oneline --decorate --all

看看哪些文件改变了: 

    git log --name-status

这些只是你可以使用的参数中很小的一部分。更多的信息，参考：

    git log --help

## 4 一些问题
> 冲突怎么办？

合并分支，手动修改。建议先把自己的提交，然后`pull`，最后`commit`，可最大程度减少冲突的几率。

## 5 其它教程
以下这些教程较这里的更为详细，值得进一步阅读。

- [git 简明指南](http://rogerdudler.github.io/git-guide/index.zh.html)
- [菜鸟教程 - git教程](http://www.runoob.com/git/git-tutorial.html)
- [廖雪峰Git教程](
https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

最后，在熟悉了GitHub的基本使用方法后，别忘了关注我们的作品！

- [钱院学辅的GitHub主页](https://github.com/qyxf)
- [钱院学辅书库（BookHub）](https://github.com/qyxf/BookHub)

<!--- 引用 --->
[^0]: 想要详细的学习Git的使用，可参考Git的官方在线教程：[Pro Git](https://gitee.com/progit/index.html)——这里提供的是[码云](https://gitee.com/)上的中文翻译。
[^1]: 数据来自于：[GitHub自述页面](https://github.com/about)，查看于2019年6月13日。
[^2]: 准确地说，Git并非较早诞生的版本控制软件，GitHub也远非最早的远程开源仓库（更早者有[SourceForge](https://sourceforge.net)、[Launchpad](https://launchpad.net/)等），但GitHub可以说是首次让**开源仓库**这个概念冲出了程序员的小圈子。