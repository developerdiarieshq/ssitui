<template>
  <div class="academic-council-wrapper">
    <Header/>
    <NavBar/>
    <section class="academic-council-page">
    <!-- Hero Section -->
    <header class="hero text-center text-white">
      <div class="container">
        <h1 class="title">Academic Council</h1>
        <p class="subtitle">Highest Academic Authority of Sai Spurthi Institute of Technology</p>
        <p class="context">
          Affiliated to Jawaharlal Nehru Technological University, Hyderabad (JNTUH) | 
          NAAC 'B+' Grade Accredited | Established in 2001 by VIPASSANA Educational Society
        </p>
      </div>
    </header>

    <!-- About Academic Council -->
    <div class="container my-5">
      <div class="text-center mb-4">
        <h3 class="section-title">About Academic Council</h3>
        <div class="underscore"></div>
      </div>
      <p class="text-muted text-justify">
        The <strong>Academic Council</strong> serves as the principal academic authority of
        Sai Spurthi Institute of Technology, established in 2001 by VIPASSANA Educational
        Society. It ensures quality education delivery and maintains academic standards
        as per <strong>JNTUH affiliation requirements</strong> and <strong>AICTE guidelines</strong>.
      </p>
    </div>

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

      <!-- Members -->
      <section :id="tabsMap.members" class="card-section" v-show="activeTab==='members'">
        <!-- Search and Filter Controls -->
        <div class="controls-card">
          <div class="row g-3 align-items-center">
            <div class="col-md-4">
              <div class="search-box">
                <i class="fa-solid fa-search search-icon"></i>
                <input 
                  type="text" 
                  class="form-control search-input" 
                  placeholder="Search members by name..."
                  v-model="searchQuery"
                >
              </div>
            </div>
            <div class="col-md-3">
              <select class="form-select filter-select" v-model="selectedPosition">
                <option value="">All Positions</option>
                <option value="Chairman & Principal">Chairman & Principal</option>
                <option value="Management Member">Management Member</option>
                <option value="HOD - EEE">HOD - EEE</option>
                <option value="HOD - MECH">HOD - MECH</option>
                <option value="HOD - ECE">HOD - ECE</option>
                <option value="HOD - CSE">HOD - CSE</option>
                <option value="HOD - H&S">HOD - H&S</option>
                <option value="HOD - MBA">HOD - MBA</option>
                <option value="Librarian">Librarian</option>
                <option value="NAAC Coordinator">NAAC Coordinator</option>
                <option value="IQAC Coordinator">IQAC Coordinator</option>
              </select>
            </div>
            <div class="col-md-3">
              <div class="view-toggle">
                <button 
                  class="view-btn" 
                  :class="{ active: viewMode === 'grid' }"
                  @click="setViewMode('grid')"
                  title="Grid View"
                >
                  <i class="fa-solid fa-th"></i>
                </button>
                <button 
                  class="view-btn" 
                  :class="{ active: viewMode === 'list' }"
                  @click="setViewMode('list')"
                  title="List View"
                >
                  <i class="fa-solid fa-list"></i>
                </button>
              </div>
            </div>
            <div class="col-md-2">
              <div class="results-count">
                <span class="count-text">{{ filteredMembers.length }} member(s)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Members Display - Grid View -->
        <div v-if="viewMode === 'grid'" class="members-grid">
          <div class="member-card" v-for="(member, index) in filteredMembers" :key="index">
            <div class="member-header">
              <span class="member-serial">{{ index + 1 }}</span>
              <div class="member-photo">
                <img :src="member.image" :alt="member.name" class="photo">
              </div>
            </div>
            <div class="member-info">
              <h5 class="member-name">{{ member.name }}</h5>
              <p class="member-position">{{ member.position }}</p>
            </div>
          </div>
        </div>

        <!-- Members Display - List View -->
        <div v-if="viewMode === 'list'" class="members-list">
          <div class="list-header">
            <div class="row">
              <div class="col-md-1">
                <strong>No.</strong>
              </div>
              <div class="col-md-5">
                <strong>Member Name</strong>
              </div>
              <div class="col-md-4">
                <strong>Position</strong>
              </div>
              <div class="col-md-2 text-center">
                <strong>Photo</strong>
              </div>
            </div>
          </div>
          <div class="member-list-item" v-for="(member, index) in filteredMembers" :key="index">
            <div class="row align-items-center">
              <div class="col-md-1">
                <span class="member-serial-list">{{ index + 1 }}</span>
              </div>
              <div class="col-md-5">
                <h6 class="member-name-list">{{ member.name }}</h6>
              </div>
              <div class="col-md-4">
                <span class="member-position-list">{{ member.position }}</span>
                </div>
              <div class="col-md-2 text-center">
                <img :src="member.image" :alt="member.name" class="photo-list">
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredMembers.length === 0" class="no-results">
          <i class="fa-solid fa-search"></i>
          <h5>No members found</h5>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </section>

      <!-- Meetings -->
      <section :id="tabsMap.meetings" class="card-section" v-show="activeTab==='meetings'">
        <div class="card">
          <div class="card-head">
            <h5 class="card-title mb-0">Meeting Minutes & Records</h5>
            <input
              v-model="meetingsSearchQuery"
              type="text"
              class="search"
              placeholder="Search meeting minutes by year or summary…"
              aria-label="Search meeting minutes"
            />
          </div>

          <div class="row">
            <!-- Left: List -->
            <div class="col-md-4">
              <div class="doc-grid">
                <button
                  v-for="meeting in filteredMeetings"
                  :key="meeting.no + meeting.summary"
                  class="doc w-100 text-start"
                  @click="viewMeetingDoc(meeting)"
                >
                  <i class="far fa-file-pdf doc-icon"></i>
                  <div class="doc-meta">
                    <strong class="doc-title">{{ meeting.no }}</strong>
                    <span class="doc-sub">{{ meeting.summary }}</span>
                  </div>
                  <span class="doc-cta" v-if="meeting.document">View</span>
                  <span class="doc-cta text-muted" v-else>N/A</span>
                </button>
              </div>
            </div>

            <!-- Right: PDF Viewer -->
            <div class="col-md-8">
              <div v-if="currentMeetingDoc" class="pdf-viewer shadow-sm">
                <div class="pdf-controls mb-3">
                  <button @click="openPdfViewer" class="btn btn-sm btn-orange me-2">
                    <i class="fas fa-expand me-1"></i> View Fullscreen
                  </button>
                  <a :href="currentMeetingDoc.document" target="_blank" class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-download me-1"></i> Download
                  </a>
                </div>
                <h6 class="fw-bold mb-2">
                  <i class="fas fa-file-pdf text-danger me-2"></i>
                  {{ currentMeetingDoc.no }} - {{ currentMeetingDoc.summary }}
                </h6>
                <div class="pdf-preview">
                  <iframe
                    :src="currentMeetingDoc.document"
                    width="100%"
                    height="400px"
                    style="border:1px solid #ddd; border-radius:6px;"
                  ></iframe>
                </div>
              </div>
              <div v-else class="alert alert-info text-center">
                <i class="fas fa-info-circle me-2"></i>
                Select a meeting from the left to preview minutes
              </div>
            </div>
          </div>

          <div class="muted mt-2">
            Missing a meeting record? Write to <a href="mailto:sssit.principal@gmail.com">sssit.principal@gmail.com</a>
          </div>
        </div>
      </section>
    </main>
    </section>
    
    <!-- PDF Viewer Modal -->
    <PdfViewer 
      :show="showPdfModal" 
      :url="currentPdfUrl" 
      :title="currentPdfTitle"
      @close="closePdfModal"
    />
    
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import PdfViewer from '../utils/PdfViewer.vue';
import { ref, computed, onMounted, watch } from "vue"
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeTab = ref("members")
const searchQuery = ref('')
const selectedPosition = ref('')
const viewMode = ref('grid') // 'grid' or 'list'
const meetingsSearchQuery = ref('')
const selectedMeetingYear = ref('')
const selectedMeetingStatus = ref('')
const meetingsViewMode = ref('grid') // 'grid' or 'list'

