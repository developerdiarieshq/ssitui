<template>
  <div class="eee-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="EEE Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Electrical & Electronics Engineering (EEE)</h1>
          <p class="tagline">Powering Progress, One Circuit at a Time</p>
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
              <span class="qf-label">Programs</span>
              <span class="qf-value">B.Tech (EEE), Honors/Minors</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="EEE Department - Students in Electrical Lab"
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
      <section :id="tabsMap.overview" class="card-section" v-show="activeTab==='overview'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-school"></i> About the Department</h2>
          <p class="lead">
            Electrical and Electronics Engineering degree is a stepping stone to a wide range of careers ranging from computer science to business. SSIT prepares sound ground to equip the students to this creative engineering streak.
          </p>
          <p class="lead">
            The EEE department technical association provides opportunities to the students to give weekly seminars on current topics of interest, Guest lectures are also arranged in the Association activities. The Association conducts competitions in technical paper presentations, working models exhibition, technical Quiz etc., and gives awards & prizes.
          </p>
          <p class="lead">
            The Intake of 60 students and the total student strength is about 240.
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
              To develop highly skilled professionals with ethics and human values to produce competent electrical engineers in the field of Electrical and Electronics Engineering
            </p>
            <h3 class="h5 text-muted mt-4 mb-2">Mission</h3>
            <p>
              To impact quality education with industrial exposure, professional training and also to achieve excellence in teaching - learning, research and development activities.
            </p>
            <h3 class="h5 text-muted mt-4 mb-2">Goals</h3>
            <ul class="bullets">
              <li><strong>Research & Development:</strong> R&D is focused on applied research for the benefit of power sector along with product/instrumentation development in our department.</li>
              <li><strong>Training Programs:</strong> The program is an amalgam of skill training education that aims at making our students interview ready in every way by development of applied knowledge well thought out integration of technical skills and academic knowledge put into practical use in projects.</li>
              <li><strong>Training & Placements:</strong> Training & placement was created as a way to provide best in class training to our students. The aim was to develop specific skills in people so they can achieve their goals and meet their objectives.</li>
              <li><strong>Industrial Development:</strong> It is held that all societies undergo changes from traditional, transitional and modern stages of development. It stands for rapid industrialization, technological advancement, modernization, full employment and continuous process of liberalization of society, economy and polity.</li>
            </ul>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>B.Tech in EEE</strong> — {{ facts.intakeUG }} seats; EAMCET eligibility; comprehensive electrical engineering curriculum.</li>
              <li><strong>Technical Association</strong> — Weekly seminars, guest lectures, competitions, and awards.</li>
              <li><strong>Research & Development</strong> — Applied research in power sector and product development.</li>
              <li><strong>Industry Training</strong> — Skill development programs for interview readiness and practical application.</li>
              <li><strong>Total Student Strength</strong> — About 240 students across all years.</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">Download Syllabus</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Highlights</a>
            </div>
          </article>
        </div>

        <!-- Program Objectives & Outcomes Accordion -->
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-graduation-cap"></i> Program Educational Objectives, Outcomes and Specific Outcomes</h2>
          
          <!-- Accordion Container -->
          <div class="accordion-container">
            
            <!-- PEOs Accordion -->
            <div class="accordion-item">
              <button 
                class="accordion-header" 
                @click="toggleAccordion('peos')"
                :class="{ active: activeAccordion === 'peos' }"
              >
                <div class="accordion-title">
                  <i class="fa-solid fa-bullseye"></i>
                  <span>Program Educational Objectives (PEOs)</span>
                  <span class="accordion-count">3 Items</span>
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon" :class="{ rotated: activeAccordion === 'peos' }"></i>
              </button>
              <div class="accordion-content" :class="{ active: activeAccordion === 'peos' }">
                <div class="outcome-grid">
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 1</div>
                    <div class="outcome-content">
                      <h4>Technical Excellence</h4>
                      <p>To excel in electrical and electronics engineering careers and pursue higher studies at premier institutions with strong foundation in power systems and electronics.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 2</div>
                    <div class="outcome-content">
                      <h4>Innovation & Leadership</h4>
                      <p>To lead multi-disciplinary teams in developing innovative electrical systems and electronic solutions for real-world applications in power and energy sectors.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 3</div>
                    <div class="outcome-content">
                      <h4>Professional Ethics</h4>
                      <p>To commit to ethical, sustainable, and impactful electrical engineering practices while contributing to society through responsible power and energy solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- POs Accordion -->
            <div class="accordion-item">
              <button 
                class="accordion-header" 
                @click="toggleAccordion('pos')"
                :class="{ active: activeAccordion === 'pos' }"
              >
                <div class="accordion-title">
                  <i class="fa-solid fa-list-check"></i>
                  <span>Program Outcomes (POs)</span>
                  <span class="accordion-count">12 Items</span>
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon" :class="{ rotated: activeAccordion === 'pos' }"></i>
              </button>
              <div class="accordion-content" :class="{ active: activeAccordion === 'pos' }">
                <div class="outcome-grid grid-2">
                  <div class="outcome-card">
                    <div class="outcome-number">PO 1</div>
                    <div class="outcome-content">
                      <h4>Engineering Knowledge</h4>
                      <p>Apply the knowledge of mathematics, science, engineering fundamentals, and EEE specialization to the solution of complex engineering problems.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 2</div>
                    <div class="outcome-content">
                      <h4>Problem Analysis</h4>
                      <p>Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 3</div>
                    <div class="outcome-content">
                      <h4>Design/Development of Solutions</h4>
                      <p>Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 4</div>
                    <div class="outcome-content">
                      <h4>Conduct Investigations</h4>
                      <p>Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data to provide valid conclusions.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 5</div>
                    <div class="outcome-content">
                      <h4>Modern Tool Usage</h4>
                      <p>Create, select, and apply appropriate techniques, resources, and modern EEE tools including MATLAB, Simulink, and PSpice to complex activities.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 6</div>
                    <div class="outcome-content">
                      <h4>The Engineer and Society</h4>
                      <p>Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues relevant to professional EEE practice.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 7</div>
                    <div class="outcome-content">
                      <h4>Environment & Sustainability</h4>
                      <p>Understand the impact of professional engineering solutions in societal and environmental contexts, and demonstrate knowledge of sustainable development.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 8</div>
                    <div class="outcome-content">
                      <h4>Ethics</h4>
                      <p>Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 9</div>
                    <div class="outcome-content">
                      <h4>Individual & Team Work</h4>
                      <p>Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 10</div>
                    <div class="outcome-content">
                      <h4>Communication</h4>
                      <p>Communicate effectively on complex engineering activities with the engineering community and with society at large.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 11</div>
                    <div class="outcome-content">
                      <h4>Project Management</h4>
                      <p>Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 12</div>
                    <div class="outcome-content">
                      <h4>Lifelong Learning</h4>
                      <p>Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- PSOs Accordion -->
            <div class="accordion-item">
              <button 
                class="accordion-header" 
                @click="toggleAccordion('psos')"
                :class="{ active: activeAccordion === 'psos' }"
              >
                <div class="accordion-title">
                  <i class="fa-solid fa-code-branch"></i>
                  <span>Program Specific Outcomes (PSOs)</span>
                  <span class="accordion-count">3 Items</span>
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon" :class="{ rotated: activeAccordion === 'psos' }"></i>
              </button>
              <div class="accordion-content" :class="{ active: activeAccordion === 'psos' }">
                <div class="outcome-grid">
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 1</div>
                    <div class="outcome-content">
                      <h4>Power System Design</h4>
                      <p>Design and implement electrical power systems, including generation, transmission, and distribution networks using modern tools and technologies.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 2</div>
                    <div class="outcome-content">
                      <h4>Electronics & Control Systems</h4>
                      <p>Analyze and design electronic circuits, control systems, and automation solutions for industrial and power applications.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 3</div>
                    <div class="outcome-content">
                      <h4>Renewable Energy Systems</h4>
                      <p>Develop renewable energy systems and smart grid solutions while ensuring proper integration, testing, and optimization of electrical systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- COs Accordion -->
            <div class="accordion-item">
              <button 
                class="accordion-header" 
                @click="toggleAccordion('cos')"
                :class="{ active: activeAccordion === 'cos' }"
              >
                <div class="accordion-title">
                  <i class="fa-solid fa-book-open"></i>
                  <span>Course Outcomes (COs)</span>
                  <span class="accordion-count">2 Regulations</span>
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon" :class="{ rotated: activeAccordion === 'cos' }"></i>
              </button>
              <div class="accordion-content" :class="{ active: activeAccordion === 'cos' }">
                <div class="outcome-grid">
                  <div class="outcome-card">
                    <div class="outcome-number">R22</div>
                    <div class="outcome-content">
                      <h4>Current Regulation (R22)</h4>
                      <p>Course outcomes aligned with latest EEE curriculum including modern power systems, renewable energy, and smart grid applications.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">R18</div>
                    <div class="outcome-content">
                      <h4>Previous Regulation (R18)</h4>
                      <p>Legacy course outcomes for students enrolled under the previous curriculum with foundational EEE concepts and traditional approaches.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
          <i class="fa-solid fa-cogs"></i> Modern Equipment • <i class="fa-solid fa-laptop-code"></i> Simulation Software •
          <i class="fa-solid fa-bolt"></i> Power Systems • <i class="fa-solid fa-microchip"></i> Control Systems
        </div>
      </section>

      <!-- CURRICULUM -->
      <section class="card-section" aria-labelledby="curriculum" v-show="activeTab==='curriculum'">
        <div class="card">
          <h2 class="section-title" id="curriculum"><i class="fa-solid fa-file-lines"></i> Curriculum & Syllabus</h2>
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
          <a class="btn btn-primary" href="mailto:alumni@ssit.edu.in">Join Alumni Mentoring</a>
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

    <!-- Image Previewer Modal -->
    <ImagePreviewer
      v-model:show="showImageModal"
      v-model:currentIndex="currentImageIndex"
      v-model:isFullscreen="isFullscreen"
      :images="labImagesForModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ImagePreviewer from '@/views/utils/ImagePreviewer.vue'

