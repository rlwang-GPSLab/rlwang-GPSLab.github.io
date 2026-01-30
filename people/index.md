---
layout: page
title: People
subtitle: "Faculty, students, and collaborators"
---

{% assign people = site.data.people %}

<h2>Team</h2>
<div class="people-grid">
  {% for p in people %}
    <div class="person">
      {% if p.headshot %}
        <img src="{{ p.headshot | relative_url }}" alt="{{ p.name }} headshot">
      {% endif %}
      <div class="person-body">
        <p class="person-name">{{ p.name }}</p>
        <p class="person-role">{{ p.role }}{% if p.affiliation %} · {{ p.affiliation }}{% endif %}</p>
        {% if p.interests %}
          <p class="muted" style="margin:0 0 10px;">{{ p.interests }}</p>
        {% endif %}
        <div class="person-links">
          {% if p.email %}<a href="mailto:{{ p.email }}">Email</a>{% endif %}
          {% if p.website %}<a href="{{ p.website }}" target="_blank" rel="noopener">Website</a>{% endif %}
          {% if p.scholar %}<a href="{{ p.scholar }}" target="_blank" rel="noopener">Scholar</a>{% endif %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>
