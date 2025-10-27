<template>
  <div class="ece-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="ECE Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Department of Electronics & Communication Engineering (ECE)</h1>
          <p class="tagline">Connecting the World Through Innovation and Technology</p>
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
              <span class="qf-label">ECE Labs</span>
              <span class="qf-value">{{ facts.labs }}</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="ECE Department - Electronics & Communication Engineering Laboratory"
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
            Electronics and Communication Engineering Department was Established in {{ facts.established }}, the Department offers a 4-Year B.Tech Degree programme, Electronics and Communications Engineering, with an intake of {{ facts.intakeUG }} students.
          </p>
          <p class="lead">
            The department of Electronics and Communication Engineering (ECE) was established during the inception of the institute in {{ facts.established }}. The department has a faculty student ratio as per AICTE norms. The average teaching experience is more than 5 years. So far around 1200 students have graduated. Every year our students secure placements in reputed companies like INFOSYS, TCS, TECH MAHINDRA, Accenture, Cognizant and VEDA IIT etc.
          </p>
          <p class="lead">
            The Department is committed to establish, maintain and advance a broad understanding of Electronics & Communication Engineering to fulfill academic and professional objectives.
          </p>
          <p class="lead">
            The department has created a student association called "Thrushna by Access" under the aegis of which the students are conducting the events like Technical Quizes, Mini Project exhibition, Guest lectures, Technical fest, Technical Symposium to quote a few.
          </p>
          <p class="lead">
            The department has well-equipped state-of-the-art laboratories for Electronic Devices & Circuits, IC Applications, Digital System Design, Basic Simulation, Analog & Digital Communications, Electronic Circuit Analysis, Analog Electronics, Analog & Digital Electronics, Digital Signal Processing, Microprocessors and Microcontrollers, ECAD & VLSI Microwave Engineering. Software available includes latest versions of MATLAB, Xilinx and Multisim.
          </p>
          <p class="lead">
            The strengths of the department are the specialized laboratories like Antenna Measurement System & PCB fabrication setup, senior faculty, dynamic & young associate and assistant professors, staff and meritorious students.
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
              Establish Industry ready high academic standards in Electronics and Communication Engineering education and research and accomplish this goal.
            </p>
            <h3 class="h5 mt-4 mb-2" style="color: var(--ink); font-weight: 800;">Mission</h3>
            <ul class="bullets">
              <li>Establish high quality interactive programmes in partnership with other eminent institutes of national importance and train the students to become leaders and masters of technology with academic excellence.</li>
            </ul>
            <h3 class="h5 mt-4 mb-2" style="color: var(--ink); font-weight: 800;">Our Goals:</h3>
            <ul class="bullets">
              <li><strong>Research & Development</strong> — To create Research & Development Cell to accelerate Research & Development in the Department.</li>
              <li><strong>Training Programs</strong> — To conduct Industry relevant Training Programmes for students so that they are ready for Industry.</li>
              <li><strong>Training & Placements</strong> — To enhance Training and Placement activities so that the Department achieves 90% of employment to all eligible candidates.</li>
              <li><strong>Industrial Development</strong> — To work closely with Industry in developing curriculum commensurate with Industry needs.</li>
            </ul>
          </article>

          <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Programs Offered</h3>
            <ul class="bullets">
              <li><strong>B.Tech in ECE</strong> — {{ facts.intakeUG }} seats; EAMCET eligibility; comprehensive ECE curriculum.</li>
              <li><strong>Total Student Strength</strong> — Approximately 240 students across all years.</li>
              <li><strong>Specialized Labs</strong> — Antenna Measurement System, PCB fabrication setup, MATLAB, Xilinx, Multisim.</li>
              <li><strong>Student Association</strong> — "Thrushna by Access" for technical events and competitions.</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#curriculum" @click.prevent="setTab('curriculum')">Download Syllabus</a>
              <a class="btn btn-soft" href="#placements" @click.prevent="setTab('placements')">Placement Highlights</a>
            </div>
          </article>
        </div>

        <!-- Strengths Section -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-star"></i> Department Strengths</h3>
          <div class="grid-2">
            <div class="strength-item">
              <h4><i class="fa-solid fa-chalkboard-teacher"></i> Smart Classroom Environment</h4>
              <p>Modern teaching infrastructure with smart boards and digital learning tools.</p>
            </div>
            <div class="strength-item">
              <h4><i class="fa-solid fa-microscope"></i> Research & Development Environment</h4>
              <p>Dedicated R&D facilities fostering innovation and cutting-edge research.</p>
            </div>
            <div class="strength-item">
              <h4><i class="fa-solid fa-users"></i> Student Technical Forum</h4>
              <p>Active student association "Thrushna by Access" organizing technical events.</p>
            </div>
            <div class="strength-item">
              <h4><i class="fa-solid fa-microchip"></i> Fully Equipped Laboratories</h4>
              <p>State-of-the-art labs with specialized equipment and latest software tools.</p>
            </div>
          </div>
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
                      <p>To excel in electronics and communication engineering careers and pursue higher studies at premier institutions with strong foundation in analog and digital systems.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 2</div>
                    <div class="outcome-content">
                      <h4>Innovation & Leadership</h4>
                      <p>To lead multi-disciplinary teams in developing innovative communication systems and electronic solutions for real-world applications.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PEO 3</div>
                    <div class="outcome-content">
                      <h4>Professional Ethics</h4>
                      <p>To commit to ethical, sustainable, and impactful technology development while contributing to society through responsible engineering practices.</p>
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
                      <p>Apply the knowledge of mathematics, science, engineering fundamentals, and ECE specialization to the solution of complex engineering problems.</p>
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
                      <p>Create, select, and apply appropriate techniques, resources, and modern ECE tools including MATLAB, Xilinx, and Multisim to complex activities.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PO 6</div>
                    <div class="outcome-content">
                      <h4>The Engineer and Society</h4>
                      <p>Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues relevant to professional ECE practice.</p>
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
                      <h4>Electronic System Design</h4>
                      <p>Design and implement electronic circuits, communication systems, and signal processing applications using modern tools and technologies.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 2</div>
                    <div class="outcome-content">
                      <h4>Communication Engineering</h4>
                      <p>Analyze and design analog and digital communication systems, including antenna systems and wireless communication networks.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">PSO 3</div>
                    <div class="outcome-content">
                      <h4>VLSI & Embedded Systems</h4>
                      <p>Develop VLSI designs and embedded systems solutions while ensuring proper testing, validation, and optimization of electronic systems.</p>
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
                      <p>Course outcomes aligned with latest ECE curriculum including modern communication systems, VLSI design, and embedded systems applications.</p>
                    </div>
                  </div>
                  <div class="outcome-card">
                    <div class="outcome-number">R18</div>
                    <div class="outcome-content">
                      <h4>Previous Regulation (R18)</h4>
                      <p>Legacy course outcomes for students enrolled under the previous curriculum with foundational ECE concepts and traditional approaches.</p>
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
        <h2 class="section-title"><i class="fa-solid fa-microchip"></i> Labs & Research Infrastructure</h2>
        
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-microscope"></i> We have Fully Equipped Laboratories</h3>
          <p class="lead">
            The Electronics and Communications has become an integral part of today technology in various fields. Hence the department has to provide enhanced and fully equipped laboratories to provide training to prepare the young engineers to contribute to the developments in these fields.
          </p>
        </div>

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
          <i class="fa-solid fa-microchip"></i> Microprocessors • <i class="fa-solid fa-satellite-dish"></i> Communication Systems
        </div>
      </section>

      <!-- CURRICULUM -->
      <section :id="tabsMap.curriculum" class="card-section" aria-labelledby="curriculum" v-show="activeTab==='curriculum'">
        <div class="card">
          <h2 class="section-title" id="curriculum"><i class="fa-solid fa-file-lines"></i> Curriculum & Syllabus</h2>
          
          <!-- Course Structure Section -->
          <div class="course-structure-section">
            <h3 class="section-title-sm"><i class="fa-solid fa-graduation-cap"></i> Course Structure for all Years</h3>
            <p class="lead">Download the Course Structure and Syllabus of four years of ECE course</p>
            
            <div class="downloads">
              <a v-for="d in syllabus" :key="d.label" :href="d.href" class="download" target="_blank" rel="noopener">
                <i class="fa-solid fa-file-pdf"></i>
                <div>
                  <div class="dl-label">{{ d.label }}</div>
                  <div class="dl-sub">{{ d.note }}</div>
                </div>
              </a>
            </div>
          </div>
          
          <div class="row-actions mt-1">
            <a class="btn btn-soft" href="/academics/regulations">Academic Regulations</a>
            <a class="btn btn-soft" href="/academics/calendar">Academic Calendar</a>
          </div>
        </div>
      </section>

      <!-- BOS (Board of Studies) -->
      <section :id="tabsMap.bos" class="card-section" v-show="activeTab==='bos'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-graduation-cap"></i> Board of Studies (BOS)</h2>
          <div class="bos-intro">
            <p class="lead">
              The Board of Studies (BOS) for Electronics and Communication Engineering is responsible for the academic planning, 
              curriculum development, and quality assurance of the ECE program. The board ensures that the curriculum 
              remains current with industry trends and academic standards in electronics and communication engineering.
            </p>
          </div>
          
          <div class="grid-2">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-users"></i> BOS Members</h3>
              <ul class="bullets">
                <li><strong>Chairman:</strong> Dr. P. SEKHARBABU (HOD, ECE)</li>
                <li><strong>Industry Expert:</strong> Mr. [Industry Expert] (Senior Engineer, Telecom Sector)</li>
                <li><strong>Academic Expert:</strong> Dr. [Academic Expert] (Professor, IIT/NIT)</li>
                <li><strong>Alumni Representative:</strong> Mr. [Alumni Name] (Senior Engineer, Electronics Industry)</li>
                <li><strong>Student Representative:</strong> Ms. [Student Name] (Final Year ECE)</li>
              </ul>
            </article>
            
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-tasks"></i> BOS Responsibilities</h3>
              <ul class="bullets">
                <li>Curriculum design and periodic review</li>
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
                  <h4>Curriculum Revision (R22)</h4>
                  <p>Updated curriculum to include IoT, 5G technologies, and embedded systems specializations</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-date">2023</div>
                <div class="activity-content">
                  <h4>Industry Partnership Program</h4>
                  <p>Established partnerships with leading telecom and electronics companies for curriculum enhancement</p>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-date">2023</div>
                <div class="activity-content">
                  <h4>Faculty Development Program</h4>
                  <p>Conducted workshops on emerging communication technologies and teaching methodologies</p>
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
              THRUSHNA is a NATIONAL LEVEL TECHNICAL SYMPOSIUM organized by the Department of ECE. 
              It provides a platform for students to showcase their technical skills and innovative projects 
              in Electronics and Communication Engineering.
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
            <button class="btn btn-primary" @click="openEventsModal">
              <i class="fa-solid fa-images"></i> View All Events Images
            </button>
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
            <p>Our alumni network section is currently being updated with the latest information about our ECE graduates and their achievements.</p>
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
              <a class="btn btn-soft mt-1" href="#" aria-label="ECE LinkedIn">ECE LinkedIn</a>
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
      title-icon="fa-solid fa-microchip"
      title-icon-color="var(--orange)"
      :show-image-info="false"
    />

    <!-- Events Image Modal -->
    <ImagePreviewer
      v-model:show="showEventsModal"
      :images="eventImages"
      :initial-index="currentEventImageIndex"
      title="ECE Events Gallery"
      title-icon="fa-solid fa-rocket"
      title-icon-color="var(--primary)"
      :show-image-info="true"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ImagePreviewer from '@/views/utils/ImagePreviewer.vue'

