<template>
  <Header/>
  <NavBar/>
  <section class="page-bg">
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Central Library Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Knowledge Hub</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-4 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Central Library &amp; Department Libraries</h1>
            <p class="lead mb-3">Knowledge Hub for Students &amp; Faculty</p>
            <p class="mb-0 text-white-50">
              Explore print &amp; digital resources, collaborative spaces, and expert help for coursework,
              research, and lifelong learning.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="Library reading hall"
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>

        <!-- Stats -->
        <div class="row g-3 mt-4" aria-label="Library summary statistics">
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
        <!-- Overview -->
        <div class="elev-card p-4 p-md-5 mb-5">
          <h2 class="section-title h3">Overview</h2>
          <p class="section-subtitle">Mission • Membership • Academic Support</p>
          <p>
            The SSIT Central Library serves as the academic anchor for students and faculty, providing
            curated print and digital collections, research support, and collaborative learning spaces.
            Our mission is to enable inquiry, innovation, and excellence in teaching and research across
            all departments.
          </p>
          <p class="mb-0">
            <strong>Membership:</strong> All SSIT students, faculty, and staff are automatic members with
            valid ID. External scholars may apply for reference access subject to approval.
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
      <!-- Resources -->
      <section :id="tabsMap.resources" class="card-section" v-show="activeTab==='resources'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Resources &amp; Services</h3>
              <p class="text-muted">Collections • Digital platforms • Access tools</p>
              <div class="row g-4 mt-2">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Collections</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-book me-2 text-warning"></i><strong>Print Volumes:</strong> 55,000+</li>
                      <li><i class="fa-solid fa-file-pdf me-2 text-danger"></i><strong>E-Books:</strong> 9,000+</li>
                      <li><i class="fa-solid fa-newspaper me-2 text-secondary"></i><strong>Journals:</strong> 450+</li>
                      <li><i class="fa-solid fa-scroll me-2 text-primary"></i><strong>Newspapers:</strong> 25+</li>
                      <li><i class="fa-solid fa-flask me-2 text-success"></i><strong>Projects/Thesis:</strong> Department repos</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Digital Access</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-magnifying-glass me-2 text-primary"></i><strong>OPAC:</strong> Search &amp; reserve</li>
                      <li><i class="fa-solid fa-network-wired me-2 text-success"></i><strong>DELNET:</strong> Inter-library loan</li>
                      <li><i class="fa-solid fa-graduation-cap me-2 text-warning"></i><strong>NDL:</strong> National resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Facilities -->
          <section :id="tabsMap.facilities" class="card-section" v-show="activeTab==='facilities'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Facilities</h3>
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Facility</th>
                      <th>Capacity</th>
                      <th>Access</th>
                      <th>Hours</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="f in facilities" :key="f.name">
                      <td><i :class="f.icon" class="me-2"></i>{{ f.name }}</td>
                      <td>{{ f.capacity }}</td>
                      <td>{{ f.access }}</td>
                      <td>{{ f.hours }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Membership -->
          <section :id="tabsMap.membership" class="card-section" v-show="activeTab==='membership'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Membership</h3>
              <div class="row g-4 mt-2">
                <div v-for="m in membership" :key="m.title" class="col-lg-4">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted">{{ m.title }}</h4>
                    <p v-if="m.text">{{ m.text }}</p>
                    <ul v-if="m.list"><li v-for="li in m.list" :key="li">{{ li }}</li></ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Services -->
          <section :id="tabsMap.services" class="card-section" v-show="activeTab==='services'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Services Offered</h3>
              <ul>
                <li><i class="fa-solid fa-hand-holding me-2 text-success"></i>Lending & renewals</li>
                <li><i class="fa-solid fa-people-arrows me-2 text-primary"></i>Reference support</li>
                <li><i class="fa-solid fa-bell-concierge me-2 text-warning"></i>Reservations via OPAC</li>
                <li><i class="fa-solid fa-cloud-arrow-down me-2 text-danger"></i>Digital access</li>
                <li><i class="fa-solid fa-paper-plane me-2 text-secondary"></i>News distribution</li>
              </ul>
            </div>
          </section>

          <!-- Digital -->
          <section :id="tabsMap.digital" class="card-section" v-show="activeTab==='digital'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Digital Library</h3>
              <div class="row g-4 mt-2">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted">Infrastructure</h4>
                    <ul>
                      <li>40 systems • Headphones</li>
                      <li>High-speed internet</li>
                      <li>SSO login</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted">Login Steps</h4>
                    <ol>
                      <li>Open portal</li>
                      <li>Login with SSO</li>
                      <li>Search & download</li>
                    </ol>
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

          <!-- Team -->
          <section :id="tabsMap.team" class="card-section" v-show="activeTab==='team'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Library Team</h3>
              <div class="table-responsive mt-3">
                <table class="table align-middle">
                  <thead><tr><th>Photo</th><th>Name</th><th>Degree</th><th>Designation</th></tr></thead>
                  <tbody>
                    <tr v-for="m in team" :key="m.name">
                      <td><img :src="m.photo" class="rounded-circle" width="48" height="48" /></td>
                      <td>{{ m.name }}</td>
                      <td>{{ m.degree }}</td>
                      <td>{{ m.role }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Downloads -->
          <section :id="tabsMap.downloads" class="card-section" v-show="activeTab==='downloads'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Downloads</h3>
              <div class="d-grid gap-3" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
                <a v-for="d in downloads" :key="d.label" class="btn btn-outline-primary" href="#" download>
                  <i :class="d.icon"></i> {{ d.label }}
                </a>
              </div>
            </div>
          </section>

          <!-- News -->
          <section :id="tabsMap.news" class="card-section" v-show="activeTab==='news'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">News &amp; Updates</h3>
              <div v-for="n in news" :key="n.title" class="elev-card p-3 mb-3">
                <strong>{{ n.title }}</strong>
                <div class="small text-muted">{{ n.desc }}</div>
              </div>
            </div>
          </section>

          <!-- FAQ -->
          <section :id="tabsMap.faq" class="card-section" v-show="activeTab==='faq'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">FAQ</h3>
              <div class="accordion" id="faqAcc">
                <div v-for="(f, i) in faq" :key="i" class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button"
                      :class="{ collapsed: openFAQ !== i }"
                      @click="toggleFAQ(i)"
                    >
                      {{ f.q }}
                    </button>
                  </h2>
                  <div class="accordion-collapse" :class="{ collapse: openFAQ !== i, show: openFAQ === i }">
                    <div class="accordion-body">{{ f.a }}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Central Library</h2>
            <p class="section-subtitle">We’re here to help you succeed.</p>
            <div class="d-flex flex-wrap gap-3">
              <span class="contact-chip"><i class="fa-solid fa-location-dot text-danger"></i> SSIT Campus, Khammam</span>
              <span class="contact-chip"><i class="fa-solid fa-envelope text-primary"></i> library@ssit.edu.in</span>
              <span class="contact-chip"><i class="fa-solid fa-phone text-success"></i> +91-98765-43210</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  </section>
  <Footer />
</template>

<script>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
export default {
  name: "Library",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      activeTab: "resources",
      openFAQ: null,
      tabsMap: {
        resources: "resources",
        facilities: "facilities", 
        membership: "membership",
        services: "services",
        digital: "digital",
        timings: "timings",
        team: "team",
        downloads: "downloads",
        news: "news",
        faq: "faq"
      },
      stats: [
        { value: "55,000+", label: "Total Collection", icon: "fa-solid fa-book fa-lg text-warning" },
        { value: "12,500+", label: "E-Books & Journals", icon: "fa-solid fa-tablet-screen-button fa-lg text-primary" },
        { value: "240", label: "Seating Capacity", icon: "fa-solid fa-chair fa-lg text-success" },
        { value: "OPAC/DELNET/NDL", label: "Digital Access", icon: "fa-solid fa-globe fa-lg text-danger" },
      ],
      tabs: [
        { id: "resources", label: "Resources & Services", icon: "fa-solid fa-layer-group" },
        { id: "facilities", label: "Facilities", icon: "fa-solid fa-building-columns" },
        { id: "membership", label: "Membership", icon: "fa-solid fa-id-card" },
        { id: "services", label: "Services Offered", icon: "fa-solid fa-hands-holding-circle" },
        { id: "digital", label: "Digital Library", icon: "fa-solid fa-wifi" },
        { id: "timings", label: "Timings", icon: "fa-regular fa-clock" },
        { id: "team", label: "Library Team", icon: "fa-solid fa-people-group" },
        { id: "downloads", label: "Downloads", icon: "fa-solid fa-download" },
        { id: "news", label: "News/Updates", icon: "fa-regular fa-newspaper" },
        { id: "faq", label: "FAQ", icon: "fa-regular fa-circle-question" },
      ],
      facilities: [
        { name: "Reading Room", capacity: "240 seats", access: "All members", hours: "Mon–Sat, 9–19", icon: "fa-solid fa-book-open-reader text-primary" },
        { name: "Digital Library", capacity: "40 systems", access: "SSO login", hours: "Mon–Sat, 9–18", icon: "fa-solid fa-computer text-success" },
        { name: "Photocopy & Print", capacity: "Queue based", access: "Paid", hours: "Mon–Sat, 10–17:30", icon: "fa-solid fa-print text-secondary" },
      ],
      membership: [
        { title: "Eligibility", text: "All SSIT students, faculty, staff. External visitors may request reference access." },
        { title: "Application", text: "Activate membership at Circulation Desk with ID." },
        { title: "Rules", list: ["Maintain silence", "Return on time", "Follow license terms"] },
      ],
      timings: [
        { service: "Central Library", days: "Mon–Sat", hours: "09:00–19:00" },
        { service: "Circulation Desk", days: "Mon–Sat", hours: "09:30–17:30" },
      ],
      team: [
        { name: "Dr. A. Priya", degree: "MLISc, PhD", role: "Chief Librarian", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
        { name: "Mr. K. Suresh", degree: "MLISc", role: "Asst. Librarian", photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c" },
      ],
      downloads: [
        { label: "Membership Form", icon: "fa-solid fa-file-pdf" },
        { label: "OPAC Guide", icon: "fa-solid fa-book-open-reader" },
        { label: "DELNET Guide", icon: "fa-solid fa-network-wired" },
        { label: "E-Journal List", icon: "fa-solid fa-newspaper" },
      ],
      news: [
        { title: "New E-Book Pack Added", desc: "Engineering Foundations • Access via Digital Portal" },
        { title: "Orientation: OPAC & DELNET", desc: "Friday, 3:30 PM • Digital Library Lab" },
      ],
      faq: [
        { q: "How do I access e-books off campus?", a: "Login via Digital Library Portal with VPN." },
        { q: "What are the borrowing limits?", a: "Students: 3 books / 14 days; Faculty: 6 books / 30 days." },
      ],
    };
  },
  methods: {
    setTab(id) {
      this.activeTab = id;
    },
    toggleFAQ(i) {
      this.openFAQ = this.openFAQ === i ? null : i;
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
.lead{font-size:1.05rem; color:#374151}

/* PAGE BACKGROUND */
.page-bg { background: linear-gradient(180deg, #fff 0%, #eef3ff 100%); }

/* HERO */
.hero { background: linear-gradient(135deg, #FF7701, #FF6F00); color: #fff; padding: 4rem 0 2rem; }
.badge-pill { background: rgba(255,255,255,0.15); border-radius: 999px; padding: .25rem .75rem; }
.stat-card { background:#fff; border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); padding:1rem; color: #0b3d91; }
.stat-number { font-weight:800; color:#0b3d91; }

/* SUBNAV */
.subnav{ position:sticky; top:0; z-index:20; background:#fff; border-bottom:1px solid var(--border); }
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 1rem; overflow-x:auto; overflow-y:hidden; justify-content:flex-start; flex-wrap:nowrap; }
.chip{ border:1px solid var(--border); background:#fff; color:#111; border-radius:999px; padding:.5rem .9rem; font-weight:600; display:flex; align-items:center; gap:.5rem; white-space:nowrap; cursor:pointer; transition:all 0.3s ease; flex-shrink:0; }
.chip i{ color:var(--navy) }
.chip.active{ border-color:var(--navy); background:rgba(30,64,175,.08); color:var(--navy) }
.chip:hover{ border-color:var(--orange); background:rgba(249,115,22,.05); }

/* CONTENT */
.content{ padding:1.8rem 0 2.6rem }
.card-section{ margin:1.2rem 0 }
.elev-card { border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); background:#fff; }
.section-title { color:#0b3d91; font-weight:800; }
.contact-chip { border:1px dashed rgba(0,0,0,.1); border-radius:999px; padding:.35rem .75rem; }

/* Ensure all text is visible */
.elev-card {
  color: #0b3d91;
}

.elev-card h1,
.elev-card h2,
.elev-card h3,
.elev-card h4,
.elev-card h5,
.elev-card h6 {
  color: #0b3d91;
}

.elev-card p,
.elev-card span,
.elev-card li,
.elev-card label,
.elev-card td,
.elev-card th {
  color: #0b3d91;
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
