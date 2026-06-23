---
layout: page
title: News
subtitle: " "
permalink: /news/
---

{% assign items = site.news | sort: "date" | reverse %}

<div class="news-list">
  {% for n in items %}
  <article class="news-list-item">
    <div class="news-list-text">
      <p class="pub-title">
        <a href="{{ n.url | relative_url }}">{{ n.title }}</a>
      </p>

      <p class="pub-meta">
        {{ n.date | date: "%B %d, %Y" }}
      </p>

      {% if n.description %}
      <p class="news-description">{{ n.description }}</p>
      {% endif %}
    </div>

    {% if n.image %}
    <a class="news-list-image" href="{{ n.url | relative_url }}" aria-label="{{ n.title }}">
      <img src="{{ n.image | relative_url }}" alt="{{ n.title }}">
    </a>
    {% endif %}

  </article>
  {% endfor %}
</div>
