<template>
  <div class="scholarship-page">
    <!-- Header -->
    <Header />
    <NavBar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="container">
        <div class="hero-content text-center">
          <div class="brand-logos mb-4">
            <img :src="heteroLogo" alt="Hetero" class="logo" />
            <span class="x">×</span>
            <img :src="ssitLogo" alt="SSIT" class="logo" />
          </div>
          
          <h1 class="hero-title">Hetero Sponsorship Program</h1>
          <p class="hero-subtitle">Merit-Based Scholarship for 100 Bright Students</p>
          
          <div class="hero-stats">
            <div class="stat-item">
              <i class="fa-solid fa-user-graduate"></i>
              <span class="stat-number">100</span>
              <span class="stat-label">Students</span>
          </div>
            <div class="stat-item">
              <i class="fa-solid fa-rupee-sign"></i>
              <span class="stat-number">₹30K</span>
              <span class="stat-label">Incentive</span>
        </div>
            <div class="stat-item">
              <i class="fa-solid fa-calendar-days"></i>
              <span class="stat-number">4 Years</span>
              <span class="stat-label">Coverage</span>
          </div>
          </div>
            </div>
            </div>
    </section>

    <!-- Main Content -->
    <main class="container">
      <!-- Program Overview -->
      <section class="section-card">
        <h2 class="section-title"><i class="fa-solid fa-bullseye"></i> Program Overview</h2>
        <p class="lead">
          <strong>Objective:</strong> Sponsor 100 meritorious students pursuing B.Tech in ECE, EEE, MECH, CSE, 
          CSM (AI & ML), and AID (AI & Data Science) through full tuition fee coverage and a joining incentive, 
          supported by <strong>Hetero</strong>.
        </p>
        <p class="muted">Institution: {{ institution }}</p>
      </section>

      <!-- Available Branches -->
      <section class="section-card">
        <h2 class="section-title"><i class="fa-solid fa-diagram-project"></i> Available Branches</h2>
        <div class="branches-grid">
          <div
            v-for="branch in branches"
            :key="branch.code"
            class="branch-chip"
            :class="{ active: selectedBranch === branch.code }"
            @click="selectedBranch = branch.code"
            :style="getBranchStyle(branch.code)"
          >
            <i :class="branch.icon" :style="getIconStyle(branch.code)"></i> 
            <span :style="getTextStyle(branch.code)">{{ branch.name }}</span>
        </div>
        </div>
        <p v-if="selectedBranch" class="muted mt-3">Selected: <strong>{{ branchLabel }}</strong></p>
    </section>

      <!-- Eligibility Criteria -->
      <section class="section-card">
        <h2 class="section-title"><i class="fa-solid fa-clipboard-check"></i> Eligibility Criteria</h2>
        <div class="criteria-grid">
          <div class="criteria-card">
            <h3 class="h6 text-orange">For Sponsorship Eligibility Test</h3>
            <ul class="check-list">
              <li>Intermediate in MPC with <strong>375+ marks</strong> in 1st year</li>
              <li>CBSE: <strong>8.5+ CGPA</strong> in 10th Class</li>
            </ul>
          </div>
          <div class="criteria-card">
            <h3 class="h6 text-orange">For Hetero Sponsorship Program</h3>
            <ul class="check-list">
              <li>Intermediate in MPC with <strong>80%+</strong> marks</li>
              <li>CBSE: <strong>B1+ Grade</strong> in 12th Class</li>
              <li>Must secure seat via <strong>TS-EAMCET Counselling</strong> (eligible branches)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section class="section-card">
        <h2 class="section-title"><i class="fa-solid fa-sack-dollar"></i> Sponsorship Benefits</h2>
        <div class="benefits-list">
          <div class="benefit-item">
            <i class="fa-solid fa-circle-check"></i>
              <div>
              <h3 class="h6">Complete 4-Year Fee Coverage</h3>
              <p>Full tuition fee coverage including miscellaneous fees</p>
              </div>
            </div>
          <div class="benefit-item">
            <i class="fa-solid fa-circle-check"></i>
              <div>
              <h3 class="h6">₹30,000 Joining Incentive</h3>
              <p>Cash prize at Orientation</p>
                </div>
              </div>
            </div>
      </section>

      <!-- Ways to Participate -->
      <section class="section-card">
        <h2 class="section-title"><i class="fa-solid fa-timeline"></i> Three Ways to Participate</h2>
        <div class="participation-timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="h6">Write Online Exam</h3>
            <p>Use the official website link.</p>
              <a :href="registrationLink" target="_blank" rel="noopener" class="link">
                Register Online <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="h6">Walk-in on {{ examDate }}</h3>
              <p>Bring Inter I year mark sheet and ID proof. Reporting: <strong>10:00 A.M.</strong> Venue: SSIT.</p>
          </div>
        </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="h6">Campus Exam Registration</h3>
            <p>Contact the numbers below for assistance with campus registration.</p>
      </div>
          </div>
          </div>
    </section>

      <!-- Contact -->
      <section class="section-card">
        <h2 class="section-title"><i class="fa-solid fa-headset"></i> Contact Center</h2>
        <div class="contact-grid">
          <div class="contact-section">
            <h3 class="h6 text-orange">Phone Numbers</h3>
            <div class="contact-list">
              <a v-for="phone in phones" :key="phone" :href="`tel:${phone}`" class="contact-item">
                <i class="fa-solid fa-phone"></i> {{ phone }}
              </a>
        </div>
          </div>
          <div class="contact-section">
            <h3 class="h6 text-orange">Email & Website</h3>
            <div class="contact-list">
              <a :href="`mailto:${email}`" class="contact-item">
                <i class="fa-solid fa-envelope"></i> {{ email }}
              </a>
              <a :href="website" target="_blank" rel="noopener" class="contact-item">
                <i class="fa-solid fa-globe"></i> {{ websiteLabel }}
              </a>
              <div class="eamcet-code">
                <strong>EAMCET Code: <span class="code-badge">SAIS</span></strong>
        </div>
        </div>
          </div>
        </div>
        
        <div class="quick-actions mt-4">
          <a :href="registrationLink" target="_blank" rel="noopener" class="btn btn-primary">
            <i class="fa-solid fa-user-plus"></i> Register Now
          </a>
          <a :href="whatsAppLink" target="_blank" rel="noopener" class="btn btn-secondary">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Header from '../../components/Header.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'

