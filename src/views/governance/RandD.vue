<template>
  <div>
    <Header />
    <NavBar />

    <main class="rd-page">
      <!-- Hero -->
      <header class="hero text-center">
        <div class="container">
          <h1 class="display-5 fw-bold text-white">Research & Development</h1>
          <p class="lead text-white-50">
            Fostering Innovation, Research Excellence, and Technological Advancement
          </p>
          <p class="tagline">VIPASSANA Educational Society • Sai Spurthi Institute of Technology</p>
        </div>
      </header>

      <!-- STICKY SUB NAV -->
      <nav class="subnav" aria-label="Section navigation">
        <div class="container subnav-inner">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="chip"
            :class="{ active: activeTab === tab.id }"
            @click="setTab(tab.id)"
            :aria-controls="tab.id"
            role="tab"
            :aria-selected="activeTab === tab.id"
          >
            <i :class="tab.icon" aria-hidden="true"></i> {{ tab.label }}
          </button>
        </div>
      </nav>

      <!-- CONTENT -->
      <main class="container content" id="content">
        <!-- Overview -->
        <section :id="tabsMap.overview" class="card-section" v-show="activeTab==='overview'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-lightbulb"></i> R&D Overview</h2>
            <p class="lead">
              The Research and Development Cell at Sai Spurthi Institute of Technology is dedicated to promoting 
              innovation, research culture, and technological advancement among faculty and students. We focus on 
              industry-relevant research, innovative solutions, and collaborative projects.
            </p>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <i class="fa-solid fa-project-diagram"></i>
              <div>
                <div class="stat-number">50+</div>
                <div class="stat-label">Research Projects</div>
              </div>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-file-alt"></i>
              <div>
                <div class="stat-number">100+</div>
                <div class="stat-label">Publications</div>
              </div>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-award"></i>
              <div>
                <div class="stat-number">25+</div>
                <div class="stat-label">Patents Filed</div>
              </div>
            </div>
            <div class="stat-card">
              <i class="fa-solid fa-handshake"></i>
              <div>
                <div class="stat-number">15+</div>
                <div class="stat-label">Industry Collaborations</div>
              </div>
            </div>
          </div>

          <div class="grid-2 mt-4">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-bullseye"></i> Vision</h3>
              <p>
                To establish SSIT as a center of excellence in research and innovation, contributing to technological 
                advancement and societal development through cutting-edge research in emerging areas of engineering 
                and technology.
              </p>
            </article>

            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-rocket"></i> Mission</h3>
              <ul class="bullets">
                <li>Promote a strong research culture among faculty and students</li>
                <li>Facilitate quality publications in reputed journals and conferences</li>
                <li>Encourage interdisciplinary research and collaborative projects</li>
                <li>Foster industry-academia partnerships for practical research</li>
                <li>Support patent filing and intellectual property development</li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Research Areas -->
        <section :id="tabsMap.areas" class="card-section" v-show="activeTab==='areas'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-microscope"></i> Research Focus Areas</h2>
            <p class="lead">
              Our research initiatives span across multiple domains, addressing contemporary challenges and 
              emerging technologies.
            </p>
          </div>

          <div class="grid-3">
            <article v-for="area in researchAreas" :key="area.title" class="area-card">
              <div class="area-icon" :style="{ background: area.color }">
                <i :class="area.icon"></i>
              </div>
              <h3 class="area-title">{{ area.title }}</h3>
              <p class="area-desc">{{ area.description }}</p>
              <ul class="area-topics">
                <li v-for="topic in area.topics" :key="topic">{{ topic }}</li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Publications -->
        <section :id="tabsMap.publications" class="card-section" v-show="activeTab==='publications'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-book-open"></i> Research Publications</h2>
            <p class="lead">
              Our faculty and students have published numerous research papers in reputed national and 
              international journals and conferences.
            </p>
          </div>

          <div class="grid-2">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-newspaper"></i> Journals</h3>
              <ul class="publication-list">
                <li v-for="pub in journals" :key="pub">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>{{ pub }}</span>
                </li>
              </ul>
            </article>

            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-users"></i> Conferences</h3>
              <ul class="publication-list">
                <li v-for="conf in conferences" :key="conf">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>{{ conf }}</span>
                </li>
              </ul>
            </article>
          </div>

          <div class="card mt-4">
            <h3 class="section-title-sm"><i class="fa-solid fa-chart-line"></i> Publication Statistics</h3>
            <div class="pub-stats">
              <div class="pub-stat-item">
                <div class="pub-stat-number">40+</div>
                <div class="pub-stat-label">SCI/Scopus Indexed</div>
              </div>
              <div class="pub-stat-item">
                <div class="pub-stat-number">60+</div>
                <div class="pub-stat-label">National Journals</div>
              </div>
              <div class="pub-stat-item">
                <div class="pub-stat-number">80+</div>
                <div class="pub-stat-label">Conference Papers</div>
              </div>
            </div>
          </div>
        </section>

        <!-- Projects -->
        <section :id="tabsMap.projects" class="card-section" v-show="activeTab==='projects'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-diagram-project"></i> Ongoing Projects</h2>
            <p class="lead">
              Our departments are actively engaged in research projects funded by various government and 
              industry organizations.
            </p>
          </div>

          <div class="projects-grid">
            <article v-for="project in projects" :key="project.title" class="project-card">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-status" :class="project.statusClass">{{ project.status }}</span>
              </div>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-meta">
                <div class="meta-item">
                  <i class="fa-solid fa-user-tie"></i>
                  <span>{{ project.pi }}</span>
                </div>
                <div class="meta-item">
                  <i class="fa-solid fa-building"></i>
                  <span>{{ project.department }}</span>
                </div>
                <div class="meta-item">
                  <i class="fa-solid fa-calendar"></i>
                  <span>{{ project.duration }}</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <!-- Collaborations -->
        <section :id="tabsMap.collaborations" class="card-section" v-show="activeTab==='collaborations'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-handshake"></i> Industry & Academic Collaborations</h2>
            <p class="lead">
              We collaborate with leading industries, research institutions, and academic organizations to 
              enhance research capabilities and provide practical exposure to students.
            </p>
          </div>

          <div class="grid-2">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-industry"></i> Industry Partners</h3>
              <div class="partners-grid">
                <div v-for="partner in industryPartners" :key="partner" class="partner-item">
                  <i class="fa-solid fa-building"></i>
                  <span>{{ partner }}</span>
                </div>
              </div>
            </article>

            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-university"></i> Academic Partners</h3>
              <div class="partners-grid">
                <div v-for="partner in academicPartners" :key="partner" class="partner-item">
                  <i class="fa-solid fa-graduation-cap"></i>
                  <span>{{ partner }}</span>
                </div>
              </div>
            </article>
          </div>

          <div class="card mt-4">
            <h3 class="section-title-sm"><i class="fa-solid fa-certificate"></i> MoUs & Partnerships</h3>
            <ul class="bullets">
              <li v-for="mou in mous" :key="mou">{{ mou }}</li>
            </ul>
          </div>
        </section>

        <!-- Facilities -->
        <section :id="tabsMap.facilities" class="card-section" v-show="activeTab==='facilities'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-flask"></i> R&D Facilities</h2>
            <p class="lead">
              State-of-the-art research facilities and laboratories equipped with modern instruments and 
              software for conducting advanced research.
            </p>
          </div>

          <div class="grid-3">
            <article v-for="facility in facilities" :key="facility.title" class="facility-card">
              <div class="facility-icon" :style="{ background: facility.color }">
                <i :class="facility.icon"></i>
              </div>
              <h3 class="facility-title">{{ facility.title }}</h3>
              <ul class="facility-list">
                <li v-for="item in facility.items" :key="item">{{ item }}</li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Contact -->
        <section :id="tabsMap.contact" class="card-section" v-show="activeTab==='contact'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-address-book"></i> Contact R&D Cell</h2>
            <div class="grid-2">
              <div>
                <h3 class="h6 mb-3">R&D Coordinator</h3>
                <p><strong>Name:</strong> Dr. [Coordinator Name]</p>
                <p><strong>Designation:</strong> Professor & R&D Coordinator</p>
                <p><strong>Email:</strong> <a href="mailto:rnd@ssit.edu.in">rnd@ssit.edu.in</a></p>
                <p><strong>Phone:</strong> 08761-288278</p>
                <p><strong>Office:</strong> R&D Block, SSIT Campus</p>
              </div>
              
              <aside class="note">
                <h4 class="note-title"><i class="fa-solid fa-info-circle"></i> Research Opportunities</h4>
                <p class="mb-3">
                  Faculty and students interested in research projects, funding opportunities, or collaborations 
                  can contact the R&D Cell.
                </p>
                <div class="quick-links">
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-file-alt"></i> Research Proposal Form
                  </a>
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-coins"></i> Funding Opportunities
                  </a>
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-book"></i> Research Guidelines
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

