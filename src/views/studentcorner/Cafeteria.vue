<template>
  <div>
    <!-- Global Header & Navbar -->
    <Header />
    <NavBar />

    <!-- Cafeteria Page -->
    <section class="cafeteria-page">
      <!-- Hero Banner -->
      <header class="hero">
        <div class="overlay"></div>
        <div class="hero-content container text-center">
          <h1 class="display-4 fw-bold">SSIT Campus Cafeteria</h1>
          <p class="lead">Welcome Students, Faculty & Visitors – A Place to Relax, Refresh & Reconnect</p>
        </div>
      </header>

      <!-- About -->
      <section class="container py-5 about">
        <h2 class="section-title">About the Cafeteria</h2>
        <p>
          Established as the heart of the SSIT campus, our cafeteria provides affordable and hygienic food options
          in a welcoming environment. It's not just a place to eat, but a space to socialize and recharge.
        </p>
        <ul class="list-unstyled">
          <li><strong>Operating Hours:</strong> 8:00 AM – 8:00 PM (Mon–Sat)</li>
          <li><strong>Weekly Specials:</strong> South Indian thali, North Indian combo, Tandoori Night (Fridays)</li>
          <li><strong>Commitment:</strong> Hygiene, nutrition, and student comfort are our priorities.</li>
        </ul>
      </section>

      <!-- Cafeteria Gallery Marquee -->
      <div class="cafeteria-gallery-marquee">
        <h3 class="section-title text-center mb-4">
          <i class="fa-solid fa-utensils me-2"></i>
          Cafeteria Gallery
        </h3>
        <div class="underscore mb-5"></div>
        
        <div class="gallery-marquee-container">
          <div class="gallery-marquee-track">
            <!-- First set of images -->
            <div v-for="(item, index) in cafeteriaItems" :key="`gallery-first-${index}`" class="gallery-marquee-item">
              <img :src="item.img" :alt="item.title" />
              <div class="gallery-overlay">
                <h5>{{ item.title }}</h5>
              </div>
            </div>
            <!-- Duplicate set for seamless loop -->
            <div v-for="(item, index) in cafeteriaItems" :key="`gallery-second-${index}`" class="gallery-marquee-item">
              <img :src="item.img" :alt="item.title" />
              <div class="gallery-overlay">
                <h5>{{ item.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- (Other sections remain unchanged: Facilities, Menu, Gallery, Staff, Testimonials, etc.) -->

      <!-- Contact -->
      <footer class="contact-section py-5">
        <div class="container text-center">
          <h2 class="section-title">Contact & Feedback</h2>
          <p>Email: <a href="mailto:cafeteria@ssit.edu.in">cafeteria@ssit.edu.in</a></p>
          <p>Phone: +91-98765-43210</p>
          <a href="#" class="btn btn-outline-light mt-2">Feedback Form</a>
        </div>
      </footer>
    </section>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';

export default {
  name: "Cafeteria",
  components: { Header, NavBar, Footer }, // ✅ REGISTER COMPONENTS HERE
  data() {
    return {
      cafeteriaItems: [
        { 
          img: new URL('@/assets/campuslife/modern-college-hostel-rooms.jpg', import.meta.url).href,
          title: 'Dining Area'
        },
        { 
          img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href,
          title: 'Food Counter'
        },
        { 
          img: new URL('@/assets/campuslife/modern-college-hostel-rooms.jpg', import.meta.url).href,
          title: 'Special Events'
        },
        { 
          img: new URL('@/assets/campuslife/engineering-college-auditorium.jpg', import.meta.url).href,
          title: 'Group Seating'
        },
        { 
          img: new URL('@/assets/campuslife/students-in-college-library-studying.jpg', import.meta.url).href,
          title: 'Study Corner'
        },
        { 
          img: new URL('@/assets/campuslife/modern-college-hostel-rooms.jpg', import.meta.url).href,
          title: 'Refreshments'
        }
      ],
      facilities: [
        { label: "Seating Capacity", detail: "150+ seats in AC/Non-AC sections", icon: "fa-solid fa-chair fa-2x text-primary" },
        { label: "Ambience", detail: "Clean, bright, and comfortable space", icon: "fa-solid fa-wind fa-2x text-info" },
        { label: "WiFi Enabled", detail: "Free access for students and staff", icon: "fa-solid fa-wifi fa-2x text-success" },
        { label: "Payments", detail: "Cash, UPI, Smart Card accepted", icon: "fa-solid fa-credit-card fa-2x text-warning" },
      ],
      menuImages: [
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
        "https://images.unsplash.com/photo-1525755662778-989d0524087e",
        "https://images.unsplash.com/photo-1498579809087-ef1e558fd1da",
      ],
      gallery: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
        "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe",
      ],
      staff: [
        { name: "Mr. Ramesh", role: "Cafeteria Manager", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
        { name: "Mrs. Kavitha", role: "Chef", photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
        { name: "Support Staff", role: "Service & Hygiene", photo: "https://images.unsplash.com/photo-1593032457869-98aa0a351caa" },
      ],
      testimonials: [
        { name: "Anjani, CSE", quote: "The cafeteria is my go-to spot for fresh juices and healthy snacks." },
        { name: "Priya, ECE", quote: "Affordable meals and great ambience to hang out with friends." },
        { name: "Peasanna, MBA", quote: "Hygienic and student-friendly with diverse menu options." },
      ],
    };
  },
};
</script>

<style scoped>
/* Branding Colors */
:root {
  --brand-blue: #0b3d91;
  --brand-orange: #ff6f00;
  --brand-light: #f7f9fc;
}

/* Hero */
.hero {
  position: relative;
  background: linear-gradient(135deg, #1a2238 0%, #2a3441 100%);
  height: 60vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/assets/campuslife/modern-college-hostel-rooms.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  pointer-events: none;
}
.hero .overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(11, 61, 145, 0.65);
}
.hero-content { position: relative; z-index: 1; }

/* Sections */
.section-title {
  color: var(--brand-blue);
  font-weight: 700;
  margin-bottom: 1rem;
}

/* Facilities */
.facility-card i { font-size: 2rem; color: var(--brand-orange); }

/* Menu Carousel */
.menu-carousel {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}
.menu-img {
  height: 180px;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

/* Gallery */
.gallery-img { transition: transform 0.3s ease; }
.gallery-img:hover { transform: scale(1.05); }

/* Staff */
.staff-photo { object-fit: cover; height: 220px; }

/* Testimonials */
.testimonial-card {
  background: var(--brand-light);
  border-left: 5px solid var(--brand-orange);
  border-radius: 0.5rem;
}

/* Contact */
.contact-section {
  background: var(--brand-blue);
  color: #fff;
}
.contact-section a { color: #fff; text-decoration: underline; }

/* Cafeteria Gallery Marquee */
.cafeteria-gallery-marquee {
  margin-top: 4rem;
  padding-top: 3rem;
}

.underscore {
  width: 60px;
  height: 4px;
  background: var(--brand-orange);
  margin: 8px auto 30px auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}

.gallery-marquee-container {
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  position: relative;
  background: linear-gradient(135deg, rgba(255, 111, 0, 0.05), rgba(255, 111, 0, 0.02));
  border-radius: 12px;
  border: 2px solid rgba(255, 111, 0, 0.2);
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
  background: linear-gradient(90deg, rgba(255, 111, 0, 0.05) 0%, transparent 100%);
}

.gallery-marquee-container::after {
  right: 0;
  background: linear-gradient(270deg, rgba(255, 111, 0, 0.05) 0%, transparent 100%);
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
  box-shadow: 0 15px 40px rgba(255, 111, 0, 0.3);
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
  background: linear-gradient(135deg, rgba(11, 61, 145, 0.92), rgba(255, 111, 0, 0.88));
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

/* Responsive */
@media (max-width: 768px) {
  .hero { height: 40vh; }
  
  /* Gallery Marquee Responsive */
  .cafeteria-gallery-marquee {
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