const heteroLogo = new URL('@/assets/hetero.png', import.meta.url).href
const ssitLogo = new URL('@/assets/college-logo.png', import.meta.url).href

const institution = "Sai Spurthi Institute of Technology, B.Gangaram, Sathupally, Khammam Dist.-507303"
const examDate = "Mar 5, 2023"
const venue = "Sai Spurthi Institute of Technology"

const branches = [
  { code: 'CSE', name: 'CSE — Computer Science', icon: 'fa-solid fa-computer' },
  { code: 'ECE', name: 'ECE — Electronics & Communication', icon: 'fa-solid fa-satellite-dish' },
  { code: 'EEE', name: 'EEE — Electrical & Electronics', icon: 'fa-solid fa-bolt' },
  { code: 'MECH', name: 'MECH — Mechanical', icon: 'fa-solid fa-gears' },
  { code: 'CSM', name: 'CSM — CSE (AI & ML)', icon: 'fa-solid fa-robot' },
  { code: 'AID', name: 'AID — AI & Data Science', icon: 'fa-solid fa-brain' }
]

const phones = ['9705535655', '9491109564', '8919096826', '9963084558']
const email = 'sssit.principal@gmail.com'
const website = 'https://www.saispurthi.ac.in'
const websiteLabel = 'www.saispurthi.ac.in'
const registrationLink = 'https://www.saispurthi.ac.in/sspreg.php'
const whatsAppLink = computed(() => `https://wa.me/${phones[0]}?text=I%20am%20interested%20in%20the%20Hetero%20Sponsorship%20Program`)

const selectedBranch = ref('CSE')

const branchLabel = computed(() => branches.find(b => b.code === selectedBranch.value)?.name || '')

