---
layout: page
title: "Research"
permalink: /research/current-and-continuing-gpspnt-research/cyber-safety-transportation/anti-spoofing/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>Anti-Spoofing</h1>

  <p class="research-intro">
    A GPS spoofing attack attempts to "deceive" a GPS receiver by broadcasting
    counterfeit GPS signals, structured to resemble a set of normal GPS signals,
    or by rebroadcasting genuine signals captured elsewhere or at a different
    time. These spoofed signals may be modified in such a way as to cause the
    receiver to estimate its position to be somewhere other than where it
    actually is, or to be located where it is but at a different time, as
    determined by the attacker.
  </p>

  <img src="{{ '/assets/img/research/anti-spoofing-graphic.jpg' | relative_url }}"
       alt="Anti-spoofing graphic image"
       class="research-content-image">

  <p>
    Spoofing attacks have become increasingly common since 2023. One of the
    earliest suspected cases was the
    <a href="https://en.wikipedia.org/wiki/Iran-US_RQ-170_incident" target="_blank" rel="noopener">capture of a Lockheed RQ-170</a>
    drone aircraft in northeastern
    <a href="https://en.wikipedia.org/wiki/Iran" target="_blank" rel="noopener">Iran</a>
    in December 2011, that likely was the result of such an attack. Currently,
    multiple spoofing events are detected daily using
    <a href="https://rfi.stanford.edu" target="_blank" rel="noopener">ADS-B reports from aircraft</a>.
  </p>

  <p>
    For a number of years, Stanford has been performing research on how to make
    GPS and GPS receivers more robust against spoofing attacks. Current research
    includes the following techniques:
  </p>
  <ul class="research-link-list">
    <li>Using WAAS message authentication</li>
    <li>Time of arrival techniques</li>
    <li>Use of antenna to distinguish direction of arrival</li>
    <li>Using and comparing encrypted P(Y) code</li>
  </ul>

  <p>
    The FAA has supported Stanford's research in this area.
  </p>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      View Inside GNSS article (PDF):
      <a href="http://web.stanford.edu/group/scpnt/gpslab/website_files/anti-spoofing/insideGNSS_rasd-montgomery.pdf" target="_blank" rel="noopener">
        A Multi-Antenna Defense: Receiver-Autonomous GPS Spoofing Detection
      </a>, by Paul Montgomery (Novariant, Inc.), Todd Humphreys (University of
      Texas at Austin), and Brent Ledvina (Virginia Tech), March/April 2009.
    </li>
  </ul>
</div>
</div>
