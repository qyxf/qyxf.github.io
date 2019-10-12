# 推送列表

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | remove: '.html' }}"><strong>{{ post.title }}</strong></a> by {{ post.author | markdownify | remove: '<p>' | remove: '</p>' }} （{{ post.date | date:'%Y 年 %m 月 %d 日' }}）
    </li>
  {% endfor %}
</ul>
