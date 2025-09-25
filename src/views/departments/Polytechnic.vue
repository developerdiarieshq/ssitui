<template>
  <div class="polytechnic-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Polytechnic Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Polytechnic</h1>
          <p class="tagline">Practical Skills for a Technical Tomorrow</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Established</span>
              <span class="qf-value">{{ facts.established }}</span>
            </li>
            <li>
              <span class="qf-label">Total Intake</span>
              <span class="qf-value">{{ facts.intakeUG }}</span>
            </li>
            <li>
              <span class="qf-label">Student Strength</span>
              <span class="qf-value">{{ facts.studentStrength }}</span>
            </li>
            <li>
              <span class="qf-label">Programs</span>
              <span class="qf-value">DME • DEE • DEC</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
            alt="Polytechnic Engineering themed visual"
            class="hero-img"
          />
        </picture>
      </div>
    </header>

    <!-- STICKY SUB NAV (nav-pills) -->
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

    <!-- CONTENT (tab panes) -->
    <main class="container content" id="content">
      <!-- ABOUT -->
      <section class="card-section" v-show="activeTab==='overview'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-school"></i> About the Department</h2>
          <p class="lead">
            Polytechnic Courses DME, DEE and DEC offered from {{ facts.established }} with a vision of being recognized as the center for excellence. The objective of the department is to offer technical courses that will prepare the students to develop themselves into quality professionals.
          </p>
          <div class="stats">
            <div class="stat" v-for="s in aboutStats" :key="s.label">
              <i :class="s.icon"></i>
              <div>
                <div class="num">{{ s.value }}</div>
                <div class="label">{{ s.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-2">
          <article class="card">
            <h3 class="h5 text-muted mb-2">Vision</h3>
            <p>
              To be recognized as the center for excellence in polytechnic education, producing skilled technicians and engineers who contribute to the technological advancement of society.
            </p>
            <h3 class="h5 text-muted mt-4 mb-2">Mission</h3>
            <ul class="bullets">
              <li>Offer technical courses that prepare students to develop into quality professionals.</li>
              <li>Provide practical skills and hands-on training in mechanical, electrical, and computer engineering.</li>
              <li>Foster innovation, creativity, and problem-solving abilities in students.</li>
              <li>Maintain high academic standards and industry relevance in all programs.</li>
            </ul>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>DME (Diploma in Mechanical Engineering)</strong> — Practical mechanical engineering skills and manufacturing processes.</li>
              <li><strong>DEE (Diploma in Electrical Engineering)</strong> — Electrical systems, power generation, and automation technologies.</li>
              <li><strong>DEC (Diploma in Electronics & Communication)</strong> — Electronics circuits, communication systems, and digital technologies.</li>
            </ul>
            <h4 class="h6 mt-3 mb-2">Intake Information</h4>
            <p class="mb-2">
              Presently the polytechnic has an intake of {{ facts.intakeUG }} students and the total student strength is about {{ facts.studentStrength }}. The continual university ranks, high GATE scores and placements of students in various Software Companies in and around the country reflect the performance of the department.
            </p>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">Download Syllabus</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Highlights</a>
            </div>
          </article>
        </div>

      </section>

      <!-- FACULTY DIRECTORY -->
      <section class="card-section" v-show="activeTab==='faculty'">
        <div class="card">
          <div class="section-header">
            <h2 class="section-title"><i class="fa-solid fa-users-gear"></i> Faculty Directory</h2>
            <div class="filters" role="search">
              <input
                v-model="query"
                type="search"
                placeholder="Search by name or expertise…"
                aria-label="Search faculty"
              />
              <select v-model="designation" aria-label="Filter by designation">
                <option value="ALL">All Designations</option>
                <option v-for="d in designations" :key="d" :value="d">{{ d }}</option>
              </select>
            </div>
          </div>

          <div class="faculty-grid">
            <article
              v-for="f in filteredFaculty"
              :key="f.email"
              class="faculty-card"
              :aria-label="`Faculty: ${f.name}`"
              tabindex="0"
            >
              <img :src="f.photo" :alt="`${f.name} photo`" class="avatar" />
              <div class="fc-body">
                <h3 class="fc-name">{{ f.name }}</h3>
                <p class="fc-meta">
                  <span class="badge">{{ f.designation }}</span> • {{ f.qualification }}
                </p>
                <p class="fc-tags">
                  <i class="fa-solid fa-brain"></i> {{ f.expertise.join(', ') }}
                </p>
                <div class="fc-links">
                  <a :href="`mailto:${f.email}`" class="icon-link" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                  <a v-if="f.profile" :href="f.profile" target="_blank" rel="noopener" class="icon-link" aria-label="Research Profile">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </a>
                  <a v-if="f.linkedin" :href="f.linkedin" target="_blank" rel="noopener" class="icon-link" aria-label="LinkedIn">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <p v-if="!filteredFaculty.length" class="muted mt-2">No matching faculty found.</p>
        </div>
      </section>

      <!-- LABS / INFRA -->
      <section class="card-section" v-show="activeTab==='labs'">
        <h2 class="section-title"><i class="fa-solid fa-flask"></i> Labs & Research Infrastructure</h2>
        <div class="labs-grid">
          <article v-for="lab in labs" :key="lab.title" class="lab-card">
            <img :src="lab.img" :alt="lab.title" />
            <div class="lab-body">
              <h3 class="lab-title">{{ lab.title }}</h3>
              <p class="lab-text">{{ lab.desc }}</p>
              <ul class="lab-tags"><li v-for="t in lab.tags" :key="t">{{ t }}</li></ul>
            </div>
          </article>
        </div>
        <div class="muted mt-1">
          <i class="fa-solid fa-server"></i> GPU servers • <i class="fa-solid fa-cloud"></i> Cloud credits •
          <i class="fa-solid fa-database"></i> Open datasets • <i class="fa-solid fa-gear"></i> TF • PyTorch • Scikit-learn
        </div>
      </section>

      <!-- CURRICULUM -->
      <section class="card-section" aria-labelledby="curriculum" v-show="activeTab==='curriculum'">
        <div class="card">
          <h2 class="section-title" id="curriculum"><i class="fa-solid fa-file-lines"></i> Course Structure for all Years</h2>
          <p class="lead">
            Download the Course Structure and Syllabus of Polytechnic Courses
          </p>
          
          <div class="course-structure">
            <div class="course-grid">
              <div class="course-card">
                <div class="course-header">
                  <i class="fa-solid fa-microchip course-icon"></i>
                  <h3 class="course-title">DECE</h3>
                  <p class="course-subtitle">Diploma in Electronics & Communication Engineering</p>
                </div>
                <div class="course-content">
                  <p class="course-desc">Comprehensive program covering digital electronics, communication systems, microcontrollers, and modern telecommunication technologies.</p>
                  <div class="course-features">
                    <span class="feature-tag">Digital Electronics</span>
                    <span class="feature-tag">Communication Systems</span>
                    <span class="feature-tag">Microcontrollers</span>
                    <span class="feature-tag">Telecommunications</span>
                  </div>
                </div>
              </div>
              
              <div class="course-card">
                <div class="course-header">
                  <i class="fa-solid fa-bolt course-icon"></i>
                  <h3 class="course-title">DEEE</h3>
                  <p class="course-subtitle">Diploma in Electrical & Electronics Engineering</p>
                </div>
                <div class="course-content">
                  <p class="course-desc">Integrated program combining electrical power systems with electronics, focusing on power generation, transmission, and modern electrical devices.</p>
                  <div class="course-features">
                    <span class="feature-tag">Power Systems</span>
                    <span class="feature-tag">Electrical Machines</span>
                    <span class="feature-tag">Control Systems</span>
                    <span class="feature-tag">Power Electronics</span>
                  </div>
                </div>
              </div>
              
              <div class="course-card">
                <div class="course-header">
                  <i class="fa-solid fa-cog course-icon"></i>
                  <h3 class="course-title">DME</h3>
                  <p class="course-subtitle">Diploma in Mechanical Engineering</p>
                </div>
                <div class="course-content">
                  <p class="course-desc">Traditional mechanical engineering program covering design, manufacturing, thermal systems, and modern mechanical technologies.</p>
                  <div class="course-features">
                    <span class="feature-tag">Machine Design</span>
                    <span class="feature-tag">Manufacturing</span>
                    <span class="feature-tag">Thermal Engineering</span>
                    <span class="feature-tag">CAD/CAM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 class="section-title-sm mt-3"><i class="fa-solid fa-download"></i> Download Course Structure & Syllabus</h3>
          <div class="downloads">
            <a v-for="d in syllabus" :key="d.label" :href="d.href" class="download" target="_blank" rel="noopener">
              <i class="fa-solid fa-file-pdf"></i>
              <div>
                <div class="dl-label">{{ d.label }}</div>
                <div class="dl-sub">{{ d.note }}</div>
              </div>
            </a>
          </div>
          <div class="row-actions mt-1">
            <a class="btn btn-soft" href="/academics/regulations">Academic Regulations</a>
            <a class="btn btn-soft" href="/academics/calendar">Academic Calendar</a>
          </div>
        </div>
      </section>

      <!-- ACTIVITIES -->
      <section class="card-section" v-show="activeTab==='activities'">
        <h2 class="section-title"><i class="fa-solid fa-rocket"></i> Student Activities & Achievements</h2>
        <div class="grid-3">
          <article class="card" v-for="a in activities" :key="a.title">
            <h3 class="h6">{{ a.title }}</h3>
            <p class="muted">{{ a.desc }}</p>
          </article>
        </div>
      </section>

      <!-- RESEARCH & INDUSTRY -->
      <section class="card-section" v-show="activeTab==='research'">
        <div class="grid-2">
          <article class="card">
            <h2 class="section-title"><i class="fa-solid fa-microscope"></i> Research Highlights</h2>
            <ul class="bullets">
              <li v-for="p in research.projects" :key="p">{{ p }}</li>
            </ul>
            <h3 class="h6 mt-2">Recent Publications</h3>
            <ul class="bullets small">
              <li v-for="pub in research.publications" :key="pub.title">
                {{ pub.title }} <span class="muted">— {{ pub.venue }}</span>
              </li>
            </ul>
          </article>
          <article class="card">
            <h2 class="section-title"><i class="fa-solid fa-handshake"></i> Industry Connect</h2>
            <ul class="bullets">
              <li v-for="m in industry.mous" :key="m">{{ m }}</li>
            </ul>
            <div class="logo-row" aria-label="Partner logos">
              <img v-for="l in industry.logos" :key="l.alt" :src="l.src" :alt="l.alt" />
            </div>
          </article>
        </div>
      </section>

      <!-- PLACEMENTS -->
      <section class="card-section" v-show="activeTab==='placements'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-briefcase"></i> Placements & Opportunities</h2>
          <div class="stats">
            <div class="stat">
              <i class="fa-solid fa-chart-line"></i>
              <div>
                <div class="num">{{ placements.rate }}%</div>
                <div class="label">Placement Rate (AI/DS roles)</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-sack-dollar"></i>
              <div>
                <div class="num">₹{{ placements.highestLPA }}</div>
                <div class="label">Highest CTC (LPA)</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-coins"></i>
              <div>
                <div class="num">₹{{ placements.medianLPA }}</div>
                <div class="label">Median CTC (LPA)</div>
              </div>
            </div>
          </div>
          <div class="logo-row mt-1">
            <img v-for="l in placements.recruiters" :key="l.alt" :src="l.src" :alt="l.alt" />
          </div>
        </div>
      </section>

      <!-- ALUMNI -->
      <section class="card-section" v-show="activeTab==='alumni'">
        <div class="alumni-header">
          <h2 class="section-title"><i class="fa-solid fa-user-graduate"></i> Alumni Network</h2>
          <div class="year-filter">
            <label for="yearSelect" class="filter-label">Filter by Year:</label>
            <select 
              id="yearSelect" 
              v-model="selectedYear" 
              class="year-select"
              aria-label="Filter alumni by graduation year"
            >
              <option 
                v-for="year in availableYears" 
                :key="year" 
                :value="year"
              >
                {{ year === 'ALL' ? 'All Years' : year }}
              </option>
            </select>
          </div>
        </div>
        <div class="alumni-grid">
          <article v-for="al in filteredAlumni" :key="al.name" class="alumni-card">
            <img :src="al.photo" :alt="al.name" class="avatar" />
            <div class="alumni-info">
              <h3 class="h6">{{ al.name }}</h3>
              <p class="muted">{{ al.role }} — {{ al.company }}</p>
              <p class="yop" v-if="al.yop"><strong>YOP:</strong> {{ al.yop }}</p>
              <div class="social-links">
                <a v-if="al.linkedin" :href="al.linkedin" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a v-if="al.github" :href="al.github" target="_blank" rel="noopener" class="social-link" title="GitHub">
                  <i class="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
        <div class="row-actions mt-1">
          <a class="btn btn-primary" href="mailto:alumni@ssit.edu.in">Join Alumni Network</a>
        </div>
      </section>

      <!-- CONTACT -->
      <section class="card-section" v-show="activeTab==='contact'">
        <div class="card contact-card">
          <h2 class="section-title"><i class="fa-solid fa-address-book"></i> Contact Us</h2>
          <div class="contact-grid">
            <div>
              <h3 class="h6">Head of Department</h3>
              <p class="mb-0"><strong>{{ hod.name }}</strong></p>
              <p class="muted">{{ hod.designation }}</p>
              <p class="muted"><i class="fa-solid fa-location-dot"></i> {{ hod.location }}</p>
              <p class="muted"><i class="fa-solid fa-phone"></i> {{ hod.phone }}</p>
              <p class="muted"><i class="fa-solid fa-envelope"></i> <a :href="`mailto:${hod.email}`">{{ hod.email }}</a></p>
            </div>
            <aside class="note">
              <p class="mb-0"><i class="fa-solid fa-circle-info"></i> Follow our LinkedIn page for news, internships, and events.</p>
              <a class="btn btn-soft mt-1" href="#" aria-label="AI & DS LinkedIn">AI & DS LinkedIn</a>
            </aside>
          </div>
        </div>
        <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

/* Facts / Quick Stats */
const facts = { established: '2013', intakeUG: '120', studentStrength: '480' }

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '25+', icon: 'fa-solid fa-user-tie' },
  { label: 'Workshops', value: '8+', icon: 'fa-solid fa-flask' },
  { label: 'Programs', value: '3', icon: 'fa-solid fa-diagram-project' },
  { label: 'Placement', value: '85%+', icon: 'fa-solid fa-briefcase' }
]

