<template>
  <div class="results-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Results Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Examination Results</h1>
          <p class="tagline">Access your academic performance and examination results instantly.</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Results</span>
              <span class="qf-value">Live</span>
            </li>
            <li>
              <span class="qf-label">Semesters</span>
              <span class="qf-value">All</span>
            </li>
            <li>
              <span class="qf-label">Status</span>
              <span class="qf-value">Available</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="Examination Results - Academic performance"
            class="hero-img"
          />
        </picture>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content" id="content">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading results...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <h2>Error</h2>
        <p>{{ error }}</p>
      </div>

      <!-- Main Content -->
      <div v-else>
        <!-- RESULTS SEARCH -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-search"></i> Search Results</h2>
            <div class="search-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="hallTicket">Hall Ticket Number</label>
                  <input 
                    type="text" 
                    id="hallTicket" 
                    v-model="searchData.hallTicket" 
                    placeholder="Enter Hall Ticket Number"
                    class="form-input"
                  >
                </div>
                <div class="form-group">
                  <label for="rollNumber">Roll Number</label>
                  <input 
                    type="text" 
                    id="rollNumber" 
                    v-model="searchData.rollNumber" 
                    placeholder="Enter Roll Number"
                    class="form-input"
                  >
                </div>
                <div class="form-group">
                  <label for="dateOfBirth">Date of Birth</label>
                  <input 
                    type="date" 
                    id="dateOfBirth" 
                    v-model="searchData.dateOfBirth" 
                    class="form-input"
                  >
                </div>
              </div>
              <button @click="searchResults" class="search-btn">
                <i class="fas fa-search"></i> Search Results
              </button>
            </div>
          </div>
        </section>

        <!-- RESULTS FILTER -->
        <section class="card-section" v-if="showResults">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-filter"></i> Filter Results</h2>
            <div class="filter-controls">
              <div class="filter-dropdown">
                <select 
                  id="resultsFilter"
                  v-model="activeFilter" 
                  @change="setFilter(activeFilter)"
                  class="filter-select"
                >
                  <option value="all">All Results</option>
                  <option value="current">Current Semester</option>
                  <option value="previous">Previous Semesters</option>
                  <option value="supplementary">Supplementary</option>
                  <option value="revaluation">Revaluation</option>
                </select>
                <label for="resultsFilter" class="filter-label">Select Type:</label>
              </div>
            </div>
          </div>
        </section>

        <!-- RESULTS TABLES -->
        <section class="card-section" v-if="showResults">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-chart-line"></i> Examination Results</h2>
            
            <!-- Current Semester Results -->
            <div v-if="activeFilter === 'all' || activeFilter === 'current'" class="results-table-section">
              <h3 class="table-title">Current Semester Results - December 2024</h3>
              <div class="table-responsive">
                <table class="results-table">
                  <thead>
                    <tr>
                      <th>Subject Code</th>
                      <th>Subject Name</th>
                      <th>Internal</th>
                      <th>External</th>
                      <th>Total</th>
                      <th>Grade</th>
                      <th>Credits</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="result in currentResults" :key="result.id">
                      <td>{{ result.code }}</td>
                      <td>{{ result.subject }}</td>
                      <td>{{ result.internal }}</td>
                      <td>{{ result.external }}</td>
                      <td>{{ result.total }}</td>
                      <td>
                        <span class="grade" :class="result.grade.toLowerCase()">
                          {{ result.grade }}
                        </span>
                      </td>
                      <td>{{ result.credits }}</td>
                      <td>
                        <span class="status" :class="result.status.toLowerCase().replace(' ', '-')">
                          {{ result.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <!-- Semester Summary -->
              <div class="semester-summary">
                <h4>Semester Summary</h4>
                <div class="summary-grid">
                  <div class="summary-item">
                    <span class="summary-label">Total Credits:</span>
                    <span class="summary-value">{{ semesterSummary.totalCredits }}</span>
                  </div>
                  <div class="summary-item">
                    <span class="summary-label">Earned Credits:</span>
                    <span class="summary-value">{{ semesterSummary.earnedCredits }}</span>
                  </div>
                  <div class="summary-item">
                    <span class="summary-label">SGPA:</span>
                    <span class="summary-value">{{ semesterSummary.sgpa }}</span>
                  </div>
                  <div class="summary-item">
                    <span class="summary-label">CGPA:</span>
                    <span class="summary-value">{{ semesterSummary.cgpa }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Previous Semesters Results -->
            <div v-if="activeFilter === 'all' || activeFilter === 'previous'" class="results-table-section">
              <h3 class="table-title">Previous Semesters Results</h3>
              <div class="table-responsive">
                <table class="results-table">
                  <thead>
                    <tr>
                      <th>Semester</th>
                      <th>Total Credits</th>
                      <th>Earned Credits</th>
                      <th>SGPA</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="semester in previousResults" :key="semester.id">
                      <td>{{ semester.semester }}</td>
                      <td>{{ semester.totalCredits }}</td>
                      <td>{{ semester.earnedCredits }}</td>
                      <td>{{ semester.sgpa }}</td>
                      <td>
                        <span class="status" :class="semester.status.toLowerCase().replace(' ', '-')">
                          {{ semester.status }}
                        </span>
                      </td>
                      <td>
                        <button class="view-btn" @click="viewSemesterDetails(semester)">
                          <i class="fas fa-eye"></i> View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Supplementary Results -->
            <div v-if="activeFilter === 'all' || activeFilter === 'supplementary'" class="results-table-section">
              <h3 class="table-title">Supplementary Examination Results - January 2025</h3>
              <div class="table-responsive">
                <table class="results-table">
                  <thead>
                    <tr>
                      <th>Subject Code</th>
                      <th>Subject Name</th>
                      <th>Marks</th>
                      <th>Grade</th>
                      <th>Credits</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="result in supplementaryResults" :key="result.id">
                      <td>{{ result.code }}</td>
                      <td>{{ result.subject }}</td>
                      <td>{{ result.marks }}</td>
                      <td>
                        <span class="grade" :class="result.grade.toLowerCase()">
                          {{ result.grade }}
                        </span>
                      </td>
                      <td>{{ result.credits }}</td>
                      <td>
                        <span class="status" :class="result.status.toLowerCase().replace(' ', '-')">
                          {{ result.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Revaluation Results -->
            <div v-if="activeFilter === 'all' || activeFilter === 'revaluation'" class="results-table-section">
              <h3 class="table-title">Revaluation Results</h3>
              <div class="table-responsive">
                <table class="results-table">
                  <thead>
                    <tr>
                      <th>Subject Code</th>
                      <th>Subject Name</th>
                      <th>Original</th>
                      <th>Revaluation</th>
                      <th>Difference</th>
                      <th>Final Grade</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="result in revaluationResults" :key="result.id">
                      <td>{{ result.code }}</td>
                      <td>{{ result.subject }}</td>
                      <td>{{ result.original }}</td>
                      <td>{{ result.revaluation }}</td>
                      <td>
                        <span class="difference" :class="result.difference >= 0 ? 'positive' : 'negative'">
                          {{ result.difference > 0 ? '+' : '' }}{{ result.difference }}
                        </span>
                      </td>
                      <td>
                        <span class="grade" :class="result.finalGrade.toLowerCase()">
                          {{ result.finalGrade }}
                        </span>
                      </td>
                      <td>
                        <span class="status" :class="result.status.toLowerCase().replace(' ', '-')">
                          {{ result.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- DOWNLOAD SECTION -->
        <section class="card-section" v-if="showResults">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-download"></i> Download Documents</h2>
            <div class="download-options">
              <button class="download-btn" @click="downloadGradeCard">
                <i class="fas fa-file-pdf"></i> Grade Card
              </button>
              <button class="download-btn" @click="downloadConsolidatedMarksMemo">
                <i class="fas fa-file-alt"></i> Consolidated Marks Memo
              </button>
              <button class="download-btn" @click="downloadProvisionalCertificate">
                <i class="fas fa-certificate"></i> Provisional Certificate
              </button>
              <button class="download-btn" @click="downloadTranscript">
                <i class="fas fa-file-signature"></i> Transcript
              </button>
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
  name: 'Results',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      loading: false,
      error: null,
      activeFilter: 'all',
      showResults: false,
      
      searchData: {
        hallTicket: '',
        rollNumber: '',
        dateOfBirth: ''
      },
      
      currentResults: [
        { id: 1, code: 'MA101', subject: 'Mathematics-I', internal: 28, external: 45, total: 73, grade: 'B+', credits: 4, status: 'Pass' },
        { id: 2, code: 'PH101', subject: 'Physics', internal: 30, external: 42, total: 72, grade: 'B+', credits: 4, status: 'Pass' },
        { id: 3, code: 'CS101', subject: 'Programming in C', internal: 32, external: 48, total: 80, grade: 'A', credits: 4, status: 'Pass' },
        { id: 4, code: 'EC101', subject: 'Digital Electronics', internal: 29, external: 44, total: 73, grade: 'B+', credits: 4, status: 'Pass' },
        { id: 5, code: 'ME101', subject: 'Engineering Mechanics', internal: 31, external: 46, total: 77, grade: 'A-', credits: 3, status: 'Pass' },
        { id: 6, code: 'EE101', subject: 'Basic Electrical Engineering', internal: 28, external: 43, total: 71, grade: 'B+', credits: 3, status: 'Pass' }
      ],
      
      previousResults: [
        { id: 1, semester: 'Semester 1', totalCredits: 22, earnedCredits: 22, sgpa: 8.5, status: 'Completed' },
        { id: 2, semester: 'Semester 2', totalCredits: 24, earnedCredits: 24, sgpa: 8.2, status: 'Completed' },
        { id: 3, semester: 'Semester 3', totalCredits: 24, earnedCredits: 24, sgpa: 8.8, status: 'Completed' },
        { id: 4, semester: 'Semester 4', totalCredits: 24, earnedCredits: 24, sgpa: 8.6, status: 'Completed' }
      ],
      
      supplementaryResults: [
        { id: 1, code: 'MA101', subject: 'Mathematics-I', marks: 68, grade: 'B', credits: 4, status: 'Pass' },
        { id: 2, code: 'PH101', subject: 'Physics', marks: 72, grade: 'B+', credits: 4, status: 'Pass' }
      ],
      
      revaluationResults: [
        { id: 1, code: 'CS101', subject: 'Programming in C', original: 75, revaluation: 82, difference: 7, finalGrade: 'A', status: 'Updated' },
        { id: 2, code: 'EC101', subject: 'Digital Electronics', original: 70, revaluation: 68, difference: -2, finalGrade: 'B+', status: 'Updated' }
      ],
      
      semesterSummary: {
        totalCredits: 22,
        earnedCredits: 22,
        sgpa: 8.4,
        cgpa: 8.5
      }
    }
  },
  methods: {
    setFilter(filterId) {
      this.activeFilter = filterId
    },
    
    searchResults() {
      if (!this.searchData.hallTicket && !this.searchData.rollNumber && !this.searchData.dateOfBirth) {
        alert('Please enter at least one search criteria')
        return
      }
      
      this.loading = true
      // Simulate API call
      setTimeout(() => {
        this.loading = false
        this.showResults = true
        alert('Results found! Displaying student results.')
      }, 1500)
    },
    
    viewSemesterDetails(semester) {
      alert(`Viewing detailed results for ${semester.semester}`)
    },
    
    downloadGradeCard() {
      alert('Downloading Grade Card...')
    },
    
    downloadConsolidatedMarksMemo() {
      alert('Downloading Consolidated Marks Memo...')
    },
    
    downloadProvisionalCertificate() {
      alert('Downloading Provisional Certificate...')
    },
    
    downloadTranscript() {
      alert('Downloading Transcript...')
    }
  }
}
</script>

<style scoped>
/* CSS Variables matching CSE.vue */
:root {
  --navy:#1e40af; --navy-2:#153a9c;
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* Hero Section */
.hero {
  position: relative;
  color: #fff;
  background: var(--ink);
  padding: 80px 0;
  overflow: hidden;
}

.hero .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.15), rgba(0,0,0,.2));
}

.hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 2rem;
  align-items: center;
  padding: 3.2rem 0;
}

.hero-copy .title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-copy .tagline {
  color: #dbeafe;
  margin: .5rem 0 1.25rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.quickfacts {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.quickfacts li {
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: .75rem;
  padding: .6rem .9rem;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.qf-label {
  display: block;
  font-size: .75rem;
  letter-spacing: .02em;
  opacity: .9;
  margin-bottom: 0.5rem;
}

.qf-value {
  font-size: 1.05rem;
  font-weight: 800;
}

.hero-art {
  text-align: center;
}

.hero-img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
  object-fit: cover;
}

/* Content Sections */
.content {
  padding: 1.8rem 0 2.6rem;
}

.card-section {
  margin: 1.2rem 0;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.section-title i {
  color: var(--orange);
}

/* Search Form */
.search-form {
  margin-top: 1rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 600;
  color: var(--ink);
  font-size: 0.9rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

.search-btn {
  background: var(--orange);
  color: #fff;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-btn:hover {
  background: #e55a00;
  transform: translateY(-1px);
}

/* Filter Controls */
.filter-controls {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-dropdown {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-label {
  font-weight: 600;
  color: var(--ink);
  margin: 0;
  order: 2;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  order: 1;
}

.filter-select:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

.filter-select:hover {
  border-color: var(--orange);
}

/* Results Tables */
.results-table-section {
  margin-bottom: 2rem;
}

.table-title {
  color: var(--ink);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  border-left: 4px solid var(--orange);
  padding-left: 1rem;
}

.table-responsive {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.results-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--card);
}

.results-table th {
  background: var(--orange);
  color: #fff;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--orange);
}

.results-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

.results-table tr:hover {
  background: var(--bg);
}

/* Grade Styling */
.grade {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
}

.grade.a, .grade.a-plus {
  background: #d4edda;
  color: #155724;
}

.grade.b, .grade.b-plus {
  background: #fff3cd;
  color: #856404;
}

.grade.c, .grade.c-plus {
  background: #f8d7da;
  color: #721c24;
}

.grade.d {
  background: #e2e3e5;
  color: #383d41;
}

.grade.f {
  background: #f5c6cb;
  color: #721c24;
}

/* Status Styling */
.status {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.85rem;
}

.status.pass, .status.completed {
  background: #d4edda;
  color: #155724;
}

.status.fail, .status.incomplete {
  background: #f8d7da;
  color: #721c24;
}

.status.updated {
  background: #d1ecf1;
  color: #0c5460;
}

/* Difference Styling */
.difference {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
}

.difference.positive {
  background: #d4edda;
  color: #155724;
}

.difference.negative {
  background: #f8d7da;
  color: #721c24;
}

/* Semester Summary */
.semester-summary {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.semester-summary h4 {
  color: var(--ink);
  margin-bottom: 1rem;
  font-weight: 700;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #fff;
  border-radius: 6px;
  border: 1px solid var(--border);
}

.summary-label {
  font-weight: 500;
  color: var(--muted);
}

.summary-value {
  font-weight: 700;
  color: var(--ink);
  font-size: 1.1rem;
}

/* Action Buttons */
.view-btn, .download-btn {
  background: var(--orange);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.view-btn:hover, .download-btn:hover {
  background: #e55a00;
  transform: translateY(-1px);
}

/* Download Options */
.download-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.download-btn {
  padding: 1rem;
  font-size: 1rem;
  justify-content: center;
}

/* Loading and Error States */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--orange);
  border-radius: 50%;
  margin-bottom: 20px;
}

.error-state h2 {
  color: #e74c3c;
  margin-bottom: 10px;
}

.error-state p {
  color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-art {
    order: -1;
  }
  .quickfacts {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
  .hero-copy .title {
    font-size: 1.8rem;
  }
  .hero-copy .tagline {
    font-size: 1rem;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .filter-select {
    min-width: 100%;
  }
  .results-table th,
  .results-table td {
    padding: 0.75rem 0.5rem;
  }
  .summary-grid {
    grid-template-columns: 1fr;
  }
  .download-options {
    grid-template-columns: 1fr;
  }
}
</style>
