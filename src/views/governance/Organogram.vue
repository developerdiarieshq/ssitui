<template>
  <div class="organogram-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Organogram Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Organizational Structure</h1>
          <p class="tagline">Interactive organizational chart - Click on any item to expand and explore the hierarchy.</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Levels</span>
              <span class="qf-value">6</span>
            </li>
            <li>
              <span class="qf-label">Departments</span>
              <span class="qf-value">7</span>
            </li>
            <li>
              <span class="qf-label">Interactive</span>
              <span class="qf-value">Yes</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/management/chairman.jpg"
            alt="Organizational Structure - Management Team"
            class="hero-img"
          />
        </picture>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content" id="content">
      <!-- ORGANIZATIONAL CHART -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-sitemap"></i> Interactive Organizational Chart</h2>
          <p class="lead">
            Click on any organizational level to expand and explore the hierarchy. Only one level expands at a time to maintain clarity.
          </p>
        </div>

        <!-- MICROSOFT TEAMS STYLE ORGANIZATIONAL CHART -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-sitemap"></i> Organizational Hierarchy</h3>
          <div class="teams-org-chart">
            <!-- TOP LEVEL - TRUST -->
            <div class="org-level top-level">
              <div class="org-card trust-card" @click="toggleLevel('level1')">
                <div class="card-header">
                  <div class="avatar trust-avatar">
                    <i class="fa-solid fa-building-columns"></i>
                  </div>
                  <div class="expand-toggle" v-if="!expandedLevels.level1">
                    <i class="fa-solid fa-chevron-down"></i>
                  </div>
                  <div class="expand-toggle" v-else>
                    <i class="fa-solid fa-chevron-up"></i>
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title">VIPASSANA EDUCATIONAL TRUST</h4>
                  <p class="card-subtitle">Governing Body</p>
                </div>
              </div>
            </div>

            <!-- MANAGEMENT LEVEL -->
            <template v-if="expandedLevels.level1">
              <div class="org-level management-level">
                <div class="org-card management-card" @click="toggleLevel('level2')">
                  <div class="card-header">
                    <div class="avatar management-avatar">
                      <i class="fa-solid fa-user-tie"></i>
                    </div>
                    <div class="expand-toggle" v-if="!expandedLevels.level2">
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="expand-toggle" v-else>
                      <i class="fa-solid fa-chevron-up"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">CHAIRMAN</h4>
                    <p class="card-subtitle">Dr. S. Venkateswara Rao</p>
                  </div>
                </div>

                <div class="org-card management-card" @click="toggleLevel('level2')">
                  <div class="card-header">
                    <div class="avatar management-avatar">
                      <i class="fa-solid fa-file-contract"></i>
                    </div>
                    <div class="expand-toggle" v-if="!expandedLevels.level2">
                      <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div class="expand-toggle" v-else>
                      <i class="fa-solid fa-chevron-up"></i>
                    </div>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">SECRETARY & CORRESPONDENT</h4>
                    <p class="card-subtitle">Mr. K. Ramesh</p>
                  </div>
                </div>
              </div>

              <!-- PRINCIPAL LEVEL -->
              <template v-if="expandedLevels.level2">
                <div class="org-level principal-level">
                  <div class="org-card principal-card" @click="toggleLevel('level3')">
                    <div class="card-header">
                      <div class="avatar principal-avatar">
                        <i class="fa-solid fa-graduation-cap"></i>
                      </div>
                      <div class="expand-toggle" v-if="!expandedLevels.level3">
                        <i class="fa-solid fa-chevron-down"></i>
                      </div>
                      <div class="expand-toggle" v-else>
                        <i class="fa-solid fa-chevron-up"></i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">PRINCIPAL</h4>
                      <p class="card-subtitle">Dr. P. Sekhar Babu</p>
                    </div>
                  </div>
                </div>

                <!-- DEPARTMENTS LEVEL -->
                <template v-if="expandedLevels.level3">
                  <div class="org-level departments-level">
                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-building"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">OFFICE</h4>
                        <p class="card-subtitle">Administration</p>
                      </div>
                    </div>

                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-users"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">DEPARTMENTS</h4>
                        <p class="card-subtitle">Academic Units</p>
                      </div>
                    </div>

                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-clipboard-list"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">COMMITTEES</h4>
                        <p class="card-subtitle">Governing Bodies</p>
                      </div>
                    </div>

                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-book"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">LIBRARY</h4>
                        <p class="card-subtitle">Information Center</p>
                      </div>
                    </div>

                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-tools"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">ESTATE MANAGEMENT</h4>
                        <p class="card-subtitle">Facilities</p>
                      </div>
                    </div>

                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-futbol"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">SPORTS</h4>
                        <p class="card-subtitle">Athletics</p>
                      </div>
                    </div>

                    <div class="org-card department-card" @click="toggleLevel('level4')">
                      <div class="card-header">
                        <div class="avatar department-avatar">
                          <i class="fa-solid fa-bed"></i>
                        </div>
                        <div class="expand-toggle" v-if="!expandedLevels.level4">
                          <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div class="expand-toggle" v-else>
                          <i class="fa-solid fa-chevron-up"></i>
                        </div>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">HOSTELS</h4>
                        <p class="card-subtitle">Residential</p>
                      </div>
                    </div>
                  </div>

                  <!-- STAFF LEVEL -->
                  <template v-if="expandedLevels.level4">
                    <div class="org-level staff-level">
                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-user-cog"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">OFFICE SUPERINTENDENT</h4>
                          <p class="card-subtitle">Administrative Head</p>
                        </div>
                      </div>

                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-chalkboard-teacher"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">HOD</h4>
                          <p class="card-subtitle">Department Head</p>
                        </div>
                      </div>

                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-users-cog"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">COMMITTEE MEMBERS</h4>
                          <p class="card-subtitle">Various Committees</p>
                        </div>
                      </div>

                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-book-reader"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">LIBRARIAN</h4>
                          <p class="card-subtitle">Library Head</p>
                        </div>
                      </div>

                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-cogs"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">MANAGER</h4>
                          <p class="card-subtitle">Estate Manager</p>
                        </div>
                      </div>

                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-running"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">PHYSICAL DIRECTOR</h4>
                          <p class="card-subtitle">Sports Head</p>
                        </div>
                      </div>

                      <div class="org-card staff-card">
                        <div class="card-header">
                          <div class="avatar staff-avatar">
                            <i class="fa-solid fa-home"></i>
                          </div>
                        </div>
                        <div class="card-body">
                          <h4 class="card-title">WARDEN</h4>
                          <p class="card-subtitle">Hostel Head</p>
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </template>
            </template>
          </div>
        </div>
      </section>

      <!-- INSTRUCTIONS -->
      <section class="card-section">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-info-circle"></i> How to Use</h2>
          <div class="instructions">
            <div class="instruction-item">
              <div class="instruction-icon">
                <i class="fa-solid fa-mouse-pointer"></i>
              </div>
              <div class="instruction-content">
                <h4>Click to Expand</h4>
                <p>Click on any organizational level to expand and see its sub-levels. Only one level expands at a time.</p>
              </div>
            </div>
            <div class="instruction-item">
              <div class="instruction-icon">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
              <div class="instruction-content">
                <h4>Visual Indicators</h4>
                <p>Look for the chevron icons (▼/▲) to see which levels can be expanded or are currently expanded.</p>
              </div>
            </div>
            <div class="instruction-item">
              <div class="instruction-icon">
                <i class="fa-solid fa-sync"></i>
              </div>
              <div class="instruction-content">
                <h4>Auto-Collapse</h4>
                <p>When you expand a new level, all other levels automatically collapse to maintain clarity.</p>
              </div>
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
import { ref } from 'vue'

