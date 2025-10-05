<template>
  <div class="dme-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="DME Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Diploma in Electronics & Communication Engineering (DECE)</h1>
          <p class="tagline">Connecting the World with Electronic Innovation</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Duration</span>
              <span class="qf-value">3 Years</span>
            </li>
            <li>
              <span class="qf-label">Intake</span>
              <span class="qf-value">40 Students</span>
            </li>
            <li>
              <span class="qf-label">Eligibility</span>
              <span class="qf-value">10th Pass</span>
            </li>
            <li>
              <span class="qf-label">Focus</span>
              <span class="qf-value">Manufacturing • Design</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="Mechanical Engineering themed visual"
            class="hero-img"
          />
        </picture>
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
      <!-- OVERVIEW -->
      <section class="card-section" v-show="activeTab==='overview'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-school"></i> About DME Program</h2>
          <p class="lead">
            The Diploma in Mechanical Engineering (DME) program provides comprehensive knowledge and practical skills in mechanical engineering principles, design, manufacturing, and maintenance. Established with a vision to produce skilled technicians and engineers.
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
              To be recognized as a center for excellence in mechanical engineering education, producing skilled technicians and engineers who contribute to technological advancement.
            </p>
            <h3 class="h5 mt-4 mb-2" style="color: var(--ink); font-weight: 800;">Mission</h3>
            <ul class="bullets">
              <li>Provide comprehensive mechanical engineering education</li>
              <li>Develop practical skills in manufacturing and design</li>
              <li>Foster innovation and problem-solving abilities</li>
              <li>Maintain industry-relevant curriculum standards</li>
            </ul>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-cog"></i> Program Highlights</h3>
            <ul class="bullets">
              <li><strong>Digital Electronics</strong> — Logic circuits, microprocessors, and digital systems</li>
              <li><strong>Communication Systems</strong> — Analog and digital communication technologies</li>
              <li><strong>Microcontrollers</strong> — Embedded systems and programming</li>
              <li><strong>Telecommunications</strong> — Modern communication networks and protocols</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">View Curriculum</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Info</a>
            </div>
          </article>
        </div>
      </section>

      <!-- FACULTY -->
      <section class="card-section" v-show="activeTab==='faculty'">
        <div class="card">
          <div class="section-header">
            <h2 class="section-title"><i class="fa-solid fa-users-gear"></i> Faculty Directory</h2>
            <div class="filters" role="search">
              <input
                v-model="query"
                type="search"
                placeholder="Search faculty..."
                aria-label="Search faculty"
              />
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
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- LABS -->
      <section class="card-section" v-show="activeTab==='labs'">
        <h2 class="section-title"><i class="fa-solid fa-flask"></i> Labs & Infrastructure</h2>
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
      </section>

      <!-- CURRICULUM -->
      <section class="card-section" v-show="activeTab==='curriculum'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-file-lines"></i> Course Structure</h2>
          <p class="lead">
            Comprehensive 3-year curriculum covering all aspects of mechanical engineering
          </p>
          
          <div class="course-structure">
            <div class="course-grid">
              <div class="course-card">
                <div class="course-header">
                  <i class="fa-solid fa-cog course-icon"></i>
                  <h3 class="course-title">Year 1</h3>
                  <p class="course-subtitle">Foundation & Basics</p>
                </div>
                <div class="course-content">
                  <p class="course-desc">Mathematics, Physics, Engineering Drawing, Workshop Practice, and Basic Mechanical Engineering concepts.</p>
                  <div class="course-features">
                    <span class="feature-tag">Mathematics</span>
                    <span class="feature-tag">Physics</span>
                    <span class="feature-tag">Engineering Drawing</span>
                    <span class="feature-tag">Workshop Practice</span>
                  </div>
                </div>
              </div>
              
              <div class="course-card">
                <div class="course-header">
                  <i class="fa-solid fa-tools course-icon"></i>
                  <h3 class="course-title">Year 2</h3>
                  <p class="course-subtitle">Core Engineering</p>
                </div>
                <div class="course-content">
                  <p class="course-desc">Machine Design, Manufacturing Processes, Thermodynamics, and Material Science fundamentals.</p>
                  <div class="course-features">
                    <span class="feature-tag">Machine Design</span>
                    <span class="feature-tag">Manufacturing</span>
                    <span class="feature-tag">Thermodynamics</span>
                    <span class="feature-tag">Materials</span>
                  </div>
                </div>
              </div>
              
              <div class="course-card">
                <div class="course-header">
                  <i class="fa-solid fa-industry course-icon"></i>
                  <h3 class="course-title">Year 3</h3>
                  <p class="course-subtitle">Specialization</p>
                </div>
                <div class="course-content">
                  <p class="course-desc">Advanced topics including CAD/CAM, Industrial Engineering, Project Work, and Industry Training.</p>
                  <div class="course-features">
                    <span class="feature-tag">CAD/CAM</span>
                    <span class="feature-tag">Industrial Engineering</span>
                    <span class="feature-tag">Project Work</span>
                    <span class="feature-tag">Industry Training</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          <h3 class="h6 mt-3 mb-2">Career Opportunities</h3>
          <ul class="bullets">
            <li>Mechanical Design Engineer</li>
            <li>Production Engineer</li>
            <li>Maintenance Engineer</li>
            <li>Quality Control Engineer</li>
            <li>Manufacturing Engineer</li>
          </ul>
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
          </div>
        </div>
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

