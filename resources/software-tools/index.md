---
layout: page
title: Resources
permalink: /resources/software-tools/
---

<div class="resource-layout">
  {% include resource-sidebar.html %}

  <div class="resource-content">
  <h1>Software Tools</h1>

  <p class="resource-intro">
    The pages in this section contain software and related tools used in GPS Lab research.
  </p>

  <div class="resource-software-list">

    <div class="resource-software-item">
      <h2 class="resource-subheading">MatLab Algorithm Availability Simulation Tool (MAAST)</h2>

      <p>
        MAAST is a publicly available, customizable MATLAB toolset for simulating
        WAAS confidence estimation algorithms and evaluating their effects on
        service availability.
      </p>

      <p>
        <a class="resource-download-link"

href="{{ '/resources/software-tools/maast/' | relative_url }}">
View MAAST page
</a>

</p>
</div>

    <div class="resource-software-item">
      <h2 class="resource-subheading">Stanford University GPS Laboratory Ephemeris Files (SUGL)</h2>

      <p>
        These files are in RINEX format and contain GPS navigation data that have
        been processed as described in <a href="https://web.stanford.edu/~liangh/" target="_blank" rel="noopener">
    Dr. Liang Heng's </a> thesis. They are derived
        from the IGS navigation data files which are then cross-compared to
        eliminate erroneous data. These files have not all been manually validated
        and may still contain some incorrect information.
      </p>

      <p>
        <a class="resource-download-link"

href="{{ '/resources/software-tools/sugl/' | relative_url }}">
View SUGL page
</a>

</p>
</div>

    <div class="resource-software-item">
      <h2 class="resource-subheading">Two-Step Gaussian Overbounding Algorithm</h2>

      <p>
        These MATLAB scripts implement the two-step Gaussian overbounding
        algorithm described in our <a href="https://web.stanford.edu/~liangh/" target="_blank" rel="noopener">
    2017 ION GNSS+ paper </a>. The scripts determine
        Gaussian overbounding distributions by combining CDF bounding and paired
        overbounding. This combination removes important limitations in the two
        main results used in overbounding. It is based on the determination of an
        intermediate overbounding distribution that is symmetric and unimodal,
        but not Gaussian.
      </p>

      <p>
        <a class="resource-download-link"

href="{{ '/resources/software-tools/gaussian-overbounding/' | relative_url }}">
View Gaussian Overbounding page
</a>

</p>
</div>

    <div class="resource-software-item">
      <h2 class="resource-subheading">Stanford GPS/GNSS MatLab Platform</h2>

      <p>
        This platform is an integrated research environment for utilizing
        numerous positioning databases. It provides a unified interface to
        multiple GPS/GNSS data formats, including NSTB, NMEA, and RINEX.
        Example databases include NSTB stations that continuously collect GPS
        information at numerous publicly accessible sites.
      </p>

      <p>
        <a class="resource-download-link"

href="{{ '/resources/software-tools/gps-gnss-matlab-platform/' | relative_url }}">
View GPS/GNSS MatLab page
</a>
</p>
</div>

  </div>
</div>
</div>