export default {
  name: 'Organogram',
  components: {
    Header,
    NavBar,
    Footer
  },
  setup() {
    const expandedLevels = ref({
      level1: false,
      level2: false,
      level3: false,
      level4: false
    })

    const toggleLevel = (level) => {
      // Close all other levels
      Object.keys(expandedLevels.value).forEach(key => {
        if (key !== level) {
          expandedLevels.value[key] = false
        }
      })
      // Toggle current level
      expandedLevels.value[level] = !expandedLevels.value[level]
    }

    return {
      expandedLevels,
      toggleLevel
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
  padding: 1.5rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 1.5rem;
}

.card:last-child {
  margin-bottom: 0;
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
  font-weight: 700;
  color: var(--ink);
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.section-title-sm i {
  color: var(--orange);
  font-size: 1rem;
}

.lead {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* MICROSOFT TEAMS STYLE ORGANIZATIONAL CHART */
.teams-org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  position: relative;
}

.org-level {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  position: relative;
}

/* ORGANIZATIONAL CARDS */
.org-card {
  background: #fff;
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  padding: 1.5rem;
  min-width: 200px;
  max-width: 250px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.org-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  border-color: var(--orange);
}

/* CARD HEADER */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 600;
}

/* AVATAR COLORS */
.trust-avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.management-avatar {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.principal-avatar {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.department-avatar {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.staff-avatar {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

/* EXPAND TOGGLE */
.expand-toggle {
  color: var(--orange);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.expand-toggle:hover {
  transform: scale(1.2);
}

/* CARD BODY */
.card-body {
  text-align: center;
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.card-subtitle {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0;
  line-height: 1.4;
}

/* LEVEL SPECIFIC STYLING */
.top-level {
  margin-bottom: 1rem;
}

.top-level .org-card {
  min-width: 300px;
  max-width: 400px;
}

.top-level .avatar {
  width: 60px;
  height: 60px;
  font-size: 1.8rem;
}

.top-level .card-title {
  font-size: 1.2rem;
}

.management-level {
  margin-bottom: 1rem;
}

.management-level .org-card {
  min-width: 220px;
  max-width: 280px;
}

.principal-level {
  margin-bottom: 1rem;
}

.principal-level .org-card {
  min-width: 250px;
  max-width: 300px;
}

.departments-level {
  margin-bottom: 1rem;
}

.departments-level .org-card {
  min-width: 180px;
  max-width: 220px;
}

.staff-level {
  margin-bottom: 1rem;
}

.staff-level .org-card {
  min-width: 160px;
  max-width: 200px;
}

.staff-level .avatar {
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
}

.staff-level .card-title {
  font-size: 0.9rem;
}

.staff-level .card-subtitle {
  font-size: 0.8rem;
}

/* CONNECTION LINES */
.org-level::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 1rem;
  background: #e1e5e9;
  z-index: 1;
}

.top-level::before {
  display: none;
}

/* HORIZONTAL CONNECTORS FOR MULTIPLE CARDS */
.management-level::after,
.departments-level::after,
.staff-level::after {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background: #e1e5e9;
  z-index: 1;
}

/* VERTICAL CONNECTORS FROM HORIZONTAL LINE TO CARDS */
.management-level .org-card::before,
.departments-level .org-card::before,
.staff-level .org-card::before {
  content: '';
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 1rem;
  background: #e1e5e9;
  z-index: 1;
}

/* INSTRUCTIONS */
.instructions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.instruction-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.instruction-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
  border-color: var(--orange);
}

.instruction-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: var(--orange);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.25rem;
}

.instruction-content {
  flex: 1;
}

.instruction-content h4 {
  color: var(--ink);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.instruction-content p {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

/* RESPONSIVE DESIGN */
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
  
  .org-level {
    gap: 1.5rem;
  }
  
  .org-card {
    min-width: 180px;
    max-width: 220px;
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
  
  .teams-org-chart {
    gap: 1.5rem;
    padding: 1rem 0;
  }
  
  .org-level {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .org-card {
    min-width: 160px;
    max-width: 200px;
    padding: 1rem;
  }
  
  .top-level .org-card {
    min-width: 250px;
    max-width: 300px;
  }
  
  .management-level .org-card {
    min-width: 200px;
    max-width: 250px;
  }
  
  .principal-level .org-card {
    min-width: 220px;
    max-width: 280px;
  }
  
  .departments-level .org-card {
    min-width: 160px;
    max-width: 200px;
  }
  
  .staff-level .org-card {
    min-width: 140px;
    max-width: 180px;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .top-level .avatar {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .card-title {
    font-size: 0.9rem;
  }
  
  .top-level .card-title {
    font-size: 1.1rem;
  }
  
  .card-subtitle {
    font-size: 0.8rem;
  }
  
  .instructions {
    grid-template-columns: 1fr;
  }
  .instruction-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>