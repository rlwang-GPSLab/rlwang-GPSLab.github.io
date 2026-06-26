---
layout: page
title: Research
# subtitle: "Ongoing research and recent work"
---

<div class="project-grid">
  {% for proj in site.data.projects %}
    <a class="project" href="{{ proj.url | relative_url }}">
      <img src="{{ proj.thumbnail | relative_url }}" alt="{{ proj.title }} thumbnail">
      <div class="project-body">
        <p class="project-title">{{ proj.title }}</p>
        <p class="project-subtitle">{{ proj.subtitle }}</p>
        {% if proj.tags %}
          <div class="pub-links" style="margin-top:10px;">
            {% for t in proj.tags %}
              <span class="pill">{{ t }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </a>
  {% endfor %}
</div>