/* Tabs */
const tabs = [
  { id: 'overview',   label: 'Overview',   icon: 'fa-solid fa-circle-dot' },
  { id: 'faculty',    label: 'Faculty',    icon: 'fa-solid fa-users' },
  { id: 'labs',       label: 'Labs',       icon: 'fa-solid fa-flask' },
  { id: 'curriculum', label: 'Curriculum', icon: 'fa-solid fa-file-lines' },
  { id: 'placements', label: 'Placements', icon: 'fa-solid fa-briefcase' },
  { id: 'contact',    label: 'Contact',    icon: 'fa-solid fa-address-book' }
]
const activeTab = ref(tabs[0].id)
const setTab = (id) => { activeTab.value = id }

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '8+', icon: 'fa-solid fa-user-tie' },
  { label: 'Labs', value: '4+', icon: 'fa-solid fa-flask' },
  { label: 'Duration', value: '3 Years', icon: 'fa-solid fa-clock' },
  { label: 'Placement', value: '85%+', icon: 'fa-solid fa-briefcase' }
]

/* Faculty */
const faculty = ref([
  {
    name: 'Dr. M. Rao', designation: 'Professor & HOD',
    qualification: 'Ph.D., Electronics & Communication',
    expertise: ['Digital Electronics', 'Communication Systems', 'Microcontrollers'],
    email: 'hod.dece@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400'
  },
  {
    name: 'Mr. V. Kumar', designation: 'Assistant Professor',
    qualification: 'M.Tech (Electronics & Communication)',
    expertise: ['Telecommunications', 'Signal Processing', 'Embedded Systems'],
    email: 'v.kumar@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400'
  },
  {
    name: 'Ms. R. Devi', designation: 'Assistant Professor',
    qualification: 'M.Tech (VLSI Design)',
    expertise: ['VLSI Design', 'Digital Systems', 'Communication Networks'],
    email: 'r.devi@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400'
  }
])
const query = ref('')
const filteredFaculty = computed(() => {
  const q = query.value.trim().toLowerCase()
  return faculty.value.filter(f => {
    return !q || f.name.toLowerCase().includes(q) || f.expertise.join(' ').toLowerCase().includes(q)
  })
})

/* Labs */
const labs = [
  {
    title: 'Mechanical Workshop',
    desc: 'Lathe, milling, drilling machines and precision tools for hands-on training.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200',
    tags: ['Lathe', 'Milling', 'Drilling']
  },
  {
    title: 'CAD/CAM Lab',
    desc: 'Computer-aided design and manufacturing software and equipment.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    tags: ['AutoCAD', 'SolidWorks', 'CNC']
  },
  {
    title: 'Thermal Engineering Lab',
    desc: 'Heat transfer, thermodynamics and energy systems equipment.',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200',
    tags: ['Heat Transfer', 'Thermodynamics', 'Energy Systems']
  },
  {
    title: 'Materials Testing Lab',
    desc: 'Material properties testing and quality control equipment.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200',
    tags: ['Testing', 'Quality Control', 'Materials']
  }
]

/* Placements */
const placements = {
  rate: 85,
  highestLPA: 6,
  medianLPA: 3.5
}

/* Contact */
const hod = {
  name: 'Dr. M. Rao',
  designation: 'Professor & Head, DECE',
  location: 'Electronics Block, Room 401',
  phone: '+91-98765-43212',
  email: 'hod.dece@ssit.edu.in'
}
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
  justify-content:center; 
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

/* STATS */
.stats{ display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:.9rem; margin-top:1rem }
.stat{ border:1px dashed var(--border); border-radius:.9rem; padding:.9rem; display:flex; gap:.7rem; align-items:center; background:#fff }
.stat i{ color:var(--orange); font-size:1.25rem }
.num{ font-weight:900; font-size:1.25rem; color:var(--ink) }
.label{ font-size:.85rem; color:var(--muted) }

/* BULLETS */
.bullets{ padding-left:1.2rem }
.bullets li{ margin:.4rem 0; color:#000; line-height:1.6 }

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

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }

/* RESPONSIVE */
@media (max-width: 1024px){
  .hero-inner{ grid-template-columns:1fr; }
}
@media (max-width: 768px){
  .grid-2{ grid-template-columns:1fr }
  .contact-card .contact-grid{ grid-template-columns:1fr }
  .quickfacts li{ min-width:140px }
  
  /* Mobile subnav adjustments */
  .subnav-inner{
    justify-content:flex-start;
    padding:.4rem .5rem;
  }
  
  .chip{
    font-size:0.85rem;
    padding:.4rem .8rem;
  }
}
</style>
