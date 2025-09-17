<template>
  <div class="aiml-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="CSE AI&ML Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Computer Science &amp; Engineering (AI &amp; ML)</h1>
          <p class="tagline">Designing Intelligent Solutions, Empowering Future Innovators</p>

          <!-- Quick Facts -->
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Year Introduced</span>
              <span class="qf-value">{{ facts.year }}</span>
            </li>
            <li>
              <span class="qf-label">Annual Intake</span>
              <span class="qf-value">{{ facts.intake }}</span>
            </li>
            <li>
              <span class="qf-label">AI/ML Labs</span>
              <span class="qf-value">{{ facts.labs }}</span>
            </li>
            <li>
              <span class="qf-label">Top Recruiters</span>
              <span class="qf-value">{{ facts.recruiters }}</span>
            </li>
          </ul>
        </div>

        <picture class="hero-art" aria-hidden="true">
          <img
            class="hero-img"
            alt="AI & ML themed lab with students building models"
            src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop"
          />
        </picture>
      </div>
    </header>

    <!-- STICKY SUB NAV (TABS) -->
    <nav class="subnav" aria-label="Section navigation">
      <div class="container subnav-inner">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="chip"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`panel-${tab.id}`"
        >
          <i :class="tab.icon" aria-hidden="true"></i> {{ tab.label }}
        </button>
      </div>
    </nav>

    <!-- TABBED CONTENT -->
    <main class="container content" id="content">
      <!-- Overview -->
      <section
        v-show="activeTab === 'overview'"
        :id="`panel-overview`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="overview"
      >
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-brain"></i> About the Department</h2>
          <p class="lead">
            Launched in {{ facts.year }}, the CSE (AI &amp; ML) Department blends rigorous
            computer science foundations with cutting-edge AI/ML curricula. We enable
            hands-on learning, interdisciplinary projects, and impactful research for real-world
            problem solving.
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
              To be a nationally recognized center of excellence in Artificial Intelligence &amp;
              Machine Learning education and research that advances human potential and societal well-being.
            </p>
            <h3 class="h5 text-muted mt-4 mb-2">Mission</h3>
            <ul class="bullets">
              <li>Deliver advanced AI/ML education with strong CS foundations.</li>
              <li>Promote industry readiness, entrepreneurship, and innovation.</li>
              <li>Foster impactful research and responsible AI practices.</li>
              <li>Encourage lifelong learning and interdisciplinary collaboration.</li>
            </ul>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>B.Tech in CSE (AI &amp; ML)</strong> — {{ facts.intake }} seats, EAMCET eligibility, modern electives.</li>
              <li><strong>Minors / Certifications</strong> — Deep Learning, NLP, Computer Vision, Data Science.</li>
              <li><strong>Industry Modules</strong> — with Microsoft, AWS, Google/Azure AI (logo collaborations).</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" @click.prevent="activeTab = 'curriculum'"><i class="fa-solid fa-file-arrow-down"></i> Syllabus</a>
              <a class="btn btn-soft" @click.prevent="activeTab = 'placements'"><i class="fa-solid fa-briefcase"></i> Placements</a>
            </div>
          </article>
        </div>

        <div class="grid-3">
          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-bullseye"></i> PEOs</h3>
            <ul class="bullets small">
              <li>Excel in AI/ML careers and higher studies.</li>
              <li>Lead multidisciplinary teams with innovation.</li>
              <li>Build ethical and socially responsible AI solutions.</li>
            </ul>
          </article>
          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-list-check"></i> POs</h3>
            <ul class="bullets small">
              <li>Apply engineering knowledge, problem analysis, and design.</li>
              <li>Use modern tools, communicate effectively, manage projects.</li>
              <li>Commit to ethics, environment, sustainability, and lifelong learning.</li>
            </ul>
          </article>
          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-robot"></i> PSOs</h3>
            <ul class="bullets small">
              <li>Design & deploy AI/ML models at scale.</li>
              <li>Specialize in DL, NLP, CV, Data Engineering, MLOps.</li>
            </ul>
          </article>
        </div>
      </section>

      <!-- Faculty -->
      <section
        v-show="activeTab === 'faculty'"
        :id="`panel-faculty`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="faculty"
      >
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
                  <i class="fa-solid fa-microchip"></i> {{ f.expertise.join(', ') }}
                </p>
                <div class="fc-links">
                  <a :href="`mailto:${f.email}`" class="icon-link" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
                  <a v-if="f.profile" :href="f.profile" target="_blank" rel="noopener" class="icon-link" aria-label="Google Scholar">
                    <i class="fa-brands fa-google"></i>
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

      <!-- Labs -->
      <section
        v-show="activeTab === 'labs'"
        :id="`panel-labs`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="labs"
      >
        <h2 class="section-title"><i class="fa-solid fa-flask"></i> Laboratories &amp; Research Infrastructure</h2>
        <div class="labs-grid">
          <article v-for="lab in labs" :key="lab.title" class="lab-card">
            <img :src="lab.img" :alt="lab.title" />
            <div class="lab-body">
              <h3 class="lab-title">{{ lab.title }}</h3>
              <p class="lab-text">{{ lab.desc }}</p>
              <ul class="lab-tags">
                <li v-for="t in lab.tags" :key="t">{{ t }}</li>
              </ul>
            </div>
          </article>
        </div>
        <div class="muted mt-1">
          <i class="fa-solid fa-server"></i> GPU servers •
          <i class="fa-brands fa-aws"></i> Cloud credits •
          <i class="fa-solid fa-code"></i> TensorFlow / PyTorch / Scikit-learn
        </div>
      </section>

      <!-- Curriculum -->
      <section
        v-show="activeTab === 'curriculum'"
        :id="`panel-curriculum`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="curriculum"
      >
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-file-lines"></i> Curriculum &amp; Syllabus</h2>
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
            <a class="btn btn-soft" href="/academics/regulations"><i class="fa-solid fa-scale-balanced"></i> Academic Regulations</a>
            <a class="btn btn-soft" href="/academics/calendar"><i class="fa-regular fa-calendar"></i> Academic Calendar</a>
          </div>
        </div>
      </section>

      <!-- Activities -->
      <section
        v-show="activeTab === 'activities'"
        :id="`panel-activities`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="activities"
      >
        <h2 class="section-title"><i class="fa-solid fa-rocket"></i> Student Activities &amp; Achievements</h2>
        <div class="grid-3">
          <article class="card" v-for="a in activities" :key="a.title">
            <h3 class="h6">{{ a.title }}</h3>
            <p class="muted">{{ a.desc }}</p>
          </article>
        </div>
      </section>

      <!-- Research & Industry -->
      <section
        v-show="activeTab === 'research'"
        :id="`panel-research`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="research"
      >
        <div class="grid-2">
          <article class="card">
            <h2 class="section-title"><i class="fa-solid fa-microscope"></i> Research</h2>
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

      <!-- Placements -->
      <section
        v-show="activeTab === 'placements'"
        :id="`panel-placements`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="placements"
      >
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-briefcase"></i> Placements &amp; Opportunities</h2>
          <div class="stats">
            <div class="stat">
              <i class="fa-solid fa-chart-line"></i>
              <div>
                <div class="num">{{ placements.rate }}%</div>
                <div class="label">Placement Rate</div>
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

      <!-- Alumni -->
      <section
        v-show="activeTab === 'alumni'"
        :id="`panel-alumni`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="alumni"
      >
        <h2 class="section-title"><i class="fa-solid fa-user-graduate"></i> Alumni Network</h2>
        <div class="alumni-grid">
          <article v-for="al in alumni" :key="al.name" class="alumni-card">
            <img :src="al.photo" :alt="al.name" class="avatar" />
            <div>
              <h3 class="h6">{{ al.name }}</h3>
              <p class="muted">{{ al.role }} — {{ al.company }}</p>
              <a v-if="al.linkedin" :href="al.linkedin" target="_blank" rel="noopener" class="icon-link">
                <i class="fa-brands fa-linkedin"></i> Connect
              </a>
            </div>
          </article>
        </div>
        <div class="row-actions mt-1">
          <a class="btn btn-primary" href="mailto:alumni@ssit.edu.in">Join Alumni Network</a>
        </div>
      </section>

      <!-- Contact -->
      <section
        v-show="activeTab === 'contact'"
        :id="`panel-contact`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="contact"
      >
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
              <p class="mb-0"><i class="fa-solid fa-circle-info"></i> Follow our LinkedIn group for AI/ML updates, internships &amp; webinars.</p>
              <a class="btn btn-soft mt-1" href="#" aria-label="AI&ML LinkedIn Group">AI &amp; ML LinkedIn Group</a>
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