function getBranchStyle(branchCode) {
  return selectedBranch.value === branchCode ? {
    background: '#ff6f00',
    color: 'white',
    borderColor: '#ff6f00'
  } : {}
}

function getIconStyle(branchCode) {
  return selectedBranch.value === branchCode ? { color: 'white' } : {}
}

function getTextStyle(branchCode) {
  return selectedBranch.value === branchCode ? { color: 'white' } : {}
}
</script>

<style scoped>
:root {
  --brand-blue: #0b3d91;
  --brand-orange: #ff6f00;
  --brand-light: #f7f9fc;
  --ink: #1a2238;
  --muted: #6b7280;
  --border: #e5e7eb;
}

.scholarship-page {
  background: var(--brand-light);
}

/* Hero */
.hero {
  position: relative;
  background: var(--ink);
  color: white;
  padding: 4rem 0;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(249, 115, 22, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.brand-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  background: white;
  border-radius: 0.75rem;
  padding: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.x {
  font-size: 1.5rem;
  color: rgba(255,255,255,0.6);
  font-weight: 700;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin: 1.5rem 0 1rem;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: rgba(255,255,255,0.95);
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  min-width: 140px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(255,255,255,0.15);
  transform: translateY(-4px);
}

.stat-item i {
  font-size: 2rem;
  color: var(--brand-orange);
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
}

/* Sections */
.section-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.section-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 1rem;
}

.section-title i {
  color: var(--brand-orange);
  font-size: 1.25rem;
}

.lead {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 1rem;
}

.muted {
  color: var(--muted);
  font-size: 0.95rem;
}

.text-orange {
  color: var(--brand-orange);
}

.h6 {
  font-size: 1rem;
  font-weight: 700; 
  margin-bottom: 0.5rem;
}

/* Branches */
.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.branch-chip {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #1a2238;
  transition: all 0.3s ease;
  cursor: pointer;
}

.branch-chip:hover:not(.active) {
  border-color: var(--brand-orange) !important;
  background: rgba(249, 115, 22, 0.05) !important;
}

.branch-chip i {
  font-size: 1.1rem;
}

/* Criteria */
.criteria-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.criteria-card {
  background: #f9fafb;
  border-left: 4px solid var(--brand-orange);
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.check-list li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--ink);
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--brand-orange);
  font-weight: 700;
}

.check-list strong {
  color: var(--brand-orange);
}

/* Benefits */
.benefits-list {
  display: grid;
  gap: 1rem;
}

.benefit-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  background: rgba(249, 115, 22, 0.05);
  border-left: 4px solid var(--brand-orange);
  border-radius: 0.5rem;
}

.benefit-item i {
  color: var(--brand-orange);
  font-size: 1.5rem;
  margin-top: 0.25rem;
}


/* Timeline */
.participation-timeline {
  display: grid;
  gap: 1.5rem;
}

.timeline-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--brand-orange);
  margin-top: 6px;
  box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.25);
  flex-shrink: 0;
}

.timeline-content h3 {
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--muted);
  margin: 0.5rem 0;
}

.link {
  color: var(--brand-orange);
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.link:hover {
  color: #e55a00;
}

/* Contact */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #f9fafb;
  border: 1px dashed var(--border);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--ink);
  transition: all 0.3s ease;
}

.contact-item:hover {
  border-color: var(--brand-orange);
  background: rgba(249, 115, 22, 0.05);
}

.contact-item i {
  color: var(--brand-orange);
}

.eamcet-code {
  margin-top: 1rem;
}

.code-badge {
  background: var(--brand-orange);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.quick-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--brand-orange);
  color: white;
  border: 2px solid var(--brand-orange);
}

.btn-primary:hover {
  background: #e55a00;
  border-color: #e55a00;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #10b981;
  color: white;
  border: 2px solid #10b981;
}

.btn-secondary:hover {
  background: #059669;
  border-color: #059669;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-stats {
    gap: 1rem;
  }
  
  .stat-item {
    min-width: 120px;
    padding: 1rem 1.5rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .branches-grid {
    grid-template-columns: 1fr;
  }
}
</style>