/* Facts / Quick Stats */
const facts = { established: '2001', intakeUG: '60', labs: '8+' }

/* About stats */
const aboutStats = [
  { label: 'Faculty', value: '14+', icon: 'fa-solid fa-user-tie' },
  { label: 'ECE Labs', value: '8+', icon: 'fa-solid fa-microchip' },
  { label: 'Graduates', value: '1200+', icon: 'fa-solid fa-graduation-cap' },
  { label: 'Placement', value: '90%+', icon: 'fa-solid fa-briefcase' }
]

/* Tabs */
const tabs = [
  { id: 'overview',   label: 'Overview',   icon: 'fa-solid fa-circle-dot' },
  { id: 'faculty',    label: 'Faculty',    icon: 'fa-solid fa-users' },
  { id: 'labs',       label: 'Labs',       icon: 'fa-solid fa-microchip' },
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
  router.push(`/ece/${id}`)
  
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
    name: 'Dr. V.S.R KUMARI', 
    designation: 'PROFESSOR',
    qualification: 'Ph.D',
    expertise: ['Digital Communications', 'Signal Processing'],
    email: 'hod.ece@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_01.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 31
  },
  {
    name: 'Dr. P SEKHAR BABU', 
    designation: 'ASSOCIATE PROFESSOR',
    qualification: 'Ph.D',
    expertise: ['VLSI Design', 'Embedded Systems'],
    email: 'sekhar@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_02.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 19
  },
  {
    name: 'MODUGU RAMBABU', 
    designation: 'ASSOCIATE PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Electronics', 'Circuit Design'],
    email: 'rambabu@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_03.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 18
  },
  {
    name: 'MARSAKATLA SUNDARA RAO', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Analog Electronics', 'Communication Systems'],
    email: 'sundara@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_04.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 14
  },
  {
    name: 'PENUMOODI NAGASEKHAR', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['Digital Signal Processing', 'MATLAB'],
    email: 'nagasekhar@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_05.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 18
  },
  {
    name: 'BANDAM NARENDAR', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['Microcontrollers', 'Embedded Programming'],
    email: 'narendar@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_07.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 11
  },
  {
    name: 'M VARA PRASAD', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['VLSI', 'Digital Design'],
    email: 'varaprasad@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_10.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 11
  },
  {
    name: 'PEDURI RAJA SEKHAR', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Wireless Communications', 'Antenna Design'],
    email: 'rajasekhar@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 5
  },
  {
    name: 'T KEERTHI', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Network Analysis', 'Control Systems'],
    email: 'keerthi@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 6
  },
  {
    name: 'G SRILATHA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Digital Electronics', 'Microprocessors'],
    email: 'srilatha@ssit.edu.in',
    photo: '#',
    profile: '#', linkedin: '#',
    experience: 4
  },
  {
    name: 'MANDADUPU ANUSHA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['RF Engineering', 'Microwave Engineering'],
    email: 'anusha@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_08.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 4
  },
  {
    name: 'V.B.GOPALA KRISHNA', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['Communication Networks', 'Data Communications'],
    email: 'gopalakrishna@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_06.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 11
  },
  {
    name: 'GOLLAMUDI RANI', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH, (Ph.D)',
    expertise: ['Image Processing', 'Computer Vision'],
    email: 'rani@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_09.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 5
  },
  {
    name: 'VEERLA RANI', 
    designation: 'ASSISTANT PROFESSOR',
    qualification: 'M.TECH',
    expertise: ['Electromagnetic Fields', 'Antenna Theory'],
    email: 'veerla@ssit.edu.in',
    photo: new URL('@/assets/departments/ece/faculty/ECE_11.jpg', import.meta.url).href,
    profile: '#', linkedin: '#',
    experience: 4
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
    title: 'Simulation Lab',
    desc: 'Advanced simulation software for circuit design and analysis using MATLAB, Multisim, and Xilinx tools.',
    img: new URL('@/assets/departments/ece/labs/simulation_lab_1_1.jpg', import.meta.url).href,
    images: [
      new URL('@/assets/departments/ece/labs/simulation_lab_1_1.jpg', import.meta.url).href,
      new URL('@/assets/departments/ece/labs/simulation_lab_1_2.jpg', import.meta.url).href,
      new URL('@/assets/departments/ece/labs/simulation_lab_1_3.jpg', import.meta.url).href
    ],
    tags: ['MATLAB', 'Multisim', 'Xilinx']
  },
  {
    title: 'MP&MC Lab',
    desc: 'Microprocessors and Microcontrollers laboratory with 8085, 8086, and ARM processors for hands-on training.',
    img: new URL('@/assets/departments/ece/labs/mp_n_mc_lab_1_1.jpg', import.meta.url).href,
    images: [
      new URL('@/assets/departments/ece/labs/mp_n_mc_lab_1_1.jpg', import.meta.url).href,
      new URL('@/assets/engineering-students-lab.png', import.meta.url).href,
      new URL('@/assets/campuslife/engineering-students-lab.png', import.meta.url).href
    ],
    tags: ['8085', '8086', 'ARM', 'Assembly']
  },
  {
    title: 'IC/DSD Lab',
    desc: 'Integrated Circuits and Digital System Design lab with VLSI design tools and FPGA development boards.',
    img: new URL('@/assets/engineering-students-lab.png', import.meta.url).href,
    images: [
      new URL('@/assets/engineering-students-lab.png', import.meta.url).href,
      new URL('@/assets/campuslife/engineering-students-lab.png', import.meta.url).href,
      new URL('@/assets/campuslife/students-in-college-library-studying.jpg', import.meta.url).href
    ],
    tags: ['VLSI', 'FPGA', 'Digital Design']
  },
  {
    title: 'Communication Lab',
    desc: 'Advanced communication systems lab with analog/digital modulation, antenna measurement, and RF equipment.',
    img: new URL('@/assets/departments/ece/labs/communication_lab_1_1.jpg', import.meta.url).href,
    images: [
      new URL('@/assets/departments/ece/labs/communication_lab_1_1.jpg', import.meta.url).href,
      new URL('@/assets/departments/ece/labs/communication_lab_1_2.jpg', import.meta.url).href,
      new URL('@/assets/departments/ece/labs/Communication_lab_1_3.jpg', import.meta.url).href
    ],
    tags: ['RF', 'Antenna', 'Modulation']
  },
  {
    title: 'EDC Lab',
    desc: 'Electronic Devices and Circuits laboratory with semiconductor devices, amplifiers, and circuit analysis equipment.',
    img: new URL('@/assets/departments/ece/labs/edc_lab_1_1.jpg', import.meta.url).href,
    images: [
      new URL('@/assets/departments/ece/labs/edc_lab_1_1.jpg', import.meta.url).href,
      new URL('@/assets/departments/ece/labs/edc_lab_1_2.jpg', import.meta.url).href,
      new URL('@/assets/engineering-students-lab.png', import.meta.url).href
    ],
    tags: ['Semiconductors', 'Amplifiers', 'Diodes']
  }
]

