---
layout: page
title: "Research"
permalink: /research/current-and-continuing-gpspnt-research/gnss-software-receiver/
---
<div class="research-layout">
  {% include research-sidebar.html %}
<div class="research-content">
  <h1>GNSS Software Receiver</h1>

  <p class="research-intro">
    A GNSS software receiver is an implementation that has been designed and built
    following the philosophy of software-defined radio. This is done using a
    reconfigurable computational platform such as a microprocessor, digital signal
    processing element, graphics processor, or field-programmable gate array. This
    is in contrast with a traditional GNSS receiver implementation, which leverages
    a hardwired application-specific integrated circuit (ASIC). The software
    receiver provides maximum flexibility and the ability to redesign the
    architecture quickly and efficiently, allowing candidate signal-processing
    algorithms to be designed and assessed.
  </p>

  <p>
    The software receiver is coupled with the radio front end and antenna. Various
    options have been used in this area of research—everything from custom discrete
    component implementations to commercial-off-the-shelf (COTS) devices such as
    the Ettus USRP family of devices.
  </p>

  <img src="{{ '/assets/img/research/gnss-software-receiver-diagram.jpg' | relative_url }}"
       alt="GNSS Software Receiver schematic diagram"
       class="research-content-image">
  <p class="research-caption">
    Block diagram of the software architecture for the CRPA implementation
  </p>

  <img src="{{ '/assets/img/research/gnss-software-receiver-chart.jpg' | relative_url }}"
       alt="GNSS Software Receiver functionality chart"
       class="research-content-image">

  <p>
    Stanford research in this area has enabled the testing and evaluation of new
    signals, specialized algorithms, tracking techniques, and so on. Specific
    research areas include:
  </p>
  <ul class="research-link-list">
    <li>Other GNSS signals plus GPS L2C, L5</li>
    <li>Controlled-Reception-Pattern Antenna (CRPA) arrays</li>
    <li>INS integration</li>
    <li>Loran indoor tracking, frequency &amp; timing</li>
  </ul>

  <h3 class="research-subheading">For More Information</h3>
  <ul class="research-link-list">
    <li>
      View the
      <a href="https://en.wikipedia.org/wiki/Software-defined_radio" target="_blank" rel="noopener">
        Software Receiver Wikipedia article
      </a>
    </li>
  </ul>
</div>
</div>
