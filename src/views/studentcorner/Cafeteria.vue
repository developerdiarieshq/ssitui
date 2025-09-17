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
          in a welcoming environment. It’s not just a place to eat, but a space to socialize and recharge.
        </p>
        <ul class="list-unstyled">
          <li><strong>Operating Hours:</strong> 8:00 AM – 8:00 PM (Mon–Sat)</li>
          <li><strong>Weekly Specials:</strong> South Indian thali, North Indian combo, Tandoori Night (Fridays)</li>
          <li><strong>Commitment:</strong> Hygiene, nutrition, and student comfort are our priorities.</li>
        </ul>
      </section>

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
  background: url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4")
    center/cover no-repeat;
  height: 60vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Responsive */
@media (max-width: 768px) {
  .hero { height: 40vh; }
}
</style>
