<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Internet Facility Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Digital Connectivity</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Internet Facility</h1>
            <p class="lead mb-3">Always Connected – 44 Mbps Bandwidth</p>
            <p class="mb-0 text-white-50">
              Enriched internet facility with 44 Mbps bandwidth exclusively for staff, students, 
              staff quarters, and hostels with 24/7 unlimited access across campus.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Internet Facility - High-speed connectivity"
              src="@/assets/campuslife/engineering-students-lab.png"
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
        <!-- About Internet Facility -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">About Internet Facility</h2>
          <p class="section-subtitle">High-Speed Connectivity • Multiple Providers • Campus-Wide Access</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                Sai Spurthi Institute of Technology (SSIT) is enriched with a <strong>dedicated internet facility</strong> 
                offering <strong>44 Mbps bandwidth</strong>, exclusively for staff, students, staff quarters, 
                and the girls' hostel with <strong>24/7 unlimited access</strong>.
              </p>
              <p>
                The campus is supported by <strong>two providers</strong> – BSNL Broadband (40 Mbps) and 
                Reliance NET LINKS (4 Mbps). SSIT ensures seamless connectivity across all facilities.
              </p>
              <p class="mb-0">
                The internet facility is designed to support academic excellence, research activities, 
                and modern educational requirements with reliable and high-speed connectivity.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Quick Facts</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-bolt text-primary me-2"></i>
                  <strong>44 Mbps Bandwidth</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-clock text-success me-2"></i>
                  <strong>24/7 Access</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-network-wired text-warning me-2"></i>
                  <strong>Two Providers</strong>
                </div>
                <div>
                  <i class="fa-solid fa-wifi text-info me-2"></i>
                  <strong>Campus-Wide Wi-Fi</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Internet Labs -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Internet Labs</h2>
          <p class="section-subtitle">Dedicated Facilities • Student Access • Extended Hours</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Main Internet Lab</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-desktop me-2 text-primary"></i>
                    <strong>60 Systems:</strong> Dedicated computers for students
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-clock me-2 text-success"></i>
                    <strong>Timings:</strong> 8:30 AM – 7:30 PM
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-users me-2 text-warning"></i>
                    <strong>Access:</strong> All students and staff
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-wifi me-2 text-info"></i>
                    <strong>High-Speed:</strong> Full bandwidth access
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Girls Hostel Lab</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-desktop me-2 text-primary"></i>
                    <strong>20 Systems:</strong> Exclusive for girl students
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-home me-2 text-success"></i>
                    <strong>Location:</strong> Within girls hostel premises
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-female me-2 text-warning"></i>
                    <strong>Access:</strong> Girl students only
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-shield-halved me-2 text-info"></i>
                    <strong>Security:</strong> Safe and secure environment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Connectivity Features -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Connectivity Features</h2>
          <p class="section-subtitle">Multiple Providers • Wi-Fi Access • Extended Coverage</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-broadcast-tower fa-2x text-primary mb-3"></i>
                <h5 class="h6">BSNL Broadband</h5>
                <p class="small mb-0">40 Mbps dedicated connection for primary internet access</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-satellite fa-2x text-success mb-3"></i>
                <h5 class="h6">Reliance NET LINKS</h5>
                <p class="small mb-0">4 Mbps backup connection ensuring continuous connectivity</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-wifi fa-2x text-warning mb-3"></i>
                <h5 class="h6">Campus Wi-Fi</h5>
                <p class="small mb-0">Seamless wireless connectivity across the entire campus</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Coverage Areas -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Coverage Areas</h2>
          <p class="section-subtitle">Comprehensive Access • All Facilities • Extended Support</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Primary Coverage</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-graduation-cap me-2 text-primary"></i>
                  <strong>Student Internet Lab:</strong> 60 systems with full access
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-house-user me-2 text-success"></i>
                  <strong>Girls Hostel Lab:</strong> 20 systems for resident students
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-university me-2 text-warning"></i>
                  <strong>Academic Buildings:</strong> Wi-Fi access in all classrooms
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-book me-2 text-info"></i>
                  <strong>Library:</strong> High-speed internet for research
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Extended Coverage</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-people-roof me-2 text-primary"></i>
                  <strong>Staff Quarters:</strong> Internet facility extended to all residences
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-home me-2 text-success"></i>
                  <strong>Girls Hostel:</strong> Complete internet coverage
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-building me-2 text-warning"></i>
                  <strong>Administrative Offices:</strong> Full connectivity support
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-utensils me-2 text-info"></i>
                  <strong>Common Areas:</strong> Wi-Fi access in cafeteria and common spaces
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Benefits -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Internet Benefits</h2>
          <p class="section-subtitle">Academic Support • Research Enhancement • Modern Learning</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-search fa-2x text-primary mb-3"></i>
                <h5 class="h6">Research Support</h5>
                <p class="small mb-0">Access to online journals, databases, and research materials</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-laptop-code fa-2x text-success mb-3"></i>
                <h5 class="h6">Online Learning</h5>
                <p class="small mb-0">Support for e-learning platforms and virtual classrooms</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-cloud fa-2x text-warning mb-3"></i>
                <h5 class="h6">Cloud Services</h5>
                <p class="small mb-0">Access to cloud storage and collaborative tools</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Internet Facility</h2>
            <p class="section-subtitle">We're here to ensure seamless connectivity for all</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> internet@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Lab Hours:</strong> 8:30 AM - 7:30 PM
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Access:</strong> 24/7 for Wi-Fi
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-headset text-success me-2"></i>
                  <strong>Support:</strong> Technical Assistance Available
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
  name: 'Internet',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "44", label: "Mbps Bandwidth", icon: "fa-solid fa-bolt fa-lg text-primary" },
        { value: "24/7", label: "Access", icon: "fa-solid fa-clock fa-lg text-success" },
        { value: "80", label: "Total Systems", icon: "fa-solid fa-desktop fa-lg text-warning" },
        { value: "2", label: "Providers", icon: "fa-solid fa-network-wired fa-lg text-info" },
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