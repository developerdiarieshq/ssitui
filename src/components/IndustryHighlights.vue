<template>
  <section class="highlights-section py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-lg-7 mb-4 mb-lg-0">
          <h6 class="fw-bold text-orange">Sai Spurthi Institute of Technology</h6>
          <h2 class="fw-bold mb-3">Academic Excellence Empowered With Innovation</h2>
          <p class="text-muted fw-medium">
            At SSIT, education goes beyond classrooms — blending strong academics with employability
            skills, research orientation, and extracurricular growth. Established in 2001 under the
            <strong>Vipassana Educational Trust</strong>, SSIT has consistently been a hub for innovation,
            leadership, and holistic student development.
          </p>
          <p class="text-muted fw-medium">
            The institution is affiliated with <strong>JNTU Hyderabad</strong>, approved by
            <strong>AICTE, New Delhi</strong>, and proudly achieved
            <span class="fw-bold text-orange">Autonomous Status in 2025</span>. With this milestone,
            SSIT now designs its own curriculum, fostering industry readiness and global competencies.
          </p>
          <!-- Contact & Admissions Section -->
          <div class="text-center mt-3">
            <h4 class="fw-bold mb-3 text-dark">Ready to Start Your Journey?</h4>
            <p class="text-muted mb-4 fw-medium">
              Join SSIT and become part of our innovative learning community. 
              Get in touch with us today for admissions and career guidance.
            </p>
            
            <div class="d-flex gap-3 justify-content-center p-3 border rounded">
              <a href="tel:+919032956083" class="btn btn-orange px-4 fw-bold text-decoration-none">
                <i class="fas fa-phone me-2"></i>9032956083
              </a>
              <router-link to="/admissions" class="btn btn-outline-orange px-4 fw-bold text-decoration-none">
                <i class="fas fa-graduation-cap me-2"></i>ADMISSIONS
              </router-link>
            </div>
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
  background-image: url('@/assets/campus2.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}

.highlights-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  z-index: 0;
}

.highlights-section .container {
  position: relative;
  z-index: 1;
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

.btn-outline-orange {
  color: #FF7701;
  border: 2px solid #FF7701;
  background: transparent;
  border-radius: 6px;
  transition: 0.3s;
}

.btn-outline-orange:hover {
  background: #FF7701;
  color: #fff;
  border-color: #FF7701;
}

.border {
  border-color: #dee2e6 !important;
  border-width: 1px !important;
}

.border:hover {
  border-color: #FF7701 !important;
  transition: border-color 0.3s ease;
}

/* Responsive background adjustments */
@media (max-width: 768px) {
  .highlights-section::before {
    background: rgba(255, 255, 255, 0.9);
  }
}

@media (max-width: 576px) {
  .highlights-section::before {
    background: rgba(255, 255, 255, 0.95);
  }
}
</style>
