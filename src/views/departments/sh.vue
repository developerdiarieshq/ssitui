<template>
  <div class="sh-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="CSE AI & DS Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Science & Humanities (S&H)</h1>
          <p class="tagline">Building Foundations for Holistic Engineering Excellence</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Established</span>
              <span class="qf-value">{{ facts.established }}</span>
            </li>
            <li>
              <span class="qf-label">Intake (UG)</span>
              <span class="qf-value">{{ facts.intakeUG }}</span>
            </li>
            <li>
              <span class="qf-label">Total Students</span>
              <span class="qf-value">{{ facts.totalStudents }}</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1600&auto=format&fit=crop"
            alt="Science & Humanities Department"
            class="hero-img"
          />
        </picture>
      </div>
    </header>

    <!-- STICKY SUB NAV (nav-pills) -->
    <nav id="subnav" class="subnav" aria-label="Section navigation">
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
      <section :id="tabsMap.overview" class="card-section" v-show="activeTab==='overview'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-school"></i> About the Department</h2>
          <p class="lead">
            Studying Engineering degree is exciting enough as it will open the doors to very cool jobs. It is truly amazing to catch the trend with SSIT. Because SSIT takes care to maximize the learning opportunities by keeping up-to-date and continuous with highly qualified and richly experienced faculty to meet the present requirement at global scenario.
          </p>
          <p class="lead">
            Department Offers an intake of 120 with total student strength is about 480.
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
            <h3 class="h5 mb-2" style="color: var(--ink); font-weight: 800;">Vision</h3>
            <p>
              To make the students achieve latest knowledge of Basic Science and English skills along with morals and character needed for Engineering Profession
            </p>
            <h3 class="h5 mt-4 mb-2" style="color: var(--ink); font-weight: 800;">Mission</h3>
            <p>
              To awaken the students of their hidden potentials and talents and systematically grooming these potentials to build up great career for students.
            </p>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>Basic Sciences</strong> — Mathematics, Physics, Chemistry, Environmental Science.</li>
              <li><strong>English & Communication</strong> — Technical Communication, Soft Skills, Language Lab.</li>
              <li><strong>Support Programs</strong> — Foundation courses for all engineering disciplines.</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">Download Syllabus</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Highlights</a>
            </div>
          </article>
        </div>

        <!-- Strengths Section -->
        <Strengths />

      </section>

      <!-- FACULTY DIRECTORY -->
      <section :id="tabsMap.faculty" class="card-section" v-show="activeTab==='faculty'">
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
      <section :id="tabsMap.labs" class="card-section" v-show="activeTab==='labs'">
        <h2 class="section-title"><i class="fa-solid fa-flask"></i> Laboratories & Infrastructure</h2>
        <div class="labs-intro">
          <p class="lead">
            The Science & Humanities department houses well-equipped laboratories that provide hands-on experience in basic sciences and communication skills. These labs support the foundation courses for all engineering disciplines with modern equipment and experienced faculty guidance.
          </p>
        </div>
        <div class="labs-grid">
          <article v-for="lab in labs" :key="lab.title" class="lab-card">
            <img :src="lab.img" :alt="lab.title" />
            <div class="lab-body">
              <h3 class="lab-title">{{ lab.title }}</h3>
              <p class="lab-text">{{ lab.desc }}</p>
              <ul class="lab-tags">
                <li v-for="t in lab.tags" :key="t">{{ t }}</li>
              </ul>
              <div class="lab-actions">
                <button 
                  class="btn btn-primary view-images-btn" 
                  @click="openImageModal(lab.images)"
                >
                  <i class="fa-solid fa-images"></i> View Images
                </button>
              </div>
            </div>
          </article>
        </div>
        <div class="muted mt-1">
          <i class="fa-solid fa-flask"></i> Modern Equipment • <i class="fa-solid fa-users"></i> Expert Faculty •
          <i class="fa-solid fa-book"></i> Foundation Courses • <i class="fa-solid fa-microscope"></i> Practical Learning
        </div>
      </section>

      <!-- CURRICULUM -->
      <section :id="tabsMap.curriculum" class="card-section" aria-labelledby="curriculum" v-show="activeTab==='curriculum'">
        <div class="card">
          <h2 class="section-title" id="curriculum"><i class="fa-solid fa-file-lines"></i> Course Structure for all Years</h2>
          <p class="lead">
            Download the Course Structure and Syllabus for all engineering programs. The Science & Humanities department provides foundational courses in Mathematics, Physics, Chemistry, and English Communication for all B.Tech programs following the R22 regulation scheme.
          </p>
          <div class="downloads">
            <div v-for="d in syllabus" :key="d.label" class="download" :class="{ 'coming-soon': d.type === 'coming-soon' }" @click="handleSyllabusClick(d)">
              <i class="fa-solid fa-file-pdf"></i>
              <div>
                <div class="dl-label">{{ d.label }}</div>
                <div class="dl-sub">{{ d.note }}</div>
                <div v-if="d.type === 'coming-soon'" class="dl-status">Coming Soon</div>
              </div>
            </div>
          </div>
          <div class="row-actions mt-1">
            <a class="btn btn-soft" href="/academics/academic-regulations">Academic Regulations</a>
            <a class="btn btn-soft" href="/academics/academic-calendar">Academic Calendar</a>
          </div>
        </div>
      </section>

      <!-- ACTIVITIES -->
      <section :id="tabsMap.activities" class="card-section" v-show="activeTab==='activities'">
        <h2 class="section-title"><i class="fa-solid fa-rocket"></i> Student Activities & Achievements</h2>
        <div class="grid-3">
          <article class="card" v-for="a in activities" :key="a.title">
            <h3 class="h6">{{ a.title }}</h3>
            <p class="muted">{{ a.desc }}</p>
          </article>
        </div>
      </section>

      <!-- RESEARCH & INDUSTRY -->
      <section :id="tabsMap.research" class="card-section" v-show="activeTab==='research'">
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
      <section :id="tabsMap.placements" class="card-section" v-show="activeTab==='placements'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-briefcase"></i> Placements</h2>
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

      <!-- ALUMNI -->
      <section :id="tabsMap.alumni" class="card-section" v-show="activeTab==='alumni'">
        <h2 class="section-title"><i class="fa-solid fa-user-graduate"></i> Alumni Network</h2>
        <div class="under-construction">
          <div class="construction-content">
            <i class="fa-solid fa-hammer"></i>
            <h3>Under Construction</h3>
            <p>Our alumni network section is currently being updated with the latest information about our Science & Humanities graduates and their achievements.</p>
            <p>Please check back soon for inspiring stories from our alumni community.</p>
          </div>
        </div>
      </section>

      <!-- CONTACT -->
      <section :id="tabsMap.contact" class="card-section" v-show="activeTab==='contact'">
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
              <a class="btn btn-soft mt-1" href="#" aria-label="SH LinkedIn">SH LinkedIn</a>
            </aside>
          </div>
        </div>
        <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />

    <!-- Labs Image Modal -->
    <ImagePreviewer
      v-model:show="showImageModal"
      :images="labImagesForModal"
      :initial-index="currentImageIndex"
      title="Laboratory Images"
      title-icon="fa-solid fa-flask"
      title-icon-color="var(--orange)"
      :show-image-info="false"
    />

    <!-- PDF Viewer Modal -->
    <PdfViewer 
      :show="showPdfModal"
      :url="currentPdfUrl"
      :title="currentPdfTitle"
      @close="closePdfModal"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Strengths from '@/views/about/Strengths.vue'