const router = useRouter()
const route = useRoute()

// Tabs configuration
const tabs = [
  { id: 'overview', label: 'Overview', icon: 'fa-solid fa-lightbulb', path: '/r-and-d/overview' },
  { id: 'areas', label: 'Research Areas', icon: 'fa-solid fa-microscope', path: '/r-and-d/research-areas' },
  { id: 'publications', label: 'Publications', icon: 'fa-solid fa-book-open', path: '/r-and-d/publications' },
  { id: 'projects', label: 'Projects', icon: 'fa-solid fa-diagram-project', path: '/r-and-d/projects' },
  { id: 'collaborations', label: 'Collaborations', icon: 'fa-solid fa-handshake', path: '/r-and-d/collaborations' },
  { id: 'facilities', label: 'Facilities', icon: 'fa-solid fa-flask', path: '/r-and-d/facilities' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-address-book', path: '/r-and-d/contact' }
]

const tabsMap = {
  overview: 'overview',
  areas: 'areas',
  publications: 'publications',
  projects: 'projects',
  collaborations: 'collaborations',
  facilities: 'facilities',
  contact: 'contact'
}

const activeTab = ref('overview')

const setTab = (id) => {
  activeTab.value = id
  const tab = tabs.find(t => t.id === id)
  if (tab && tab.path) {
    router.push(tab.path)
  }
}

// Initialize active tab based on route
onMounted(() => {
  const pathToKey = {
    '/r-and-d/overview': 'overview',
    '/r-and-d/research-areas': 'areas',
    '/r-and-d/publications': 'publications',
    '/r-and-d/projects': 'projects',
    '/r-and-d/collaborations': 'collaborations',
    '/r-and-d/facilities': 'facilities',
    '/r-and-d/contact': 'contact'
  }
  const key = pathToKey[route.path]
  if (key) {
    activeTab.value = key
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathToKey = {
    '/r-and-d/overview': 'overview',
    '/r-and-d/research-areas': 'areas',
    '/r-and-d/publications': 'publications',
    '/r-and-d/projects': 'projects',
    '/r-and-d/collaborations': 'collaborations',
    '/r-and-d/facilities': 'facilities',
    '/r-and-d/contact': 'contact'
  }
  const key = pathToKey[newPath]
  if (key) {
    activeTab.value = key
  }
})

// Research Areas Data
const researchAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Advanced AI/ML research focusing on real-world applications and intelligent systems.',
    icon: 'fa-solid fa-brain',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    topics: ['Deep Learning', 'Neural Networks', 'Natural Language Processing', 'Computer Vision']
  },
  {
    title: 'Internet of Things (IoT)',
    description: 'Smart systems and connected devices for automation and monitoring.',
    icon: 'fa-solid fa-network-wired',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    topics: ['Smart Cities', 'Industrial IoT', 'Healthcare IoT', 'Agriculture IoT']
  },
  {
    title: 'Data Science & Analytics',
    description: 'Big data analysis, predictive modeling, and business intelligence.',
    icon: 'fa-solid fa-chart-line',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    topics: ['Big Data', 'Predictive Analytics', 'Data Mining', 'Business Intelligence']
  },
  {
    title: 'Renewable Energy Systems',
    description: 'Sustainable energy solutions and green technology research.',
    icon: 'fa-solid fa-solar-panel',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    topics: ['Solar Energy', 'Wind Power', 'Energy Storage', 'Smart Grids']
  },
  {
    title: 'VLSI & Embedded Systems',
    description: 'Advanced chip design and embedded system development.',
    icon: 'fa-solid fa-microchip',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    topics: ['FPGA Design', 'SoC Development', 'Embedded AI', 'Low Power Design']
  },
  {
    title: 'Robotics & Automation',
    description: 'Intelligent robots and automated systems for industry and healthcare.',
    icon: 'fa-solid fa-robot',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    topics: ['Industrial Robotics', 'Autonomous Systems', 'Drone Technology', 'RPA']
  }
]

