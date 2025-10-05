<template>
  <div class="cseai-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="CSE AI&ML Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Computer Science & Engineering (AI & ML)</h1>
          <p class="tagline">Innovate • Code • Transform</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Established</span>
              <span class="qf-value">2020</span>
            </li>
            <li>
              <span class="qf-label">Intake (UG)</span>
              <span class="qf-value">60</span>
            </li>
            <li>
              <span class="qf-label">Programs</span>
              <span class="qf-value">B.Tech (CSE AI & ML)</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="CSE AI & ML Department - Students in Computer Lab"
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
            Studying for a Computer Science & Engineering (AI & ML) degree is exciting enough as it will open the doors to very cool jobs. It is truly amazing to catch the trend with SSIT. Because SSIT takes care to maximize the learning opportunities by keeping up-to-date and continuous with highly qualified and richly experienced faculty to meet the present requirement at global scenario.
          </p>
          <p class="lead">
            Department Offers an intake of 60 with total student strength is about 240.
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
              Establish Industry ready high academic standards in Computer Science Engineering education and research and accomplish this goal.
            </p>
            <h3 class="h5 mt-4 mb-2" style="color: var(--ink); font-weight: 800;">Mission</h3>
            <p>
              Establish high quality interactive programmes in partnership with other eminent institutes of national importance and train the students to become leaders and masters of technology with academic excellence.
            </p>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>B.Tech (CSE AI & ML)</strong> — 60 seats, EAMCET eligibility, modern AI/ML specializations.</li>
              <li><strong>Specializations</strong> — Deep Learning, Computer Vision, NLP, Data Science, MLOps.</li>
              <li><strong>Research Projects</strong> — Industry collaboration and cutting-edge AI research.</li>
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
                <div class="outcome-grid">
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
                      <p>Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 3</div>
                    <div class="outcome-content">
                      <h4>Design/Development of Solutions</h4>
                      <p>Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 4</div>
                    <div class="outcome-content">
                      <h4>Conduct Investigations of Complex Problems</h4>
                      <p>Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 5</div>
                    <div class="outcome-content">
                      <h4>Modern Tool Usage</h4>
                      <p>Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 6</div>
                    <div class="outcome-content">
                      <h4>The Engineer and Society</h4>
                      <p>Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 7</div>
                    <div class="outcome-content">
                      <h4>Environment and Sustainability</h4>
                      <p>Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</p>
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
                      <p>Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 11</div>
                    <div class="outcome-content">
                      <h4>Project Management and Finance</h4>
                      <p>Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</p>
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
                  <i class="fa-solid fa-robot"></i>
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
                      <h4>Foundations of Software Development</h4>
                      <p>The ability to grasp the software development lifecycle and methodologies of software systems. Possess competent skills and knowledge of software design process. Familiarity and practical proficiency with a broad area of programming concepts and provide new ideas and innovations towards research.</p>
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
                  <i class="fa-solid fa-graduation-cap"></i>
                  <span>Course Outcomes (COs)</span>
                  <span class="accordion-count">2 Regulations</span>
                </div>
                <i class="fa-solid fa-chevron-down accordion-icon" :class="{ rotated: activeAccordion === 'cos' }"></i>
              </button>
              <div class="accordion-content" :class="{ active: activeAccordion === 'cos' }">
                <div class="regulation-tabs">
                  <button 
                    class="regulation-tab"
                    :class="{ active: activeRegulation === 'r18' }"
                    @click="activeRegulation = 'r18'"
                  >
                    R18
                  </button>
                  <button 
                    class="regulation-tab"
                    :class="{ active: activeRegulation === 'r22' }"
                    @click="activeRegulation = 'r22'"
                  >
                    R22
                  </button>
                </div>
                <div class="regulation-content">
                  <div v-if="activeRegulation === 'r18'" class="regulation-details">
                    <h4>R18 Regulation Course Outcomes</h4>
                    <p>Course outcomes for R18 regulation are designed to align with the traditional computer science curriculum with foundational programming and system concepts.</p>
                  </div>
                  <div v-if="activeRegulation === 'r22'" class="regulation-details">
                    <h4>R22 Regulation Course Outcomes</h4>
                    <p>Course outcomes for R22 regulation incorporate modern AI/ML concepts, updated programming paradigms, and industry-relevant skills for contemporary software development.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
        <div class="card">
        <h2 class="section-title"><i class="fa-solid fa-laptop-code"></i> Laboratories & Infrastructure</h2>
          <div class="labs-intro">
            <p class="lead">
              We have Fully Equipped AI/ML Laboratories with several Computer Labs equipped with latest AI/ML software's and high-performance workstations. 
              It is connected to internet through a lease line to facilitate high speed internet access. All the computers 
              are connected through a structured network. GPU servers and cloud computing facilities are also available in the lab. 
              Our dedicated faculty and staff are proud of their impressive credentials, which are comparable to those 
              of the best career instructors in AI/ML domain.
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

      <!-- Curriculum -->
      <section
        v-show="activeTab === 'curriculum'"
        :id="`panel-curriculum`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="curriculum"
      >
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-file-lines"></i> Curriculum & Syllabus</h2>
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
            <a class="btn btn-soft" href="/ssitui/academic-regulations">Academic Regulations</a>
            <a class="btn btn-soft" href="/ssitui/academic-calendar">Academic Calendar</a>
          </div>
        </div>
      </section>

      <!-- BOS (Board of Studies) -->
      <section
        v-show="activeTab === 'bos'"
        :id="`panel-bos`"
        class="card-section"
        role="tabpanel"
        aria-labelledby="bos"
      >
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-graduation-cap"></i> Board of Studies (BOS)</h2>
          <div class="bos-intro">
            <p class="lead">
              The Board of Studies (BOS) for Computer Science and Engineering (AI & ML) is responsible for the academic planning, 
              curriculum development, and quality assurance of the CSE AI/ML program. The board ensures that the curriculum 
              remains current with industry trends and academic standards.
            </p>
          </div>
          
          <div class="grid-2">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-users"></i> BOS Members</h3>
              <ul class="bullets">
                <li><strong>Chairman:</strong> Dr. Anitha R (HOD, CSE AI/ML)</li>
                <li><strong>Industry Expert:</strong> Mr. Rajesh Kumar (AI Lead, Google)</li>
                <li><strong>Academic Expert:</strong> Dr. Priya Sharma (Professor, IIT Delhi)</li>
                <li><strong>Alumni Representative:</strong> Mr. Akhil Abothu (Senior AI Engineer, Capgemini)</li>
                <li><strong>Student Representative:</strong> Ms. Ananya Singh (Final Year CSE AI/ML)</li>
              </ul>
            </article>
            
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-tasks"></i> BOS Responsibilities</h3>
              <ul class="bullets">
                <li>AI/ML curriculum design and periodic review</li>
                <li>Course content development and updates</li>
                <li>Academic policy formulation</li>
                <li>Quality assurance and assessment</li>
                <li>Industry-academia collaboration</li>
                <li>Research and development initiatives</li>
              </ul>
            </article>
          </div>
          
          <div class="card mt-1">
            <h3 class="section-title-sm"><i class="fa-solid fa-calendar-alt"></i> Recent BOS Activities</h3>
            <div class="bos-activities">
              <div class="activity-item">
                <div class="activity-date">2024</div>
                <div class="activity-content">
                  <h4>AI/ML Curriculum Revision (R22)</h4>
                  <p>Updated curriculum to include Deep Learning, NLP, Computer Vision, and Data Science specializations</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-date">2023</div>
                <div class="activity-content">
                  <h4>Industry Partnership Program</h4>
                  <p>Established partnerships with leading AI/ML companies for curriculum enhancement</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-date">2023</div>
                <div class="activity-content">
                  <h4>Faculty Development Program</h4>
                  <p>Conducted workshops on emerging AI/ML technologies and teaching methodologies</p>
                </div>
              </div>
            </div>
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
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-rocket"></i> Student Development Activities</h2>
          <div class="activities-hero">
            <p class="lead">
              The AI/ML Club (Association of Computer Science and Engineering in Sai Spurthi) is started on 15.09.09 (Engineer's Day) 
              by the Student and Staff of the CSE AI/ML Department to strengthen research and advanced education in AI/ML and allied fields. 
              It is mainly targeted to adopt new fields of knowledge and communication through co-curricular activities.
            </p>
            <p class="lead">
              It does this by working to influence policy that impacts departmental activities, encouraging the development of human resources, 
              contributing to the cohesiveness of the professional students community and collecting and disseminating information about the 
              importance and the state of AI/ML research. Each plays an important role in achieving the AI/ML Club objectives.
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
        <div class="alumni-actions mt-2">
          <a class="btn btn-primary" href="mailto:alumni@ssit.edu.in">
            <i class="fa-solid fa-user-plus me-2"></i>Join Alumni Network
          </a>
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

    <!-- Labs Image Modal -->
    <ImagePreviewer
      v-model:show="showImageModal"
      :images="labImagesForModal"
      :initial-index="currentImageIndex"
      title="Laboratory Images"
      title-icon="fa-solid fa-laptop-code"
      title-icon-color="var(--orange)"
      :show-image-info="false"
    />

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

    <!-- PDF Viewer Modal -->
    <div v-if="showPdfModal" class="pdf-modal-overlay" @click="closePdfModal">
      <div class="pdf-modal" @click.stop>
        <div class="pdf-modal-header">
          <h3 class="pdf-modal-title">
            <i class="fa-solid fa-file-pdf"></i>
            {{ currentPdfTitle }}
          </h3>
          <div class="pdf-modal-actions">
            <button class="modal-btn" @click="togglePdfFullscreen" title="Toggle Fullscreen (F)">
              <i class="fa-solid fa-expand"></i>
            </button>
            <button class="modal-btn" @click="downloadPdf" title="Download PDF">
              <i class="fa-solid fa-download"></i>
            </button>
            <button class="modal-btn close-btn" @click="closePdfModal" title="Close (ESC)">
              <i class="fa-solid fa-times"></i>
            </button>
          </div>
        </div>
        <div class="pdf-modal-content">
          <div v-if="isPdfLoading" class="pdf-loading">
            <div class="loading-spinner"></div>
            <p class="loading-text">Loading PDF...</p>
          </div>
          <iframe 
            :src="currentPdfUrl" 
            class="pdf-iframe"
            :class="{ 'loading': isPdfLoading }"
            title="PDF Viewer"
            frameborder="0"
            @load="onPdfLoad"
            @error="onPdfError"
          ></iframe>
        </div>
        <div class="pdf-modal-footer">
          <span class="keyboard-hint">Press F for fullscreen, ESC to close</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import ImagePreviewer from '@/views/utils/ImagePreviewer.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Strengths from '@/views/about/Strengths.vue'

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
  { label: 'AI/ML Labs', value: '5', icon: 'fa-solid fa-laptop-code' },
  { label: 'GPU Servers', value: '2', icon: 'fa-solid fa-server' },
  { label: 'Annual Placements', value: '90%+', icon: 'fa-solid fa-briefcase' }
]