/* Tabs */
const tabs = [
  { id: 'overview',   label: 'Overview',   icon: 'fa-solid fa-circle-dot' },
  { id: 'faculty',    label: 'Faculty',    icon: 'fa-solid fa-users' },
  { id: 'labs',       label: 'Labs',       icon: 'fa-solid fa-flask' },
  { id: 'curriculum', label: 'Curriculum', icon: 'fa-solid fa-file-lines' },
  { id: 'activities', label: 'Activities', icon: 'fa-solid fa-rocket' },
  { id: 'research',   label: 'Research',   icon: 'fa-solid fa-microscope' },
  { id: 'placements', label: 'Placements', icon: 'fa-solid fa-briefcase' },
  { id: 'alumni',     label: 'Alumni',     icon: 'fa-solid fa-user-graduate' },
  { id: 'contact',    label: 'Contact',    icon: 'fa-solid fa-address-book' }
]
const activeTab = ref(tabs[0].id)
const setTab = (id) => { activeTab.value = id } // tabbed view, no scroll

/* Faculty */
const faculty = ref([
  {
    name: 'Dr. S. Kumar', designation: 'Professor & HOD',
    qualification: 'Ph.D., Mechanical Engineering',
    expertise: ['Machine Design', 'Manufacturing', 'CAD/CAM'],
    email: 'hod.poly@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400',
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. R. Sharma', designation: 'Assistant Professor',
    qualification: 'M.Tech (Electrical Engineering)',
    expertise: ['Power Systems', 'Control Systems', 'Electrical Machines'],
    email: 'r.sharma@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400',
    profile: '#', linkedin: '#'
  },
  {
    name: 'Ms. P. Singh', designation: 'Assistant Professor',
    qualification: 'M.Tech (Electronics & Communication)',
    expertise: ['Digital Electronics', 'Communication Systems', 'Microcontrollers'],
    email: 'p.singh@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400',
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. A. Patel', designation: 'Associate Professor',
    qualification: 'M.Tech (Production Engineering)',
    expertise: ['Workshop Technology', 'Quality Control', 'Industrial Engineering'],
    email: 'a.patel@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400',
    profile: '#', linkedin: '#'
  }
])
const designations = ['Professor & HOD', 'Professor', 'Associate Professor', 'Assistant Professor']
const query = ref('')
const designation = ref('ALL')
const filteredFaculty = computed(() => {
  const q = query.value.trim().toLowerCase()
  return faculty.value.filter(f => {
    const matchesQuery =
      !q || f.name.toLowerCase().includes(q) || f.expertise.join(' ').toLowerCase().includes(q)
    const matchesDesig = designation.value === 'ALL' || f.designation === designation.value
    return matchesQuery && matchesDesig
  })
})

