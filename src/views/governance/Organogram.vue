<template>
  <div class="organogram-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Organogram Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Organizational Structure</h1>
          <p class="tagline">Complete institutional hierarchy and management structure</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Levels</span>
              <span class="qf-value">6</span>
            </li>
            <li>
              <span class="qf-label">Departments</span>
              <span class="qf-value">7</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/management/chairman.jpg"
            alt="Organizational Structure - Management Team"
            class="hero-img"
          />
        </picture>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content" id="content">
      <!-- ORGANIZATIONAL CHART -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-sitemap"></i> Organizational Chart</h2>
          <p class="lead">
            View our comprehensive organizational chart showing the complete institutional hierarchy.
          </p>
        </div>

        <!-- ORGANIZATIONAL CHART IMAGE -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-sitemap"></i> Organizational Structure</h3>
          <div class="org-chart-image">
            <img 
              src="@/assets/management/org.png" 
              alt="Organizational Structure Chart" 
              class="org-image"
            />
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'

export default {
  name: 'Organogram',
  components: {
    Header,
    NavBar,
    Footer
  },
  setup() {
    return {
      // Simple setup for future organizational chart implementation
    }
  }
}
</script>

<style scoped>
/* CSS Variables matching CSE.vue */
:root {
  --navy:#1e40af; --navy-2:#153a9c;
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* Hero Section */
.hero {
  position: relative;
  color: #fff;
  background: var(--ink);
  padding: 50px 0;
  overflow: hidden;
}

.hero .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.15), rgba(0,0,0,.2));
}

.hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 2rem;
  align-items: center;
  padding: 0;
}

.hero-copy .title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-copy .tagline {
  color: #dbeafe;
  margin: .5rem 0 1.25rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.quickfacts {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.quickfacts li {
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: .75rem;
  padding: .6rem .9rem;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.qf-label {
  display: block;
  font-size: .75rem;
  letter-spacing: .02em;
  opacity: .9;
  margin-bottom: 0.5rem;
}

.qf-value {
  font-size: 1.05rem;
  font-weight: 800;
}

.hero-art {
  text-align: center;
}

.hero-img {
  width: 100%;
  max-height: 300px;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
  object-fit: cover;
}

/* Content Sections */
.content {
  padding: 1.8rem 0 2.6rem;
}

.card-section {
  margin: 1.2rem 0;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.card:last-child {
  margin-bottom: 0;
}

.section-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.section-title i {
  color: var(--orange);
}

.section-title-sm {
  font-weight: 700;
  color: var(--ink);
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.section-title-sm i {
  color: var(--orange);
  font-size: 1rem;
}

.lead {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* ORGANIZATIONAL CHART IMAGE */
.org-chart-image {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  margin: 1rem 0;
}

.org-image {
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.org-image:hover {
  transform: scale(1.02);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .org-chart-image {
    padding: 1rem;
  }
  
  .org-image {
    max-width: 100%;
  }
}

.management-level {
  margin-bottom: 1rem;
}

.management-level .org-card {
  min-width: 220px;
  max-width: 280px;
}

.principal-level {
  margin-bottom: 1rem;
}

.principal-level .org-card {
  min-width: 250px;
  max-width: 300px;
}

.departments-level {
  margin-bottom: 1rem;
}

.departments-level .org-card {
  min-width: 180px;
  max-width: 220px;
}

.staff-level {
  margin-bottom: 1rem;
}

.staff-level .org-card {
  min-width: 160px;
  max-width: 200px;
}

.staff-level .avatar {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
}

.staff-level .card-title {
  font-size: 0.9rem;
}

.staff-level .card-subtitle {
  font-size: 0.8rem;
}

/* CONNECTION LINES */
.org-level::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 1rem;
  background: #e1e5e9;
  z-index: 1;
}

.top-level::before {
  display: none;
}

/* HORIZONTAL CONNECTORS FOR MULTIPLE CARDS */
.management-level::after,
.departments-level::after,
.staff-level::after {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background: #e1e5e9;
  z-index: 1;
}

/* VERTICAL CONNECTORS FROM HORIZONTAL LINE TO CARDS */
.management-level .org-card::before,
.departments-level .org-card::before,
.staff-level .org-card::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 1rem;
  background: #e1e5e9;
  z-index: 1;
}

/* INSTRUCTIONS */
.instructions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.instruction-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.instruction-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  border-color: var(--orange);
}

.instruction-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--orange);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
}

.instruction-content {
  flex: 1;
}

.instruction-content h4 {
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.instruction-content p {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

/* RESPONSIVE DESIGN */
@media (max-width: 992px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-art {
    order: -1;
  }
  .quickfacts {
    justify-content: center;
  }
  
  .org-level {
    gap: 1.5rem;
  }
  
  .org-card {
    min-width: 180px;
    max-width: 220px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 30px 0;
  }
  .hero-copy .title {
    font-size: 1.8rem;
  }
  .hero-copy .tagline {
    font-size: 1rem;
  }
  
  .teams-org-chart {
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .org-level {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .org-card {
    min-width: 160px;
    max-width: 200px;
    padding: 1rem;
  }
  
  .top-level .org-card {
    min-width: 250px;
    max-width: 300px;
  }
  
  .management-level .org-card {
    min-width: 200px;
    max-width: 250px;
  }
  
  .principal-level .org-card {
    min-width: 220px;
    max-width: 280px;
  }
  
  .departments-level .org-card {
    min-width: 160px;
    max-width: 200px;
  }
  
  .staff-level .org-card {
    min-width: 140px;
    max-width: 180px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .top-level .avatar {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .card-title {
    font-size: 0.9rem;
  }
  
  .top-level .card-title {
    font-size: 1.1rem;
  }
  
  .card-subtitle {
    font-size: 0.8rem;
  }
  
  .instructions {
    grid-template-columns: 1fr;
  }
  .instruction-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>