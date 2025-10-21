<template>
  <div class="iqac-cell-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">IQAC - Internal Quality Assurance Cell</h1>
        <p class="subtitle">Ensuring Excellence Through Quality Assurance</p>
        <p class="context">
          The IQAC is committed to assuring and enhancing academic and administrative quality standards through systematic planning, monitoring, and continuous improvement initiatives.
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content">
      <!-- COMMITTEE DESCRIPTION -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-certificate"></i>
            About IQAC - Internal Quality Assurance Cell
          </h2>
          <div class="description">
            <p>
              The Internal Quality Assurance Cell (IQAC) at Sai Spurthi Institute of Technology is dedicated to maintaining and enhancing the quality of education and administrative processes. We work systematically to ensure continuous improvement in all aspects of institutional functioning.
            </p>
            <p>
              Our cell designs quality benchmarks, conducts academic audits, collects stakeholder feedback, and publishes Annual Quality Assurance Reports (AQAR). We facilitate outcome-based education initiatives, implement best practices, and ensure compliance with NAAC guidelines and accreditation standards.
            </p>
          </div>
        </div>
      </section>

      <!-- COMMITTEE MEMBERS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-users"></i>
            IQAC Members
          </h2>
          <div class="table-responsive">
            <table class="members-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Member Name</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="member in members" :key="member.sno">
                  <td>{{ member.sno }}</td>
                  <td>{{ member.name }}</td>
                  <td>
                    <span class="position-badge" :class="getPositionClass(member.position)">
                      {{ member.position }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- CONTACT INFORMATION -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-phone"></i>
            Contact Information
          </h2>
          <div class="contact-grid">
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fa-solid fa-user-tie"></i>
              </div>
              <div class="contact-details">
                <h3>Chair Person</h3>
                <p>Dr. V.S.R Kumari</p>
                <a href="mailto:principal@ssit.edu.in" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  principal@ssit.edu.in
                </a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fa-solid fa-user-check"></i>
              </div>
              <div class="contact-details">
                <h3>Coordinator</h3>
                <p>Mr. K Rama Krishna Prasad</p>
                <a href="mailto:ramakrishna.pe@gmail.com" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  ramakrishna.pe@gmail.com
                </a>
                <a href="tel:+919154645060" class="contact-link">
                  <i class="fa-solid fa-phone"></i>
                  +91 91546 45060
                </a>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <i class="fa-solid fa-user-plus"></i>
              </div>
              <div class="contact-details">
                <h3>Co-Coordinator</h3>
                <p>Mr. Ch. Balakrishna</p>
                <a href="mailto:balakrishna@ssit.edu.in" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  balakrishna@ssit.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FUNCTIONS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-cogs"></i>
            Key Functions
          </h2>
          <div class="functions-grid">
            <div class="function-item">
              <div class="function-icon">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <div class="function-content">
                <h3>Quality Benchmarking</h3>
                <p>Design and implement quality benchmarks for academic and administrative processes</p>
              </div>
            </div>
            <div class="function-item">
              <div class="function-icon">
                <i class="fa-solid fa-search"></i>
              </div>
              <div class="function-content">
                <h3>Academic Audits</h3>
                <p>Conduct regular academic audits and quality assessments</p>
              </div>
            </div>
            <div class="function-item">
              <div class="function-icon">
                <i class="fa-solid fa-comments"></i>
              </div>
              <div class="function-content">
                <h3>Stakeholder Feedback</h3>
                <p>Collect and analyze feedback from students, faculty, and other stakeholders</p>
              </div>
            </div>
            <div class="function-item">
              <div class="function-icon">
                <i class="fa-solid fa-file-alt"></i>
              </div>
              <div class="function-content">
                <h3>AQAR Preparation</h3>
                <p>Prepare and publish Annual Quality Assurance Reports (AQAR)</p>
              </div>
            </div>
            <div class="function-item">
              <div class="function-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="function-content">
                <h3>Outcome-Based Education</h3>
                <p>Facilitate implementation of outcome-based education initiatives</p>
              </div>
            </div>
            <div class="function-item">
              <div class="function-icon">
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="function-content">
                <h3>Best Practices</h3>
                <p>Identify, document, and implement best practices across the institution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- OBJECTIVES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-target"></i>
            Objectives
          </h2>
          <div class="objectives-grid">
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div class="objective-content">
                <h3>Quality Enhancement</h3>
                <p>Enhance the quality of teaching, learning, and research processes</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-sync-alt"></i>
              </div>
              <div class="objective-content">
                <h3>Continuous Improvement</h3>
                <p>Ensure continuous improvement in all institutional activities</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-shield-alt"></i>
              </div>
              <div class="objective-content">
                <h3>Quality Assurance</h3>
                <p>Maintain quality assurance standards and accreditation compliance</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="objective-content">
                <h3>Stakeholder Satisfaction</h3>
                <p>Ensure satisfaction of all stakeholders through quality services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- INITIATIVES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-lightbulb"></i>
            Quality Initiatives
          </h2>
          <div class="initiatives-grid">
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-laptop"></i>
              </div>
              <div class="initiative-content">
                <h3>Online Feedback Dashboards</h3>
                <p>Implementation of digital feedback systems for real-time quality monitoring</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-book"></i>
              </div>
              <div class="initiative-content">
                <h3>Outcome-Based Education</h3>
                <p>Transition to outcome-based education framework for enhanced learning</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-chart-bar"></i>
              </div>
              <div class="initiative-content">
                <h3>Quality Metrics</h3>
                <p>Development of comprehensive quality metrics and KPIs</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-award"></i>
              </div>
              <div class="initiative-content">
                <h3>Accreditation Support</h3>
                <p>Preparation and support for NAAC accreditation and re-accreditation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT IQAC CELL -->
      <section class="card-section">
        <div class="card contact-card">
          <h2 class="section-title">
            <i class="fa-solid fa-envelope"></i>
            Contact IQAC Cell
          </h2>
          <div class="contact-info">
            <p>For quality assurance matters, feedback, or suggestions, please contact:</p>
            <div class="contact-actions">
              <a href="mailto:ramakrishna.pe@gmail.com" class="contact-btn">
                <i class="fa-solid fa-envelope"></i>
                Email IQAC Cell
              </a>
              <a href="tel:+919154645060" class="contact-btn">
                <i class="fa-solid fa-phone"></i>
                Call Coordinator
              </a>
            </div>
          </div>
        </div>
      </section>
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
  name: 'IqacCell',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      members: [
        { sno: 1, name: 'Dr. V.S.R Kumari', position: 'Chair Person' },
        { sno: 2, name: 'Mr. K Rama Krishna Prasad', position: 'Coordinator' },
        { sno: 3, name: 'Mr. Ch. Balakrishna', position: 'Co-Coordinator' },
        { sno: 4, name: 'Mr. K. V. Jawahar', position: 'Member' },
        { sno: 5, name: 'Dr. K. Bhaskar Muthyalu', position: 'Member' },
        { sno: 6, name: 'Dr. P. Sekhar Babu', position: 'Member' },
        { sno: 7, name: 'Dr. Sk. Yakoob', position: 'Member' },
        { sno: 8, name: 'Dr. Sk. Meera Saheb', position: 'Member' },
        { sno: 9, name: 'Dr. D.N.V. Krishna Reddy', position: 'Member' },
        { sno: 10, name: 'Mr. G. Upendra', position: 'Member' },
        { sno: 11, name: 'Mr. G. Rajendar Reddy', position: 'Member' }
      ]
    }
  },
  methods: {
    getPositionClass(position) {
      switch (position) {
        case 'Chair Person':
          return 'chair-person'
        case 'Coordinator':
          return 'coordinator'
        case 'Co-Coordinator':
          return 'co-coordinator'
        default:
          return 'member'
      }
    }
  }
}
</script>

