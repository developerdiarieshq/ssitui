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

    <!-- Vision & Mission Section -->
    <section class="vision-mission-section py-4">
      <div class="container">
        <div class="text-center mb-4">
          <h3 class="section-title">Vision & Mission</h3>
          <div class="underscore"></div>
          <p class="text-muted">Guiding principles that drive our educational excellence</p>
        </div>

        <div class="row g-3">
          <!-- Vision -->
          <div class="col-md-6">
            <div class="vm-card h-100 text-center p-3 shadow-sm">
              <div class="icon-box mb-2">
                <i class="fas fa-eye"></i>
              </div>
              <h5 class="fw-bold mb-2 text-orange">Vision</h5>
              <p class="text-muted small">
                To make the students achieve highest standards of quality technical education adaptable to suit the present day requirements in the fields of science and technology and to mould them morally into persons of character and integrity.
              </p>
            </div>
          </div>

          <!-- Mission -->
          <div class="col-md-6">
            <div class="vm-card h-100 text-center p-3 shadow-sm">
              <div class="icon-box mb-2">
                <i class="fas fa-rocket"></i>
              </div>
              <h5 class="fw-bold mb-2 text-orange">Mission</h5>
              <p class="text-muted small">
                To awaken the students to the reality of identifying their hidden potentials and talents through meticulous and systematic grooming to gain the spirit and inventiveness to build a career full of glorious prospects and eventful future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Strengths Section -->
    <section class="strengths-section py-4">
      <div class="container">
        <!-- Section Title -->
        <div class="text-center mb-4">
          <h3 class="section-title">Our Strengths</h3>
          <div class="underscore"></div>
          <p class="text-muted">Key pillars that define excellence at SSIT</p>
        </div>

        <!-- Strengths Cards -->
        <div class="row g-3">
          <!-- Infrastructure & Faculty -->
          <div class="col-md-4">
            <div class="strength-card h-100 text-center p-3 shadow-sm">
              <div class="icon-box mb-2">
                <i class="fas fa-network-wired"></i>
              </div>
              <h5 class="fw-bold mb-2">Infrastructure & Faculty</h5>
              <p class="text-muted small">
                Ultra Modern Labs with more than 430 Systems having multiple platforms like Linux, Windows and Ubuntu.
                24/7 Internet Facility with 300 MBPS through two different ISPs.
                Well Experienced and University Ratified Faculty.
              </p>
            </div>
          </div>

          <!-- Training & Placements -->
          <div class="col-md-4">
            <div class="strength-card h-100 text-center p-3 shadow-sm">
              <div class="icon-box mb-2">
                <i class="fas fa-briefcase"></i>
              </div>
              <h5 class="fw-bold mb-2">Training & Placements</h5>
              <p class="text-muted small">
                Conducting Industry relevant Training Programmes and providing Placements in various MNCs
                through On-Campus/Off-Campus.
              </p>
            </div>
          </div>

          <!-- Research & Development -->
          <div class="col-md-4">
            <div class="strength-card h-100 text-center p-3 shadow-sm">
              <div class="icon-box mb-2">
                <i class="fas fa-flask"></i>
              </div>
              <h5 class="fw-bold mb-2">Research & Development</h5>
              <p class="text-muted small">
                More than 50% Faculty Pursuing Ph.Ds from Reputed Universities and publishing their
                Research Papers in Various Good Impact Journals.
              </p>
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
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.7;
    transform: scaleX(1.1);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
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

/* Vision & Mission Section */
.vision-mission-section {
  background: var(--light-bg);
}

.vm-card {
  background: #fff;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.vm-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--orange);
}

.vm-card .icon-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 119, 1, 0.1);
  color: var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto;
  transition: 0.3s ease;
}

.vm-card:hover .icon-box {
  background: var(--orange);
  color: #fff;
}

/* Strengths Section */
.strengths-section {
  background: #f8f9fc;
}

.strength-card {
  background: #fff;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.strength-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--orange);
}

.strength-card .icon-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 119, 1, 0.1);
  color: var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto;
  transition: 0.3s ease;
}

.strength-card:hover .icon-box {
  background: var(--orange);
  color: #fff;
}
</style>
