<template>
  <div class="mandatory-disclosure-page">
    <Header/>
    <NavBar/>
    <section class="md-page">
    <!-- Hero -->
    <header class="hero">
      <div class="container">
        <h1 class="hero-title">Mandatory Disclosure</h1>
        <p class="hero-subtitle">
          Transparency in Higher Education — as per AICTE Guidelines
        </p>
        <p class="hero-updated">Information updated as on {{ today }}</p>

        <div class="hero-badges">
          <span class="badge">AICTE ID: 1-3245204</span>
          <span class="badge">Established: 2001</span>
          <span class="badge">VIPASSANA Educational Trust</span>
          <span class="badge">Region: South-Central</span>
        </div>
      </div>
    </header>

    <!-- Tabs -->
    <div class="container">
      <nav class="tabs" role="tablist" aria-label="Mandatory Disclosure Sections">
        <button
          v-for="t in tabs"
          :key="t.key"
          class="tab"
          :class="{ active: activeTab === t.key }"
          role="tab"
          :aria-selected="activeTab === t.key ? 'true' : 'false'"
          @click="activeTab = t.key"
        >
          <i :class="t.icon" class="me-2"></i>{{ t.label }}
        </button>
      </nav>

      <!-- Institution Info -->
      <section v-if="activeTab === 'institution'" class="section">
        <div class="grid-2">
          <div class="card">
            <h5 class="card-title">Institution Information</h5>
            <ul class="kv">
              <li><span>Institution Name</span><strong>Sai Spurthi Institute of Technology (SSIT)</strong></li>
              <li><span>Permanent AICTE ID</span><strong>1-3245204</strong></li>
              <li><span>Year of Establishment</span><strong>2001</strong></li>
              <li><span>Society / Trust</span><strong>VIPASSANA Educational Trust</strong></li>
              <li><span>Type</span><strong>Private Self-Financing</strong></li>
              <li><span>Region</span><strong>South-Central</strong></li>
            </ul>
          </div>

          <div class="card">
            <h5 class="card-title">Address & Location</h5>
            <ul class="kv">
              <li><span>Campus Address</span><strong>B. Gangaram (Post), Sathupalli (Mandal), Khammam (District), Telangana – 507303</strong></li>
              <li><span>Trust Address</span><strong>933 Vivekananda Nagar Colony, Kukatpally, Hyderabad, Telangana – 500072</strong></li>
              <li><span>Phone</span><strong>08761-288544</strong></li>
              <li><span>Email</span><strong>sssit.principal@gmail.com</strong></li>
              <li><span>Website</span><strong>www.saispurthi.ac.in</strong></li>
            </ul>
          </div>
        </div>

        <div class="grid-3 mt-3">
          <div class="card">
            <h6 class="card-sub">Statutory Approvals</h6>
            <ul class="bullets">
              <li>AICTE Approval: Valid for AY 2023-24 (Application No: 1-36458076014)</li>
              <li>Affiliation: JNTU Hyderabad (JNTUH)</li>
              <li>State Board (Diploma): SBTET, Hyderabad</li>
              <li>NAAC: Accredited “B” Grade</li>
              <li>ISO 9001:2008 Certified</li>
            </ul>
          </div>
          <div class="card">
            <h6 class="card-sub">Leadership</h6>
            <ul class="kv">
              <li><span>Chairman</span><strong>Dr. B. Pardha Saradhi Reddy (CMD, Hetero Drugs)</strong></li>
              <li><span>Secretary & Correspondent</span><strong>Sri D. Prabhakar Reddy</strong></li>
              <li><span>Trustee</span><strong>Smt. Bandi Anvida</strong></li>
              <li><span>Principal</span><strong>[Name] — 9963084558</strong></li>
              <li><span>Director</span><strong>[Name] — 9491109564</strong></li>
            </ul>
          </div>

          <div class="card">
            <h6 class="card-sub">Student Services</h6>
            <ul class="bullets">
              <li>Anti-Ragging Committee & Grievance Redressal Cell</li>
              <li>Internal Committee (IC) for Women, SC/ST Committee</li>
              <li>Training & Placement Cell, Counseling Services</li>
              <li>Hostels, Sports Complex, Medical Center, Transport</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Programs & Intake -->
      <section v-else-if="activeTab === 'programs'" class="section">
        <div class="card">
          <div class="card-head">
            <h5 class="card-title mb-0">Approved Programs & Intake (2023-24)</h5>
            <input
              v-model="programSearch"
              type="text"
              class="search"
              placeholder="Search program, course or level…"
              aria-label="Search programs"
            />
          </div>

          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Program</th>
                  <th>Course</th>
                  <th>Intake</th>
                  <th>Affiliating Body</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in filteredPrograms" :key="row.id">
                  <td>{{ row.level }}</td>
                  <td>{{ row.program }}</td>
                  <td>{{ row.course }}</td>
                  <td>{{ row.intake }}</td>
                  <td>{{ row.affiliation }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- Fees -->
      <section v-else-if="activeTab === 'fees'" class="section">
        <div class="card">
          <h5 class="card-title">Fee Structure (AY 2023-24)</h5>
          <div class="table-wrap">
            <table class="table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Annual Tuition Fee</th>
                  <th>Other Fees</th>
                  <th>Total Annual Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="fee in feeRows" :key="fee.program">
                  <td>{{ fee.program }}</td>
                  <td>{{ fee.tuition }}</td>
                  <td>{{ fee.other }}</td>
                  <td>{{ fee.total }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="muted mt-2">* As notified by competent authorities. Management quota follows applicable regulatory norms.</p>
        </div>
      </section>

      <!-- Documents with Viewer -->
      <section v-else-if="activeTab === 'documents'" class="section">
        <div class="card">
          <div class="card-head">
            <h5 class="card-title mb-0">Documents & Downloads</h5>
            <input
              v-model="docSearch"
              type="text"
              class="search"
              placeholder="Search document title or year…"
              aria-label="Search documents"
            />
          </div>

          <div class="row">
            <!-- Left: List -->
            <div class="col-md-4">
              <div class="doc-grid">
                <button
                  v-for="doc in filteredDocs"
                  :key="doc.title + doc.year"
                  class="doc w-100 text-start"
                  @click="viewDoc(doc)"
                >
                  <i class="far fa-file-pdf doc-icon"></i>
                  <div class="doc-meta">
                    <strong class="doc-title">{{ doc.title }}</strong>
                    <span class="doc-sub">{{ doc.year }}</span>
                  </div>
                  <span class="doc-cta">View</span>
                </button>
              </div>
            </div>

            <!-- Right: PDF Viewer -->
            <div class="col-md-8">
              <div v-if="currentDoc" class="pdf-viewer shadow-sm">
                <h6 class="fw-bold mb-2">
                  <i class="fas fa-file-pdf text-danger me-2"></i>
                  {{ currentDoc.title }} - {{ currentDoc.year }}
                </h6>
                <iframe
                  :src="currentDoc.href"
                  width="100%"
                  height="600px"
                  style="border:1px solid #ddd; border-radius:6px;"
                ></iframe>
                <div class="mt-2">
                  <a :href="currentDoc.href" target="_blank" class="btn btn-sm btn-orange">
                    <i class="fas fa-download me-1"></i> Download
                  </a>
                </div>
              </div>
              <div v-else class="alert alert-info text-center">
                <i class="fas fa-info-circle me-2"></i>
                Select a document from the left to preview
              </div>
            </div>
          </div>

          <div class="muted mt-2">
            Missing a file? Write to <a href="mailto:sssit.principal@gmail.com">sssit.principal@gmail.com</a>
          </div>
        </div>
      </section>

      <!-- Governance -->
      <section v-else-if="activeTab === 'governance'" class="section">
        <div class="grid-2">
          <div class="card">
            <h5 class="card-title">Faculty Information (Snapshot)</h5>
            <ul class="kv">
              <li><span>Total Faculty</span><strong>{{ faculty.total }}</strong></li>
              <li><span>PhD Holders</span><strong>{{ faculty.phd }}</strong></li>
              <li><span>M.Tech / M.E.</span><strong>{{ faculty.mtech }}</strong></li>
              <li><span>Faculty-Student Ratio</span><strong>As per AICTE norms (1:15)</strong></li>
            </ul>
            <h6 class="card-sub mt-2">Department-wise Faculty</h6>
            <ul class="bullets">
              <li v-for="d in faculty.depts" :key="d.name">{{ d.name }}: {{ d.count }}</li>
            </ul>
          </div>

          <div class="card">
            <h5 class="card-title">Infrastructure & Facilities</h5>
            <ul class="bullets">
              <li>Campus Area: <strong>[ Acres ]</strong> • Built-up Area: <strong>[ Sq. m ]</strong></li>
              <li>33+ Specialized Laboratories • Smart Classrooms • Central Library (Digital)</li>
              <li>Hostels (Boys & Girls), Cafeteria, Sports Complex, Medical Centre</li>
              <li>Transport, Internet (High-speed), Banking/ATM on campus</li>
            </ul>
            <h6 class="card-sub mt-2">Research & Development</h6>
            <ul class="bullets">
              <li>3 Research Laboratories • Ongoing Projects • Publications • Industry Tie-ups</li>
            </ul>
          </div>
        </div>

        <div class="card mt-3">
          <h5 class="card-title">Industry Partnerships (MoUs)</h5>
          <div class="chips">
            <span class="chip" v-for="p in partners" :key="p">{{ p }}</span>
          </div>
        </div>
      </section>
    </div>
    </section>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../../components/Header.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'
import { ref, computed } from 'vue'

const today = new Date().toLocaleDateString('en-IN', {
  day: '2-digit', month: 'short', year: 'numeric'
})

const tabs = [
  { key: 'institution', label: 'Institution Info', icon: 'fas fa-landmark' },
  { key: 'programs', label: 'Programs & Intake', icon: 'fas fa-th-list' },
  { key: 'fees', label: 'Fees', icon: 'fas fa-rupee-sign' },
  { key: 'documents', label: 'Documents', icon: 'far fa-file-alt' },
  { key: 'governance', label: 'Governance & Services', icon: 'fas fa-sitemap' },
]
const activeTab = ref('institution')

/* Programs */
const programs = ref([
  { id: 1, level: 'Undergraduate', program: 'Engineering & Technology', course: 'Computer Science & Engineering', intake: 120, affiliation: 'JNTUH' },
  { id: 2, level: 'Undergraduate', program: 'Engineering & Technology', course: 'CSE (AI & Machine Learning)', intake: 60, affiliation: 'JNTUH' },
  { id: 3, level: 'Undergraduate', program: 'Engineering & Technology', course: 'CSE (AI & Data Science)', intake: 60, affiliation: 'JNTUH' },
  { id: 4, level: 'Undergraduate', program: 'Engineering & Technology', course: 'Electronics & Communication', intake: 60, affiliation: 'JNTUH' },
  { id: 5, level: 'Undergraduate', program: 'Engineering & Technology', course: 'Electrical & Electronics', intake: 30, affiliation: 'JNTUH' },
  { id: 6, level: 'Undergraduate', program: 'Engineering & Technology', course: 'Mechanical Engineering', intake: 30, affiliation: 'JNTUH' },
  { id: 7, level: 'Postgraduate', program: 'Management', course: 'MBA', intake: 60, affiliation: 'JNTUH' },
  { id: 8, level: 'Diploma', program: 'Engineering & Technology', course: 'Computer Science', intake: 60, affiliation: 'State Board' },
  { id: 9, level: 'Diploma', program: 'Engineering & Technology', course: 'Electronics & Communication', intake: 30, affiliation: 'State Board' },
  { id: 10, level: 'Diploma', program: 'Engineering & Technology', course: 'Electrical & Electronics', intake: 30, affiliation: 'State Board' },
  { id: 11, level: 'Diploma', program: 'Engineering & Technology', course: 'Mechanical Engineering', intake: 30, affiliation: 'State Board' },
])
const programSearch = ref('')
const filteredPrograms = computed(() => {
  const q = programSearch.value.trim().toLowerCase()
  if (!q) return programs.value
  return programs.value.filter(r =>
    [r.level, r.program, r.course, r.affiliation].some(v =>
      String(v).toLowerCase().includes(q)
    )
  )
})

/* Fees */
const feeRows = ref([
  { program: 'B.Tech (Counselling)', tuition: '₹70,000', other: 'As applicable', total: 'As applicable' },
  { program: 'B.Tech (Management)', tuition: '₹70,000', other: 'As applicable', total: 'As applicable' },
  { program: 'MBA (Counselling)', tuition: '₹54,000', other: 'As applicable', total: 'As applicable' },
  { program: 'MBA (Management)', tuition: '₹54,000', other: 'As applicable', total: 'As applicable' },
  { program: 'Diploma', tuition: '₹14,900', other: 'As applicable', total: 'As applicable' },
])

/* Documents */
const docs = ref([
  { title: 'AICTE Extension of Approval', year: '2023-24', href: '/docs/AICTE_EOA_2023_24.pdf' },
  { title: 'AICTE Extension of Approval', year: '2022-23', href: '/docs/AICTE_EOA_2022_23.pdf' },
  { title: 'AICTE Extension of Approval', year: '2021-22', href: '/docs/AICTE_EOA_2021_22.pdf' },
  { title: 'University Affiliation', year: 'JNTUH', href: '/docs/JNTUH_Affiliation.pdf' },
  { title: 'NAAC Assessment Report', year: 'Grade B', href: '/docs/NAAC_Report.pdf' },
  { title: 'ISO 9001:2008 Certificate', year: 'ISO', href: '/docs/ISO_9001_2008.pdf' },
  { title: 'Fire Safety Certificate', year: 'Latest', href: '/docs/Fire_Safety.pdf' },
  { title: 'Building Approval Certificate', year: 'Latest', href: '/docs/Building_Approval.pdf' },
])
const docSearch = ref('')
const currentDoc = ref(null)
const filteredDocs = computed(() => {
  const q = docSearch.value.trim().toLowerCase()
  if (!q) return docs.value
  return docs.value.filter(d =>
    [d.title, d.year].some(v => String(v).toLowerCase().includes(q))
  )
})
const viewDoc = (doc) => {
  currentDoc.value = doc
}

/* Governance */
const faculty = {
  total: '[Number]',
  phd: '[Number]',
  mtech: '[Number]',
  depts: [
    { name: 'CSE', count: 10 },
    { name: 'ECE', count: '[Number]' },
    { name: 'EEE', count: '[Number]' },
    { name: 'MECH', count: '[Number]' },
    { name: 'H&S', count: '[Number]' },
    { name: 'MBA', count: '[Number]' },
    { name: 'Polytechnic', count: '[Number]' },
  ]
}
const partners = [
  'Microsoft Windows', 'CISCO Networking Academy', 'TASK',
  'Wipro', 'Oracle Academy', 'Mission 10X', 'Campus Connect', 'ESwetcha'
]
</script>

<style scoped>
/* Theme */
.md-page{--ink:#1a2238;--orange:#FF7701;--muted:#6b7280;--card:#fff;--bg:#f7f7fb;}
.container{width:min(1160px,92vw);margin-inline:auto}

/* Hero */
.hero{
  background: var(--ink);
  color:#fff;
  padding:3rem 0;
  margin-bottom:18px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}
.hero .container{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
}
.hero-title{
  font-weight:800;
  font-size:clamp(32px,5vw,48px);
  margin:0 0 12px;
  text-align:center;
}
.hero-subtitle{
  opacity:.9;
  margin:0 0 8px;
  font-size:1.2rem;
  text-align:center;
}
.hero-updated{
  opacity:.75;
  margin:0 0 20px;
  text-align:center;
}
.hero-badges{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  justify-content:center;
}
.badge{
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.2);
  padding:8px 16px;
  border-radius:999px;
  font-weight:700;
  font-size:0.9rem;
}

/* Tabs */
.tabs{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 6px;justify-content:center}
.tab{background:#fff;border:1px solid #e9e9f4;border-radius:999px;padding:8px 14px;font-weight:700;letter-spacing:.2px;color:var(--ink);transition:.25s;outline:0}
.tab.active{background:var(--orange);border-color:var(--orange);color:#fff;box-shadow:0 6px 18px rgba(255,119,1,.25)}

/* Cards & grids */
.section{margin:10px 0 26px}
.grid-2{display:grid;grid-template-columns:1fr;gap:16px}
.grid-3{display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.grid-2{grid-template-columns:1fr 1fr}.grid-3{grid-template-columns:repeat(3,1fr)}}
.card{background:var(--card);border-radius:14px;box-shadow:0 6px 20px rgba(20,20,40,.06);padding:18px}
.card-title{margin:0 0 10px;color:var(--ink);font-weight:800}
.card-sub{margin:0;color:var(--ink);font-weight:800}

/* Key-value & bullets */
.kv{list-style:none;padding:0;margin:0}
.kv li{display:flex;justify-content:space-between;gap:14px;padding:9px 0;border-bottom:1px dashed #eee}
.kv li:last-child{border-bottom:0}
.kv span{color:var(--muted)}
.kv strong{color:var(--ink)}
.bullets{padding-left:18px;margin:10px 0 0}
.bullets li{margin:.25rem 0}

/* Table */
.table-wrap{overflow:auto;border:1px solid #eee;border-radius:10px}
.table{width:100%;border-collapse:collapse;background:#fff}
.table th,.table td{padding:12px 14px;border-bottom:1px solid #f0f0f5;text-align:left}
.table th{background:#fafbff;font-weight:800;color:#2a2e43}
.search{border:1px solid #e9e9f4;border-radius:8px;padding:8px 12px;max-width:320px;width:100%}
.card-head{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:10px}

/* Documents */
.doc-grid{display:grid;grid-template-columns:1fr;gap:12px}
.doc{display:flex;align-items:center;gap:12px;border:1px solid #eee;border-radius:12px;padding:12px;background:#fff;text-decoration:none;color:inherit;transition:.2s;cursor:pointer}
.doc:hover{border-color:var(--orange);box-shadow:0 8px 18px rgba(255,119,1,.08);background:#fafafa}
.doc-icon{font-size:28px;color:var(--orange)}
.doc-title{display:block}
.doc-sub{display:block;color:var(--muted);font-size:.9rem}
.doc-cta{margin-left:auto;font-weight:800;color:var(--orange)}
.pdf-viewer{background:#fff;padding:15px;border-radius:10px}

/* Chips */
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{border:1px solid #e9e9f4;border-radius:999px;padding:6px 10px;background:#fff;font-weight:700}
.muted{color:var(--muted);font-size:.92rem}

/* Custom button */
.btn-orange{background:var(--orange);color:#fff;font-weight:600;border-radius:6px;padding:6px 12px}
.btn-orange:hover{background:#e65f00}
</style>
