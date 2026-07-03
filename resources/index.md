---
layout: page
title: Resources
permalink: /resources/
---

{% assign resources = site.data.resources %}
{% assign categories = resources | map: "category" | uniq | sort %}

<div class="resource-layout">

  <aside class="resource-sidebar" aria-label="Resource filters">
    <h3>Browse</h3>

    <button class="resource-filter is-active" type="button" data-filter="all">
      All
    </button>

    {% for category in categories %}
      <button class="resource-filter" type="button" data-filter="{{ category | slugify }}">
        {{ category }}
      </button>
    {% endfor %}
  </aside>

  <div class="resource-content">
    <div class="resource-grid" data-resource-grid>

      {% for r in resources %}
      <a class="resource-card"
         data-category="{{ r.category | slugify }}"
         href="{{ '/resources/' | append: r.slug | append: '/' | relative_url }}">

        {% if r.image %}
        <img src="{{ r.image | relative_url }}" alt="{{ r.title }}">
        {% endif %}

        <div class="resource-body">
          <h3>{{ r.title }}</h3>

          {% if r.description %}
          <p>{{ r.description }}</p>
          {% endif %}
        </div>

      </a>
      {% endfor %}

    </div>
  </div>

</div>