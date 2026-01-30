---
layout: page
title: News
subtitle: "Updates, talks, awards, and lab announcements"
---

{% assign items = site.data.news | sort: 'date' | reverse %}
<div class="card">
  {% for n in items %}
    <div class="pub-item" id="{{ n.id }}">
      <p class="pub-title">{{ n.title }}</p>
      <p class="pub-meta">{{ n.date | date: "%B %d, %Y" }}</p>
      <p style="margin:8px 0 0;">{{ n.body }}</p>
    </div>
  {% endfor %}
</div>
