# 推送列表

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> @ {{ post.date | date:'%Y 年 %m 月 %d 日' }}
    </li>
  {% endfor %}
</ul>