/* Facts */
const facts = {
  year: '2021',
  intake: '60',
  labs: '5',
  recruiters: 'Google, Microsoft, AWS'
}

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '18+', icon: 'fa-solid fa-user-tie' },
  { label: 'AI/ML Labs', value: '5', icon: 'fa-solid fa-flask' },
  { label: 'GPU Servers', value: '2', icon: 'fa-solid fa-server' },
  { label: 'Annual Placements', value: '90%+', icon: 'fa-solid fa-briefcase' }
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
const activeTab = ref('overview')

/* Faculty */
const faculty = ref([
  {
    name: 'Dr. Anitha R', designation: 'Professor & HOD',
    qualification: 'Ph.D., M.Tech',
    expertise: ['Deep Learning', 'Computer Vision', 'MLOps'],
    email: 'hod.aiml@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400',
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. Arjun K', designation: 'Associate Professor',
    qualification: 'M.Tech',
    expertise: ['NLP', 'Generative AI', 'Data Engineering'],
    email: 'arjun.k@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400',
    profile: '#', linkedin: '#'
  },
  {
    name: 'Ms. Neha S', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Reinforcement Learning', 'Robotics'],
    email: 'neha.s@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1540539234-c67a9b2cdda1?q=80&w=400',
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. Pranav T', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cloud AI', 'MLOps', 'DevOps'],
    email: 'pranav.t@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400',
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
      !q ||
      f.name.toLowerCase().includes(q) ||
      f.expertise.join(' ').toLowerCase().includes(q)
    const matchesDesig = designation.value === 'ALL' || f.designation === designation.value
    return matchesQuery && matchesDesig
  })
})

