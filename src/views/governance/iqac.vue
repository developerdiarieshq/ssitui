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
        <ul class="list-unstyled">
          <li><a href="#" class="btn btn-outline-primary me-2 mb-2">AQAR 2023-24 (PDF)</a></li>
          <li><a href="#" class="btn btn-outline-primary me-2 mb-2">Previous AQAR Reports</a></li>
          <li><a href="#" class="btn btn-outline-primary me-2 mb-2">NAAC Self Study Report</a></li>
          <li><a href="#" class="btn btn-outline-primary me-2 mb-2">Departmental Reports</a></li>
        </ul>
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
.page-bg { background: #f7f9fc; }
.hero { background: linear-gradient(60deg, #1e40af, #143f8c); }
.stat-card {
  background: #fff; border-radius: 12px; padding: 1rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.1); min-width: 160px;
}
.stat-number { font-size: 1.5rem; font-weight: bold; color: #1e40af; }
.stat-label { font-size: 0.85rem; color: #555; }
.section-title { font-weight: 700; color: #1e40af; margin-bottom: 1rem; }
.elev-card { background: #fff; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,.08); }
.metric-card {
  background: #fff; border-radius: 10px; padding: 1.5rem; min-width: 180px;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); transition: transform 0.2s;
}
.metric-card:hover { transform: translateY(-4px); }
.metric-value { font-size: 1.75rem; font-weight: bold; color: #ff6f00; }
.metric-label { font-size: 0.9rem; color: #555; }
a.btn { font-weight: 600; }
</style>
