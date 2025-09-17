<template>
    <Header/>
    <NavBar/>
  <section class="principal-page">
    <!-- Hero Section -->
    <header class="hero">
      <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <!-- Left content -->
        <div class="hero-left">
          <h1 class="hero-title">Principal's Desk</h1>
          <p class="hero-subtitle">
            Leading with vision, commitment, and dedication to academic excellence and student success
          </p>
          <div class="mt-4">
            <button class="btn btn-orange me-2">
              <i class="fas fa-envelope me-2"></i> Contact Principal
            </button>
            <button class="btn btn-outline-light">
              <i class="fas fa-phone me-2"></i> Schedule Meeting
            </button>
          </div>
        </div>

        <!-- Right: Profile -->
        <div class="hero-right text-center mt-5 mt-md-0">
          <img
            src="@/assets/management/principal.jpg"
            alt="Principal"
            class="principal-photo mb-3"
          />
          <h4 class="text-white mb-1">Dr. V.S.R.Kumari</h4>
          <p class="text-light small mb-0">Principal</p>
          <p class="text-light small">Ph.D. Computer Science | 20+ Years Experience</p>
        </div>
      </div>
    </header>

    <!-- Message Section -->
    <section class="message-section">
      <div class="container">
        <div class="text-center mb-5">
          <h3 class="section-title">Message from the Principal</h3>
          <div class="underscore"></div>
          <p class="text-muted">Our commitment to nurturing excellence in technical education</p>
        </div>

        <div class="message-card shadow-sm">
          <div class="quote-wrap">
            <i class="fas fa-quote-left quote-icon"></i>
          </div>
          <div class="message-content">
            <p><strong>Dear Students, Faculty, and Stakeholders,</strong></p>

            <p>
              It gives me immense pleasure to welcome you to Sai Spurthi Institute of Technology, where we are committed to
              nurturing the next generation of engineers and technologists. Our institution stands as a beacon of academic
              excellence, innovation, and holistic development in the field of technical education.
            </p>

            <p>
              At SSIT, we believe that education is not just about imparting knowledge but about shaping character,
              fostering creativity, and developing critical thinking skills. Our dedicated faculty, state-of-the-art
              infrastructure, and industry-aligned curriculum ensure that our students are well-prepared to meet the
              challenges of the rapidly evolving technological landscape.
            </p>

            <p>
              We are committed to maintaining the highest standards of academic integrity, promoting research and
              innovation, and creating an environment that encourages intellectual curiosity and personal growth. Our
              strong industry partnerships and placement record speak to our commitment to student success and career
              development.
            </p>

            <p>
              I invite you to be part of our journey towards excellence and to contribute to building a better tomorrow
              through technology and innovation.
            </p>

            <div class="signature">
              <p class="fw-bold mb-0">Prof.Dr. V.S.R.Kumari</p>
              <p class="text-orange small">Principal, Sai Spurthi Institute of Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <Footer/>
</template>

<script setup>
// purely static component for now
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
</script>

<style scoped>
.principal-page {
  --orange: #FF7701;
  --ink: #1a2238;
  --light-bg: #f8f9fc;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #0d2a87, #1e3a8a);
  color: white;
  padding: 4rem 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.hero-title {
  font-weight: 800;
  font-size: 2.5rem;
}
.hero-subtitle {
  max-width: 550px;
  font-size: 1.1rem;
  line-height: 1.6;
}
.principal-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 6px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}
.btn-orange {
  background: var(--orange);
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.btn-orange:hover {
  background: #e65f00;
}

/* Message */
.message-section {
  background: var(--light-bg);
  padding: 4rem 0;
}
.section-title {
  font-weight: 700;
  color: var(--orange);
}
.underscore {
  width: 60px;
  height: 4px;
  background: var(--orange);
  margin: 10px auto 20px;
  border-radius: 2px;
}
.message-card {
  border-radius: 16px;
  background: #fff;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
}
.quote-wrap {
  position: absolute;
  top: 20px;
  left: 20px;
}
.quote-icon {
  font-size: 2rem;
  color: var(--orange);
}
.message-content {
  line-height: 1.7;
  color: var(--ink);
}
.message-content p {
  margin-bottom: 1rem;
}
.signature {
  margin-top: 1.5rem;
}
</style>
