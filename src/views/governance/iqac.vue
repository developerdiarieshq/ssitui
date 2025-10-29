<template>
  <section class="page-bg">
    <!-- HEADER / NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero text-center text-white py-5">
      <div class="container">
        <h1 class="display-5 fw-bold">Internal Quality Assurance Cell (IQAC)</h1>
        <p class="lead">Catalyzing Quality Enhancement and Sustenance</p>
        <div class="d-flex flex-wrap justify-content-center gap-4 mt-4">
          <div class="stat-card">
            <div class="stat-number">2015</div>
            <div class="stat-label">Established</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">B+ Grade</div>
            <div class="stat-label">NAAC Accreditation</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">50+</div>
            <div class="stat-label">Quality Initiatives</div>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container py-5">
      <!-- NAVIGATION TABS -->
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
      <!-- IQAC HOME TAB -->
      <section v-show="activeTab === 'home'" class="card-section">
      <!-- ABOUT -->
        <div class="card mb-4">
          <div class="card-body">
        <h2 class="section-title">About IQAC</h2>
        <p>
              The college has established the Internal Quality Assurance Cell (IQAC) as per the NAAC guidelines with the following functions:
        </p>
        <div class="row g-4 mt-3">
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold text-primary">Mission</h5>
              <p>
                To develop a system for conscious, consistent and catalytic
                improvement in the overall performance of the institution.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h5 class="fw-bold text-primary">Vision</h5>
              <p>
                To promote quality culture as the prime concern through
                institutionalizing and internalizing quality-enhancing
                initiatives.
              </p>
            </div>
          </div>
        </div>
          </div>
        </div>

        <!-- FUNCTIONS -->
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">IQAC Functions</h2>
            <p class="mb-4">Some of the functions expected of the IQAC are:</p>
            <div class="row g-4">
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-chart-line me-2"></i>Quality Benchmarks
                  </h6>
                  <p class="small mb-0">Development and application of quality benchmarks/parameters for various academic and administrative activities of the institution</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-graduation-cap me-2"></i>Learner-Centric Environment
                  </h6>
                  <p class="small mb-0">Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-comments me-2"></i>Feedback Response
                  </h6>
                  <p class="small mb-0">Arrangement for feedback response from students, parents and other stakeholders on quality-related institutional processes</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-bullhorn me-2"></i>Information Dissemination
                  </h6>
                  <p class="small mb-0">Dissemination of information on various quality parameters of higher education</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-users me-2"></i>Workshops & Seminars
                  </h6>
                  <p class="small mb-0">Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-file-alt me-2"></i>Documentation
                  </h6>
                  <p class="small mb-0">Documentation of the various programmes/activities leading to quality improvement</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-network-wired me-2"></i>Nodal Agency
                  </h6>
                  <p class="small mb-0">Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-database me-2"></i>Institutional Database
                  </h6>
                  <p class="small mb-0">Development and maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-star me-2"></i>Quality Culture
                  </h6>
                  <p class="small mb-0">Development of Quality Culture in the institution</p>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-clipboard-list me-2"></i>AQAR Preparation
                  </h6>
                  <p class="small mb-0">Preparation of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC, to be submitted to NAAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- STRATEGIES -->
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">IQAC Strategies</h2>
            <p class="mb-4">IQAC shall evolve mechanisms and procedures for:</p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-tasks me-2"></i>Performance Enhancement
                  </h6>
                  <p class="small mb-0">Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-microscope me-2"></i>Academic Quality
                  </h6>
                  <p class="small mb-0">The relevance and quality of academic and research programmes</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-balance-scale me-2"></i>Equitable Access
                  </h6>
                  <p class="small mb-0">Equitable access to and affordability of academic programmes for various sections of society</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-laptop me-2"></i>Modern Teaching Methods
                  </h6>
                  <p class="small mb-0">Optimization and integration of modern methods of teaching and learning</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-check-circle me-2"></i>Evaluation Credibility
                  </h6>
                  <p class="small mb-0">The credibility of evaluation procedures</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-cogs me-2"></i>Support Structure
                  </h6>
                  <p class="small mb-0">Ensuring the adequacy, maintenance and functioning of the support structure and services</p>
                </div>
              </div>
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
                  <h6 class="fw-bold text-primary mb-3">
                    <i class="fa-solid fa-handshake me-2"></i>Research Sharing
                  </h6>
                  <p class="small mb-0">Research sharing and networking with other institutions in India and abroad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- METRICS -->
        <div class="card mb-4">
          <div class="card-body text-center">
            <h2 class="section-title">Quality Metrics Dashboard</h2>
            <div class="d-flex flex-wrap justify-content-center gap-4 mt-4">
              <div class="metric-card">
                <div class="metric-value">87%</div>
                <div class="metric-label">Student Satisfaction</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">60+</div>
                <div class="metric-label">Faculty Development Programs</div>
              </div>
              <div class="metric-card">
                <div class="metric-value">75%</div>
                <div class="metric-label">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>

        <!-- CERTIFICATIONS -->
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">Certifications & Accreditations</h2>
            <div class="row g-4 mt-2">
              <div class="col-md-6">
                <div class="elev-card p-4 h-100 text-center">
                  <div class="certification-icon mb-3">
                    <i class="fa-solid fa-certificate text-primary" style="font-size: 3rem;"></i>
                  </div>
                  <h5 class="fw-bold text-primary mb-3">ISO Certification</h5>
                  <p class="text-muted mb-3">Our institution maintains ISO certification standards ensuring quality management systems across all operations.</p>
                  <div class="d-flex gap-2">
                    <button @click="openPdfModal({filename: 'iso.pdf', title: 'ISO Certification'})" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-eye me-2"></i>View
                    </button>
                    <a :href="getPdfUrl('iso.pdf')" target="_blank" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-download me-2"></i>Download
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="elev-card p-4 h-100 text-center">
                  <div class="certification-icon mb-3">
                    <i class="fa-solid fa-award text-primary" style="font-size: 3rem;"></i>
                  </div>
                  <h5 class="fw-bold text-primary mb-3">NAAC Accreditation</h5>
                  <p class="text-muted mb-3">Accredited by NAAC with B+ Grade, demonstrating our commitment to quality education and institutional excellence.</p>
                  <div class="d-flex gap-2">
                    <button @click="openPdfModal({filename: 'naac_cer.pdf', title: 'NAAC Accreditation Certificate'})" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-eye me-2"></i>View
                    </button>
                    <a :href="getPdfUrl('naac_cer.pdf')" target="_blank" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-download me-2"></i>Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTACT -->
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">Contact IQAC</h2>
            <div class="elev-card p-4">
              <p><strong>Coordinator:</strong> Mr. K Rama Krishna Prasad</p>
              <p><strong>Co-Coordinator:</strong> Mr. Ch.Balakrishna</p>
              <p><i class="fa-solid fa-envelope text-primary"></i> ramakrishna.pe@gmail.com</p>
              <p><i class="fa-solid fa-phone text-success"></i> 9154645060</p>
              <a href="#" class="btn btn-primary mt-2">Submit Feedback</a>
            </div>
          </div>
        </div>
      </section>

      <!-- IQAC MEMBERS TAB -->
      <section v-show="activeTab === 'members'" class="card-section">
        <div class="card mb-4">
          <div class="card-body">
        <h2 class="section-title">IQAC Composition</h2>
        <div class="row g-4 mt-3">
          <div v-for="m in team" :key="m.name" class="col-6 col-md-4 col-lg-3">
            <div class="elev-card text-center p-3 h-100">
              <div class="fw-bold text-primary">{{ m.name }}</div>
              <div class="small text-muted">{{ m.role }}</div>
              <div v-if="m.contact" class="small mt-1">
                <i class="fa-solid fa-phone text-success"></i> {{ m.contact }}
              </div>
              <div v-if="m.email" class="small">
                <i class="fa-solid fa-envelope text-danger"></i>
                <a :href="'mailto:' + m.email">{{ m.email }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- IQAC MEETINGS TAB -->
      <section v-show="activeTab === 'meetings'" class="card-section">
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">IQAC Meeting Minutes & Records</h2>
            <p class="text-muted mb-4">Access meeting minutes and records of IQAC sessions by academic year</p>
            
            <div class="row g-4">
              <div v-for="meeting in meetings" :key="meeting.year" class="col-md-6 col-lg-4">
            <div class="elev-card p-4 h-100">
                  <div class="d-flex align-items-center mb-3">
                    <i class="fa-solid fa-calendar-alt text-primary me-3" style="font-size: 1.5rem;"></i>
                    <div>
                      <h6 class="fw-bold mb-0">{{ meeting.year }}</h6>
                      <small class="text-muted">Academic Year</small>
                    </div>
                  </div>
                  <p class="text-muted mb-3">IQAC meeting minutes and decisions for {{ meeting.year }}</p>
                  <div class="d-flex gap-2">
                    <button @click="openPdfModal(meeting)" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-eye me-2"></i>View
                    </button>
                    <a :href="getPdfUrl(meeting.filename)" target="_blank" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-download me-2"></i>Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- INITIATIVES TAB -->
      <section v-show="activeTab === 'initiatives'" class="card-section">
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">Quality Initiatives & Best Practices</h2>
            <p class="text-muted mb-4">IQAC initiatives for promoting Quality Culture by academic year</p>
            
            <div class="row g-4">
              <div v-for="initiative in initiatives" :key="initiative.year" class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <div class="d-flex align-items-center mb-3">
                    <i class="fa-solid fa-lightbulb text-primary me-3" style="font-size: 1.5rem;"></i>
                    <div>
                      <h6 class="fw-bold mb-0">{{ initiative.year }}</h6>
                      <small class="text-muted">Academic Year</small>
                    </div>
                  </div>
                  <h6 class="fw-bold text-primary mb-3">{{ initiative.title }}</h6>
                  <ul class="small mb-0">
                    <li v-for="point in initiative.points" :key="point" class="mb-1">{{ point }}</li>
                  </ul>
                </div>
          </div>
          </div>
          </div>
        </div>
      </section>

      <!-- ANNUAL REPORTS TAB -->
      <section v-show="activeTab === 'reports'" class="card-section">
        <div class="card mb-4">
          <div class="card-body">
            <h2 class="section-title">Annual Reports of AQAR</h2>
            <p class="text-muted mb-4">Annual Quality Assurance Reports detailing institutional progress and achievements</p>
            
            <!-- AQAR Information -->
            <div class="elev-card p-4 mb-4">
              <h5 class="fw-bold text-primary mb-3">
                <i class="fa-solid fa-info-circle me-2"></i>About AQAR
              </h5>
              <p class="mb-3">
                The Annual Quality Assurance Report (AQAR) is a self-reviewed progress report on the following criteria:
              </p>
              <div class="row g-3">
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – I</h6>
                    <p class="small mb-0">Curricular Aspects</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – II</h6>
                    <p class="small mb-0">Teaching, Learning and Evaluation</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – III</h6>
                    <p class="small mb-0">Research, Consultancy and Extension</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – IV</h6>
                    <p class="small mb-0">Infrastructure and Learning Resources</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – V</h6>
                    <p class="small mb-0">Student Support and Progression</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – VI</h6>
                    <p class="small mb-0">Governance, Leadership and Management</p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-4">
                  <div class="criteria-item">
                    <h6 class="fw-bold text-primary">Criterion – VII</h6>
                    <p class="small mb-0">Innovations and Best Practices</p>
                  </div>
                </div>
              </div>
              <div class="mt-3 p-3 bg-light rounded">
                <p class="small mb-0">
                  <strong>Purpose:</strong> The report details tangible results achieved in key areas, specifically identified by the institutional IQAC at the beginning of the academic year. The AQAR details the results of the perspective plan worked out by the IQAC.
                </p>
              </div>
            </div>

            <!-- Available AQAR Reports -->
            <h5 class="fw-bold mb-3">
              <i class="fa-solid fa-file-alt me-2"></i>Available AQAR Reports
            </h5>
            <div class="row g-4">
              <div v-for="report in aqarReports" :key="report.year" class="col-md-6 col-lg-4">
                <div class="elev-card p-4 h-100">
                  <div class="d-flex align-items-center mb-3">
                    <i class="fa-solid fa-file-pdf text-primary me-3" style="font-size: 1.5rem;"></i>
                    <div>
                      <h6 class="fw-bold mb-0">{{ report.year }}</h6>
                      <small class="text-muted">Academic Year</small>
                    </div>
                  </div>
                  <p class="text-muted mb-3">Annual Quality Assurance Report for {{ report.year }}</p>
                  <div class="d-flex gap-2">
                    <button @click="openPdfModal(report)" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-eye me-2"></i>View
                    </button>
                    <a :href="getPdfUrl(report.filename)" target="_blank" class="btn btn-outline-primary flex-fill">
                      <i class="fa-solid fa-download me-2"></i>Download
            </a>
          </div>
                </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
    
    <!-- PDF Viewer Modal -->
    <PdfViewer 
      :show="showPdfModal" 
      :url="currentPdfUrl" 
      :title="currentPdfTitle"
      @close="closePdfModal"
    />
  </section>
</template>

<script>
import Header from "../../components/Header.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";
import PdfViewer from '../utils/PdfViewer.vue';

// Import PDF files to ensure they're included in the build
import isoPdf from '@/assets/docs/iqac/iso.pdf'
import naacPdf from '@/assets/docs/iqac/naac_cer.pdf'
import aqar2021 from '@/assets/docs/aqar/AQAR20-21.pdf'
import aqar2020 from '@/assets/docs/aqar/AQAR19-20.pdf'
import aqar2019 from '@/assets/docs/aqar/AQAR18-19.pdf'
import aqar2018 from '@/assets/docs/aqar/AQAR17-18.pdf'
import meeting2023 from '@/assets/docs/iqac/2022-2023.pdf'
import meeting2022 from '@/assets/docs/iqac/2021-2022.pdf'
import meeting2021 from '@/assets/docs/iqac/2020-2021.pdf'
import meeting2020 from '@/assets/docs/iqac/2019-2020.pdf'
import meeting2019 from '@/assets/docs/iqac/2018-2019.pdf'

export default {
  name: "Iqac",
  components: { Header, NavBar, Footer, PdfViewer },
  data() {
    return {
      activeTab: 'home',
      tabs: [
        { id: 'home', label: 'IQAC Home', icon: 'fa-solid fa-home' },
        { id: 'members', label: 'IQAC Members', icon: 'fa-solid fa-users' },
        { id: 'meetings', label: 'IQAC Meetings', icon: 'fa-solid fa-calendar-alt' },
        { id: 'initiatives', label: 'Initiatives', icon: 'fa-solid fa-lightbulb' },
        { id: 'reports', label: 'Annual Reports of AQAR', icon: 'fa-solid fa-file-alt' }
      ],
      team: [
        { name: "Dr.V.S.R Kumari", role: "Chair Person" },
        { name: "Mr. K Rama Krishna Prasad", role: "Coordinator", email: "ramakrishna.pe@gmail.com", contact: "9154645060" },
        { name: "Mr. Ch.Balakrishna", role: "Co-Coordinator" },
        { name: "Mr. K. V. Jawahar", role: "Member" },
        { name: "Dr. K. Bhaskar Muthyalu", role: "Member" },
        { name: "Dr. P. Sekhar Babu", role: "Member" },
        { name: "Dr.Sk. Yakoob", role: "Member" },
        { name: "Dr. Sk. Meera saheb", role: "Member" },
        { name: "Dr. D.N.V.Krishna Reddy", role: "Member" },
        { name: "Mr. G. Upendra", role: "Member" },
        { name: "Mr. G. Rajendar Reddy", role: "Member" }
      ],
      meetings: [
        { year: "2022-2023", filename: "2022-2023.pdf" },
        { year: "2021-2022", filename: "2021-2022.pdf" },
        { year: "2020-2021", filename: "2020-2021.pdf" },
        { year: "2019-2020", filename: "2019-2020.pdf" },
        { year: "2018-2019", filename: "2018-2019.pdf" }
      ],
      aqarReports: [
        { year: "2020-21", filename: "AQAR20-21.pdf" },
        { year: "2019-20", filename: "AQAR19-20.pdf" },
        { year: "2018-19", filename: "AQAR18-19.pdf" },
        { year: "2017-18", filename: "AQAR17-18.pdf" }
      ],
      // PDF Viewer state
      showPdfModal: false,
      currentPdfUrl: '',
      currentPdfTitle: '',
      initiatives: [
        {
          year: "2020-21",
          title: "Quality Initiatives 2020-21",
          points: [
            "Preparation of Annual Report (AQAR)",
            "Conducting Academic Audit Review to improve quality",
            "Collecting Feedback from students and analysed to improve standards",
            "Review of PBAS"
          ]
        },
        {
          year: "2019-20",
          title: "Quality Initiatives 2019-20",
          points: [
            "Preparation of Annual Report (AQAR)",
            "NPTEL programs for staff & students",
            "MOU with Code Tantra for online classes during COVID-19",
            "Training program on soft skills and Technical skills by TASK",
            "Participation in National Integrity Program of EBSB",
            "Alumni Identification and their diplomatic involvement for social activities"
          ]
        },
        {
          year: "2018-19",
          title: "Quality Initiatives 2018-19",
          points: [
            "Conducting Academic Audit Review to improve quality",
            "Preparation of Annual Report (AQAR)",
            "Encouraging faculty to register for Ph.D.",
            "Establishment of ELITE club to improve communication skills",
            "Best practices implementation"
          ]
        },
        {
          year: "2017-18",
          title: "Quality Initiatives 2017-18",
          points: [
            "Focused on CRT to improve placements",
            "Collecting Feedback from students and analysed to improve standards",
            "Conducting Academic Audit Review to improve quality",
            "Review of PBAS",
            "Preparation of Annual Report (AQAR)"
          ]
        },
        {
          year: "2016-17",
          title: "Quality Initiatives 2016-17",
          points: [
            "Conducting Academic Audit Review to improve quality",
            "Best practices implementation",
            "Conducting Academic Audit Review to improve quality",
            "Collecting Feedback from students and analysed to improve standards",
            "Instructed TPO to conduct training program to get better placements",
            "Preparation of Annual Report (AQAR)"
          ]
        }
      ],
    };
  },
  methods: {
    setTab(tab) {
      this.activeTab = tab;
    },
    getPdfUrl(filename) {
      if (!filename) {
        console.error('Filename is undefined or empty');
        return '';
      }
      
      // Use imported PDF URLs for reliable asset loading
      const pdfMap = {
        'iso.pdf': isoPdf,
        'naac_cer.pdf': naacPdf,
        'AQAR20-21.pdf': aqar2021,
        'AQAR19-20.pdf': aqar2020,
        'AQAR18-19.pdf': aqar2019,
        'AQAR17-18.pdf': aqar2018,
        '2022-2023.pdf': meeting2023,
        '2021-2022.pdf': meeting2022,
        '2020-2021.pdf': meeting2021,
        '2019-2020.pdf': meeting2020,
        '2018-2019.pdf': meeting2019
      };
      
      return pdfMap[filename] || '';
    },
    openPdfModal(item) {
      if (!item.filename) {
        console.error('Item filename is missing:', item);
        return;
      }
      
      this.showPdfModal = true;
      this.currentPdfUrl = this.getPdfUrl(item.filename);
      
      // Determine title based on item type
      if (item.title) {
        this.currentPdfTitle = item.title;
      } else if (item.year && item.filename.startsWith('AQAR')) {
        this.currentPdfTitle = `AQAR Report - ${item.year}`;
      } else if (item.year) {
        this.currentPdfTitle = `IQAC Meeting Minutes - ${item.year}`;
      } else {
        this.currentPdfTitle = 'Document';
      }
    },
    closePdfModal() {
      this.showPdfModal = false;
      this.currentPdfUrl = '';
      this.currentPdfTitle = '';
    }
  }
};
</script>

<style scoped>
/* Theme Variables */
:root {
  --orange: #f97316;
  --ink: #111827;
  --muted: #6b7280;
}

.page-bg { 
  background: linear-gradient(180deg, #fff 0%, #f7f9fc 100%); 
}

.hero { 
  background: var(--ink);
  padding: 3rem 0;
}

.hero h1 {
  color: #fff;
  margin-bottom: 1rem;
}

.hero .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: #fff; 
  border-radius: 12px; 
  padding: 1rem 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,.1); 
  min-width: 160px;
  border: 1px solid rgba(249, 115, 22, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.2);
  border-color: var(--orange);
}

