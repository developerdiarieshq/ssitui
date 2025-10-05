<template>
  <div class="aids-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="CSE AI & DS Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Computer Science & Engineering (AI & DS)</h1>
          <p class="tagline">Designing Intelligent Solutions, Empowering Future Innovators</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Introduced</span>
              <span class="qf-value">{{ facts.established }}</span>
            </li>
            <li>
              <span class="qf-label">Intake (UG)</span>
              <span class="qf-value">{{ facts.intakeUG }}</span>
            </li>
            <li>
              <span class="qf-label">AI/DS Labs</span>
              <span class="qf-value">{{ facts.labs }}</span>
            </li>
            <li>
              <span class="qf-label">Top Recruiters</span>
              <span class="qf-value">Leading Tech Companies</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop"
            alt="AI & Data Science themed visual"
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
            Pursuing a degree in Artificial Intelligence and Data Science at SSIT unfolds a captivating exploration into the frontiers of technology. As the digital era propels us into an era defined by intelligent systems and data-driven insights, SSIT stands as a beacon of innovation and learning.
          </p>
          <p class="lead">
            The program is meticulously crafted, offering students a comprehensive understanding of AI and DS concepts. Beyond theoretical foundations, the curriculum emphasizes practical applications, ensuring graduates are adept at navigating real-world challenges. SSIT's faculty, composed of industry experts and seasoned professionals, enriches the learning experience with valuable insights and guidance.
          </p>
          <p class="lead">
            In a world hungry for AI and DS expertise, SSIT's graduates emerge as leaders, ready to propel innovation and transformation. The program at SSIT isn't just an educational pursuit; it's a transformative journey, preparing individuals to shape the future of intelligent systems and data-driven decision-making.
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
              To be a premier center for Artificial Intelligence and Data Science, creating intelligent, ethical,
              and scalable solutions that advance society.
            </p>
            <h3 class="h5 mt-4 mb-2" style="color: var(--ink); font-weight: 800;">Mission</h3>
            <ul class="bullets">
              <li>Deliver advanced AI & DS education aligned with global industry trends.</li>
              <li>Foster research, innovation, and entrepreneurship with societal impact.</li>
              <li>Build industry-ready graduates with strong fundamentals and hands-on skills.</li>
              <li>Promote lifelong learning, ethics, and responsible AI practices.</li>
            </ul>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>B.Tech in CSE (AI & DS)</strong> — {{ facts.intakeUG }} seats; EAMCET eligibility; capstone projects.</li>
              <li><strong>Total Student Strength</strong> — Approximately 240 students across all years.</li>
              <li><strong>Minors / Certifications</strong> — Deep Learning, NLP, Computer Vision, Data Analytics.</li>
              <li><strong>Industry Modules</strong> — Offered with partners (AWS Academy, Microsoft, CISCO).</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">Download Syllabus</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Highlights</a>
            </div>
          </article>
        </div>

        <!-- Strengths Component -->
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
                      <h4>AI/DS Excellence</h4>
                      <p>To excel in AI/DS careers and pursue higher studies at premier institutions with strong foundation in machine learning, data science, and artificial intelligence.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 2</div>
                    <div class="outcome-content">
                      <h4>Leadership & Innovation</h4>
                      <p>To lead multi-disciplinary teams to deliver intelligent solutions and drive innovation in AI/DS applications across various domains.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 3</div>
                    <div class="outcome-content">
                      <h4>Ethics & Impact</h4>
                      <p>To commit to ethical, sustainable, and impactful technology development while contributing to society through responsible AI practices.</p>
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
                      <p>Apply the knowledge of mathematics, science, engineering fundamentals, and AI/DS specialization to the solution of complex engineering problems.</p>
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
                      <p>Create, select, and apply appropriate techniques, resources, and modern AI/DS tools including TensorFlow, PyTorch, and cloud platforms to complex activities.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 6</div>
                    <div class="outcome-content">
                      <h4>The Engineer and Society</h4>
                      <p>Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues relevant to professional AI/DS practice.</p>
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
                      <h4>AI/ML Model Development</h4>
                      <p>Design, train, and deploy intelligent models for real-world problems using modern machine learning frameworks and cloud platforms.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 2</div>
                    <div class="outcome-content">
                      <h4>Data Analysis & Interpretation</h4>
                      <p>Analyze and interpret complex datasets to drive business decisions and provide actionable insights using statistical and machine learning techniques.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 3</div>
                    <div class="outcome-content">
                      <h4>AI Solution Architecture</h4>
                      <p>Design scalable AI solutions and data pipelines while ensuring ethical AI practices and maintaining data privacy and security standards.</p>
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
                      <p>Course outcomes aligned with latest AI/DS curriculum including modern frameworks, cloud computing, and industry-relevant projects.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">R18</div>
                    <div class="outcome-content">
                      <h4>Previous Regulation (R18)</h4>
                      <p>Legacy course outcomes for students enrolled under the previous curriculum with foundational AI/DS concepts and traditional approaches.</p>
                    </div>
                  </div>
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
        <div class="card">
        <h2 class="section-title"><i class="fa-solid fa-laptop-code"></i> Laboratories & Infrastructure</h2>
          <div class="labs-intro">
            <p class="lead">
              We have Fully Equipped AI/DS Laboratories with several Computer Labs equipped with latest AI/DS software's and high-performance workstations. 
              It is connected to internet through a lease line to facilitate high speed internet access. All the computers 
              are connected through a structured network. GPU servers and cloud computing facilities are also available in the lab. 
              Our dedicated faculty and staff are proud of their impressive credentials, which are comparable to those 
              of the best career instructors in AI/DS domain.
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
            <a class="btn btn-soft" href="/academics/regulations">Academic Regulations</a>
            <a class="btn btn-soft" href="/academics/calendar">Academic Calendar</a>
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
              The Board of Studies (BOS) for Computer Science and Engineering (AI & DS) is responsible for the academic planning, 
              curriculum development, and quality assurance of the CSE AI/DS program. The board ensures that the curriculum 
              remains current with industry trends and academic standards.
            </p>
          </div>
          
          <div class="grid-2">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-users"></i> BOS Members</h3>
              <ul class="bullets">
                <li><strong>Chairman:</strong> Dr. Anitha R (HOD, CSE AI/DS)</li>
                <li><strong>Industry Expert:</strong> Mr. Rajesh Kumar (AI Lead, Google)</li>
                <li><strong>Academic Expert:</strong> Dr. Priya Sharma (Professor, IIT Delhi)</li>
                <li><strong>Alumni Representative:</strong> Mr. Akhil Abothu (Senior AI Engineer, Capgemini)</li>
                <li><strong>Student Representative:</strong> Ms. Ananya Singh (Final Year CSE AI/DS)</li>
              </ul>
            </article>
            
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-tasks"></i> BOS Responsibilities</h3>
              <ul class="bullets">
                <li>AI/DS curriculum design and periodic review</li>
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
                  <h4>AI/DS Curriculum Revision (R22)</h4>
                  <p>Updated curriculum to include Deep Learning, NLP, Computer Vision, and Data Science specializations</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-date">2023</div>
                <div class="activity-content">
                  <h4>Industry Partnership Program</h4>
                  <p>Established partnerships with leading AI/DS companies for curriculum enhancement</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-date">2023</div>
                <div class="activity-content">
                  <h4>Faculty Development Program</h4>
                  <p>Conducted workshops on emerging AI/DS technologies and teaching methodologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ACTIVITIES -->
      <section :id="tabsMap.activities" class="card-section" v-show="activeTab==='activities'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-rocket"></i> Student Development Activities</h2>
          <div class="activities-hero">
            <p class="lead">
              The AI/DS Club (Association of Computer Science and Engineering in Sai Spurthi) is started on 15.09.09 (Engineer's Day) 
              by the Student and Staff of the CSE AI/DS Department to strengthen research and advanced education in AI/DS and allied fields. 
              It is mainly targeted to adopt new fields of knowledge and communication through co-curricular activities.
            </p>
            <p class="lead">
              It does this by working to influence policy that impacts departmental activities, encouraging the development of human resources, 
              contributing to the cohesiveness of the professional students community and collecting and disseminating information about the 
              importance and the state of AI/DS research. Each plays an important role in achieving the AI/DS Club objectives.
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
      <section :id="tabsMap.alumni" class="card-section" v-show="activeTab==='alumni'">
        <h2 class="section-title"><i class="fa-solid fa-user-graduate"></i> Alumni Network</h2>
        <div class="under-construction">
          <div class="construction-content">
            <i class="fa-solid fa-hammer"></i>
            <h3>Under Construction</h3>
            <p>Our alumni network section is currently being updated with the latest information about our CSE AI & DS graduates and their achievements.</p>
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
              <a class="btn btn-soft mt-1" href="#" aria-label="AI & DS LinkedIn">AI & DS LinkedIn</a>
            </aside>
          </div>
        </div>
        <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />

    <!-- Image Preview Modal -->
    <ImagePreviewer 
      v-if="showImageModal"
      :images="currentLabImages"
      :currentIndex="currentImageIndex"
      @close="showImageModal = false"
      @update:currentIndex="currentImageIndex = $event"
    />

    <!-- Events Images Modal -->
    <ImagePreviewer 
      v-if="showEventsModal"
      :images="eventImages"
      :currentIndex="currentEventImageIndex"
      @close="showEventsModal = false"
      @update:currentIndex="currentEventImageIndex = $event"
    />

    <!-- PDF Modal -->
    <div v-if="showPdfModal" class="pdf-modal" @click="closePdfModal">
      <div class="pdf-modal-content" @click.stop>
        <div class="pdf-modal-header">
          <h3 class="pdf-modal-title">{{ currentPdfTitle }}</h3>
          <div class="pdf-modal-actions">
            <button class="pdf-modal-btn" @click="downloadPdf" title="Download PDF">
              <i class="fa-solid fa-download"></i>
            </button>
            <button class="pdf-modal-btn" @click="togglePdfFullscreen" title="Toggle Fullscreen">
              <i class="fa-solid fa-expand"></i>
            </button>
            <button class="pdf-modal-btn" @click="closePdfModal" title="Close">
              <i class="fa-solid fa-times"></i>
            </button>
          </div>
        </div>
        <div class="pdf-modal-body">
          <div v-if="isPdfLoading" class="pdf-loading">
            <i class="fa-solid fa-spinner fa-spin"></i>
            <p>Loading PDF...</p>
          </div>
          <iframe 
            v-if="currentPdfUrl"
            :src="currentPdfUrl"
            @load="onPdfLoad"
            @error="onPdfError"
            class="pdf-iframe"
            title="PDF Document"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ImagePreviewer from '@/views/utils/ImagePreviewer.vue'
import Strengths from '@/views/about/Strengths.vue'

/* Facts / Quick Stats */
const facts = { established: '2020', intakeUG: '60', labs: '6+' }

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '20+', icon: 'fa-solid fa-user-tie' },
  { label: 'AI/DS Labs', value: '6', icon: 'fa-solid fa-flask' },
  { label: 'Projects / Yr', value: '15+', icon: 'fa-solid fa-diagram-project' },
  { label: 'Placement', value: '85%+', icon: 'fa-solid fa-briefcase' }
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

