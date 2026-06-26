---
layout: page
title: Publications
# subtitle: "GPS Lab published documents"
permalink: /publications/
---

{% assign pubs = site.data.publications | sort: "first_author_last" | sort: "year" | reverse %}
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
  <div class="pub-list">

    {% assign displayed_year = "" %}

    {% for p in pubs %}
      {% assign year_filter = "year-" | append: p.year %}
      {% if p.year_group == "1990 and Earlier" %}
        {% assign year_filter = "year-1990-earlier" %}
      {% endif %}

      {% if displayed_year != p.year %}
        {% assign displayed_year = p.year %}
        <h2 class="pub-year-heading" data-year-heading="{{ year_filter }}">
          {% if p.year_group == "1990 and Earlier" %}
            1990 and Earlier
          {% else %}
            {{ p.year }}
          {% endif %}
        </h2>
      {% endif %}

      <div class="pub-item"
           data-category="{{ p.category }}"
           data-year="{{ year_filter }}">

{% if p.authors %}

<p class="pub-authors">{{ p.authors }}</p>
{% endif %}

<p class="pub-title">
  {% if p.url %}
  <a href="{{ p.url }}" target="_blank" rel="noopener">{{ p.title }}</a>
  {% else %}
  {{ p.title }}
  {% endif %}
</p>

<p class="pub-meta">
  {% if p.venue %}
    Published in <span class="muted">{{ p.venue }}</span>
  {% endif %}
  {% if p.year %}
    , {{ p.year }}
  {% endif %}
</p>
      </div>
    {% endfor %}

  </div>
</div>

</div>
