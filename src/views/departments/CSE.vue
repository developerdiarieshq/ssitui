<template>
  <div class="cse-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="CSE Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Computer Science & Engineering (CSE)</h1>
          <p class="tagline">Innovate • Code • Transform</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Established</span>
              <span class="qf-value">2001</span>
            </li>
            <li>
              <span class="qf-label">Intake (UG)</span>
              <span class="qf-value">60</span>
            </li>
            <li>
              <span class="qf-label">Programs</span>
              <span class="qf-value">B.Tech (CSE), Honors/Minors</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="CSE Department - Students in Computer Lab"
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
            Studying for a Computer Science and Engineering degree is exciting enough as it will open the doors to very cool jobs. It is truly amazing to catch the trend with SSIT. Because SSIT takes care to maximize the learning opportunities by keeping up-to-date and continuous with highly qualified and richly experienced faculty to meet the present requirement at global scenario.
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
            <h3 class="h5 text-muted mb-2">Vision</h3>
            <p>
              To contribute effectively to the important national endeavor to produce quality human resource in the Computer Science and Engineering and related areas for sustainable development of the country's IT industry needs.
            </p>
            <h3 class="h5 text-muted mt-4 mb-2">Mission</h3>
            <p>
              To produce highly qualified and motivated graduates through a rigorous curriculum of theory and application that develops the ability to solve problems, individually and in teams.
            </p>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>B.Tech (CSE)</strong> — {{ facts.intakeUG }} seats, EAMCET eligibility, modern specializations.</li>
              <li><strong>Honors/Minors</strong> — AI & ML, Cybersecurity, Data Science, Cloud Computing.</li>
              <li><strong>M.Tech / Ph.D.</strong> — (If applicable) Research-driven with faculty mentorship.</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">Download Syllabus</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Highlights</a>
            </div>
          </article>
        </div>

        <!-- Strengths Section -->
        <Strengths />

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
                      <h4>Knowledge & Analysis</h4>
                      <p>To acquire the essential knowledge of basic sciences and fundamentals in engineering and analyze technical solutions to computational problems by developing the algorithms.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 2</div>
                    <div class="outcome-content">
                      <h4>Application & Development</h4>
                      <p>To apply knowledge in the identification, design, development, production, configuration and maintenance of computing systems for real life problems.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 3</div>
                    <div class="outcome-content">
                      <h4>Leadership & Ethics</h4>
                      <p>To develop managerial skills, meeting societal needs, leadership, entrepreneurial skills, sustainable competitive edge in R&D and adhering professional and ethical skills.</p>
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
                      <p>Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</p>
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
                      <p>Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex activities.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 6</div>
                    <div class="outcome-content">
                      <h4>The Engineer and Society</h4>
                      <p>Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues relevant to professional engineering practice.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 7</div>
                    <div class="outcome-content">
                      <h4>Environment and Sustainability</h4>
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
                      <h4>Individual and Team Work</h4>
                      <p>Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 10</div>
                    <div class="outcome-content">
                      <h4>Communication</h4>
                      <p>Communicate effectively on complex engineering activities with the engineering community and with society at large through reports and presentations.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 11</div>
                    <div class="outcome-content">
                      <h4>Project Management and Finance</h4>
                      <p>Demonstrate knowledge and understanding of engineering and management principles and apply these to manage projects in multidisciplinary environments.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 12</div>
                    <div class="outcome-content">
                      <h4>Life-Long Learning</h4>
                      <p>Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</p>
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
                      <h4>Foundation of Mathematical Concepts</h4>
                      <p>To use mathematical methodologies to crack problem using suitable mathematical analysis, data structure and suitable algorithm.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 2</div>
                    <div class="outcome-content">
                      <h4>Foundation of Computer System</h4>
                      <p>The ability to interpret the fundamental concepts and methodology of computer systems. Students can understand the functionality of hardware and software aspects of computer systems.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 3</div>
                    <div class="outcome-content">
                      <h4>Foundation of Software Development</h4>
                      <p>The ability to grasp the software development lifecycle and methodologies of software systems. Possess competent skills and knowledge of software design process. Familiarity and practical proficiency with programming concepts and provide new ideas towards research.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Course Outcomes Accordion -->
            <div class="accordion-item">
              <button 
                class="accordion-header" 
                @click="toggleAccordion('cos')"
                :class="{ active: activeAccordion === 'cos' }"
              >
                <div class="accordion-title">
                  <i class="fa-solid fa-file-lines"></i>
                  <span>Course Outcomes (COs)</span>
                  <span class="accordion-count">2 Regulations</span>
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon" :class="{ rotated: activeAccordion === 'cos' }"></i>
              </button>
              <div class="accordion-content" :class="{ active: activeAccordion === 'cos' }">
                <div class="course-outcomes">
                  <div class="course-regulations">
                    <h4 class="regulation-title">R18 Regulation</h4>
                    <p class="regulation-desc">Course outcomes for the previous regulation (R18) are available for reference and comparison.</p>
                  </div>
                  <div class="course-regulations">
                    <h4 class="regulation-title">R22 Regulation</h4>
                    <p class="regulation-desc">Current course outcomes following the latest R22 regulation with updated curriculum and modern industry requirements.</p>
                  </div>
                </div>
                <div class="row-actions">
                  <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">View Detailed Course Outcomes</a>
                  <a class="btn btn-soft" href="#" target="_blank" rel="noopener">Download COs Document</a>
                </div>
              </div>
            </div>

          </div>
        </div>

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
                  <i class="fa-solid fa-microchip"></i> {{ f.expertise.join(', ') }}
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
        <div class="card">
        <h2 class="section-title"><i class="fa-solid fa-flask"></i> Laboratories & Infrastructure</h2>
          <div class="labs-intro">
            <p class="lead">
              We have Fully Equipped Laboratories with several Computer Labs equipped with latest software's and workstations. 
              It is connected to internet through a lease line to facilitate high speed internet access. All the computers 
              are connected through a structured network. Printer and copier facilities are also available in the lab. 
              Our dedicated faculty and staff are proud of their impressive credentials, which are comparable to those 
              of the best career instructors.
            </p>
          </div>
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
        <div class="muted mt-1"><i class="fa-solid fa-wifi"></i> Wi-Fi campus • Smart Classrooms • Industry MoU Labs</div>
      </section>

      <!-- CURRICULUM -->
      <section :id="tabsMap.curriculum" class="card-section" aria-labelledby="curriculum" v-show="activeTab==='curriculum'">
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
      <section :id="tabsMap.activities" class="card-section" v-show="activeTab==='activities'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-rocket"></i> Student Development Activities</h2>
          <div class="activities-hero">
            <p class="lead">
              The ACSESS (Association of Computer Science and Engineering in Sai Spurthi) is started on 15.09.09 (Engineer's Day) 
              by the Student and Staff of the CSE Department to strengthen research and advanced education in computing and allied fields. 
              It is mainly targeted to adopt new fields of knowledge and communication through co-curricular activities.
            </p>
            <p class="lead">
              It does this by working to influence policy that impacts departmental activities, encouraging the development of human resources, 
              contributing to the cohesiveness of the professional students community and collecting and disseminating information about the 
              importance and the state of computing research. Each plays an important role in achieving the ACSESS objectives.
            </p>
          </div>
          
          <div class="activities-grid">
            <article v-for="activity in activities" :key="activity.title" class="activity-card">
              <div class="activity-icon">
                <i :class="activity.icon"></i>
              </div>
              <div class="activity-content">
                <h3 class="activity-title">{{ activity.title }}</h3>
                <p class="activity-desc">{{ activity.desc }}</p>
              </div>
          </article>
          </div>
          
          <div class="activities-footer">
            <div class="text-center">
              <button class="btn btn-primary" @click="openEventsModal">
                <i class="fa-solid fa-images me-2"></i>View All Events Images
              </button>
              <p class="muted mt-3">
                <i class="fa-solid fa-calendar-alt"></i> 
                Explore our gallery of student activities and events
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- RESEARCH & INDUSTRY -->
      <section :id="tabsMap.research" class="card-section" v-show="activeTab==='research'">
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
            <div class="logo-row" aria-label="Recruiter logos">
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
              <p class="mb-0"><i class="fa-solid fa-circle-info"></i> Follow our LinkedIn group for updates, internships, and webinars.</p>
              <a class="btn btn-soft mt-1" href="#" aria-label="CSE LinkedIn Group">CSE LinkedIn Group</a>
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
  </div>

    <!-- Events Image Modal -->
    <ImagePreviewer
      v-model:show="showEventsModal"
      :images="eventImages"
      :initial-index="currentEventImageIndex"
      title="Events Gallery"
      title-icon="fa-solid fa-calendar-alt"
      title-icon-color="var(--orange)"
      :show-image-info="true"
    />
</template>

<script setup>
/* Vue 3 Composition API (script setup) */
import { computed, ref } from 'vue'
import Header from '@/components/Header.vue'
import ImagePreviewer from '@/views/utils/ImagePreviewer.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Strengths from '@/views/about/Strengths.vue'

/* Quick Facts */
const facts = {
  established: '2007',
  intakeUG: '120',
  programs: 'B.Tech (CSE), Honors/Minors'
}

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '28+', icon: 'fa-solid fa-user-tie' },
  { label: 'Labs', value: '8', icon: 'fa-solid fa-flask' },
  { label: 'Research Projects', value: '12+', icon: 'fa-solid fa-flask-vial' },
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
const tabsMap = tabs.reduce((acc, t) => ((acc[t.id] = t.id), acc), {})
const activeTab = ref(tabs[0].id)
const setTab = (id) => { activeTab.value = id } // no scroll/jump

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

