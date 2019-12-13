---
layout: page
permalink: /post/
title: 文章列表
---
<ul class="mdui-list">
{% for post in site.posts %}
    <a class="mdui-list-item mdui-ripple mdui-btn-block mdui-p-a-1" href="{{ post.url | remove: '.html' }}"><span class="mdui-typo-body-2">{{ post.title }}</span></a>
{% endfor %}
</ul>