/* Syllabus / Downloads */
const syllabus = [
  { label: 'I ECE - R18', note: 'First Year ECE Syllabus', href: '#' },
  { label: 'II ECE - R18', note: 'Second Year ECE Syllabus', href: '#' },
  { label: 'III ECE - R16', note: 'Third Year ECE Syllabus', href: '#' },
  { label: 'IV ECE - R16', note: 'Fourth Year ECE Syllabus', href: '#' }
]

/* Activities */
const activities = [
  {
    title: 'Paper Presentations',
    desc: 'Students present their research work in the form of 5-slide PowerPoint presentations covering technology concepts, methodology, and conclusions.',
    icon: 'fa-solid fa-presentation-screen'
  },
  {
    title: 'Circuit Design Competition',
    desc: 'Competitive event focusing on designing and implementing electronic circuits with real-time problem-solving challenges.',
    icon: 'fa-solid fa-microchip'
  },
  {
    title: 'Technical Quiz',
    desc: 'Mind sport where students attempt to answer questions correctly on electronics, communication systems, and digital technologies.',
    icon: 'fa-solid fa-question-circle'
  },
  {
    title: 'Project Exhibition',
    desc: 'Showcase of innovative ECE projects including IoT applications, embedded systems, and communication devices.',
    icon: 'fa-solid fa-rocket'
  },
  {
    title: 'Workshops',
    desc: 'Hands-on training sessions on latest technologies like VLSI design, antenna systems, and wireless communication.',
    icon: 'fa-solid fa-tools'
  },
  {
    title: 'Guest Lectures',
    desc: 'Industry experts and academicians share insights on emerging trends in electronics and communication engineering.',
    icon: 'fa-solid fa-chalkboard-teacher'
  }
]

