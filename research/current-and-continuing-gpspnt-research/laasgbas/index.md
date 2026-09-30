---
layout: page
title: "Research"
permalink: /research/current-and-continuing-gpspnt-research/laasgbas/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>LAAS / GBAS</h1>

  <p class="research-intro">
    The Local Area Augmentation System (LAAS), now more commonly known as the
    Ground Based Augmentation System (GBAS), is an all-weather aircraft landing
    system based on real-time differential correction of the
    <a href="https://en.wikipedia.org/wiki/Global_Positioning_System" target="_blank" rel="noopener">GPS</a>
    signal. Local reference
    <a href="https://en.wikipedia.org/wiki/Receiver_(radio)" target="_blank" rel="noopener">receivers</a>
    located around the airport send measurements to a nearby processing unit,
    which use these measurements to formulate differential corrections for the
    GPS satellites being tracked by the reference receivers. Satellite and
    receiver measurements are monitored for potential faults, and measurements
    with detected faults are removed from the differential corrections. In
    addition, as with SBAS, standard deviations of the errors remaining after
    differential corrections are applied are included with the differential
    corrections.
  </p>

  <img src="{{ '/assets/img/research/laas-architecture.jpg' | relative_url }}"
       alt="LAAS/GBAS diagram"
       class="research-content-image">

  <p>
    GBAS transmits these differential corrections, error bounds, and other
    approach guidance information to nearby user aircraft via a VHF Data
    Broadcast (VDB) that uses the existing ILS Localizer frequency band
    (108 – 118 MHz). VHF and GPS receivers on
    <a href="https://en.wikipedia.org/wiki/Aircraft" target="_blank" rel="noopener">aircraft</a>
    use this information to correct errors in their GPS measurements, remove
    untrustworthy satellites, and compute protection levels that bound remaining
    user errors at the safety probabilities required while flying
    <a href="https://en.wikipedia.org/wiki/Precision_approach" target="_blank" rel="noopener">precision approaches</a>.
  </p>

  <img src="{{ '/assets/img/research/laas-schematic.jpg' | relative_url }}"
       alt="LAAS/GBAS Schematic Diagram"
       class="research-content-image">

  <p>
    Stanford's research in this area started in the early 1990's, when Stanford
    developed and demonstrated a unique approach to carrier-phase differential
    GPS and RAIM-based integrity. After many years of research, development, and
    testing, an operational system based upon carrier-smoothed pseudorange
    differential GPS with integrity provided by ground monitoring was developed
    and tested by the FAA (including Stanford and other researchers), Honeywell,
    and other companies.
  </p>

  <img src="{{ '/assets/img/research/laas-field-equipment.jpg' | relative_url }}"
       alt="LAAS/GBAS Equipment in the Field photo"
       class="research-content-image">

  <p>
    Currently, LAAS / GBAS has been certified for Category I precision approaches
    and has been fielded at airports in the U.S., Europe, Asia, and Australia
    (see <a href="http://flygls.net/" target="_blank" rel="noopener">http://flygls.net</a>).
    The focus of research and development is now on GBAS systems that can support
    Category II/III precision approaches and landings. The first of these systems
    is expected to be operational around 2020.
  </p>

  <p>
    For more information, see the
    <a href="https://en.wikipedia.org/wiki/Local_Area_Augmentation_System" target="_blank" rel="noopener">LAAS Wikipedia article</a>.
  </p>
</div>
</div>
