<template>
  <div class="coe-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Controller of Examinations Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">{{ data?.title || 'Controller of Examinations' }}</h1>
          <p class="tagline">Ensuring Academic Excellence • Fair Assessment • Transparent Evaluation</p>
          <ul class="quickfacts" aria-label="Quick facts" v-if="data?.faculty">
            <li>
              <span class="qf-label">Established</span>
              <span class="qf-value">2015</span>
            </li>
            <li>
              <span class="qf-label">Status</span>
              <span class="qf-value">Autonomous</span>
            </li>
            <li>
              <span class="qf-label">Programs</span>
              <span class="qf-value">UG & PG</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="Controller of Examinations - Academic Assessment"
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
        <p>Loading content...</p>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <h2>Error</h2>
        <p>{{ error }}</p>
      </div>
      
      <!-- Main Content -->
      <div v-else>
      
            <!-- ABOUT -->
            <section class="card-section" v-if="data?.about">
              <div class="card">
                <h2 class="section-title"><i class="fa-solid fa-building"></i> About the Office</h2>
                <p class="lead">{{ data.about.description }}</p>

                <!-- Interactive Stats -->
                <div class="stats-grid">
                  <div class="stat-card" v-for="(stat, index) in stats" :key="stat.label">
                    <div class="stat-icon">
                      <i :class="stat.icon"></i>
                    </div>
                    <div class="stat-content">
                      <div class="stat-number">{{ stat.value }}</div>
                      <div class="stat-label">{{ stat.label }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

        <!-- RESPONSIBILITIES -->
        <section class="card-section" v-if="data?.responsibilities">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-tasks"></i> Responsibilities</h2>

            <!-- Pre-Examination Process -->
            <div class="responsibility-section">
              <h3 class="responsibility-title">{{ data.responsibilities.preExamination.title }}</h3>
              <ul class="responsibility-list">
                <li v-for="(item, index) in data.responsibilities.preExamination.items"
                    :key="index"
                    class="responsibility-item">
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Process During Examination -->
            <div class="responsibility-section">
              <h3 class="responsibility-title">{{ data.responsibilities.duringExamination.title }}</h3>
              <ul class="responsibility-list">
                <li v-for="(item, index) in data.responsibilities.duringExamination.items"
                    :key="index"
                    class="responsibility-item">
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <!-- Post-Examination Process -->
            <div class="responsibility-section">
              <h3 class="responsibility-title">{{ data.responsibilities.postExamination.title }}</h3>
              <ul class="responsibility-list">
                <li v-for="(item, index) in data.responsibilities.postExamination.items"
                    :key="index"
                    class="responsibility-item">
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="alert alert-info mt-4" v-if="data.responsibilities.note">
              <i class="fas fa-info-circle me-2"></i>
              {{ data.responsibilities.note }}
            </div>
          </div>
        </section>

        <!-- HALL TICKETS -->
        <section class="card-section" v-if="data?.hallTickets">
          <div class="card hall-tickets-card">
            <h2 class="section-title"><i class="fa-solid fa-ticket"></i> Issue of Hall Tickets for Autonomous Examinations</h2>

            <!-- Interactive Process Steps -->
            <div class="process-steps">
              <div class="step" v-for="(step, index) in hallTicketSteps" :key="index"
                   :class="{ completed: index < currentStep, active: index === currentStep }">
                <div class="step-number">{{ index + 1 }}</div>
                <div class="step-content">
                  <h4>{{ step.title }}</h4>
                  <p>{{ step.description }}</p>
                </div>
              </div>
            </div>

            <!-- Interactive Button -->
            <div class="text-center mt-3">
              <button class="btn btn-primary" @click="nextStep">
                <i class="fas fa-arrow-right me-2"></i>
                {{ currentStep < hallTicketSteps.length - 1 ? 'Next Step' : 'Complete Process' }}
              </button>
            </div>

            <div class="alert alert-warning mt-3">
              <h4><i class="fas fa-exclamation-triangle me-2"></i>Important Note:</h4>
              <p class="mb-0">{{ data.hallTickets.note }}</p>
            </div>
          </div>
        </section>

        <!-- EVALUATION & CBT -->
        <section class="card-section">
          <div class="grid-2">
            <div class="card" v-if="data?.evaluation">
              <h2 class="section-title-sm"><i class="fa-solid fa-clipboard-check"></i> Evaluation</h2>
              <p>{{ data.evaluation.description }}</p>
            </div>

            <div class="card" v-if="data?.cbtExamination">
              <h2 class="section-title-sm"><i class="fa-solid fa-laptop"></i> CBT Examination</h2>
              <p>{{ data.cbtExamination.description }}</p>
            </div>
          </div>
        </section>

        <!-- REVALUATION -->
        <section class="card-section" v-if="data?.revaluation">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-redo"></i> Revaluation of Assessed Answer Book/s</h2>
            
            <!-- Interactive Timeline -->
            <div class="revaluation-timeline">
              <div class="timeline-item">
                <div class="timeline-marker">
                  <i class="fas fa-clock"></i>
                </div>
                <div class="timeline-content">
                  <h4>Application Period</h4>
                  <p>{{ data.revaluation.description }}</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <i class="fas fa-user-check"></i>
                </div>
                <div class="timeline-content">
                  <h4>Independent Evaluation</h4>
                  <p>{{ data.revaluation.process }}</p>
                </div>
              </div>
              
              <div class="timeline-item">
                <div class="timeline-marker">
                  <i class="fas fa-percentage"></i>
                </div>
                <div class="timeline-content">
                  <h4>Criteria Check</h4>
                  <p>{{ data.revaluation.criteria }}</p>
                </div>
              </div>
            </div>
            
            <!-- Interactive Calculator -->
            <div class="calculator-section">
              <h4>Revaluation Criteria Calculator</h4>
              <div class="calculator">
                <div class="calc-input">
                  <label>Original Marks:</label>
                  <input type="number" v-model="originalMarks" placeholder="Enter original marks" max="70">
                </div>
                <div class="calc-input">
                  <label>Revaluation Marks:</label>
                  <input type="number" v-model="revaluationMarks" placeholder="Enter revaluation marks" max="70">
                </div>
                <div class="calc-result">
                  <div class="result-text" :class="{ 'eligible': isRevaluationEligible, 'not-eligible': !isRevaluationEligible }">
                    {{ revaluationResult }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- DISCIPLINE -->
        <section class="card-section" v-if="data?.discipline">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-gavel"></i> Discipline at Exam Hall</h2>

            <div class="grid-2">
              <div class="exam-timings interactive-card" v-if="data.discipline.examTimings">
                <h3 class="h5 text-primary">{{ data.discipline.examTimings.title }}</h3>
                <p class="lead"><strong>{{ data.discipline.examTimings.duration }}</strong></p>

                <!-- Interactive Clock -->
                <div class="exam-clock">
                  <div class="clock-display">
                    <div class="time-slot" v-for="(session, index) in examSessions" :key="index"
                         :class="{ active: activeTimeSlot === index }"
                         :style="{ '--session-color': session.color }">
                      <div class="time-icon">
                        <i :class="session.icon"></i>
                      </div>
                      <div class="time-info">
                        <div class="time-label">{{ session.label }}</div>
                        <div class="time-value">{{ session.time }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="guidelines interactive-card" v-if="data.discipline.guidelines">
                <h3 class="h5 text-primary">{{ data.discipline.guidelines.title }}</h3>
                <p class="mb-3">{{ data.discipline.guidelines.description }}</p>

                <h4 class="h6">{{ data.discipline.guidelines.subtitle }}</h4>

                <!-- Interactive Checklist -->
                <div class="guidelines-checklist">
                  <div class="checklist-item" v-for="(item, index) in data.discipline.guidelines.items" :key="index">
                    <label class="checklist-label">
                      <input type="checkbox" v-model="guidelinesChecked[index]" @change="updateGuidelinesProgress">
                      <span class="checkmark"></span>
                      <span class="checklist-text">{{ item }}</span>
                    </label>
                  </div>
                </div>

                <div class="guidelines-progress">
                  <div class="progress-text">Guidelines Progress: {{ guidelinesProgress }}%</div>
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: guidelinesProgress + '%' }"></div>
                  </div>
                </div>
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
import coeData from './coe-data.json'

export default {
  name: 'Coe',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      data: null,
      loading: true,
      error: null,
      
      // Interactive data
      currentStep: 0,
      originalMarks: null,
      revaluationMarks: null,
      activeTimeSlot: 0,
      guidelinesChecked: [],
      
      // Static data for interactive elements
      stats: [
        { label: 'Years of Service', value: '9+', icon: 'fas fa-calendar-alt' },
        { label: 'Programs Covered', value: 'UG & PG', icon: 'fas fa-graduation-cap' },
        { label: 'Examinations', value: 'CIE & SEE', icon: 'fas fa-clipboard-check' },
        { label: 'Status', value: 'Autonomous', icon: 'fas fa-certificate' }
      ],
      
      hallTicketSteps: [
        { title: 'Online Registration', description: 'Register for semester end examinations through online system' },
        { title: 'Fee Payment', description: 'Complete semester payment dues to proceed' },
        { title: 'Attendance Check', description: 'Ensure required percentage of attendance is met' },
        { title: 'Download Hall Ticket', description: 'Print hall ticket from examination portal' }
      ],
      
      examSessions: [
        { label: 'Morning Session', time: '10:00 AM - 1:00 PM', icon: 'fas fa-sun', color: '#ff6b35' },
        { label: 'Afternoon Session', time: '2:00 PM - 5:00 PM', icon: 'fas fa-moon', color: '#4a90e2' }
      ]
    }
  },
  computed: {
    isRevaluationEligible() {
      if (!this.originalMarks || !this.revaluationMarks) return false
      const difference = Math.abs(this.revaluationMarks - this.originalMarks)
      return difference >= 11 // 15% of 70 marks
    },
    
    revaluationResult() {
      if (!this.originalMarks || !this.revaluationMarks) {
        return 'Enter both marks to check eligibility'
      }
      const difference = Math.abs(this.revaluationMarks - this.originalMarks)
      if (difference >= 11) {
        return `✅ Eligible for revaluation (Difference: ${difference} marks)`
      } else {
        return `❌ Not eligible (Difference: ${difference} marks, minimum required: 11 marks)`
      }
    },
    
    guidelinesProgress() {
      if (this.guidelinesChecked.length === 0) return 0
      const checked = this.guidelinesChecked.filter(Boolean).length
      return Math.round((checked / this.guidelinesChecked.length) * 100)
    }
  },
  
      async mounted() {
        try {
          await this.loadData()
          this.initializeGuidelinesChecklist()
          this.startTimeSlotRotation()
        } catch (err) {
          this.error = 'Failed to load content'
          console.error('Error loading COE data:', err)
        } finally {
          this.loading = false
        }
      },
  
  methods: {
    async loadData() {
      this.data = coeData
    },
    
    
    nextStep() {
      if (this.currentStep < this.hallTicketSteps.length - 1) {
        this.currentStep++
      } else {
        this.currentStep = 0 // Reset to beginning
      }
    },
    
    
    initializeGuidelinesChecklist() {
      if (this.data?.discipline?.guidelines?.items) {
        this.guidelinesChecked = new Array(this.data.discipline.guidelines.items.length).fill(false)
      }
    },
    
    updateGuidelinesProgress() {
      // This is handled by the computed property
    },
    
    startTimeSlotRotation() {
      setInterval(() => {
        this.activeTimeSlot = (this.activeTimeSlot + 1) % this.examSessions.length
      }, 3000)
    },
    
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

.hall-tickets-card {
  padding: 1rem;
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

.section-title-sm {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.section-title-sm i {
  color: var(--orange);
}

.lead {
  font-size: 1.05rem;
  color: #000;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}


/* Grid Layouts */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}


/* Interactive Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  border: 1px dashed var(--border);
  border-radius: .9rem;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  background: var(--card);
}

.stat-card:hover {
  border-color: var(--orange);
  background: rgba(249,115,22,0.05);
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--orange);
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: var(--ink);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
}

/* Responsibilities Section */
.responsibility-section {
  margin-bottom: 2rem;
}

.responsibility-title {
  color: var(--ink);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-left: 4px solid var(--orange);
  padding-left: 1rem;
}

.responsibility-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.responsibility-item {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.responsibility-item:hover {
  background: var(--bg);
  border-color: var(--orange);
  transform: translateX(5px);
}

.responsibility-item span {
  color: var(--ink);
  line-height: 1.5;
}

.interactive-bullets {
  list-style: none;
  padding: 0;
}

.bullet-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.bullet-item:hover {
  background: var(--bg);
  border-color: var(--orange);
  transform: translateX(5px);
}

.bullet-icon {
  color: var(--orange);
  margin-top: 0.2rem;
  font-size: 0.9rem;
}

/* Process Steps */
.process-steps {
  margin: 1rem 0;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  opacity: 0.5;
  transform: scale(0.95);
}

.step.active {
  opacity: 1;
  transform: scale(1);
  background: var(--orange);
  color: white;
  box-shadow: 0 8px 25px rgba(249,115,22,0.3);
}

.step.completed {
  opacity: 0.8;
  background: #d4edda;
  color: #155724;
}

.step-number {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
}

.step.active .step-number {
  background: rgba(255, 255, 255, 0.3);
}

.step.completed .step-number {
  background: #28a745;
  color: white;
}

.step-content h4 {
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.step-content p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.9rem;
}

/* Progress Bars */
.progress-container, .guidelines-progress {
  margin-top: 1rem;
}

.progress-label, .progress-text {
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--orange);
  border-radius: 4px;
  transition: width 0.8s ease;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
}

/* Toggle Switch */
.toggle-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.toggle-label {
  font-weight: 500;
  color: var(--ink);
}

.toggle-switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 30px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .toggle-slider {
  background-color: var(--orange);
}

input:checked + .toggle-slider:before {
  transform: translateX(30px);
}

.toggle-text {
  font-size: 0.9rem;
  color: var(--muted);
}

/* Timeline */
.revaluation-timeline {
  margin: 2rem 0;
  position: relative;
}

.revaluation-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
}

.timeline-marker {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange), #ff8c42);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  z-index: 2;
  position: relative;
}

.timeline-content {
  flex: 1;
  padding-top: 0.5rem;
}

.timeline-content h4 {
  color: var(--ink);
  margin-bottom: 0.5rem;
  font-weight: 800;
}

/* Calculator */
.calculator-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.calculator-section h4 {
  color: var(--ink);
  margin-bottom: 1rem;
  font-weight: 800;
}

.calculator {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: end;
}

.calc-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.calc-input label {
  font-weight: 500;
  color: var(--ink);
}

.calc-input input {
  padding: 0.75rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.calc-input input:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

.calc-result {
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
}

.result-text {
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.result-text.eligible {
  background: #d4edda;
  color: #155724;
  border: 2px solid #c3e6cb;
}

.result-text.not-eligible {
  background: #f8d7da;
  color: #721c24;
  border: 2px solid #f5c6cb;
}

/* Interactive Cards */
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.interactive-card {
  transition: all 0.3s ease;
}

.interactive-card:hover {
  transform: translateY(-2px);
}

/* Exam Clock */
.exam-clock {
  margin-top: 1rem;
}

.clock-display {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.time-slot {
  flex: 1;
  min-width: 200px;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  --session-color: #6c757d;
}

.time-slot:hover {
  border-color: var(--session-color);
  transform: scale(1.02);
}

.time-slot.active {
  background: var(--session-color);
  color: white;
  border-color: var(--session-color);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.time-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--session-color);
}

.time-slot.active .time-icon {
  color: white;
}

.time-label {
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.time-value {
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Guidelines Checklist */
.guidelines-checklist {
  margin: 1rem 0;
}

.checklist-item {
  margin-bottom: 0.75rem;
}

.checklist-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.checklist-label:hover {
  background: #f8f9fa;
}

.checklist-label input[type="checkbox"] {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  position: relative;
  transition: all 0.3s ease;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.checklist-label input[type="checkbox"]:checked + .checkmark {
  background: #28a745;
  border-color: #28a745;
}

.checklist-label input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checklist-text {
  line-height: 1.5;
  color: var(--ink);
}

/* Buttons */
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
}

.btn-primary:hover {
  background: #e55a00;
  border-color: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249,115,22,0.3);
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

/* Alerts */
.alert {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid transparent;
}

.alert-info {
  background-color: #d1ecf1;
  border-color: #bee5eb;
  color: #0c5460;
}

.alert-warning {
  background-color: #fff3cd;
  border-color: #ffeaa7;
  color: #856404;
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
@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-copy .title {
    font-size: 2rem;
  }
  
  .quickfacts {
    justify-content: center;
  }
  
  .grid-2, .grid-3 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .card {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 60px 0;
  }
  
  .hero-copy .title {
    font-size: 1.8rem;
  }
  
  .quickfacts {
    flex-direction: column;
    align-items: center;
  }
  
  .quickfacts li {
    width: 100%;
    max-width: 200px;
  }
}
</style>
