<template>
  <div class="seminar-page">
    <Header/>
    <NavBar/>
    <section class="page-bg">
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Seminar Hall Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Academic Excellence</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Seminar Halls</h1>
            <p class="lead mb-3">State-of-the-Art Facilities for Academic & Professional Events</p>
            <p class="mb-0 text-white-50">
              Modern seminar hall equipped with advanced presentation and audio systems, 
              designed to accommodate large gatherings and foster knowledge-sharing sessions.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Seminar Hall - Modern conference facility"
              src="@/assets/campuslife/engineering-college-auditorium.jpg"
            />
          </div>
        </div>

        <!-- Stats -->
        <div class="row g-3 mt-3" aria-label="Seminar Hall summary statistics">
          <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
            <div class="stat-card h-100">
              <div class="d-flex align-items-center gap-3">
                <div class="stat-icon">
                  <i :class="stat.icon"></i>
                </div>
                <div>
                  <div class="stat-number">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTENT -->
    <main id="content" tabindex="-1">
      <div class="container py-5">
        <!-- About Seminar Hall -->
        <div class="elev-card p-4 p-md-5 mb-5 overview-section">
          <h2 class="section-title h3">About Seminar Hall</h2>
          <p class="section-subtitle">Modern Facility • Advanced Equipment • Inspirational Environment</p>
          <p>
            SSIT has excellent seminar hall facility in the 2nd floor with a capacity to accommodate 
            nearly 500 students at a stretch. The hall is equipped with LCD projector (Sony make, 
            model: VPL-EX7) and excellent audio system comprising Amplifier (AHUJA make, model: SSA-250M), 
            Eleven Column Speakers (AHUJA make, model: ASC310T) apart from marker board.
          </p>
          <p class="mb-0">
            Further the golden environmental photographs of eminent personalities of national and 
            international for growth of science and technology have been wall mounted along with 
            their brief bio-data covering the entire hall.
          </p>
        </div>

        <!-- Facilities -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Facilities & Equipment</h2>
          <p class="section-subtitle">Advanced Technology • Professional Audio-Visual Systems</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Audio-Visual Equipment</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-tv me-2 text-primary"></i><strong>LCD Projector:</strong> Sony VPL-EX7</li>
                  <li><i class="fa-solid fa-volume-high me-2 text-success"></i><strong>Amplifier:</strong> AHUJA SSA-250M</li>
                  <li><i class="fa-solid fa-microphone me-2 text-warning"></i><strong>Column Speakers:</strong> AHUJA ASC310T (11 units)</li>
                  <li><i class="fa-solid fa-chalkboard me-2 text-info"></i><strong>Marker Board:</strong> For presentations & discussions</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Hall Specifications</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-building me-2 text-primary"></i><strong>Location:</strong> 2nd Floor</li>
                  <li><i class="fa-solid fa-users me-2 text-success"></i><strong>Capacity:</strong> 500 students</li>
                  <li><i class="fa-solid fa-wifi me-2 text-warning"></i><strong>Connectivity:</strong> Modern infrastructure</li>
                  <li><i class="fa-solid fa-parking me-2 text-info"></i><strong>Accessibility:</strong> Easy access for all</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Inspirational Environment -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Inspirational Environment</h2>
          <p class="section-subtitle">Golden Photographs • Eminent Personalities • Science & Technology</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                The seminar hall features <strong>golden environmental photographs</strong> of eminent personalities 
                of national and international stature in science and technology. These inspiring portraits are 
                strategically wall-mounted throughout the hall, creating an atmosphere of academic excellence 
                and innovation.
              </p>
              <p class="mb-0">
                Each portrait includes <strong>brief bio-data</strong> of these distinguished personalities, 
                providing students with insights into the lives and contributions of great minds in science 
                and technology. This unique environment encourages students to aspire for growth, innovation, 
                and academic excellence.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Features</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-image me-2 text-primary"></i>Golden environmental photographs</li>
                  <li><i class="fa-solid fa-user-tie me-2 text-success"></i>Eminent personalities</li>
                  <li><i class="fa-solid fa-globe me-2 text-warning"></i>National & international figures</li>
                  <li><i class="fa-solid fa-flask me-2 text-info"></i>Science & technology focus</li>
                  <li><i class="fa-solid fa-file-text me-2 text-danger"></i>Brief bio-data included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Seminar Hall</h2>
            <p class="section-subtitle">We're here to help you organize successful events and presentations.</p>
            <div class="d-flex flex-wrap gap-3">
              <span class="contact-chip"><i class="fa-solid fa-location-dot text-danger"></i> SSIT Campus, Khammam</span>
              <span class="contact-chip"><i class="fa-solid fa-envelope text-primary"></i> seminarbookings@ssit.edu.in</span>
              <span class="contact-chip"><i class="fa-solid fa-phone text-success"></i> +91-98765-43210</span>
            </div>
          </div>
        </section>
      </div>
    </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
export default {
  name: "SeminarHall",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "500", label: "Seating Capacity", icon: "fa-solid fa-users fa-lg text-primary" },
        { value: "2nd Floor", label: "Location", icon: "fa-solid fa-building fa-lg text-success" },
        { value: "Sony VPL-EX7", label: "LCD Projector", icon: "fa-solid fa-tv fa-lg text-warning" },
        { value: "11 Speakers", label: "Audio System", icon: "fa-solid fa-volume-high fa-lg text-danger" },
      ],
    };
  },
};
</script>

<style scoped>
/* THEME TOKENS */
:root{
  --navy:#1e40af; --navy-2:#153a9c;
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* GENERIC */
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

/* Content section headings specifically */
.elev-card .h4 {
  color: var(--ink) !important;
}

.elev-card .h6 {
  color: var(--ink) !important;
}

/* Overview section specific styling */
.overview-section .section-title {
  color: var(--ink) !important;
}

.overview-section .section-subtitle {
  color: var(--ink) !important;
}

.overview-section p {
  color: #000 !important;
}

/* Contact section specific styling */
.contact-card .section-title {
  color: var(--ink) !important;
}

.contact-card .section-subtitle {
  color: var(--ink) !important;
}

.contact-card .contact-chip {
  color: #000 !important;
}

.stat-label {
  color: #0b3d91;
  font-size: 0.9rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 119, 1, 0.1);
}

.stat-icon i {
  font-size: 1.5rem;
}
</style>
