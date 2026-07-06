---
layout: page
title: People
subtitle: ""
permalink: /people/
---

<div class="people-page-banner">
  <img
    src="{{ '/assets/img/lab/people_banner.jpg' | relative_url }}"
    alt="GPS Lab members">
</div>

<div class="people-layout">

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
        <a href="#admin-staff">Administrative Staff</a>
      </div>

      <div class="people-sidebar-group">
        <span>Students</span>
        <a href="#phd">PhD Students</a>
        <a href="#masters">Master's Students</a>
        <a href="#undergrad">Undergraduate Students</a>
      </div>

      <div class="people-sidebar-group">
        <span>Alumni</span>
        <a href="#phd-alumni">PhD Alumni</a>
        <a href="#engineer-alumni">Engineer's Degree Alumni</a>
        <a href="#masters-alumni">Master's Alumni</a>
        <a href="#undergrad-alumni">Undergraduate Alumni</a>
        <a href="#postdoc-alumni">Postdoctoral Alumni</a>
        <a href="#researcher-alumni">Researcher Alumni</a>
        <a href="#visiting-scholar-alumni">Visiting Scholar Alumni</a>
        <a href="#visiting-student-alumni">Visiting Student Alumni</a>
        <a href="#other-alumni">Other Alumni</a>
      </div>
    </nav>

  </aside>

  <div class="people-content">

    {% assign sections =
      "faculty|Faculty,
       emeritus|Emeritus Faculty,
       research-staff|Research Staff,
       postdoctoral|Postdoctoral Scholars,
       admin-staff|Administrative Staff,
       phd|PhD Students,
       masters|Master's Students,
       undergrad|Undergraduate Students" | split: "," %}

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

    {% assign phd_alumni = site.data.people | where: "subgroup", "phd-alumni" | sort: "name" %}
    {% assign masters_alumni = site.data.people | where: "subgroup", "masters-alumni" | sort: "name" %}
    {% assign undergrad_alumni = site.data.people | where: "subgroup", "undergrad-alumni" | sort: "name" %}
    {% assign postdoc_alumni = site.data.people | where: "subgroup", "postdoc-alumni" | sort: "name" %}
    {% assign engineer_alumni = site.data.people | where: "subgroup", "engineer-alumni" | sort: "name" %}
    {% assign researcher_alumni = site.data.people | where: "subgroup", "researcher-alumni" | sort: "name" %}
    {% assign visiting_scholar_alumni = site.data.people | where: "subgroup", "visiting-scholar-alumni" | sort: "name" %}
    {% assign visiting_student_alumni = site.data.people | where: "subgroup", "visiting-student-alumni" | sort: "name" %}
    {% assign other_alumni = site.data.people | where: "subgroup", "other-alumni" | sort: "name" %}

    {% if phd_alumni.size > 0 %}
    <section class="people-section" id="phd-alumni">
      <h2>PhD Alumni</h2>
      <ul class="alumni-list alumni-list-phd">
        {% for person in phd_alumni %}
        <li>
          {% if person.linkedin %}
          <a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>
          {% else %}
          {{ person.name }}
          {% endif %}
        </li>
        {% endfor %}
      </ul>
    </section>
    {% endif %}

    <div class="small-alumni-grid">

      {% if engineer_alumni.size > 0 %}
      <section class="people-section small-alumni-section" id="engineer-alumni">
        <h2>Engineer’s Degree</h2>
        <ul class="alumni-list alumni-list-small">
          {% for person in engineer_alumni %}
          <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
          {% endfor %}
        </ul>
      </section>
      {% endif %}

      {% if masters_alumni.size > 0 %}
      <section class="people-section small-alumni-section" id="masters-alumni">
        <h2>Master's</h2>
        <ul class="alumni-list alumni-list-small">
          {% for person in masters_alumni %}
          <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
          {% endfor %}
        </ul>
      </section>
      {% endif %}

      {% if undergrad_alumni.size > 0 %}
      <section class="people-section small-alumni-section" id="undergrad-alumni">
        <h2>Undergraduate</h2>
        <ul class="alumni-list alumni-list-small">
          {% for person in undergrad_alumni %}
          <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
          {% endfor %}
        </ul>
      </section>
      {% endif %}

      {% if postdoc_alumni.size > 0 %}
      <section class="people-section small-alumni-section" id="postdoc-alumni">
        <h2>Postdoctoral</h2>
        <ul class="alumni-list alumni-list-small">
          {% for person in postdoc_alumni %}
          <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
          {% endfor %}
        </ul>
      </section>
      {% endif %}

      {% if researcher_alumni.size > 0 %}

<section class="people-section small-alumni-section" id="researcher-alumni">
  <h2>Researchers</h2>
  <ul class="alumni-list alumni-list-small">
    {% for person in researcher_alumni %}
    <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% if visiting_scholar_alumni.size > 0 %}

<section class="people-section small-alumni-section" id="visiting-scholar-alumni">
  <h2>Visiting Scholars</h2>
  <ul class="alumni-list alumni-list-small">
    {% for person in visiting_scholar_alumni %}
    <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% if visiting_student_alumni.size > 0 %}

<section class="people-section small-alumni-section" id="visiting-student-alumni">
  <h2>Visiting Students</h2>
  <ul class="alumni-list alumni-list-small">
    {% for person in visiting_student_alumni %}
    <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% if other_alumni.size > 0 %}

<section class="people-section small-alumni-section" id="other-alumni">
  <h2>Other</h2>
  <ul class="alumni-list alumni-list-small">
    {% for person in other_alumni %}
    <li>{% if person.linkedin %}<a href="{{ person.linkedin }}" target="_blank" rel="noopener">{{ person.name }}</a>{% else %}{{ person.name }}{% endif %}</li>
    {% endfor %}
  </ul>
</section>
{% endif %}

    </div>

  </div>
</div>