// Tab mapping for URL synchronization
const tabsMap = {
  overview: 'overview',
  faculty: 'faculty', 
  labs: 'labs',
  curriculum: 'curriculum',
  bos: 'bos',
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
  router.push(`/cse-ai-ds/${id}`)
  
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
  {
    name: 'ADABALA SRINIVAS RAO', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['Data Science', 'Big Data Analytics'],
    email: 'hod.aids@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_01.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 19
  },
  {
    name: 'R. ADI NARAYANA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['Machine Learning', 'Statistical Analysis'],
    email: 'adinarayana@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_02.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 19
  },
  {
    name: 'A ANJANEYULU', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Python Programming', 'Data Visualization'],
    email: 'anjaneyulu@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_04.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 10
  },
  {
    name: 'M SRINIVASA RAO', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Database Systems', 'SQL'],
    email: 'srinivasa@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_05.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 4
  },
  {
    name: 'A PRAGNYA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Data Mining', 'Predictive Analytics'],
    email: 'pragnya@ssit.edu.in',
    photo: new URL('@/assets/departments/cse_ai_ds/faculty/cse_ml_06.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 4
  },
  {
    name: 'B DHARANI NADH', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Deep Learning', 'Neural Networks'],
    email: 'dharani@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 6
  },
  {
    name: 'CH MOHAN TEJA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Computer Vision', 'Image Processing'],
    email: 'mohanteja@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 3
  },
  {
    name: 'V PRADEEP', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Natural Language Processing', 'Text Analytics'],
    email: 'pradeep@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 5
  },
  {
    name: 'G RAJESWARI', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['AI Applications', 'Business Intelligence'],
    email: 'rajeswari@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 3
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
    label: 'B.Tech CSE (AI & DS) Syllabus (R22)', 
    note: 'Current Scheme', 
    href: '#',
    pdfUrl: 'https://drive.google.com/file/d/1vbz4wKP2Nadda3FtZC-DyV16yqXVAkn1/preview',
    type: 'pdf'
  },
  { 
    label: 'B.Tech CSE (AI & DS) Syllabus (R18)', 
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

// Modal state
const showImageModal = ref(false)
const currentImageIndex = ref(0)
const currentLabImages = ref([])
const showEventsModal = ref(false)
const currentEventImageIndex = ref(0)
const showPdfModal = ref(false)
const currentPdfUrl = ref('')
const currentPdfTitle = ref('')
const isPdfLoading = ref(false)

// Modal functions
const openImageModal = (images) => {
  currentLabImages.value = images
  currentImageIndex.value = 0
  showImageModal.value = true
}

const openEventsModal = () => {
  currentEventImageIndex.value = 0
  showEventsModal.value = true
}

const openPdfModal = (pdfUrl, title) => {
  currentPdfUrl.value = pdfUrl
  currentPdfTitle.value = title
  isPdfLoading.value = true
  showPdfModal.value = true
}

const closePdfModal = () => {
  showPdfModal.value = false
  currentPdfUrl.value = ''
  currentPdfTitle.value = ''
}

const downloadPdf = () => {
  if (currentPdfUrl.value) {
    const link = document.createElement('a')
    link.href = currentPdfUrl.value
    link.download = `${currentPdfTitle.value}.pdf`
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const togglePdfFullscreen = () => {
  const iframe = document.querySelector('.pdf-modal iframe')
  if (iframe) {
    if (!document.fullscreenElement) {
      iframe.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`)
      })
    } else {
      document.exitFullscreen()
    }
  }
}

const onPdfLoad = () => {
  isPdfLoading.value = false
}

const onPdfError = () => {
  isPdfLoading.value = false
  console.error('Failed to load PDF')
}

const handleSyllabusClick = (item) => {
  if (item.type === 'pdf' && item.pdfUrl) {
    openPdfModal(item.pdfUrl, item.label)
  } else if (item.href && item.href !== '#') {
    window.open(item.href, '_blank')
  }
}

const handlePdfKeydown = (event) => {
  if (event.key === 'Escape') {
    closePdfModal()
  }
}

// Event images data
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

// Computed properties
const labImagesForModal = computed(() => {
  return labs.flatMap(lab => lab.images || [])
})

// Watch for PDF modal changes to handle keyboard events
watch(showPdfModal, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handlePdfKeydown)
  } else {
    document.removeEventListener('keydown', handlePdfKeydown)
  }
})

// Accordion state
const activeAccordion = ref('')
const toggleAccordion = (section) => {
  activeAccordion.value = activeAccordion.value === section ? '' : section
}
</script>

<style scoped>
/* THEME TOKENS */
:root{
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* GENERIC */
.container{ width:min(1180px,92%); margin-inline:auto; }
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem} .mt-2{margin-top:1.25rem}
.mb-2{margin-bottom:.75rem} .h5{font-size:1.1rem} .h6{font-size:1rem}
.text-muted{color:var(--muted)} .muted{color:var(--muted)}
.lead{font-size:1.05rem; color:#000}

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
.subnav{ position:sticky; top:0; z-index:20; background:#fff; border-bottom:1px solid var(--border); box-shadow:0 2px 8px rgba(0,0,0,0.06); }
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 1rem; overflow-x:auto; overflow-y:hidden; justify-content:flex-start; flex-wrap:nowrap; }
.chip{ border:1px solid var(--border); background:#fff; color:#111; border-radius:999px; padding:.6rem 1rem; font-weight:600; display:flex; align-items:center; gap:.6rem; white-space:nowrap; font-size:.9rem; box-shadow:0 2px 4px rgba(0,0,0,0.04); transition:all 0.2s ease; }
.chip i{ color:var(--ink); }
.chip.active{ border-color:var(--orange); background:var(--orange); color:#fff; box-shadow:0 4px 12px rgba(249,115,22,0.3); transform:translateY(-2px); font-weight:700; }
.chip:not(.active):hover{ border-color:var(--ink); background:rgba(17,24,39,.04); box-shadow:0 2px 8px rgba(0,0,0,0.08); }
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
.bullets li{ margin:.4rem 0; color:#000 }
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
.fc-tags{ color:#000; font-size:.92rem }
.fc-links{ display:flex; gap:.5rem; margin-top:.4rem }
.icon-link{ width:36px; height:36px; display:grid; place-items:center; border:1px solid var(--border); border-radius:.6rem; color:var(--ink) }
.icon-link:hover{ background:rgba(17,24,39,.06) }

/* LABS */
.labs-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.lab-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; background:#fff; display:flex; flex-direction:column }
.lab-card img{ width:100%; height:160px; object-fit:cover }
.lab-body{ padding:1rem }
.lab-title{ margin:0 0 .25rem; font-weight:800; color:var(--ink) }
.lab-text{ color:#000; font-size:.95rem }
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
.btn{ border-radius:.7rem; padding:.55rem .9rem; font-weight:700; border:1px solid transparent; display:inline-flex; gap:.5rem; align-items:center }
.btn-primary{ background:var(--orange); color:#fff }
.btn-soft{ background:#fff; color:var(--ink); border-color:var(--ink) }
.btn:hover{ filter:brightness(1.02) }
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
}
.outcome-content p{ 
  font-size:.9rem; 
  color:#000; 
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
  .outcome-grid.grid-2{ grid-template-columns:1fr }
}

/* Labs Section Styles */
.labs-intro {
  margin-bottom: 2rem;
}

.lab-actions {
  margin-top: 1rem;
}

.view-images-btn {
  width: 100%;
  justify-content: center;
}

/* Activities Section Styles */
.activities-hero {
  margin-bottom: 2rem;
}

.activities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.activity-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.activity-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--orange);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--ink);
}

.activity-desc {
  color: var(--muted);
  line-height: 1.5;
  margin: 0;
}

.activities-footer {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

/* BOS Section Styles */
.bos-intro {
  margin-bottom: 2rem;
}

.bos-activities {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.activity-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.activity-date {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: var(--orange);
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
}

.activity-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--ink);
}

.activity-content p {
  color: var(--muted);
  margin: 0;
  line-height: 1.5;
}

/* PDF Modal Styles */
.pdf-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.pdf-modal-content {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.pdf-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  background: #f8f9fa;
}

.pdf-modal-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: var(--ink);
}

.pdf-modal-actions {
  display: flex;
  gap: 0.5rem;
}

.pdf-modal-btn {
  width: 36px;
  height: 36px;
  border: none;
  background: var(--orange);
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.pdf-modal-btn:hover {
  background: #ea580c;
}

.pdf-modal-body {
  flex: 1;
  position: relative;
  min-height: 500px;
}

.pdf-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: var(--muted);
}

.pdf-loading i {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
  min-height: 500px;
}

/* Coming Soon Styles */
.download.coming-soon {
  opacity: 0.6;
  cursor: not-allowed;
}

.dl-status {
  font-size: 0.8rem;
  color: var(--orange);
  font-weight: 500;
  margin-top: 0.25rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .activities-grid {
    grid-template-columns: 1fr;
  }
  
  .activity-card {
    flex-direction: column;
    text-align: center;
  }
  
  .activity-icon {
    align-self: center;
  }
  
  .bos-activities {
    gap: 1rem;
  }
  
  .activity-item {
    flex-direction: column;
    text-align: center;
  }
  
  .activity-date {
    align-self: center;
  }
  
  .pdf-modal {
    padding: 1rem;
  }
  
  .pdf-modal-content {
    width: 95%;
  }
}
</style>
