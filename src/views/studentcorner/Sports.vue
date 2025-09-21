<template>
  <div class="sports-page">
    <Header/>
    <NavBar/>
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
      <div class="row g-4">
        <div v-for="(sport, index) in sports" :key="index" class="col-md-4 col-sm-6">
          <div class="gallery-card">
            <img :src="sport.img" :alt="sport.title" class="img-fluid rounded shadow-sm" />
            <div class="overlay">
              <h5>{{ sport.title }}</h5>
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
  { img: '@/assets/sports/cricket.jpg', title: 'Cricket' },
  { img: '@/assets/sports/football.jpg', title: 'Football' },
  { img: '@/assets/sports/volleyball.jpg', title: 'Volleyball' },
  { img: '@/assets/sports/basketball.jpg', title: 'Basketball' },
  { img: '@/assets/sports/badminton.jpg', title: 'Badminton' },
  { img: '@/assets/sports/indoor.jpg', title: 'Indoor Games' }
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

/* Gallery */
.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;
}
.gallery-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.gallery-card:hover img {
  transform: scale(1.1);
}
.gallery-card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(26, 34, 56, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
}
.gallery-card:hover .overlay {
  opacity: 1;
}
</style>
