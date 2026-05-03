---
title: Announcements
permalink: /announcements/
description: Latest admissions, batches, tests, and scholarship announcements from Inspiritation Classes.
---

<section class="page-hero"><div class="container"><span class="eyebrow">Announcements</span><h1>Latest updates for students and parents.</h1><p class="lead">Track new batches, registration dates, tests, and scholarship opportunities.</p></div></section>
<section class="section-pad"><div class="container grid grid--4">{% for announcement in site.data.announcements %}<div id="{{ announcement.slug }}">{% include announcement-card.html announcement=announcement %}</div>{% endfor %}</div></section>
