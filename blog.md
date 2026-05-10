---
title: Blog
permalink: /blog/
description: Preparation tips and exam strategy blogs for NEET, JEE, Boards, and Foundation students.
---

<section class="bg-white py-16 md:py-20 lg:py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><span class="text-sm font-extrabold uppercase tracking-widest text-primary">Blog</span><h1 class="mt-4 max-w-4xl font-heading text-4xl font-extrabold text-primary md:text-5xl">Study guidance that students can apply.</h1><p class="mt-5 max-w-3xl text-lg leading-8 text-textGray">Simple, practical preparation advice for competitive exams and board success.</p></div></section>
<section class="py-16 md:py-20 lg:py-24"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{% for blog in site.data.blogs %}<article id="{{ blog.slug }}" class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition hover:-translate-y-1.5 hover:shadow-premium"><img class="aspect-video w-full object-cover" src="{{ blog.image }}" alt="{{ blog.title }}" loading="lazy" decoding="async"><div class="p-6"><span class="text-sm font-bold text-primary">{{ blog.date }}</span><h2 class="mt-3 font-heading text-xl font-bold text-primary">{{ blog.title }}</h2><p class="mt-3 text-sm leading-7 text-textGray">{{ blog.excerpt }}</p><p class="mt-3 text-sm leading-7 text-textGray">At Inspiration Classes, students are guided to convert preparation time into measurable progress through planning, revision, and regular test analysis.</p></div></article>{% endfor %}</div></section>
