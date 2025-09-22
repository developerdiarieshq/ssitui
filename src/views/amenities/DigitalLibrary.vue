<template>
  <div class="digital-library-page">
    <Header/>
    <NavBar/>
    <section class="page-bg">
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Digital Library Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Digital Learning Hub</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Digital Library</h1>
            <p class="lead mb-3">Modern Technology for Enhanced Learning</p>
            <p class="mb-0 text-white-50">
              Access to digital resources, e-journals, e-books, and multimedia content 
              with high-speed internet connectivity for comprehensive academic support.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Digital Library - Modern computer lab"
              src="@/assets/campuslife/engineering-students-lab.png"
            />
          </div>
        </div>

        <!-- Stats -->
        <div class="row g-3 mt-3" aria-label="Digital Library summary statistics">
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
        <!-- About Digital Library -->
        <div class="elev-card p-4 p-md-5 mb-5 overview-section">
          <h2 class="section-title h3">About Digital Library</h2>
          <p class="section-subtitle">Modern Technology • Enhanced Learning • Digital Resources</p>
          <p>
            The College Library is supported with a well-equipped Digital Library. An attempt to provide an insight 
            into significant developments in some of promising areas of Science & Technology with the help of Digital Library. 
            Digital Library in SSIT has 30 dedicated Systems in a separate block of Main Library.
          </p>
        </div>

        <!-- STICKY SUB NAV (nav-pills) -->
        <nav class="subnav" aria-label="Section navigation">
          <div class="container subnav-inner">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="chip"
              :class="{ active: activeTab === tab.id }"
              @click="setTab(tab.id)"
              :aria-controls="tab.id"
              role="tab"
              :aria-selected="activeTab === tab.id"
            >
              <i :class="tab.icon" aria-hidden="true"></i> {{ tab.label }}
            </button>
          </div>
        </nav>

        <!-- CONTENT (tab panes) -->
        <main class="container content" id="content">
          <!-- Facilities -->
          <section :id="tabsMap.facilities" class="card-section" v-show="activeTab==='facilities'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Facilities of Digital Library</h3>
              <div class="row g-4 mt-2">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Digital Resources</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-newspaper me-2 text-primary"></i>E-Journals (DELNET)</li>
                      <li><i class="fa-solid fa-book me-2 text-success"></i>E-books</li>
                      <li><i class="fa-solid fa-play me-2 text-warning"></i>Audio-Visual</li>
                      <li><i class="fa-solid fa-compact-disc me-2 text-info"></i>CD & DVD's of Books/magazines</li>
                      <li><i class="fa-solid fa-video me-2 text-danger"></i>Video-On-Demand Courses (NPTEL)</li>
                      <li><i class="fa-solid fa-wifi me-2 text-secondary"></i>Free Internet Facility with 40 mbps Speed</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Publications & Resources</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-newspaper me-2 text-primary"></i>NOBEL INFOTECH</li>
                      <li><i class="fa-solid fa-globe me-2 text-success"></i>Open Access (free) Journals (4,500+)</li>
                      <li><i class="fa-solid fa-chart-line me-2 text-warning"></i>DATAQUEST</li>
                      <li><i class="fa-solid fa-microchip me-2 text-info"></i>ELECTRONICS FOR YOU</li>
                      <li><i class="fa-solid fa-graduation-cap me-2 text-danger"></i>GRE</li>
                      <li><i class="fa-solid fa-language me-2 text-secondary"></i>TOEFL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Proposed Facilities -->
          <section :id="tabsMap.proposed" class="card-section" v-show="activeTab==='proposed'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Proposed Facilities</h3>
              <div class="row g-4 mt-2">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Upcoming Features</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-tv me-2 text-primary"></i>EAKALAYA T.V CHANNEL</li>
                      <li><i class="fa-solid fa-network-wired me-2 text-success"></i>AICTE INDEST CONSORTIUM</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Future Enhancements</h4>
                    <p>We are continuously working to expand our digital resources and improve accessibility for all students and faculty members.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Timings -->
          <section :id="tabsMap.timings" class="card-section" v-show="activeTab==='timings'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Timings</h3>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr><th>Service</th><th>Days</th><th>Hours</th></tr>
                  </thead>
                  <tbody>
                    <tr v-for="t in timings" :key="t.service">
                      <td>{{ t.service }}</td>
                      <td>{{ t.days }}</td>
                      <td>{{ t.hours }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Digital Library</h2>
            <p class="section-subtitle">We're here to help you succeed in your digital learning journey.</p>
            <div class="d-flex flex-wrap gap-3">
              <span class="contact-chip"><i class="fa-solid fa-location-dot text-danger"></i> SSIT Campus, Khammam</span>
              <span class="contact-chip"><i class="fa-solid fa-envelope text-primary"></i> digitallibrary@ssit.edu.in</span>
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
  name: "DigitalLibrary",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      activeTab: "facilities",
      tabsMap: {
        facilities: "facilities",
        proposed: "proposed",
        timings: "timings"
      },
      stats: [
        { value: "30", label: "Dedicated Systems", icon: "fa-solid fa-computer fa-lg text-primary" },
        { value: "40 Mbps", label: "Internet Speed", icon: "fa-solid fa-wifi fa-lg text-success" },
        { value: "4,500+", label: "Open Access Journals", icon: "fa-solid fa-newspaper fa-lg text-warning" },
        { value: "24/7", label: "Digital Access", icon: "fa-solid fa-clock fa-lg text-danger" },
      ],
      tabs: [
        { id: "facilities", label: "Facilities", icon: "fa-solid fa-building-columns" },
        { id: "proposed", label: "Proposed Facilities", icon: "fa-solid fa-lightbulb" },
        { id: "timings", label: "Timings", icon: "fa-regular fa-clock" },
      ],
      timings: [
        { service: "Working Hours", days: "Monday–Saturday", hours: "8:00 A.M to 8:00 P.M" },
        { service: "Holidays", days: "Sundays & Public Holidays", hours: "9:00 A.M to 1:00 P.M" },
      ],
    };
  },
  methods: {
    setTab(id) {
      this.activeTab = id;
    },
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

/* SUBNAV */
.subnav{ position:sticky; top:0; z-index:20; background:#fff; border-bottom:1px solid var(--border); }
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 1rem; overflow-x:auto; overflow-y:hidden; justify-content:flex-start; flex-wrap:nowrap; }
.chip{ border:1px solid var(--border); background:#fff; color:#111; border-radius:999px; padding:.5rem .9rem; font-weight:600; display:flex; align-items:center; gap:.5rem; white-space:nowrap; cursor:pointer; transition:all 0.3s ease; flex-shrink:0; }
.chip i{ color:var(--orange) }
.chip.active{ border-color:var(--orange); background:var(--orange); color:#fff }
.chip:hover{ border-color:var(--orange); background:var(--orange); color:#fff; }
.chip:hover i{ color:#fff }

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
