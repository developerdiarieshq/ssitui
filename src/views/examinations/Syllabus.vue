<template>
  <div class="syllabus-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Syllabus Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Academic Syllabus</h1>
          <p class="tagline">Comprehensive course structures and curriculum details for all programs.</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Programs</span>
              <span class="qf-value">UG & PG</span>
            </li>
            <li>
              <span class="qf-label">Departments</span>
              <span class="qf-value">8+</span>
            </li>
            <li>
              <span class="qf-label">Status</span>
              <span class="qf-value">Updated 2024</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="Academic Syllabus - Students studying"
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
        <p>Loading syllabus...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <h2>Error</h2>
        <p>{{ error }}</p>
      </div>

      <!-- Main Content -->
      <div v-else>
        <!-- SYLLABUS FILTER -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-filter"></i> Filter Syllabus</h2>
            <div class="filter-controls">
              <div class="filter-dropdown">
                <select 
                  id="syllabusFilter"
                  v-model="activeFilter" 
                  @change="setFilter(activeFilter)"
                  class="filter-select"
                >
                  <option value="all">All Programs</option>
                  <option value="btech">B.Tech Programs</option>
                  <option value="mba">MBA Program</option>
                  <option value="polytechnic">Polytechnic</option>
                </select>
                <label for="syllabusFilter" class="filter-label">Select Program:</label>
              </div>
            </div>
          </div>
        </section>

        <!-- SYLLABUS TABLES -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-book"></i> Course Syllabi</h2>
            
            <!-- B.Tech Programs Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'btech'" class="syllabus-table-section">
              <h3 class="table-title">B.Tech Programs</h3>
              <div class="table-responsive">
                <table class="syllabus-table">
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Credits</th>
                      <th>Semesters</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="program in btechPrograms" :key="program.id">
                      <td>
                        <div class="program-info">
                          <strong>{{ program.name }}</strong>
                          <small>{{ program.code }}</small>
                        </div>
                      </td>
                      <td>{{ program.duration }}</td>
                      <td>{{ program.credits }}</td>
                      <td>{{ program.semesters }}</td>
                      <td>
                        <button class="download-btn" @click="downloadSyllabus(program)">
                          <i class="fas fa-download"></i> PDF
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- MBA Program Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'mba'" class="syllabus-table-section">
              <h3 class="table-title">MBA Program</h3>
              <div class="table-responsive">
                <table class="syllabus-table">
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Credits</th>
                      <th>Semesters</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="program in mbaPrograms" :key="program.id">
                      <td>
                        <div class="program-info">
                          <strong>{{ program.name }}</strong>
                          <small>{{ program.code }}</small>
                        </div>
                      </td>
                      <td>{{ program.duration }}</td>
                      <td>{{ program.credits }}</td>
                      <td>{{ program.semesters }}</td>
                      <td>
                        <button class="download-btn" @click="downloadSyllabus(program)">
                          <i class="fas fa-download"></i> PDF
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Polytechnic Programs Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'polytechnic'" class="syllabus-table-section">
              <h3 class="table-title">Polytechnic Programs</h3>
              <div class="table-responsive">
                <table class="syllabus-table">
                  <thead>
                    <tr>
                      <th>Program</th>
                      <th>Duration</th>
                      <th>Credits</th>
                      <th>Semesters</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="program in polytechnicPrograms" :key="program.id">
                      <td>
                        <div class="program-info">
                          <strong>{{ program.name }}</strong>
                          <small>{{ program.code }}</small>
                        </div>
                      </td>
                      <td>{{ program.duration }}</td>
                      <td>{{ program.credits }}</td>
                      <td>{{ program.semesters }}</td>
                      <td>
                        <button class="download-btn" @click="downloadSyllabus(program)">
                          <i class="fas fa-download"></i> PDF
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
  name: 'Syllabus',
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
      
      btechPrograms: [
        { id: 1, name: 'Computer Science Engineering', code: 'CSE', duration: '4 Years', credits: '160', semesters: '8' },
        { id: 2, name: 'Computer Science Engineering (AI)', code: 'CSE-AI', duration: '4 Years', credits: '160', semesters: '8' },
        { id: 3, name: 'Computer Science Engineering (AI & DS)', code: 'CSE-AI&DS', duration: '4 Years', credits: '160', semesters: '8' },
        { id: 4, name: 'Electronics & Communication Engineering', code: 'ECE', duration: '4 Years', credits: '160', semesters: '8' },
        { id: 5, name: 'Electrical & Electronics Engineering', code: 'EEE', duration: '4 Years', credits: '160', semesters: '8' },
        { id: 6, name: 'Mechanical Engineering', code: 'ME', duration: '4 Years', credits: '160', semesters: '8' }
      ],
      
      mbaPrograms: [
        { id: 1, name: 'Master of Business Administration', code: 'MBA', duration: '2 Years', credits: '96', semesters: '4' }
      ],
      
      polytechnicPrograms: [
        { id: 1, name: 'Computer Engineering', code: 'CE', duration: '3 Years', credits: '120', semesters: '6' },
        { id: 2, name: 'Electronics & Communication Engineering', code: 'ECE', duration: '3 Years', credits: '120', semesters: '6' },
        { id: 3, name: 'Mechanical Engineering', code: 'ME', duration: '3 Years', credits: '120', semesters: '6' }
      ]
    }
  },
  methods: {
    setFilter(filterId) {
      this.activeFilter = filterId
    },
    
    downloadSyllabus(program) {
      alert(`Downloading syllabus for ${program.name} (${program.code})`)
      // In a real application, this would trigger an actual file download
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

/* Syllabus Tables */
.syllabus-table-section {
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

.syllabus-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--card);
}

.syllabus-table th {
  background: var(--orange);
  color: #fff;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--orange);
}

.syllabus-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

.syllabus-table tr:hover {
  background: var(--bg);
}

.program-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.program-info strong {
  color: var(--ink);
  font-weight: 600;
}

.program-info small {
  color: var(--muted);
  font-size: 0.85rem;
}

.download-btn {
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

.download-btn:hover {
  background: #e55a00;
  transform: translateY(-1px);
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
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .filter-select {
    min-width: 100%;
  }
  .syllabus-table th,
  .syllabus-table td {
    padding: 0.75rem 0.5rem;
  }
}
</style>
