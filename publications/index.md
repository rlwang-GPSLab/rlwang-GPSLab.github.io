---
layout: page
title: Publications
# subtitle: "GPS Lab published documents"
permalink: /publications/
---

<div class="pub-layout">

  <aside class="pub-sidebar">
    <h3>Category</h3>
    <a href="#all">All</a>
    <a href="#journal">Journal</a>
    <a href="#conference">Conference</a>
    <a href="#magazine">Magazine</a>
    <a href="#theses">Theses</a>
    <a href="#books">Books</a>

    <h3>Year</h3>
    <a href="#year-all">All Years</a>
    {% assign current_year = "now" | date: "%Y" | plus: 0 %}
    {% for y in (1991..current_year) reversed %}
      <a href="#y{{ y }}">{{ y }}</a>
    {% endfor %}
    <a href="#y1990-earlier">1990 and Earlier</a>

  </aside>

  <div class="pub-content">
    {% assign pubs = site.data.publications | sort: "year" | reverse %}

    <section id="all" class="pub-section">
      <h2>All Publications</h2>
      {% for p in pubs %}
        {% include publication-item.html p=p %}
      {% endfor %}
    </section>

    {% assign categories = "journal|Journal,conference|Conference,magazine|Magazine,theses|Theses,books|Books" | split: "," %}
    {% for c in categories %}
      {% assign parts = c | split: "|" %}
      {% assign key = parts[0] %}
      {% assign label = parts[1] %}
      {% assign category_pubs = pubs | where: "category", key %}
      {% if category_pubs.size > 0 %}
      <section id="{{ key }}" class="pub-section">
        <h2>{{ label }}</h2>
        {% for p in category_pubs %}
          {% include publication-item.html p=p %}
        {% endfor %}
      </section>
      {% endif %}
    {% endfor %}

    {% for y in (1991..current_year) reversed %}
      {% assign year_pubs = pubs | where: "year", y %}
      {% if year_pubs.size > 0 %}
      <section id="y{{ y }}" class="pub-section">
        <h2>{{ y }}</h2>
        {% for p in year_pubs %}
          {% include publication-item.html p=p %}
        {% endfor %}
      </section>
      {% endif %}
    {% endfor %}

    {% assign older_pubs = pubs | where: "year_group", "1990 and Earlier" %}
    {% if older_pubs.size > 0 %}
    <section id="y1990-earlier" class="pub-section">
      <h2>1990 and Earlier</h2>
      {% for p in older_pubs %}
        {% include publication-item.html p=p %}
      {% endfor %}
    </section>
    {% endif %}

  </div>
</div>