/* Labs & Infrastructure */
const labs = [
  {
    title: 'Mechanical Workshop',
    desc: 'Lathe, milling, drilling machines and precision tools for hands-on training.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200',
    tags: ['Lathe', 'Milling', 'Drilling']
  },
  {
    title: 'Electrical Lab',
    desc: 'Power systems, motors, generators and electrical measurement equipment.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    tags: ['Motors', 'Generators', 'Power Systems']
  },
  {
    title: 'Electronics Lab',
    desc: 'Digital circuits, microcontrollers, and communication systems.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200',
    tags: ['Microcontrollers', 'Digital Circuits', 'Communication']
  },
  {
    title: 'CAD/CAM Lab',
    desc: 'Computer-aided design and manufacturing software and equipment.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    tags: ['AutoCAD', 'SolidWorks', 'CNC']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { label: 'DECE (Electronics & Communication Engineering) Syllabus', note: 'Current Scheme', href: '#' },
  { label: 'DEEE (Electrical & Electronics Engineering) Syllabus', note: 'Current Scheme', href: '#' },
  { label: 'DME (Mechanical Engineering) Syllabus', note: 'Current Scheme', href: '#' },
  { label: 'Course Structure - All Years', note: 'Complete Curriculum Guide', href: '#' },
  { label: 'Workshop Practice Manual', note: 'Practical Training Guide', href: '#' }
]

/* Activities */
const activities = [
  { title: 'Technical Competitions', desc: 'Engineering design contests and skill development programs.' },
  { title: 'Industry Visits', desc: 'Factory tours and industrial training programs.' },
  { title: 'Project Exhibitions', desc: 'Annual showcase of student projects and innovations.' }
]

/* Research & Industry */
const research = {
  projects: [
    'Automation in Manufacturing Processes',
    'Renewable Energy Systems Integration',
    'Smart Electronics for Industrial Applications'
  ],
  publications: [
    { title: 'Efficient Manufacturing Techniques', venue: 'Engineering Today, 2024' },
    { title: 'Power System Optimization', venue: 'Electrical Review, 2023' }
  ]
}
const industry = {
  mous: ['Tata Motors • BHEL • Siemens • L&T • Reliance Industries'],
  logos: [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Cisco_logo.svg', alt: 'Cisco' }
  ]
}

/* Placements */
const placements = {
  rate: 85,
  highestLPA: 8,
  medianLPA: 3.5,
  recruiters: [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_2015_logo.svg', alt: 'Google' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Accenture.svg', alt: 'Accenture' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg', alt: 'Infosys' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/TCS_Software.svg', alt: 'TCS' }
  ]
}

