<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Section Heading -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Achievements in Numbers</h3>
        <div class="underscore"></div>
        <p class="text-muted mt-3">Excellence in education, innovation, and student success</p>
      </div>

      <!-- Statistics Grid -->
      <div class="row g-4">
        <!-- Students -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-users fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.students }}</h3>
            <h6 class="stat-label text-muted fw-medium">Total Students</h6>
            <p class="stat-description text-muted small mt-1">
              Enrolled across all programs
            </p>
          </div>
        </div>

        <!-- Faculty -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-chalkboard-teacher fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.faculty }}</h3>
            <h6 class="stat-label text-muted fw-medium">Expert Faculty</h6>
            <p class="stat-description text-muted small mt-1">
              Highly qualified educators
            </p>
          </div>
        </div>

        <!-- Placements -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-briefcase fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.placements }}%</h3>
            <h6 class="stat-label text-muted fw-medium">Placement Rate</h6>
            <p class="stat-description text-muted small mt-1">
              Successfully placed graduates
            </p>
          </div>
        </div>

        <!-- Years of Excellence -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-award fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.years }}</h3>
            <h6 class="stat-label text-muted fw-medium">Years of Excellence</h6>
            <p class="stat-description text-muted small mt-1">
              Since establishment in 2001
            </p>
          </div>
        </div>

        <!-- Programs -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-graduation-cap fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.programs }}</h3>
            <h6 class="stat-label text-muted fw-medium">Academic Programs</h6>
            <p class="stat-description text-muted small mt-1">
              UG, PG & Diploma courses
            </p>
          </div>
        </div>

        <!-- Companies -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-building fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.companies }}</h3>
            <h6 class="stat-label text-muted fw-medium">Recruiting Companies</h6>
            <p class="stat-description text-muted small mt-1">
              Top-tier organizations
            </p>
          </div>
        </div>

        <!-- Labs -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-flask fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.labs }}</h3>
            <h6 class="stat-label text-muted fw-medium">Modern Laboratories</h6>
            <p class="stat-description text-muted small mt-1">
              State-of-the-art facilities
            </p>
          </div>
        </div>

        <!-- Alumni -->
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="stat-card text-center p-3 h-100">
            <div class="stat-icon mb-2">
              <i class="fas fa-user-graduate fa-2x text-orange"></i>
            </div>
            <h3 class="stat-number fw-bold text-dark mb-1">{{ animatedStats.alumni }}</h3>
            <h6 class="stat-label text-muted fw-medium">Successful Alumni</h6>
            <p class="stat-description text-muted small mt-1">
              Making their mark globally
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Statistics data
const stats = {
  students: 2500,
  faculty: 120,
  placements: 95,
  years: 24,
  programs: 10,
  companies: 150,
  labs: 25,
  alumni: 5000
}

// Animated statistics
const animatedStats = ref({
  students: 0,
  faculty: 0,
  placements: 0,
  years: 0,
  programs: 0,
  companies: 0,
  labs: 0,
  alumni: 0
})

// Animation function
const animateNumber = (target, key, duration = 2000) => {
  const start = 0
  const increment = target / (duration / 16) // 60fps
  let current = start
  
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      animatedStats.value[key] = target
      clearInterval(timer)
    } else {
      animatedStats.value[key] = Math.floor(current)
    }
  }, 16)
}

// Start animations when component mounts
onMounted(() => {
  setTimeout(() => {
    Object.keys(stats).forEach(key => {
      animateNumber(stats[key], key)
    })
  }, 500)
})
</script>

<style scoped>
.section-title {
  font-weight: 700;
  color: #FF7701;
  display: inline-block;
}

.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 8px auto 0 auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { 
    transform: scaleX(1); 
    opacity: 1; 
  }
  50% { 
    transform: scaleX(0.5); 
    opacity: 0.5; 
  }
}

.stat-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
  border-color: #FF7701;
}

.stat-icon {
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1);
}

.stat-number {
  font-size: 2rem;
  color: #1a2238;
  transition: color 0.3s ease;
}

.stat-card:hover .stat-number {
  color: #FF7701;
}

.stat-label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-description {
  font-size: 0.85rem;
  line-height: 1.4;
}

.text-orange {
  color: #FF7701;
}


/* Responsive Design */
@media (max-width: 768px) {
  .stat-number {
    font-size: 1.8rem;
  }
  
  .stat-icon i {
    font-size: 1.5rem !important;
  }
  
  
  .stat-card {
    padding: 1.5rem !important;
  }
}

@media (max-width: 576px) {
  .stat-number {
    font-size: 1.5rem;
  }
  
  .stat-icon i {
    font-size: 1.2rem !important;
  }
  
  
  .stat-card {
    padding: 1rem !important;
  }
}
</style>
