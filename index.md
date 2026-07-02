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

<!-- Lab introduction -->
<section class="section lab-intro">
  <div class="container">
    <h2 class="section-title">What We Do</h2>

    <p class="lab-intro-text">
      The GPS Research Lab works with the FAA, U.S. Air Force, NASA and the Department of Transportation to pioneer systems that augment the Global Positioning System (GPS) and the other Global Navigation Satellite Systems (GNSS). The laboratory is directed by Professor Todd Walter, Dr. Sherman Lo and Dr. Juan Blanch. It has about a dozen members including professional researchers, graduate students and supporting staff. These days, we focus on Satellite Based Augmentation Systems, Advanced Autonomous Integrity Monitoring (ARAIM), high precision GNSS for autonomous cars, and cyber security of navigation.
    </p>

  </div>
</section>

<!-- Lab links / centers / meetings -->
<section class="section lab-highlights">
  <div class="container">
    <div class="grid-3">

    <a class="card highlight-card" href="https://scpnt.stanford.edu/" target="_blank" rel="noopener">

      <img
        src="{{ '/assets/img/home/scpnt.jpg' | relative_url }}"
        alt="SCPNT">

      <div class="highlight-body">
        <h3>Stanford Center for Position, Navigation & Time (SCPNT)</h3>
        <p class="muted">
          The GPS Lab is closely affiliated with SCPNT. The SCPNT website provides both historical and current  information about GPS research at Stanford. Since 2007, SCPNT has been hosting an annual PNT Symposium, and the SCPNT website contains an archive of presentation files from all PNT synposia, plus a gallery of GPS/PNT photos and video.
        </p>
      </div>

    </a>

    <a class="card highlight-card" href="https://www.iitcarnations.org/" target="_blank" rel="noopener">

      <img
        src="{{ '/assets/img/home/carnations.jpg' | relative_url }}"
        alt="CARNATIONS">

      <div class="highlight-body">
        <h3>CARNATIONS</h3>
        <p class="muted">
          CARNATIONS pursues a three-pillar research strategy aimed at toughening, augmenting, and protecting PNT systems for multi-modal surface transportation.
        </p>
      </div>

    </a>

    <a class="card highlight-card" href="https://gps.stanford.edu/people/sherman-lo" target="_blank" rel="noopener">

      <img
        src="{{ '/assets/img/home/labmeeting.jpg' | relative_url }}"
        alt="GPS Seminar">

      <div class="highlight-body">
        <h3>Weekly Friday GPS/PNT Seminar</h3>
        <p class="muted">
          Fridays at 1 PM in Durand 450.
        </p>
      </div>

    </a>

  </div>

  </div>
</section>

<section class="section">
  <div class="section-header">
    <h2 class="section-title">Announcements</h2>
  </div>

  <div class="news-list">

    {% for a in site.data.announcements %}

    <article class="news-list-item announcement-item">

      <div>
        <div class="news-date">{{ a.date }}</div>

        <h3 class="pub-title">
          {{ a.title }}
        </h3>

        <p class="news-description">
          {{ a.description }}
        </p>

      </div>

    </article>

    {% endfor %}

  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">In the News</h2>
      <a class="section-link" href="{{ '/news/' | relative_url }}">
        View all news →
      </a>
    </div>

    {% assign news_items = site.news | sort: "date" | reverse | slice: 0, 3 %}

    <div class="card">
      {% for item in news_items %}
      <div class="pub-item">

        <p class="pub-title">
          <a href="{{ item.url | relative_url }}">
            {{ item.title }}
          </a>
        </p>

        <p class="pub-meta">
          {{ item.date | date: "%B %d, %Y" }}
        </p>

        {% if item.description %}
        <p class="muted">{{ item.description }}</p>
        {% endif %}

      </div>
      {% endfor %}
    </div>

  </div>
</section>

<!-- <section class="section">
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
</section> -->

<!-- <section class="section">
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
</section> -->

<!-- Large, true carousel (one image at a time, auto-advances) -->
<section class="section section-carousel" aria-label="Lab life photo carousel section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">Lab Life</h2>
      <span class="muted"> </span>
    </div>

    <div class="lab-carousel" data-carousel aria-label="Lab photo carousel">
      <div class="lab-carousel-viewport">
        <div class="lab-carousel-track">
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/01.jpg' | relative_url }}" alt="ion gnss+ 2025">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/02.jpg' | relative_url }}" alt="2024 ski trip">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/03.jpg' | relative_url }}" alt="2025 ski trip">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/04.jpg' | relative_url }}" alt="temp">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/05.jpg' | relative_url }}" alt="GNSS field test setup">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/06.jpg' | relative_url }}" alt="pacific pnt 2024">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/07.jpg' | relative_url }}" alt="2026 ski trip">
          </div>
          <div class="lab-carousel-slide">
            <img src="{{ '/assets/img/carousel/08.jpg' | relative_url }}" alt="dana retirement">
          </div>
        </div>
      </div>

      <button class="lab-carousel-btn prev" type="button" aria-label="Previous slide">‹</button>
      <button class="lab-carousel-btn next" type="button" aria-label="Next slide">›</button>

      <div class="lab-carousel-dots" aria-label="Slide navigation"></div>
    </div>

  </div>
</section>
