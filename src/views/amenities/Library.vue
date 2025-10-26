<template>
  <div class="library-page">
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

        <div class="row align-items-center mt-3 gy-4">
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
              alt="SSIT Library - Students studying in the library"
              src="@/assets/campuslife/students-in-college-library-studying.jpg"
            />
          </div>
        </div>

        <!-- Stats -->
        <div class="row g-3 mt-3" aria-label="Library summary statistics">
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
      <div class="container">

    <!-- STICKY SUB NAV (nav-pills) -->
    <nav id="subnav" class="subnav" aria-label="Section navigation">
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
      <!-- Overview -->
      <section :id="tabsMap.overview" class="card-section overview-section" v-show="activeTab==='overview'">
        <div class="elev-card p-4 p-md-5">
          <h2 class="section-title h3">About Library</h2>
          <p class="section-subtitle">Central Library • Departmental Sections • Academic Support</p>
          <p>
            The SSIT Library System consists of a Central Library with 6 departmental sections (Libraries), which collectively support the teaching, research and extension programmes of the Institute. All students, faculty members and employees of the Institute are entitled to make use of the Library facilities on taking library membership.
          </p>
          <p>
            The Library, besides having 52,937 volumes and digital library with huge collection of e-books for engineering, science, Management and humanities offers library services through its various divisions.
          </p>
          <p class="mb-0">
            <strong>Area & Capacity:</strong> Plinth Area: 435 sq.m | Seating Capacity: 200
          </p>
        </div>
      </section>

          <!-- Resources -->
          <section :id="tabsMap.resources" class="card-section" v-show="activeTab==='resources'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Resources &amp; Services</h3>
              <p class="text-muted">Collections • Digital platforms • Access tools</p>
              
              <!-- Collection Summary -->
              <div class="row g-4 mt-2 mb-4">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Collection Summary</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-book me-2 text-warning"></i><strong>Total Titles:</strong> 9,498</li>
                      <li><i class="fa-solid fa-bookmark me-2 text-danger"></i><strong>Total Volumes:</strong> 48,789</li>
                      <li><i class="fa-solid fa-compact-disc me-2 text-info"></i><strong>NPTEL CD-ROMs:</strong> 2,657</li>
                      <li><i class="fa-solid fa-file-alt me-2 text-success"></i><strong>Project Reports:</strong> 950</li>
                      <li><i class="fa-solid fa-newspaper me-2 text-secondary"></i><strong>Journals:</strong> 100+ (National & International)</li>
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
                      <li><i class="fa-solid fa-scroll me-2 text-danger"></i><strong>SHODHA SINDHU:</strong> E-resources</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Department-wise Collections -->
              <div class="elev-card p-4">
                <h4 class="h6 text-uppercase text-muted mb-3">Department-wise Collections</h4>
                <div class="table-responsive">
                  <table class="table table-sm">
                    <thead>
                      <tr>
                        <th>Department</th>
                        <th>Titles</th>
                        <th>Volumes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td><strong>Electronics and Communication Engineering</strong></td><td>1,930</td><td>8,600</td></tr>
                      <tr><td><strong>Computer Science Engineering</strong></td><td>1,610</td><td>7,582</td></tr>
                      <tr><td><strong>Electrical and Electronics Engineering</strong></td><td>1,260</td><td>6,514</td></tr>
                      <tr><td><strong>Mechanical Engineering</strong></td><td>1,370</td><td>7,745</td></tr>
                      <tr><td><strong>Computer Science and Engineering (AI & ML)</strong></td><td>350</td><td>1,000</td></tr>
                      <tr><td><strong>Artificial Intelligence and Data Science</strong></td><td>350</td><td>500</td></tr>
                      <tr><td><strong>Diploma in Electronics and Communication Engineering</strong></td><td>580</td><td>3,300</td></tr>
                      <tr><td><strong>Diploma in Electrical and Electronics Engineering</strong></td><td>580</td><td>3,064</td></tr>
                      <tr><td><strong>Diploma in Computer Science and Engineering</strong></td><td>460</td><td>2,455</td></tr>
                      <tr><td><strong>Master of Business Administration</strong></td><td>1,000</td><td>7,868</td></tr>
                      <tr><td><strong>SC/ST Students Book Bank</strong></td><td>650</td><td>2,889</td></tr>
                      <tr><td><strong>Reference Books</strong></td><td>-</td><td>7,145</td></tr>
                      <tr><td><strong>Circulation Books</strong></td><td>-</td><td>35,589</td></tr>
                      <tr class="table-primary"><td><strong>Total</strong></td><td><strong>9,498</strong></td><td><strong>48,789</strong></td></tr>
                    </tbody>
                  </table>
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
              <div class="row g-4 mt-2">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Core Services</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-robot me-2 text-success"></i>Fully Automated</li>
                      <li><i class="fa-solid fa-door-open me-2 text-primary"></i>Open Access System</li>
                      <li><i class="fa-solid fa-exchange me-2 text-warning"></i>Circulation (Issues & Returns)</li>
                      <li><i class="fa-solid fa-search me-2 text-danger"></i>Reference</li>
                      <li><i class="fa-solid fa-book-open me-2 text-secondary"></i>Reading</li>
                      <li><i class="fa-solid fa-desktop me-2 text-info"></i>Online Public Access Catalogue (OPAC)</li>
                      <li><i class="fa-solid fa-hand-holding me-2 text-success"></i>Book Lending Service</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Additional Services</h4>
                    <ul class="list-unstyled mb-0">
                      <li><i class="fa-solid fa-copy me-2 text-primary"></i>Photo Copying Services</li>
                      <li><i class="fa-solid fa-calendar-check me-2 text-warning"></i>Reservation Facility</li>
                      <li><i class="fa-solid fa-building me-2 text-success"></i>Department Libraries</li>
                      <li><i class="fa-solid fa-newspaper me-2 text-danger"></i>Newspapers for Hostels</li>
                      <li><i class="fa-solid fa-bell me-2 text-secondary"></i>Current Awareness Services</li>
                      <li><i class="fa-solid fa-file-alt me-2 text-info"></i>Project Reports & Newspapers</li>
                      <li><i class="fa-solid fa-archive me-2 text-primary"></i>Back Volumes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Digital -->
          <section :id="tabsMap.digital" class="card-section" v-show="activeTab==='digital'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Digital Library</h3>
              <div class="row g-4 mt-2">
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Digital Resources</h4>
                    <div class="table-responsive">
                      <table class="table table-sm">
                        <thead>
                          <tr><th>S.No</th><th>Title</th><th>Course</th></tr>
                        </thead>
                        <tbody>
                          <tr><td>1</td><td>JST</td><td>J-GATE SCIENCE AND TECHNOLOGY</td></tr>
                          <tr><td>2</td><td>DELNET</td><td>E-journals</td></tr>
                          <tr><td>3</td><td>NDL</td><td>NDL India</td></tr>
                          <tr><td>4</td><td>SHODHA SINDHU</td><td>ONLINE E-RESOURCE REQUISITION SYSTEMS</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="elev-card p-4 h-100">
                    <h4 class="h6 text-uppercase text-muted mb-3">Library Automation</h4>
                    <p>The Central Library has computerized all its activities including Acquisition, Cataloguing, Circulation and stock verification using Clarity 2000 software.</p>
                    <p>The Central Library using barcode technology for computerized circulation system and stock verification. The Central Library has developed Clarity 2000 software facilities for bar coding of books and ID cards.</p>
                    <p><strong>Features:</strong></p>
                    <ul class="mb-0">
                      <li>Computerized circulation system</li>
                      <li>Barcode technology</li>
                      <li>Stock verification</li>
                      <li>Book and ID card bar coding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Vision -->
          <section :id="tabsMap.vision" class="card-section" v-show="activeTab==='vision'">
            <div class="elev-card p-4 p-md-5">
              <h3 class="h4">Vision</h3>
              <p>We impart futuristic technical education and instill high patterns of discipline through our dedicated management and staff set to global standards, making our students technologically superior and ethically strong who in turn shall improve the quality and disciplined Life of the human race.</p>
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
  </div>
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
      activeTab: "overview",
      openFAQ: null,
      tabsMap: {
        overview: "overview",
        resources: "resources",
        facilities: "facilities", 
        membership: "membership",
        services: "services",
        digital: "digital",
        timings: "timings",
        vision: "vision",
        team: "team",
        downloads: "downloads",
        news: "news",
        faq: "faq"
      },
      stats: [
        { value: "48,789", label: "Total Volumes", icon: "fa-solid fa-book fa-lg text-warning" },
        { value: "9,498", label: "Total Titles", icon: "fa-solid fa-bookmark fa-lg text-primary" },
        { value: "200", label: "Seating Capacity", icon: "fa-solid fa-chair fa-lg text-success" },
        { value: "435 sq.m", label: "Plinth Area", icon: "fa-solid fa-ruler-combined fa-lg text-danger" },
      ],
      tabs: [
        { id: "overview", label: "Overview", icon: "fa-solid fa-info-circle" },
        { id: "resources", label: "Resources & Services", icon: "fa-solid fa-layer-group" },
        { id: "facilities", label: "Facilities", icon: "fa-solid fa-building-columns" },
        { id: "membership", label: "Membership", icon: "fa-solid fa-id-card" },
        { id: "services", label: "Services Offered", icon: "fa-solid fa-hands-holding-circle" },
        { id: "digital", label: "Digital Library", icon: "fa-solid fa-wifi" },
        { id: "timings", label: "Timings", icon: "fa-regular fa-clock" },
        { id: "vision", label: "Vision", icon: "fa-solid fa-eye" },
        { id: "team", label: "Library Team", icon: "fa-solid fa-people-group" },
        { id: "downloads", label: "Downloads", icon: "fa-solid fa-download" },
        { id: "news", label: "News/Updates", icon: "fa-regular fa-newspaper" },
        { id: "faq", label: "FAQ", icon: "fa-regular fa-circle-question" },
      ],
      facilities: [
        { name: "Central Library", capacity: "200 seats", access: "All members", hours: "Mon–Sat, 8:00–20:00", icon: "fa-solid fa-building-columns text-primary" },
        { name: "Department Libraries", capacity: "6 sections", access: "Department members", hours: "Mon–Sat, 8:00–20:00", icon: "fa-solid fa-book-open-reader text-success" },
        { name: "Digital Library", capacity: "Computer systems", access: "Library members", hours: "Mon–Sat, 8:00–20:00", icon: "fa-solid fa-computer text-warning" },
        { name: "Reference Section", capacity: "Study area", access: "All members", hours: "Mon–Sat, 8:00–20:00", icon: "fa-solid fa-search text-info" },
        { name: "Photocopy Services", capacity: "Available", access: "Paid service", hours: "Mon–Sat, 9:00–17:00", icon: "fa-solid fa-print text-secondary" },
      ],
      membership: [
        { title: "Eligibility", text: "All Students, Faculty, Administrative staff and supporting staff of the college are entitled to become members of the central library." },
        { title: "Application", text: "The membership application forms can be obtained from circulation counter and should be submitted through proper channel." },
        { title: "Benefits", list: ["Access to 52,937 volumes", "Digital library resources", "Departmental libraries", "Reference services", "Current awareness services"] },
      ],
      timings: [
        { service: "Library Working Hours", days: "Monday–Saturday", hours: "8:00 A.M to 8:00 P.M" },
        { service: "Holidays", days: "Sundays & Public Holidays", hours: "9:00 A.M to 1:00 P.M" },
        { service: "Book Circulation", days: "Monday–Saturday", hours: "9:00 A.M to 5:00 P.M" },
        { service: "Reference Section", days: "Monday–Saturday", hours: "8:00 A.M to 8:00 P.M" },
      ],
      team: [
        { name: "G. UPENDRA RAO", degree: "MA, B.Ed., MLISc, PGDCA", role: "LIBRARIAN", photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+" },
        { name: "V. VENKATESWER RAO", degree: "BA, B.LISc", role: "Library Assistant", photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+" },
        { name: "O. VENKATA KRISHNA", degree: "BSc Computers", role: "Book Keeper", photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+" },
        { name: "M. MAHA LAKSHMI", degree: "SSC", role: "Attender", photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+" },
      ],
      downloads: [
        { label: "Membership Form", icon: "fa-solid fa-file-pdf" },
        { label: "OPAC Guide", icon: "fa-solid fa-book-open-reader" },
        { label: "DELNET Guide", icon: "fa-solid fa-network-wired" },
        { label: "E-Journal List", icon: "fa-solid fa-newspaper" },
      ],
      news: [
        { title: "Newspapers Available", desc: "We are providing English Newspapers to each student of boys and girls hostel. We keep the following English and Telugu Newspapers in the library." },
        { title: "English Newspapers", desc: "DECCAN CHRONICLE, HANS INDIA, EMPLOYMENT NEWS (Weekly)" },
        { title: "Telugu Newspapers", desc: "EENADU, ANDHRA JYOTHI, SAKSHI, NAMASTE TELANGANA, ANDHRA PRABHA" },
        { title: "Print Journals & Magazines", desc: "More than 100 Journals (National and International) related to various disciplines area available in the central library." },
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
.lead{font-size:1.05rem; color:#000; line-height:1.6}

/* PAGE BACKGROUND */
.page-bg { background: linear-gradient(180deg, #fff 0%, #eef3ff 100%); }

/* HERO */
.hero { background: var(--ink); color: #fff; padding: 2rem 0 1.5rem; }
.hero .text-white-50 { color: rgba(255, 255, 255, 0.9) !important; font-size: 1.1rem; }
.badge-pill { background: rgba(255,255,255,0.15); border-radius: 999px; padding: .25rem .75rem; }
.stat-card { background:#fff; border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); padding:1rem; color: #0b3d91; }
.stat-number { font-weight:800; color:#0b3d91; }

/* SUBNAV */
.subnav{ 
  position:sticky; 
  top:0; 
  z-index:20; 
  background:#fff; 
  border-bottom:1px solid var(--border);
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
}
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 1rem; overflow-x:auto; overflow-y:hidden; justify-content:flex-start; flex-wrap:nowrap; }
.chip{ 
  border:1px solid var(--border); 
  background:#fff; 
  color:var(--ink); 
  border-radius:999px; 
  padding:.6rem 1rem; 
  font-weight:600; 
  display:flex; 
  align-items:center; 
  gap:.6rem; 
  white-space:nowrap;
  transition:all 0.3s ease;
  cursor:pointer;
  flex-shrink:0;
  box-shadow:0 2px 4px rgba(0,0,0,0.05);
  font-size:0.95rem;
}
.chip i{ color:var(--orange) }
.chip:hover{ 
  background:var(--orange); 
  color:#fff; 
  border-color:var(--orange);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
}
.chip:hover i{ color:#fff }
.chip.active{ 
  border-color:var(--orange); 
  background:var(--orange); 
  color:#fff;
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
  transform:translateY(-2px);
  font-weight:700;
}
.chip.active i{ color:#fff }

/* CONTENT */
.content{ padding:1.8rem 0 2.6rem }
.card-section{ margin:1.2rem 0 }
.card{ 
  background:var(--card); 
  border:1px solid var(--border); 
  border-radius:1rem; 
  padding:1.5rem 1.25rem; 
  box-shadow:0 6px 24px rgba(0,0,0,.06);
  transition:all 0.3s ease;
}
.card:hover{
  box-shadow:0 8px 32px rgba(0,0,0,.1);
  transform:translateY(-2px);
}
.elev-card { border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); background:#fff; }
.section-title{ 
  font-size:1.35rem; 
  font-weight:800; 
  color:var(--ink); 
  display:flex; 
  align-items:center; 
  gap:.6rem; 
  margin:0 0 1rem 
}
.section-title i{ color:var(--orange) }
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

/* RESPONSIVE */
@media (max-width: 1024px){
  .hero-inner{ grid-template-columns:1fr; }
  .hero-art .hero-img{ max-width:350px; max-height:250px; }
}
@media (max-width: 768px){
  .grid-2{ grid-template-columns:1fr }
  .grid-3{ grid-template-columns:1fr }
  .contact-card .contact-grid{ grid-template-columns:1fr }
  .quickfacts li{ min-width:140px }
  .hero-art .hero-img{ max-width:300px; max-height:200px; }
  .outcome-grid{ grid-template-columns:1fr }
  .outcome-card{ flex-direction:column; gap:.8rem }
  .outcome-number{ align-self:flex-start }
  .accordion-header{ padding:1rem 1.2rem }
  .accordion-title{ font-size:1rem }
  .accordion-count{ font-size:.75rem; padding:.15rem .5rem }
}
</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        