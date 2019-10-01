---
date: 2019-9-13
---

# 学辅首页
![本图片来自于西安交通大学官方网站，版权归其所有。](assets/images/frontpage.jpg)

<center-banner>第一次上信息站？<a href="/welcome">戳我快速入门！</a></center-banner>

<i class="fa fa-star"></i> [**新生必读**](/intro/life-in-xjtu)|<i class="fa fa-file"></i> [**培养方案**](/program/)|<i class="fa fa-map"></i> [**交大站点导航**](/navigator)
:-:|:-:|:-:
<i class="fa fa-github"></i> [**Star us!**](https://github.com/qyxf/)|<i class="fa fa-book"></i> [**学辅书库**](/BookHub)|<i class="fa fa-university"></i> [**钱院首页**](http://bjb.xjtu.edu.cn/)

---

## 推送一览

<ul>
  {% for post in site.posts limit:5 %}
    <li><span class='mono'><i class="fa fa-star"></i></span>
      <a href="{{ post.url }}">{{ post.title }}</a> @ {{ post.date | date:'%Y 年 %m 月 %d 日' }}
    </li>
  {% endfor %}
  <li><a href="post">更多推送...</a></li>
</ul>

## <i class="fa fa-medal"></i> 精品功能
> 别人不知道的信息，我们知道！

- <span class='mono'><i class="fa fa-star"></i></span> [新生必读](/intro/life-in-xjtu) 钱院萌新戳这里！！
- <span class='mono'><i class="fa fa-file"></i></span> [培养方案查询](/program/) 课程清单早知道，提前预习好帮手！
- <span class='mono'><i class="fa fa-th"></i></span> [课程中心](/course/) 课程信息、辅导资料、前人经验一站式收录！
- <span class='mono'><i class="fa fa-map"></i></span> [校园站点导航](/navigator) 近在咫尺却远在天边的本校资源，**全部集齐**！
- <span class='mono'><i class="fa fa-code"></i></span> [技术中心](/technique/) 感受最精品的排版、网页、开源协作学习体验！


## <i class="fa fa-book"></i> 最新资料
> 我们不做内容的搬运工，只做精品资料的**原创者**！[**查看全部书目**](/BookHub)

- [![005-钱院新生手册-blue](shield)](/BookHub/005.freshman-manual)
- [![004-数试学习生活指南-blue](shield)](/BookHub/004.guidance-for-study)
- [![003-大学物理题解-blue](shield)](/BookHub/003.key-to-university-physics)
- [![002-GRE指南-blue](shield)](/BookHub/002.gre-guide)
- [![001-TOEFL备考心得-blue](shield)](/BookHub/001.toefl-tips)

## <i class="fa fa-compass"></i> 实用指南
> 我们不止提供资料，我们更提供**自主学习**的工具与方法！

- <i class="fa fa-file-alt"></i> [Git 与 GitHub 快速上手教程](/tutorials/git-github)
- <i class="fa fa-file-alt"></i> [Git 客户端使用指南](/tutorials/git-client)
- <i class="fa fa-file-alt"></i> [OneNote 简介](/tutorials/onenote)
- <i class="fa fa-file-alt"></i> [钱院学辅 LaTeX 讲座](https://github.com/qyxf/lec-on-LaTeX)
- <i class="fa fa-file-alt"></i> [钱院学辅 LaTeX 安装指导](/tutorials/latex-download)

## <i class="fa fa-address-card"></i> 关于我们

钱院学辅的全称为“西安交通大学钱学森书院学生会学业辅导中心”，是钱学森书院学生会下属的学业辅导组织。[**了解我们！**](/about)