// Tabs configuration
const tabs = [
  { id: 'members', label: 'Current Members', icon: 'fa-solid fa-users', path: '/academic-council/current_members' },
  { id: 'meetings', label: 'Meeting Schedule & Records', icon: 'fa-solid fa-calendar-days', path: '/academic-council/Meeting-schedule_records' }
]

const tabsMap = {
  members: "members",
  meetings: "meetings"
}

// Tab navigation method
const setTab = (id) => {
  activeTab.value = id
  const tab = tabs.find(t => t.id === id)
  if (tab && tab.path) {
    router.push(tab.path)
  }
  // Keep the user at the same scroll position - no auto-scroll
}

// Initialize active tab based on current route
onMounted(() => {
  const currentTab = tabs.find(t => t.path === route.path)
  if (currentTab) {
    activeTab.value = currentTab.id
  } else if (route.path === '/academic-council') {
    activeTab.value = 'members'
  } else if (route.path === '/academic-council/current_members') {
    activeTab.value = 'members'
  } else if (route.path === '/academic-council/Meeting-schedule_records') {
    activeTab.value = 'meetings'
  }
})

// Watch for route changes and update active tab
watch(() => route.path, (newPath) => {
  const tab = tabs.find(t => t.path === newPath)
  if (tab) {
    activeTab.value = tab.id
  } else if (newPath === '/academic-council') {
    activeTab.value = 'members'
  } else if (newPath === '/academic-council/current_members') {
    activeTab.value = 'members'
  } else if (newPath === '/academic-council/Meeting-schedule_records') {
    activeTab.value = 'meetings'
  }
})