<style scoped>
/* THEME VARIABLES */
:root {
  --orange: #f97316;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
  --ink: #111827;
}

/* PAGE LAYOUT */
.iqac-cell-page {
  min-height: 100vh;
  background: var(--bg);
  color: var(--ink);
}

.container {
  width: min(1180px, 92%);
  margin-inline: auto;
  padding: 0 1rem;
}

/* HERO SECTION */
.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.hero .title {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 0.3rem 0;
  color: white;
}

.hero .subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  color: white;
}

.hero .context {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  color: white;
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.5;
}

/* CONTENT SECTIONS */
.content {
  padding: 1rem 0 2rem;
}

.card-section {
  margin-bottom: 2rem;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(2, 6, 23, .04);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border);
}

.section-title i {
  color: var(--orange);
}

/* DESCRIPTION */
.description p {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: 1.5rem;
}

.description p:last-child {
  margin-bottom: 0;
}

/* MEMBERS TABLE */
.table-responsive {
  overflow-x: auto;
  border-radius: 0.75rem;
  border: 1px solid var(--border);
}

.members-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--card);
}

.members-table th {
  background: var(--ink);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 1rem;
}

.members-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  font-size: 1rem;
}

.members-table tr:hover {
  background: var(--bg);
}

.members-table tr:last-child td {
  border-bottom: none;
}