.stat-number { 
  font-size: 1.5rem; 
  font-weight: bold; 
  color: var(--orange); 
}

.stat-label { 
  font-size: 0.85rem; 
  color: #555; 
}

.section-title { 
  font-weight: 700; 
  color: var(--ink); 
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 24px;
  background: var(--orange);
  border-radius: 2px;
}

.elev-card { 
  background: #fff; 
  border-radius: 10px; 
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(249, 115, 22, 0.1);
}

.elev-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,0,0,.12);
  border-color: var(--orange);
}

.elev-card h5 {
  color: var(--orange) !important;
}

.text-primary {
  color: var(--orange) !important;
}

.metric-card {
  background: #fff; 
  border-radius: 10px; 
  padding: 1.5rem; 
  min-width: 180px;
  box-shadow: 0 4px 16px rgba(0,0,0,.08); 
  transition: all 0.3s ease;
  border: 1px solid rgba(249, 115, 22, 0.15);
}

.metric-card:hover { 
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.25);
  border-color: var(--orange);
}

.metric-value { 
  font-size: 1.75rem; 
  font-weight: bold; 
  color: var(--orange); 
}

.metric-label { 
  font-size: 0.9rem; 
  color: #555; 
}

a.btn { 
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-primary {
  border-color: var(--orange);
  color: var(--orange);
}

.btn-outline-primary:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.btn-primary {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
}

.btn-primary:hover {
  background: #e55a00;
  border-color: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

/* Document Cards */
.document-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  background: #fff;
  border: 2px solid rgba(249, 115, 22, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: var(--ink);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  height: 100%;
  min-height: 140px;
}

.document-card:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.3);
}

