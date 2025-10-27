<template>
  <div class="industry-interaction-cell-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Industry Institute Interaction Cell</h1>
        <p class="subtitle">Bridging Academia and Industry</p>
        <p class="context">
          The Industry Institute Interaction Cell fosters strong partnerships between academia and industry, facilitating internships, projects, placements, and collaborative research initiatives.
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content">
      <!-- COMMITTEE DESCRIPTION -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-handshake"></i>
            About Industry Institute Interaction Cell
          </h2>
          <div class="description">
            <p>
              The Industry Institute Interaction Cell at Sai Spurthi Institute of Technology serves as a vital bridge between academic excellence and industry requirements. We facilitate meaningful collaborations that enhance student learning experiences and prepare graduates for successful careers.
            </p>
            <p>
              Our cell organizes industry visits, guest lectures, live projects, internships, and placement opportunities. We work closely with leading companies to ensure our curriculum remains relevant and our students are industry-ready. Through strategic partnerships and MoUs, we create a seamless transition from campus to corporate life.
            </p>
          </div>
        </div>
      </section>

      <!-- COMMITTEE MEMBERS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-users"></i>
            Industry Institute Interaction Cell Members
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
                <h3>Convener</h3>
                <p>Dr. D.N.V. Krishna Reddy</p>
                <a href="mailto:drdnvkreddy@gmail.com" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  drdnvkreddy@gmail.com
                </a>
                <a href="tel:+919951006189" class="contact-link">
                  <i class="fa-solid fa-phone"></i>
                  +91 99510 006189
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTIVITIES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-calendar-check"></i>
            Key Activities
          </h2>
          <div class="activities-grid">
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-building"></i>
              </div>
              <div class="activity-content">
                <h3>Industry Visits</h3>
                <p>Organizing educational visits to leading companies and industries</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-microphone"></i>
              </div>
              <div class="activity-content">
                <h3>Guest Lectures</h3>
                <p>Inviting industry experts for knowledge sharing sessions</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-project-diagram"></i>
              </div>
              <div class="activity-content">
                <h3>Live Projects</h3>
                <p>Facilitating real-world projects from industry partners</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div class="activity-content">
                <h3>Internships</h3>
                <p>Coordinating summer and semester internships with companies</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <div class="activity-content">
                <h3>MoU Signings</h3>
                <p>Establishing formal partnerships with industry leaders</p>
              </div>
            </div>
            <div class="activity-item">
              <div class="activity-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="activity-content">
                <h3>Placement Support</h3>
                <p>Connecting students with job opportunities and career guidance</p>
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
                <i class="fa-solid fa-link"></i>
              </div>
              <div class="objective-content">
                <h3>Industry Partnerships</h3>
                <p>Build and maintain strong relationships with industry leaders</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <div class="objective-content">
                <h3>Curriculum Enhancement</h3>
                <p>Align academic programs with industry requirements</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="objective-content">
                <h3>Student Development</h3>
                <p>Provide practical exposure and skill development opportunities</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-lightbulb"></i>
              </div>
              <div class="objective-content">
                <h3>Innovation Support</h3>
                <p>Facilitate collaborative research and innovation projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- INDUSTRY PARTNERS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-building"></i>
            Industry Partners
          </h2>
          <div class="partners-grid">
            <div class="partner-item">
              <div class="partner-icon">
                <i class="fa-solid fa-laptop-code"></i>
              </div>
              <div class="partner-content">
                <h3>Technology Companies</h3>
                <p>Leading IT and software companies for internships and placements</p>
              </div>
            </div>
            <div class="partner-item">
              <div class="partner-icon">
                <i class="fa-solid fa-industry"></i>
              </div>
              <div class="partner-content">
                <h3>Manufacturing Units</h3>
                <p>Industrial partners for practical training and projects</p>
              </div>
            </div>
            <div class="partner-item">
              <div class="partner-icon">
                <i class="fa-solid fa-chart-bar"></i>
              </div>
              <div class="partner-content">
                <h3>Consulting Firms</h3>
                <p>Business consulting companies for case studies and projects</p>
              </div>
            </div>
            <div class="partner-item">
              <div class="partner-icon">
                <i class="fa-solid fa-flask"></i>
              </div>
              <div class="partner-content">
                <h3>Research Organizations</h3>
                <p>R&D institutions for collaborative research initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT INDUSTRY CELL -->
      <section class="card-section">
        <div class="card contact-card">
          <h2 class="section-title">
            <i class="fa-solid fa-envelope"></i>
            Contact Industry Institute Interaction Cell
          </h2>
          <div class="contact-info">
            <p>For industry partnerships, internships, or collaboration opportunities, please contact:</p>
            <div class="contact-actions">
              <a href="mailto:drdnvkreddy@gmail.com" class="contact-btn">
                <i class="fa-solid fa-envelope"></i>
                Email Industry Cell
              </a>
              <a href="tel:+919951006189" class="contact-btn">
                <i class="fa-solid fa-phone"></i>
                Call Convener
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
  name: 'IndustryInteractionCell',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      members: [
        { sno: 1, name: 'Dr. V.S.R Kumari', position: 'Chair Person' },
        { sno: 2, name: 'Dr. D.N.V. Krishna Reddy', position: 'Convener' },
        { sno: 3, name: 'Mr. J. Kantaiah', position: 'Member' },
        { sno: 4, name: 'Mr. P. Bhaskar Rao', position: 'Member' },
        { sno: 5, name: 'Mrs. T. Mounika', position: 'Member' },
        { sno: 6, name: 'Mr. B. Santhoosh Kumar', position: 'Member' },
        { sno: 7, name: 'Mr. P. Sudheer Kumar', position: 'Member' },
        { sno: 8, name: 'Mr. K. Krishna Kumar', position: 'Member' },
        { sno: 9, name: 'Mr. G. Narendra Babu', position: 'Member' }
      ]
    }
  },
  methods: {
    getPositionClass(position) {
      switch (position) {
        case 'Chair Person':
          return 'chair-person'
        case 'Convener':
          return 'convener'
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
.industry-interaction-cell-page {
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

.position-badge.convener {
  background: var(--ink);
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

/* ACTIVITIES GRID */
.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.activity-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.activity-icon {
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

.activity-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.activity-content p {
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

/* PARTNERS GRID */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.partner-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border-radius: 0.75rem;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.partner-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.partner-icon {
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

.partner-content h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
}

.partner-content p {
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
  
  .activities-grid {
    grid-template-columns: 1fr;
  }
  
  .objectives-grid {
    grid-template-columns: 1fr;
  }
  
  .partners-grid {
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
  
  .activity-item {
    flex-direction: column;
    text-align: center;
  }
  
  .activity-icon {
    align-self: center;
  }
  
  .objective-item {
    flex-direction: column;
    text-align: center;
  }
  
  .objective-icon {
    align-self: center;
  }
  
  .partner-item {
    flex-direction: column;
    text-align: center;
  }
  
  .partner-icon {
    align-self: center;
  }
}
</style>