// Publications Data
const journals = [
  'IEEE Transactions on Neural Networks and Learning Systems',
  'Elsevier - Expert Systems with Applications',
  'Springer - Journal of Intelligent Manufacturing',
  'Wiley - International Journal of Communication Systems',
  'Taylor & Francis - Cogent Engineering',
  'MDPI - Sensors and Electronics'
]

const conferences = [
  'IEEE International Conference on Machine Learning',
  'ACM Conference on Computing and Communication',
  'Springer ICICIT - International Conference on Information Technology',
  'IEEE CONECCT - Electronics, Computing and Communication',
  'National Conference on Emerging Technologies (NCET)',
  'International Conference on IoT and Smart Systems'
]

// Projects Data
const projects = [
  {
    title: 'AI-Based Healthcare Diagnosis System',
    description: 'Development of machine learning models for early disease detection and diagnosis using medical imaging.',
    pi: 'Dr. [Name], CSE Department',
    department: 'CSE',
    duration: '2023-2025',
    status: 'Ongoing',
    statusClass: 'status-ongoing'
  },
  {
    title: 'Smart Agriculture Monitoring System',
    description: 'IoT-based solution for real-time crop monitoring, soil analysis, and automated irrigation.',
    pi: 'Dr. [Name], ECE Department',
    department: 'ECE',
    duration: '2023-2024',
    status: 'Ongoing',
    statusClass: 'status-ongoing'
  },
  {
    title: 'Renewable Energy Grid Optimization',
    description: 'Research on optimizing power distribution in renewable energy integrated smart grids.',
    pi: 'Dr. [Name], EEE Department',
    department: 'EEE',
    duration: '2022-2024',
    status: 'Ongoing',
    statusClass: 'status-ongoing'
  },
  {
    title: 'Industrial Automation Using Robotics',
    description: 'Development of robotic systems for manufacturing process automation and quality control.',
    pi: 'Dr. [Name], MECH Department',
    department: 'MECH',
    duration: '2023-2025',
    status: 'Ongoing',
    statusClass: 'status-ongoing'
  },
  {
    title: 'Blockchain for Supply Chain Management',
    description: 'Implementation of blockchain technology for transparent and secure supply chain operations.',
    pi: 'Dr. [Name], CSE Department',
    department: 'CSE',
    duration: '2022-2023',
    status: 'Completed',
    statusClass: 'status-completed'
  },
  {
    title: 'Electric Vehicle Charging Infrastructure',
    description: 'Design and development of efficient EV charging stations with smart grid integration.',
    pi: 'Dr. [Name], EEE Department',
    department: 'EEE',
    duration: '2021-2023',
    status: 'Completed',
    statusClass: 'status-completed'
  }
]

