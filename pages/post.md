---
permalink: /post/
---
# 文章列表

<ul class="mdui-list mdui-p-a-0">
{% for post in site.posts %}
    <a class="mdui-list-item mdui-ripple mdui-btn-block mdui-p-a-1" href="{{ post.url | remove: '.html' }}"><span class="mdui-float-left mdui-typo-body-2">{{ post.title }}</span> <span class="mdui-float-right"> {{ post.date | date:'%Y 年 %m 月 %d 日' }} </span> </a>
    <div class="mdui-divider"></div>
{% endfor %}
</ul>
