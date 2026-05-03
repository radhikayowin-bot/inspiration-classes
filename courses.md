---
title: Courses
permalink: /courses/
description: Explore NEET, JEE, CET, Boards, and Foundation courses at Inspiritation Classes, Bareilly.
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow">Courses</span>
    <h1>Choose the right preparation track.</h1>
    <p class="lead">Our courses are planned for students who need concept clarity, regular practice, and exam-focused mentoring.</p>
  </div>
</section>

<section class="section-pad">
  <div class="container grid grid--3">
    {% for course in site.data.courses %}
      {% include course-card.html course=course %}
    {% endfor %}
  </div>
</section>

<section id="foundation" class="section-pad section-soft">
  <div class="container content-grid">
    <div class="info-card card-lift">
      <h2>Foundation Program</h2>
      <p>Foundation classes help students in middle and secondary school develop stronger Science and Mathematics basics before competitive exam pressure begins.</p>
    </div>
    <div class="info-card card-lift">
      <h2>Included Support</h2>
      <ul class="check-list">
        <li>Chapter-wise assignments</li>
        <li>Regular doubt sessions</li>
        <li>Monthly tests and feedback</li>
        <li>Parent performance updates</li>
      </ul>
    </div>
  </div>
</section>