// Industry Partners
const industryPartners = [
  'Microsoft Corporation',
  'Cisco Systems',
  'Wipro Technologies',
  'Amazon Web Services (AWS)',
  'Oracle Corporation',
  'Hetero Pharmaceuticals',
  'Infosys Limited',
  'TCS Innovation Labs'
]

const academicPartners = [
  'IIT Hyderabad',
  'IIIT Hyderabad',
  'JNTUH Research Center',
  'DRDO - Defense Research',
  'ISRO - Space Applications',
  'CSIR Laboratories'
]

const mous = [
  'Microsoft - Cloud Computing and AI Research',
  'Cisco - Networking and Cybersecurity Projects',
  'AWS Academy - Cloud Infrastructure Research',
  'Wipro - Industry 4.0 and Automation',
  'Oracle - Database and Enterprise Solutions',
  'NASSCOM - IT Industry Collaboration'
]

// Facilities Data
const facilities = [
  {
    title: 'Advanced Computing Lab',
    icon: 'fa-solid fa-computer',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    items: [
      'High-Performance Computing Cluster',
      'GPU Servers for Deep Learning',
      'Cloud Computing Infrastructure',
      'Big Data Analytics Tools'
    ]
  },
  {
    title: 'Electronics Research Lab',
    icon: 'fa-solid fa-microchip',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    items: [
      'VLSI Design Tools',
      'FPGA Development Boards',
      'PCB Design Software',
      'IoT Development Kits'
    ]
  },
  {
    title: 'Innovation & Prototyping',
    icon: 'fa-solid fa-screwdriver-wrench',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    items: [
      '3D Printers',
      'CNC Machines',
      'Electronics Workshop',
      'Fabrication Tools'
    ]
  }
]
</script>

<style scoped>
/* THEME TOKENS */
:root {
  --orange: #f97316;
  --ink: #1a2238;
  --muted: #6b7280;
  --border: #e5e7eb;
  --card: #fff;
}

/* GENERIC */
.container {
  width: min(1180px, 92%);
  margin-inline: auto;
}

.lead {
  font-size: 1.05rem;
  color: #374151;
  line-height: 1.6;
}

.h6 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
}

.mb-3 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

/* HERO */
.hero {
  background: var(--ink);
  padding: 3rem 0;
  color: #fff;
}

.hero h1 {
  color: #fff;
  margin-bottom: 1rem;
}

.hero .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
}

.display-5 {
  font-size: 2.2rem;
  font-weight: 800;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.75);
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 0.5rem;
}

/* SUBNAV */
.subnav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.subnav-inner {
  display: flex;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  flex-wrap: wrap;
}