/* Tabs */
const tabs = [
  { id: 'overview',   label: 'Overview',   icon: 'fa-solid fa-circle-dot' },
  { id: 'faculty',    label: 'Faculty',    icon: 'fa-solid fa-users' },
  { id: 'labs',       label: 'Labs',       icon: 'fa-solid fa-laptop-code' },
  { id: 'curriculum', label: 'Curriculum', icon: 'fa-solid fa-file-lines' },
  { id: 'bos',        label: 'BOS',        icon: 'fa-solid fa-graduation-cap' },
  { id: 'activities', label: 'Activities', icon: 'fa-solid fa-rocket' },
  { id: 'research',   label: 'Research',   icon: 'fa-solid fa-microscope' },
  { id: 'placements', label: 'Placements', icon: 'fa-solid fa-briefcase' },
  { id: 'alumni',     label: 'Alumni',     icon: 'fa-solid fa-user-graduate' },
  { id: 'contact',    label: 'Contact',    icon: 'fa-solid fa-address-book' }
]
// Router setup
const route = useRoute()
const router = useRouter()

const activeTab = ref('overview')

/* Tab mapping for URL synchronization */
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

/* Enhanced setTab function with router navigation */
const setTab = (id) => {
  activeTab.value = id
  router.push(`/cse-ai/${id}`)
  
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

/* Accordion functionality */
const activeAccordion = ref('peos')
const activeRegulation = ref('r18')

const toggleAccordion = (accordionId) => {
  if (activeAccordion.value === accordionId) {
    activeAccordion.value = null
  } else {
    activeAccordion.value = accordionId
  }
}

/* Faculty */
const faculty = ref([
  {
    name: 'Dr. T VEERANNA', 
    designation: 'ASSOCIATE PROFESSOR',
    qualification: 'Ph.D',
    expertise: ['Machine Learning', 'Deep Learning'],
    email: 'hod.aiml@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_01.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 19
  },
  {
    name: 'NALLAPANENI SUDHA RANI', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Artificial Intelligence', 'Neural Networks'],
    email: 'sudharani@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_02.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 21
  },
  {
    name: 'BADDE SRINIVASARAO', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Data Mining', 'Pattern Recognition'],
    email: 'srinivasa@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 10
  },
  {
    name: 'VARIKUTI NARESH', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Computer Vision', 'Image Processing'],
    email: 'naresh@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_04.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 10
  },
  {
    name: 'SOYAM SUNEELKUMAR', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Natural Language Processing', 'Text Mining'],
    email: 'suneel@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_05.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 5
  },
  {
    name: 'VALAPULA LALITHA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Robotics', 'AI Applications'],
    email: 'lalitha@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_06.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 5
  },
  {
    name: 'K BABU', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Machine Learning', 'Statistical Learning'],
    email: 'babu@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 1
  },
  {
    name: 'K N DURGA RAO', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['AI Ethics', 'Responsible AI'],
    email: 'durgarao@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 1
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
    title: 'Computer Lab 1',
    desc: 'Programming fundamentals laboratory equipped with C, Java, and Data Structures development environment. Features modern workstations with comprehensive development tools and debugging software.',
    img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    images: [
      new URL('@/assets/departments/cse/labs/cselab1-1.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab1-2.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab1-3.jpg', import.meta.url).href
    ],
    tags: ['C Programming', 'Java', 'DSA']
  },
  {
    title: 'Computer Lab 2',
    desc: 'Advanced AI/ML laboratory featuring cutting-edge artificial intelligence and machine learning tools. Equipped with powerful GPUs, deep learning frameworks, and specialized software for neural network development.',
    img: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    images: [
      new URL('@/assets/departments/cse/labs/cselab2-1.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab2-2.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab2-3.jpg', import.meta.url).href
    ],
    tags: ['AI', 'ML', 'DL']
  },
  {
    title: 'Computer Lab 3',
    desc: 'Data Science and Visualization laboratory specializing in data analysis, visualization, and statistical computing. Features advanced analytics tools, interactive dashboards, and comprehensive data visualization software.',
    img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    images: [
      new URL('@/assets/departments/cse/labs/cselab3-1.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab3-2.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab3-3.jpg', import.meta.url).href
    ],
    tags: ['Pandas', 'Visualization']
  },
  {
    title: 'Common Internet Center',
    desc: 'Centralized internet facility providing high-speed connectivity for research and academic activities. Accessible to all students and faculty members with 24/7 availability.',
    img: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
    images: [
      new URL('@/assets/departments/cse/labs/cselab4-1.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab4-2.jpg', import.meta.url).href,
      new URL('@/assets/departments/cse/labs/cselab4-3.jpg', import.meta.url).href
    ],
    tags: ['High-Speed Internet', 'Research Access', 'Faculty Support']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { 
    label: 'B.Tech CSE (AI & ML) Syllabus (R22)', 
    note: 'Current Scheme', 
    href: '#',
    pdfUrl: 'https://drive.google.com/file/d/1vbz4wKP2Nadda3FtZC-DyV16yqXVAkn1/preview',
    type: 'pdf'
  },
  { 
    label: 'B.Tech CSE (AI & ML) Syllabus (R18)', 
    note: 'Previous Scheme', 
    href: '#',
    pdfUrl: 'https://drive.google.com/file/d/1zYoF3FIQ956g_-zrjSHIYxQR-NXAZXN2/preview',
    type: 'pdf'
  }
]

/* Activities */
const activities = [
  {
    title: 'AI/ML Project Expo',
    desc: 'Competitive team event that is all about Design, implement and presenting AI/ML Projects with real-world applications.',
    icon: 'fa-solid fa-laptop-code'
  },
  {
    title: 'Data Science Challenge',
    desc: 'Competitive event that focuses on data analysis, visualization, and machine learning model development.',
    icon: 'fa-solid fa-chart-line'
  },
  {
    title: 'Algorithm Debugging',
    desc: 'Algorithm Debugging is a Competitive Event to test Python programming skills and algorithm optimization.',
    icon: 'fa-solid fa-bug'
  },
  {
    title: 'Research Paper Presentation',
    desc: 'Students give demonstrations on Various Latest Trends in AI/ML Industry and research findings.',
    icon: 'fa-solid fa-file-text'
  },
  {
    title: 'AI Poster Presentation',
    desc: 'A way to share your knowledge of AI/ML topics in a short format. It usually includes visual representation and brief explanation.',
    icon: 'fa-solid fa-chart-bar'
  },
  {
    title: 'Tech Quiz',
    desc: 'A quiz is a game which can also be called a mind sport wherein the players attempt to answer AI/ML related questions correctly.',
    icon: 'fa-solid fa-question-circle'
  }
]

/* Event Images */
const eventImages = [
  {
    src: new URL('@/assets/departments/cse/activities/cse_acsess_1.jpg', import.meta.url).href,
    title: 'Access Events',
    desc: 'Access Events'
  },
  {
    src: new URL('@/assets/departments/cse/activities/cse_acsess_2.jpg', import.meta.url).href,
    title: 'Access Events',
    desc: 'Access Events'
  },
  {
    src: new URL('@/assets/departments/cse/activities/cse_acsess_3.jpg', import.meta.url).href,
    title: 'Access Events',
    desc: 'Access Events'
  },
  {
    src: new URL('@/assets/departments/cse/activities/cse_acsess_4.jpg', import.meta.url).href,
    title: 'Access Events',
    desc: 'Access Events'
  }
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
const alumni = ref([
  {
    name: 'Akhil Abothu',
    company: 'Capgemini',
    role: 'Senior Platform Engineer Consultant',
    yop: '2017',
    linkedin: '#',
    github: '#',
    photo: 'https://media.licdn.com/dms/image/v2/D5635AQGrYzncDgGS1Q/profile-framedphoto-shrink_200_200/B56ZjN3G.xG4AY-/0/1755800432850?e=1759215600&v=beta&t=ZE0KCp_j4yVGPenARi5O90U0comTo2uR1tbyslg9jbc'
  },
  {
    name: 'Ashok Mamilla',
    company: 'NIT Data',
    role: 'Senior Platform Engineer Consultant',
    yop: '2017',
    linkedin: '#',
    github: '#',
    photo: 'https://media.licdn.com/dms/image/v2/D4E03AQGHbD3lO6v7Uw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693902610456?e=1761782400&v=beta&t=uL-QElO9gSubyoOJqUcTCMX0tGhSCWb7aIAclCnE0bg'
  },
  {
    name: 'Suggala Tejaswi',
    company: 'SR Intelligent Technologies',
    role: 'Technical Specialist',
    yop: '2017',
    linkedin: '#',
    github: '#',
    photo: '' 
  }
])

// Alumni Year Filter
const selectedYear = ref('ALL')
const currentYear = new Date().getFullYear()

// Generate years from 2017 to current year
const availableYears = computed(() => {
  const years = ['ALL']
  for (let year = currentYear; year >= 2017; year--) {
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
  name: 'Dr. Anitha R',
  designation: 'Professor & Head, CSE (AI & ML)',
  location: 'AI&ML Block, Room 102',
  phone: '+91-87612-88279',
  email: 'hod.aiml@ssit.edu.in'
}

const lastUpdated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

// Image Modal state
const showImageModal = ref(false)
const currentImageIndex = ref(0)
const currentLabImages = ref([])
const isFullscreen = ref(false)

// Events Image Modal state
const showEventsModal = ref(false)
const currentEventImageIndex = ref(0)
const isEventsFullscreen = ref(false)

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

// Events Image Modal functions
const openEventsModal = () => {
  currentEventImageIndex.value = 0
  showEventsModal.value = true
}

// PDF Modal functions
const openPdfModal = (pdfUrl, title) => {
  currentPdfUrl.value = pdfUrl
  currentPdfTitle.value = title
  showPdfModal.value = true
  isPdfLoading.value = true
}

const closePdfModal = () => {
  showPdfModal.value = false
  currentPdfUrl.value = ''
  currentPdfTitle.value = ''
  isPdfLoading.value = false
}

const downloadPdf = () => {
  if (currentPdfUrl.value) {
    let downloadUrl = currentPdfUrl.value
    
    // Convert Google Drive preview URL to direct download URL
    if (downloadUrl.includes('drive.google.com/file/d/') && downloadUrl.includes('/preview')) {
      const fileId = downloadUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)?.[1]
      if (fileId) {
        downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`
      }
    }
    
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = currentPdfTitle.value + '.pdf'
    link.target = '_blank' // Open in new tab for external URLs
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const togglePdfFullscreen = () => {
  const pdfModal = document.querySelector('.pdf-modal')
  if (!pdfModal) return

  if (!document.fullscreenElement) {
    // Enter fullscreen
    pdfModal.requestFullscreen().catch(err => {
      console.error('Error attempting to enable fullscreen:', err)
    })
  } else {
    // Exit fullscreen
    document.exitFullscreen().catch(err => {
      console.error('Error attempting to exit fullscreen:', err)
    })
  }
}

const onPdfLoad = () => {
  isPdfLoading.value = false
}

const onPdfError = () => {
  isPdfLoading.value = false
  console.error('Failed to load PDF')
}

const handleSyllabusClick = (syllabusItem) => {
  if (syllabusItem.type === 'pdf' && syllabusItem.pdfUrl) {
    openPdfModal(syllabusItem.pdfUrl, syllabusItem.label)
  } else if (syllabusItem.type === 'coming-soon') {
    // Show a message or do nothing for coming soon items
    console.log('Coming soon:', syllabusItem.label)
  }
}

// Keyboard shortcuts for PDF modal
const handlePdfKeydown = (event) => {
  if (!showPdfModal.value) return
  
  switch(event.key) {
    case 'Escape':
      // Exit fullscreen first if in fullscreen, then close modal
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        closePdfModal()
      }
      break
    case 'f':
    case 'F':
      togglePdfFullscreen()
      break
  }
}

// Add keyboard event listener when PDF modal opens
watch(showPdfModal, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handlePdfKeydown)
  } else {
    document.removeEventListener('keydown', handlePdfKeydown)
  }
})
</script>

<style scoped>
/* THEME TOKENS */
:root{
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* GENERIC */
.container{ width:min(1180px,92%); margin-inline:auto; }
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem}
.h5{font-size:1.1rem} .h6{font-size:1rem}
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
  overflow:auto;
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
  cursor:pointer;
  flex-shrink:0;
  box-shadow:0 2px 4px rgba(0,0,0,0.05);
  font-size:0.95rem;
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
.content{ padding:1.8rem 0 2.6rem; background:var(--bg) }
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

/* ACCORDION STYLING */
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

/* REGULATION TABS */
.regulation-tabs{ 
  display:flex; 
  gap:.5rem; 
  margin-bottom:1.5rem; 
  border-bottom:1px solid var(--border);
}
.regulation-tab{ 
  background:none; 
  border:none; 
  padding:.6rem 1.2rem; 
  border-bottom:2px solid transparent;
  color:var(--muted);
  font-weight:600;
  cursor:pointer;
  transition:all 0.3s ease;
}
.regulation-tab:hover{ color:var(--ink); background:rgba(249,115,22,0.05) }
.regulation-tab.active{ 
  color:var(--orange); 
  border-bottom-color:var(--orange);
  background:rgba(249,115,22,0.05);
}
.regulation-content{ margin-top:1rem }
.regulation-details h4{ 
  font-size:1.1rem; 
  font-weight:700; 
  color:var(--ink); 
  margin-bottom:.8rem;
}
.regulation-details p{ 
  color:#000; 
  line-height:1.6; 
  margin:0;
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
.download i{ color:var(--orange); font-size:1.25rem; margin-top:.15rem }
.dl-label{ font-weight:800; color:var(--ink) }
.dl-sub{ font-size:.85rem; color:var(--muted) }

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

/* PDF Modal Styles */
.pdf-modal-overlay{
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
.pdf-modal{
  width:95%;
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
.pdf-modal-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:1rem 1.5rem;
  background:var(--ink);
  color:#fff;
  border-bottom:1px solid var(--border);
}
.pdf-modal-title{
  margin:0;
  font-size:1.2rem;
  font-weight:700;
  display:flex;
  align-items:center;
  gap:0.5rem;
}
.pdf-modal-title i{
  color:#ff4757;
}
.pdf-modal-actions{
  display:flex;
  align-items:center;
  gap:0.5rem;
}
.pdf-modal-content{
  flex:1;
  display:flex;
  flex-direction:column;
  overflow:hidden;
}
.pdf-iframe{
  width:100%;
  height:100%;
  border:none;
  background:#f8f9fa;
  transition: opacity 0.3s ease;
}
.pdf-iframe.loading{
  opacity: 0;
}
.pdf-loading{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 10;
}
.loading-spinner{
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--orange);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.loading-text{
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.pdf-modal-footer{
  padding:0.5rem 1rem;
  background:#f8f9fa;
  border-top:1px solid var(--border);
  text-align:center;
}
.keyboard-hint{
  font-size:0.75rem;
  color:var(--muted);
  font-style:italic;
}

/* Modal button styles */
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

/* Responsive PDF Modal */
@media (max-width: 768px){
  .pdf-modal{
    width:98%;
    height:95%;
  }
  .pdf-modal-header{
    padding:.8rem 1rem;
  }
  .pdf-modal-title{
    font-size:1rem;
  }
  .pdf-modal-footer{
    padding:.4rem .8rem;
  }
  .keyboard-hint{
    font-size:0.7rem;
  }
}

/* BOS */
.bos-intro{ margin:1.5rem 0 }
.bos-activities{ margin-top:1rem }
.activity-item{ 
  display:flex; 
  gap:1rem; 
  align-items:flex-start; 
  padding:1rem 0; 
  border-bottom:1px solid var(--border);
  transition:all 0.3s ease;
}
.activity-item:last-child{ border-bottom:none }
.activity-item:hover{ 
  background:rgba(249,115,22,0.02); 
  border-radius:.5rem; 
  padding:1rem; 
  margin:0 -1rem;
}
.activity-date{ 
  background:var(--orange); 
  color:#fff; 
  border-radius:.5rem; 
  padding:.4rem .8rem; 
  font-weight:700; 
  font-size:.85rem; 
  min-width:60px; 
  text-align:center;
  flex-shrink:0;
}
.activity-content h4{ 
  font-size:1rem; 
  font-weight:700; 
  color:var(--ink); 
  margin:0 0 .3rem;
  line-height:1.3;
}
.activity-content p{ 
  color:#000; 
  font-size:.9rem; 
  line-height:1.5; 
  margin:0;
}

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
  padding:0.5rem 0.75rem;
  border:1px solid var(--border);
  border-radius:0.5rem;
  background:#fff;
  color:var(--ink);
  font-size:0.9rem;
  font-weight:600;
  cursor:pointer;
  transition:all 0.3s ease;
  min-width:120px;
}
.year-select:hover{
  border-color:var(--orange);
  box-shadow:0 2px 4px rgba(249,115,22,0.1);
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
  display:inline-flex;
  align-items:center;
  justify-content:center;
  width:32px;
  height:32px;
  border-radius:50%;
  background:rgba(249,115,22,0.1);
  color:var(--orange);
  text-decoration:none;
  transition:all 0.3s ease;
  font-size:1rem;
}
.social-link:hover{
  background:var(--orange);
  color:#fff;
  transform:translateY(-2px);
  box-shadow:0 4px 8px rgba(249,115,22,0.3);
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

/* ALUMNI ACTIONS */
.alumni-actions{
  text-align:center;
  padding-top:1rem;
  border-top:1px solid var(--border);
}
</style>
