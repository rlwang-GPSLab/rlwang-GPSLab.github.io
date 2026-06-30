---
layout: page
title: People
subtitle: ""
permalink: /people/
---

<!-- People page banner -->
<div class="people-page-banner">
  <img
    src="{{ '/assets/img/lab/people_banner.jpg' | relative_url }}"
    alt="GPS Lab members">
</div>

<div class="people-layout">

  <!-- Sidebar navigation -->
  <aside class="people-sidebar" aria-label="People page navigation">
    <nav>
      <div class="people-sidebar-group">
        <span>Faculty</span>
        <a href="#faculty">Faculty</a>
        <a href="#emeritus">Emeritus</a>
      </div>

      <div class="people-sidebar-group">
        <span>Staff</span>
        <a href="#research-staff">Research Staff</a>
        <a href="#postdoctoral">Postdoctoral Scholars</a>
        <a href="#admin-staff">Administrative</a>
      </div>

      <div class="people-sidebar-group">
        <span>Students</span>
        <a href="#phd">PhD Students</a>
        <a href="#masters">Master's Students</a>
        <a href="#undergrad">Undergraduate Students</a>
      </div>

      <a href="#alumni">Alumni</a>
    </nav>

  </aside>

  <!-- Main people content -->
  <div class="people-content">

    {% assign sections =
      "faculty|Faculty,
       emeritus|Emeritus Faculty,
       research-staff|Research Staff,
       postdoctoral|Postdoctoral Scholars,
       admin-staff|Administrative,
       phd|PhD Students,
       masters|Master's Students,
       undergrad|Undergraduate Students,
       alumni|Alumni" | split: "," %}

    {% for section in sections %}
      {% assign parts = section | strip | split: "|" %}
      {% assign key = parts[0] %}
      {% assign label = parts[1] %}
      {% assign people = site.data.people | where: "subgroup", key %}

      {% if people.size > 0 %}

<section class="people-section" id="{{ key }}">
  <h2>{{ label }}</h2>

  <div class="people-grid">

    {% for person in people %}
    <div class="person-list-card">

      <div class="person-photo">
        <img src="{{ person.headshot | relative_url }}" alt="{{ person.name }}">
      </div>

      <div class="person-info">

        <h3>{{ person.name }}</h3>

        {% if person.role %}
        <p class="person-role">{{ person.role }}</p>
        {% endif %}

        {% if person.affiliation %}
        <p><b>Affiliation:</b> {{ person.affiliation }}</p>
        {% endif %}

        {% if person.education %}
        <div class="person-education">
          <b>Education:</b>
          <ul>
            {% for degree in person.education %}
            <li>{{ degree }}</li>
            {% endfor %}
          </ul>
        </div>
        {% endif %}

        {% if person.interests %}
        <p><b>Research Interests:</b> {{ person.interests }}</p>
        {% endif %}

        <div class="person-links">
          {% if person.email %}
          <a href="mailto:{{ person.email }}">Email</a>
          {% endif %}
          {% if person.website %}
          <a href="{{ person.website }}" target="_blank" rel="noopener">Website</a>
          {% endif %}
          {% if person.scholar %}
          <a href="{{ person.scholar }}" target="_blank" rel="noopener">Google Scholar</a>
          {% endif %}
          {% if person.linkedin %}
          <a href="{{ person.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>
          {% endif %}
        </div>

      </div>

    </div>
    {% endfor %}

  </div>
</section>
{% endif %}
    {% endfor %}

  </div>
</div>
