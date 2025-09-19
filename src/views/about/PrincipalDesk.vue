<template>
    <Header/>
    <NavBar/>
  <section class="principal-page">
    <!-- Hero Section -->
    <header class="hero">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left content -->
          <div class="col-md-6">
            <h1 class="hero-title">Principal's Desk</h1>
            <p class="hero-subtitle">
              Leading with vision, commitment, and dedication to academic excellence and student success
            </p>
            <div class="hero-buttons">
              <button class="btn btn-orange me-2">
                <i class="fas fa-envelope me-2"></i> Contact Principal
              </button>
              <button class="btn btn-outline-light">
                <i class="fas fa-phone me-2"></i> Schedule Meeting
              </button>
            </div>
          </div>

          <!-- Right: Profile -->
          <div class="col-md-6 text-center">
            <img
              src="@/assets/management/principal.jpg"
              alt="Principal"
              class="principal-photo"
            />
            <h4 class="principal-name">Dr. V.S.R.Kumari</h4>
            <p class="principal-title">Principal</p>
            <p class="principal-details">Ph.D. Computer Science | 20+ Years Experience</p>
          </div>
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
  background: linear-gradient(135deg, #1a2238, #1a2238);
  color: white;
  padding: 2rem 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.hero-title {
  font-weight: 800;
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  opacity: 0.95;
}
.hero-buttons {
  margin-top: 1rem;
}
.principal-photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  object-fit: cover;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}
.principal-name {
  color: white;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.principal-title {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.principal-details {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin-bottom: 0;
}
.btn-orange {
  background: white;
  color: #FF7701;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: none;
  padding: 0.5rem 1rem;
}
.btn-orange:hover {
  background: rgba(255, 255, 255, 0.9);
  color: #FF7701;
  transform: translateY(-2px);
}
.btn-outline-light {
  border: 2px solid white;
  color: white;
  background: transparent;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
}
.btn-outline-light:hover {
  background: white;
  color: #FF7701;
  transform: translateY(-2px);
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
