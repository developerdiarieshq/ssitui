<template>
  <section class="page-bg">
    <!-- HEADER / NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero text-center text-white py-5">
      <div class="container">
        <h1 class="display-5 fw-bold">Internal Quality Assurance Cell (IQAC)</h1>
        <p class="lead">Catalyzing Quality Enhancement and Sustenance</p>
        <div class="d-flex flex-wrap justify-content-center gap-4 mt-4">
          <div class="stat-card">
            <div class="stat-number">2015</div>
            <div class="stat-label">Established</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">B Grade</div>
            <div class="stat-label">NAAC Accreditation</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Quality Initiatives</div>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container py-5">
      <!-- ABOUT -->
      <section class="mb-5">
        <h2 class="section-title">About IQAC</h2>
        <p>
          The IQAC of SSIT functions as per NAAC guidelines to ensure continuous
          quality improvement across academic and administrative domains.
        </p>
        <div class="row g-4 mt-3">
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold text-primary">Mission</h5>
              <p>
                To develop a system for conscious, consistent and catalytic
                improvement in the overall performance of the institution.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold text-primary">Vision</h5>
              <p>
                To promote quality culture as the prime concern through
                institutionalizing and internalizing quality-enhancing
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="mb-5">
        <h2 class="section-title">Objectives & Functions</h2>
        <div class="row g-4 mt-2">
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold">Primary Objectives</h5>
              <ul>
                <li>Develop quality benchmarks for academic/administrative activities</li>
                <li>Promote institutional functioning towards quality enhancement</li>
                <li>Ensure internalization of best practices</li>
                <li>Act as catalyst for continuous improvement</li>
              </ul>
            </div>
          </div>
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold">Key Functions</h5>
              <ul>
                <li>Apply quality parameters and collect feedback</li>
                <li>Document quality initiatives and reports</li>
                <li>Conduct workshops and seminars</li>
                <li>Perform Academic & Administrative Audits</li>
                <li>Prepare Annual Quality Assurance Report (AQAR)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPOSITION -->
      <section class="mb-5">
        <h2 class="section-title">IQAC Composition</h2>
        <div class="row g-4 mt-3">
          <div v-for="m in team" :key="m.name" class="col-6 col-md-4 col-lg-3">
            <div class="elev-card text-center p-3 h-100">
              <div class="fw-bold text-primary">{{ m.name }}</div>
              <div class="small text-muted">{{ m.role }}</div>
              <div v-if="m.contact" class="small mt-1">
                <i class="fa-solid fa-phone text-success"></i> {{ m.contact }}
              </div>
              <div v-if="m.email" class="small">
                <i class="fa-solid fa-envelope text-danger"></i>
                <a :href="'mailto:' + m.email">{{ m.email }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- INITIATIVES -->
      <section class="mb-5">
        <h2 class="section-title">Quality Initiatives & Best Practices</h2>
        <div class="row g-4 mt-2">
          <div v-for="i in initiatives" :key="i.title" class="col-md-4">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold">{{ i.title }}</h5>
              <ul class="small">
                <li v-for="point in i.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- METRICS -->
      <section class="mb-5 text-center">
        <h2 class="section-title">Quality Metrics Dashboard</h2>
        <div class="d-flex flex-wrap justify-content-center gap-4 mt-4">
          <div class="metric-card">
            <div class="metric-value">87%</div>
            <div class="metric-label">Student Satisfaction</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">60+</div>
            <div class="metric-label">Faculty Development Programs</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">75%</div>
            <div class="metric-label">Placement Rate</div>
          </div>
        </div>
      </section>

      <!-- DOCUMENTS -->
      <section class="mb-5">
        <h2 class="section-title">Reports & Documentation</h2>
        <div class="row g-4 mt-2">
          <div class="col-md-6 col-lg-3">
            <a href="#" class="document-card">
              <i class="fa-solid fa-file-pdf"></i>
              <span>AQAR 2023-24</span>
            </a>
          </div>
          <div class="col-md-6 col-lg-3">
            <a href="#" class="document-card">
              <i class="fa-solid fa-folder-open"></i>
              <span>Previous AQAR Reports</span>
            </a>
          </div>
          <div class="col-md-6 col-lg-3">
            <a href="#" class="document-card">
              <i class="fa-solid fa-file-alt"></i>
              <span>NAAC Self Study Report</span>
            </a>
          </div>
          <div class="col-md-6 col-lg-3">
            <a href="#" class="document-card">
              <i class="fa-solid fa-chart-bar"></i>
              <span>Departmental Reports</span>
            </a>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section class="mb-5">
        <h2 class="section-title">Contact IQAC</h2>
        <div class="elev-card p-4">
          <p><strong>Coordinator:</strong> Mr. K. Rama Krishna Prasad</p>
          <p><i class="fa-solid fa-envelope text-primary"></i> ramakrishna.pe@gmail.com</p>
          <p><i class="fa-solid fa-phone text-success"></i> 9154645060</p>
          <a href="#" class="btn btn-primary mt-2">Submit Feedback</a>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </section>
</template>

<script>
import Header from "../../components/Header.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Iqac",
  components: { Header, NavBar, Footer },
  data() {
    return {
      team: [
        { name: "Dr. Ch. Vijaya Kumar", role: "Chairperson (Principal)", contact: "08761-288278" },
        { name: "Mr. K. Rama Krishna Prasad", role: "IQAC Coordinator", email: "ramakrishna.pe@gmail.com", contact: "9154645060" },
        { name: "Dr. Shaik Yakoob", role: "Faculty Rep (CSE HOD)" },
        { name: "Dr. P. Sekharbabu", role: "Faculty Rep (ECE HOD)" },
        { name: "VIPASSANA Society Nominee", role: "Management Rep" },
        { name: "Alumni Representative", role: "External Member" },
        { name: "Industry Expert", role: "External Member" },
        { name: "Community Representative", role: "External Member" },
        { name: "Student Representative", role: "External Member" },
        { name: "G. Rajendra Prasad Reddy", role: "Office Superintendent" },
      ],
      initiatives: [
        {
          title: "Academic Quality",
          points: ["Faculty development & certifications", "Curriculum industry alignment", "Research & innovation promotion", "Industry partnerships (Microsoft, CISCO, Wipro)"],
        },
        {
          title: "Infrastructure Quality",
          points: ["Digital library modernization", "Laboratory upgrades", "Technology-enabled classrooms"],
        },
        {
          title: "Student Support",
          points: ["Scholarships & sponsorships", "Placement & career guidance", "Counseling & mentoring", "Anti-ragging & safety measures"],
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Theme Variables */
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --muted: #6b7280;
}

.page-bg { 
  background: linear-gradient(180deg, #fff 0%, #f7f9fc 100%); 
}

.hero { 
  background: var(--ink);
  padding: 3rem 0;
}

.hero h1 {
  color: #fff;
  margin-bottom: 1rem;
}

.hero .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: #fff; 
  border-radius: 12px; 
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.1); 
  min-width: 160px;
  border: 1px solid rgba(255, 119, 1, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(255, 119, 1, 0.2);
  border-color: var(--orange);
}

.stat-number { 
  font-size: 1.5rem; 
  font-weight: bold; 
  color: var(--orange); 
}

.stat-label { 
  font-size: 0.85rem; 
  color: #555; 
}

.section-title { 
  font-weight: 700; 
  color: var(--ink); 
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: var(--orange);
  border-radius: 2px;
}

.elev-card { 
  background: #fff; 
  border-radius: 10px; 
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.elev-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,.12);
  border-color: var(--orange);
}

.elev-card h5 {
  color: var(--orange) !important;
}

.text-primary {
  color: var(--orange) !important;
}

.metric-card {
  background: #fff; 
  border-radius: 10px; 
  padding: 1.5rem; 
  min-width: 180px;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); 
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.15);
}

.metric-card:hover { 
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 119, 1, 0.25);
  border-color: var(--orange);
}

.metric-value { 
  font-size: 1.75rem; 
  font-weight: bold; 
  color: var(--orange); 
}

.metric-label { 
  font-size: 0.9rem; 
  color: #555; 
}

a.btn { 
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-primary {
  border-color: var(--orange);
  color: var(--orange);
}

.btn-outline-primary:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}

.btn-primary {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
}

.btn-primary:hover {
  background: #e55a00;
  border-color: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}

/* Document Cards */
.document-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: #fff;
  border: 2px solid rgba(255, 119, 1, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: var(--ink);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  height: 100%;
  min-height: 140px;
}

.document-card:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 119, 1, 0.3);
}

.document-card i {
  font-size: 2.5rem;
  color: var(--orange);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.document-card:hover i {
  color: #fff;
  transform: scale(1.1);
}

.document-card span {
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  line-height: 1.4;
}

/* Icon Colors */
.text-success {
  color: #22c55e !important;
}

.text-danger {
  color: #ef4444 !important;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
