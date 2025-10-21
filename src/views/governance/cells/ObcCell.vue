<template>
  <div class="obc-cell-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">OBC Cell</h1>
        <p class="subtitle">Empowering Other Backward Classes</p>
        <p class="context">
          The OBC Cell is dedicated to ensuring equal opportunities, addressing grievances, and promoting the welfare of Other Backward Classes (OBC) students and staff members in our institution.
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content">
      <!-- COMMITTEE DESCRIPTION -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-users-cog"></i>
            About OBC Cell
          </h2>
          <div class="description">
            <p>
              The OBC Cell at Sai Spurthi Institute of Technology is committed to safeguarding the rights and interests of Other Backward Classes (OBC) within our institution. We work towards creating an inclusive environment that respects diversity and ensures equal opportunities for all.
            </p>
            <p>
              Our cell addresses grievances related to discrimination, provides support for OBC students' academic and personal development, and organizes awareness programs to promote understanding and harmony among all communities. We also facilitate access to scholarships, mentorship programs, and career guidance specifically designed for OBC students.
            </p>
          </div>
        </div>
      </section>

      <!-- COMMITTEE MEMBERS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-users"></i>
            OBC Cell Members
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
                <p>Mr. Ch. Bala Krishna</p>
                <a href="mailto:balakrishna@ssit.edu.in" class="contact-link">
                  <i class="fa-solid fa-envelope"></i>
                  balakrishna@ssit.edu.in
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
                <i class="fa-solid fa-shield-alt"></i>
              </div>
              <div class="objective-content">
                <h3>Protect Rights</h3>
                <p>Safeguard the constitutional rights of OBC students and staff</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-handshake"></i>
              </div>
              <div class="objective-content">
                <h3>Equal Opportunities</h3>
                <p>Ensure equal access to educational and career opportunities</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-comments"></i>
              </div>
              <div class="objective-content">
                <h3>Grievance Redressal</h3>
                <p>Address complaints and concerns of OBC communities</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="objective-content">
                <h3>Academic Support</h3>
                <p>Provide mentorship and academic assistance to OBC students</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-heart"></i>
              </div>
              <div class="objective-content">
                <h3>Welfare Programs</h3>
                <p>Organize welfare activities and awareness programs</p>
              </div>
            </div>
            <div class="objective-item">
              <div class="objective-icon">
                <i class="fa-solid fa-university"></i>
              </div>
              <div class="objective-content">
                <h3>Scholarship Support</h3>
                <p>Facilitate access to scholarships and financial aid</p>
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
            Key Initiatives
          </h2>
          <div class="initiatives-grid">
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-book-open"></i>
              </div>
              <div class="initiative-content">
                <h3>Educational Support</h3>
                <p>Providing academic guidance, study materials, and remedial classes for OBC students</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-money-bill-wave"></i>
              </div>
              <div class="initiative-content">
                <h3>Financial Assistance</h3>
                <p>Helping students access government scholarships and financial aid programs</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-user-graduate"></i>
              </div>
              <div class="initiative-content">
                <h3>Career Guidance</h3>
                <p>Conducting career counseling sessions and placement assistance programs</p>
              </div>
            </div>
            <div class="initiative-item">
              <div class="initiative-icon">
                <i class="fa-solid fa-users"></i>
              </div>
              <div class="initiative-content">
                <h3>Community Building</h3>
                <p>Organizing cultural events and community integration programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT OBC CELL -->
      <section class="card-section">
        <div class="card contact-card">
          <h2 class="section-title">
            <i class="fa-solid fa-envelope"></i>
            Contact OBC Cell
          </h2>
          <div class="contact-info">
            <p>For OBC-related concerns, grievances, or support, please contact:</p>
            <div class="contact-actions">
              <a href="mailto:balakrishna@ssit.edu.in" class="contact-btn">
                <i class="fa-solid fa-envelope"></i>
                Email OBC Cell
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
  name: 'ObcCell',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      members: [
        { sno: 1, name: 'Dr. V.S.R Kumari', position: 'Chair Person' },
        { sno: 2, name: 'Mr. Ch. Bala Krishna', position: 'Convener' },
        { sno: 3, name: 'Mr. A. Gopi', position: 'Member' },
        { sno: 4, name: 'Mr. B. Naresh', position: 'Member' },
        { sno: 5, name: 'Mr. V.B. Gopala Krishna', position: 'Member' },
        { sno: 6, name: 'Mr. B. Santosh Kumar', position: 'Member' },
        { sno: 7, name: 'Mr. V. Naresh', position: 'Member' },
        { sno: 8, name: 'Mr. B. Rama Krishna', position: 'Member' },
        { sno: 9, name: 'Mrs. Dr. A. Sindhuja', position: 'Member' },
        { sno: 10, name: 'Mr. V. Suresh', position: 'Member' }
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
.obc-cell-page {
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
