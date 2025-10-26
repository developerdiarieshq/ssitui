<template>
  <div class="examination-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Examination Department Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
          <div class="hero-copy">

          <h1 class="title">Examination Department</h1>
          <p class="tagline">Efficient • Transparent • Student-Centric</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Founded</span>
              <span class="qf-value">2001</span>
            </li>
            <li>
              <span class="qf-label">Officer In-charge</span>
              <span class="qf-value">P.Sekhar Babu</span>
            </li>
            <li>
              <span class="qf-label">Focus</span>
              <span class="qf-value">Internal & University Exams</span>
            </li>
            </ul>
          </div>
          <picture class="hero-art" aria-hidden="true">
            <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop"
            alt="Examination Department - Students taking exams with answer sheets"
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
      <!-- OVERVIEW -->
      <section :id="tabsMap.overview" class="card-section" v-show="activeTab==='overview'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-school"></i> About the Examination Department</h2>
          <p class="lead">
            The Exam Branch was started functioning from the inception of the college i.e., in 2001. College Examination branch is being headed by P.Sekhar Babu as Officer in-charge examinations. The main focus of the branch is to run the academics smoothly by conducting internal examinations in-time and keeping a great effort in conducting the university examinations effectively.
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
              To maintain academic excellence through smooth examination processes and effective assessment methodologies that uphold the highest standards of integrity.
            </p>
            <h3 class="h5 text-muted mt-4 mb-2">Mission</h3>
            <p>
              To conduct timely internal examinations and effectively manage university examinations, ensuring smooth academic operations from our inception in 2001.
          </p>
        </article>

        <article class="card">
            <h3 class="section-title-sm"><i class="fa-solid fa-diagram-project"></i> Key Features</h3>
            <ul class="bullets">
              <li><strong>Digital Evaluation</strong> — Modern automated assessment with digital marking</li>
              <li><strong>Secure Results Portal</strong> — Protected student results access</li>
              <li><strong>Online Applications</strong> — Easy certificate and transcript requests</li>
              <li><strong>Quality Assurance</strong> — Rigorous moderation and verification processes</li>
            </ul>
            <div class="row-actions">
              <a class="btn btn-primary" href="#services" @click.prevent="setTab('services')">View Services</a>
              <a class="btn btn-soft" href="#contact" @click.prevent="setTab('contact')">Contact Info</a>
            </div>
          </article>
        </div>
      </section>

      <!-- COE OFFICE -->
      <section :id="tabsMap.coe" class="card-section" v-show="activeTab==='coe'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-building-columns"></i> Controller of Examinations Office</h2>
          <p class="lead">
            The office of the Controller of Examinations was established in the year 2015 after the conferment of Autonomous status to the institute. The Controller of Examinations is responsible for preparation, scheduling, and conduct of CIE and SEE for all the UG & PG programmes offered by the institute. It also facilitates central valuation of answer scripts and timely publication of Results.
          </p>
          <div class="stats">
            <div class="stat">
              <i class="fa-solid fa-calendar-alt"></i>
              <div>
                <div class="num">2015</div>
                <div class="label">Established</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-graduation-cap"></i>
              <div>
                <div class="num">UG & PG</div>
                <div class="label">Programs</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-clipboard-check"></i>
              <div>
                <div class="num">CIE & SEE</div>
                <div class="label">Examinations</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-certificate"></i>
              <div>
                <div class="num">Autonomous</div>
                <div class="label">Status</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pre-Examination Process -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-tasks"></i> Pre-Examination Process</h3>
          <ol class="process-list">
            <li><strong>Conducting the Continuous Internal Examinations (CIE)</strong></li>
            <li><strong>Preparation of consolidated internal marks statement and verification</strong></li>
            <li><strong>Syllabus/procurement of question papers for Sem-end examinations</strong></li>
            <li><strong>Question paper setting</strong></li>
            <li><strong>Registration of the students</strong></li>
            <li><strong>Preparation of OMR answer scripts with variable data</strong></li>
          </ol>
        </div>

        <!-- Process During Examination -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-clipboard-list"></i> Process During Examination</h3>
          <ol class="process-list">
            <li><strong>Conduct of semester end lab examinations</strong></li>
            <li><strong>Conduct of supplementary lab examinations</strong></li>
            <li><strong>Conduct of semester end theory examinations (SEE)</strong></li>
            <li><strong>Preparation of D-forms</strong></li>
            <li><strong>Monitoring of Malpractice cases</strong></li>
          </ol>
        </div>

        <!-- Post-Examination Process -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-check-circle"></i> Post-Examination Process</h3>
          <ol class="process-list">
            <li><strong>Scanning of Booklets & Bundle Generation</strong></li>
            <li><strong>Spot valuation</strong></li>
            <li><strong>Scrutinizing</strong></li>
            <li><strong>Results processing and publishing</strong></li>
            <li><strong>Recounting/revaluation (RC/RV) of UG/PG examination</strong></li>
            <li><strong>Supplementary theory examinations</strong></li>
            <li><strong>Advanced supplementary examinations</strong></li>
            <li><strong>Tabulation and declaration of results</strong></li>
            <li><strong>Printing and issue of grade sheets, Consolidated Marks Memo (CMM), Provisional Certificate (PC) and Transcripts</strong></li>
          </ol>
          <p class="mt-3 mb-0">Finally, sending a list of successful candidates with their Cumulative Grade Point Average (CGPA) to the Jawaharlal Nehru Technological University Hyderabad, Hyderabad for issuing Original Degree Certificate.</p>
        </div>

        <!-- Hall Tickets -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-ticket"></i> Issue of Hall Tickets for Autonomous Examinations</h3>
          <p class="mb-3">
            Students who enroll for a PG/UG programme shall appear for all the semester end examinations need to register for the semester end examinations through 'On-line' registration system.
          </p>
          <div class="alert alert-info">
            <h5><i class="fa-solid fa-info-circle"></i> Important Notes:</h5>
            <ul class="mb-0">
              <li>The student may not be able to apply for the online examination using his registration details if s/he has semester payment dues</li>
              <li>If s/he falls short of the required percentage of attendance, s/he may not be able to download the Hall-Ticket</li>
              <li>The online application weblink and hall ticket printing facility may be kept open for students' access only for a limited period of time</li>
              <li>Students who fail to apply through online mode for semester examinations may not be permitted to appear for the exams under any circumstances</li>
            </ul>
          </div>
        </div>

        <!-- Evaluation -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-tasks"></i> Evaluation</h3>
          <p class="mb-3">
            Evaluation of answer books for all examinations (CIE & SEE) shall be done centrally. All the answer scripts are scanned on the day of examination and encoded with auto-generated codes. The theory papers of CIE are evaluated by internal faculty and SEE are evaluated by the Internal examiners and external examiner identified from reputed institutions.
          </p>
          
          <div class="grid-2">
            <div class="card">
              <h4><i class="fa-solid fa-desktop"></i> CBT Examination</h4>
              <p class="mb-0">
                The CBT examination is conducted to benefit the students who missed the CIE in one or more courses due to medical grounds as well as for those who missed the CIE on genuine grounds. Students can register and write CBT examinations by paying a requisite amount.
              </p>
            </div>
            
            <div class="card">
              <h4><i class="fa-solid fa-redo"></i> Revaluation Process</h4>
              <p class="mb-2">
                If the examinee is not satisfied with the marks awarded, he/she may apply for revaluation of answer book in prescribed format online within three (3) working days from the date of declaration of result.
              </p>
              <div class="alert alert-warning">
                <strong>Criteria:</strong> The revaluation marks are considered only if the difference between the original award and award on reevaluation is more than equal to 15% of 70 marks (11 marks).
              </div>
            </div>
          </div>
        </div>

        <!-- Discipline at Exam Hall -->
        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-gavel"></i> Discipline at Exam Hall</h3>
          
          <!-- Examination Timings -->
          <div class="timing-section">
            <h4><i class="fa-solid fa-clock"></i> Examination Timings</h4>
            <p class="mb-3"><strong>Examinations with 3 hours duration:</strong></p>
            <div class="timing-cards">
              <div class="timing-card fn">
                <div class="timing-icon">
                  <i class="fa-solid fa-sun"></i>
                </div>
                <div class="timing-info">
                  <div class="timing-label">FN Session</div>
                  <div class="timing-slot">10:00 AM to 1:00 PM</div>
                </div>
              </div>
              <div class="timing-card an">
                <div class="timing-icon">
                  <i class="fa-solid fa-moon"></i>
                </div>
                <div class="timing-info">
                  <div class="timing-label">AN Session</div>
                  <div class="timing-slot">2:00 PM to 5:00 PM</div>
                </div>
              </div>
            </div>
          </div>
          
          <hr class="section-divider">
          
          <!-- Detailed Guidelines -->
          <div class="guidelines-section">
            <h4><i class="fa-solid fa-list-check"></i> Examination Guidelines for Candidates</h4>
            <p class="mb-4">For smooth conduct of examinations, candidates are instructed to adhere to the following guidelines:</p>
            
            <div class="guidelines-grid">
              <div class="guideline-category">
                <h5><i class="fa-solid fa-sign-in-alt"></i> Before Examination</h5>
                <ul class="guidelines-list">
                  <li><span class="guideline-number">01</span>Check the Hall No. and seating plan daily</li>
                  <li><span class="guideline-number">02</span>Enter the hall 15 minutes before the commencement of examination</li>
                  <li><span class="guideline-number">03</span>Carry Admit card and Identity card to the examination hall</li>
                  <li><span class="guideline-number">04</span>Check whether the answer book is damaged / contains all the pages</li>
                  <li><span class="guideline-number">05</span>Check Register Number, Degree/Branch, Course code/Name and Date</li>
                </ul>
              </div>
              
              <div class="guideline-category">
                <h5><i class="fa-solid fa-clipboard-check"></i> During Examination</h5>
                <ul class="guidelines-list">
                  <li><span class="guideline-number">06</span>Verify Course code/Name and ensure correct question paper is received</li>
                  <li><span class="guideline-number">07</span>Ensure signature in the attendance sheet before leaving</li>
                  <li><span class="guideline-number">08</span>Maintain silence inside the examination hall</li>
                  <li><span class="guideline-number">09</span>Report any missing data/figure or discrepancy to the Invigilator</li>
                  <li><span class="guideline-number">10</span>Leave hall only for emergency with prior permission</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Prohibited Items -->
          <div class="alert alert-danger mt-4">
            <h5><i class="fa-solid fa-ban"></i> Strictly Prohibited Items & Actions</h5>
            <div class="prohibited-grid">
              <div class="prohibited-category">
                <h6><i class="fa-solid fa-mobile-alt"></i> Electronic Devices</h6>
                <ul class="mb-0">
                  <li>Mobile phone</li>
                  <li>Programmable calculator</li>
                  <li>Pager</li>
                </ul>
              </div>
              <div class="prohibited-category">
                <h6><i class="fa-solid fa-file-alt"></i> Documentation</h6>
                <ul class="mb-0">
                  <li>Any notes or written/printed matter</li>
                  <li>Writing distinguishable marks</li>
                  <li>Detaching sheets from answer booklet</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Malpractice Warning */
          <div class="alert alert-warning mt-3">
            <h5><i class="fa-solid fa-exclamation-triangle"></i> Malpractice Consequences</h5>
            <p class="mb-2">Students resorting to malpractice of any nature will be considered seriously and necessary disciplinary action will be taken against them:</p>
            <ul class="mb-0">
              <li>As per academic regulations booklet</li>
              <li>May lead to cancellation of all exams written during the semester</li>
              <li>Severe penalties as per JNTU Hyderabad guidelines</li>
            </ul>
          </div>
          
          <!-- Important Reminders -->
          <div class="alert alert-info mt-3">
            <h5><i class="fa-solid fa-info-circle"></i> Important Reminders</h5>
            <ul class="mb-0">
              <li><strong>No additional sheets</strong> will be issued during examination</li>
              <li><strong>Answer booklet</strong> should not be taken out of the hall</li>
              <li><strong>Return data books/charts/manuals</strong> before leaving the hall</li>
              <li><strong>Emergency exits</strong> require assistance of supporting staff</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- NOTIFICATIONS -->
      <section :id="tabsMap.notifications" class="card-section" v-show="activeTab==='notifications'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-bell"></i> Examination Notifications</h2>
          <p class="lead">
            Stay updated with the latest examination announcements, schedules, and important updates from the Examination Department.
          </p>
        </div>

        <div class="card">
          <h3 class="table-title">Latest Notifications - December 2024</h3>
          <div class="table-responsive">
            <table class="notifications-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Notification</th>
                  <th>Status</th>
                  <th>Description</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="notification in notifications" :key="notification.id">
                  <td>{{ notification.date }}</td>
                  <td>
                    <div class="notification-info">
                      <strong>{{ notification.title }}</strong>
                      <small>{{ notification.code || getNotificationCode(notification.type) }}</small>
                    </div>
                  </td>
                  <td>
                    <span class="notification-status-badge" :class="getStatusClass(notification.type)">
                      {{ getStatusText(notification.type) }}
                    </span>
                  </td>
                  <td>
                    <div class="notification-description">
                      {{ notification.content }}
                    </div>
                  </td>
                  <td>
                    <button v-if="notification.download" class="download-btn" @click="downloadNotification(notification)">
                      <i class="fa-solid fa-download"></i> PDF
                    </button>
                    <span v-else class="no-download">-</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- SYLLABUS -->
      <section :id="tabsMap.syllabus" class="card-section" v-show="activeTab==='syllabus'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-book"></i> Academic Syllabus</h2>
          <p class="lead">
            Download comprehensive curriculum documents for all programs offered at SSIT. Syllabus documents are updated according to latest regulations.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="card">
          <div class="filter-header">
            <h3 class="table-title"><i class="fa-solid fa-filter"></i> Filter Syllabus</h3>
            <div class="filter-dropdown">
              <label for="syllabusFilter" class="filter-label">Select Program:</label>
              <select 
                id="syllabusFilter"
                v-model="activeSyllabusFilter" 
                @change="setSyllabusFilter(activeSyllabusFilter)"
                class="filter-select"
              >
                <option value="all">All Programs</option>
                <option value="btech">B.Tech Programs</option>
                <option value="mba">MBA Program</option>
                <option value="polytechnic">Polytechnic</option>
              </select>
            </div>
          </div>
        </div>

        <!-- B.Tech Programs Table -->
        <div class="card" v-if="activeSyllabusFilter === 'all' || activeSyllabusFilter === 'btech'">
          <h3 class="table-title">B.Tech Programs</h3>
          <div class="table-responsive">
            <table class="syllabus-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Credits</th>
                  <th>Semesters</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="program in btechPrograms" :key="program.id">
                  <td>
                    <div class="program-info">
                      <strong>{{ program.name }}</strong>
                      <small>{{ program.code }}</small>
                    </div>
                  </td>
                  <td>{{ program.duration }}</td>
                  <td>{{ program.credits }}</td>
                  <td>{{ program.semesters }}</td>
                  <td>
                    <button class="download-btn" @click="downloadSyllabus(program)">
                      <i class="fa-solid fa-file-pdf"></i> PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MBA Program Table -->
        <div class="card" v-if="activeSyllabusFilter === 'all' || activeSyllabusFilter === 'mba'">
          <h3 class="table-title">MBA Program</h3>
          <div class="table-responsive">
            <table class="syllabus-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Credits</th>
                  <th>Semesters</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="program in mbaPrograms" :key="program.id">
                  <td>
                    <div class="program-info">
                      <strong>{{ program.name }}</strong>
                      <small>{{ program.code }}</small>
                    </div>
                  </td>
                  <td>{{ program.duration }}</td>
                  <td>{{ program.credits }}</td>
                  <td>{{ program.semesters }}</td>
                  <td>
                    <button class="download-btn" @click="downloadSyllabus(program)">
                      <i class="fa-solid fa-file-pdf"></i> PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Polytechnic Programs Table -->
        <div class="card" v-if="activeSyllabusFilter === 'all' || activeSyllabusFilter === 'polytechnic'">
          <h3 class="table-title">Polytechnic Programs</h3>
          <div class="table-responsive">
            <table class="syllabus-table">
              <thead>
                <tr>
                  <th>Program</th>
                  <th>Duration</th>
                  <th>Credits</th>
                  <th>Semesters</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="program in polytechnicPrograms" :key="program.id">
                  <td>
                    <div class="program-info">
                      <strong>{{ program.name }}</strong>
                      <small>{{ program.code }}</small>
                    </div>
                  </td>
                  <td>{{ program.duration }}</td>
                  <td>{{ program.credits }}</td>
                  <td>{{ program.semesters }}</td>
                  <td>
                    <button class="download-btn" @click="downloadSyllabus(program)">
                      <i class="fa-solid fa-file-pdf"></i> PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- TIMETABLES -->
      <section :id="tabsMap.timetables" class="card-section" v-show="activeTab==='timetables'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-calendar-alt"></i> Examination Timetables</h2>
          <p class="lead">
            Access examination schedules and timing details for all current and upcoming examinations. Schedules are updated regularly.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="card">
          <div class="filter-header">
            <h3 class="table-title"><i class="fa-solid fa-filter"></i> Filter Timetables</h3>
            <div class="filter-dropdown">
              <label for="timetableFilter" class="filter-label">Select Type:</label>
              <select 
                id="timetableFilter"
                v-model="activeTimetableFilter" 
                @change="setTimetableFilter(activeTimetableFilter)"
                class="filter-select"
              >
                <option value="see">Semester End Examinations</option>
                <option value="cie">Continuous Internal Evaluation</option>
                <option value="supplementary">Supplementary Examinations</option>
                <option value="cbt">CBT Examinations</option>
              </select>
            </div>
          </div>
        </div>

        <!-- SEE Timetables -->
        <div class="card" v-if="activeTimetableFilter === 'see'">
          <h3 class="table-title">Semester End Examinations (SEE) - December 2024</h3>
          <div class="table-responsive">
            <table class="timetable-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Program</th>
                  <th>Hall</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exam in seeTimetable" :key="exam.id">
                  <td>{{ exam.date }}</td>
                  <td>{{ exam.day }}</td>
                  <td><span class="time-slot" :class="exam.session">{{ exam.time }}</span></td>
                  <td>
                    <div class="subject-info">
                      <strong>{{ exam.subject }}</strong>
                      <small>{{ exam.code }}</small>
                    </div>
                  </td>
                  <td>{{ exam.program }}</td>
                  <td>{{ exam.hall }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- CIE Timetables -->
        <div class="card" v-if="activeTimetableFilter === 'cie'">
          <h3 class="table-title">Continuous Internal Evaluation (CIE) - December 2024</h3>
          <div class="table-responsive">
            <table class="timetable-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Program</th>
                  <th>Hall</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exam in cieTimetable" :key="exam.id">
                  <td>{{ exam.date }}</td>
                  <td>{{ exam.day }}</td>
                  <td><span class="time-slot" :class="exam.session">{{ exam.time }}</span></td>
                  <td>
                    <div class="subject-info">
                      <strong>{{ exam.subject }}</strong>
                      <small>{{ exam.code }}</small>
                    </div>
                  </td>
                  <td>{{ exam.program }}</td>
                  <td>{{ exam.hall }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Supplementary Examinations -->
        <div class="card" v-if="activeTimetableFilter === 'supplementary'">
          <h3 class="table-title">Supplementary Examinations - January 2025</h3>
          <div class="table-responsive">
            <table class="timetable-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Program</th>
                  <th>Hall</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exam in supplementaryTimetable" :key="exam.id">
                  <td>{{ exam.date }}</td>
                  <td>{{ exam.day }}</td>
                  <td><span class="time-slot" :class="exam.session">{{ exam.time }}</span></td>
                  <td>
                    <div class="subject-info">
                      <strong>{{ exam.subject }}</strong>
                      <small>{{ exam.code }}</small>
                    </div>
                  </td>
                  <td>{{ exam.program }}</td>
                  <td>{{ exam.hall }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- CBT Examinations -->
        <div class="card" v-if="activeTimetableFilter === 'cbt'">
          <h3 class="table-title">Computer Based Test (CBT) Examinations - December 2024</h3>
          <div class="table-responsive">
            <table class="timetable-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Program</th>
                  <th>Lab</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="exam in cbtTimetable" :key="exam.id">
                  <td>{{ exam.date }}</td>
                  <td>{{ exam.day }}</td>
                  <td><span class="time-slot cbt">{{ exam.time }}</span></td>
                  <td>
                    <div class="subject-info">
                      <strong>{{ exam.subject }}</strong>
                      <small>{{ exam.code }}</small>
                    </div>
                  </td>
                  <td>{{ exam.program }}</td>
                  <td>{{ exam.lab }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Examination Guidelines -->
        <div class="card">
          <h3 class="table-title"><i class="fa-solid fa-info-circle"></i> Important Guidelines</h3>
          <div class="guidelines-grid">
            <div class="guideline-item">
              <h4><i class="fa-solid fa-clock"></i> Reporting Time</h4>
              <p>Students must report 15 minutes before the commencement of examination.</p>
            </div>
            <div class="guideline-item">
              <h4><i class="fa-solid fa-id-card"></i> Required Documents</h4>
              <p>Hall ticket and College ID card are mandatory for all examinations.</p>
            </div>
            <div class="guideline-item">
              <h4><i class="fa-solid fa-mobile-alt"></i> Prohibited Items</h4>
              <p>Mobile phones, calculators, and electronic devices are not allowed.</p>
            </div>
            <div class="guideline-item">
              <h4><i class="fa-solid fa-user-check"></i> Attendance</h4>
              <p>Students must sign the attendance sheet before leaving the examination hall.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SERVICES -->
      <section :id="tabsMap.services" class="card-section" v-show="activeTab==='services'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-grid-2" aria-hidden="true"></i> Examination Services</h2>
          <p class="lead">
            Comprehensive examination services and support for students and faculty members.
          </p>
        </div>

        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-download"></i> Downloads</h3>
          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-file-pdf"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Previous Question Papers</h4>
                <p class="service-description">Download past examination papers for practice</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-desktop"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">CBT Application Form</h4>
                <p class="service-description">Apply for Computer Based Test examinations</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-file-alt"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Condonation Form</h4>
                <p class="service-description">Request attendance condonation for examinations</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-certificate"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Duplicate Grade Card</h4>
                <p class="service-description">Apply for duplicate grade card replacement</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-edit"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Name Correction</h4>
                <p class="service-description">Request correction in student name or details</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-search"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Plagiarism Check</h4>
                <p class="service-description">Submit documents for plagiarism verification</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-book-open"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Read Mission</h4>
                <p class="service-description">Access reading materials and study resources</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-scroll"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Transcript Application Form</h4>
                <p class="service-description">Apply for official academic transcripts</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-certificate"></i> Apply for Certificates</h3>
          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Apply for Certificates</h4>
                <p class="service-description">Online application for degree certificates and transcripts</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-laptop"></i> Online Services</h3>
          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-desktop"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">CBT Examination</h4>
                <p class="service-description">Computer Based Test examination portal</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-redo"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Revaluation</h4>
                <p class="service-description">Apply for answer script revaluation</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-clipboard-check"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Hall Ticket</h4>
                <p class="service-description">Download examination hall tickets</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Results</h4>
                <p class="service-description">Check examination results and grades</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <h3 class="section-title-sm"><i class="fa-solid fa-headset"></i> Support Services</h3>
          <div class="services-grid">
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-question-circle"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Help Desk</h4>
                <p class="service-description">Get assistance with examination queries</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Contact Support</h4>
                <p class="service-description">Direct phone support for urgent matters</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">Email Support</h4>
                <p class="service-description">Send queries via email for detailed assistance</p>
              </div>
            </div>
            <div class="service-item">
              <div class="service-icon">
                <i class="fa-solid fa-book"></i>
              </div>
              <div class="service-content">
                <h4 class="service-title">User Guide</h4>
                <p class="service-description">Comprehensive guide for examination procedures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- POLICIES -->
      <section :id="tabsMap.policies" class="card-section" v-show="activeTab==='policies'">
        <div class="grid-2">
          <article class="card">
            <h2 class="section-title">
              <i class="fa-solid fa-circle-question" aria-hidden="true"></i>
              Frequently Asked Questions
            </h2>

            <div class="accordion" role="region" aria-label="Examinations FAQs">
              <div
                v-for="(item, idx) in faqs"
                :key="item.q"
                class="acc-item"
              >
                <button
                  class="acc-trigger"
                  :aria-expanded="openFaq === idx ? 'true' : 'false'"
                  :aria-controls="`faq-panel-${idx}`"
                  :id="`faq-trigger-${idx}`"
                  @click="toggleFaq(idx)"
                >
                  <span>{{ item.q }}</span>
                  <i class="fa-solid" :class="openFaq === idx ? 'fa-minus' : 'fa-plus'" aria-hidden="true"></i>
                </button>
                <div
                  class="acc-panel"
                  :id="`faq-panel-${idx}`"
                  role="region"
                  :aria-labelledby="`faq-trigger-${idx}`"
                  v-show="openFaq === idx"
                >
                  <p class="muted">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </article>

          <article class="card">
            <h2 class="section-title">
              <i class="fa-solid fa-shield-alt" aria-hidden="true"></i>
              Examination Policies
            </h2>
            <ul class="bullets">
              <li><strong>Academic Integrity</strong> — Zero tolerance for malpractices</li>
              <li><strong>Exam Scheduling</strong> — Student-friendly timing arrangements</li>
              <li><strong>Evaluation Guidelines</strong> — Transparent marking criteria</li>
              <li><strong>Appeals Process</strong> — Clear revaluation procedures</li>
              <li><strong>Attendance Policies</strong> — Minimum requirements enforcement</li>
              <li><strong>Grievance Redressal</strong> — Fair complaint resolution</li>
            </ul>
            <div class="row-actions mt-1">
              <a class="btn btn-primary" href="#" target="_blank" rel="noopener">Download Policy PDF</a>
            </div>
          </article>
        </div>
      </section>

      <!-- CONTACT -->
      <section :id="tabsMap.contact" class="card-section" v-show="activeTab==='contact'">
        <div class="card contact-card">
          <h2 class="section-title"><i class="fa-solid fa-address-book"></i> Contact Examination Office</h2>
          <div class="contact-grid">
            <div>
              <h3 class="h6">Controller of Examinations</h3>
              <p class="mb-0"><strong>{{ coe.name }}</strong></p>
              <p class="muted">{{ coe.designation }}</p>
              <p class="muted"><i class="fa-solid fa-location-dot"></i> {{ coe.location }}</p>
              <p class="muted"><i class="fa-solid fa-phone"></i> {{ coe.phone }}</p>
              <p class="muted"><i class="fa-solid fa-envelope"></i> <a :href="`mailto:${coe.email}`">{{ coe.email }}</a></p>
            </div>
            <aside class="note">
              <p class="mb-0"><i class="fa-solid fa-clock"></i> Office Hours: Mon-Fri, 9:30 AM – 5:30 PM</p>
              <p class="mb-2"><i class="fa-solid fa-building"></i> Admin Block, SSIT Campus</p>
              <a class="btn btn-soft mt-1" href="#" aria-label="Visit Office">Visit Office</a>
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
/**
 * Examination.vue
 * - Vue 3 SFC using Composition API
 * - Structured like CSE.vue with tabbed navigation
 */
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

const router = useRouter()
const route = useRoute()

/* About stats */
const aboutStats = [
  { label: 'Autonomous Status', value: 'Since 2015', icon: 'fa-solid fa-award' },
  { label: 'Programs Covered', value: '10+', icon: 'fa-solid fa-graduation-cap' },
  { label: 'Annual Examinations', value: '50+', icon: 'fa-solid fa-clipboard-check' },
  { label: 'Students Served', value: '2000+', icon: 'fa-solid fa-users' }
]

/* Tabs */
const tabs = [
  { id: 'overview', label: 'Overview', icon: 'fa-solid fa-circle-dot' },
  { id: 'coe', label: 'COE Office', icon: 'fa-solid fa-building-columns' },
  { id: 'notifications', label: 'Notifications', icon: 'fa-solid fa-bell' },
  { id: 'syllabus', label: 'Syllabus', icon: 'fa-solid fa-book' },
  { id: 'timetables', label: 'Timetables', icon: 'fa-solid fa-calendar-alt' },
  { id: 'services', label: 'Services', icon: 'fa-solid fa-cogs' },
  { id: 'policies', label: 'Policies', icon: 'fa-solid fa-shield-alt' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-address-book' }
]
const tabsMap = tabs.reduce((acc, t) => ((acc[t.id] = t.id), acc), {})

// Active tab with URL synchronization
const activeTab = ref(tabs[0].id)

const setTab = (id) => {
  activeTab.value = id
  // Update URL without page reload
  if (route.params.tab !== id) {
    router.push({ path: `/examination-branch/${id}` })
  }
}

// Initialize tab from URL on mount
onMounted(() => {
  const tabFromUrl = route.params.tab
  if (tabFromUrl && tabs.some(tab => tab.id === tabFromUrl)) {
    activeTab.value = tabFromUrl
  }
})

// Watch for URL changes and update active tab
watch(() => route.params.tab, (newTab) => {
  if (newTab && tabs.some(tab => tab.id === newTab)) {
    activeTab.value = newTab
  }
})

/* FAQ accordion data */
const faqs = [
  {
    q: 'How do I apply for revaluation or photocopy?',
    a: 'Check the revaluation notification, fill the online form, pay the prescribed fee, and submit within the stipulated deadline.'
  },
  {
    q: 'What is the procedure for backlog examinations?',
    a: 'Backlog exam schedules are announced separately. Register within the portal using your hall ticket number, then download the hall ticket before exams.'
  },
  {
    q: 'Are grace marks applicable?',
    a: 'Grace marks, if applicable, follow the college regulations as per Academic Council/University guidelines. Watch for official circulars for details.'
  },
  {
    q: 'Where can I find the exam timetable?',
    a: 'Time tables are published on the Examinations page under "Exam Time Tables" and notified via official circulars.'
  }
]

/* Accordion state */
const openFaq = ref(null)
const toggleFaq = (idx) => { openFaq.value = openFaq.value === idx ? null : idx }

/* TODO: Wire these to router or portals */
function go(section) {
  // eslint-disable-next-line no-console
  console.log(`[TODO] Navigate to ${section} page/route`)
  // Example:
  // if (section === 'notifications') router.push('/examinations/notifications')
}

/* Contact */
const coe = {
  name: 'P.Sekhar Babu',
  designation: 'Officer In-charge Examinations',
  location: 'Exam Branch, Admin Block',
  phone: '+91-87612-88888',
  email: 'exam@ssit.edu.in'
}

const lastUpdated = new Date().toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

/* Notifications */
const notifications = [
  {
    id: 1,
    title: 'December 2024 Semester End Examinations Notification',
    date: '2024-11-15',
    content: 'Semester End Examinations for December 2024 will commence from December 16, 2024. Please check your hall tickets and ensure you meet attendance requirements.',
    type: 'important',
    download: '#'
  },
  {
    id: 2,
    title: 'CBT Examination Schedule Released',
    date: '2024-11-10',
    content: 'Computer Based Test examinations for programming and practical courses have been scheduled. Students are requested to familiarize themselves with the CBT platform.',
    type: 'update',
    download: '#'
  },
  {
    id: 3,
    title: 'Supplementary Examination Applications Open',
    date: '2024-11-05',
    content: 'Supplementary examinations for failed subjects will be conducted in January 2025. Students can apply online through the examination portal.',
    type: 'notice',
    download: '#'
  }
]

/* Syllabus Data */
const syllabusFilters = {
  btech: [],
  mba: [],
  polytechnic: []
}

const btechPrograms = [
  { id: 1, name: 'Computer Science Engineering', code: 'CSE', duration: '4 Years', credits: '160', semesters: '8' },
  { id: 2, name: 'Computer Science Engineering (AI)', code: 'CSE-AI', duration: '4 Years', credits: '160', semesters: '8' },
  { id: 3, name: 'Computer Science Engineering (AI & DS)', code: 'CSE-AI&DS', duration: '4 Years', credits: '160', semesters: '8' },
  { id: 4, name: 'Electronics & Communication Engineering', code: 'ECE', duration: '4 Years', credits: '160', semesters: '8' },
  { id: 5, name: 'Electrical & Electronics Engineering', code: 'EEE', duration: '4 Years', credits: '160', semesters: '8' },
  { id: 6, name: 'Mechanical Engineering', code: 'ME', duration: '4 Years', credits: '160', semesters: '8' }
]

const mbaPrograms = [
  { id: 1, name: 'Master of Business Administration', code: 'MBA', duration: '2 Years', credits: '96', semesters: '4' }
]

const polytechnicPrograms = [
  { id: 1, name: 'Computer Engineering', code: 'CE', duration: '3 Years', credits: '120', semesters: '6' },
  { id: 2, name: 'Electronics & Communication Engineering', code: 'ECE', duration: '3 Years', credits: '120', semesters: '6' },
  { id: 3, name: 'Mechanical Engineering', code: 'ME', duration: '3 Years', credits: '120', semesters: '6' }
]

const activeSyllabusFilter = ref('all')

/* Timetables Data */
const activeTimetableFilter = ref('see')

const seeTimetable = [
  { id: 1, date: '2024-12-16', day: 'Monday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Mathematics-I', code: 'MA101', program: 'All B.Tech', hall: 'A1, A2, A3' },
  { id: 2, date: '2024-12-16', day: 'Monday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Physics', code: 'PH101', program: 'All B.Tech', hall: 'A1, A2, A3' },
  { id: 3, date: '2024-12-17', day: 'Tuesday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', hall: 'B1, B2' },
  { id: 4, date: '2024-12-17', day: 'Tuesday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', hall: 'C1, C2' },
  { id: 5, date: '2024-12-18', day: 'Wednesday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Engineering Mechanics', code: 'ME101', program: 'ME', hall: 'D1, D2' },
  { id: 6, date: '2024-12-18', day: 'Wednesday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Basic Electrical Engineering', code: 'EE101', program: 'EEE', hall: 'E1, E2' }
]

const cieTimetable = [
  { id: 1, date: '2024-12-20', day: 'Friday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Mathematics-I', code: 'MA101', program: 'All B.Tech', hall: 'A1, A2' },
  { id: 2, date: '2024-12-20', day: 'Friday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Physics', code: 'PH101', program: 'All B.Tech', hall: 'A1, A2' },
  { id: 3, date: '2024-12-21', day: 'Saturday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', hall: 'B1, B2' },
  { id: 4, date: '2024-12-21', day: 'Saturday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', hall: 'C1, C2' }
]

const supplementaryTimetable = [
  { id: 1, date: '2025-01-15', day: 'Monday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Mathematics-I', code: 'MA101', program: 'All B.Tech', hall: 'A1, A2' },
  { id: 2, date: '2025-01-15', day: 'Monday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Physics', code: 'PH101', program: 'All B.Tech', hall: 'A1, A2' },
  { id: 3, date: '2025-01-16', day: 'Tuesday', time: '10:00 AM - 1:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', hall: 'B1, B2' },
  { id: 4, date: '2025-01-16', day: 'Tuesday', time: '2:00 PM - 5:00 PM', session: 'an', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', hall: 'C1, C2' }
]

const cbtTimetable = [
  { id: 1, date: '2024-12-23', day: 'Monday', time: '10:00 AM - 12:00 PM', session: 'fn', subject: 'Programming in C', code: 'CS101', program: 'CSE', lab: 'CS Lab-1' },
  { id: 2, date: '2024-12-23', day: 'Monday', time: '2:00 PM - 4:00 PM', session: 'an', subject: 'Data Structures', code: 'CS201', program: 'CSE', lab: 'CS Lab-2' },
  { id: 3, date: '2024-12-24', day: 'Tuesday', time: '10:00 AM - 12:00 PM', session: 'fn', subject: 'Digital Electronics', code: 'EC101', program: 'ECE', lab: 'EC Lab-1' },
  { id: 4, date: '2024-12-24', day: 'Tuesday', time: '2:00 PM - 4:00 PM', session: 'an', subject: 'Microprocessors', code: 'EC201', program: 'ECE', lab: 'EC Lab-2' }
]

/* Methods */
function getTimetableTitle() {
  const titles = {
    see: 'Semester End Examinations',
    cie: 'Continuous Internal Evaluation',
    supplementary: 'Supplementary Examinations', 
    cbt: 'Computer Based Test'
  }
  return titles[activeTimetableFilter.value] || 'Timetable'
}

function getCurrentTimetable() {
  const timetables = {
    see: seeTimetable,
    cie: cieTimetable,
    supplementary: supplementaryTimetable,
    cbt: cbtTimetable
  }
  return timetables[activeTimetableFilter.value] || []
}

function setSyllabusFilter(filter) {
  activeSyllabusFilter.value = filter
}

function getSyllabusPrograms() {
  switch(activeSyllabusFilter.value) {
    case 'btech': return btechPrograms
    case 'mba': return mbaPrograms  
    case 'polytechnic': return polytechnicPrograms
    default: return [...btechPrograms, ...mbaPrograms, ...polytechnicPrograms]
  }
}

function downloadSyllabus(program) {
  console.log(`Downloading syllabus for ${program.name} (${program.code})`)
  // Implement actual download functionality
}

function setTimetableFilter(filter) {
  activeTimetableFilter.value = filter
}

function formatDate(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })
}

function getNotificationCode(type) {
  const codes = {
    important: 'IMPORTANT-001',
    update: 'UPDATE-2024',
    notice: 'NOTICE-001'
  }
  return codes[type] || 'NOTICE-001'
}

function getStatusClass(type) {
  const classes = {
    important: 'urgent',
    update: 'active', 
    notice: 'normal'
  }
  return classes[type] || 'normal'
}

function getStatusText(type) {
  const texts = {
    important: 'URGENT',
    update: 'ACTIVE',
    notice: 'NORMAL'
  }
  return texts[type] || 'NORMAL'
}

function downloadNotification(notification) {
  console.log(`Downloading notification: ${notification.title}`)
  // Implement actual download functionality
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
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem} .mt-2{margin-top:1.25rem} .mt-4{margin-top:1.5rem}
.mb-2{margin-bottom:.75rem} .h5{font-size:1.1rem} .h6{font-size:1rem}
.text-muted{color:var(--muted)} .muted{color:var(--muted)}
.lead{font-size:1.05rem; color:#000; line-height:1.6}

/* HERO */
.hero{ position:relative; color:#fff; background:var(--ink); }
.hero .overlay{ position:absolute; inset:0; background:linear-gradient(90deg,rgba(0,0,0,.15),rgba(0,0,0,.2)); }
.hero-inner{ position:relative; display:grid; grid-template-columns:1.8fr .6fr; gap:2rem; align-items:center; padding:3.2rem 0; }
.title{ font-size:2.2rem; font-weight:800; line-height:1.2 }
.tagline{ color:#dbeafe; margin:.5rem 0 1.25rem; font-weight:600 }
.quickfacts{ list-style:none; display:flex; gap:1rem; padding:0; margin:0; flex-wrap:wrap }
.quickfacts li{ background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); border-radius:.75rem; padding:.6rem .9rem; min-width:160px }
.qf-label{ display:block; font-size:.75rem; letter-spacing:.02em; opacity:.9 }
.qf-value{ font-size:1.05rem; font-weight:800 }
.hero-art .hero-img{ width:100%; max-width:350px; margin-left:auto; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,.25); object-fit:cover }

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

/* MENU GRID */
.menu-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem }
.menu-card{
  background:#fff; border:1px solid var(--border); border-radius:12px; overflow:hidden;
  box-shadow:0 8px 24px rgba(0,0,0,.06);
  transition:transform .25s ease, box-shadow .25s ease;
}
.menu-card:hover{ transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,0,0,.08) }
.card-top{ height:6px; background:linear-gradient(90deg,var(--navy),var(--orange)); }
.mc-body{ padding:1rem 1rem 1.15rem; display:flex; flex-direction:column; gap:.55rem }
.mc-icon{ font-size:1.5rem; color:var(--orange) }
.mc-title{ margin:.1rem 0 0; font-size:1.05rem; font-weight:800; color:var(--ink) }
.mc-text{ margin:0 0 .4rem; color:#334155 }

/* ACCORDION */
.accordion{ display:flex; flex-direction:column; gap:.55rem }
.acc-item{ border:1px solid var(--border); border-radius:10px; background:#fff; overflow:hidden }
.acc-trigger{
  width:100%; text-align:left; background:#fff; border:0; outline:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center;
  padding:.8rem 1rem; font-weight:700; color:#0f172a;
  transition:background .25s ease;
}
.acc-trigger:hover{ background:#f9fafb }
.acc-panel{ padding:0 1rem 1rem 1rem; border-top:1px dashed var(--border) }

/* CONTACT */
.contact-card .contact-grid{ display:grid; grid-template-columns:2fr 1fr; gap:1rem; align-items:start }
.note{ background:linear-gradient(180deg,#f8fafc,#eef4ff); border:1px dashed var(--border); border-radius:.9rem; padding:.9rem }
.last-updated{ color:var(--muted); font-size:.9rem; margin-top:.6rem }

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
.btn-sm{ 
  padding:.4rem .7rem; 
  font-size:.85rem; 
}
.row-actions{ display:flex; gap:.6rem; flex-wrap:wrap }

/* PROCESS LISTS */
.process-list{ 
  padding-left:1.5rem; 
  margin:1rem 0; 
}
.process-list li{ 
  margin:.6rem 0; 
  color:#334155; 
  line-height:1.6; 
}

/* ALERTS */
.alert{ 
  padding:1rem 1.25rem; 
  border-radius:.75rem; 
  border:1px solid transparent; 
  margin:1rem 0; 
}
.alert-info{ 
  background:#e0f2fe; 
  border-color:#0ea5e9; 
  color:#0c4a6e; 
}
.alert-warning{ 
  background:#fef3c7; 
  border-color:#f59e0b; 
  color:#92400e; 
}
.alert-danger{ 
  background:#fee2e2; 
  border-color:#ef4444; 
  color:#991b1b; 
}
.alert h5{ 
  margin-bottom:.6rem; 
  font-weight:700; 
  display:flex; 
  align-items:center; 
  gap:.5rem; 
}
.alert h5 i{ 
  font-size:1rem; 
}

/* COE SECTION ENHANCEMENTS */
.section-title-sm{ 
  font-weight:700; 
  color:var(--ink); 
  font-size:1.15rem; 
  display:flex; 
  align-items:center; 
  gap:.6rem; 
  margin-bottom:1rem; 
}
.section-title-sm i{ 
  color:var(--orange); 
  font-size:1rem; 
}
.grid-2 .card h4{ 
  font-weight:700; 
  color:var(--ink); 
  margin-bottom:.8rem; 
  display:flex; 
  align-items:center; 
  gap:.5rem; 
  font-size:1rem; 
}
.grid-2 .card h4 i{ 
  color:var(--orange); 
}
.mt-3{ margin-top:1rem; }
.mt-4{ margin-top:1.5rem; }
.mb-3{ margin-bottom:1rem; }
.mb-4{ margin-bottom:1.5rem; }
.mb-2{ margin-bottom:.75rem; }
.mb-0{ margin-bottom:0; }

/* ENHANCED COE STYLING */
.timing-section{ 
  margin-bottom:2rem; 
}
.timing-cards{ 
  display:grid; 
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); 
  gap:1rem; 
  margin-top:1rem; 
}
.timing-card{ 
  display:flex; 
  align-items:center; 
  gap:1rem; 
  padding:1rem; 
  border-radius:.75rem; 
  border:2px solid transparent; 
  transition:all 0.3s ease; 
}
.timing-card.fn{ 
  background:linear-gradient(135deg, #fff3cd, #ffeaa7); 
  border-color:#f59e0b; 
}
.timing-card.an{ 
  background:linear-gradient(135deg, #d1ecf1, #bee5eb); 
  border-color:#0ea5e9; 
}
.timing-card:hover{ 
  transform:translateY(-2px); 
  box-shadow:0 4px 12px rgba(0,0,0,.15); 
}
.timing-icon{ 
  width:50px; 
  height:50px; 
  border-radius:50%; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  font-size:1.5rem; 
}
.timing-card.fn .timing-icon{ 
  background:#f59e0b; 
  color:#fff; 
}
.timing-card.an .timing-icon{ 
  background:#0ea5e9; 
  color:#fff; 
}
.timing-label{ 
  font-weight:600; 
  color:var(--ink); 
  font-size:.9rem; 
}
.timing-slot{ 
  font-weight:700; 
  color:var(--ink); 
  font-size:1rem; 
}

.section-divider{ 
  border:none; 
  height:1px; 
  background:linear-gradient(90deg, transparent, var(--border), transparent); 
  margin:2rem 0; 
}

/* GUIDELINES STYLING */
.guidelines-section{ 
  margin:2rem 0; 
}
.guidelines-grid{ 
  display:grid; 
  grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); 
  gap:2rem; 
  margin-top:1rem; 
}
.guideline-category{ 
  background:#f8fafc; 
  border:1px solid var(--border); 
  border-radius:.75rem; 
  padding:1.5rem; 
}
.guideline-category h5{ 
  color:var(--ink); 
  font-weight:700; 
  margin-bottom:1rem; 
  display:flex; 
  align-items:center; 
  gap:.5rem; 
  font-size:1rem; 
}
.guideline-category h5 i{ 
  color:var(--orange); 
}
.guidelines-list{ 
  list-style:none; 
  padding:0; 
  margin:0; 
}
.guidelines-list li{ 
  display:flex; 
  align-items:flex-start; 
  gap:.8rem; 
  margin:.8rem 0; 
  padding:.5rem; 
  background:#fff; 
  border-radius:.5rem; 
  transition:all 0.3s ease; 
}
.guidelines-list li:hover{ 
  background:rgba(249,115,22,0.05); 
  transform:translateX(4px); 
}
.guideline-number{ 
  background:var(--orange); 
  color:#fff; 
  width:24px; 
  height:24px; 
  border-radius:50%; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  font-size:.75rem; 
  font-weight:700; 
  flex-shrink:0; 
}

/* PROHIBITED ITEMS STYLING */
.prohibited-grid{ 
  display:grid; 
  grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); 
  gap:1rem; 
  margin-top:.8rem; 
}
.prohibited-category{ 
  background:rgba(239,68,68,0.05); 
  border:1px dashed #ef4444; 
  border-radius:.5rem; 
  padding:1rem; 
}
.prohibited-category h6{ 
  color:#991b1b; 
  font-weight:600; 
  margin-bottom:.6rem; 
  display:flex; 
  align-items:center; 
  gap:.4rem; 
  font-size:.9rem; 
}
.prohibited-category h6 i{ 
  color:#ef4444; 
}
.prohibited-category ul{ 
  color:#721c24; 
  font-size:.85rem; 
}

/* NOTIFICATIONS */
.notification-item{ 
  padding:1rem; 
  border:1px solid var(--border); 
  border-radius:.75rem; 
  background:#fff; 
}
.notification-header{ 
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  margin-bottom:.6rem; 
}
.notification-header h4{ 
  margin:0; 
  color:var(--ink); 
  font-size:1.05rem; 
  font-weight:700; 
}
.notification-date{ 
  color:var(--muted); 
  font-size:.85rem; 
}
.notification-content{ 
  margin:.6rem 0; 
  color:#334155; 
  line-height:1.6; 
}
.notification-footer{ 
  display:flex; 
  justify-content:space-between; 
  align-items:center; 
  margin-top:.8rem; 
  padding-top:.8rem; 
  border-top:1px dashed var(--border); 
}
.notification-type{ 
  padding:.3rem .6rem; 
  border-radius:.4rem; 
  font-size:.75rem; 
  font-weight:600; 
}
.notification-type.important{ 
  background:#fee2e2; 
  color:#991b1b; 
}
.notification-type.update{ 
  background:#dbeafe; 
  color:#1e40af; 
}
.notification-type.notice{ 
  background:#f3f4f6; 
  color:#374151; 
}

/* TABLES */
.table-responsive{ overflow-x:auto; border-radius:.75rem; border:1px solid var(--border) }
.table-title{
  color:var(--ink);
  font-size:1.1rem;
  font-weight:700;
  margin-bottom:.8rem;
  border-left:4px solid var(--orange);
  padding-left:.8rem;
}
.syllabus-table, .timetable-table, .notifications-table{ width:100%; border-collapse:collapse; background:#fff; font-size:.9rem; }
.syllabus-table th, .timetable-table th, .notifications-table th{
  background:var(--orange);
  color:#fff;
  padding:.8rem;
  text-align:left;
  font-weight:600;
  font-size:.85rem;
}
.syllabus-table td, .timetable-table td, .notifications-table td{
  padding:.8rem;
  border-bottom:1px solid var(--border);
  vertical-align:middle;
}
.syllabus-table tr:hover, .timetable-table tr:hover, .notifications-table tr:hover{ background:var(--bg); }

/* NOTIFICATIONS TABLE SPECIFIC */
.notification-info{
  display:flex;
  flex-direction:column;
  gap:.25rem;
}
.notification-info strong{
  color:var(--ink);
  font-weight:600;
  font-size:.95rem;
  line-height:1.4;
}
.notification-info small{
  color:var(--muted);
  font-size:.8rem;
}
.notification-description{
  color:#334155;
  font-size:.9rem;
  line-height:1.5;
  max-width:300px;
  word-wrap:break-word;
}
.notification-status-badge{
  padding:.2rem .6rem;
  border-radius:.5rem;
  font-size:.75rem;
  font-weight:600;
  text-transform:uppercase;
  letter-spacing:.5px;
  display:inline-block;
}
.notification-status-badge.urgent{
  background:#fee2e2;
  color:#991b1b;
}
.notification-status-badge.active{
  background:#dbeafe;
  color:#1e40af;
}
.notification-status-badge.normal{
  background:#f3f4f6;
  color:#374151;
}
.no-download{
  color:var(--muted);
  font-size:.85rem;
}
.program-info{ display:flex; flex-direction:column; gap:.25rem; }
.program-info strong{ color:var(--ink); font-weight:600; }
.program-info small{ color:var(--muted); font-size:.8rem; }
.subject-info{ display:flex; flex-direction:column; gap:.25rem; }
.subject-info strong{ color:var(--ink); font-weight:600; }
.subject-info small{ color:var(--muted); font-size:.8rem; }
.time-slot{ 
  padding:.2rem .5rem; 
  border-radius:.3rem; 
  font-weight:500; 
  font-size:.8rem; 
  display:inline-block; 
}
.time-slot.fn{ background:#fff3cd; color:#856404; }
.time-slot.an{ background:#d1ecf1; color:#0c5460; }
.time-slot.cbt{ background:#d4edda; color:#155724; }
.download-btn{ 
  background:var(--orange); 
  color:#fff; 
  border:none; 
  padding:.4rem .8rem; 
  border-radius:.5rem; 
  cursor:pointer; 
  transition:all 0.3s ease; 
  font-size:.8rem; 
  display:flex; 
  align-items:center; 
  gap:.4rem; 
}
.download-btn:hover{ 
  background:#e55a00; 
  transform:translateY(-1px); 
}

/* FILTER CONTROLS */
.filter-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:1rem;
  flex-wrap:wrap;
}
.filter-controls{ 
  display:flex; 
  justify-content:flex-end; 
  align-items:center; 
  gap:.8rem; 
  flex-wrap:wrap; 
}
.filter-select{ 
  padding:.6rem .8rem; 
  border:2px solid var(--border); 
  border-radius:.5rem; 
  background:#fff; 
  color:var(--ink); 
  font-size:.9rem; 
  font-weight:500; 
  cursor:pointer; 
  transition:all 0.3s ease; 
  min-width:180px; 
  appearance:none; 
  background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e"); 
  background-position:right .6rem center; 
  background-repeat:no-repeat; 
  background-size:1.2em 1.2em; 
  padding-right:2rem; 
}
.filter-select:focus{ 
  outline:none; 
  border-color:var(--orange); 
  box-shadow:0 0 0 3px rgba(249,115,22,0.1); 
}
.filter-select:hover{ border-color:var(--orange); }
.filter-label{ 
  font-weight:600; 
  color:var(--ink); 
  margin:0; 
  font-size:.85rem; 
}

/* GUIDELINES GRID */
.guidelines-grid{ 
  display:grid; 
  grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); 
  gap:1.5rem; 
  margin-top:1rem; 
}
.guideline-item{ 
  background:var(--bg); 
  border:1px solid var(--border); 
  border-radius:8px; 
  padding:1.5rem; 
  text-align:center; 
  transition:all 0.3s ease;
}
.guideline-item:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.1);
}
.guideline-item h4{ 
  color:var(--ink); 
  margin-bottom:1rem; 
  font-weight:600; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  gap:.5rem; 
  font-size:1rem;
}
.guideline-item h4 i{
  color:var(--orange);
}
.guideline-item p{ 
  color:var(--muted); 
  line-height:1.6; 
  margin:0; 
}

/* SERVICES GRID */
.services-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
  gap:1.5rem;
  margin-top:1rem;
}
.service-item{
  display:flex;
  align-items:flex-start;
  gap:1rem;
  padding:1.25rem;
  background:var(--bg);
  border:1px solid var(--border);
  border-radius:.75rem;
  transition:all 0.3s ease;
  cursor:pointer;
}
.service-item:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 12px rgba(0,0,0,.1);
  border-color:var(--orange);
}
.service-icon{
  flex-shrink:0;
  width:48px;
  height:48px;
  background:var(--orange);
  border-radius:.75rem;
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:1.25rem;
}
.service-content{
  flex:1;
}
.service-title{
  color:var(--ink);
  font-size:1rem;
  font-weight:600;
  margin:0 0 .5rem 0;
  line-height:1.4;
}
.service-description{
  color:var(--muted);
  font-size:.9rem;
  line-height:1.5;
  margin:0;
}

/* RESPONSIVE */
@media (max-width: 1024px){
  .hero-inner{ grid-template-columns:1fr; }
  .hero-art .hero-img{ max-width:280px; margin:0 auto; }
}
@media (max-width: 900px){
  .menu-grid{ grid-template-columns:repeat(2,1fr) }
  .grid-2{ grid-template-columns:1fr }
  .subnav-inner{ justify-content:center }
}
@media (max-width: 768px){
  .menu-grid{ grid-template-columns:1fr }
  .quickfacts li{ min-width:140px }
  .contact-card .contact-grid{ grid-template-columns:1fr }
  .subnav-inner{ justify-content:flex-start }
   .hero-art .hero-img{ max-width:250px; }
  .guidelines-grid{
    grid-template-columns:1fr;
  }
  .services-grid{
    grid-template-columns:1fr;
    gap:1rem;
  }
  .service-item{
    padding:1rem;
  }
  .service-icon{
    width:40px;
    height:40px;
    font-size:1.1rem;
  }
  .service-title{
    font-size:.95rem;
  }
  .service-description{
    font-size:.85rem;
  }
  .process-list{ 
    padding-left:1.2rem; 
  }
  .alert{ 
    padding:.8rem 1rem; 
  }
  .grid-2 .card h4{ 
    font-size:.95rem; 
  }
  .timing-cards{ 
    grid-template-columns:1fr; 
    gap:.8rem; 
  }
  .timing-card{ 
    padding:.8rem; 
  }
  .timing-icon{ 
    width:40px; 
    height:40px; 
    font-size:1.25rem; 
  }
  .guidelines-grid{ 
    grid-template-columns:1fr; 
    gap:1rem; 
  }
  .guideline-category{ 
    padding:1rem; 
  }
  .guidelines-list li{ 
    padding:.4rem; 
    margin:.6rem 0; 
  }
   .prohibited-grid{
     grid-template-columns:1fr;
   }
   /* Notifications table mobile styles */
   .notifications-table th,
   .notifications-table td{
     padding:.75rem .5rem;
   }
   .notification-description{
     max-width:200px;
     font-size:.85rem;
   }
   .notification-status-badge{
     font-size:.7rem;
     padding:.15rem .4rem;
   }
 }
@media (max-width: 640px){
  .stats{ grid-template-columns:repeat(2,1fr) }
  .hero-art .hero-img{ max-width:200px; }
  .subnav-inner{ overflow-x:auto; padding-right:1rem; }
  .chip{ 
    font-size:.85rem; 
    padding:.5rem .8rem; 
  }
  .notification-header{ 
    flex-direction:column; 
    align-items:flex-start; 
    gap:.4rem; 
  }
  .notification-footer{ 
    flex-direction:column; 
    align-items:flex-start; 
    gap:.5rem; 
  }
  .filter-header{
    flex-direction:column;
    align-items:stretch;
    gap:.8rem;
  }
  .filter-controls{ 
    flex-direction:column; 
    align-items:stretch; 
  }
  .filter-select{ 
    min-width:100%; 
  }
  .syllabus-table td, .timetable-table td{ 
    padding:.6rem .4rem; 
  }
}
</style>