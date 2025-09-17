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
                <i :class="stat.icon"></i>
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

        <!-- Tabs -->
        <ul class="nav nav-tabs overflow-auto flex-nowrap mb-4" role="tablist">
          <li class="nav-item" v-for="tab in tabs" :key="tab.id" role="presentation">
            <button
              class="nav-link"
              :class="{ active: activeTab === tab.id }"
              type="button"
              role="tab"
              @click="activeTab = tab.id"
            >
              <i :class="tab.icon" class="me-2"></i>{{ tab.label }}
            </button>
          </li>
        </ul>

        <!-- Tab Panels -->
        <div class="tab-content">
          <!-- Resources -->
          <div v-if="activeTab === 'resources'" class="tab-pane fade show active">
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
          </div>

          <!-- Facilities -->
          <div v-if="activeTab === 'facilities'" class="tab-pane fade show active">
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
          </div>

          <!-- Membership -->
          <div v-if="activeTab === 'membership'" class="tab-pane fade show active">
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
          </div>

          <!-- Services -->
          <div v-if="activeTab === 'services'" class="tab-pane fade show active">
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
          </div>

          <!-- Digital -->
          <div v-if="activeTab === 'digital'" class="tab-pane fade show active">
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
          </div>

          <!-- Timings -->
          <div v-if="activeTab === 'timings'" class="tab-pane fade show active">
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
          </div>

          <!-- Team -->
          <div v-if="activeTab === 'team'" class="tab-pane fade show active">
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
          </div>

          <!-- Downloads -->
          <div v-if="activeTab === 'downloads'" class="tab-pane fade show active">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Downloads</h3>
              <div class="d-grid gap-3" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
                <a v-for="d in downloads" :key="d.label" class="btn btn-outline-primary" href="#" download>
                  <i :class="d.icon"></i> {{ d.label }}
                </a>
              </div>
            </div>
          </div>

          <!-- News -->
          <div v-if="activeTab === 'news'" class="tab-pane fade show active">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">News &amp; Updates</h3>
              <div v-for="n in news" :key="n.title" class="elev-card p-3 mb-3">
                <strong>{{ n.title }}</strong>
                <div class="small text-muted">{{ n.desc }}</div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div v-if="activeTab === 'faq'" class="tab-pane fade show active">
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
          </div>
        </div>

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
  data() {
    return {
      activeTab: "resources",
      openFAQ: null,
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
    toggleFAQ(i) {
      this.openFAQ = this.openFAQ === i ? null : i;
    },
  },
};
</script>

<style scoped>
/* Same styles from HTML version, shortened here */
.page-bg { background: linear-gradient(180deg, #fff 0%, #eef3ff 100%); }
.hero { background: linear-gradient(60deg, #0b3d91 0%, #143f8c 100%); color: #fff; padding: 4rem 0 2rem; }
.badge-pill { background: rgba(255,255,255,0.15); border-radius: 999px; padding: .25rem .75rem; }
.stat-card { background:#fff; border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); padding:1rem; }
.stat-number { font-weight:800; color:#0b3d91; }
.elev-card { border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); background:#fff; }
.section-title { color:#0b3d91; font-weight:800; }
.nav-tabs .nav-link.active { border-bottom:3px solid #ff6f00; color:#0b3d91; }
.contact-chip { border:1px dashed rgba(0,0,0,.1); border-radius:999px; padding:.35rem .75rem; }
</style>
