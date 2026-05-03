---
title: Gallery
permalink: /gallery/
description: Gallery of classroom learning, mentoring, tests, and institute activities at Inspiritation Classes.
---

<section class="page-hero"><div class="container"><span class="eyebrow">Gallery</span><h1>Learning moments at Inspiritation Classes.</h1><p class="lead">A preview of classroom sessions, mentoring, tests, and student activities.</p></div></section>
<section class="section-pad"><div class="container gallery-grid">{% for image in site.data.gallery %}<img src="{{ image.src }}" alt="{{ image.alt }}">{% endfor %}</div></section>
