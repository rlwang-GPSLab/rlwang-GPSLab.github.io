---
layout: page
title: "Research"
permalink: /research/early-gpspnt-research/jpals/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>JPALS</h1>

  <p class="research-intro">
    The Joint Precision Approach and Landing System (JPALS) is a military,
    all-weather landing system based on real-time, dual-frequency (L1 and L2)
    local-area differential corrections for
    <a href="https://en.wikipedia.org/wiki/Global_Positioning_System" target="_blank" rel="noopener">GPS</a>
    signals, augmented with integrity information, and transmitted to the user via
    secure means. JPALS development started from the civilian LAAS/GBAS system (see
    above) and split into two separate systems. One of these is known as Local
    Differential GPS (LDGPS), which is used for airfields on land and includes a
    variant that can be set up quickly. The other is known as Shipboard Relative
    GPS (SRGPS), which is used for approaches and landings to ships. Unlike LDGPS,
    which is more similar to LAAS/GBAS, SRGPS applies a variant of carrier phase
    differential GPS (CDGPS) to obtain accuracies better than 10–20 cm relative to
    a moving point (or set of points) aboard a ship whose location is included in
    the information broadcast to airborne users.
  </p>

  <img src="{{ '/assets/img/research/jpals-carrier-landing.jpg' | relative_url }}"
       alt="JPALS aircraft carrier photo"
       class="research-content-image">

  <p>
    Stanford received funding support for JPALS research from the Navy. It
    investigated the differences between LAAS/GBAS and JPALS to determine what
    needed to be added to JPALS to meet similar integrity requirements under more
    difficult conditions, such as increased RF jamming, less time for reference
    receiver siting, and the motion of both the reference point and the reference
    receivers in the case of SRGPS. Algorithms developed for LAAS were modified and
    tested for SRGPS with these complications included. Progress was made in
    understanding the utility of antenna and sensor-augmentation technologies in
    counteracting RF jamming, and these results have been utilized in Stanford's
    ongoing research (see above).
  </p>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      View the
      <a href="https://en.wikipedia.org/wiki/Joint_Precision_Approach_and_Landing_System" target="_blank" rel="noopener">
        JPALS Wikipedia article
      </a>
    </li>
  </ul>
</div>
</div>
