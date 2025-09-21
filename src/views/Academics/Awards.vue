<template>
  <div class="awards-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">
          <i class="fa-solid fa-trophy"></i>
          <span>Awards & Recognition</span>
        </h1>
        <p class="subtitle">
          <i class="fa-solid fa-medal"></i>
          Celebrating Excellence and Achievement
        </p>
        <p class="intro">
          Recognizing outstanding achievements, academic excellence, and contributions
          to the field of engineering and technology.
        </p>
      </div>
    </header>

    <!-- CONSTRUCTION NOTICE -->
    <main class="container content">
      <section class="construction-card">
        <div class="construction-content">
          <div class="construction-icon">
            <i class="fa-solid fa-hammer"></i>
          </div>
          <h2 class="construction-title">Page Under Construction</h2>
          <p class="construction-message">
            We're working hard to bring you comprehensive information about our awards, 
            recognition programs, and achievements. This page will be available soon.
          </p>
          <div class="construction-features">
            <div class="feature-item">
              <i class="fa-solid fa-award"></i>
              <span>Student Awards</span>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-star"></i>
              <span>Faculty Recognition</span>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-trophy"></i>
              <span>Institutional Achievements</span>
            </div>
            <div class="feature-item">
              <i class="fa-solid fa-certificate"></i>
              <span>Accreditations</span>
            </div>
          </div>
          <div class="construction-timeline">
            <p class="timeline-text">
              <i class="fa-solid fa-clock"></i>
              Expected completion: <strong>Coming Soon</strong>
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

// Component state
const isLoading = ref(false);
</script>

<style scoped>
/* Theme */
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --navy: #1e40af;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

.awards-page {
  background: var(--bg);
  min-height: 100vh;
}

.container {
  width: min(1180px, 92%);
  margin: auto;
  padding: 0 1rem;
}

.content {
  padding: 2rem 0;
}

/* HERO */
.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 800;
  font-size: 2.2rem;
  margin: 0 0 0.3rem 0;
  color: white;
}

.title i {
  font-size: 2.1rem;
  color: var(--orange);
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.subtitle i {
  font-size: 1rem;
  color: var(--orange);
}

.intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
  color: white;
}

/* CONSTRUCTION CARD */
.construction-card {
  background: var(--white);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  text-align: center;
  transition: all 0.3s ease;
}

.construction-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
}

.construction-content {
  max-width: 600px;
  margin: 0 auto;
}

.construction-icon {
  margin-bottom: 2rem;
}

.construction-icon i {
  font-size: 4rem;
  color: var(--orange);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.construction-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1rem;
}

.construction-message {
  font-size: 1.1rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* FEATURES GRID */
.construction-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(255, 119, 1, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 16px rgba(255, 119, 1, 0.15);
}

.feature-item i {
  font-size: 2rem;
  color: var(--orange);
  margin-bottom: 0.5rem;
}

.feature-item span {
  font-weight: 600;
  color: var(--ink);
  font-size: 0.95rem;
}

/* TIMELINE */
.construction-timeline {
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 119, 1, 0.1);
  border-radius: 8px;
  border-left: 4px solid var(--orange);
}

.timeline-text {
  font-size: 1rem;
  color: var(--ink);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.timeline-text i {
  color: var(--orange);
}

.timeline-text strong {
  color: var(--orange);
  font-weight: 700;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
    flex-direction: column;
    gap: 0.3rem;
  }
  
  .construction-card {
    padding: 2rem 1rem;
    margin: 1rem 0;
  }
  
  .construction-icon i {
    font-size: 3rem;
  }
  
  .construction-title {
    font-size: 1.5rem;
  }
  
  .construction-features {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .feature-item {
    padding: 0.75rem;
  }
  
  .feature-item i {
    font-size: 1.5rem;
  }
  
  .feature-item span {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .construction-features {
    grid-template-columns: 1fr;
  }
  
  .timeline-text {
    flex-direction: column;
    gap: 0.25rem;
    text-align: center;
  }
}
</style>