// Events Image Modal state
const showEventsModal = ref(false)
const currentEventImageIndex = ref(0)
const isEventsFullscreen = ref(false)

// Computed properties for ImagePreviewer
const labImagesForModal = computed(() => {
  return currentLabImages.value.map(src => ({ src, title: '', desc: '' }))
})

const openImageModal = (labImages) => {
  currentLabImages.value = labImages
  currentImageIndex.value = 0
  showImageModal.value = true
}

// Events Image Modal functions
const openEventsModal = () => {
  currentEventImageIndex.value = 0
  showEventsModal.value = true
}

// Modal functions now handled by ImagePreviewer component

/* Faculty */
const faculty = ref([
  {
    name: 'Dr. Shaik Yakoob', designation: 'Professor & HOD',
    qualification: 'Ph.D., M.Tech',
    expertise: ['AI/ML'],
    email: 'hod.cse@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/1-440193931.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. N Venkateswararo', designation: 'Professor',
    qualification: 'Ph.D., M.Tech',
    expertise: ['Java','Web Dev'],
    email: 'sekharbabu@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/1-440099235.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Dr. Thotakura Veeranna', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['C','Web Dev', 'Cloud', 'DevOps'],
    email: 'ananya.rao@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/CS04.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. Cheepu Balakrishna', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Data Mining', 'Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/1-440400711.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. V Venkata Sivaprasad', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/1-761771724.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mrs. J Rajakala', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/CS07.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. Vanaparthi S R Krishna', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/CS18.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
  {
    name: 'Mr. B Santosh Kumar', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/CS11.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  },
    {
    name: 'Mrs. M Thirupathamma ', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
    photo: new URL('@/assets/faculty/cse/CS10.jpg', import.meta.url).href,
    profile: '#', linkedin: '#'
  } ,
  {
    name: 'Mr. CH Siva Prakash ', designation: 'Assistant Professor',
    qualification: 'M.Tech',
    expertise: ['Cybersecurity', 'Networks'],
    email: 'kiran.kumar@ssit.edu.in',
   photo: new URL('@/assets/faculty/cse/CS22.jpg', import.meta.url).href,
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

/* Activities */
const activities = [
  {
    title: 'Project Expo',
    desc: 'Competitive team event that is all about Design, implement and presenting Project.',
    icon: 'fa-solid fa-laptop-code'
  },
  {
    title: 'Logo Mania',
    desc: 'Competitive event that all about the designing and explaining meaning of Logo.',
    icon: 'fa-solid fa-paintbrush'
  },
  {
    title: 'Code Debugging',
    desc: 'Code Debugging is a Competitive Event to test C programming skills.',
    icon: 'fa-solid fa-bug'
  },
  {
    title: 'Paper Presentation',
    desc: 'Students give the demonstration on Various Latest Trends in Industry.',
    icon: 'fa-solid fa-file-text'
  },
  {
    title: 'Poster Presentation',
    desc: 'A way to share your knowledge of topic in a short format. It usually includes two elements - a poster and a brief explanation.',
    icon: 'fa-solid fa-chart-bar'
  },
  {
    title: 'Quiz',
    desc: 'A quiz is a game which can also be called a mind sport wherein the players, either as individuals or in teams attempt to answer questions posed to them correctly, in order to win a prize.',
    icon: 'fa-solid fa-question-circle'
  }
]

/* Event Images */
const eventImages = [
  {
    src: '@/assets/campuslife/engineering-students-lab.png',
    title: 'Project Expo 2023',
    desc: 'Students presenting their innovative projects'
  },
  {
    src: '@/assets/campuslife/college-cultural-fest-and-events.jpg',
    title: 'Cultural Events',
    desc: 'Annual cultural fest and student activities'
  },
  {
    src: '@/assets/campuslife/students-in-college-library-studying.jpg',
    title: 'Study Sessions',
    desc: 'Students collaborating in library sessions'
  },
  {
    src: '@/assets/campuslife/engineering-college-auditorium.jpg',
    title: 'Paper Presentations',
    desc: 'Students delivering technical presentations'
  },
  {
    src: '@/assets/campuslife/college-campus-sports-activities.jpg',
    title: 'Sports Activities',
    desc: 'Campus sports and recreational activities'
  },
  {
    src: '@/assets/campuslife/modern-college-hostel-rooms.jpg',
    title: 'Hostel Life',
    desc: 'Student accommodation and community events'
  }
]

/* Labs */
const labs = [
  {
    title: 'Computer Lab 1',
    desc: 'Programming fundamentals laboratory equipped with C, Java, and Data Structures development environment. Features modern workstations with comprehensive development tools and debugging software.',
    img: '@/assets/engineering-students-lab.png',
    images: [
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/engineering-students-lab.png',
      '@/assets/campuslife/students-in-college-library-studying.jpg'
    ],
    tags: ['C Programming', 'Java', 'DSA']
  },
  {
    title: 'Computer Lab 2',
    desc: 'Advanced AI/ML laboratory featuring cutting-edge artificial intelligence and machine learning tools. Equipped with powerful GPUs, deep learning frameworks, and specialized software for neural network development.',
    img: '@/assets/campuslife/engineering-students-lab.png',
    images: [
      '@/assets/campuslife/engineering-students-lab.png',
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/students-in-college-library-studying.jpg'
    ],
    tags: ['AI', 'ML', 'DL']
  },
  {
    title: 'Computer Lab 3',
    desc: 'Data Science and Visualization laboratory specializing in data analysis, visualization, and statistical computing. Features advanced analytics tools, interactive dashboards, and comprehensive data visualization software.',
    img: '@/assets/campuslife/students-in-college-library-studying.jpg',
    images: [
      '@/assets/campuslife/students-in-college-library-studying.jpg',
      '@/assets/engineering-students-lab.png',
      '@/assets/campuslife/engineering-students-lab.png'
    ],
    tags: ['Pandas', 'Visualization']
  },
  {
    title: 'Common Internet Center',
    desc: 'Centralized internet facility providing high-speed connectivity for research and academic activities. Accessible to all students and faculty members with 24/7 availability.',
    img: '@/assets/campuslife/engineering-students-lab.png',
    images: [
      '@/assets/campuslife/engineering-students-lab.png',
      '@/assets/engineering-students-lab.png'
    ],
    tags: ['High-Speed Internet', 'Research Access', 'Faculty Support']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { label: 'B.Tech CSE Syllabus (R22)', note: 'Current Scheme', href: '#' },
  { label: 'B.Tech CSE Syllabus (R18)', note: 'Previous Scheme', href: '#' },
  { label: 'Honors/Minors Structure', note: 'AI/ML • DS • Cyber • Cloud', href: '#' }
]


/* Research & Industry */
const research = {
  projects: [
    'Smart Agriculture with IoT & Edge AI',
    'NLP for Regional Languages',
    'Secure Microservices with Zero-Trust'
  ],
  publications: [
    { title: 'Efficient CNNs for Edge Devices', venue: 'IEEE Access, 2024' },
    { title: 'Graph Methods in Fraud Detection', venue: 'Elsevier, 2023' }
  ]
}
const industry = {
  mous: ['Microsoft • Cisco • Wipro • AWS Academy'],
  logos: [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Cisco_logo.svg', alt: 'Cisco' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Wipro_Primary_Logo_Color_RGB.svg', alt: 'Wipro' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', alt: 'AWS' }
  ]
}

/* Placements */
const placements = {
  rate: 92,
  highestLPA: 18,
  medianLPA: 5.6,
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
    name: 'Sai Teja K',
    company: 'Google',
    role: 'Software Engineer',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400'
  },
  {
    name: 'Anusha P',
    company: 'Microsoft',
    role: 'Cloud Engineer',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400'
  },
  {
    name: 'Rahul V',
    company: 'Wipro',
    role: 'Data Scientist',
    linkedin: '#',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400'
  }
]

/* Contact */
const hod = {
  name: 'Dr. Shaik Yakoob',
  designation: 'Professor & Head, CSE',
  location: 'CSE Block, Room 201',
  phone: '+91-87612-88278',
  email: 'hod.cse@ssit.edu.in'
}

const lastUpdated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

// Lifecycle hooks for fullscreen and keyboard
// Event listeners now handled by ImagePreviewer component
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
.subnav{ position:sticky; top:0; z-index:20; background:#fff; border-bottom:1px solid var(--border); }
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 0; overflow:auto }
.chip{ 
  border:1px solid var(--border); 
  background:#fff; 
  color:var(--ink); 
  border-radius:999px; 
  padding:.5rem .9rem; 
  font-weight:600; 
  display:flex; 
  align-items:center; 
  gap:.5rem; 
  white-space:nowrap;
  transition:all 0.3s ease;
  cursor:pointer;
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
}
.chip.active i{ color:#fff }

/* CONTENT */
.content{ padding:1.8rem 0 2.6rem }
.card-section{ margin:1.2rem 0 }
.card{ 
  background:var(--card); 
  border:1px solid var(--border); 
  border-radius:1rem; 
  padding:1.5rem 1.25rem; 
  box-shadow:0 6px 24px rgba(0,0,0,.06);
  transition:all 0.3s ease;
}
.card:hover{
  box-shadow:0 8px 32px rgba(0,0,0,.1);
  transform:translateY(-2px);
}
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
.stat{ 
  border:1px dashed var(--border); 
  border-radius:.9rem; 
  padding:.9rem; 
  display:flex; 
  gap:.7rem; 
  align-items:center; 
  background:#fff;
  transition:all 0.3s ease;
}
.stat:hover{
  border-color:var(--orange);
  background:rgba(249,115,22,0.05);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.1);
}
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
  border:2px solid #e5e7eb; 
  border-radius:.6rem; 
  padding:.6rem .9rem; 
  min-width:220px; 
  background:#fff;
  outline:none;
  transition:all 0.3s ease;
  font-size:0.9rem;
  color:#374151;
}
.filters input::placeholder{
  color:#9ca3af;
  font-weight:500;
}
.filters input:focus, .filters select:focus{
  border-color:#FF7701;
  box-shadow:0 0 0 3px rgba(255,119,1,0.1);
  background:#fff;
}
.filters input:hover, .filters select:hover{
  border-color:#FF7701;
}
.filters select{
  cursor:pointer;
  font-weight:500;
  appearance:none;
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23FF7701' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position:right 0.5rem center;
  background-repeat:no-repeat;
  background-size:1.5em 1.5em;
  padding-right:2.5rem;
}
.filters select option{
  padding:0.5rem;
  color:#374151;
  background:#fff;
}
.filters select option:hover{
  background:#FF7701;
  color:#fff;
}
.filters select option:checked{
  background:#FF7701;
  color:#fff;
}
.faculty-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem; margin-top:1rem }
.faculty-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  overflow:hidden; 
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
  border-color:var(--orange);
}
.avatar{ 
  width:90px; 
  height:90px; 
  object-fit:cover; 
  border-radius:.8rem;
  border:2px solid rgba(249,115,22,0.1);
}
.fc-name{ 
  font-size:1.1rem; 
  font-weight:800; 
  color:var(--ink); 
  margin:0 0 .2rem;
  line-height:1.3;
}
.fc-meta{ 
  color:var(--muted); 
  margin:0 0 .4rem; 
  font-size:0.9rem;
  font-weight:500;
}
.badge{ 
  background:rgba(249,115,22,.1); 
  color:var(--orange); 
  padding:.2rem .5rem; 
  border-radius:.5rem; 
  font-size:.8rem; 
  font-weight:700;
  display:inline-block;
  margin-right:0.3rem;
  margin-bottom:0.3rem;
}
.fc-tags{ 
  color:#374151; 
  font-size:.9rem;
  line-height:1.4;
}
.fc-links{ 
  display:flex; 
  gap:.5rem; 
  margin-top:.6rem;
}
.icon-link{ 
  width:38px; 
  height:38px; 
  display:grid; 
  place-items:center; 
  border:1px solid var(--border); 
  border-radius:.6rem; 
  color:var(--navy);
  transition:all 0.3s ease;
}
.icon-link:hover{ 
  background:var(--orange);
  color:white;
  border-color:var(--orange);
  transform:translateY(-2px);
}

/* ACTIVITIES */
.activities-hero{ margin:1.5rem 0 }
.activities-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin:2rem 0 }
@media (max-width:992px){ .activities-grid{ grid-template-columns:repeat(2,1fr); gap:1.2rem } }
@media (max-width:768px){ .activities-grid{ grid-template-columns:1fr; gap:1rem } }
.activity-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  padding:1.5rem; 
  background:#fff; 
  display:flex; 
  align-items:flex-start; 
  gap:1rem;
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
}
.activity-card:hover{ 
  transform:translateY(-4px); 
  box-shadow:0 8px 25px rgba(0,0,0,0.1);
  border-color:var(--orange);
}
.activity-icon{ 
  flex-shrink:0; 
  width:3rem; 
  height:3rem; 
  background:linear-gradient(135deg, var(--orange), #ff8c42); 
  border-radius:0.75rem; 
  display:flex; 
  align-items:center; 
  justify-content:center;
  color:#fff;
  font-size:1.25rem;
}
.activity-content{ flex:1 }
.activity-title{ 
  color:var(--ink); 
  font-size:1.1rem; 
  font-weight:600; 
  margin-bottom:0.5rem; 
}
.activity-desc{ 
  color:#000; 
  line-height:1.6; 
  margin:0; 
}
.activities-footer{ 
  text-align:center; 
  margin-top:2rem; 
  padding-top:1.5rem; 
  border-top:1px solid var(--border); 
}

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

/* DOWNLOADS */
.downloads{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:.8rem }
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
}
.download:hover{
  border-color:var(--orange);
  background:rgba(249,115,22,0.05);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.1);
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

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }
.note{ background:linear-gradient(180deg,#f8fafc,#eef4ff); border:1px dashed var(--border); border-radius:.9rem; padding:.9rem }
.last-updated{ color:var(--muted); font-size:.9rem; margin-top:.6rem }

/* UTIL */
.grid-2, .grid-3 .card{ background:#fff }
.mt-3{margin-top:1rem}

/* ACCORDION STYLES */
.accordion-container{ margin-top:1.5rem }
.accordion-item{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  margin-bottom:.8rem; 
  overflow:hidden;
  background:#fff;
  transition:all 0.3s ease;
}
.accordion-item:hover{ border-color:var(--orange) }
.accordion-header{ 
  width:100%; 
  padding:1.2rem 1.5rem; 
  background:#fff; 
  border:none; 
  display:flex; 
  align-items:center; 
  justify-content:space-between;
  cursor:pointer;
  transition:all 0.3s ease;
}
.accordion-header:hover{ background:rgba(249,115,22,0.05) }
.accordion-header.active{ 
  background:var(--orange); 
  color:#fff;
}
.accordion-header.active .accordion-title i{ color:#fff }
.accordion-header.active .accordion-count{ 
  background:rgba(255,255,255,0.2); 
  color:#fff;
}
.accordion-title{ 
  display:flex; 
  align-items:center; 
  gap:.8rem; 
  font-weight:700; 
  font-size:1.1rem;
}
.accordion-title i{ color:var(--orange); font-size:1.2rem }
.accordion-count{ 
  background:rgba(249,115,22,0.1); 
  color:var(--orange); 
  padding:.2rem .6rem; 
  border-radius:.5rem; 
  font-size:.8rem; 
  font-weight:600;
  margin-left:1rem;
}
.accordion-icon{ 
  color:var(--ink); 
  font-size:1rem; 
  transition:transform 0.3s ease;
}
.accordion-icon.rotated{ transform:rotate(180deg) }
.accordion-header.active .accordion-icon{ color:#fff }
.accordion-content{ 
  max-height:0; 
  overflow:hidden; 
  transition:max-height 0.3s ease;
  background:#f8f9fc;
}
.accordion-content.active{ 
  max-height:2000px; 
  padding:1.5rem;
}

/* OUTCOME GRID INSIDE ACCORDION */
.outcome-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem; margin-top:0 }
.outcome-grid.grid-2{ grid-template-columns:repeat(auto-fit,minmax(280px,1fr)) }
.outcome-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  padding:1.2rem; 
  background:#fff; 
  display:flex; 
  gap:1rem; 
  align-items:flex-start;
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
}
.outcome-card:hover{
  transform:translateY(-3px);
  box-shadow:0 8px 25px rgba(0,0,0,.12);
  border-color:var(--orange);
  background:rgba(249,115,22,0.02);
}
.outcome-number{ 
  background:var(--orange); 
  color:#fff; 
  border-radius:.6rem; 
  padding:.4rem .8rem; 
  font-weight:800; 
  font-size:.85rem; 
  white-space:nowrap;
  min-width:60px;
  text-align:center;
}
.outcome-content h4{ 
  font-size:1rem; 
  font-weight:700; 
  color:var(--ink); 
  margin:0 0 .5rem;
  line-height:1.3;
}
.outcome-content p{ 
  color:#000; 
  font-size:.9rem; 
  line-height:1.5; 
  margin:0;
}

/* COURSE OUTCOMES */
.course-outcomes{ display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem; margin-top:1rem }
.course-regulations{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  padding:1.2rem; 
  background:#fff;
  transition:all 0.3s ease;
}
.course-regulations:hover{
  border-color:var(--orange);
  background:rgba(249,115,22,0.02);
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.1);
}
.regulation-title{ 
  font-size:1.1rem; 
  font-weight:700; 
  color:var(--ink); 
  margin:0 0 .5rem;
  display:flex;
  align-items:center;
  gap:.5rem;
}
.regulation-title::before{
  content:"📋";
  font-size:1rem;
}
.regulation-desc{ 
  color:#000; 
  font-size:.9rem; 
  line-height:1.5; 
  margin:0;
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
  .outcome-grid{ grid-template-columns:1fr }
  .outcome-card{ flex-direction:column; gap:.8rem }
  .outcome-number{ align-self:flex-start }
  .accordion-header{ padding:1rem 1.2rem }
  .accordion-title{ font-size:1rem }
  .accordion-count{ font-size:.75rem; padding:.15rem .5rem }
}

/* Image modal styles now handled by ImagePreviewer component */
.image-modal-overlay{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.9);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
  padding:1rem;
}
.image-modal{
  width:90%;
  max-width:1200px;
  height:90%;
  background:#fff;
  border-radius:1rem;
  display:flex;
  flex-direction:column;
  overflow:hidden;
  box-shadow:0 20px 60px rgba(0,0,0,0.3);
  transition:all 0.3s ease;
}
.image-modal.fullscreen{
  width:100%;
  height:100%;
  max-width:none;
  border-radius:0;
  padding:0;
}
.modal-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem 1.5rem;
  background:var(--ink);
  color:#fff;
}
.modal-title{
  margin:0;
  font-size:1.2rem;
  font-weight:700;
}
.modal-actions{
  display:flex;
  align-items:center;
  gap:.5rem;
}
.modal-btn{
  width:40px;
  height:40px;
  border:none;
  background:rgba(255,255,255,0.1);
  color:#fff;
  border-radius:.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:all 0.3s ease;
  font-size:.9rem;
}
.modal-btn:hover{
  background:rgba(255,255,255,0.2);
  transform:scale(1.05);
}
.close-btn:hover{
  background:#ff4757;
}
.modal-content{
  flex:1;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  background:#f8f9fa;
  overflow:hidden;
}
.nav-btn{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  width:50px;
  height:50px;
  border:none;
  background:rgba(0,0,0,0.7);
  color:#fff;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  transition:all 0.3s ease;
  font-size:1.2rem;
  z-index:10;
}
.nav-btn:hover{
  background:rgba(0,0,0,0.9);
  transform:translateY(-50%) scale(1.1);
}
.nav-btn:disabled{
  opacity:0.3;
  cursor:not-allowed;
}
.prev-btn{ left:1rem }
.next-btn{ right:1rem }
.image-container{
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  overflow:hidden;
  position:relative;
}
.modal-image{
  max-width:100%;
  max-height:100%;
  object-fit:contain;
  transition:all 0.3s ease;
  user-select:none;
  border-radius:.5rem;
  box-shadow:0 4px 20px rgba(0,0,0,0.1);
}
.modal-image:hover{
  transform:scale(1.02);
}
.modal-footer{
  padding:1rem 1.5rem;
  background:#fff;
  border-top:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:1rem;
}
.image-counter{
  font-weight:600;
  color:var(--ink);
  font-size:.9rem;
}
.thumbnail-nav{
  display:flex;
  gap:.5rem;
  flex-wrap:wrap;
}
.thumbnail-btn{
  width:60px;
  height:60px;
  border:2px solid transparent;
  border-radius:.5rem;
  overflow:hidden;
  cursor:pointer;
  transition:all 0.3s ease;
  background:#fff;
}
.thumbnail-btn:hover{
  border-color:var(--orange);
  transform:scale(1.05);
}
.thumbnail-btn.active{
  border-color:var(--orange);
  box-shadow:0 0 0 2px rgba(249,115,22,0.2);
}
.thumbnail-btn img{
  width:100%;
  height:100%;
  object-fit:cover;
}

