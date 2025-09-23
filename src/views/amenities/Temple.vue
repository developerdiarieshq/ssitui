<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Sai Baba Temple Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Spiritual Center</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Sai Baba Temple</h1>
            <p class="lead mb-3">Spirituality, Divinity & Mental Peace</p>
            <p class="mb-0 text-white-50">
              An extra asset of college having beautiful Sai temple in the college premises. 
              Built to develop spirituality, divinity and mental peace in the minds of students and staff.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Sai Baba Temple - Spiritual center"
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
        <!-- About Sai Baba Temple -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">About Sai Baba Temple</h2>
          <p class="section-subtitle">Extra Asset • Spiritual Development • Peaceful Environment</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                An extra asset of college is having <strong>beautiful Sai temple</strong> in the college premises. 
                In order to develop <strong>spirituality, divinity and mental peace</strong> in the minds of 
                students and staff and thus by healthy and peaceful environment.
              </p>
              <p>
                Our Chairman <strong>Dr. B. Partha Sarathi Reddy</strong> who is a great devotee of SAI BABA 
                built <strong>"Ganapathi Dattatreya Sahitha Sai Mandir"</strong> on <strong>30th May, 2005</strong>.
              </p>
              <p class="mb-0">
                The temple serves as a spiritual center promoting harmony, peace, and divine blessings 
                for the entire SSIT community, creating a serene atmosphere for academic excellence.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Key Features</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-om text-primary me-2"></i>
                  <strong>Spiritual Center</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-peace text-success me-2"></i>
                  <strong>Mental Peace</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-heart text-warning me-2"></i>
                  <strong>Divine Blessings</strong>
                </div>
                <div>
                  <i class="fa-solid fa-users text-info me-2"></i>
                  <strong>Community Harmony</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Weekly Pooja -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Weekly Pooja</h2>
          <p class="section-subtitle">Special Offerings • Thursday Rituals • Community Gathering</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                Every <strong>Thursday</strong> special offerings, <strong>Puja for Sai Baba</strong> will be done in the temple. 
                This weekly ritual brings together students, faculty, and staff in a spiritual gathering.
              </p>
              <p>
                The Thursday Pooja creates a sense of unity and spiritual bonding among the campus community, 
                fostering positive energy and divine blessings for academic and personal growth.
              </p>
              <p class="mb-0">
                All members of the SSIT family are welcome to participate in these sacred ceremonies, 
                contributing to the peaceful and harmonious environment of the institution.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Pooja Schedule</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Every Thursday</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-hands-praying text-success me-2"></i>
                  <strong>Special Pooja</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-gift text-warning me-2"></i>
                  <strong>Special Offerings</strong>
                </div>
                <div>
                  <i class="fa-solid fa-users text-info me-2"></i>
                  <strong>Community Participation</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Temple Benefits -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Temple Benefits</h2>
          <p class="section-subtitle">Spiritual Growth • Peaceful Environment • Academic Excellence</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-brain fa-2x text-primary mb-3"></i>
                <h5 class="h6">Mental Peace</h5>
                <p class="small mb-0">Promotes mental peace and tranquility for students and staff</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-heart fa-2x text-success mb-3"></i>
                <h5 class="h6">Spiritual Development</h5>
                <p class="small mb-0">Develops spirituality and divinity in campus community</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-leaf fa-2x text-warning mb-3"></i>
                <h5 class="h6">Healthy Environment</h5>
                <p class="small mb-0">Creates healthy and peaceful environment for learning</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Temple History -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Temple History</h2>
          <p class="section-subtitle">Foundation • Vision • Legacy</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Foundation</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-calendar me-2 text-primary"></i>
                    <strong>Established:</strong> 30th May, 2005
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-user-tie me-2 text-success"></i>
                    <strong>Founder:</strong> Dr. B. Partha Sarathi Reddy (Chairman)
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-praying-hands me-2 text-warning"></i>
                    <strong>Devotion:</strong> Great devotee of Sai Baba
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-temple-hindu me-2 text-info"></i>
                    <strong>Name:</strong> Ganapathi Dattatreya Sahitha Sai Mandir
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Purpose</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-graduation-cap me-2 text-primary"></i>
                    <strong>Students:</strong> Spiritual development and mental peace
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-chalkboard-teacher me-2 text-success"></i>
                    <strong>Staff:</strong> Harmony and peaceful working environment
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-university me-2 text-warning"></i>
                    <strong>Campus:</strong> Healthy and peaceful atmosphere
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-pray me-2 text-info"></i>
                    <strong>Community:</strong> Unity and spiritual bonding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Sai Baba Temple</h2>
            <p class="section-subtitle">We welcome all devotees to experience divine blessings</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> temple@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Open:</strong> Daily 6:00 AM - 8:00 PM
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Special Pooja:</strong> Every Thursday
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-users text-success me-2"></i>
                  <strong>Access:</strong> All Students & Staff
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
  name: 'Temple',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "2005", label: "Established", icon: "fa-solid fa-calendar fa-lg text-primary" },
        { value: "Thursday", label: "Special Pooja", icon: "fa-solid fa-hands-praying fa-lg text-success" },
        { value: "Sai Baba", label: "Devotion", icon: "fa-solid fa-om fa-lg text-warning" },
        { value: "All", label: "Community Access", icon: "fa-solid fa-users fa-lg text-info" },
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