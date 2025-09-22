<template>
  <div class="englishlabs-page">
    <Header/>
    <NavBar/>
    <section class="page-bg">
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="English Labs Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Communication Excellence</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">English Language Labs</h1>
            <p class="lead mb-3">Strengthening Communication Skills for Academic Excellence</p>
            <p class="mb-0 text-white-50">
              Advanced multimedia labs equipped with cutting-edge technology to enhance 
              English communication skills and spoken language proficiency for all students.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT English Lab - Students learning communication skills"
              src="@/assets/campuslife/engineering-students-lab.png"
            />
          </div>
        </div>

        <!-- Stats -->
        <div class="row g-3 mt-3" aria-label="English Labs summary statistics">
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
        <!-- About English Labs -->
        <div class="elev-card p-4 p-md-5 mb-5 overview-section">
          <h2 class="section-title h3">About English Language Labs</h2>
          <p class="section-subtitle">Communication Skills • Multimedia Learning • Career Enhancement</p>
          <p>
            The English Language Labs at SSIT are designed to strengthen communication skills and spoken language 
            proficiency. Our advanced multimedia facilities provide comprehensive training for students to excel 
            in both academic and professional environments.
          </p>
        </div>

        <!-- ELCS Lab -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">ELCS Lab</h2>
          <p class="section-subtitle">Established 2001 • Multimedia Training • Communication Excellence</p>
          <p>
            We are proud to say we have enriched the IST year B.Tech Students in communication skills and spoken language. 
            We are teaching the students through the multimedia computers which were established in 2001 with 67 students 
            Consoles stand and a masters console with high quality of head sets.
          </p>
          <p>
            We are using P-IV 1.8 GHZ Processors, 40GB HD AND 250 MB-RAM. Operating system windows 2000XP is used to all 
            the system. The software which we purchase was Centro nix in 2001 to be strengthened for the students accent 
            in English along with we have virtual C.DS software such as Cambridge Advanced Learner's Dictionary, Oxford 
            talking Dictionary, talk to me English Grammar in use, Telephoning skills etc.
          </p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Hardware Specifications</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-microchip me-2 text-primary"></i><strong>Processors:</strong> P-IV 1.8 GHz</li>
                  <li><i class="fa-solid fa-hard-drive me-2 text-success"></i><strong>Storage:</strong> 40GB HDD</li>
                  <li><i class="fa-solid fa-memory me-2 text-warning"></i><strong>RAM:</strong> 250 MB</li>
                  <li><i class="fa-solid fa-desktop me-2 text-info"></i><strong>OS:</strong> Windows 2000/XP</li>
                  <li><i class="fa-solid fa-headphones me-2 text-danger"></i><strong>Audio:</strong> High-quality headsets</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Software Resources</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-language me-2 text-primary"></i>Centro nix (2001)</li>
                  <li><i class="fa-solid fa-book me-2 text-success"></i>Cambridge Advanced Learner's Dictionary</li>
                  <li><i class="fa-solid fa-book-open me-2 text-warning"></i>Oxford Talking Dictionary</li>
                  <li><i class="fa-solid fa-comments me-2 text-info"></i>Talk to Me</li>
                  <li><i class="fa-solid fa-spell-check me-2 text-danger"></i>English Grammar in Use</li>
                  <li><i class="fa-solid fa-phone me-2 text-secondary"></i>Telephoning Skills</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Advanced English Communication Skills Lab -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Advanced English Communication Skills Lab</h2>
          <p class="section-subtitle">Modern Technology • LCD Systems • LAN Connectivity</p>
          <p>
            Dept of English and Communications play a major role in strengthening the abilities of students and building 
            their careers. This lab contains 39 systems with LCD monitors, LAN and Globarena Latest software. The lab 
            has been equipped with P.A system also. The Lab is very useful to all B.Tech and MBA students.
          </p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Lab Features</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-computer me-2 text-primary"></i><strong>Systems:</strong> 39 with LCD monitors</li>
                  <li><i class="fa-solid fa-network-wired me-2 text-success"></i><strong>Connectivity:</strong> LAN</li>
                  <li><i class="fa-solid fa-volume-up me-2 text-warning"></i><strong>Audio System:</strong> P.A System</li>
                  <li><i class="fa-solid fa-software me-2 text-info"></i><strong>Software:</strong> Globarena Latest</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Target Students</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-graduation-cap me-2 text-primary"></i>B.Tech Students</li>
                  <li><i class="fa-solid fa-briefcase me-2 text-success"></i>MBA Students</li>
                  <li><i class="fa-solid fa-users me-2 text-warning"></i>All Departments</li>
                  <li><i class="fa-solid fa-trophy me-2 text-info"></i>Career Enhancement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — English Labs</h2>
            <p class="section-subtitle">We're here to help you excel in communication skills.</p>
            <div class="d-flex flex-wrap gap-3">
              <span class="contact-chip"><i class="fa-solid fa-location-dot text-danger"></i> SSIT Campus, Khammam</span>
              <span class="contact-chip"><i class="fa-solid fa-envelope text-primary"></i> englishlabs@ssit.edu.in</span>
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
  name: "EnglishLabs",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "67", label: "Student Consoles", icon: "fa-solid fa-computer fa-lg text-primary" },
        { value: "39", label: "LCD Systems", icon: "fa-solid fa-desktop fa-lg text-success" },
        { value: "2001", label: "Established Year", icon: "fa-solid fa-calendar fa-lg text-warning" },
        { value: "P.A System", label: "Audio System", icon: "fa-solid fa-volume-up fa-lg text-danger" },
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