.position-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
}

.position-badge.chair-person {
  background: var(--orange);
  color: white;
}

.position-badge.coordinator {
  background: var(--ink);
  color: white;
}

.position-badge.co-coordinator {
  background: #8b5cf6;
  color: white;
}

.position-badge.member {
  background: var(--muted);
  color: white;
}

/* CONTACT GRID */
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--ink);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.contact-details h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.contact-details p {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin: 0 0 0.75rem 0;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink);
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--orange);
}

.contact-link i {
  width: 16px;
}

/* FUNCTIONS GRID */
.functions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.function-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.function-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.function-icon {
  width: 50px;
  height: 50px;
  background: var(--orange);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.function-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.function-content p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
}

/* OBJECTIVES GRID */
.objectives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.objective-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.objective-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.objective-icon {
  width: 50px;
  height: 50px;
  background: var(--orange);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.objective-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.objective-content p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
}

/* INITIATIVES GRID */
.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.initiative-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.initiative-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.initiative-icon {
  width: 50px;
  height: 50px;
  background: var(--orange);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.initiative-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.initiative-content p {
  font-size: 0.95rem;
  color: var(--ink);
  margin: 0;
  line-height: 1.5;
}

/* CONTACT CARD */
.contact-card {
  background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
  border: 2px solid var(--orange);
}

.contact-info p {
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: 1.5rem;
}

.contact-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: var(--orange);
  color: white;
  text-decoration: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.contact-btn:hover {
  background: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
}

.contact-btn i {
  font-size: 1.1rem;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .hero .title {
    font-size: 2rem;
  }
  
  .hero .subtitle {
    font-size: 1rem;
  }
  
  .hero .context {
    font-size: 0.9rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
  }
  
  .functions-grid {
    grid-template-columns: 1fr;
  }
  
  .objectives-grid {
    grid-template-columns: 1fr;
  }
  
  .initiatives-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-actions {
    flex-direction: column;
  }
  
  .contact-btn {
    justify-content: center;
  }
  
  .members-table th,
  .members-table td {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 0;
  }
  
  .hero .title {
    font-size: 1.8rem;
  }
  
  .hero .subtitle {
    font-size: 0.95rem;
  }
  
  .card {
    padding: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
  }
  
  .contact-icon {
    align-self: center;
  }
  
  .function-item {
    flex-direction: column;
    text-align: center;
  }
  
  .function-icon {
    align-self: center;
  }
  
  .objective-item {
    flex-direction: column;
    text-align: center;
  }
  
  .objective-icon {
    align-self: center;
  }
  
  .initiative-item {
    flex-direction: column;
    text-align: center;
  }
  
  .initiative-icon {
    align-self: center;
  }
}
</style>