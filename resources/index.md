---
layout: page
title: Resources
subtitle: "Lab resources"
permalink: /resources/
---

<div class="resources-grid">
  {% for r in site.data.resources %}
    <a class="resource-card" href="{{ r.url | relative_url }}">
      <img src="{{ r.thumbnail | relative_url }}" alt="{{ r.title }} thumbnail">
      <div class="resource-body">
        <p class="resource-title">{{ r.title }}</p>
        <p class="resource-subtitle">{{ r.subtitle }}</p>

        {% if r.tags %}
          <div class="resource-tags" style="margin-top:10px;">
            {% for t in r.tags %}
              <span class="pill">{{ t }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>
