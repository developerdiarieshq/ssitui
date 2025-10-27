<template>
  <div class="academic-regulations">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Academic Regulations</h1>
        <p class="subtitle">Comprehensive Guidelines for Academic Excellence</p>
        <p class="meta">Affiliated to JNTUH, Hyderabad | Approved by AICTE</p>
        <p class="intro">
          Academic regulations prepared and approved by the Academic Council,
          the highest academic body in the college.
        </p>
      </div>
    </header>

    <!-- NAV TABS -->
    <nav class="tabs container" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="setTab(tab.id)"
        :aria-selected="activeTab === tab.id"
        role="tab"
      >
        <i :class="tab.icon"></i><span class="tab-label">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- CONTENT -->
    <main class="container content" role="tabpanel">
      <!-- DOCUMENTS -->
      <section v-show="activeTab === 'docs'" class="panel card">
        <h2 class="section-title" aria-label="Regulations documents">
          <i class="fa-regular fa-file-pdf"></i><span>Regulations Documents</span>
        </h2>
        <div class="grid-2">
          <div class="elev-card">
            <h3>UG Programs</h3>
            <ul class="doc-list">
              <li v-for="doc in docsUG" :key="doc.id">
                <span>{{ doc.title }}</span>
                <a
                  :href="doc.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-sm"
                  :aria-label="'Download ' + doc.title"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
          <div class="elev-card">
            <h3>PG Programs</h3>
            <ul class="doc-list">
              <li v-for="doc in docsPG" :key="doc.id">
                <span>{{ doc.title }}</span>
                <a
                  :href="doc.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-sm"
                  :aria-label="'Download ' + doc.title"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- PROGRAMS -->
      <section v-show="activeTab === 'programs'" class="panel card">
        <h2 class="section-title" aria-label="Programs offered">
          <i class="fa-solid fa-graduation-cap"></i><span>Programs Offered</span>
        </h2>
        <div class="grid-3">
          <div class="elev-card">
            <h3>Diploma</h3>
            <ul>
              <li>DECE — 30 seats</li>
              <li>DEEE — 30 seats</li>
              <li>DCS — 60 seats</li>
            </ul>
          </div>
          <div class="elev-card">
            <h3>Undergraduate</h3>
            <ul>
              <li>Computer Science Engineering (CSE) — 120 seats</li>
              <li>Computer Science Engineering (AIML) — 60 seats</li>
              <li>Artificial Intelligence & Data Science (AID) — 60 seats</li>
              <li>Electronics & Communication Engineering (ECE) — 60 seats</li>
              <li>Electrical & Electronics Engineering (EEE) — 30 seats</li>
              <li>Mechanical Engineering (MECH) — 30 seats</li>
            </ul>
          </div>
          <div class="elev-card">
            <h3>Postgraduate</h3>
            <ul>
              <li>Master of Business Administration (MBA) — 60 seats</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ADMISSIONS -->
      <section v-show="activeTab === 'admissions'" class="panel card">
        <h2 class="section-title" aria-label="Admissions">
          <i class="fa-regular fa-id-card"></i><span>Admission Requirements</span>
        </h2>
        <ul class="ticks" role="list">
          <li>Eligibility: 10+2 with Mathematics, Physics, Chemistry</li>
          <li>EAMCET qualification required (excludes NRI quota)</li>
          <li>Merit based admissions</li>
          <li>10% seats reserved for diploma holders via ECET</li>
          <li>Admissions in management/NRI quota based on merit and first class eligibility</li>
        </ul>
      </section>

      <!-- FEES -->
      <section v-show="activeTab === 'fees'" class="panel card">
        <h2 class="section-title" aria-label="Fees and payments">
          <i class="fa-solid fa-indian-rupee-sign"></i><span>Fee Structure</span>
        </h2>
        <div class="table-wrap">
          <table class="table" role="table" aria-label="Fee structure table">
            <thead>
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Duration</th>
                <th scope="col">Counselling Fee</th>
                <th scope="col">Management Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Diploma</td>
                <td>3 Years</td>
                <td>₹14,900 / Year</td>
                <td>₹14,900 / Year</td>
              </tr>
              <tr>
                <td>B.Tech</td>
                <td>4 Years</td>
                <td>₹70,000 / Year</td>
                <td>₹70,000 / Year</td>
              </tr>
              <tr>
                <td>MBA</td>
                <td>2 Years</td>
                <td>₹54,000 / Year</td>
                <td>₹54,000 / Year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- ELIGIBILITY -->
      <section v-show="activeTab === 'eligibility'" class="panel card">
        <h2 class="section-title" aria-label="Eligibility requirements">
          <i class="fa-solid fa-user-check"></i><span>Eligibility Criteria</span>
        </h2>
        <div class="table-wrap">
          <table class="table" role="table" aria-label="Eligibility criteria table">
            <thead>
              <tr>
                <th scope="col">Programme</th>
                <th scope="col">For Seats Through Counselling</th>
                <th scope="col">Management Quota</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B.Tech</td>
                <td>EAMCET (Code: SAIS)</td>
                <td>10+2 MPC with 60% or EAMCET</td>
              </tr>
              <tr>
                <td>MBA</td>
                <td>ICET (Code: SAIS)</td>
                <td>Any Degree with 60%+</td>
              </tr>
              <tr>
                <td>Diploma</td>
                <td>CEEP (Code: SAIS)</td>
                <td>SSC with 60%+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <p class="last-updated" role="contentinfo">
        Last Updated: <time datetime="2025-09-17">17 Sep 2025</time>
      </p>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const router = useRouter();