import ImagePreviewer from '@/views/utils/ImagePreviewer.vue'
import PdfViewer from '@/views/utils/PdfViewer.vue'

/* Facts / Quick Stats */
const facts = { established: '2007', intakeUG: '120', totalStudents: '480', labs: '4' }

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '15+', icon: 'fa-solid fa-user-tie' },
  { label: 'Subjects', value: '8+', icon: 'fa-solid fa-book' },
  { label: 'Labs', value: '4', icon: 'fa-solid fa-flask' },
  { label: 'Student Strength', value: '480', icon: 'fa-solid fa-users' }
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
// Router setup
const route = useRoute()
const router = useRouter()

// Tab mapping for URL synchronization
const tabsMap = {
  overview: 'overview',
  faculty: 'faculty', 
  labs: 'labs',
  curriculum: 'curriculum',
  activities: 'activities',
  research: 'research',
  placements: 'placements',
  alumni: 'alumni',
  contact: 'contact'
}

const activeTab = ref(tabs[0].id)

// Enhanced setTab function with router navigation
const setTab = (id) => {
  activeTab.value = id
  router.push(`/sh/${id}`)
  
  // Smooth scroll to section
  setTimeout(() => {
    const element = document.getElementById(tabsMap[id])
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

// Initialize tab from URL on mount
onMounted(() => {
  const tabFromUrl = route.params.tab
  if (tabFromUrl && tabs.some(tab => tab.id === tabFromUrl)) {
    activeTab.value = tabFromUrl
  }
})

// Watch for route changes
watch(() => route.params.tab, (newTab) => {
  if (newTab && tabs.some(tab => tab.id === newTab)) {
    activeTab.value = newTab
  }
})

/* Faculty */
const faculty = ref([
  // Head of Department
  {
    name: 'Dr. SK MEERA SHAHEB', designation: 'PROFESSOR & HOD',
    qualification: 'Ph.D',
    expertise: ['Physics', 'Research', 'Advanced Physics', 'Department Leadership'],
    email: 'hod.sh@ssit.edu.in',
    photo: new URL('@/assets/departments/sh/faculty/SH_01.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  // BSH(MATHS) Department
  {
    name: 'Dr. A SINDHUJA', designation: 'ASST.PROF',
    qualification: 'Ph.D',
    expertise: ['Mathematics', 'Applied Mathematics', 'Research'],
    email: 'a.sindhuja@ssit.edu.in',
    photo: new URL('@/assets/departments/sh/faculty/SH_02.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'CHILUKURI LEELAVATHI', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Mathematics', 'Statistics', 'Applied Mathematics'],
    email: 'chilukuri.leelavathi@ssit.edu.in',
    photo: new URL('@/assets/departments/sh/faculty/SH_03.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'DOSAPATI SRIDEVI', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Mathematics', 'Algebra', 'Geometry'],
    email: 'dosapati.sridevi@ssit.edu.in',
    photo: new URL('@/assets/departments/sh/faculty/SH_04.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'KOTHA VASAVI', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Mathematics', 'Calculus', 'Differential Equations'],
    email: 'kotha.vasavi@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  // BSH(ENG) Department
  {
    name: 'VEMULA SURESH KUMAR', designation: 'ASST.PROF',
    qualification: 'M.A (ENG)',
    expertise: ['English Literature', 'Communication Skills', 'Language Teaching'],
    email: 'vemula.suresh@ssit.edu.in',
    photo: new URL('@/assets/departments/sh/faculty/SH_05.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'VAJJA VENKATESWARLU', designation: 'ASST.PROF',
    qualification: 'M.A (ENG)',
    expertise: ['English Language', 'Technical Communication', 'Soft Skills'],
    email: 'vajja.venkateswarlu@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  {
    name: 'KONGA KRISHNA KUMAR', designation: 'ASST.PROF',
    qualification: 'M.A (ENG)',
    expertise: ['English Literature', 'Communication', 'Language Lab'],
    email: 'konga.krishna@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  // BSH(CHE) Department
  {
    name: 'BOLLA RAMA KRISHNA', designation: 'ASSOC.PROF',
    qualification: 'M.Sc',
    expertise: ['Chemistry', 'Organic Chemistry', 'Research'],
    email: 'bolla.ramakrishna@ssit.edu.in',
    photo: new URL('@/assets/departments/sh/faculty/SH_09.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'BALUSUPATI SEETHARAMULU', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Chemistry', 'Inorganic Chemistry', 'Analytical Chemistry'],
    email: 'balusupati.seetharamulu@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  {
    name: 'MADAMSETTI N. V.SATYAVENI', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Chemistry', 'Physical Chemistry', 'Laboratory Techniques'],
    email: 'madamsetti.satyaveni@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  // BSH(PHY) Department
  {
    name: 'CHINTALA. SAILAJA', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Physics', 'Applied Physics', 'Laboratory Physics'],
    email: 'chintala.sailaja@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  {
    name: 'YERNAM VIJAYA', designation: 'ASST.PROF',
    qualification: 'M.Sc',
    expertise: ['Physics', 'Modern Physics', 'Experimental Physics'],
    email: 'yernam.vijaya@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  },
  // MBA Department
  {
    name: 'PUNNAM SIRESHA', designation: 'ASST.PROF',
    qualification: 'MBA',
    expertise: ['Management', 'Business Administration', 'Management Studies'],
    email: 'punnam.siresha@ssit.edu.in',
    photo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+",
    profile: '#', linkedin: '#'
  }
])
const designations = ['PROFESSOR & HOD', 'PROFESSOR', 'ASSOC.PROF', 'ASST.PROF']
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
    title: 'AECS LAB',
    desc: 'Advanced English Communication Skills laboratory equipped with modern audio-visual aids, language learning software, and interactive communication tools for developing professional communication skills.',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Communication Skills', 'Language Lab', 'Audio-Visual Aids']
  },
  {
    title: 'ENGLISH LAB',
    desc: 'Comprehensive English language laboratory featuring digital language learning platforms, pronunciation tools, and interactive sessions for enhancing technical communication and soft skills.',
    img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Digital Learning', 'Pronunciation', 'Technical Communication']
  },
  {
    title: 'ENGINEERING CHEMISTRY LAB',
    desc: 'Well-equipped chemistry laboratory with modern analytical instruments, safety equipment, and comprehensive experimental setups for understanding chemical principles and applications in engineering.',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Analytical Instruments', 'Safety Equipment', 'Chemical Principles']
  },
  {
    title: 'ENGINEERING PHYSICS LAB',
    desc: 'Advanced physics laboratory with precision instruments, measurement devices, and experimental setups for exploring fundamental physics concepts and their engineering applications.',
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop'
    ],
    tags: ['Precision Instruments', 'Measurement Devices', 'Physics Concepts']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { 
    label: 'I Btech-AIDS- R22', 
    note: 'AI & Data Science Program', 
    href: 'https://drive.google.com/file/d/1F9thRq3PAhLzsbJ2Hbg0hEICUOs9OXrh/view?usp=sharing',
    pdfUrl: 'https://drive.google.com/file/d/1F9thRq3PAhLzsbJ2Hbg0hEICUOs9OXrh/preview',
    type: 'pdf'
  },
  { 
    label: 'I Btech-AIML- R22', 
    note: 'AI & Machine Learning Program', 
    href: 'https://drive.google.com/file/d/14pzfcpk4OYvXowFPsnYVw86qCIHfBCWU/view?usp=drive_link',
    pdfUrl: 'https://drive.google.com/file/d/14pzfcpk4OYvXowFPsnYVw86qCIHfBCWU/preview',
    type: 'pdf'
  },
  { 
    label: 'I Btech-CSE- R22', 
    note: 'Computer Science & Engineering', 
    href: 'https://drive.google.com/file/d/1nUjgOH4_qsgCdig-utG6pbr6FYxpxQ_T/view?usp=drive_link',
    pdfUrl: 'https://drive.google.com/file/d/1nUjgOH4_qsgCdig-utG6pbr6FYxpxQ_T/preview',
    type: 'pdf'
  },
  { 
    label: 'I Btech-ECE- R22', 
    note: 'Electronics & Communication Engineering', 
    href: 'https://drive.google.com/file/d/1uuJl4ZJt3lJAsSuME0bbk4OSRz7FhbP8/view?usp=drive_link',
    pdfUrl: 'https://drive.google.com/file/d/1uuJl4ZJt3lJAsSuME0bbk4OSRz7FhbP8/preview',
    type: 'pdf'
  },
  { 
    label: 'I Btech-EEE- R22', 
    note: 'Electrical & Electronics Engineering', 
    href: 'https://drive.google.com/file/d/1bo6vv2QXEjNWTtCR8JKv_McByfHmGd1H/view?usp=drive_link',
    pdfUrl: 'https://drive.google.com/file/d/1bo6vv2QXEjNWTtCR8JKv_McByfHmGd1H/preview',
    type: 'pdf'
  }
]

/* Activities */
const activities = [
  { title: 'AI Hackathon', desc: '24-hour innovation sprint across CV, NLP, RL.' },
  { title: 'Workshops & Bootcamps', desc: 'Deep Learning, MLOps, Data Engineering.' },
  { title: 'Clubs & SIGs', desc: 'AI Club, Data Viz Guild, Kaggle Circle.' }
]

/* Research & Industry */
const research = {
  projects: [
    'NLP for Indian Languages & Speech',
    'AI for Healthcare Diagnostics',
    'Forecasting with Deep Time Series Models'
  ],
  publications: [
    { title: 'Lightweight CNNs for Edge Vision', venue: 'IEEE Access, 2024' },
    { title: 'Graph Anomaly Detection at Scale', venue: 'Elsevier, 2023' }
  ]
}
const industry = {
  mous: ['AWS Academy • Microsoft Learn • Cisco NetAcad • Wipro TalentNext'],
  logos: [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Cisco_logo.svg', alt: 'Cisco' }
  ]
}

/* Placements */
const placements = {
  rate: 88,
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
    name: 'Priya S',
    company: 'Google AI',
    role: 'ML Engineer',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400'
  },
  {
    name: 'Arjun R',
    company: 'Microsoft',
    role: 'Data Scientist',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400'
  },
  {
    name: 'Kavya M',
    company: 'AWS',
    role: 'Applied Scientist',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400'
  }
]

/* Contact */
const hod = {
  name: 'Dr. SK Meera Saheb',
  designation: 'HOD & Associate Professor',
  location: 'SH Block, Room 101',
  phone: '+91-98765-43214',
  email: 'shaikmeerasaheb7@gmail.com'
}

// Image Modal state
const showImageModal = ref(false)
const currentImageIndex = ref(0)
const currentLabImages = ref([])

// PDF Modal state
const showPdfModal = ref(false)
const currentPdfUrl = ref('')
const currentPdfTitle = ref('')
const isPdfLoading = ref(false)

// Computed properties for ImagePreviewer
const labImagesForModal = computed(() => {
  return currentLabImages.value.map(src => ({ src, title: '', desc: '' }))
})

const openImageModal = (labImages) => {
  currentLabImages.value = labImages
  currentImageIndex.value = 0
  showImageModal.value = true
}

// PDF Modal functions
const openPdfModal = (pdfUrl, title) => {
  currentPdfUrl.value = pdfUrl
  currentPdfTitle.value = title
  showPdfModal.value = true
}

const closePdfModal = () => {
  showPdfModal.value = false
  currentPdfUrl.value = ''
  currentPdfTitle.value = ''
}

const handleSyllabusClick = (syllabusItem) => {
  if (syllabusItem.type === 'pdf' && syllabusItem.pdfUrl) {
    openPdfModal(syllabusItem.pdfUrl, syllabusItem.label)
  } else if (syllabusItem.type === 'coming-soon') {
    // Show a message or do nothing for coming soon items
    console.log('Coming soon:', syllabusItem.label)
  }
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
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 1rem; overflow-x:auto; overflow-y:hidden; justify-content:flex-start; flex-wrap:nowrap; }
.chip{ 
  border:1px solid var(--border); 
  background:#fff; 
  color:#111; 
  border-radius:999px; 
  padding:.5rem .9rem; 
  font-weight:600; 
  display:flex; 
  align-items:center; 
  gap:.5rem; 
  white-space:nowrap;
  transition:all 0.2s ease;
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
.section-title{ 
  font-size:1.35rem; 
  font-weight:800; 
  color:var(--ink); 
  display:flex; 
  align-items:center;
  gap:.6rem; 
  margin:0 0 1rem 
}
.section-title i{ color:var(--orange) }
.section-title-sm{ 
  font-weight:800; 
  color:var(--ink); 
  font-size:1.05rem; 
  display:flex; 
  align-items:center; 
  gap:.5rem; 
  margin-bottom:.6rem 
}

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
.bullets li{ margin:.4rem 0; color:#374151 }
.bullets.small li{ font-size:.95rem; color:#4b5563 }

/* FACULTY */
.section-header{ display:flex; align-items:center; justify-content:space-between; gap:1rem; flex-wrap:wrap }
.filters{ display:flex; gap:.6rem; align-items:center }
.filters input, .filters select{
  border:1px solid var(--border); border-radius:.6rem; padding:.55rem .8rem; min-width:220px; background:#fff;
}
.faculty-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(350px,1fr)); gap:1rem; margin-top:1rem }
.faculty-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  overflow:visible; 
  display:flex; 
  gap:.85rem; 
  padding:1rem; 
  background:#fff; 
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
}
.faculty-card:focus, .faculty-card:hover{ 
  transform:translateY(-4px); 
  box-shadow:0 8px 25px rgba(0,0,0,.12);
}
.avatar{ width:86px; height:86px; object-fit:cover; border-radius:.75rem }
.fc-name{ font-size:1.05rem; font-weight:800; color:var(--ink); margin:0 0 .15rem }
.fc-meta{ color:var(--muted); margin:0 0 .35rem }
.badge{ background:rgba(249,115,22,.1); color:var(--orange); padding:.15rem .45rem; border-radius:.4rem; font-size:.78rem; font-weight:700 }
.fc-tags{ color:#374151; font-size:.92rem }
.fc-links{ display:flex; gap:.5rem; margin-top:.4rem }
.icon-link{ 
  width:36px; 
  height:36px; 
  display:grid; 
  place-items:center; 
  border:1px solid var(--border); 
  border-radius:.6rem; 
  color:var(--ink);
  transition:all 0.2s ease;
}
.icon-link:hover{ 
  background:rgba(17,24,39,.06);
  transform:translateY(-2px);
}

/* LABS */
.labs-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.lab-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; background:#fff; display:flex; flex-direction:column }
.lab-card img{ width:100%; height:160px; object-fit:cover }
.lab-body{ padding:1rem }
.lab-title{ margin:0 0 .25rem; font-weight:800; color:var(--ink) }
.lab-text{ color:#374151; font-size:.95rem }
.lab-tags{ display:flex; flex-wrap:wrap; gap:.4rem; margin-top:.5rem; padding:0; list-style:none }
.lab-tags li{ border:1px solid var(--border); border-radius:999px; padding:.15rem .55rem; font-size:.78rem; color:#4b5563 }

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
  transition:all 0.2s ease;
  text-decoration:none;
}
.btn-primary{ 
  background:var(--orange); 
  color:#fff;
  border-color:var(--orange);
}
.btn-primary:hover{ 
  background:#e8590c;
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(249,115,22,0.4);
}
.btn-soft{ 
  background:#fff; 
  color:var(--ink); 
  border-color:var(--ink);
}
.btn-soft:hover{ 
  background:var(--ink); 
  color:#fff;
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,0.2);
}
.row-actions{ display:flex; gap:.6rem; flex-wrap:wrap }

/* ALUMNI */
.alumni-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.alumni-card{ border:1px solid var(--border); border-radius:1rem; background:#fff; padding:.9rem; display:flex; gap:.8rem; align-items:center }
.alumni-card .avatar{ width:70px; height:70px; border-radius:.7rem }

/* UNDER CONSTRUCTION */
.under-construction{ 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  min-height: 300px; 
  background: linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%); 
  border: 2px dashed var(--border); 
  border-radius: 1rem; 
  margin: 1rem 0 
}
.construction-content{ 
  text-align: center; 
  max-width: 400px; 
  padding: 2rem 
}
.construction-content i{ 
  font-size: 3rem; 
  color: var(--primary); 
  margin-bottom: 1rem; 
  opacity: 0.7 
}
.construction-content h3{ 
  color: var(--ink); 
  margin-bottom: 1rem; 
  font-size: 1.5rem 
}
.construction-content p{ 
  color: var(--muted); 
  line-height: 1.6; 
  margin-bottom: 0.8rem 
}

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }
.note{ background:linear-gradient(180deg,#f8fafc,#eef4ff); border:1px dashed var(--border); border-radius:.9rem; padding:.9rem }
.last-updated{ color:var(--muted); font-size:.9rem; margin-top:.6rem }

/* UTIL */
.grid-2, .grid-3 .card{ background:#fff }
.mt-3{margin-top:1rem}

/* LABS */
.labs-intro{ margin-top:1rem }
.labs-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; margin-top:1.5rem }
@media (max-width:1200px){ .labs-grid{ grid-template-columns:repeat(2,1fr); gap:1.2rem } }
@media (max-width:768px){ .labs-grid{ grid-template-columns:1fr; gap:1rem } }
.lab-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  overflow:hidden; 
  background:#fff; 
  display:flex; 
  flex-direction:column;
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
}
.lab-card:hover{
  transform:translateY(-4px);
  box-shadow:0 8px 25px rgba(0,0,0,.12);
  border-color:var(--orange);
}
.lab-card img{ width:100%; height:200px; object-fit:cover }
.lab-body{ padding:1.5rem; flex:1; display:flex; flex-direction:column }
.lab-title{ margin:0 0 .5rem; font-weight:800; color:var(--ink); font-size:1.1rem }
.lab-text{ color:#000; font-size:.95rem; line-height:1.5; margin-bottom:1rem; flex:1 }
.lab-tags{ display:flex; flex-wrap:wrap; gap:.4rem; margin:.5rem 0; padding:0; list-style:none }
.lab-tags li{ border:1px solid var(--border); border-radius:999px; padding:.15rem .55rem; font-size:.78rem; color:var(--ink); background:rgba(249,115,22,0.05) }
.lab-actions{ margin-top:auto; display:flex; justify-content:center }
.view-images-btn{ 
  width:100%; 
  justify-content:center; 
  font-size:.9rem;
  padding:.7rem 1rem;
}

/* PDF Modal Styles */
.download{
  border:1px solid var(--border); 
  border-radius:.9rem; 
  padding:.8rem; 
  display:flex; 
  gap:.7rem; 
  align-items:flex-start; 
  text-decoration:none; 
  color:inherit; 
  background:#fff;
  transition:all 0.3s ease;
  cursor:pointer;
}
.download:hover{
  border-color:var(--orange);
  background:rgba(249,115,22,0.05);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.1);
}
.download.coming-soon{
  opacity:0.6;
  cursor:not-allowed;
}
.download.coming-soon:hover{
  transform:none;
  box-shadow:none;
}
.dl-status{
  font-size:0.8rem;
  color:var(--orange);
  font-weight:600;
  margin-top:0.2rem;
}

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
