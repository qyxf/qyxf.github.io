---
date: 2019-10-03
---

# 学辅首页
![本图片来自于西安交通大学官方网站，版权归其所有。](/assets/images/frontpage.jpg)

<center-banner>第一次上信息站？<a href="/welcome">戳我快速入门！</a></center-banner>

<div class="icon-bar">
  <a href="/intro/life-in-xjtu"><i class="fa fa-star fa-pulse"></i> 新生必读</a>
  <a href="/program/"><i class="fa fa-file"></i> 培养方案</a>
  <a href="/course/"><i class="fa fa-th"></i> 课程中心</a>
  <a href="/navigator/"><i class="fa fa-map"></i> 交大导航</a>
  <a href="https://github.com/qyxf/"><i class="fa fa-github"></i> Star us!</a>
  <a href="/BookHub/"><i class="fa fa-book"></i> 学辅书库</a>
  <a href="/technique/"><i class="fa fa-rocket"></i> 技术中心</a>
  <a href="http://bjb.xjtu.edu.cn/"><i class="fa fa-university"></i> 钱院首页</a>
</div>


## <i class="fa fa-commenting-o"></i> 推送一览

<ul class="postlist">
  {% for post in site.posts limit:10 %}
    <li><i class="fa fa-comment-o"></i>
      <a href="{{ post.url }}">{{ post.title }}</a> by {{ post.author | markdownify | remove: '<p>' | remove: '</p>' }}
    </li>
  {% endfor %}
  <li><span class="mono"><i class="fa fa-chevron-circle-down"></i></span> <a href="post"><strong>更多推送...</strong></a></li>
</ul>


## <i class="fa fa-book"></i> 最新资料
> 我们不做内容的搬运工，只做精品资料的**原创者**！[**查看全部书目**](/BookHub)

- <i class="fa fa-book"></i> [大学物理往年期末试题](/BookHub/006.university-physics-tests)
- <i class="fa fa-book"></i> [钱院新生手册](/BookHub/005.freshman-manual)
- <i class="fa fa-book"></i> [数试学习生活指南](/BookHub/004.guidance-for-study)
- <i class="fa fa-book"></i> [大学物理题解](/BookHub/003.key-to-university-physics)
- <i class="fa fa-book"></i> [GRE指南](/BookHub/002.gre-guide)
- <i class="fa fa-cloud-download"></i> [开源资料区](/BookHub/001.resources)

## <i class="fa fa-compass"></i> 技术指南
> 我们不止提供资料，我们更提供**自主学习**的工具与方法！[**戳我进技术中心**](/technique)

- <i class="fa fa-file-word-o"></i> [学研部排版技术路线](/technique/typeset)
- <i class="fa fa-file-word-o"></i> [Git 与 GitHub 快速上手教程](/technique/git-github)
- <i class="fa fa-file-word-o"></i> [Git 客户端使用指南](/technique/git-client)
- <i class="fa fa-file-word-o"></i> [OneNote 简介](/technique/onenote)

## <i class="fa fa-address-card"></i> 关于我们

> 钱院学辅的全称为“西安交通大学钱学森书院学生会学业辅导中心”，是钱学森书院学生会下属的学业辅导组织。目前，主要负责在钱学森书院内组织各种形式的学业辅导活动，同时也投入很大精力运营资料平台、网站等发布信息的渠道。[**了解我们！**](/about)
