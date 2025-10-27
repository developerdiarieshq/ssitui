<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Campus Placements 2025 Banner -->
      <div class="placement-banner mb-4">
        <div class="banner-content">
          <h5 class="banner-title">{{ campusPlacements2025.title }}</h5>
          <div class="marquee-container">
            <div class="marquee-content">
              <div class="company-list">
                <!-- First set of companies -->
                <template v-for="(company, index) in campusPlacements2025.companies" :key="`first-${index}`">
                  <span class="company-item">{{ company.name }}({{ company.students }})</span>
                  <span class="company-divider" v-if="index < campusPlacements2025.companies.length - 1">||</span>
                </template>
                <!-- Duplicate for seamless loop -->
                <span class="company-divider">||</span>
                <template v-for="(company, index) in campusPlacements2025.companies" :key="`second-${index}`">
                  <span class="company-item">{{ company.name }}({{ company.students }})</span>
                  <span class="company-divider" v-if="index < campusPlacements2025.companies.length - 1">||</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Placements Section -->
      <div class="text-center mb-5">
        <h3 class="section-title">Top Placements</h3>
        <div class="underscore"></div>
        <p class="text-muted mt-3">Connecting talent with top-tier organizations worldwide</p>
      </div>

      <!-- Top Placements Cards -->
      <div class="row g-3 mb-5 justify-content-center">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" v-for="placement in topPlacements" :key="placement.id">
          <div class="placement-card">
            <div class="placement-number">{{ placement.students }}</div>
            <div class="placement-label">Students</div>
            <div class="company-logo">
              <img :src="placement.logo" :alt="placement.company" class="logo-img">
            </div>
          </div>
        </div>
        
        <!-- View All Placements Button as last card -->
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
          <div class="placement-card view-all-card">
            <div class="view-all-content">
              <i class="fas fa-arrow-right fa-2x text-white mb-3"></i>
              <button class="btn btn-view-all" @click="navigateToPlacements">
                VIEW ALL PLACEMENTS
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Top Recruiters -->
      <div class="row mb-5">
        <div class="col-12">
          <h4 class="text-center fw-bold text-dark mb-4">Our Top Recruiters</h4>
          <div class="recruiters-grid">
            <div class="recruiter-item" v-for="recruiter in topRecruiters" :key="recruiter.name">
              <div class="recruiter-card">
                <img :src="recruiter.logo" :alt="recruiter.name" class="recruiter-logo">
                <h6 class="recruiter-name">{{ recruiter.name }}</h6>
                <p class="recruiter-info">{{ recruiter.info }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { placementService } from '@/data/placementService.js'

// Router setup
const router = useRouter()

// Reactive data
const topPlacements = ref([])
const topRecruiters = ref([])
const campusPlacements2025 = ref({})

// Navigation function
const navigateToPlacements = () => {
  router.push('/placements')
}

// Load data from shared service
onMounted(() => {
  // Get top placements data from shared service
  topPlacements.value = placementService.getTopPlacements()

  // Get top recruiters data from shared service
  topRecruiters.value = placementService.getTopRecruiters()

  // Get campus placements 2025 data from shared service
  campusPlacements2025.value = placementService.getCampusPlacements2025()
})

</script>

<style scoped>
/* Placement Banner */
.placement-banner {
  background: linear-gradient(135deg, #FF7701 0%, #e65f00 100%);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  box-shadow: 0 4px 16px rgba(255, 119, 1, 0.2);
}

.banner-title {
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

/* Marquee Container */
.marquee-container {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.marquee-content {
  display: flex;
  animation: scroll 30s linear infinite;
  width: fit-content;
}

.company-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.company-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.company-divider {
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
  flex-shrink: 0;
}

/* Marquee Animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause on hover */
.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}

/* Section Title */
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

/* Main Title */
.main-title {
  font-weight: 700;
  color: #FF7701;
  font-size: 2.5rem;
  margin-bottom: 0;
}

/* Placement Cards */
.placement-card {
  background: white;
  border-radius: 12px;
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.placement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.2);
  border-color: #FF7701;
}

.placement-number {
  font-size: 2.2rem;
  font-weight: 700;
  color: #FF7701;
  margin-bottom: 0.4rem;
  line-height: 1;
}

.placement-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.8rem;
}

.company-logo {
  margin-top: auto;
  padding-top: 0.5rem;
}

.logo-img {
  max-height: 35px;
  max-width: 100px;
  object-fit: contain;
}

/* View All Card */
.view-all-card {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FF7701 0%, #e65f00 100%);
  border: 1px solid #FF7701;
  color: white;
  height: 100%;
}

.view-all-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.4);
}

.view-all-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5rem;
}

/* View All Button */
.btn-view-all {
  background: white;
  color: #FF7701;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 180px;
  line-height: 1.2;
}

.btn-view-all:hover {
  background: rgba(255, 255, 255, 0.9);
  color: #e65f00;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

/* Theme Colors */
.text-orange {
  color: #FF7701;
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

/* Recruiters Grid */
.recruiters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.recruiter-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.recruiter-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
  border-color: #FF7701;
}

.recruiter-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.recruiter-name {
  font-weight: 600;
  color: #1a2238;
  margin-bottom: 0.5rem;
}

.recruiter-info {
  font-size: 0.85rem;
  color: #6c757d;
  margin-bottom: 0;
}


.bg-orange {
  background-color: #FF7701 !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .stat-number {
    font-size: 1.8rem;
  }
  
  .stat-icon i {
    font-size: 1.5rem !important;
  }
  
  .recruiters-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .recruiter-card {
    padding: 1rem;
  }
  
  .recruiter-logo {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 576px) {
  .stat-number {
    font-size: 1.5rem;
  }
  
  .stat-icon i {
    font-size: 1.2rem !important;
  }
  
  .recruiters-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  
  /* New Layout Responsive */
  .section-title {
    font-size: 1.8rem;
  }
  
  .placement-number {
    font-size: 1.8rem;
  }
  
  .placement-card {
    padding: 0.8rem;
  }
  
  .logo-img {
    max-height: 30px;
    max-width: 80px;
  }
  
  /* Marquee responsive */
  .marquee-content {
    animation-duration: 20s; /* Faster on mobile */
  }
  
  .company-item {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }
  
  /* View All Card Responsive */
  .btn-view-all {
    padding: 0.5rem 0.8rem;
    font-size: 0.75rem;
    max-width: 150px;
  }
  
  .view-all-content i {
    font-size: 1.5rem !important;
    margin-bottom: 0.5rem !important;
  }
  
  .view-all-content {
    padding: 0.3rem;
  }
}
</style>