/* Alumni */
const alumni = ref([
  {
    name: 'Rajesh Kumar',
    company: 'Tata Motors',
    role: 'Production Engineer',
    yop: '2015',
    linkedin: '#',
    github: '#',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400'
  },
  {
    name: 'Sneha Patel',
    company: 'BHEL',
    role: 'Electrical Engineer',
    yop: '2016',
    linkedin: '#',
    github: '#',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400'
  },
  {
    name: 'Amit Singh',
    company: 'Siemens',
    role: 'Electronics Technician',
    yop: '2017',
    linkedin: '#',
    github: '#',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400'
  },
  {
    name: 'Priya Sharma',
    company: 'L&T',
    role: 'Mechanical Engineer',
    yop: '2018',
    linkedin: '#',
    github: '#',
    photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400'
  },
  {
    name: 'Vikram Reddy',
    company: 'Reliance Industries',
    role: 'Electrical Supervisor',
    yop: '2019',
    linkedin: '#',
    github: '#',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400'
  }
])

// Alumni Year Filter
const selectedYear = ref('ALL')
const currentYear = new Date().getFullYear()

// Generate years from 2015 to current year
const availableYears = computed(() => {
  const years = ['ALL']
  for (let year = currentYear; year >= 2015; year--) {
    years.push(year.toString())
  }
  return years
})

