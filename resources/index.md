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
        <div class="resource-card" data-category="{{ r.category | slugify }}">
          {% if r.image %}
          <img src="{{ r.image | relative_url }}" alt="{{ r.title }}">
          {% endif %}

          <div class="resource-body">
            <h3>
              <a href="{{ r.url }}" target="_blank" rel="noopener">
                {{ r.title }}
              </a>
            </h3>

            {% if r.description %}
            <p>{{ r.description }}</p>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>

  </div>

</div>