.document-card i {
  font-size: 2.5rem;
  color: var(--orange);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.document-card:hover i {
  color: #fff;
  transform: scale(1.1);
}

.document-card span {
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  line-height: 1.4;
}

/* Icon Colors */
.text-success {
  color: #22c55e !important;
}

.text-danger {
  color: #ef4444 !important;
}

/* STICKY SUB NAV */
.subnav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 2rem;
}

.subnav-inner {
  display: flex;
  gap: .5rem;
  padding: .6rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.subnav-inner::-webkit-scrollbar {
  display: none;
}

.chip {
  border: 1px solid var(--border);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: .5rem .9rem;
  font-size: .9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-color: #e5e7eb;
}

.chip i {
  color: var(--orange);
}

.chip:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.chip:hover i {
  color: #fff;
}

.chip.active {
  border-color: var(--orange);
  background: var(--orange);
  color: #fff;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
}

.chip.active i {
  color: #fff;
}

.card-section {
  animation: fadeIn 0.3s ease-in-out;
}

/* Criteria Items */
.criteria-item {
  padding: 0.75rem;
  background: rgba(249, 115, 22, 0.05);
  border-left: 4px solid var(--orange);
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.criteria-item:hover {
  background: rgba(249, 115, 22, 0.1);
  transform: translateX(4px);
}

.criteria-item h6 {
  margin-bottom: 0.25rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .subnav-inner {
    padding: .5rem 0;
    gap: .3rem;
  }
  
  .chip {
    padding: .4rem .7rem;
    font-size: .85rem;
  }
}
</style>
