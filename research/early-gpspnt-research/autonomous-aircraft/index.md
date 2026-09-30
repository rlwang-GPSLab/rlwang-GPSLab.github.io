---
layout: page
title: "Research"
permalink: /research/early-gpspnt-research/autonomous-aircraft/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>Autonomous Aircraft</h1>

  <p class="research-intro">
    Stanford demonstrated the first non-military GPS-guided autonomous aircraft
    (or UAV) circa 1996. Commercial, non-military GPS-guided UAVs (or drones) have
    become commonplace for use by commercial companies and/or hobbyists.
  </p>

  <p>
    In this research, the objective was to prove that GPS alone was sufficient to
    control an unmanned vehicle from takeoff to precision landing. To achieve
    control, the ability to sense position and orientation accurately and robustly
    was necessary.
  </p>

  <p>
    The gasoline-powered model aircraft shown below has a twelve-foot wingspan and
    was instrumented with 4 L1-only GPS antennas. One antenna was installed on
    each wing tip and one at the nose and tail.
  </p>

  <img src="{{ '/assets/img/research/autonomous-airplane-test-plane.jpg' | relative_url }}"
       alt="Autonomous Airplane test plane photo"
       class="research-content-image">

  <p>
    After resolving cycle ambiguities, L1 carrier phase difference measurements
    between a base station antenna (fixed on the ground) and the aircraft nose
    antenna were used to determine aircraft position relative to the ground antenna
    at 10 Hz update rate. Carrier phase differences among the aircraft-mounted
    antennas were used to determine the aircraft attitude at 10 Hz update rate.
  </p>

  <p>
    Based on the GPS measurements, the aircraft demonstrated the ability to
    repetitively take off, fly a predetermined trajectory and perform a precision
    landing.
  </p>

  <p>
    This research showed that GPS could be used to determine 6 degrees of freedom
    on a dynamic platform and could perform with sufficient robustness and update
    rate to control an air vehicle.
  </p>

  <p>
    Today, GNSS is ubiquitous for providing guidance to UAVs, but is not typically
    used in inner loop control.
  </p>

  <p>
    Stanford originally received funding for these projects from the U.S.
    Department of Transportation (DOT) and the Federal Aviation Administration
    (FAA).
  </p>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      View the
      <a href="https://en.wikipedia.org/wiki/Unmanned_aerial_vehicle" target="_blank" rel="noopener">
        Wikipedia article on Unmanned Aerial Vehicles
      </a>
      for more details.
    </li>
    <li>
      See also:
      <a href="/research/early-gpspnt-research/gps-airplane-navigation-takeoffs-and-landings">
        GPS for Airplane Navigation
      </a>
    </li>
  </ul>

  <h2 class="research-subheading">SCPNT Historical Video Clips circa 1994–1998</h2>

  <h3 class="research-subheading">The Development &amp; Testing of the Stanford Integrity Beacon Landing System</h3>
  <p>
    An 11-minute narrated video chronicling the evolution of Stanford's Integrity
    Beacon automated airplane landing system from GPS-based spacecraft attitude and
    control guidance technology developed for the Stanford/NASA landmark Gravity
    Probe B mission testing Albert Einstein's general theory of relativity, and its
    extension and augmentation by a team of Stanford graduate students into a
    combination satellite and ground-based pseudo-satellite (integrity beacon)
    system that could land a Boeing 737 aircraft autonomously in inclement
    (restricted visibility) weather.
  </p>
  <img src="{{ '/assets/img/research/ibls-1994-video-thumb.jpg' | relative_url }}"
       alt="1994 IBLS Play Video thumbnail button"
       class="research-content-image">
  <p class="research-caption">This video courtesy of Stanford University Archives</p>

  <h3 class="research-subheading">GPS/Integrity Beacon B-Roll Video Segments</h3>
  <p>
    Video segments showing all aspects of the GPS-related technologies used in
    automated airplane navigation, takeoffs and landings in 1994. This video
    features the team of graduate students from the Stanford University GPS Lab who
    pioneered and developed these technologies.
  </p>
  <img src="{{ '/assets/img/research/ibls-broll-video-thumb.jpg' | relative_url }}"
       alt="IBLS B-Roll Video Segments Play Video thumbnail button"
       class="research-content-image">
  <p class="research-caption">This video courtesy of Stanford University Archives</p>

  <h3 class="research-subheading">CNN and San Francisco Bay Area Television Stories</h3>
  <p>
    Stanford GPS Lab auto-landing tests of a United Airlines Boeing 737 aircraft by
    Clark Cohen and fellow graduate students.
  </p>
  <img src="{{ '/assets/img/research/boeing737-autolandings-video-thumb.jpg' | relative_url }}"
       alt="GPS Lab Boeing 737 Autolandings Play Video thumbnail button"
       class="research-content-image">
</div>
</div>
