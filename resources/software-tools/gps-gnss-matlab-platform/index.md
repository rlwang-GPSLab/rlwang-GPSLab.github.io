---
layout: page
title: Resources
permalink: /resources/software-tools/gps-gnss-matlab-platform/
---

<div class="resource-layout">
  {% include resource-sidebar.html %}

<div class="resource-content">
  <h1>Stanford GPS/GNSS Matlab Platform</h1>

  <p class="resource-intro">
    Stanford GPS/GNSS Matlab is an integrated research platform for utilizing
    numerous positioning databases. It is intended to function as a platform
    providing universal access to various formats of GPS/GNSS data such as NSTB,
    NMEA, and RINEX.
  </p>

  <p>
    Example databases include the NSTB stations that collect GPS information
    continuously at many sites and are web-available and open to the public.
  </p>

  <h2 class="resource-subheading">
    Downloading an SGMP Overview Presentation and the SGMP ZIP Archive
  </h2>

  <ul class="resource-link-list">
    <li>
      <a href="{{ '/assets/files/software/gps-gnss-matlab-platform/sgmp-overview.pptx' | relative_url }}">
        Download a Microsoft PowerPoint SGMP Overview presentation file
      </a>
      (.pptx file)
    </li>

    <li>
      <a href="{{ '/assets/files/software/gps-gnss-matlab-platform/intro_SGMP.pdf' | relative_url }}">
        Download a PDF version of the SGMP Overview presentation
      </a>
      (.pdf file)
    </li>

    <li>
      <a href="{{ '/assets/files/software/gps-gnss-matlab-platform/sgmp.zip' | relative_url }}">
        Download the SGMP ZIP Archive
      </a>
      (sgmp.zip)
    </li>

  </ul>

  <p>
    The <code>sgmp.zip</code> archive contains everything you will need to learn
    about and use SGMP.
  </p>

  <p>
    When you uncompress the archive, you will find an
    <code>SGMPrelease</code> folder containing several directories, including
    <code>document</code>. Within the <code>document</code> folder, there are
    helpful files, including <code>quickstart</code> and <code>userguide</code>.
  </p>

  <p class="resource-note">
    <strong>Note</strong>: This <code>sgmp.zip</code> archive is preliminary; improved versions
    may be forthcoming.
  </p>

  <h2 class="resource-subheading">Getting Started with SGMP</h2>

  <p>
    The best way to start is to use the quickstart guide or to follow the steps
    below:
  </p>

  <ol class="resource-numbered-list">
    <li>
      Double-click on the <strong>sgmp.zip</strong> file icon to uncompress the
      archive. An <code>SGMPRelease</code> folder will appear on your computer's
      hard drive in the same location as the ZIP archive file.
    </li>

    <li>
      Download data files.
      <ul class="resource-link-list">
        <li>
          In your web browser, navigate to
          <a href="ftp://ftp.nstb.tc.faa.gov/pub/NSTB_data/">
            ftp://ftp.nstb.tc.faa.gov/pub/NSTB_data/
          </a>
        </li>
        <li>Download and unzip NSTB files.</li>
        <li>
          Move the unzipped NSTB files to the <strong>ntsb folder</strong> nested inside the SGMPrelease folder at this location: <strong>/SGMPrelease/measurement interface/data/nstb/</strong>
        </li>
      </ul>
    </li>

    <li>
      Parse the data files.
      <ul class="resource-link-list">
        <li>Start Matlab and set paths for all directories in <code>SGMPrelease</code>.</li>
        <li>
          Inside the SGMP folder, go to the <strong>measurement interface</strong> subfolder at this location: <strong>/SGMPrelease/measurementinterface/</strong>
        </li>
        <li>
          Execute <strong> batchparseNSTB.m </strong>.
          (If a status bar pops up, it is working!)
        </li>
      </ul>
    </li>

    <li>
      Positioning with SGMP file.
      <ul class="resource-link-list">
        <li>
          Go to the simulator folder <strong>simulator folder</strong>, nested within the SGMPrelease folder at this location: <strong>/SGMPrelease/simulator/</strong>
        </li>
        <li>
          Execute <strong>batchPosfixSGMP.m</strong>.
          (If a position fix result pops up, it's all done!)
        </li>
      </ul>
    </li>

  </ol>
</div>
</div>
