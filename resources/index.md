---
layout: resource
title: Resources
resource_title: Resource Home
permalink: /resources/
---

<p class="resource-intro">
The web pages in this section contain links to various types of resources related to the GPS Lab that researchers have found useful over the years.
</p>

{% assign resources = site.data.resources %}

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