// Filter alumni by selected year
const filteredAlumni = computed(() => {
  if (selectedYear.value === 'ALL') {
    return alumni.value
  }
  return alumni.value.filter(al => al.yop === selectedYear.value)
})

/* Contact */
const hod = {
  name: 'Dr. S. Kumar',
  designation: 'Professor & Head, Polytechnic',
  location: 'Polytechnic Block, Room 201',
  phone: '+91-98765-43210',
  email: 'hod.poly@ssit.edu.in'
}

const lastUpdated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })
</script>

<style scoped>
/* THEME TOKENS */
:root{
  --navy:#1e40af; --navy-2:#153a9c;
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* GENERIC */
.container{ width:min(1180px,92%); margin-inline:auto; }
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem} .mt-2{margin-top:1.25rem}
.mb-2{margin-bottom:.75rem} .h5{font-size:1.1rem} .h6{font-size:1rem}
.text-muted{color:var(--muted)} .muted{color:var(--muted)}
.lead{font-size:1.05rem; color:#000; line-height:1.6}

/* HERO */
.hero{ position:relative; color:#fff; background:var(--ink); }
.hero .overlay{ position:absolute; inset:0; background:linear-gradient(90deg,rgba(0,0,0,.15),rgba(0,0,0,.2)); }
.hero-inner{ position:relative; display:grid; grid-template-columns:1.2fr .8fr; gap:2rem; align-items:center; padding:3.2rem 0; }
.title{ font-size:2.2rem; font-weight:800; line-height:1.2 }
.tagline{ color:#dbeafe; margin:.5rem 0 1.25rem; font-weight:600 }
.quickfacts{ list-style:none; display:flex; gap:1rem; padding:0; margin:0; flex-wrap:wrap }
.quickfacts li{ background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); border-radius:.75rem; padding:.6rem .9rem; min-width:160px }
.qf-label{ display:block; font-size:.75rem; letter-spacing:.02em; opacity:.9 }
.qf-value{ font-size:1.05rem; font-weight:800 }
.hero-art .hero-img{ width:100%; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,.25); object-fit:cover }

/* SUBNAV */
.subnav{ 
  position:sticky; 
  top:0; 
  z-index:20; 
  background:#fff; 
  border-bottom:1px solid var(--border);
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
}
.subnav-inner{ 
  display:flex; 
  gap:.5rem; 
  padding:.6rem 1rem; 
  overflow-x:auto; 
  overflow-y:hidden; 
  justify-content:flex-start; 
  flex-wrap:nowrap;
}
.chip{ 
  border:1px solid var(--border); 
  background:#fff; 
  color:var(--ink); 
  border-radius:999px; 
  padding:.6rem 1rem; 
  font-weight:600; 
  display:flex; 
  align-items:center; 
  gap:.6rem; 
  white-space:nowrap;
  transition:all 0.3s ease;
  cursor:pointer;
  flex-shrink:0;
  box-shadow:0 2px 4px rgba(0,0,0,0.05);
  font-size:0.95rem;
}
.chip i{ color:var(--orange) }
.chip:hover{ 
  background:var(--orange); 
  color:#fff; 
  border-color:var(--orange);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
}
.chip:hover i{ color:#fff }
.chip.active{ 
  border-color:var(--orange); 
  background:var(--orange); 
  color:#fff;
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
  transform:translateY(-2px);
  font-weight:700;
}
.chip.active i{ color:#fff }

/* CONTENT */
.content{ padding:1.8rem 0 2.6rem }
.card-section{ margin:1.2rem 0 }
.card{ background:var(--card); border:1px solid var(--border); border-radius:1rem; padding:1.5rem 1.25rem; box-shadow:0 6px 24px rgba(0,0,0,.06) }
.section-title{ font-size:1.35rem; font-weight:800; color:var(--ink); display:flex; align-items:center; gap:.6rem; margin:0 0 1rem }
.section-title i{ color:var(--orange) }
.section-title-sm{ font-weight:800; color:var(--ink); font-size:1.05rem; display:flex; align-items:center; gap:.5rem; margin-bottom:.6rem }

/* GRIDS */
.grid-2{ display:grid; grid-template-columns:repeat(2,1fr); gap:1.2rem; margin-top:1.2rem }
.grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:1.2rem }

/* STATS */
.stats{ display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:.9rem; margin-top:1rem }
.stat{ border:1px dashed var(--border); border-radius:.9rem; padding:.9rem; display:flex; gap:.7rem; align-items:center; background:#fff }
.stat i{ color:var(--orange); font-size:1.25rem }
.num{ font-weight:900; font-size:1.25rem; color:var(--ink) }
.label{ font-size:.85rem; color:var(--muted) }

/* BULLETS */
.bullets{ padding-left:1.2rem }
.bullets li{ margin:.4rem 0; color:#000; line-height:1.6 }
.bullets.small li{ font-size:.95rem; color:#000 }

/* FACULTY */
.section-header{ display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap }
.filters{ display:flex; gap:.6rem; align-items:center }
.filters input, .filters select{
  border:1px solid var(--border); border-radius:.6rem; padding:.55rem .8rem; min-width:220px; background:#fff;
}
.faculty-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-top:1rem }
.faculty-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; display:flex; gap:.85rem; padding:.9rem; background:#fff; transition:transform .2s ease, box-shadow .2s ease }
.faculty-card:focus, .faculty-card:hover{ transform:translateY(-3px); box-shadow:0 12px 30px rgba(0,0,0,.08) }
.avatar{ width:86px; height:86px; object-fit:cover; border-radius:.75rem }
.fc-name{ font-size:1.05rem; font-weight:800; color:var(--ink); margin:0 0 .15rem }
.fc-meta{ color:var(--muted); margin:0 0 .35rem }
.badge{ background:rgba(249,115,22,.1); color:var(--orange); padding:.15rem .45rem; border-radius:.4rem; font-size:.78rem; font-weight:700 }
.fc-tags{ color:#374151; font-size:.92rem }
.fc-links{ display:flex; gap:.5rem; margin-top:.4rem }
.icon-link{ width:36px; height:36px; display:grid; place-items:center; border:1px solid var(--border); border-radius:.6rem; color:var(--navy) }
.icon-link:hover{ background:rgba(30,64,175,.06) }

/* LABS */
.labs-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.lab-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; background:#fff; display:flex; flex-direction:column }
.lab-card img{ width:100%; height:160px; object-fit:cover }
.lab-body{ padding:1rem }
.lab-title{ margin:0 0 .25rem; font-weight:800; color:var(--ink) }
.lab-text{ color:#374151; font-size:.95rem }
.lab-tags{ display:flex; flex-wrap:wrap; gap:.4rem; margin-top:.5rem; padding:0; list-style:none }
.lab-tags li{ border:1px solid var(--border); border-radius:999px; padding:.15rem .55rem; font-size:.78rem; color:#334155 }

/* COURSE STRUCTURE */
.course-structure{ margin:2rem 0 }
.course-grid{ 
  display:grid; 
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); 
  gap:1.5rem; 
  margin-top:1.5rem 
}
.course-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  background:#fff; 
  padding:1.5rem; 
  transition:all 0.3s ease;
  box-shadow:0 4px 12px rgba(0,0,0,0.05);
}
.course-card:hover{
  transform:translateY(-4px);
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  border-color:var(--orange);
}
.course-header{
  text-align:center;
  margin-bottom:1.5rem;
  padding-bottom:1rem;
  border-bottom:1px solid var(--border);
}
.course-icon{
  font-size:2.5rem;
  color:var(--orange);
  margin-bottom:0.8rem;
  display:block;
}
.course-title{
  font-size:1.8rem;
  font-weight:800;
  color:var(--ink);
  margin:0 0 0.5rem;
  letter-spacing:0.05em;
}
.course-subtitle{
  color:var(--muted);
  font-size:0.95rem;
  margin:0;
  font-weight:500;
}
.course-content{
  text-align:center;
}
.course-desc{
  color:#000;
  line-height:1.6;
  margin-bottom:1.5rem;
  font-size:0.95rem;
}
.course-features{
  display:flex;
  flex-wrap:wrap;
  gap:0.5rem;
  justify-content:center;
}
.feature-tag{
  background:rgba(249,115,22,0.1);
  color:var(--orange);
  padding:0.4rem 0.8rem;
  border-radius:999px;
  font-size:0.8rem;
  font-weight:600;
  border:1px solid rgba(249,115,22,0.2);
}

/* DOWNLOADS */
.downloads{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:.8rem }
.download{
  border:1px solid var(--border); border-radius:.9rem; padding:.8rem; display:flex; gap:.7rem; align-items:flex-start; text-decoration:none; color:inherit; background:#fff;
}
.download i{ color:var(--orange); font-size:1.25rem; margin-top:.15rem }
.dl-label{ font-weight:800; color:var(--ink) }
.dl-sub{ font-size:.85rem; color:var(--muted) }

/* LOGOS */
.logo-row{ display:flex; gap:1rem; flex-wrap:wrap; align-items:center }
.logo-row img{ height:26px; filter:grayscale(1); opacity:.8 }
.logo-row img:hover{ filter:none; opacity:1 }

/* BUTTONS */
.btn{ 
  border-radius:.7rem; 
  padding:.55rem .9rem; 
  font-weight:700; 
  border:1px solid transparent; 
  display:inline-flex; 
  gap:.5rem; 
  align-items:center;
  cursor:pointer;
  transition:all 0.3s ease;
  text-decoration:none;
}
.btn-primary{ 
  background:var(--orange); 
  color:#fff; 
  border-color:var(--orange) 
}
.btn-primary:hover{ 
  background:#e55a00; 
  border-color:#e55a00;
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
}
.btn-soft{ 
  background:#fff; 
  color:var(--ink); 
  border-color:var(--ink) 
}
.btn-soft:hover{ 
  background:var(--ink); 
  color:#fff;
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,0.2);
}
.row-actions{ display:flex; gap:.6rem; flex-wrap:wrap }

/* ALUMNI */
.alumni-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:1.5rem;
  flex-wrap:wrap;
  gap:1rem;
}
.year-filter{
  display:flex;
  align-items:center;
  gap:0.5rem;
}
.filter-label{
  font-size:0.9rem;
  font-weight:600;
  color:var(--ink);
  white-space:nowrap;
}
.year-select{
  border:1px solid var(--border);
  border-radius:0.5rem;
  padding:0.5rem 0.8rem;
  background:#fff;
  color:var(--ink);
  font-size:0.9rem;
  font-weight:500;
  cursor:pointer;
  transition:all 0.2s ease;
  min-width:120px;
}
.year-select:hover{
  border-color:var(--orange);
}
.year-select:focus{
  outline:none;
  border-color:var(--orange);
  box-shadow:0 0 0 3px rgba(249,115,22,0.1);
}
.alumni-grid{ 
  display:grid; 
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); 
  gap:1.2rem;
  margin-top:1rem;
}
.alumni-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  background:#fff; 
  padding:1.2rem; 
  display:flex; 
  gap:1rem; 
  align-items:center;
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
}
.alumni-card:hover{
  transform:translateY(-3px);
  box-shadow:0 8px 25px rgba(0,0,0,.12);
  border-color:var(--orange);
  background:rgba(249,115,22,0.02);
}
.alumni-card .avatar{ 
  width:75px; 
  height:75px; 
  border-radius:.8rem;
  border:2px solid rgba(249,115,22,0.1);
  object-fit:cover;
}
.alumni-card h3{
  font-size:1.1rem;
  font-weight:700;
  color:var(--ink);
  margin:0 0 0.3rem;
  line-height:1.3;
}
.alumni-card p{
  color:var(--muted);
  font-size:0.9rem;
  margin:0;
  line-height:1.4;
}
.alumni-info{ flex:1 }
.yop{
  color:var(--orange);
  font-size:0.85rem;
  margin:0.3rem 0;
  font-weight:600;
}
.social-links{
  display:flex;
  gap:0.5rem;
  margin-top:0.5rem;
}
.social-link{
  width:32px;
  height:32px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:1px solid var(--border);
  border-radius:0.5rem;
  color:var(--muted);
  transition:all 0.2s ease;
  text-decoration:none;
}
.social-link:hover{
  color:var(--orange);
  border-color:var(--orange);
  background:rgba(249,115,22,0.05);
  transform:translateY(-1px);
}

/* Responsive Alumni Header */
@media (max-width:768px){
  .alumni-header{
    flex-direction:column;
    align-items:flex-start;
    gap:0.8rem;
  }
  .year-filter{
    align-self:stretch;
    justify-content:space-between;
  }
  .year-select{
    min-width:140px;
  }
}

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }
.note{ background:linear-gradient(180deg,#f8fafc,#eef4ff); border:1px dashed var(--border); border-radius:.9rem; padding:.9rem }
.last-updated{ color:var(--muted); font-size:.9rem; margin-top:.6rem }

/* UTIL */
.grid-2, .grid-3 .card{ background:#fff }
.mt-3{margin-top:1rem}

/* RESPONSIVE */
@media (max-width: 1024px){
  .hero-inner{ grid-template-columns:1fr; }
}
@media (max-width: 768px){
  .grid-2{ grid-template-columns:1fr }
  .grid-3{ grid-template-columns:1fr }
  .contact-card .contact-grid{ grid-template-columns:1fr }
  .quickfacts li{ min-width:140px }
}
</style>
