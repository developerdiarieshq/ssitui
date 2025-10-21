<template>
  <div class="entrepreneurship-cell-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Entrepreneurship Development Cell</h1>
        <p class="subtitle">Fostering Innovation and Entrepreneurial Spirit</p>
        <p class="context">
          The Entrepreneurship Development Cell promotes entrepreneurial thinking, supports startup initiatives, and provides guidance to students and faculty in developing innovative business ideas and ventures.
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content">
      <!-- COMMITTEE DESCRIPTION -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-rocket"></i>
            About Entrepreneurship Development Cell
          </h2>
          <div class="description">
            <p>
              The Entrepreneurship Development Cell at Sai Spurthi Institute of Technology is dedicated to nurturing the entrepreneurial spirit among students and faculty. Our cell provides comprehensive support for developing innovative business ideas, creating startups, and fostering a culture of innovation and enterprise.
            </p>
            <p>
              We offer mentorship programs, business plan development workshops, funding guidance, and networking opportunities with industry experts and successful entrepreneurs. The cell also organizes entrepreneurship competitions, startup incubator programs, and connects aspiring entrepreneurs with investors and business mentors.
            </p>
          </div>
        </div>
      </section>

      <!-- COMMITTEE MEMBERS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-users"></i>
            Entrepreneurship Development Cell Members
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
                <a href="mailto:krishnareddy@ssit.edu.in" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  krishnareddy@ssit.edu.in
                </a>
                <a href="tel:+919876543210" class="contact-link">
                  <i class="fa-solid fa-phone"></i>
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ENTREPRENEURSHIP INITIATIVES -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-lightbulb"></i>
            Entrepreneurship Initiatives
          </h2>
          <div class="initiatives-grid">
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="initiative-content">
                <h3>Startup Incubation</h3>
                <p>Providing incubation support and mentorship for student startups</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <div class="initiative-content">
                <h3>Business Plan Development</h3>
                <p>Guiding students in creating comprehensive business plans</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <div class="initiative-content">
                <h3>Industry Networking</h3>
                <p>Connecting entrepreneurs with industry experts and investors</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-trophy"></i>
              </div>
              <div class="initiative-content">
                <h3>Competitions & Events</h3>
                <p>Organizing entrepreneurship competitions and startup events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT ENTREPRENEURSHIP CELL -->
      <section class="card-section">
        <div class="card contact-card">
          <h2 class="section-title">
            <i class="fa-solid fa-envelope"></i>
            Contact Entrepreneurship Development Cell
          </h2>
          <div class="contact-info">
            <p>For entrepreneurship guidance, startup support, or business development inquiries, please contact:</p>
            <div class="contact-actions">
              <a href="mailto:krishnareddy@ssit.edu.in" class="contact-btn">
                <i class="fa-solid fa-envelope"></i>
                Email Entrepreneurship Cell
              </a>
              <a href="tel:+919876543210" class="contact-btn">
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
  name: 'EntrepreneurshipCell',
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
        { sno: 4, name: 'Mr. B. Naresh', position: 'Member' },
        { sno: 5, name: 'Mrs. D. Naga Teja', position: 'Member' },
        { sno: 6, name: 'Mrs. T. Mounika', position: 'Member' },
        { sno: 7, name: 'M. Thirupathamma', position: 'Member' }
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
.entrepreneurship-cell-page {
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
  
  .initiative-item {
    flex-direction: column;
    text-align: center;
  }
  
  .initiative-icon {
    align-self: center;
  }
}
</style>