// Event Images for ECE Activities
const eventImages = [
  {
    src: new URL('@/assets/departments/ece/activities/ece_thrushna_1.jpg', import.meta.url).href,
    title: 'THRUSHNA Symposium',
    desc: 'National Level Technical Symposium'
  },
  {
    src: new URL('@/assets/departments/ece/activities/ece_thrushna_2.jpg', import.meta.url).href,
    title: 'Technical Events',
    desc: 'Circuit Design and Paper Presentations'
  },
  {
    src: new URL('@/assets/departments/ece/activities/ece_thrushna_3.jpg', import.meta.url).href,
    title: 'Student Activities',
    desc: 'ECE Department Events and Competitions'
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
  name: 'Dr. P. SEKHARBABU',
  designation: 'HOD & Associate Professor',
  location: 'ECE Block, Room 302',
  phone: '+91-98765-43212',
  email: 'suma.sekhar3@gmail.com'
}

const lastUpdated = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

// Accordion state
const activeAccordion = ref('')
const toggleAccordion = (section) => {
  activeAccordion.value = activeAccordion.value === section ? '' : section
}

// Modal functions now handled by ImagePreviewer component

// Events modal function
const openEventsModal = () => {
  showEventsModal.value = true
  currentEventImageIndex.value = 0
}

// Image Modal state
const showImageModal = ref(false)
const currentImageIndex = ref(0)
const currentLabImages = ref([])

// Events Modal state
const showEventsModal = ref(false)
const currentEventImageIndex = ref(0)
const isEventsFullscreen = ref(false)
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
.fc-tags{ color:#374151; font-size:.92rem }
.fc-links{ display:flex; gap:.5rem; margin-top:.4rem }
.icon-link{ width:36px; height:36px; display:grid; place-items:center; border:1px solid var(--border); border-radius:.6rem; color:var(--navy) }
.icon-link:hover{ background:rgba(30,64,175,.06) }

/* LABS */
.labs-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1rem }
.lab-card{ border:1px solid var(--border); border-radius:1rem; overflow:hidden; background:#fff; display:flex; flex-direction:column }

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
.lab-card img{ width:100%; height:160px; object-fit:cover }
.lab-body{ padding:1rem; flex:1; display:flex; flex-direction:column }
.lab-title{ margin:0 0 .25rem; font-weight:800; color:var(--ink) }
.lab-text{ color:#000; font-size:.95rem; flex:1 }
.lab-tags{ display:flex; flex-wrap:wrap; gap:.4rem; margin:.5rem 0; padding:0; list-style:none }
.lab-tags li{ border:1px solid var(--border); border-radius:999px; padding:.15rem .55rem; font-size:.78rem; color:#334155 }
.lab-actions{ margin-top:1rem; display:flex; justify-content:center }
.view-images-btn{ 
  width:100%; 
  justify-content:center; 
  gap:.5rem;
  font-size:.9rem;
  padding:.6rem 1rem;
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

/* ACTIVITIES */
.activities-hero{
  background: linear-gradient(135deg, #f8fafc 0%, #eef4ff 100%);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border);
}
.activities-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.activity-card{
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.activity-card:hover{
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-color: var(--primary);
}
.activity-icon{
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--orange));
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.activity-icon i{
  font-size: 1.2rem;
  color: white;
}
.activity-content{
  flex: 1;
}
.activity-title{
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem;
  line-height: 1.3;
}
.activity-desc{
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}
.activities-footer{
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }
.note{ background:linear-gradient(180deg,#f8fafc,#eef4ff); border:1px dashed var(--border); border-radius:.9rem; padding:.9rem }
.last-updated{ color:var(--muted); font-size:.9rem; margin-top:.6rem }

/* UTIL */
.grid-2, .grid-3 .card{ background:#fff }
.mt-3{margin-top:1rem}

/* STRENGTH ITEMS */
.strength-item{
  border:1px solid var(--border);
  border-radius:.8rem;
  padding:1rem;
  background:#fff;
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
}
.strength-item:hover{
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(0,0,0,.1);
  border-color:var(--orange);
}
.strength-item h4{
  font-size:1rem;
  font-weight:700;
  color:var(--ink);
  margin:0 0 .5rem;
  display:flex;
  align-items:center;
  gap:.5rem;
}
.strength-item h4 i{
  color:var(--orange);
}
.strength-item p{
  font-size:.9rem;
  color:#000;
  margin:0;
  line-height:1.5;
}

/* COURSE STRUCTURE SECTION */
.course-structure-section{
  margin-bottom:1.5rem;
  padding-bottom:1.5rem;
  border-bottom:1px solid var(--border);
}
.course-structure-section .section-title-sm{
  margin-bottom:.8rem;
}
.course-structure-section .lead{
  margin-bottom:1rem;
  color:#000;
}

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
</style>