/* Labs */
const labs = [
  {
    title: 'AI Lab',
    desc: 'Model prototyping with TensorFlow/PyTorch; vision & NLP stacks.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200',
    tags: ['DL', 'NLP', 'CV']
  },
  {
    title: 'Machine Learning Lab',
    desc: 'Core ML, feature engineering, classical algorithms & evaluation.',
    img: 'https://images.unsplash.com/photo-1534759846116-5797a4d0f2c1?q=80&w=1200',
    tags: ['ML', 'Sklearn', 'Pipelines']
  },
  {
    title: 'Data Science Studio',
    desc: 'Wrangling, analytics, visualization, data pipelines & dashboards.',
    img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200',
    tags: ['Pandas', 'Viz', 'ETL']
  },
  {
    title: 'IoT & Robotics Lab',
    desc: 'Sensor fusion, RL experiments, robotics, and edge AI.',
    img: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1200',
    tags: ['IoT', 'RL', 'Robotics']
  },
  {
    title: 'Cloud AI Lab',
    desc: 'MLOps, CI/CD for models, cloud training, and deployment.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200',
    tags: ['MLOps', 'AWS', 'Azure', 'GCP']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { label: 'B.Tech CSE (AI & ML) Syllabus (R22)', note: 'Current Scheme', href: '#' },
  { label: 'B.Tech CSE (AI & ML) Syllabus (R18)', note: 'Previous Scheme', href: '#' },
  { label: 'Honors / Minors Structure', note: 'DL • NLP • CV • DS', href: '#' }
]

/* Activities */
const activities = [
  { title: 'AI/ML Club & Kaggle Meets', desc: 'Weekly paper reading, Kaggle sprints, and ML dojo.' },
  { title: 'Workshops & Masterclasses', desc: 'Experts from Google, Microsoft, AWS, Nvidia, etc.' },
  { title: 'Hackathons & Open Source', desc: '24-hour hackathons, OSS sprints, student-led projects.' }
]

/* Research & Industry */
const research = {
  projects: [
    'Healthcare AI for early diagnostics',
    'LLMs for regional languages',
    'Vision transformers for smart mobility'
  ],
  publications: [
    { title: 'Few-shot NLP for Low-Resource Languages', venue: 'ACL, 2024' },
    { title: 'Self-Supervised Vision for Traffic Analytics', venue: 'CVPR Workshops, 2023' }
  ]
}
const industry = {
  mous: ['Microsoft • AWS • Nvidia • Cisco • Wipro'],
  logos: [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg', alt: 'Nvidia' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Cisco_logo.svg', alt: 'Cisco' }
  ]
}

