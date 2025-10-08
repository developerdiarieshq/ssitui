<template>
  <div class="sports-page">
    <Header/>
    <NavBar/>
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">Sports & Games</h1>
          <p class="hero-subtitle">Building Champions Through Physical Excellence and Teamwork</p>
          <div class="hero-stats">
            <div class="stat-item">
              <i class="fa-solid fa-trophy"></i>
              <div class="stat-content">
                <h3>10+</h3>
                <p>Sports Activities</p>
              </div>
            </div>
            <div class="stat-item">
              <i class="fa-solid fa-medal"></i>
              <div class="stat-content">
                <h3>50+</h3>
                <p>Tournaments Won</p>
              </div>
            </div>
            <div class="stat-item">
              <i class="fa-solid fa-users"></i>
              <div class="stat-content">
                <h3>500+</h3>
                <p>Active Athletes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-5 bg-light">
    <div class="container">
      <!-- Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Sports &amp; Games</h3>
        <div class="underscore"></div>
      </div>

      <!-- Intro Content -->
      <div class="row mb-5">
        <div class="col-md-12">
          <p class="lead text-muted">
            Sports and Games are an integral part of any academic institution to develop the student to be a
            composite individual. In line with this, SSIT has established impressive sports and games facilities
            in the campus. Volleyball, Basketball, Cricket, Shuttle, and Ball Badminton, Table Tennis, Caroms,
            Tennis, Throw ball are the games which are in place, apart from all athletic facilities. Our college
            team has earned laurels for the college in standing high in the inter-college games conducted by JNTU.
          </p>
        </div>
      </div>

      <!-- Facilities -->
      <div class="row mb-5">
        <div class="col-md-12">
          <h4 class="fw-bold text-orange mb-3">Facilities</h4>
          <ul class="list-group mb-3">
            <li class="list-group-item">
              <strong>Playground:</strong> A large playground is available for conducting sports and games for Boys, Girls, and Staff.
            </li>
          </ul>
          <div class="row">
            <div class="col-md-4">
              <div class="facility-box p-3 shadow-sm rounded">
                <h6 class="fw-bold text-orange">Boys</h6>
                <p>Cricket, Volleyball, Basketball, Ball Badminton, Badminton, Table Tennis, Caroms, Chess</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="facility-box p-3 shadow-sm rounded">
                <h6 class="fw-bold text-orange">Girls</h6>
                <p>Volleyball, Ball Badminton, Throw Ball, Tennikoit, Badminton, Table Tennis, Caroms, Chess</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="facility-box p-3 shadow-sm rounded">
                <h6 class="fw-bold text-orange">Staff</h6>
                <p>Cricket and Table Tennis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery -->
      <div class="sports-gallery-marquee">
        <h3 class="section-title text-center mb-4">
          <i class="fa-solid fa-images me-2"></i>
          Sports Gallery
        </h3>
        <div class="underscore mb-5"></div>
        
        <div class="gallery-marquee-container">
          <div class="gallery-marquee-track">
            <!-- First set of images -->
            <div v-for="(sport, index) in sports" :key="`gallery-first-${index}`" class="gallery-marquee-item">
              <img :src="sport.img" :alt="sport.title" />
              <div class="gallery-overlay">
                <h5>{{ sport.title }}</h5>
              </div>
            </div>
            <!-- Duplicate set for seamless loop -->
            <div v-for="(sport, index) in sports" :key="`gallery-second-${index}`" class="gallery-marquee-item">
              <img :src="sport.img" :alt="sport.title" />
              <div class="gallery-overlay">
                <h5>{{ sport.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
const sports = [
  { 
    img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href,
    title: 'Cricket'
  },
  { 
    img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href,
    title: 'Football'
  },
  { 
    img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href,
    title: 'Volleyball'
  },
  { 
    img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href,
    title: 'Basketball'
  },
  { 
    img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href,
    title: 'Badminton'
  },
  { 
    img: new URL('@/assets/campuslife/modern-college-hostel-rooms.jpg', import.meta.url).href,
    title: 'Cafeteria'
  }
]
</script>

<style scoped>
.section-title {
  font-weight: 700;
  color: #FF7701;
}

.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 8px auto 30px auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}

.text-orange {
  color: #FF7701;
}

.facility-box {
  background: #fff;
  min-height: 120px;
}

/* Sports Gallery Marquee */
.sports-gallery-marquee {
  margin-top: 4rem;
  padding-top: 3rem;
}

.gallery-marquee-container {
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  position: relative;
  background: linear-gradient(135deg, rgba(255, 119, 1, 0.05), rgba(255, 119, 1, 0.02));
  border-radius: 12px;
  border: 2px solid rgba(255, 119, 1, 0.2);
}

.gallery-marquee-container::before,
.gallery-marquee-container::after {
  content: '';
  position: absolute;
  top: 0;
  width: 120px;
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.gallery-marquee-container::before {
  left: 0;
  background: linear-gradient(90deg, rgba(255, 119, 1, 0.05) 0%, transparent 100%);
}

.gallery-marquee-container::after {
  right: 0;
  background: linear-gradient(270deg, rgba(255, 119, 1, 0.05) 0%, transparent 100%);
}

.gallery-marquee-track {
  display: flex;
  gap: 2rem;
  animation: gallery-scroll 35s linear infinite;
  will-change: transform;
}

.gallery-marquee-track:hover {
  animation-play-state: paused;
}

@keyframes gallery-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.gallery-marquee-item {
  flex-shrink: 0;
  width: 350px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  transition: all 0.4s ease;
  cursor: pointer;
}

.gallery-marquee-item:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 15px 40px rgba(255, 119, 1, 0.3);
}

.gallery-marquee-item img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.gallery-marquee-item:hover img {
  transform: scale(1.12);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 34, 56, 0.92), rgba(255, 119, 1, 0.88));
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-marquee-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay h5 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 1rem;
  text-align: center;
}

