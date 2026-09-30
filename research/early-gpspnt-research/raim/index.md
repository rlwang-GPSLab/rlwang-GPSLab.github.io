---
layout: page
title: "Research"
permalink: /research/early-gpspnt-research/raim/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>RAIM</h1>

  <p class="research-intro">
    Receiver autonomous integrity monitoring (RAIM) is a technology developed to
    assess the integrity of GPS signals in a GPS receiver system. It is of special
    importance in safety-critical GPS applications, such as in aviation or marine
    navigation.
  </p>

  <img src="{{ '/assets/img/research/raim-pseudoranges-diagram.jpg' | relative_url }}"
       alt="Receiver Autonomous Integrity Monitoring (RAIM) functional diagram"
       class="research-content-image">

  <p>
    RAIM detects faults with redundant GPS pseudorange measurements. That is, when
    more satellites are available than needed to produce a position fix, the extra
    pseudoranges should all be consistent with the computed position. A pseudorange
    that differs significantly from the expected value (i.e., an
    <a href="https://en.wikipedia.org/wiki/Outlier" target="_blank" rel="noopener">outlier</a>)
    may indicate a fault of the associated satellite or another signal integrity
    problem (e.g., ionospheric dispersion).
  </p>

  <p>
    Stanford's research in this area started in the mid 1990's, funded by the FAA.
  </p>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      View the
      <a href="https://en.wikipedia.org/wiki/Receiver_autonomous_integrity_monitoring" target="_blank" rel="noopener">
        RAIM Wikipedia article
      </a>
    </li>
  </ul>
</div>
</div>
