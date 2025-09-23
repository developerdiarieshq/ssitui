<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Cafeteria Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Dining Excellence</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Cafeteria</h1>
            <p class="lead mb-3">Quality Food & Hygienic Environment</p>
            <p class="mb-0 text-white-50">
              Spacious canteen providing quality food with prompt service, catering to the needs 
              of all students and staff with North-Indian and South-Indian cuisine variety.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Cafeteria - Students enjoying meals"
              src="@/assets/campuslife/college-cultural-fest-and-events.jpg"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- STATS -->
    <section class="py-4">
      <div class="container">
        <div class="row g-3">
          <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
            <div class="stat-card text-center">
              <i :class="stat.icon"></i>
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <main class="content">
      <div class="container">
        <!-- About Cafeteria -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">About Cafeteria</h2>
          <p class="section-subtitle">Quality Food • Hygienic Environment • Prompt Service</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                Our Institute has a <strong>spacious canteen</strong> with hygienic environment which provides 
                quality food and prompts service and caters to needs of all the students and the staff.
              </p>
              <p>
                The canteen is open from <strong>6:30 a.m. to 7:00 p.m.</strong> There is a wide variety of 
                <strong>North-Indian and South-Indian cuisine</strong> and the students enjoy the pleasure of 
                eating during the breaks.
              </p>
              <p class="mb-0">
                <strong>R.O purified water</strong> for drinking is available ensuring safe and clean drinking water 
                for all students and staff members.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Operating Hours</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-clock text-primary me-2"></i>
                  <strong>6:30 AM - 7:00 PM</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-utensils text-success me-2"></i>
                  <strong>Daily Service</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-droplet text-info me-2"></i>
                  <strong>R.O Purified Water</strong>
                </div>
                <div>
                  <i class="fa-solid fa-users text-warning me-2"></i>
                  <strong>All Students & Staff</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Food Variety -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Food Variety & Cuisine</h2>
          <p class="section-subtitle">Diverse Menu • Fresh Ingredients • Affordable Prices</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">
                  <i class="fa-solid fa-pepper-hot text-danger me-2"></i>North Indian Cuisine
                </h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-check text-success me-2"></i>Roti, Naan, Paratha</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Dal, Rajma, Chole</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Vegetable Curries</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Rice & Biryani</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Snacks & Beverages</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">
                  <i class="fa-solid fa-bowl-food text-primary me-2"></i>South Indian Cuisine
                </h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-check text-success me-2"></i>Idli, Dosa, Vada</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Sambar & Chutney</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Rice & Sambar</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Upma & Pongal</li>
                  <li><i class="fa-solid fa-check text-success me-2"></i>Fresh Coconut Water</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Facilities & Features -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Facilities & Features</h2>
          <p class="section-subtitle">Modern Amenities • Clean Environment • Student-Friendly</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-shield-halved fa-2x text-success mb-3"></i>
                <h5 class="h6">Hygienic Environment</h5>
                <p class="small mb-0">Clean and sanitized dining area with regular maintenance</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-bolt fa-2x text-warning mb-3"></i>
                <h5 class="h6">Prompt Service</h5>
                <p class="small mb-0">Quick and efficient service to minimize waiting time</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-droplet fa-2x text-info mb-3"></i>
                <h5 class="h6">R.O Purified Water</h5>
                <p class="small mb-0">Clean and safe drinking water available throughout</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-utensils fa-2x text-danger mb-3"></i>
                <h5 class="h6">Quality Food</h5>
                <p class="small mb-0">Fresh ingredients and well-prepared meals daily</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Cafeteria</h2>
            <p class="section-subtitle">We're here to serve quality food with a smile</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> cafeteria@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Operating Hours:</strong> 6:30 AM - 7:00 PM
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Days:</strong> Monday - Saturday
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-users text-success me-2"></i>
                  <strong>Service:</strong> Students & Staff
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Cafeteria',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "12.5", label: "Operating Hours", icon: "fa-solid fa-clock fa-lg text-primary" },
        { value: "2", label: "Cuisine Types", icon: "fa-solid fa-utensils fa-lg text-success" },
        { value: "R.O", label: "Purified Water", icon: "fa-solid fa-droplet fa-lg text-info" },
        { value: "All", label: "Students & Staff", icon: "fa-solid fa-users fa-lg text-warning" },
      ],
    };
  },
};
</script>

<style scoped>
/* CSS VARIABLES */
:root {
  --orange: #FF7701;
  --ink: #0b3d91;
  --muted: #6c757d;
}

/* UTILITY CLASSES */
.container{ width:min(1180px,92%); margin-inline:auto; }
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem} .mt-2{margin-top:1.25rem}
.mb-2{margin-bottom:.75rem} .h5{font-size:1.1rem} .h6{font-size:1rem}
.text-muted{color:var(--muted)} .muted{color:var(--muted)}
.lead{font-size:1.2rem; color:#fff; font-weight:600}

/* PAGE BACKGROUND */
.page-bg { background: linear-gradient(180deg, #fff 0%, #eef3ff 100%); }

/* HERO */
.hero { background: var(--ink); color: #fff; padding: 2rem 0 1.5rem; }
.hero .text-white-50 { color: rgba(255, 255, 255, 0.9) !important; font-size: 1.1rem; }
.badge-pill { background: rgba(255,255,255,0.15); border-radius: 999px; padding: .25rem .75rem; }
.stat-card { background:#fff; border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); padding:1rem; color: #0b3d91; }
.stat-number { font-weight:800; color:#0b3d91; }

/* CONTENT */
.content{ padding:1rem 0 2.6rem }
.card-section{ margin:1.2rem 0 }
.elev-card { border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); background:#fff; }
.section-title { color:#0b3d91; font-weight:800; }
.contact-chip { border:1px dashed rgba(0,0,0,.1); border-radius:999px; padding:.35rem .75rem; }

/* Ensure all text is visible */
.elev-card {
  color: #000;
}

.elev-card h1,
.elev-card h2,
.elev-card h3,
.elev-card h4,
.elev-card h5,
.elev-card h6 {
  color: var(--ink);
}

.elev-card p,
.elev-card span,
.elev-card li,
.elev-card label,
.elev-card td,
.elev-card th {
  color: #000;
}

.elev-card .h4,
.elev-card .h6 {
  color: var(--ink) !important;
}

/* Contact section styling */
.contact-card .section-title,
.contact-card .section-subtitle {
  color: var(--ink) !important;
}

.contact-card .contact-chip {
  color: #000 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero { padding: 1.5rem 0 1rem; }
  .hero .display-5 { font-size: 2rem; }
  .content { padding: 0.5rem 0 2rem; }
  .elev-card { padding: 1.5rem !important; }
}
</style>
