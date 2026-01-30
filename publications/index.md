---
layout: page
title: Publications
subtitle: "Selected papers, preprints, and conference proceedings"
---

{% assign pubs = site.data.publications | sort: 'year' | reverse %}
{% assign years = pubs | map: 'year' | uniq %}

{% for y in years %}
  <div class="pub-year" id="y{{ y }}">
    <h2>{{ y }}</h2>
    {% for p in pubs %}
      {% if p.year == y %}
        <div class="pub-item">
          <p class="pub-title">{{ p.title }}</p>
          <p class="pub-meta">{{ p.authors }} · <span class="muted">{{ p.venue }}</span></p>
          {% if p.links %}
            <div class="pub-links">
              {% for l in p.links %}
                <a class="pill" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
{% endfor %}
