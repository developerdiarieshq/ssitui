<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="E-Classrooms Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Digital Learning</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">E-Classrooms</h1>
            <p class="lead mb-3">Technology-Enhanced Learning Environment</p>
            <p class="mb-0 text-white-50">
              Modern classrooms equipped with advanced technology, interactive displays, and 
              digital learning tools to enhance the educational experience for all students.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT E-Classroom - Students in digital learning environment"
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
        <!-- About E-Classrooms -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">About E-Classrooms</h2>
          <p class="section-subtitle">Well Furnished • Extra Curricular Activities • Skill Development</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                A well furnished <strong>E-class room</strong> is provided to students for <strong>extra circular activities</strong> 
                well equipped lab for communication development and technical skill development was provided.
              </p>
              <p>
                <strong>18 hours internet</strong> also available for all students, ensuring continuous access to 
                online resources, research materials, and digital learning platforms.
              </p>
              <p class="mb-0">
                The E-Classrooms serve as a hub for <strong>communication development</strong> and <strong>technical skill enhancement</strong>, 
                providing students with the necessary tools and environment for comprehensive learning and growth.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Key Features</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-chair text-primary me-2"></i>
                  <strong>Well Furnished</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-users text-success me-2"></i>
                  <strong>Extra Curricular Activities</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-comments text-warning me-2"></i>
                  <strong>Communication Development</strong>
                </div>
                <div>
                  <i class="fa-solid fa-wifi text-info me-2"></i>
                  <strong>18 Hours Internet</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Facilities & Equipment -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Facilities & Equipment</h2>
          <p class="section-subtitle">Well Equipped Lab • Communication Tools • Technical Resources</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-laptop fa-2x text-primary mb-3"></i>
                <h5 class="h6">Computer Systems</h5>
                <p class="small mb-0">Modern computers with educational software for technical skill development</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-wifi fa-2x text-success mb-3"></i>
                <h5 class="h6">18 Hours Internet</h5>
                <p class="small mb-0">Continuous internet access for research and online learning resources</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-comments fa-2x text-warning mb-3"></i>
                <h5 class="h6">Communication Lab</h5>
                <p class="small mb-0">Well equipped lab for communication development and language skills</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Student Benefits -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Student Benefits</h2>
          <p class="section-subtitle">Extra Curricular Activities • Skill Development • Communication Enhancement</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Extra Curricular Activities</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Well Furnished Environment:</strong> Comfortable space for various activities
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Group Activities:</strong> Collaborative projects and team building exercises
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Creative Projects:</strong> Digital content creation and multimedia presentations
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Club Activities:</strong> Student clubs and organization meetings
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Skill Development</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Communication Skills:</strong> Language development and presentation abilities
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Technical Skills:</strong> Computer literacy and software proficiency
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Research Skills:</strong> Online research and information gathering
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-check text-success me-2"></i>
                  <strong>Digital Literacy:</strong> Modern technology and internet usage
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Availability & Access -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Availability & Access</h2>
          <p class="section-subtitle">Extended Hours • All Students • Continuous Support</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Access Information</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-clock me-2 text-primary"></i>
                    <strong>18 Hours Internet:</strong> Extended internet access for all students
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-users me-2 text-success"></i>
                    <strong>All Students:</strong> Available for all enrolled students
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-laptop me-2 text-warning"></i>
                    <strong>Computer Access:</strong> Well equipped lab with modern systems
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-comments me-2 text-info"></i>
                    <strong>Communication Lab:</strong> Dedicated space for language development
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Usage Guidelines</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-graduation-cap me-2 text-primary"></i>
                    <strong>Educational Purpose:</strong> Primarily for academic and skill development
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-users me-2 text-success"></i>
                    <strong>Extra Curricular:</strong> Support for student activities and clubs
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-handshake me-2 text-warning"></i>
                    <strong>Respectful Use:</strong> Maintain clean and organized environment
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-shield-halved me-2 text-info"></i>
                    <strong>Safe Usage:</strong> Follow internet safety guidelines
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — E-Classrooms</h2>
            <p class="section-subtitle">We're here to support your digital learning journey</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> eclassrooms@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Available:</strong> 8:00 AM - 8:00 PM
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Days:</strong> Monday - Saturday
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-users text-success me-2"></i>
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
  name: 'EClassRooms',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "18", label: "Hours Internet", icon: "fa-solid fa-wifi fa-lg text-primary" },
        { value: "Well", label: "Furnished", icon: "fa-solid fa-chair fa-lg text-success" },
        { value: "Extra", label: "Curricular Activities", icon: "fa-solid fa-users fa-lg text-warning" },
        { value: "All", label: "Students Access", icon: "fa-solid fa-graduation-cap fa-lg text-info" },
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