/* Facts / Quick Stats */
const facts = { established: '2001', intakeUG: '60', programs: 'B.Tech (EEE), Honors/Minors' }

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '28+', icon: 'fa-solid fa-user-tie' },
  { label: 'Labs', value: '8', icon: 'fa-solid fa-flask' },
  { label: 'Projects / Yr', value: '15+', icon: 'fa-solid fa-diagram-project' },
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
const tabsMap = tabs.reduce((acc, t) => ((acc[t.id] = t.id), acc), {})
const activeTab = ref(tabs[0].id)
const setTab = (id) => { activeTab.value = id } // no scroll/jump

/* Faculty */
const faculty = ref([
  {
    name: 'KOTA RAMAKRISHNA PRASAD', 
    designation: 'ASSOCIATE PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Power Systems', 'Electrical Machines'],
    email: 'ramakrishna@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400',
    profile: '#', linkedin: '#',
    experience: 16
  },
  {
    name: 'AVUDURTHI GOPI', 
    designation: 'ASSOCIATE PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Control Systems', 'Power Electronics'],
    email: 'gopi@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400',
    profile: '#', linkedin: '#',
    experience: 15
  },
  {
    name: 'THOMMANDRU RAMBABU', 
    designation: 'ASSOCIATE PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Electrical Circuits', 'Electronics'],
    email: 'rambabu@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400',
    profile: '#', linkedin: '#',
    experience: 14
  },
  {
    name: 'JAKKULA KANTHAIAH', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Digital Electronics', 'Microcontrollers'],
    email: 'kanthaiah@ssit.edu.in',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400',
    profile: '#', linkedin: '#',
    experience: 12
  },
  {
    name: 'MORAVENENI PRATHIMA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Power Systems', 'Renewable Energy'],
    email: 'prathima@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 8
  },
  {
    name: 'NARAPOGU G. VENKATA KRISHNA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Control Systems', 'Automation'],
    email: 'venkatakrishna@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 7
  },
  {
    name: 'VANAPARTHI SATYAVARDHAN RAO', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Power Electronics', 'Drives'],
    email: 'satyavardhan@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 8
  },
  {
    name: 'DARIPALLI NAGASESHU', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Electrical Measurements', 'Instrumentation'],
    email: 'nagaseshu@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 2
  },
  {
    name: 'SHAIK SAIDULU', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Network Analysis', 'Signals'],
    email: 'saidulu@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 7
  }
])
const designations = ['Professor & HOD', 'Professor', 'Associate Professor', 'Assistant Professor']
const query = ref('')
const designation = ref('ALL')

