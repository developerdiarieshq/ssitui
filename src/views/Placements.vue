<template>
  <div class="placements-page">
    <!-- Header -->
    <Header />
    <NavBar />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="container">
        <div class="hero-inner">
          <div class="hero-content">
            <h1 class="title">Placements</h1>
            <p class="tagline">Connecting talent with opportunity</p>
            <ul class="quickfacts">
              <li>
                <span class="qf-label">Placement Rate</span>
                <span class="qf-value">92%</span>
              </li>
              <li>
                <span class="qf-label">Highest Package</span>
                <span class="qf-value">₹18 LPA</span>
              </li>
              <li>
                <span class="qf-label">Companies Visited</span>
                <span class="qf-value">150+</span>
              </li>
            </ul>
          </div>
          <div class="hero-art">
            <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600" alt="Placements" class="hero-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- STICKY SUB NAV -->
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

    <!-- Content -->
    <main class="container content" id="content">
      <!-- Overview Section -->
      <section :id="tabsMap.overview" class="card-section" v-show="activeTab==='overview'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-chart-line"></i> Overview</h2>
          <p class="lead">
            Our placement cell works tirelessly to connect our talented students with leading companies across various industries. 
            We maintain strong relationships with top-tier organizations to ensure excellent career opportunities for our graduates.
          </p>
          <div class="stats">
            <div class="stat">
              <i class="fa-solid fa-percentage"></i>
              <div>
                <div class="num">92%</div>
                <div class="label">Placement Rate</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-trophy"></i>
              <div>
                <div class="num">₹18 LPA</div>
                <div class="label">Highest Package</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-chart-bar"></i>
              <div>
                <div class="num">₹6.8 LPA</div>
                <div class="label">Average Package</div>
              </div>
            </div>
            <div class="stat">
              <i class="fa-solid fa-building"></i>
              <div>
                <div class="num">150+</div>
                <div class="label">Companies Visited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Top Companies Section -->
      <section :id="tabsMap.companies" class="card-section" v-show="activeTab==='companies'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-building"></i> Our Top Companies</h2>
          <div class="grid-3">
            <div v-for="company in topCompanies" :key="company.name" class="company-card">
              <div class="company-logo">
                <img :src="company.logo" :alt="company.name" />
              </div>
              <div class="company-info">
                <h3 class="company-name">{{ company.name }}</h3>
                <p class="company-category">{{ company.category }}</p>
                <div class="company-stats">
                  <span class="badge">{{ company.offers }} offers</span>
                  <span class="badge">₹{{ company.avgPackage }} LPA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Year-wise Records Section -->
      <section :id="tabsMap.records" class="card-section" v-show="activeTab==='records'">
        <div class="card">
          <div class="records-header">
          <h2 class="section-title"><i class="fa-solid fa-trophy"></i> Placement Records</h2>
            <div class="year-selector">
              <label for="yearSelect" class="year-label">
                <i class="fa-solid fa-calendar"></i>
                Select Academic Year:
              </label>
              <select 
                id="yearSelect"
                v-model="selectedYear" 
                class="year-select"
              >
                <option 
              v-for="year in years" 
              :key="year"
                  :value="year"
            >
              {{ year }}
                </option>
              </select>
            </div>
          </div>
          
          <div class="year-content">
            <div v-for="record in currentYearRecord" :key="record.year" class="record-card">
              <h3 class="section-title-sm"><i class="fa-solid fa-chart-line"></i> {{ record.year }} Placement Statistics</h3>
              
              <!-- Summary Stats -->
              <div class="stats">
                <div class="stat">
                  <i class="fa-solid fa-briefcase"></i>
                  <div>
                    <div class="num">{{ record.jobOffers }}</div>
                    <div class="label">Job Offers</div>
                  </div>
                </div>
                <div class="stat">
                  <i class="fa-solid fa-building"></i>
                  <div>
                    <div class="num">{{ record.companiesVisited }}</div>
                    <div class="label">Companies Visited</div>
                  </div>
                </div>
                <div class="stat">
                  <i class="fa-solid fa-rupee-sign"></i>
                  <div>
                    <div class="num">₹{{ record.highestSalaries }} LPA</div>
                    <div class="label">Highest Salaries</div>
                  </div>
                </div>
              </div>

              <!-- Branch-wise Statistics -->
              <div class="branch-stats">
                <h4 class="branch-title"><i class="fa-solid fa-graduation-cap"></i> Branch-wise Placements</h4>
                <div class="branch-grid">
                  <div v-for="(count, branch) in record.branchStats" :key="branch" class="branch-stat">
                    <div class="branch-name">{{ branch }}</div>
                    <div class="branch-count">{{ count }}</div>
                  </div>
                </div>
              </div>

              <!-- Detailed Company Placements -->
              <div class="company-placements">
                <h4 class="company-title"><i class="fa-solid fa-building"></i> Company-wise Placements</h4>
                <div class="placements-table-container">
                  <table class="placements-table">
                    <thead>
                      <tr>
                        <th>Branch</th>
                        <th>Company Name</th>
                        <th>Students Placed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="placement in record.placements" :key="`${placement.branch}-${placement.company}`">
                        <td>
                          <span class="branch-badge" :class="`branch-${placement.branch.toLowerCase()}`">
                            {{ placement.branch }}
                          </span>
                        </td>
                        <td class="company-name-cell">{{ placement.company }}</td>
                        <td class="students-count">{{ placement.students }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Recruiters Section -->
      <section :id="tabsMap.recruiters" class="card-section" v-show="activeTab==='recruiters'">
        <div class="card">
          <div class="recruiters-header">
            <h2 class="section-title"><i class="fa-solid fa-handshake"></i> 2014-2021 Placement Recruiters</h2>
            <div class="branch-filter">
              <label for="branchSelect" class="branch-label">
                <i class="fa-solid fa-filter"></i>
                Filter by Branch:
              </label>
              <select 
                id="branchSelect"
                v-model="selectedBranch" 
                class="branch-select"
              >
                <option 
                  v-for="branch in branchOptions" 
                  :key="branch" 
                  :value="branch"
                >
                  {{ branch }}
                </option>
              </select>
            </div>
            <div class="view-controls">
              <button 
                @click="viewMode = 'grid'"
                :class="['view-btn', { active: viewMode === 'grid' }]"
                title="Grid View"
              >
                <i class="fa-solid fa-th"></i>
              </button>
              <button 
                @click="viewMode = 'list'"
                :class="['view-btn', { active: viewMode === 'list' }]"
                title="List View"
              >
                <i class="fa-solid fa-list"></i>
              </button>
            </div>
          </div>
          
          <div class="recruiters-content">
            <div class="recruiters-summary">
              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fa-solid fa-building"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-number">{{ filteredRecruiters.length }}</div>
                  <div class="summary-label">Companies for {{ selectedBranch }}</div>
                </div>
              </div>
              <div class="summary-card">
                <div class="summary-icon">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div class="summary-info">
                  <div class="summary-number">{{ Object.values(recruitersData).flat().length }}</div>
                  <div class="summary-label">Total Companies</div>
                </div>
              </div>
            </div>
            
            <div 
              :class="viewMode === 'grid' ? 'recruiters-grid' : 'recruiters-list'"
            >
              <div 
                v-for="(item, index) in filteredRecruiters" 
                :key="index" 
                :class="viewMode === 'grid' ? 'recruiter-card' : 'recruiter-list-item'"
              >
                <div class="recruiter-info">
                  <div class="company-name">{{ item.company }}</div>
                  <div class="branch-badge" :class="`branch-${item.branch.toLowerCase()}`">
                    {{ item.branch }}
                  </div>
                </div>
                <div class="recruiter-icon">
                  <i class="fa-solid fa-handshake"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Placement Team Section -->
      <section :id="tabsMap.team" class="card-section" v-show="activeTab==='team'">
        <div class="card">
          <h2 class="section-title"><i class="fa-solid fa-users"></i> Placement Team</h2>
          <div class="placement-team">
            <div class="team-member">
              <div class="member-info">
                <h3 class="member-name">Dr D N V KRISHNA REDDY</h3>
                <p class="member-designation">HOD-MBA, Training and Placement Officer</p>
                <div class="member-contact">
                  <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <span>tpo@saisurthi.ac.in</span>
                  </div>
                  <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <span>+91 9951006189</span>
                  </div>
                </div>
              </div>
              <div class="member-photo">
                <img src="/src/assets/departments/placements/tpo.jpeg" alt="Dr D N V Krishna Reddy" />
              </div>
            </div>
          </div>
          
          <div class="placement-message">
            <h3 class="message-title"><i class="fa-solid fa-quote-left"></i> Message from the Placement Office</h3>
            <div class="message-content">
              <p>
                SSIT is one of the best institutions in Khammam dist, specializing in areas such as Computer Science, AI and ML Electronics and Communication Engineering, Electrical and Electronics Engineering and mechanical engineering. The institute boasts of an impressive faculty profile and a deeply ingrained culture of research and academic excellence.
              </p>
              <p>
                Students of SSIT fondly cherish the work ethic and a transparent, informal and culturally rich atmosphere. Academically the emphasis at SSIT has always been on ensuring that the students get a sound conceptual foundation, excellent programming skills and on enabling them with higher order problem solving skills. This helps them to live up to the rather demanding expectations of real-world problems.
              </p>
              <p>
                We welcome you to our campus for the placement recruitment. We believe that you will find several suitable candidates from our multi-faceted talent pool and we assure the hiring process at our campus will be a pleasant experience. Our talented students will definitely make you proud as fellow colleagues.
              </p>
            </div>
            
            <div class="contact-info">
              <h4 class="contact-title"><i class="fa-solid fa-handshake"></i> For Recruiters</h4>
              <p class="contact-text">
                If you have any queries or wish to recruit from SSIT please write to The Placement Office at 
                <strong>tpo@saisurthi.ac.in</strong> with a cc to <strong>saisurthi@gmail.com</strong>
              </p>
              <div class="contact-actions">
                <a href="mailto:tpo@saisurthi.ac.in" class="contact-btn">
                  <i class="fa-solid fa-envelope"></i>
                  Contact Placement Office
                </a>
                <a href="tel:+919951006189" class="contact-btn">
                  <i class="fa-solid fa-phone"></i>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Student Success Stories -->
      <section :id="tabsMap.stories" class="card-section" v-show="activeTab==='stories'">
        <div class="card">
          <!-- Header -->
          <div class="stories-page-header mb-4">
            <h2 class="section-title">
              <i class="fa-solid fa-star"></i>
              Success Stories
            </h2>
            
            <!-- Year Selector -->
            <div class="year-filter">
              <label class="year-label mb-2">Select Academic Year:</label>
              <select v-model="selectedStoriesYear" class="year-select">
                <option v-for="year in storiesYears" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
          </div>
          
          <!-- Stories Grid -->
          <div class="simple-stories-grid">
            <div v-for="student in filteredSuccessStories" :key="student.id" class="simple-story-card">
              <div class="story-badge">
                <i class="fa-solid fa-trophy"></i>
              </div>
              
              <div class="story-header">
                <div class="story-avatar">
                  <img v-if="student.image" :src="student.image" :alt="student.name" />
                  <div v-else class="avatar-placeholder">
                    <i class="fa-solid fa-user"></i>
                  </div>
                </div>
                <div class="story-info">
                  <h4 class="story-name">{{ student.name }}</h4>
                  <p class="story-branch">{{ student.branch }}</p>
                </div>
              </div>
              
              <div class="story-company">
                <div class="company-logo-small">
                  <img :src="student.companyLogo" :alt="student.company" />
                </div>
                <div class="company-info">
                  <h5 class="company-name-small">{{ student.company }}</h5>
                  <p class="company-role">{{ student.companyType }}</p>
                </div>
              </div>
              
              <div class="story-package">
                <span class="package-text">₹{{ student.package }} LPA</span>
              </div>
              
              <p class="story-quote">"{{ student.quote }}"</p>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-if="filteredSuccessStories.length === 0" class="empty-state">
            <i class="fa-solid fa-graduation-cap"></i>
            <p>No success stories available for this year.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { placementService } from '@/data/placementService.js'

/* Tabs */
const tabs = [
  { id: 'overview', label: 'Overview', icon: 'fa-solid fa-chart-line' },
  { id: 'companies', label: 'Companies', icon: 'fa-solid fa-building' },
  { id: 'records', label: 'Records', icon: 'fa-solid fa-trophy' },
  { id: 'recruiters', label: 'Recruiters', icon: 'fa-solid fa-handshake' },
  { id: 'team', label: 'Team', icon: 'fa-solid fa-users' },
  { id: 'stories', label: 'Stories', icon: 'fa-solid fa-star' }
]
const tabsMap = tabs.reduce((acc, t) => ((acc[t.id] = t.id), acc), {})

// Router setup
const route = useRoute()
const router = useRouter()

// Active tab with URL synchronization
const activeTab = ref(tabs[0].id)

// Set tab and update URL
const setTab = (id) => { 
  activeTab.value = id
  // Update URL without page reload
  if (route.params.tab !== id) {
    router.push({ path: `/placements/${id}` })
  }
  // Smooth scroll to navigation area
  setTimeout(() => {
    const subnav = document.getElementById('subnav')
    if (subnav) {
      subnav.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
    }
  }, 100)
}

// Watch for URL changes and update active tab
watch(() => route.params.tab, (newTab) => {
  if (newTab && tabsMap[newTab]) {
    activeTab.value = newTab
    // Scroll to navigation when URL changes
    setTimeout(() => {
      const subnav = document.getElementById('subnav')
      if (subnav) {
        subnav.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
      }
    }, 200)
  } else if (!newTab) {
    activeTab.value = tabs[0].id
  }
}, { immediate: true })

// Initialize tab from URL on component mount
onMounted(() => {
  const tabFromUrl = route.params.tab
  if (tabFromUrl && tabsMap[tabFromUrl]) {
    activeTab.value = tabFromUrl
  } else if (!tabFromUrl) {
    // Set default tab without redirect to avoid infinite loops
    activeTab.value = tabs[0].id
  }
  
  // Initialize carousel
  updateCardsPerView()
  window.addEventListener('resize', updateCardsPerView)
  // preloadImages() // Temporarily disabled to fix crash
})

// Year-wise placement records
const years = ['2024-2025', '2023-2024', '2022-2023', '2021-2022', '2020-2021', '2019-2020', '2018-2019', '2017-2018', '2016-2017', '2015-2016', '2014-2015']
const selectedYear = ref('2020-2021')

const placementRecords = {
  '2024-2025': {
    year: '2024-2025',
    jobOffers: '95',
    companiesVisited: '28',
    highestSalaries: '25',
    branchStats: {
      'CSE': 45,
      'ECE': 8,
      'EEE': 25,
      'MECH': 17
    },
    placements: [
      { branch: 'CSE', company: 'Meta', students: 3 },
      { branch: 'ECE', company: 'Tesla', students: 2 },
      { branch: 'CSE', company: 'Apple', students: 4 },
      { branch: 'CSE', company: 'Microsoft', students: 8 },
      { branch: 'CSE', company: 'Google', students: 6 },
      { branch: 'ECE', company: 'Intel', students: 3 },
      { branch: 'EEE', company: 'Siemens', students: 5 },
      { branch: 'MECH', company: 'BMW', students: 2 }
    ]
  },
  '2023-2024': {
    year: '2023-2024',
    jobOffers: '88',
    companiesVisited: '25',
    highestSalaries: '22',
    branchStats: {
      'CSE': 42,
      'ECE': 7,
      'EEE': 22,
      'MECH': 17
    },
    placements: [
      { branch: 'CSE', company: 'Netflix', students: 3 },
      { branch: 'CSE', company: 'Adobe', students: 4 },
      { branch: 'CSE', company: 'Amazon', students: 8 },
      { branch: 'ECE', company: 'Qualcomm', students: 3 },
      { branch: 'CSE', company: 'Oracle', students: 5 },
      { branch: 'EEE', company: 'GE', students: 4 },
      { branch: 'MECH', company: 'Ford', students: 3 }
    ]
  },
  '2022-2023': {
    year: '2022-2023',
    jobOffers: '82',
    companiesVisited: '24',
    highestSalaries: '20',
    branchStats: {
      'CSE': 40,
      'ECE': 6,
      'EEE': 20,
      'MECH': 16
    },
    placements: [
      { branch: 'CSE', company: 'Uber', students: 4 },
      { branch: 'ECE', company: 'Salesforce', students: 3 },
      { branch: 'CSE', company: 'Airbnb', students: 2 },
      { branch: 'CSE', company: 'PayPal', students: 5 },
      { branch: 'EEE', company: 'ABB', students: 3 },
      { branch: 'MECH', company: 'Caterpillar', students: 4 }
    ]
  },
  '2021-2022': {
    year: '2021-2022',
    jobOffers: '78',
    companiesVisited: '23',
    highestSalaries: '18',
    branchStats: {
      'CSE': 38,
      'ECE': 5,
      'EEE': 18,
      'MECH': 17
    },
    placements: [
      { branch: 'CSE', company: 'LinkedIn', students: 3 },
      { branch: 'ECE', company: 'Spotify', students: 2 },
      { branch: 'CSE', company: 'Twitter', students: 4 },
      { branch: 'CSE', company: 'Shopify', students: 3 },
      { branch: 'EEE', company: 'Honeywell', students: 4 },
      { branch: 'MECH', company: 'John Deere', students: 3 }
    ]
  },
  '2020-2021': {
    year: '2020-2021',
    jobOffers: '81',
    companiesVisited: '22',
    highestSalaries: '18',
    branchStats: {
      'CSE': 33,
      'ECE': 3,
      'EEE': 49,
      'MECH': 17
    },
    placements: [
      { branch: 'CSE', company: 'Accenture', students: 4 },
      { branch: 'CSE', company: 'CAPGEMINI', students: 1 },
      { branch: 'CSE', company: 'COGNIZANT', students: 3 },
      { branch: 'CSE', company: 'EXFO', students: 1 },
      { branch: 'ECE', company: 'Grey Line Technologies', students: 1 },
      { branch: 'CSE', company: 'INFOSYS', students: 8 },
      { branch: 'CSE', company: 'MIND TREE', students: 2 },
      { branch: 'EEE', company: 'MITSUBHA', students: 14 },
      { branch: 'CSE', company: 'REVATURE', students: 1 },
      { branch: 'EEE', company: 'SPR HUMAN CAPITAL SOLUTIONS', students: 24 },
      { branch: 'ECE', company: 'Sumtotal', students: 1 },
      { branch: 'CSE', company: 'Syntel Private Limited', students: 1 },
      { branch: 'CSE', company: 'TCS', students: 5 },
      { branch: 'CSE', company: 'TECH MAHINDRA', students: 1 },
      { branch: 'EEE', company: 'TVS SUNDARAM FASTENERS', students: 7 },
      { branch: 'MECH', company: 'TVS SUNDARAM Pvt.Ltd', students: 11 },
      { branch: 'CSE', company: 'UNSCHOOL COMMUNITY INFLUENCER', students: 1 },
      { branch: 'CSE', company: 'VERZEO', students: 1 },
      { branch: 'ECE', company: 'Virtusa', students: 1 },
      { branch: 'CSE', company: 'WIPRO', students: 1 },
      { branch: 'EEE', company: 'YOUNG SHINE INDIA', students: 4 },
      { branch: 'MECH', company: 'YOUNGSHIN AUTOMOTIVE INDIA Pvt.Ltd', students: 6 }
    ]
  },
  '2019-2020': {
    year: '2019-2020',
    jobOffers: '133',
    companiesVisited: '26',
    highestSalaries: '16',
    branchStats: {
      'CSE': 42,
      'ECE': 36,
      'EEE': 38,
      'MECH': 17
    },
    placements: [
      { branch: 'CSE', company: 'ABC Technology', students: 5 },
      { branch: 'MECH', company: 'BESMAC', students: 6 },
      { branch: 'EEE', company: 'BESMAK', students: 4 },
      { branch: 'ECE', company: 'FLEXTRONICS', students: 3 },
      { branch: 'MECH', company: 'GENPACT', students: 24 },
      { branch: 'EEE', company: 'HETERO', students: 22 },
      { branch: 'ECE', company: 'Hetero Drugs', students: 4 },
      { branch: 'CSE', company: 'INDEED', students: 1 },
      { branch: 'ECE', company: 'MITSUBA', students: 22 },
      { branch: 'ECE', company: 'NUCLEUS SATELLITE COMMUNICATIONS M PVT. LTD', students: 7 },
      { branch: 'EEE', company: 'NUCLUES', students: 2 },
      { branch: 'ECE', company: 'SL LUMAX AP Pvt. Ltd.', students: 1 },
      { branch: 'CSE', company: 'SMART CLUES TECHNOLOGIES', students: 1 },
      { branch: 'ECE', company: 'SRI SAHIN TECH', students: 5 },
      { branch: 'EEE', company: 'SRI SAHIN TECH SOLUTIONS', students: 4 },
      { branch: 'CSE', company: 'SRI VAARI ENTERPRICES', students: 1 },
      { branch: 'MECH', company: 'SRISAHIN', students: 6 },
      { branch: 'EEE', company: 'TATA STRIVE', students: 10 },
      { branch: 'CSE', company: 'TCS', students: 3 },
      { branch: 'CSE', company: 'TECRA', students: 10 },
      { branch: 'CSE', company: 'THINK SYNQ', students: 21 },
      { branch: 'ECE', company: 'THINK SYNQ SOLUTIONS', students: 14 },
      { branch: 'EEE', company: 'THINK SYNQ Solutions Private Limited', students: 6 },
      { branch: 'CSE', company: 'Torry Harris Business Solutions', students: 1 },
      { branch: 'CSE', company: 'Vertafore India Private Limited', students: 1 },
      { branch: 'CSE', company: 'WIPRO', students: 1 }
    ]
  },
  '2018-2019': {
    year: '2018-2019',
    jobOffers: '158',
    companiesVisited: '14',
    highestSalaries: '14',
    branchStats: {
      'CSE': 51,
      'ECE': 52,
      'EEE': 23,
      'MECH': 32
    },
    placements: [
      { branch: 'CSE', company: 'AMAZON', students: 2 },
      { branch: 'MECH', company: 'ASHOK LEYLAND', students: 15 },
      { branch: 'ECE', company: 'EAST INDIA TECHNOLOGY PRIVATE LIMITED', students: 6 },
      { branch: 'EEE', company: 'East India Technology Private Limited, Bangalore', students: 14 },
      { branch: 'MECH', company: 'HETERO DRUGS', students: 6 },
      { branch: 'EEE', company: 'HETERO DRUGS', students: 4 },
      { branch: 'ECE', company: 'INFAC INDIA PRIVATE LIMITED', students: 23 },
      { branch: 'EEE', company: 'LUMAX', students: 5 },
      { branch: 'ECE', company: 'NCR CORPORATION PRIVATE LIMITED', students: 25 },
      { branch: 'CSE', company: 'SHIVAM TECHNOLOGIES', students: 30 },
      { branch: 'ECE', company: 'SL LUMAX', students: 1 },
      { branch: 'CSE', company: 'TCS', students: 3 },
      { branch: 'CSE', company: 'THINK SYNQ', students: 12 },
      { branch: 'ECE', company: 'THINK SYNQ SOLUTIONS', students: 15 },
      { branch: 'ECE', company: 'VEDA IIT', students: 1 },
      { branch: 'CSE', company: 'WIPRO', students: 4 }
    ]
  },
  '2017-2018': {
    year: '2017-2018',
    jobOffers: '78',
    companiesVisited: '12',
    highestSalaries: '12',
    branchStats: {
      'CSE': 60,
      'ECE': 8,
      'EEE': 5,
      'MECH': 5
    },
    placements: [
      { branch: 'ECE', company: 'ACCENTURE', students: 3 },
      { branch: 'ECE', company: 'COGNIZANT', students: 3 },
      { branch: 'ECE', company: 'CYIENT', students: 1 },
      { branch: 'EEE', company: 'HETERO DRUGS LIMITED', students: 5 },
      { branch: 'ECE', company: 'IBeon INFOTECH PVT LTD', students: 1 },
      { branch: 'CSE', company: 'INFOSYS', students: 2 },
      { branch: 'CSE', company: 'INFOTECH PVT LTD', students: 11 },
      { branch: 'CSE', company: 'LEAD PRO', students: 31 },
      { branch: 'ECE', company: 'MIND TREE', students: 1 },
      { branch: 'CSE', company: 'R K INFO SYSTEMS', students: 7 },
      { branch: 'ECE', company: 'TCS', students: 3 },
      { branch: 'CSE', company: 'TECH MAHINDRA', students: 9 },
      { branch: 'ECE', company: 'VECTOR INDIA', students: 1 }
    ]
  },
  '2016-2017': {
    year: '2016-2017',
    jobOffers: '36',
    companiesVisited: '7',
    highestSalaries: '10',
    branchStats: {
      'CSE': 4,
      'ECE': 16,
      'EEE': 2,
      'MECH': 14
    },
    placements: [
      { branch: 'CSE', company: "FRESHER'S EXPRESS", students: 4 },
      { branch: 'ECE', company: 'HCL', students: 6 },
      { branch: 'MECH', company: 'HETERO DRUGS', students: 3 },
      { branch: 'ECE', company: 'SURYA TECH SOLUTIONS', students: 10 },
      { branch: 'EEE', company: 'SURYA TECH SOLUTIONS-HYDERABAD', students: 1 },
      { branch: 'MECH', company: 'TEXMO', students: 11 },
      { branch: 'EEE', company: 'SURYA TECH SOLUTIONS-HYDERABAD', students: 1 }
    ]
  },
  '2015-2016': {
    year: '2015-2016',
    jobOffers: '20',
    companiesVisited: '3',
    highestSalaries: '8',
    branchStats: {
      'ECE': 13,
      'CSE': 6,
      'EEE': 1
    },
    placements: [
      { branch: 'ECE', company: 'ITCS GROUP OF COMPANIES', students: 9 },
      { branch: 'ECE', company: 'SUBHA SHREE INFOTECH', students: 4 },
      { branch: 'CSE', company: 'SUBHASHREE COMPANY', students: 6 },
      { branch: 'EEE', company: 'ITCS GROUP OF COMPANIES', students: 1 }
    ]
  },
  '2014-2015': {
    year: '2014-2015',
    jobOffers: '18',
    companiesVisited: '2',
    highestSalaries: '6',
    branchStats: {
      'CSE': 18
    },
    placements: [
      { branch: 'CSE', company: 'RUPEE ZONE', students: 16 },
      { branch: 'CSE', company: 'TCS', students: 2 }
    ]
  }
}

const currentYearRecord = computed(() => {
  const record = placementRecords[selectedYear.value]
  return record ? [record] : []
})

// Recruiters data organized by branch
const recruitersData = {
  'CSE': [
    'ABC Technology', 'Accenture', 'AMAZON', 'CAPGEMINI', 'COGNIZANT', 'EXFO', 
    "FRESHER'S EXPRESS", 'INDEED', 'INFOSYS', 'INFOTECH PVT LTD', 'LEAD PRO', 
    'MIND TREE', 'R K INFO SYSTEMS', 'REVATURE', 'RUPEE ZONE', 'SHIVAM TECHNOLOGIES', 
    'SMART CLUES TECHNOLOGIES', 'SRI VAARI ENTERPRICES', 'SUBHASHREE COMPANY', 
    'Syntel Private Limited', 'TCS', 'TECH MAHINDRA', 'TECRA', 'THINK SYNQ', 
    'Torry Harris Business Solutions', 'UNSCHOOL COMMUNITY INFLUENCER', 
    'Vertafore India Private Limited', 'VERZEO', 'WIPRO'
  ],
  'ECE': [
    'ACCENTURE', 'COGNIZANT', 'CYIENT', 'EAST INDIA TECHNOLOGY PRIVATE LIMITED', 
    'FLEXTRONICS', "FRESHER'S EXPRESS", 'Grey Line Technologies', 'HCL', 
    'Hetero Drugs', 'IBeon INFOTECH PVT LTD', 'INFAC INDIA PRIVATE LIMITED', 
    'Infosys', 'ITCS GROUP OF COMPANIES', 'LEAD PRO', 'MIND TREE', 'MITSUBA', 
    'NCR CORPORATION PRIVATE LIMITED', 'NUCLEUS SATELLITE COMMUNICATIONS M PVT. LTD', 
    'RUPEE ZONE', 'SHIVAM TECHNOLOGIES', 'SL LUMAX', 'SL LUMAX AP Pvt. Ltd.', 
    'SRI SAHIN TECH', 'SUBHA SHREE INFOTECH', 'Sumtotal', 'SURYA TECH SOLUTIONS', 
    'TCS', 'TECH MAHINDRA', 'TECRA', 'THINK SYNQ SOLUTIONS', 'VECTOR INDIA', 
    'VEDA IIT', 'Virtusa'
  ],
  'EEE': [
    'ACCENTURE', 'BESMAK', 'East India Technology Private Limited, Bangalore', 
    'HETERO', 'HETERO DRUGS', 'HETERO DRUGS LIMITED', 'HETERO LABS LIMITED', 
    'INFAC INDIA PRIVATE LIMITED', 'INFOSYS', 'INFOTECH PVT LTD', 
    'ITCS GROUP OF COMPANIES', 'LEAD PRO', 'LUMAX', 'MITSUBA', 'MITSUBHA', 
    'NCR CORPORATION PRIVATE LIMITED', 'NUCLUES', 'SHIVAM TECHNOLOGIES', 
    'SPR HUMAN CAPITAL SOLUTIONS', 'SRI SAHIN TECH SOLUTIONS', 
    'SURYA TECH SOLUTIONS-HYDERABAD', 'TATA STRIVE', 'TECH MAHINDRA', 
    'THINK SYNQ Solutions Private Limited', 'TVS SUNDARAM FASTENERS', 
    'YOUNG SHINE INDIA'
  ],
  'MECH': [
    'ASHOK LEYLAND', 'BESMAC', 'GENPACT', 'HCL', 'HETERO', 'HETERO DRUGS', 
    'HETERO DRUGS', 'LEAD PRO', 'LUMAX', 'NCR CORPORATION PRIVATE LIMITED', 
    'SPR HUMAN CAPITAL SOLUTIONS', 'SRISAHIN', 'SURYA TECH SOLUTIONS', 
    'TEXMO', 'TVS SUNDARAM Pvt.Ltd', 'YOUNGSHIN AUTOMOTIVE INDIA Pvt.Ltd'
  ]
}

// Selected branch for filtering
const selectedBranch = ref('All')

// View mode for recruiters (grid or list)
const viewMode = ref('list')

// Computed property to get filtered recruiters data
const filteredRecruiters = computed(() => {
  if (selectedBranch.value === 'All') {
    // Return all companies with their branch information
    return Object.entries(recruitersData).flatMap(([branch, companies]) =>
      companies.map(company => ({ company, branch }))
    )
  }
  return recruitersData[selectedBranch.value].map(company => ({ 
    company, 
    branch: selectedBranch.value 
  }))
})

// Computed property to get branch options including "All"
const branchOptions = computed(() => {
  return ['All', ...Object.keys(recruitersData)]
})

// Top companies data from shared service
const topCompanies = placementService.topCompanies

// Success stories carousel data
// Success Stories Year Selector
const selectedStoriesYear = ref('2020-2021')
const storiesYears = ['2024-2025', '2023-2024', '2022-2023', '2021-2022', '2020-2021', '2019-2020', '2018-2019', '2017-2018', '2016-2017', '2015-2016', '2014-2015']

// Year-wise Success Stories Data
const yearWiseSuccessStories = {
  '2024-2025': [
    {
      id: '24R21A6663',
      name: 'Aryan Sharma',
      company: 'Meta',
      package: 18,
      branch: 'CSE',
      year: '2024-2025',
      achievement: 'AI Innovation Leader',
      companyType: 'Social Media Tech',
      quote: 'Meta provided me with the perfect platform to work on cutting-edge AI technologies!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    },
    {
      id: '24R21A6664',
      name: 'Priya Gupta',
      company: 'Tesla',
      package: 16,
      branch: 'ECE',
      year: '2024-2025',
      achievement: 'Electric Vehicle Pioneer',
      companyType: 'Automotive Tech',
      quote: 'Working at Tesla is like being part of the future of transportation!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    }
  ],
  '2023-2024': [
    {
      id: '23R21A6665',
      name: 'Rahul Kumar',
      company: 'Netflix',
      package: 14,
      branch: 'CSE',
      year: '2023-2024',
      achievement: 'Streaming Technology Expert',
      companyType: 'Entertainment Tech',
      quote: 'Netflix taught me how to build scalable systems that serve millions of users!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    },
    {
      id: '23R21A6666',
      name: 'Sneha Reddy',
      company: 'Adobe',
      package: 12,
      branch: 'CSE',
      year: '2023-2024',
      achievement: 'Creative Software Developer',
      companyType: 'Software Solutions',
      quote: 'Adobe helped me combine my passion for technology with creativity!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    }
  ],
  '2022-2023': [
    {
      id: '22R21A6667',
      name: 'Vikram Singh',
      company: 'Uber',
      package: 13,
      branch: 'CSE',
      year: '2022-2023',
      achievement: 'Mobility Solutions Architect',
      companyType: 'Transportation Tech',
      quote: 'Uber gave me the opportunity to revolutionize urban transportation!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    },
    {
      id: '22R21A6668',
      name: 'Ananya Patel',
      company: 'Salesforce',
      package: 11,
      branch: 'ECE',
      year: '2022-2023',
      achievement: 'Cloud Platform Specialist',
      companyType: 'CRM Software',
      quote: 'Salesforce empowered me to build customer-centric solutions!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    }
  ],
  '2021-2022': [
    {
      id: '21R21A6669',
      name: 'Karthik Nair',
      company: 'LinkedIn',
      package: 10,
      branch: 'CSE',
      year: '2021-2022',
      achievement: 'Professional Network Builder',
      companyType: 'Professional Social',
      quote: 'LinkedIn helped me understand the power of professional networking!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    },
    {
      id: '21R21A6670',
      name: 'Divya Sharma',
      company: 'Spotify',
      package: 9,
      branch: 'ECE',
      year: '2021-2022',
      achievement: 'Audio Technology Expert',
      companyType: 'Music Streaming',
      quote: 'Spotify combined my love for music with cutting-edge technology!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    }
  ],
  '2020-2021': [
  {
    id: '20R21A6650',
    name: 'Rajesh Kumar',
    company: 'Google',
    package: 15,
    branch: 'CSE',
      year: '2020-2021',
      achievement: 'Top Performer',
      companyType: 'Tech Giant',
      quote: 'Hard work and dedication led me to this amazing opportunity at Google!',
    image: null,
    companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
  },
  {
    id: '20R21A6651',
    name: 'Priya Sharma',
    company: 'Microsoft',
    package: 12,
    branch: 'CSE-AI&ML',
      year: '2020-2021',
      achievement: 'Innovation Award',
      companyType: 'Technology Company',
      quote: 'My AI/ML skills helped me secure this dream position at Microsoft!',
    image: null,
    companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
  },
  {
    id: '20R21A6652',
    name: 'Amit Singh',
    company: 'Amazon',
    package: 14,
    branch: 'CSE',
      year: '2020-2021',
      achievement: 'Leadership Excellence',
      companyType: 'E-commerce Giant',
      quote: 'Amazon provided the perfect platform to showcase my technical expertise!',
    image: null,
    companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
  },
  {
    id: '20R21A6653',
    name: 'Sneha Patel',
    company: 'Accenture',
    package: 6.5,
    branch: 'CSE',
      year: '2020-2021',
      achievement: 'Rising Star',
      companyType: 'Consulting Firm',
      quote: 'Accenture helped me grow both professionally and personally!',
    image: null,
    companyLogo: new URL('@/assets/companies/Accenture.png', import.meta.url).href
  }
  ],
  '2019-2020': [
    {
      id: '19R21A6654',
      name: 'Arjun Reddy',
      company: 'TCS',
      package: 4.5,
      branch: 'CSE',
      year: '2019-2020',
      achievement: 'Technical Excellence',
      companyType: 'IT Services',
      quote: 'TCS gave me the foundation to build my career in IT!',
      image: null,
      companyLogo: new URL('@/assets/companies/TechM.png', import.meta.url).href
    },
    {
      id: '19R21A6655',
      name: 'Kavya Nair',
      company: 'Infosys',
      package: 3.6,
      branch: 'ECE',
      year: '2019-2020',
      achievement: 'Innovation Champion',
      companyType: 'Technology Services',
      quote: 'Infosys transformed my ideas into real-world solutions!',
      image: null,
      companyLogo: new URL('@/assets/companies/Infosys.png', import.meta.url).href
    },
    {
      id: '19R21A6656',
      name: 'Rohit Sharma',
      company: 'Wipro',
      package: 3.8,
      branch: 'EEE',
      year: '2019-2020',
      achievement: 'Problem Solver',
      companyType: 'IT Consulting',
      quote: 'Wipro helped me develop strong problem-solving skills!',
      image: null,
      companyLogo: new URL('@/assets/wipro.png', import.meta.url).href
    }
  ],
  '2018-2019': [
    {
      id: '18R21A6657',
      name: 'Deepika Singh',
      company: 'HCL',
      package: 4.2,
      branch: 'CSE',
      year: '2018-2019',
      achievement: 'Technical Leader',
      companyType: 'Technology Company',
      quote: 'HCL provided me with excellent learning opportunities!',
      image: null,
      companyLogo: new URL('@/assets/companies/TechM.png', import.meta.url).href
    },
    {
      id: '18R21A6658',
      name: 'Vikram Kumar',
      company: 'Tech Mahindra',
      package: 3.5,
      branch: 'MECH',
      year: '2018-2019',
      achievement: 'Engineering Excellence',
      companyType: 'IT Services',
      quote: 'Tech Mahindra shaped my engineering career perfectly!',
      image: null,
      companyLogo: new URL('@/assets/companies/TechM.png', import.meta.url).href
    }
  ],
  '2017-2018': [
    {
      id: '17R21A6659',
      name: 'Anjali Gupta',
      company: 'Cognizant',
      package: 3.8,
      branch: 'CSE',
      year: '2017-2018',
      achievement: 'Digital Innovator',
      companyType: 'Digital Solutions',
      quote: 'Cognizant opened doors to the digital transformation world!',
      image: null,
      companyLogo: new URL('@/assets/companies/Accenture.png', import.meta.url).href
    }
  ],
  '2016-2017': [
    {
      id: '16R21A6660',
      name: 'Suresh Kumar',
      company: 'Capgemini',
      package: 3.2,
      branch: 'ECE',
      year: '2016-2017',
      achievement: 'System Architect',
      companyType: 'Consulting Services',
      quote: 'Capgemini helped me become a systems thinking expert!',
      image: null,
      companyLogo: new URL('@/assets/companies/Capgemini.svg', import.meta.url).href
    }
  ],
  '2015-2016': [
    {
      id: '15R21A6661',
      name: 'Meera Patel',
      company: 'IBM',
      package: 4.8,
      branch: 'CSE',
      year: '2015-2016',
      achievement: 'Cloud Specialist',
      companyType: 'Technology Solutions',
      quote: 'IBM gave me the opportunity to work on cutting-edge cloud technologies!',
      image: null,
      companyLogo: new URL('@/assets/microsoft.png', import.meta.url).href
    }
  ],
  '2014-2015': [
    {
      id: '14R21A6662',
      name: 'Ravi Teja',
      company: 'Oracle',
      package: 5.2,
      branch: 'EEE',
      year: '2014-2015',
      achievement: 'Database Expert',
      companyType: 'Enterprise Software',
      quote: 'Oracle helped me master database technologies and enterprise solutions!',
      image: null,
      companyLogo: new URL('@/assets/oracle.png', import.meta.url).href
    }
  ]
}

// Computed property for filtered success stories
const filteredSuccessStories = computed(() => {
  return yearWiseSuccessStories[selectedStoriesYear.value] || []
})

// Carousel functionality
const currentSlide = ref(0)
const cardsPerView = ref(3) // Show 3 cards at once on desktop


// Update cardsPerView based on screen size
const updateCardsPerView = () => {
  if (window.innerWidth <= 768) {
    cardsPerView.value = 1
  } else if (window.innerWidth <= 1024) {
    cardsPerView.value = 2
  } else {
    cardsPerView.value = 3
  }
}


// Update on mount and resize

onUnmounted(() => {
  window.removeEventListener('resize', updateCardsPerView)
})

const nextSlide = () => {
  const currentStories = filteredSuccessStories.value
  if (currentSlide.value < currentStories.length - cardsPerView.value) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}


// Handle image loading errors
const handleImageError = (event) => {
  // Hide the image and let the placeholder show
  event.target.style.display = 'none'
}

// Preload images to ensure they display properly
const preloadImages = () => {
  // Preload images for all years
  Object.values(yearWiseSuccessStories).forEach(yearStories => {
    yearStories.forEach(student => {
      const img = new Image()
      img.src = student.image
      img.onload = () => {
        console.log(`Image loaded: ${student.name}`)
      }
      img.onerror = () => {
        console.log(`Image failed to load: ${student.name}`)
      }
    })
  })
}

// Call preload on mount
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
.hero-inner{ position:relative; display:grid; grid-template-columns:1.5fr .5fr; gap:2rem; align-items:center; padding:3.2rem 0; }
.title{ font-size:2.2rem; font-weight:800; line-height:1.2 }
.tagline{ color:#dbeafe; margin:.5rem 0 1.25rem; font-weight:600 }
.quickfacts{ list-style:none; display:flex; gap:1rem; padding:0; margin:0; flex-wrap:wrap }
.quickfacts li{ background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); border-radius:.75rem; padding:.6rem .9rem; min-width:160px }
.qf-label{ display:block; font-size:.75rem; letter-spacing:.02em; opacity:.9 }
.qf-value{ font-size:1.05rem; font-weight:800 }
.hero-art .hero-img{ width:100%; max-width:400px; max-height:300px; border-radius:1rem; box-shadow:0 10px 30px rgba(0,0,0,.25); object-fit:cover }

/* SUBNAV */
.subnav{ 
  position:sticky; 
  top:0; 
  z-index:20; 
  background:#fff; 
  border-bottom:1px solid var(--border);
  box-shadow:0 2px 8px rgba(0,0,0,0.05);
}
.subnav-inner{ display:flex; gap:.5rem; padding:.6rem 1rem; overflow-x:auto; overflow-y:hidden; justify-content:center; flex-wrap:wrap; }
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

/* CHIPS */
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

/* RECORDS HEADER */
.records-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 2rem;
}

/* YEAR SELECTOR */
.year-selector{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
}


/* RECRUITERS SECTION */
.recruiters-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;
}

.branch-filter{
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-shrink: 0;
}

/* VIEW CONTROLS */
.view-controls{
  display: flex;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(249,115,22,0.08), rgba(30,64,175,0.08));
  padding: 0.3rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(249,115,22,0.15);
  box-shadow: 0 2px 8px rgba(249,115,22,0.1);
}

.view-btn{
  padding: 0.6rem;
  border: none;
  background: transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--muted);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
}

.view-btn:hover{
  background: rgba(249,115,22,0.1);
  color: var(--orange);
}

.view-btn.active{
  background: var(--orange);
  color: white;
  box-shadow: 0 2px 8px rgba(249,115,22,0.3);
}

.view-btn i{
  font-size: 1rem;
}

.branch-label{
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.branch-label i{
  color: var(--orange);
  font-size: 0.9rem;
}

.branch-select{
  padding: 0.6rem 1rem;
  border: 2px solid var(--border);
  border-radius: 0.6rem;
  background: linear-gradient(135deg, rgba(249,115,22,0.02), rgba(30,64,175,0.02));
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
  box-shadow: 0 2px 8px rgba(249,115,22,0.08);
}

.branch-select:hover{
  border-color: var(--orange);
  box-shadow: 0 4px 12px rgba(249,115,22,0.15);
}

.branch-select:focus{
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

/* RECRUITERS SUMMARY */
.recruiters-summary{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.summary-card{
  background: linear-gradient(135deg, rgba(249,115,22,0.05), rgba(30,64,175,0.05));
  border: 1px solid rgba(249,115,22,0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.summary-card:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(249,115,22,0.15);
  border-color: var(--orange);
}

.summary-icon{
  width: 60px;
  height: 60px;
  background: var(--orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.summary-info{
  flex: 1;
}

.summary-number{
  font-size: 2rem;
  font-weight: 800;
  color: var(--ink);
  line-height: 1;
  margin-bottom: 0.3rem;
}

.summary-label{
  font-size: 1rem;
  font-weight: 600;
  color: var(--muted);
}

/* RECRUITERS GRID */
.recruiters-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.recruiter-card{
  background: linear-gradient(135deg, rgba(249,115,22,0.02), rgba(30,64,175,0.02));
  border: 2px solid rgba(249,115,22,0.1);
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(249,115,22,0.08);
}

.recruiter-card:hover{
  border-color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(249,115,22,0.15);
}

.recruiter-info{
  flex: 1;
}

.recruiter-card .company-name{
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.recruiter-icon{
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--orange), #ff8c42);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.recruiter-card:hover .recruiter-icon{
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(249,115,22,0.3);
}

/* LIST VIEW */
.recruiters-list{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.recruiter-list-item{
  background: linear-gradient(135deg, rgba(249,115,22,0.02), rgba(30,64,175,0.02));
  border: 1px solid rgba(249,115,22,0.1);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 1px 4px rgba(249,115,22,0.08);
}

.recruiter-list-item:hover{
  border-color: var(--orange);
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(249,115,22,0.1);
}

.recruiter-list-item .recruiter-info{
  display: flex;
  align-items: center;
  gap: 1rem;
}

.recruiter-list-item .company-name{
  font-size: 1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0;
}

.recruiter-list-item .branch-badge{
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
}

.recruiter-list-item .recruiter-icon{
  width: 40px;
  height: 40px;
  font-size: 1rem;
}

.recruiter-list-item:hover .recruiter-icon{
  transform: scale(1.05);
  box-shadow: 0 2px 8px rgba(249,115,22,0.2);
}

.year-label{
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.year-label i{
  color: var(--orange);
  font-size: 1rem;
}

.year-select{
  padding: 0.8rem 1.2rem;
  border: 2px solid var(--border);
  border-radius: 0.8rem;
  background: white;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.year-select:hover{
  border-color: var(--orange);
  box-shadow: 0 4px 12px rgba(249,115,22,0.15);
}

.year-select:focus{
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

.year-select option{
  padding: 0.5rem;
  font-weight: 600;
}

/* BRANCH STATS */
.branch-stats{
  margin: 2rem 0;
  background: rgba(249,115,22,0.02);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(249,115,22,0.1);
}

.branch-title{
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.branch-title i{
  color: var(--orange);
}

.branch-grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.branch-stat{
  background: white;
  border: 2px solid rgba(249,115,22,0.1);
  border-radius: 0.8rem;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.branch-stat:hover{
  border-color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249,115,22,0.2);
}

.branch-name{
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

.branch-count{
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--orange);
}

/* COMPANY PLACEMENTS */
.company-placements{
  margin: 2rem 0;
  background: rgba(30,64,175,0.02);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(30,64,175,0.1);
}

.company-title{
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.company-title i{
  color: var(--orange);
}

.placements-table-container{
  overflow-x: auto;
  border-radius: 0.8rem;
  border: 1px solid rgba(30,64,175,0.1);
}

.placements-table{
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.placements-table thead{
  background: linear-gradient(135deg, var(--orange), #ea580c);
  color: white;
}

.placements-table th{
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.placements-table td{
  padding: 1rem;
  border-bottom: 1px solid rgba(30,64,175,0.1);
  vertical-align: middle;
}

.placements-table tbody tr:hover{
  background: rgba(30,64,175,0.05);
}

.placements-table tbody tr:last-child td{
  border-bottom: none;
}

.branch-badge{
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.branch-cse{
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.branch-ece{
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.branch-eee{
  background: rgba(168, 85, 247, 0.1);
  color: #7c3aed;
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.branch-mech{
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.company-name-cell{
  font-weight: 600;
  color: var(--ink);
}

.students-count{
  font-weight: 700;
  color: var(--orange);
  text-align: center;
  font-size: 1.1rem;
}

/* COMPANY CARDS */
.company-card{ 
  border:1px solid var(--border); 
  border-radius:1rem; 
  padding:1.5rem; 
  background:#fff; 
  transition:all 0.3s ease;
  box-shadow:0 2px 8px rgba(0,0,0,0.04);
  text-align:center;
}
.company-card:hover{ 
  transform:translateY(-4px); 
  box-shadow:0 8px 25px rgba(0,0,0,.12);
  border-color:var(--orange);
}
.company-logo{ 
  width:80px; 
  height:80px; 
  margin:0 auto 1rem; 
  display:flex; 
  align-items:center; 
  justify-content:center;
  border:2px solid rgba(249,115,22,0.1);
  border-radius:.8rem;
  background:#f8f9fa;
}
.company-logo img{ max-width:100%; max-height:100%; object-fit:contain }
.company-name{ font-size:1.2rem; font-weight:800; margin-bottom:.5rem; color:var(--ink) }
.company-category{ color:var(--muted); margin-bottom:1rem; font-weight:500 }
.company-stats{ display:flex; gap:.5rem; justify-content:center; flex-wrap:wrap }
.company-stats .badge{ margin:0 }

/* BADGES */
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

/* PLACEMENT TEAM */
.placement-team{
  margin-bottom: 2rem;
}
.team-member{
  display: flex;
  gap: 2rem;
  align-items: center;
  background: linear-gradient(135deg, rgba(249,115,22,0.05) 0%, rgba(30,64,175,0.05) 100%);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(249,115,22,0.1);
}
.member-photo{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--orange);
  flex-shrink: 0;
}
.member-photo img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.member-info{
  flex: 1;
}
.member-name{
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
}
.member-designation{
  font-size: 1.1rem;
  color: var(--navy);
  font-weight: 600;
  margin-bottom: 1rem;
}
.member-contact{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.contact-item{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-weight: 500;
}
.contact-item i{
  color: var(--orange);
  width: 16px;
}

/* PLACEMENT MESSAGE */
.placement-message{
  background: rgba(249,115,22,0.02);
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid var(--orange);
}
.message-title{
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.message-title i{
  color: var(--orange);
}
.message-content{
  margin-bottom: 2rem;
}
.message-content p{
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #374151;
  font-size: 1rem;
}
.message-content p:last-child{
  margin-bottom: 0;
}

/* CONTACT INFO */
.contact-info{
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.contact-title{
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.contact-title i{
  color: var(--orange);
}
.contact-text{
  color: #374151;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.contact-text strong{
  color: var(--navy);
  font-weight: 700;
}
.contact-actions{
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.contact-btn{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: var(--orange);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(249,115,22,0.3);
}
.contact-btn:hover{
  background: var(--navy);
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(30,64,175,0.4);
}
.contact-btn i{
  font-size: 1rem;
}


/* CAROUSEL */
.carousel-container{ position:relative; margin-top:2rem; overflow:hidden; border-radius:1rem; background:#fff; border:1px solid var(--border) }
.carousel-wrapper{ display:flex; transition:transform 0.5s ease }
.carousel-slide{ min-width:100%; flex-shrink:0 }


/* SIMPLE STORIES DESIGN */
.stories-page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
}

.year-filter {
  max-width: 300px;
  margin-left: auto;
}

.year-label {
  display: block;
  font-weight: 600;
  color: var(--ink);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.year-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: var(--ink);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.year-select:hover {
  border-color: var(--orange);
}

.year-select:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

@media (max-width: 768px) {
  .stories-page-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .year-filter {
    margin-left: 0;
    max-width: 100%;
  }
}

.simple-stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.simple-story-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.simple-story-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border-color: var(--orange);
}

.story-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--orange);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.story-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.story-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--orange);
}

.story-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: var(--orange);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
}

.story-info {
  flex: 1;
}

.story-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.25rem;
}

.story-branch {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0;
}

.story-company {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 0.5rem;
}

.company-logo-small {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 0.5rem;
  padding: 0.25rem;
}

.company-logo-small img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.company-info {
  flex: 1;
}

.company-name-small {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.15rem;
}

.company-role {
  font-size: 0.8rem;
  color: var(--muted);
  margin: 0;
}

.story-package {
  background: var(--orange);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
}

.package-text {
  font-size: 1.1rem;
  font-weight: 700;
}

.story-quote {
  font-size: 0.9rem;
  color: var(--muted);
  font-style: italic;
  margin: 0;
  line-height: 1.5;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--muted);
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--orange);
  opacity: 0.5;
}

.empty-state p {
  font-size: 1.1rem;
}

.story-card{
  background: linear-gradient(135deg, #fff 0%, #fefefe 100%);
  border-radius: 1.2rem;
  padding: 1.5rem;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  border: 2px solid transparent;
  overflow: hidden;
}
.story-card::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--orange), #ea580c, #f97316);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.story-card:hover{
  transform: translateY(-8px) scale(1.01);
  box-shadow: 0 16px 48px rgba(249,115,22,0.15);
  border-color: var(--orange);
}
.story-card:hover::before{
  opacity: 1;
}

.success-badge-new{
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, var(--orange), #ea580c);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  z-index: 2;
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.success-badge-new i{ 
  font-size: 0.8rem;
  color: white;
}

.student-profile{
  display:flex;
  align-items:center;
  gap:1rem;
  margin-bottom:1.5rem;
  padding-right: 140px;
}

.profile-image-container{
  position:relative;
  width:80px;
  height:80px;
  border-radius:50%;
  overflow:hidden;
  border:3px solid var(--orange);
  box-shadow:0 6px 20px rgba(249, 115, 22, 0.3);
}

.profile-image{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center 25%;
  transition:transform 0.3s ease;
}

.profile-placeholder{
  width:100%;
  height:100%;
  background: linear-gradient(135deg, var(--orange), #ea580c);
  display:flex;
  align-items:center;
  justify-content:center;
  color: white;
  font-size: 2rem;
}

.profile-overlay{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:rgba(249, 115, 22, 0.8);
  display:flex;
  align-items:center;
  justify-content:center;
  opacity:0;
  transition:opacity 0.3s ease;
}
.profile-image-container:hover .profile-overlay{ opacity:1 }
.profile-image-container:hover .profile-image{ transform:scale(1.1) }
.profile-overlay i{
  color:#fff;
  font-size:2rem;
}

.student-details{
  flex:1;
}
.student-name{
  font-size:1.2rem;
  font-weight:600;
  color:var(--ink);
  margin:0 0 0.3rem;
  letter-spacing: 0.02em;
  line-height: 1.3;
}
.student-branch{
  font-size:0.9rem;
  font-weight:500;
  color:var(--muted);
  margin:0;
  letter-spacing: 0.01em;
  line-height: 1.4;
  background: rgba(249, 115, 22, 0.08);
  padding: 0.2rem 0.6rem;
  border-radius: 0.8rem;
  display: inline-block;
  border: 1px solid rgba(249, 115, 22, 0.15);
}


.placement-info{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:1.5rem;
  padding:1.2rem;
  background:linear-gradient(135deg, #f8fafc, #f1f5f9);
  border-radius:0.8rem;
  border:1px solid #e2e8f0;
}

.company-section{
  display:flex;
  align-items:center;
  gap:1rem;
}
.company-logo{
  width:40px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#fff;
  border-radius:0.6rem;
  padding:0.4rem;
  box-shadow:0 2px 6px rgba(0,0,0,0.1);
}
.company-logo img{
  max-width:100%;
  max-height:100%;
  object-fit:contain;
}
.company-details h4{
  font-size:1rem;
  font-weight:700;
  color:var(--ink);
  margin:0 0 0.2rem;
}
.company-details p{
  font-size:0.9rem;
  color:var(--muted);
  margin:0;
}

.package-section{
  text-align:right;
}
.package-amount{
  display:flex;
  align-items:baseline;
  gap:0.2rem;
  margin-bottom:0.3rem;
}
.currency{
  font-size:1rem;
  font-weight:600;
  color:var(--orange);
}
.amount{
  font-size:1.6rem;
  font-weight:800;
  color:var(--orange);
}
.unit{
  font-size:1rem;
  font-weight:600;
  color:var(--orange);
}
.package-label{
  font-size:0.85rem;
  color:var(--muted);
  margin:0;
}

.success-quote{
  background:linear-gradient(135deg, var(--orange), #ff8c42);
  color:#fff;
  padding:1.2rem;
  border-radius:0.8rem;
  position:relative;
  text-align:center;
}
.success-quote i{
  position:absolute;
  top:0.5rem;
  left:1rem;
  font-size:1.5rem;
  opacity:0.3;
}
.success-quote p{
  font-size:0.9rem;
  font-style:italic;
  margin:0;
  line-height:1.4;
}

.stories-footer{
  text-align:center;
}
.view-more-btn{
  background:linear-gradient(135deg, var(--navy), var(--navy-2));
  color:#fff;
  border:none;
  padding:1rem 2rem;
  border-radius:2rem;
  font-size:1rem;
  font-weight:600;
  display:inline-flex;
  align-items:center;
  gap:0.8rem;
  cursor:pointer;
  transition:all 0.3s ease;
  box-shadow:0 4px 16px rgba(30, 64, 175, 0.3);
}
.view-more-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 24px rgba(30, 64, 175, 0.4);
}
.view-more-btn i{
  transition:transform 0.3s ease;
}
.view-more-btn:hover i{
  transform:translateX(4px);
}

/* PLACEMENT CARD */
.placement-card{
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 1.5rem;
  padding: 2rem;
  position: relative;
  min-height: 500px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  border: 2px solid rgba(249,115,22,0.1);
  overflow: hidden;
}

/* CARD HEADER */
.card-header{
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.banner{
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.banner.orange{
  background: var(--orange);
  color: white;
}
.banner.green{
  background: #10b981;
  color: white;
}

/* CONGRATULATIONS TEXT */
.congrats-text{
  font-size: 2rem;
  font-weight: 800;
  color: var(--orange);
  font-style: italic;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* STUDENT INFO */
.student-info{
  margin-bottom: 1.5rem;
  text-align: center;
}
.student-name{
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.3rem;
}
.student-id{
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.student-branch{
  font-size: 1rem;
  color: var(--navy);
  font-weight: 600;
  background: rgba(30,64,175,0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
  display: inline-block;
}

/* COMPANY SECTION */
.company-section{
  text-align: center;
  margin-bottom: 1.5rem;
}
.company-text{
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 0.8rem;
}
.company-logo{
  width: 80px;
  height: 60px;
  margin: 0 auto 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.company-logo img{
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
.company-name{
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--navy);
}

/* SALARY SECTION */
.salary-section{
  text-align: center;
  margin-bottom: 1.5rem;
}
.salary-label{
  font-size: 0.9rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
}
.salary-amount{
  font-size: 2rem;
  font-weight: 900;
  color: #10b981;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

/* STUDENT PHOTO */
.student-photo{
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px dashed var(--orange);
  background: white;
  padding: 3px;
}
.student-photo img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

/* CARD FOOTER */
.card-footer{
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.college-logo{
  display: flex;
  flex-direction: column;
}
.logo-text{
  font-size: 1.2rem;
  font-weight: 900;
  color: #10b981;
  line-height: 1;
}
.logo-subtitle{
  font-size: 0.7rem;
  color: var(--muted);
  font-weight: 600;
}
.website{
  font-size: 0.8rem;
  color: var(--muted);
  font-weight: 500;
}

.carousel-btn{ 
  position:absolute; 
  top:50%; 
  transform:translateY(-50%); 
  background:var(--orange); 
  color:white; 
  border:none; 
  width:50px; 
  height:50px; 
  border-radius:50%; 
  cursor:pointer; 
  display:flex; 
  align-items:center; 
  justify-content:center; 
  font-size:1.2rem; 
  transition:all 0.3s ease; 
  z-index:10;
  box-shadow:0 4px 12px rgba(249,115,22,0.3);
}
.carousel-btn:hover:not(:disabled){ 
  background:var(--navy); 
  transform:translateY(-50%) scale(1.1);
  box-shadow:0 6px 20px rgba(30,64,175,0.4);
}
.carousel-btn:disabled{ 
  background:var(--muted); 
  cursor:not-allowed; 
  opacity:0.5;
}
.carousel-btn.prev{ left:1rem }
.carousel-btn.next{ right:1rem }

.carousel-indicators{ display:flex; justify-content:center; gap:.5rem; margin-top:1rem }
.indicator{ 
  width:12px; 
  height:12px; 
  border-radius:50%; 
  border:none; 
  background:var(--border); 
  cursor:pointer; 
  transition:all 0.3s ease;
}
.indicator.active{ background:var(--orange) }
.indicator:hover{ background:var(--navy) }

/* RESPONSIVE */
@media (max-width: 1024px) {
  .hero-inner{ grid-template-columns:1fr; text-align:center; gap:1.5rem }
  .hero-art .hero-img{ max-width:300px; max-height:200px }
  .grid-3{ grid-template-columns:repeat(2,1fr) }
  .carousel-slide{ flex:0 0 calc(50% - 0.5rem) } /* 2 cards per view on tablet */
  
}

@media (max-width: 768px) {
  .title{ font-size:1.8rem }
  .quickfacts{ justify-content:center }
  .quickfacts li{ min-width:140px }
  .grid-3{ grid-template-columns:1fr }
  .stats{ grid-template-columns:repeat(2,1fr) }
  .records-header{ 
    flex-direction: row; 
    align-items: center; 
    gap: 1rem; 
    margin-bottom: 1rem;
    justify-content: space-between;
  }
  .year-selector{ 
    flex-direction: row; 
    align-items: center;
    gap: 0.5rem;
  }
  
  /* RECRUITERS MOBILE */
  .recruiters-header{ 
    flex-direction: column; 
    align-items: center; 
    gap: 1.5rem; 
    margin-bottom: 1.5rem 
  }
  .branch-filter{ 
    flex-direction: column; 
    align-items: center; 
    gap: 0.5rem 
  }
  .branch-filter .branch-label{
    margin-bottom: 0;
  }
  .view-controls{ 
    align-self: center; 
  }
  .recruiters-summary{ grid-template-columns: 1fr; gap: 1rem }
  .recruiters-grid{ grid-template-columns: 1fr; gap: 0.8rem }
  .recruiter-card{ padding: 1rem }
  .recruiter-card .company-name{ font-size: 1rem }
  .summary-card{ padding: 1rem }
  .summary-number{ font-size: 1.5rem }
  .year-select{ min-width: 180px; font-size: 0.9rem }
  .carousel-btn{ width:40px; height:40px; font-size:1rem }
  .carousel-btn.prev{ left:.5rem }
  
  /* STORIES MOBILE */
  .stories-title-section{ 
    flex-direction: column; 
    gap: 1rem; 
    align-items: center;
  }
  .stories-year-selector{ 
    flex-direction: row; 
    gap: 0.5rem; 
    justify-content: center;
  }
  .stories-year-selector .year-select{ 
    min-width: 200px; 
    font-size: 0.9rem; 
  }
  .stories-grid{ grid-template-columns:1fr; gap:1.5rem }
  .story-card{ 
    padding:1.2rem;
    margin: 0 0.5rem;
  }
  .student-profile{ flex-direction:column; text-align:center; gap:0.8rem; padding-right: 0 }
  .profile-image-container{ width:70px; height:70px }
  .success-badge-new{ 
    top: 0.8rem; 
    right: 0.8rem; 
    font-size: 0.7rem; 
    padding: 0.3rem 0.6rem;
    max-width: 100px;
  }
  .student-name{ font-size:1.1rem; font-weight:600 }
  .student-branch{ font-size:0.85rem; padding: 0.15rem 0.5rem }
  .placement-info{ flex-direction:column; gap:0.8rem; text-align:center }
  .package-section{ text-align:center }
  .amount{ font-size:1.5rem }
  
  /* RECORDS MOBILE */
  .branch-grid{ grid-template-columns:repeat(2, 1fr) }
  .branch-stat{ padding:0.8rem }
  .branch-count{ font-size:1.5rem }
  .placements-table th,
  .placements-table td{ padding:0.8rem 0.5rem }
  .placements-table th{ font-size:0.8rem }
  .branch-badge{ font-size:0.7rem; padding:0.2rem 0.6rem }
  .company-name-cell{ font-size:0.9rem }
  .students-count{ font-size:1rem }
  
  .carousel-btn.next{ right:.5rem }
  
  /* PLACEMENT TEAM MOBILE */
  .team-member{
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  .member-photo{
    width: 120px;
    height: 120px;
  }
  .member-name{
    font-size: 1.3rem;
  }
  .contact-actions{
    justify-content: center;
  }
  .contact-btn{
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
  
  /* PLACEMENT CARD MOBILE */
  .placement-card{
    min-height: 450px;
    padding: 1.5rem;
  }
  .congrats-text{
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .student-name{
    font-size: 1.2rem;
  }
  .salary-amount{
    font-size: 1.5rem;
  }
  .student-photo{
    width: 80px;
    height: 80px;
    top: 0.8rem;
    right: 0.8rem;
  }
  .card-footer{
    bottom: 0.8rem;
    left: 0.8rem;
    right: 0.8rem;
  }
}

@media (max-width: 480px) {
  .stats{ grid-template-columns:1fr }
  .quickfacts li{ min-width:120px; padding:.5rem .7rem }
  .qf-value{ font-size:.95rem }
  
  /* PLACEMENT CARD SMALL MOBILE */
  .placement-card{
    min-height: 400px;
    padding: 1rem;
  }
  .congrats-text{
    font-size: 1.3rem;
  }
  .student-name{
    font-size: 1.1rem;
  }
  .salary-amount{
    font-size: 1.3rem;
  }
  .student-photo{
    width: 70px;
    height: 70px;
    top: 0.5rem;
    right: 0.5rem;
  }
  .card-footer{
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
  }
  .logo-text{
    font-size: 1rem;
  }
  .website{
    font-size: 0.7rem;
  }
  
  /* PLACEMENT TEAM SMALL MOBILE */
  .team-member{
    padding: 1.5rem;
  }
  .member-photo{
    width: 100px;
    height: 100px;
  }
  .member-name{
    font-size: 1.2rem;
  }
  .member-designation{
    font-size: 1rem;
  }
  .placement-message{
    padding: 1.5rem;
  }
  .message-content p{
    font-size: 0.9rem;
  }
  .contact-info{
    padding: 1rem;
  }
  .contact-actions{
    flex-direction: column;
  }
  .contact-btn{
    justify-content: center;
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  
  /* TPO IMAGE SMALL MOBILE */
  .tpo-image{
    width: 80px;
    height: 80px;
  }
}
</style>