.chip {
  border: 1px solid var(--border);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: 0.5rem 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: all 0.2s ease;
  cursor: pointer;
}

.chip i {
  color: var(--orange);
}

.chip:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.chip:hover i {
  color: #fff;
}

.chip.active {
  border-color: var(--orange);
  background: var(--orange);
  color: #fff;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
  font-weight: 700;
}

.chip.active i {
  color: #fff;
}

/* CONTENT */
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
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
}

.section-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1rem;
}

.section-title i {
  color: var(--orange);
}

.section-title-sm {
  font-weight: 800;
  color: var(--ink);
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.section-title-sm i {
  color: var(--orange);
}

/* GRIDS */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 1.2rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 1.2rem;
}

/* STATS */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.2rem;
}

.stat-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(249, 115, 22, 0.15);
  border-color: var(--orange);
}

.stat-card i {
  color: var(--orange);
  font-size: 2rem;
}

.stat-number {
  font-weight: 900;
  font-size: 1.5rem;
  color: var(--ink);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--muted);
}

/* BULLETS */
.bullets {
  padding-left: 1.2rem;
}

.bullets li {
  margin: 0.4rem 0;
  color: #374151;
}

/* RESEARCH AREA CARDS */
.area-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.area-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--orange);
}

.area-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.area-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem;
}

.area-desc {
  color: #374151;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.area-topics {
  list-style: none;
  padding: 0;
  margin: 0;
}

.area-topics li {
  padding: 0.4rem 0;
  font-size: 0.85rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.area-topics li:before {
  content: '•';
  color: var(--orange);
  font-weight: 700;
  font-size: 1.2rem;
}

/* PUBLICATION LIST */
.publication-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.publication-list li {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  border-left: 3px solid var(--orange);
  background: rgba(249, 115, 22, 0.03);
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
}

.publication-list li:hover {
  background: rgba(249, 115, 22, 0.08);
  transform: translateX(5px);
}

.publication-list i {
  color: var(--orange);
  font-size: 1rem;
}

.publication-list span {
  color: #374151;
  font-size: 0.9rem;
}

/* PUBLICATION STATS */
.pub-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.pub-stat-item {
  text-align: center;
  padding: 1.5rem;
  background: rgba(249, 115, 22, 0.05);
  border-radius: 12px;
  border: 2px solid rgba(249, 115, 22, 0.15);
  transition: all 0.3s ease;
}

.pub-stat-item:hover {
  transform: translateY(-5px);
  background: rgba(249, 115, 22, 0.1);
  border-color: var(--orange);
}

.pub-stat-number {
  font-size: 2rem;
  font-weight: 900;
  color: var(--orange);
  margin-bottom: 0.5rem;
}

.pub-stat-label {
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 600;
}

/* PROJECT CARDS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.2rem;
  margin-top: 1.2rem;
}

.project-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--orange);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  flex: 1;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.status-ongoing {
  background: rgba(34, 197, 94, 0.15);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-completed {
  background: rgba(59, 130, 246, 0.15);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.project-desc {
  color: #374151;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #4b5563;
}

.meta-item i {
  color: var(--orange);
  width: 16px;
}

/* PARTNERS */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
}

.partner-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(249, 115, 22, 0.05);
  border-radius: 8px;
  border-left: 3px solid var(--orange);
  transition: all 0.3s ease;
}

.partner-item:hover {
  background: rgba(249, 115, 22, 0.1);
  transform: translateX(5px);
}

.partner-item i {
  color: var(--orange);
  font-size: 1.2rem;
}

.partner-item span {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink);
}

/* FACILITY CARDS */
.facility-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.facility-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--orange);
}

.facility-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.facility-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 1rem;
}

.facility-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.facility-list li {
  padding: 0.5rem 0;
  font-size: 0.85rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
}

.facility-list li:last-child {
  border-bottom: none;
}

.facility-list li:before {
  content: '✓';
  color: var(--orange);
  font-weight: 700;
}

/* NOTE BOX */
.note {
  background: linear-gradient(180deg, #f8fafc, #eef4ff);
  border: 1px dashed var(--border);
  border-radius: 0.9rem;
  padding: 1.25rem;
}

.note-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.note-title i {
  color: var(--orange);
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-link-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--ink);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.quick-link-btn i {
  color: var(--orange);
}

.quick-link-btn:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateX(4px);
}

.quick-link-btn:hover i {
  color: #fff;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .partners-grid {
    grid-template-columns: 1fr;
  }

  .display-5 {
    font-size: 1.8rem;
  }

  .hero {
    padding: 2rem 0;
  }
}
</style>