/* Hero Section */
.hero {
  position: relative;
  background: linear-gradient(135deg, #1a2238 0%, #2a3441 100%);
  padding: 4rem 0;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 119, 1, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 119, 1, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/campuslife/college-campus-sports-activities.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.1;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: #fff;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 3rem;
  font-weight: 400;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.hero-stats .stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 119, 1, 0.3);
  transition: all 0.3s ease;
}

.hero-stats .stat-item:hover {
  background: rgba(255, 119, 1, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 119, 1, 0.3);
  border-color: #FF7701;
}

.hero-stats .stat-item i {
  font-size: 2.5rem;
  color: #FF7701;
}

.hero-stats .stat-content h3 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  color: #fff;
  line-height: 1;
}

.hero-stats .stat-content p {
  font-size: 0.9rem;
  margin: 0.25rem 0 0 0;
  color: rgba(255, 255, 255, 0.85);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 3rem 0;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .hero-stats {
    gap: 1rem;
  }
  
  .hero-stats .stat-item {
    padding: 1rem 1.5rem;
  }
  
  .hero-stats .stat-item i {
    font-size: 2rem;
  }
  
  .hero-stats .stat-content h3 {
    font-size: 1.5rem;
  }
  
  .hero-stats .stat-content p {
    font-size: 0.8rem;
  }
  
  /* Gallery Marquee Responsive */
  .sports-gallery-marquee {
    margin-top: 2rem;
    padding-top: 2rem;
  }
  
  .gallery-marquee-container {
    padding: 1rem 0;
  }
  
  .gallery-marquee-container::before,
  .gallery-marquee-container::after {
    width: 60px;
  }
  
  .gallery-marquee-track {
    gap: 1.5rem;
    animation: gallery-scroll 28s linear infinite;
  }
  
  .gallery-marquee-item {
    width: 280px;
  }
  
  .gallery-marquee-item img {
    height: 220px;
  }
  
  .gallery-overlay h5 {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
}
</style>