// Accordion state
const activeAccordion = ref('')
const toggleAccordion = (section) => {
  activeAccordion.value = activeAccordion.value === section ? '' : section
}

// Image Modal state
const showImageModal = ref(false)
const currentImageIndex = ref(0)
const currentLabImages = ref([])
const isFullscreen = ref(false)

// Computed properties for ImagePreviewer
const labImagesForModal = computed(() => {
  return currentLabImages.value.map(src => ({ 
    src: src.startsWith('@/') ? new URL(src, import.meta.url).href : src, 
    title: '', 
    desc: '' 
  }))
})

const openImageModal = (labImages) => {
  currentLabImages.value = labImages
  currentImageIndex.value = 0
  showImageModal.value = true
}
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
    title: 'Electrical Machines Lab',
    desc: 'Advanced electrical machines laboratory with DC motors, AC motors, transformers, and generators for comprehensive hands-on training.',
    img: '@/assets/engineering-students-lab.png',
    images: [
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/engineering-students-lab.png',
      '@/assets/campuslife/students-in-college-library-studying.jpg'
    ],
    tags: ['DC Motors', 'AC Motors', 'Transformers']
  },
  {
    title: 'Electrical Circuits Lab',
    desc: 'Fundamental electrical circuits laboratory with circuit analysis, network theorems, and power electronics experiments.',
    img: '@/assets/campuslife/engineering-students-lab.png',
    images: [
      '@/assets/campuslife/engineering-students-lab.png',
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/students-in-college-library-studying.jpg'
    ],
    tags: ['Circuit Analysis', 'Network Theorems', 'Power Electronics']
  },
  {
    title: 'Power Systems Lab',
    desc: 'High voltage and power systems laboratory with transmission line models, power flow analysis, and protection systems.',
    img: '@/assets/campuslife/students-in-college-library-studying.jpg',
    images: [
      '@/assets/campuslife/students-in-college-library-studying.jpg',
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/engineering-students-lab.png'
    ],
    tags: ['Power Flow', 'Protection', 'High Voltage']
  },
  {
    title: 'PE and EM Lab',
    desc: 'Power Electronics and Electrical Machines laboratory combining power converters, motor drives, and control systems.',
    img: '@/assets/engineering-students-lab.png',
    images: [
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/students-in-college-library-studying.jpg',
      '@/assets/campuslife/engineering-students-lab.png'
    ],
    tags: ['Power Converters', 'Motor Drives', 'Control Systems']
  },
  {
    title: 'Simulation Lab',
    desc: 'Computer-aided design and simulation laboratory with MATLAB, Simulink, and specialized electrical engineering software.',
    img: '@/assets/campuslife/engineering-students-lab.png',
    images: [
      '@/assets/campuslife/engineering-students-lab.png',
      '@/assets/engineering-students-lab.png'
    ],
    tags: ['MATLAB', 'Simulink', 'CAD Tools']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { label: 'B.Tech CSE (AI & DS) Syllabus (R22)', note: 'Current Scheme', href: '#' },
  { label: 'Electives & Tracks', note: 'DL • NLP • CV • Data Engg', href: '#' },
  { label: 'Project-Based Learning Modules', note: 'Capstones & Industry Projects', href: '#' }
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
  name: 'Dr. R. Anitha',
  designation: 'Professor & Head, CSE (AI & DS)',
  location: 'AI & DS Block, Room 301',
  phone: '+91-98765-43210',
  email: 'hod.aids@ssit.edu.in'
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
.faculty-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-top:1rem }
.faculty-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; display:flex; gap:.85rem; padding:.9rem; background:#fff; transition:transform .2s ease, box-shadow .2s ease }
.faculty-card:focus, .faculty-card:hover{ transform:translateY(-3px); box-shadow:0 12px 30px rgba(0,0,0,.08) }
.avatar{ width:86px; height:86px; object-fit:cover; border-radius:.75rem }
.fc-name{ font-size:1.05rem; font-weight:800; color:var(--ink); margin:0 0 .15rem }
.fc-meta{ color:var(--muted); margin:0 0 .35rem }
.badge{ background:rgba(249,115,22,.1); color:var(--orange); padding:.15rem .45rem; border-radius:.4rem; font-size:.78rem; font-weight:700 }
.fc-tags{ color:#374151; font-size:.92rem }
.fc-links{ display:flex; gap:.5rem; margin-top:.4rem }
.icon-link{ width:36px; height:36px; display:grid; place-items:center; border:1px solid var(--border); border-radius:.6rem; color:var(--ink) }
.icon-link:hover{ background:rgba(17,24,39,.06) }

/* LABS */
.labs-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.lab-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; background:#fff; display:flex; flex-direction:column }
.lab-card img{ width:100%; height:160px; object-fit:cover }
.lab-body{ padding:1rem }
.lab-title{ margin:0 0 .25rem; font-weight:800; color:var(--ink) }
.lab-text{ color:#374151; font-size:.95rem }
.lab-tags{ display:flex; flex-wrap:wrap; gap:.4rem; margin-top:.5rem; padding:0; list-style:none }
.lab-tags li{ border:1px solid var(--border); border-radius:999px; padding:.15rem .55rem; font-size:.78rem; color:#4b5563 }

.lab-actions{
  margin-top:.75rem;
  padding-top:.75rem;
  border-top:1px solid rgba(0,0,0,0.06);
}

.view-images-btn{
  width:100%;
  font-size:.85rem;
  padding:.5rem .75rem;
  display:flex;
  align-items:center;
  justify-content:center;
  gap:.5rem;
}

.view-images-btn i{
  font-size:.9rem;
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
  transition:all 0.3s ease;
  text-decoration:none;
}
.btn-primary{ background:var(--orange); color:#fff; border-color:var(--orange) }
.btn-primary:hover{ 
  background:#e55a00; 
  border-color:#e55a00;
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
}
.btn-soft{ background:#fff; color:var(--ink); border-color:var(--ink) }
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

/* ACCORDION STYLES */
.accordion-container{
  margin-top:1rem;
}
.accordion-item{
  border:1px solid var(--border);
  border-radius:.75rem;
  margin-bottom:.75rem;
  overflow:hidden;
  transition:all 0.3s ease;
}
.accordion-item:hover{
  box-shadow:0 4px 12px rgba(0,0,0,0.08);
}
.accordion-header{
  width:100%;
  background:#fff;
  border:none;
  padding:1.2rem 1.5rem;
  display:flex;
  align-items:center;
  justify-content:space-between;
  cursor:pointer;
  transition:all 0.2s ease;
  text-align:left;
}
.accordion-header:hover{
  background:rgba(249,115,22,0.04);
}
.accordion-header.active{
  background:var(--orange);
  color:#fff;
}
.accordion-title{
  display:flex;
  align-items:center;
  gap:.75rem;
  font-weight:700;
  font-size:1.05rem;
}
.accordion-title i{ color:var(--orange); font-size:1.2rem }
.accordion-header.active .accordion-title i{
  color:#fff;
}
.accordion-count{
  background:rgba(249,115,22,0.1);
  color:var(--orange);
  padding:.25rem .6rem;
  border-radius:999px;
  font-size:.8rem;
  font-weight:600;
  margin-left:.5rem;
}
.accordion-header.active .accordion-count{
  background:rgba(255,255,255,0.2);
  color:#fff;
}
.accordion-icon{
  color:var(--ink);
  font-size:1rem;
  transition:transform 0.3s ease;
}
.accordion-icon.rotated{
  transform:rotate(180deg);
}
.accordion-header.active .accordion-icon{
  color:#fff;
}
.accordion-content{
  max-height:0;
  overflow:hidden;
  background:#fff;
  transition:max-height 0.4s ease;
}
.accordion-content.active{
  max-height:2000px;
  padding:1.5rem;
}
.outcome-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:1rem;
}
.outcome-grid.grid-2{
  grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
}
.outcome-card{
  background:#f8fafc;
  border:1px solid var(--border);
  border-radius:.6rem;
  padding:1rem;
  transition:all 0.2s ease;
}
.outcome-card:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,0.1);
  border-color:var(--orange);
}
.outcome-number{
  background:var(--orange);
  color:#fff;
  width:3.5rem;
  height:3.5rem;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:800;
  font-size:.75rem;
  margin-bottom:.75rem;
  white-space:nowrap;
  flex-shrink:0;
  line-height:1;
}
.outcome-content h4{
  color:var(--ink);
  font-weight:700;
  font-size:1rem;
  margin-bottom:.5rem;
}
.outcome-content p{
  color:#4b5563;
  font-size:.9rem;
  line-height:1.5;
  margin:0;
}

@media (max-width: 768px){
  .accordion-header{ padding:1rem 1.2rem }
  .accordion-title{ font-size:1rem }
  .accordion-count{ font-size:.75rem; padding:.15rem .5rem }
  .outcome-grid{ grid-template-columns:1fr }
  .outcome-grid.grid-2{ grid-template-columns:1fr }
}
</style>
