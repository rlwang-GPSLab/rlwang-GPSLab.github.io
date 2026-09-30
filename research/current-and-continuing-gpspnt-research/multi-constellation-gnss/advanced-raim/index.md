---
layout: page
title: "Research"
permalink: /research/current-and-continuing-gpspnt-research/multi-constellation-gnss/advanced-raim/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>Advanced RAIM</h1>

  <p class="research-intro">
    GPS with Receiver Autonomous Integrity Monitoring (RAIM) has been used for
    aircraft navigation since the mid-nineties. Today, RAIM guarantees horizontal
    error bounds of one nautical mile worldwide with high availability. With the
    deployment of new GNSS constellations and new signals, there is a strong
    interest to expand the role of RAIM in aircraft navigation.
  </p>

  <img src="{{ '/assets/img/research/araim-concept.jpg' | relative_url }}"
       alt="Advanced RAIM concept diagram"
       class="research-content-image">

  <p>
    Advanced Receiver Autonomous Integrity Monitoring (ARAIM) is a concept that
    extends RAIM to other constellations beyond GPS. ARAIM will enable the
    integration in the position solution of the newer GNSS core constellations
    that may have different properties (in particular, higher failure rates than
    GPS). This inclusion will provide better levels of horizontal-guidance
    performance than RAIM with GPS alone. In addition, when sufficient satellites
    have dual-frequency (L1-L5) signals, ARAIM could enable aviation safety-of-life
    operations, including approaches with vertical guidance.
  </p>

  <img src="{{ '/assets/img/research/araim-solution-separation-algorithm.jpg' | relative_url }}"
       alt="Advanced RAIM solution separation algorithm diagram"
       class="research-content-image">

  <p>
    Stanford's research in this area started in the 2000's, and has been
    instrumental in the development of both the airborne algorithm and the ground
    monitors for ARAIM. The FAA currently supports Stanford's on-going research in
    ARAIM.
  </p>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      View the
      <a href="https://en.wikipedia.org/wiki/Receiver_autonomous_integrity_monitoring" target="_blank" rel="noopener">
        RAIM/ARAIM Wikipedia article
      </a>
    </li>
    <li>
      View PDF presentation:
      <a href="http://web.stanford.edu/group/scpnt/jse_website/documents/Introduction_to_ARAIM.pdf" target="_blank" rel="noopener">
        Introduction to ARAIM
      </a>, by Juan Blanch, Stanford University, July 26, 2016.
    </li>
  </ul>
</div>
</div>
