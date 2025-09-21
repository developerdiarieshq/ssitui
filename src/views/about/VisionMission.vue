<template>
  <Header/>
  <NavBar/>
  <section class="vision-mission-page">
    <!-- Hero Section -->
    <header class="hero text-center text-white">
      <div class="container">
        <h1 class="title">Vision & Mission</h1>
        <p class="subtitle">Guiding Principles That Shape Our Educational Excellence</p>
        <p class="context">
          Sai Spurthi Institute of Technology | 
          Established in 2001 by VIPASSANA Educational Society | 
          Affiliated to JNTU Hyderabad | AICTE Approved
        </p>
      </div>
    </header>

    <!-- Vision & Mission Section -->
    <div class="container py-5">
      <!-- Section Heading -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Foundation</h3>
        <div class="underscore"></div>
      </div>

      <!-- Cards -->
      <div class="row text-center">
        <!-- Vision -->
        <div class="col-md-6 mb-4">
          <div class="card-box shadow-sm p-5 h-100">
            <div class="icon-box mx-auto mb-4">
              <i class="fas fa-eye fa-2x text-white"></i>
            </div>
            <h4 class="fw-bold mb-3">Vision</h4>
            <p class="text-muted text-justify">
              To make the students achieve highest standards of quality technical
              education adaptable to suit the present day requirements in the
              fields of science and technology and to mould them morally into
              persons of character and integrity.
            </p>
          </div>
        </div>

        <!-- Mission -->
        <div class="col-md-6 mb-4">
          <div class="card-box shadow-sm p-5 h-100">
            <div class="icon-box mx-auto mb-4">
              <i class="fas fa-rocket fa-2x text-white"></i>
            </div>
            <h4 class="fw-bold mb-3">Mission</h4>
            <p class="text-muted text-justify">
              To awaken the students to the reality of identifying their hidden
              potentials and talents through meticulous and systematic grooming
              to gain the spirit and inventiveness to build a career full of
              glorious prospects and eventful future.
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
.vision-mission-page {
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

.text-justify {
  text-align: justify;
}
</style>
