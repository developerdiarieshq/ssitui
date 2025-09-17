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
        @click="activeTab = tab.id"
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
import { ref } from "vue";
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const tabs = [
  { id: "docs", label: "Documents", icon: "fa-regular fa-file-pdf" },
  { id: "programs", label: "Programs Offered", icon: "fa-solid fa-graduation-cap" },
  { id: "admissions", label: "Admission Requirements", icon: "fa-regular fa-id-card" },
  { id: "fees", label: "Fee Structure", icon: "fa-solid fa-indian-rupee-sign" },
  { id: "eligibility", label: "Eligibility Criteria", icon: "fa-solid fa-user-check" },
];

const activeTab = ref("docs");

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
  --navy: #1e40af;
  --orange: #f97316;
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

.hero {
  background: linear-gradient(135deg, var(--navy), #3b82f6);
  color: var(--white);
  padding: 3rem 1rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 14px rgb(0 0 0 / 0.15);
  text-align: center;
}

.title {
  font-size: 2.4rem;
  font-weight: 900;
  margin: 0 0 0.3rem 0;
}

.subtitle {
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
  opacity: 0.85;
}

.meta {
  font-size: 1rem;
  margin-bottom: 1rem;
  opacity: 0.7;
}

.intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.tab {
  border: 2px solid var(--border-base);
  background: var(--white);
  border-radius: 0.75rem;
  padding: 0.6rem 1.25rem;
  font-weight: 600;
  color: var(--navy);
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  user-select: none;
}

.tab:hover {
  background-color: var(--navy);
  color: var(--white);
}

.tab.active {
  background-color: var(--navy);
  color: var(--white);
  border-color: var(--navy);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.section-title i {
  color: var(--orange);
  font-size: 1.5rem;
}

.panel {
  margin-bottom: 2rem;
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
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.05);
  padding: 1.25rem;
  transition: box-shadow 0.3s;
}

.elev-card:hover {
  box-shadow: 0 5px 20px rgb(0 0 0 / 0.1);
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
  padding: 0.4em 0.9em;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.25s ease;
}

.btn-sm:hover {
  background-color: #ea7516;
}

.ticks {
  list-style: disc;
  margin-left: 1.5rem;
  color: var(--text-dark);
  font-size: 1rem;
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
}

.table tbody tr:nth-child(odd) {
  background-color: #fff4e5;
}

.last-updated {
  text-align: right;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
