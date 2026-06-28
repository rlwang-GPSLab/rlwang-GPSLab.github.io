---
layout: page
title: Publications
# subtitle: "GPS Lab published documents"
permalink: /publications/
---

{% assign pubs = site.data.publications %}
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

{% for y in (1991..current_year) reversed %}

{% assign year_pubs = pubs
      | where: "year", y
      | sort: "first_author_last" %}

{% if year_pubs.size > 0 %}

    <h2 class="pub-year-heading"
        data-year-heading="year-{{ y }}">
      {{ y }}
    </h2>

    {% for p in year_pubs %}

      <div class="pub-item"
           data-category="{{ p.category }}"
           data-year="year-{{ y }}">

        {% if p.authors %}
        <p class="pub-authors">{{ p.authors }}</p>
        {% endif %}

        <p class="pub-title">
          {% if p.url %}
          <a href="{{ p.url }}" target="_blank" rel="noopener">
            {{ p.title }}
          </a>
          {% else %}
          {{ p.title }}
          {% endif %}
        </p>

        <p class="pub-meta">
          Published in
          <span class="muted">{{ p.venue }}</span>{% if p.details %}, {{ p.details }}{% endif %}{% if p.month %}, {{ p.month }}{% endif %}{% if p.day %} {{ p.day }},{% endif %}{% if p.year %} {{ p.year }}{% endif %}{% if p.doi %}, DOI {{ p.doi }}{% endif %}.
        </p>

      </div>

    {% endfor %}

{% endif %}

{% endfor %}

  </div>
</div>

</div>
