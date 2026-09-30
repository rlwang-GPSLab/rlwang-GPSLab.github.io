---
layout: page
title: "Research"
permalink: /research/current-and-continuing-gpspnt-research/cyber-safety-transportation/jammer-acquisition-gps/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>JAGER</h1>

  <img src="{{ '/assets/img/research/jager-collage.jpg' | relative_url }}"
       alt="JAGER 6-image photo collage strip"
       class="research-content-image">

  <p class="research-intro">
    The current and expanding prevalence of GPS in the aviation industry has
    tremendously helped efficiency and safety, but it increases the potential
    risk posed by GPS jamming devices. In an effort to combat and mitigate these
    risks, we are developing JAGER (Jamming Acquisition for GPS Exploration and
    Reconnaissance), a specially equipped multi-rotor drone capable of
    autonomously localizing GPS jammers.
  </p>

  <p>
    Our approach to localization uses a UAV as a mobile sensor platform operating
    well above the noise- and multipath-rich environment near the ground to make
    bearing observations of the jamming signal at dynamically chosen positions in
    order to rapidly localize a GPS jammer.
  </p>

  <p>
    Three main systems allow JAGER to rapidly localize GPS jammers: a sensing and
    measurement system, a path planning system, and a navigation system. For
    sensing, JAGER uses a simple directional antenna and leverages the multi-rotor
    platform to determine bearing to the source of the jammer throughout its
    flight. These observations are then used in a closed-loop navigation
    controller to dynamically determine the next best measurement location to most
    quickly localize the jammer. Finally, in order to successfully navigate in a
    GPS-denied environment created by the jammer, JAGER is designed to use vision,
    low-cost inertials, and the many signals of opportunity present near an
    airport.
  </p>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      <a href="https://scpnt.sites.stanford.edu/sites/g/files/sbiybj9811/f/jager_overview.pdf" target="_blank" rel="noopener">
        View JAGER Overview Presentation (PDF)
      </a>
    </li>
  </ul>
</div>
</div>
