---
title: Announcements
permalink: /announcements/
description: Latest admissions, batches, tests, and scholarship announcements from Inspiritation Classes.
---

<section class="bg-white py-16 md:py-20 lg:py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><span class="text-sm font-extrabold uppercase tracking-widest text-brand-orange">Announcements</span><h1 class="mt-4 max-w-4xl font-heading text-4xl font-extrabold text-brand-dark md:text-5xl">Latest updates for students and parents.</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-brand-muted">Track new batches, registration dates, tests, and scholarship opportunities.</p></div></section>
<section class="py-16 md:py-20 lg:py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{% for announcement in site.data.announcements %}<div id="{{ announcement.slug }}">{% include announcement-card.html announcement=announcement %}</div>{% endfor %}</div></section>
