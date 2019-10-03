---
date: 2019-10-01
author: '[![自动化钱71吴思源](person)](@edmundwsy)'
editor: '![能动少C71尤佳睿](person)'
---

# 关于 Git 客户端的介绍

## Git Extensions 简述

> 此段暂缺。

## 安装

点击[链接](https://sourceforge.net/projects/gitextensions/)处，下载 Git Extensions。双击下载好的 `msi` 文件安装。

出现这个界面时：

- 若未安装过 Git，可选择下面的 Putty；
- 若已经使用过 Git，可以选择上面的 OpenSSH。

> 这里是选择密钥加密方式。我们的 GitHub 远程仓库也需要钥匙才能打开。你注册的 Github 账号只能证明你具有管理仓库的身份，钥匙需要认证后生成，保存在本地。

一路右键，直到出现设置界面

如果缺少软件配置合并比较工具 `kdiff3`，说明未安装此工具，有两个解决办法：

- 点击[这里](https://sourceforge.net/projects/kdiff3/files/)安装合并比较工具；
- 进入此界面左边的“Git -> 设置”中 ，选择本地已经安装的其它合并比较工具。

![git_client_1](/img/git-client/git_client_1.jpg)

> **合并比较工具**：拉取或推送远程文件时，若本地的文件和远程文件有所不同，此时会通过合并比较工具逐行比较本地文件和远程文件，然后让用户取舍。

## 使用

### 将远程仓库克隆到本地

打开 GitHub 的某个仓库，点击绿色按钮，即可复制仓库地址。

![git_client_2](/img/git-client/git_client_2.jpg)

在你想放的位置（我知道肯定是桌面）打开右键菜单，选择“GitExt Clone”，粘贴上仓库的地址，然后点击「克隆」即可。

![git_client_3](/img/git-client/git_client_3.jpg)

克隆完成后，将提示按 <kbd>Esc</kbd> 或者 <kbd>Enter</kbd> 退出。

### 将本地更改上传

改完了总要传吧？先对本地仓库文件夹打开右键菜单 -> `GitExt Commit`：

![git_client_4](/img/git-client/git_client_4.jpg)

如果你真的点了提交而不是提交并推送，需要再右键点击文件夹打开右键菜单 -> `Git Extension` -> `Push` 。

### 拉取远程更改

打开右键菜单，选择“Git Extension -> Pull”，然后直接点击右下角拉取，合并选项不需要动。

有时候当远程仓库此文件已经修改，会出现冲突（conflict）：若拉取时对话框出现「CONFLICT」，则表示出现冲突。点击「解决冲突」 ，然后「合并更改」，此时会使用你选择的合并工具进行合并。解决冲突之后，会弹窗询问是否解决、是否可以提交，点击「提交」即可。

![git_client_5](/img/git-client/git_client_5.jpg)
