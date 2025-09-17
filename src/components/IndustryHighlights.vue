<template>
  <section class="highlights-section py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-lg-7 mb-4 mb-lg-0">
          <h6 class="fw-bold text-orange">Sai Spurthi Institute of Technology</h6>
          <h2 class="fw-bold mb-3">Academic Excellence Empowered With Innovation</h2>
          <p class="text-muted">
            At SSIT, education goes beyond classrooms — blending strong academics with employability
            skills, research orientation, and extracurricular growth. Established in 2001 under the
            <strong>Vipassana Educational Trust</strong>, SSIT has consistently been a hub for innovation,
            leadership, and holistic student development.
          </p>
          <p class="text-muted">
            The institution is affiliated with <strong>JNTU Hyderabad</strong>, approved by
            <strong>AICTE, New Delhi</strong>, and proudly achieved
            <span class="fw-bold text-orange">Autonomous Status in 2025</span>. With this milestone,
            SSIT now designs its own curriculum, fostering industry readiness and global competencies.
          </p>
          <div class="d-flex gap-3 mt-4">
            <button class="btn btn-outline-dark px-4 fw-bold">9032956083</button>
            <button class="btn btn-orange px-4 fw-bold">ADMISSIONS</button>
          </div>
        </div>

        <!-- Right Content (Video Embed) -->
        <div class="col-lg-5">
          <div class="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/bUbphgqBZ6A"
              title="Sai Spurthi Institute of Technology"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.highlights-section {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
}
.text-orange {
  color: #FF7701;
}
.btn-orange {
  background: #FF7701;
  color: #fff;
  border-radius: 6px;
  transition: 0.3s;
}
.btn-orange:hover {
  background: #e65f00;
}
</style>
