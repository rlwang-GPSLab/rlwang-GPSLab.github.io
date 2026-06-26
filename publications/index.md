---
layout: page
title: Publications
# subtitle: "GPS Lab published documents"
permalink: /publications/
---

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign categories = "journal|Journal,conference|Conference,magazine|Magazine,theses|Theses,books|Books" | split: "," %}
{% assign current_year = "now" | date: "%Y" | plus: 0 %}

<div class="pub-layout">

  <aside class="pub-sidebar" aria-label="Publication filters">
    <h3>Category</h3>
    <button class="pub-filter is-active" type="button" data-filter="all">All</button>

    {% for c in categories %}
      {% assign parts = c | split: "|" %}
      <button class="pub-filter" type="button" data-filter="{{ parts[0] }}">
        {{ parts[1] }}
      </button>
    {% endfor %}

    <h3>Year</h3>
    {% for y in (1991..current_year) reversed %}
      <button class="pub-filter" type="button" data-filter="year-{{ y }}">{{ y }}</button>
    {% endfor %}
    <button class="pub-filter" type="button" data-filter="year-1990-earlier">
      1990 and Earlier
    </button>

  </aside>

  <div class="pub-content">
    <div class="card pub-list">
      {% for p in pubs %}
      {% assign year_filter = "year-" | append: p.year %}
      {% if p.year_group == "1990 and Earlier" %}
        {% assign year_filter = "year-1990-earlier" %}
      {% endif %}

      <div class="pub-item"
           data-category="{{ p.category }}"
           data-year="{{ year_filter }}">

        <p class="pub-title">
          {% if p.url %}
          <a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.title }}</a>
          {% else %}
          {{ p.title }}
          {% endif %}
        </p>

        {% if p.authors %}
        <p class="pub-meta">{{ p.authors }}</p>
        {% endif %}

        <p class="pub-meta">
          {% if p.venue %}<span class="muted">{{ p.venue }}</span>{% endif %}
          {% if p.year %} · {{ p.year }}{% endif %}
        </p>
      </div>
      {% endfor %}
    </div>

  </div>

</div>
