---
title: Home
layout: default
---

<!-- Full-width banner right under the navbar -->
<section class="home-banner-full" aria-label="Lab banner">
  <img
    src="{{ '/assets/img/lab/home_banner.jpg' | relative_url }}"
    alt="GPS Lab banner image">
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Research Areas</h2>
      <a class="section-link" href="{{ '/projects/' | relative_url }}">View all projects →</a>
    </div>

    <div class="grid-3">
      <div class="card">
        <h3>Space Safety</h3>
        <p class="muted">Risk-aware autonomy, conjunction assessment, maneuver intent.</p>
      </div>
      <div class="card">
        <h3>Navigation &amp; Estimation</h3>
        <p class="muted">GNSS integrity, sensor fusion, robust state estimation.</p>
      </div>
      <div class="card">
        <h3>Autonomy</h3>
        <p class="muted">Planning and control under uncertainty for real-world systems.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Featured Publications</h2>
      <a class="section-link" href="{{ '/publications/' | relative_url }}">See all publications →</a>
    </div>

    {% assign pubs = site.data.publications | sort: 'year' | reverse | slice: 0, 3 %}
    <div class="card">
      {% for p in pubs %}
        <div class="pub-item">
          <p class="pub-title">{{ p.title }}</p>
          <p class="pub-meta">{{ p.authors }} · <span class="muted">{{ p.venue }}</span> · {{ p.year }}</p>
          {% if p.links %}
            <div class="pub-links">
              {% for l in p.links %}
                <a class="pill" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.label }}</a>
              {% endfor %}
            </div>
          {% endif %}
        </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Large, true carousel (one image at a time, auto-advances) -->
<section class="section section-carousel" aria-label="Lab life photo carousel section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Lab Life</h2>
      <span class="muted">Field tests, conferences, and moments in the lab.</span>
    </div>

    <div class="lab-carousel" data-carousel aria-label="Lab photo carousel">
      <div class="lab-carousel-viewport">
        <div class="lab-carousel-track">
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/01.jpg' | relative_url }}" alt="GNSS field test setup">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/02.jpg' | relative_url }}" alt="Team photo at a conference">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/03.jpg' | relative_url }}" alt="Lab meeting session">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/04.jpg' | relative_url }}" alt="Antenna hardware closeup">
          </div>
        </div>
      </div>

      <button class="lab-carousel-btn prev" type="button" aria-label="Previous slide">‹</button>
      <button class="lab-carousel-btn next" type="button" aria-label="Next slide">›</button>

      <div class="lab-carousel-dots" aria-label="Slide navigation"></div>
    </div>
  </div>
</section>