const route = useRoute();

const tabs = [
  { id: "docs", label: "Documents", icon: "fa-regular fa-file-pdf", path: "/academic-regulations/documents" },
  { id: "programs", label: "Programs Offered", icon: "fa-solid fa-graduation-cap", path: "/academic-regulations/programs" },
  { id: "admissions", label: "Admission Requirements", icon: "fa-regular fa-id-card", path: "/academic-regulations/admissions" },
  { id: "fees", label: "Fee Structure", icon: "fa-solid fa-indian-rupee-sign", path: "/academic-regulations/fees" },
  { id: "eligibility", label: "Eligibility Criteria", icon: "fa-solid fa-user-check", path: "/academic-regulations/eligibility" },
];

const activeTab = ref("docs");

const setTab = (id) => {
  activeTab.value = id;
  const tab = tabs.find(t => t.id === id);
  if (tab && tab.path) {
    router.push(tab.path);
  }
};

// Initialize active tab based on route
onMounted(() => {
  const pathToKey = {
    "/academic-regulations/documents": "docs",
    "/academic-regulations/programs": "programs",
    "/academic-regulations/admissions": "admissions",
    "/academic-regulations/fees": "fees",
    "/academic-regulations/eligibility": "eligibility"
  };
  const key = pathToKey[route.path];
  if (key) {
    activeTab.value = key;
  }
});

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathToKey = {
    "/academic-regulations/documents": "docs",
    "/academic-regulations/programs": "programs",
    "/academic-regulations/admissions": "admissions",
    "/academic-regulations/fees": "fees",
    "/academic-regulations/eligibility": "eligibility"
  };
  const key = pathToKey[newPath];
  if (key) {
    activeTab.value = key;
  }
});

const docsUG = [
  { id: 1, title: "R22 Academic Regulations", href: "/docs/R22-BTech.pdf" },
  { id: 2, title: "R18 Academic Regulations", href: "/docs/R18-BTech.pdf" },
];

const docsPG = [
  { id: 3, title: "R22 MBA Regulations", href: "/docs/R22-MBA.pdf" },
  { id: 4, title: "R19 MBA Regulations", href: "/docs/R19-MBA.pdf" },
];
</script>

<style scoped>
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --navy: #1e40af;
  --bg-light: #f7fafc;
  --white: #ffffff;
  --border-base: #e5e7eb;
  --text-dark: #17223b;
  --text-muted: #6b7280;
}

.academic-regulations {
  background: var(--bg-light);
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: var(--text-dark);
}

.container {
  width: min(1180px, 92%);
  margin: auto;
  padding: 0 1rem;
}

.content {
  padding: 2rem 0;
}

.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.title {
  font-weight: 800;
  font-size: 2.2rem;
  margin: 0 0 0.3rem 0;
  color: white;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  color: white;
}

.meta {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  color: white;
}

.intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
  color: white;
}

.tabs {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  margin: 1rem auto;
  width: 100%;
  max-width: none;
  display: flex;
  gap: .5rem;
  padding: .6rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
}

.tab {
  border: 1px solid var(--border-base);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: .5rem .9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: .5rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  min-width: fit-content;
  flex-shrink: 0;
}

.tab i {
  color: var(--orange);
}

.tab:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.tab:hover i {
  color: #fff;
}

.tab.active {
  border-color: var(--orange);
  background: var(--orange);
  color: #fff;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
  font-weight: 700;
}

.tab.active i {
  color: #fff;
}

.section-title {
  font-weight: 700;
  color: var(--orange);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.section-title i {
  color: var(--orange);
  font-size: 1.5rem;
}

.panel {
  margin-bottom: 3rem;
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.grid-2 {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.grid-3 {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.elev-card {
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.elev-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}

.elev-card h3 {
  color: var(--ink);
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.elev-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.elev-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 119, 1, 0.1);
  color: var(--text-dark);
  font-weight: 500;
}

.elev-card li:last-child {
  border-bottom: none;
}

.doc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.doc-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
  font-weight: 500;
}

.btn-sm {
  background-color: var(--orange);
  color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid var(--orange);
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.btn-sm:hover {
  background-color: var(--white);
  color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}

.ticks {
  list-style: none;
  padding: 0;
  margin: 0;
  color: var(--text-dark);
  font-size: 1rem;
}

.ticks li {
  position: relative;
  padding: 0.75rem 0 0.75rem 2rem;
  border-bottom: 1px solid rgba(255, 119, 1, 0.1);
  font-weight: 500;
}

.ticks li:last-child {
  border-bottom: none;
}

.ticks li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0.75rem;
  color: var(--orange);
  font-weight: bold;
  font-size: 1.1rem;
}

.table-wrap {
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

.table th,
.table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-base);
  text-align: left;
}

.table thead th {
  background-color: var(--orange);
  color: var(--white);
  font-weight: 600;
  border: none;
  padding: 1rem;
  text-align: center;
}

.table tbody tr:nth-child(odd) {
  background-color: rgba(255, 119, 1, 0.05);
}

.table tbody tr:hover {
  background-color: rgba(255, 119, 1, 0.1);
}

.table tbody td {
  border-color: rgba(255, 119, 1, 0.1);
  font-weight: 500;
  padding: 1rem;
  text-align: center;
}

.table tbody tr:first-child td {
  border-top: 2px solid var(--orange);
}

.table {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.last-updated {
  text-align: right;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 119, 1, 0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .panel {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .elev-card {
    padding: 1rem;
  }
  
  .tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
