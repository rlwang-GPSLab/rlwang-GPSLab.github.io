---
layout: page
title: Resources
permalink: /resources/software-tools/sugl/
---

<div class="resource-layout">
  {% include resource-sidebar.html %}

  <div class="resource-content">
  <h1>SUGL Ephemeris Files</h1>

  <p class="resource-intro">
    These files in the ZIP archive links below are in RINEX format and contain GNSS navigation data that have been processed as described in
    <a href="#" target="_blank" rel="noopener">Dr. Liang Heng's thesis</a>.
  </p>

  <p>
    These files were derived from the IGS navigation data files, which were then cross-compared to eliminate erroneous data.
  </p>

  <p>
    However, these files have not all been manually validated and may still contain some incorrect information.
  </p>

  <h2 class="resource-subheading">GPS Ephemeris Files</h2>

  <p>
    Below are links to annual ZIP archives of the RINEX-format GPS Ephemeris Files for the years 2007–2022.
  </p>

  <ul class="resource-link-list">
    {% for year in (2007..2022) reversed %}
    <li>
      <a href="{{ '/assets/files/software/sugl/gps-' | append: year | append: '.zip' | relative_url }}">
        {{ year }} GPS Ephemeris Files ZIP Archive
      </a>
    </li>
    {% endfor %}
  </ul>

  <h2 class="resource-subheading">Galileo Ephemeris Files</h2>

  <p>
    Below are links to annual ZIP archives of the RINEX-format Galileo Ephemeris Files for the years 2018–2022.
  </p>

  <ul class="resource-link-list">
    {% for year in (2018..2022) reversed %}
    <li>
      <a href="{{ '/assets/files/software/sugl/galileo-' | append: year | append: '.zip' | relative_url }}">
        {{ year }} Galileo Ephemeris Files ZIP Archive
      </a>
    </li>
    {% endfor %}
  </ul>
</div>
</div>
