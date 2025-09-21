<template>
  <Header/>
  <NavBar/>
  <section class="quality-page">
    <!-- Hero Section -->
    <header class="hero text-center text-white">
      <div class="container">
        <h1 class="title">Quality Policy</h1>
        <p class="subtitle">Committed to Excellence in Technical Education</p>
        <p class="context">
          Sai Spurthi Institute of Technology | 
          Established in 2001 by VIPASSANA Educational Society | 
          Affiliated to JNTU Hyderabad | AICTE Approved
        </p>
      </div>
    </header>

    <!-- Quality Policy Section -->
    <div class="container py-5">
      <!-- Section Heading -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Quality Commitment</h3>
        <div class="underscore"></div>
      </div>

      <!-- Quality Policy Card -->
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card-box shadow-sm p-5 text-center">
            <div class="icon-box mx-auto mb-4">
              <i class="fas fa-check fa-2x text-white"></i>
            </div>
            <h4 class="fw-bold mb-4">Quality Policy</h4>
            <p class="text-muted text-justify lead">
              To provide an industry need education through high quality
              knowledge transfer with excellent skills at par with international
              standards to get good placements.
            </p>
          </div>
        </div>
      </div>

      <!-- Additional Quality Features -->
      <div class="row mt-5">
        <div class="col-md-4 mb-4">
          <div class="feature-card text-center p-4">
            <div class="feature-icon mb-3">
              <i class="fas fa-graduation-cap fa-2x text-orange"></i>
            </div>
            <h5 class="fw-bold mb-3">Academic Excellence</h5>
            <p class="text-muted">
              Comprehensive curriculum designed to meet industry standards and global requirements.
            </p>
          </div>
        </div>
        
        <div class="col-md-4 mb-4">
          <div class="feature-card text-center p-4">
            <div class="feature-icon mb-3">
              <i class="fas fa-users fa-2x text-orange"></i>
            </div>
            <h5 class="fw-bold mb-3">Expert Faculty</h5>
            <p class="text-muted">
              Highly qualified and experienced faculty members committed to student success.
            </p>
          </div>
        </div>
        
        <div class="col-md-4 mb-4">
          <div class="feature-card text-center p-4">
            <div class="feature-icon mb-3">
              <i class="fas fa-briefcase fa-2x text-orange"></i>
            </div>
            <h5 class="fw-bold mb-3">Industry Readiness</h5>
            <p class="text-muted">
              Practical training and industry exposure to ensure successful career placements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Header from '../../components/Header.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
</script>

<style scoped>
.quality-page {
  --orange: #FF7701;
  --ink: #1a2238;
  --muted: #6b7280;
}

/* HERO */
.hero {
  background: var(--ink);
  padding: 3rem 0;
}
.title {
  font-weight: 800;
  font-size: 2.2rem;
}
.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}
.context {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Section Title */
.section-title {
  font-weight: 700;
  color: var(--orange);
  display: inline-block;
}
.underscore {
  width: 60px;
  height: 4px;
  background: var(--orange);
  margin: 8px auto 0 auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}

/* Cards */
.card-box {
  background: #fff;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}
.card-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}

/* Circular icons */
.icon-box {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: var(--ink);
  border: 4px solid var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Feature Cards */
.feature-card {
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(255, 119, 1, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(255, 119, 1, 0.1);
  border-color: var(--orange);
}

.feature-icon {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background: rgba(255, 119, 1, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.text-justify {
  text-align: justify;
}

.text-orange {
  color: var(--orange);
}
</style>