// View mode methods
const setViewMode = (mode) => {
  viewMode.value = mode
}

const setMeetingsViewMode = (mode) => {
  meetingsViewMode.value = mode
}

// Document handling methods
const viewDocument = (meeting) => {
  if (meeting.document) {
    window.open(meeting.document, '_blank')
  }
}

const downloadDocument = (meeting) => {
  if (meeting.document) {
    const link = document.createElement('a')
    link.href = meeting.document
    link.download = `${meeting.summary}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

// Mandatory Disclosure style document handling
const currentMeetingDoc = ref(null)

// PDF Viewer state
const showPdfModal = ref(false)
const currentPdfUrl = ref('')
const currentPdfTitle = ref('')

const viewMeetingDoc = (meeting) => {
  if (meeting.document) {
    currentMeetingDoc.value = meeting
  }
}

const openPdfViewer = () => {
  if (currentMeetingDoc.value) {
    showPdfModal.value = true
    currentPdfUrl.value = currentMeetingDoc.value.document
    currentPdfTitle.value = `${currentMeetingDoc.value.no} - ${currentMeetingDoc.value.summary}`
  }
}

const closePdfModal = () => {
  showPdfModal.value = false
  currentPdfUrl.value = ''
  currentPdfTitle.value = ''
}

// Members Data (from your uploaded committee)
const members = [
  { 
    name: "Dr. V S Ratna Kumari", 
    position: "Principal",
    image: new URL('@/assets/academic_council/1.jpg', import.meta.url).href
  },
  { 
    name: "Sri. D. Prabhakar Reddy", 
    position: "Management Member",
    image: new URL('@/assets/academic_council/2.jpg', import.meta.url).href
  },
  { 
    name: "Sri. K. Ramakrishna Prasad", 
    position: "HOD - EEE",
    image: new URL('@/assets/academic_council/3.jpg', import.meta.url).href
  },
  { 
    name: "Dr. K. Bhaskar Mutyalu", 
    position: "HOD - MECH",
    image: new URL('@/assets/academic_council/4.jpg', import.meta.url).href
  },
  { 
    name: "Dr. P. Sekhar Babu", 
    position: "HOD - ECE",
    image: new URL('@/assets/academic_council/5.jpg', import.meta.url).href
  },
  { 
    name: "Dr. Sk. Yakoob", 
    position: "HOD - CSE",
    image: new URL('@/assets/academic_council/6.jpg', import.meta.url).href
  },
  { 
    name: "Dr. Sk. MeeraSaheb", 
    position: "HOD - H&S",
    image: new URL('@/assets/academic_council/7.jpg', import.meta.url).href
  },
  { 
    name: "Dr. D. N. V. Krishna Reddy", 
    position: "HOD - MBA",
    image: new URL('@/assets/academic_council/8.jpg', import.meta.url).href
  },
  { 
    name: "Sri. G. Upendra", 
    position: "Librarian",
    image: new URL('@/assets/academic_council/9.jpg', import.meta.url).href
  },
  { 
    name: "Dr. CH. Vijaya Kumar", 
    position: "NAAC Coordinator",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+"
  },
  { 
    name: "Sri. K. Ramakrishna Prasad", 
    position: "IQAC Coordinator",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNmOTczMTYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xNiAxNkMxOC4yMDkxIDE2IDIwIDE0LjIwOTEgMjAgMTJDMjAgOS43OTA5MSAxOC4yMDkxIDggMTYgOEMxMy43OTA5IDggMTIgOS43OTA5MSAxMiAxMkMxMiAxNC4yMDkxIDEzLjc5MDkgMTYgMTYgMTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTYgMTlDMTEuNTgxNyAxOSA4IDIyLjU4MTcgOCAyN1YyOUgyNFYyN0MyNCAyMi41ODE3IDIwLjQxODMgMTkgMTYgMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4KPC9zdmc+"
  },
]

// Computed property for filtered members
const filteredMembers = computed(() => {
  let filtered = members
  
  // Filter by search query
  if (searchQuery.value) {
    filtered = filtered.filter(member => 
      member.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }
  
  // Filter by selected position
  if (selectedPosition.value) {
    filtered = filtered.filter(member => member.position === selectedPosition.value)
  }
  
  return filtered
})

// Computed property for filtered meetings
const filteredMeetings = computed(() => {
  // If no year is selected, show all meetings from all years
  let filtered = []
  
  if (selectedMeetingYear.value) {
    // Show meetings from selected year only
    filtered = meetings[selectedMeetingYear.value] || []
  } else {
    // Show all meetings from all years
    Object.values(meetings).forEach(yearMeetings => {
      filtered = filtered.concat(yearMeetings)
    })
  }
  
  // Filter by search query
  if (meetingsSearchQuery.value) {
    filtered = filtered.filter(meeting => 
      meeting.summary.toLowerCase().includes(meetingsSearchQuery.value.toLowerCase())
    )
  }
  
  // Filter by selected status
  if (selectedMeetingStatus.value) {
    filtered = filtered.filter(meeting => meeting.status === selectedMeetingStatus.value)
  }
  
  return filtered
})

const meetingYears = ["2020-21", "2019-20", "2018-19", "2017-18", "2016-17"]
const activeYear = ref("2020-21")

const meetings = {
  "2020-21": [
    { 
      no: "Academic Council Meeting", 
      status: "Completed", 
      summary: "Academic Council Meeting Minutes 2020-21",
      document: new URL('@/assets/docs/academic_council/2020-2021.pdf', import.meta.url).href
    },
  ],
  "2019-20": [
    { 
      no: "Academic Council Meeting", 
      status: "Completed", 
      summary: "Academic Council Meeting Minutes 2019-20",
      document: new URL('@/assets/docs/academic_council/2019-2020.pdf', import.meta.url).href
    },
  ],
  "2018-19": [
    { 
      no: "Academic Council Meeting", 
      status: "Completed", 
      summary: "Academic Council Meeting Minutes 2018-19",
      document: new URL('@/assets/docs/academic_council/2018-2019.pdf', import.meta.url).href
    },
  ],
  "2017-18": [
    { 
      no: "Academic Council Meeting", 
      status: "Completed", 
      summary: "Academic Council Meeting Minutes 2017-18",
      document: new URL('@/assets/docs/academic_council/2017-2018.pdf', import.meta.url).href
    },
  ],
  "2016-17": [
    { 
      no: "Academic Council Meeting", 
      status: "Completed", 
      summary: "Academic Council Meeting Minutes 2016-17",
      document: new URL('@/assets/docs/academic_council/2016-2017.pdf', import.meta.url).href
    },
  ],
}
</script>

<style scoped>
.academic-council-wrapper {
  min-height: 100vh;
}

.academic-council-page {
  --orange: #FF7701;
  --ink: #1a2238;
}

/* HERO */
.hero {
  background: var(--ink);
  padding: 3rem 0;
}
.title {
  font-weight: 800;
  font-size: 2.2rem;
}
.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}
.context {
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Section Title */
.section-title {
  font-weight: 700;
  color: var(--orange);
}
.underscore {
  width: 60px;
  height: 4px;
  background: var(--orange);
  margin: 10px auto 20px;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scaleX(1);
  }
  50% {
    opacity: 0.7;
    transform: scaleX(1.1);
  }
  100% {
    opacity: 1;
    transform: scaleX(1);
  }
}

/* Members Grid */
.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.member-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}

.member-header {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.member-serial {
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--orange);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  z-index: 2;
  box-shadow: 0 2px 8px rgba(255, 119, 1, 0.3);
}

.member-photo {
  margin-bottom: 0;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 119, 1, 0.15);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.member-card:hover .photo {
  transform: scale(1.05);
}

.member-name {
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--ink);
}

.member-position {
  color: var(--orange);
  font-weight: 600;
  margin-bottom: 0;
}

/* STICKY SUB NAV */
.subnav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  margin: 1rem auto;
  width: 100%;
  max-width: none;
}

.subnav-inner {
  display: flex;
  gap: .5rem;
  padding: .6rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
}

.chip {
  border: 1px solid var(--border);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: .5rem .9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: .5rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  min-width: fit-content;
  flex-shrink: 0;
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
  font-weight: 700;
}

.chip.active i {
  color: #fff;
}

/* Orange Accent */
.text-orange {
  color: var(--orange);
}

/* Controls Card */
.controls-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  margin-bottom: 2rem;
}

/* Search Box */
.search-box {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--orange);
  z-index: 2;
}

.search-input {
  padding-left: 40px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 0.2rem rgba(255, 119, 1, 0.1);
}

/* Filter Select */
.filter-select {
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.filter-select:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 0.2rem rgba(255, 119, 1, 0.1);
}


/* View Toggle */
.view-toggle {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.view-btn {
  background: #fff;
  border: 2px solid var(--border);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: var(--navy);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  height: 44px;
}

.view-btn:hover {
  border-color: var(--orange);
  color: var(--orange);
}

.view-btn.active {
  background: var(--orange);
  border-color: var(--orange);
  color: white;
}

/* Results Count */
.results-count {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 44px;
}

.count-text {
  color: var(--navy);
  font-weight: 600;
  font-size: 0.9rem;
}

/* List View */
.members-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  overflow: hidden;
}

.list-header {
  background: var(--navy);
  color: white;
  padding: 1rem;
  font-size: 0.95rem;
}

.member-list-item {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  transition: background-color 0.3s ease;
}

.member-list-item:last-child {
  border-bottom: none;
}

.member-list-item:hover {
  background: rgba(255, 119, 1, 0.05);
}

.member-serial-list {
  background: var(--orange);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(255, 119, 1, 0.3);
}

.member-name-list {
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0;
}

.member-position-list {
  color: var(--orange);
  font-weight: 600;
}

.photo-list {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 119, 1, 0.15);
}

/* Meetings Grid View */
.meetings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.meeting-card-grid {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.meeting-card-grid:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--orange);
}

.meeting-header {
  background: var(--navy);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.meeting-icon {
  font-size: 1.5rem;
  color: var(--orange);
}

.meeting-number {
  background: var(--orange);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(255, 119, 1, 0.3);
}

.meeting-content {
  padding: 1.5rem;
}

.meeting-no {
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.meeting-summary {
  color: #6b7280;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.meeting-status {
  margin-bottom: 1rem;
}

.meeting-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

/* Meetings List View */
.meetings-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  overflow: hidden;
}

.meeting-list-item {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  transition: background-color 0.3s ease;
}

.meeting-list-item:last-child {
  border-bottom: none;
}

.meeting-list-item:hover {
  background: rgba(255, 119, 1, 0.05);
}

.meeting-number-list {
  background: var(--orange);
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 2px 8px rgba(255, 119, 1, 0.3);
}

.meeting-no-list {
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0;
}

.meeting-summary-list {
  color: #6b7280;
  font-size: 0.95rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 3rem 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.no-results i {
  font-size: 3rem;
  color: var(--border);
  margin-bottom: 1rem;
}

.no-results h5 {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #6b7280;
  margin-bottom: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .member-card {
    padding: 1rem;
  }
  
  .photo {
    width: 60px;
    height: 60px;
  }
  
  .member-name {
    font-size: 0.95rem;
  }
  
  .member-position {
    font-size: 0.85rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
  
  /* Meetings Responsive */
  .meetings-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .meeting-card-grid {
    margin-bottom: 1rem;
  }
  
  .meeting-content {
    padding: 1rem;
  }
  
  .meeting-actions {
    flex-direction: column;
  }
  
  .meeting-actions .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .controls-card .row > div {
    margin-bottom: 1rem;
  }
  
  .view-toggle {
    justify-content: flex-start;
  }
  
  .results-count {
    justify-content: flex-start;
  }
}

/* CSS Variables */
:root {
  --border: #e5e7eb;
  --navy: #1e40af;
}

/* Mandatory Disclosure Style */
.search{border:1px solid #e9e9f4;border-radius:8px;padding:8px 12px;max-width:320px;width:100%}
.card-head{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-bottom:10px}

/* Documents */
.doc-grid{display:grid;grid-template-columns:1fr;gap:12px}
.doc{display:flex;align-items:center;gap:12px;border:1px solid #eee;border-radius:12px;padding:12px;background:#fff;text-decoration:none;color:inherit;transition:.2s;cursor:pointer}
.doc:hover{border-color:var(--orange);box-shadow:0 8px 18px rgba(255,119,1,.08);background:#fafafa}
.doc-icon{font-size:28px;color:var(--orange)}
.doc-title{display:block}
.doc-sub{display:block;color:var(--muted);font-size:.9rem}
.doc-cta{margin-left:auto;font-weight:800;color:var(--orange)}
.pdf-viewer{background:#fff;padding:15px;border-radius:10px}
.pdf-preview{background:#f8f9fa;border-radius:6px;overflow:hidden}
.pdf-controls{display:flex;gap:0.5rem;align-items:center}

/* Chips */
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{border:1px solid #e9e9f4;border-radius:999px;padding:6px 10px;background:#fff;font-weight:700}
.muted{color:var(--muted);font-size:.92rem}

/* Custom button */
.btn-orange{background:var(--orange);color:#fff;font-weight:600;border-radius:6px;padding:6px 12px}
.btn-orange:hover{background:#e65f00}
</style>
