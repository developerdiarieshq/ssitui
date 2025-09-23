<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="ICT Facilities Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • ICT Infrastructure</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">ICT Facilities</h1>
            <p class="lead mb-3">Information & Communication Technology</p>
            <p class="mb-0 text-white-50">
              Comprehensive ICT infrastructure supporting modern education, 
              research, and administrative operations across the campus.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT ICT Facilities - Technology infrastructure"
              src="@/assets/campuslife/engineering-students-lab.png"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- UNDER CONSTRUCTION MESSAGE -->
    <main class="content">
      <div class="container">
        <div class="elev-card p-4 p-md-5 mb-4">
          <div class="text-center">
            <!-- Construction Icon -->
            <div class="construction-icon mb-4">
              <i class="fa-solid fa-hammer fa-4x text-warning"></i>
            </div>
            
            <!-- Main Message -->
            <h2 class="section-title h3 mb-3">Page Under Construction</h2>
            <p class="lead mb-4">
              We're working hard to bring you comprehensive information about our ICT Facilities. 
              This page will be available soon with detailed information about our technology infrastructure.
            </p>
            
            <!-- What's Coming -->
            <div class="row g-4 mt-4">
              <div class="col-md-4">
                <div class="elev-card p-4 h-100 text-center">
                  <i class="fa-solid fa-server fa-2x text-primary mb-3"></i>
                  <h5 class="h6">Server Infrastructure</h5>
                  <p class="small mb-0">Advanced server systems and data centers</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="elev-card p-4 h-100 text-center">
                  <i class="fa-solid fa-network-wired fa-2x text-success mb-3"></i>
                  <h5 class="h6">Network Systems</h5>
                  <p class="small mb-0">Campus-wide networking and connectivity solutions</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="elev-card p-4 h-100 text-center">
                  <i class="fa-solid fa-shield-halved fa-2x text-warning mb-3"></i>
                  <h5 class="h6">Security Systems</h5>
                  <p class="small mb-0">Cybersecurity and information protection</p>
                </div>
              </div>
            </div>
            
            <!-- Additional Features -->
            <div class="row g-4 mt-3">
              <div class="col-md-4">
                <div class="elev-card p-4 h-100 text-center">
                  <i class="fa-solid fa-cloud fa-2x text-info mb-3"></i>
                  <h5 class="h6">Cloud Services</h5>
                  <p class="small mb-0">Cloud computing and storage solutions</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="elev-card p-4 h-100 text-center">
                  <i class="fa-solid fa-database fa-2x text-danger mb-3"></i>
                  <h5 class="h6">Database Systems</h5>
                  <p class="small mb-0">Student and administrative database management</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="elev-card p-4 h-100 text-center">
                  <i class="fa-solid fa-mobile-screen fa-2x text-secondary mb-3"></i>
                  <h5 class="h6">Mobile Solutions</h5>
                  <p class="small mb-0">Mobile applications and responsive systems</p>
                </div>
              </div>
            </div>
            
            <!-- Contact Information -->
            <div class="mt-5 pt-4 border-top">
              <h4 class="h5 mb-3">Need Information Now?</h4>
              <p class="mb-3">
                For immediate assistance regarding ICT facilities, please contact our IT department:
              </p>
              <div class="row g-3 justify-content-center">
                <div class="col-md-4">
                  <div class="contact-chip">
                    <i class="fa-solid fa-envelope text-primary me-2"></i>
                    <strong>Email:</strong> ict@ssit.edu.in
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-chip">
                    <i class="fa-solid fa-phone text-success me-2"></i>
                    <strong>Phone:</strong> +91-98765-43210
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="contact-chip">
                    <i class="fa-solid fa-map-marker-alt text-warning me-2"></i>
                    <strong>Location:</strong> SSIT Campus, Khammam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  name: 'IctFacilities',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      // Placeholder data for future use
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

/* Construction Icon Animation */
.construction-icon {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

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