/* RESPONSIVE MODAL */
@media (max-width: 768px){
  .image-modal{
    width:95%;
    height:95%;
  }
  .modal-header{
    padding:.8rem 1rem;
  }
  .modal-title{
    font-size:1rem;
  }
  .modal-btn{
    width:35px;
    height:35px;
    font-size:.8rem;
  }
  .nav-btn{
    width:40px;
    height:40px;
    font-size:1rem;
  }
  .prev-btn{ left:.5rem }
  .next-btn{ right:.5rem }
  .modal-footer{
    padding:.8rem 1rem;
    flex-direction:column;
    align-items:center;
  }
  .thumbnail-btn{
    width:50px;
    height:50px;
  }
}

/* Fullscreen mode enhancements */
:fullscreen .image-modal-overlay,
:-webkit-full-screen .image-modal-overlay,
:-moz-full-screen .image-modal-overlay,
:-ms-fullscreen .image-modal-overlay {
  padding: 0;
}

:fullscreen .image-modal,
:-webkit-full-screen .image-modal,
:-moz-full-screen .image-modal,
:-ms-fullscreen .image-modal {
  width: 100%;
  height: 100%;
  max-width: none;
  border-radius: 0;
}

/* Keyboard navigation hints */
.modal-header::after {
  content: "Press F for fullscreen, ← → for navigation, ESC to close";
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  pointer-events: none;
}

@media (max-width: 768px) {
  .modal-header::after {
    display: none;
  }
}

/* Events Modal Specific Styles */
.image-modal .modal-title .fa-calendar-alt { 
  color: var(--orange); 
}

.image-info { 
  background: rgba(0, 0, 0, 0.8); 
  color: #fff; 
  padding: 1rem; 
  border-radius: 0.5rem; 
  margin-top: 1rem;
  text-align: center;
}

.image-title { 
  font-size: 1.1rem; 
  font-weight: 600; 
  margin-bottom: 0.5rem; 
  color: #fff;
}

.image-desc { 
  font-size: 0.9rem; 
  opacity: 0.9; 
  margin: 0; 
}
</style>
