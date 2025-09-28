<template>
  <div class="timetables-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Timetables Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Examination Timetables</h1>
          <p class="tagline">Schedule and timing details for all examinations and academic activities.</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Sessions</span>
              <span class="qf-value">FN & AN</span>
            </li>
            <li>
              <span class="qf-label">Duration</span>
              <span class="qf-value">3 Hours</span>
            </li>
            <li>
              <span class="qf-label">Status</span>
              <span class="qf-value">Current</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="Examination Timetables - Students in exam hall"
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
        <p>Loading timetables...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <h2>Error</h2>
        <p>{{ error }}</p>
      </div>

      <!-- Main Content -->
      <div v-else>
        <!-- TIMETABLE FILTER -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-filter"></i> Filter Timetables</h2>
            <div class="filter-controls">
              <div class="filter-dropdown">
                <select 
                  id="timetableFilter"
                  v-model="activeFilter" 
                  @change="setFilter(activeFilter)"
                  class="filter-select"
                >
                  <option value="all">All Timetables</option>
                  <option value="see">Semester End Examinations</option>
                  <option value="cie">Continuous Internal Evaluation</option>
                  <option value="supplementary">Supplementary Examinations</option>
                  <option value="cbt">CBT Examinations</option>
                </select>
                <label for="timetableFilter" class="filter-label">Select Type:</label>
              </div>
            </div>
          </div>
        </section>

        <!-- EXAMINATION TIMETABLES -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-calendar-alt"></i> Examination Timetables</h2>
            
            <!-- SEE Timetables Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'see'" class="timetable-table-section">
              <h3 class="table-title">Semester End Examinations (SEE) - December 2024</h3>
              <div class="table-responsive">
                <table class="timetable-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Subject</th>
                      <th>Program</th>
                      <th>Hall</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exam in seeTimetable" :key="exam.id">
                      <td>{{ exam.date }}</td>
                      <td>{{ exam.day }}</td>
                      <td>
                        <span class="time-slot" :class="exam.session">
                          {{ exam.time }}
                        </span>
                      </td>
                      <td>
                        <div class="subject-info">
                          <strong>{{ exam.subject }}</strong>
                          <small>{{ exam.code }}</small>
                        </div>
                      </td>
                      <td>{{ exam.program }}</td>
                      <td>{{ exam.hall }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- CIE Timetables Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'cie'" class="timetable-table-section">
              <h3 class="table-title">Continuous Internal Evaluation (CIE) - December 2024</h3>
              <div class="table-responsive">
                <table class="timetable-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Subject</th>
                      <th>Program</th>
                      <th>Hall</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exam in cieTimetable" :key="exam.id">
                      <td>{{ exam.date }}</td>
                      <td>{{ exam.day }}</td>
                      <td>
                        <span class="time-slot" :class="exam.session">
                          {{ exam.time }}
                        </span>
                      </td>
                      <td>
                        <div class="subject-info">
                          <strong>{{ exam.subject }}</strong>
                          <small>{{ exam.code }}</small>
                        </div>
                      </td>
                      <td>{{ exam.program }}</td>
                      <td>{{ exam.hall }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Supplementary Examinations Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'supplementary'" class="timetable-table-section">
              <h3 class="table-title">Supplementary Examinations - January 2025</h3>
              <div class="table-responsive">
                <table class="timetable-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Subject</th>
                      <th>Program</th>
                      <th>Hall</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exam in supplementaryTimetable" :key="exam.id">
                      <td>{{ exam.date }}</td>
                      <td>{{ exam.day }}</td>
                      <td>
                        <span class="time-slot" :class="exam.session">
                          {{ exam.time }}
                        </span>
                      </td>
                      <td>
                        <div class="subject-info">
                          <strong>{{ exam.subject }}</strong>
                          <small>{{ exam.code }}</small>
                        </div>
                      </td>
                      <td>{{ exam.program }}</td>
                      <td>{{ exam.hall }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- CBT Examinations Table -->
            <div v-if="activeFilter === 'all' || activeFilter === 'cbt'" class="timetable-table-section">
              <h3 class="table-title">Computer Based Test (CBT) Examinations - December 2024</h3>
              <div class="table-responsive">
                <table class="timetable-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Day</th>
                      <th>Time</th>
                      <th>Subject</th>
                      <th>Program</th>
                      <th>Lab</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="exam in cbtTimetable" :key="exam.id">
                      <td>{{ exam.date }}</td>
                      <td>{{ exam.day }}</td>
                      <td>
                        <span class="time-slot cbt">
                          {{ exam.time }}
                        </span>
                      </td>
                      <td>
                        <div class="subject-info">
                          <strong>{{ exam.subject }}</strong>
                          <small>{{ exam.code }}</small>
                        </div>
                      </td>
                      <td>{{ exam.program }}</td>
                      <td>{{ exam.lab }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- EXAMINATION GUIDELINES -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-info-circle"></i> Important Guidelines</h2>
            <div class="guidelines-grid">
              <div class="guideline-item">
                <h4><i class="fas fa-clock text-orange"></i> Reporting Time</h4>
                <p>Students must report 15 minutes before the commencement of examination.</p>
              </div>
              <div class="guideline-item">
                <h4><i class="fas fa-id-card text-orange"></i> Required Documents</h4>
                <p>Hall ticket and College ID card are mandatory for all examinations.</p>
              </div>
              <div class="guideline-item">
                <h4><i class="fas fa-mobile-alt text-orange"></i> Prohibited Items</h4>
                <p>Mobile phones, calculators, and electronic devices are not allowed.</p>
              </div>
              <div class="guideline-item">
                <h4><i class="fas fa-user-check text-orange"></i> Attendance</h4>
                <p>Students must sign the attendance sheet before leaving the examination hall.</p>
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
  name: 'Timetables',
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
      
      seeTimetable: [
        { id: 1, date: '2024-12-16', day: 'Monday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Mathematics-I', code: 'MA101', program: 'All B.Tech', hall: 'A1, A2, A3' },
        { id: 2, date: '2024-12-16', day: 'Monday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Physics', code: 'PH101', program: 'All B.Tech', hall: 'A1, A2, A3' },
        { id: 3, date: '2024-12-17', day: 'Tuesday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', hall: 'B1, B2' },
        { id: 4, date: '2024-12-17', day: 'Tuesday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', hall: 'C1, C2' },
        { id: 5, date: '2024-12-18', day: 'Wednesday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Engineering Mechanics', code: 'ME101', program: 'ME', hall: 'D1, D2' },
        { id: 6, date: '2024-12-18', day: 'Wednesday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Basic Electrical Engineering', code: 'EE101', program: 'EEE', hall: 'E1, E2' }
      ],
      
      cieTimetable: [
        { id: 1, date: '2024-12-20', day: 'Friday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Mathematics-I', code: 'MA101', program: 'All B.Tech', hall: 'A1, A2' },
        { id: 2, date: '2024-12-20', day: 'Friday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Physics', code: 'PH101', program: 'All B.Tech', hall: 'A1, A2' },
        { id: 3, date: '2024-12-21', day: 'Saturday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', hall: 'B1, B2' },
        { id: 4, date: '2024-12-21', day: 'Saturday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', hall: 'C1, C2' }
      ],
      
      supplementaryTimetable: [
        { id: 1, date: '2025-01-15', day: 'Monday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Mathematics-I', code: 'MA101', program: 'All B.Tech', hall: 'A1, A2' },
        { id: 2, date: '2025-01-15', day: 'Monday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Physics', code: 'PH101', program: 'All B.Tech', hall: 'A1, A2' },
        { id: 3, date: '2025-01-16', day: 'Tuesday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', hall: 'B1, B2' },
        { id: 4, date: '2025-01-16', day: 'Tuesday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', hall: 'C1, C2' }
      ],
      
      cbtTimetable: [
        { id: 1, date: '2024-12-23', day: 'Monday', time: '10:00 AM - 12:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', lab: 'CS Lab-1' },
        { id: 2, date: '2024-12-23', day: 'Monday', time: '2:00 PM - 4:00 PM', session: 'an', subject: 'Data Structures', code: 'CS201', program: 'CSE', lab: 'CS Lab-2' },
        { id: 3, date: '2024-12-24', day: 'Tuesday', time: '10:00 AM - 12:00 PM', session: 'fn', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', lab: 'EC Lab-1' },
        { id: 4, date: '2024-12-24', day: 'Tuesday', time: '2:00 PM - 4:00 PM', session: 'an', subject: 'Microprocessors', code: 'EC201', program: 'ECE', lab: 'EC Lab-2' }
      ]
    }
  },
  methods: {
    setFilter(filterId) {
      this.activeFilter = filterId
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

/* Timetable Tables */
.timetable-table-section {
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

.timetable-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--card);
}

.timetable-table th {
  background: var(--orange);
  color: #fff;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid var(--orange);
}

.timetable-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}

.timetable-table tr:hover {
  background: var(--bg);
}

.time-slot {
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.9rem;
}

.time-slot.fn {
  background: #fff3cd;
  color: #856404;
}

.time-slot.an {
  background: #d1ecf1;
  color: #0c5460;
}

.time-slot.cbt {
  background: #d4edda;
  color: #155724;
}

.subject-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.subject-info strong {
  color: var(--ink);
  font-weight: 600;
}

.subject-info small {
  color: var(--muted);
  font-size: 0.85rem;
}

/* Guidelines Grid */
.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.guideline-item {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
}

.guideline-item h4 {
  color: var(--ink);
  margin-bottom: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.guideline-item p {
  color: var(--muted);
  line-height: 1.6;
  margin: 0;
}

.text-orange {
  color: var(--orange) !important;
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
  .timetable-table th,
  .timetable-table td {
    padding: 0.75rem 0.5rem;
  }
  .guidelines-grid {
    grid-template-columns: 1fr;
  }
}
</style>