/* Placements */
const placements = {
  rate: 91,
  highestLPA: 16,
  medianLPA: 5.2,
  recruiters: [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Google_2015_logo.svg', alt: 'Google' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Accenture.svg', alt: 'Accenture' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Infosys_logo.svg', alt: 'Infosys' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/TCS_Software.svg', alt: 'TCS' }
  ]
}

/* Alumni */
const alumni = [
  {
    name: 'Priyanka S',
    company: 'Microsoft',
    role: 'Applied Scientist',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400'
  },
  {
    name: 'Sanjay K',
    company: 'Nvidia',
    role: 'DL Engineer',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400'
  },
  {
    name: 'Harika G',
    company: 'AWS',
    role: 'ML Engineer',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400'
  }
]

/* Contact */
const hod = {
  name: 'Dr. Anitha R',
  designation: 'Professor & Head, CSE (AI & ML)',
  location: 'AI&ML Block, Room 102',
  phone: '+91-87612-88279',
  email: 'hod.aiml@ssit.edu.in'
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
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem}
.h5{font-size:1.1rem} .h6{font-size:1rem}
.text-muted{color:var(--muted)} .muted{color:var(--muted)}
.lead{font-size:1.05rem; color:#374151}

/* HERO */
.hero{ position:relative; color:#fff; background:linear-gradient(60deg,var(--navy),var(--navy-2)); }
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
.subnav{ position:sticky; top:0; z-index:20; background:#fff; border-bottom:1px solid var(--border); }
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 0; overflow:auto }
.chip{ border:1px solid var(--border); background:#fff; color:#111; border-radius:999px; padding:.5rem .9rem; font-weight:700; display:flex; align-items:center; gap:.5rem; white-space:nowrap }
.chip i{ color:var(--navy) }
.chip.active{ border-color:var(--navy); background:rgba(30,64,175,.08); color:var(--navy) }

/* CONTENT */
.content{ padding:1.8rem 0 2.6rem; background:var(--bg) }
.card-section{ margin:1.2rem 0 }
.card{ background:var(--card); border:1px solid var(--border); border-radius:1rem; padding:1.5rem 1.25rem; box-shadow:0 6px 24px rgba(0,0,0,.06) }
.section-title{ font-size:1.35rem; font-weight:800; color:var(--navy); display:flex; align-items:center; gap:.6rem; margin:0 0 1rem }
.section-title i{ color:var(--orange) }
.section-title-sm{ font-weight:800; color:var(--navy); font-size:1.05rem; display:flex; align-items:center; gap:.5rem; margin-bottom:.6rem }

/* GRIDS */
.grid-2{ display:grid; grid-template-columns:repeat(2,1fr); gap:1.2rem; margin-top:1.2rem }
.grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:1.2rem }

/* STATS */
.stats{ display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:.9rem; margin-top:1rem }
.stat{ border:1px dashed var(--border); border-radius:.9rem; padding:.9rem; display:flex; gap:.7rem; align-items:center; background:#fff }
.stat i{ color:var(--orange); font-size:1.25rem }
.num{ font-weight:900; font-size:1.25rem; color:var(--navy) }
.label{ font-size:.85rem; color:var(--muted) }

/* BULLETS */
.bullets{ padding-left:1.2rem }
.bullets li{ margin:.4rem 0; color:#374151 }
.bullets.small li{ font-size:.95rem; color:#4b5563 }

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
.btn{ border-radius:.7rem; padding:.55rem .9rem; font-weight:700; border:1px solid transparent; display:inline-flex; gap:.5rem; align-items:center; cursor:pointer }
.btn-primary{ background:var(--navy); color:#fff }
.btn-soft{ background:#fff; color:var(--navy); border-color:var(--navy) }
.btn:hover{ filter:brightness(1.02) }
.row-actions{ display:flex; gap:.6rem; flex-wrap:wrap }

/* ALUMNI */
.alumni-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.alumni-card{ border:1px solid var(--border); border-radius:1rem; background:#fff; padding:.9rem; display:flex; gap:.8rem; align-items:center }
.alumni-card .avatar{ width:70px; height:70px; border-radius:.7rem }

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }
.note{ background:linear-gradient(180deg,#f8fafc,#eef4ff); border:1px dashed var(--border); border-radius:.9rem; padding:.9rem }
.last-updated{ color:var(--muted); font-size:.9rem; margin-top:.6rem }

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
