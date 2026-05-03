---
title: Gallery
permalink: /gallery/
description: Gallery of classroom learning, mentoring, tests, and institute activities at Inspiritation Classes.
---

<section class="bg-white py-16 md:py-20 lg:py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><span class="text-sm font-extrabold uppercase tracking-widest text-primary">Gallery</span><h1 class="mt-4 max-w-4xl font-heading text-4xl font-extrabold text-primary md:text-5xl">Learning moments at Inspiritation Classes.</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-textGray">A preview of classroom sessions, mentoring, tests, and student activities.</p></div></section>
<section class="py-16 md:py-20 lg:py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{% for image in site.data.gallery %}<img class="aspect-[4/3] w-full rounded-2xl object-cover shadow-md transition hover:-translate-y-1 hover:shadow-xl" src="{{ image.src }}" alt="{{ image.alt }}" loading="lazy">{% endfor %}</div></section>
