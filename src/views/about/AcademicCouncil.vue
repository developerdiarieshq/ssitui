<template>
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
          NAAC 'B' Grade Accredited | Established in 2001 by VIPASSANA Educational Society
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
        <div class="meeting-info row text-center mb-5">
          <div class="col-md-4">
            <div class="p-3 shadow-sm rounded bg-light">
              <h6 class="fw-bold">Meeting Frequency</h6>
              <p class="text-muted small mb-0">
                Twice per academic year + special/emergency meetings
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 shadow-sm rounded bg-light">
              <h6 class="fw-bold">Quorum & Procedures</h6>
              <p class="text-muted small mb-0">
                One-third members required, simple majority, Chairman casting vote
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="p-3 shadow-sm rounded bg-light">
              <h6 class="fw-bold">Documentation</h6>
              <p class="text-muted small mb-0">
                Minutes circulated, archived & transparent decision-making
              </p>
            </div>
          </div>
        </div>


        <!-- Search and Filter Controls for Meetings -->
        <div class="controls-card">
          <div class="row g-3 align-items-center">
            <div class="col-md-3">
              <div class="search-box">
                <i class="fa-solid fa-search search-icon"></i>
                <input 
                  type="text" 
                  class="form-control search-input" 
                  placeholder="Search meetings by summary..."
                  v-model="meetingsSearchQuery"
                >
              </div>
            </div>
            <div class="col-md-2">
              <select class="form-select filter-select" v-model="selectedMeetingYear">
                <option value="">All Years</option>
                <option v-for="year in meetingYears" :key="year" :value="year">{{ year }}</option>
              </select>
            </div>
            <div class="col-md-2">
              <select class="form-select filter-select" v-model="selectedMeetingStatus">
                <option value="">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
            <div class="col-md-3">
              <div class="view-toggle">
                <button 
                  class="view-btn" 
                  :class="{ active: meetingsViewMode === 'grid' }"
                  @click="setMeetingsViewMode('grid')"
                  title="Grid View"
                >
                  <i class="fa-solid fa-th"></i>
                </button>
                <button 
                  class="view-btn" 
                  :class="{ active: meetingsViewMode === 'list' }"
                  @click="setMeetingsViewMode('list')"
                  title="List View"
                >
                  <i class="fa-solid fa-list"></i>
                </button>
              </div>
            </div>
            <div class="col-md-2">
              <div class="results-count">
                <span class="count-text">{{ filteredMeetings.length }} meeting(s)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Meetings Display - Grid View -->
        <div v-if="meetingsViewMode === 'grid'" class="meetings-grid">
          <div class="meeting-card-grid" v-for="(meeting, index) in filteredMeetings" :key="index">
            <div class="meeting-header">
              <i class="fa-solid fa-file-alt meeting-icon"></i>
              <span class="meeting-number">{{ index + 1 }}</span>
            </div>
            <div class="meeting-content">
              <h6 class="meeting-no">{{ meeting.no }}</h6>
              <p class="meeting-summary">{{ meeting.summary }}</p>
              <div class="meeting-status">
                <span class="badge" :class="meeting.status === 'Completed' ? 'bg-success' : meeting.status === 'Scheduled' ? 'bg-primary' : 'bg-warning'">
                  {{ meeting.status }}
                </span>
              </div>
              <div class="meeting-actions mt-3">
                <button class="btn btn-outline-primary btn-sm me-2">
                  <i class="fa-solid fa-eye me-1"></i>View
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  <i class="fa-solid fa-download me-1"></i>Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Meetings Display - List View -->
        <div v-if="meetingsViewMode === 'list'" class="meetings-list">
          <div class="list-header">
            <div class="row">
              <div class="col-md-2">
                <strong>No.</strong>
              </div>
              <div class="col-md-2">
                <strong>Meeting No.</strong>
              </div>
              <div class="col-md-4">
                <strong>Summary</strong>
              </div>
              <div class="col-md-2">
                <strong>Status</strong>
              </div>
              <div class="col-md-2 text-center">
                <strong>Actions</strong>
              </div>
            </div>
          </div>
          <div class="meeting-list-item" v-for="(meeting, index) in filteredMeetings" :key="index">
            <div class="row align-items-center">
              <div class="col-md-2">
                <span class="meeting-number-list">{{ index + 1 }}</span>
              </div>
              <div class="col-md-2">
                <h6 class="meeting-no-list">{{ meeting.no }}</h6>
              </div>
              <div class="col-md-4">
                <span class="meeting-summary-list">{{ meeting.summary }}</span>
              </div>
              <div class="col-md-2">
                <span class="badge" :class="meeting.status === 'Completed' ? 'bg-success' : meeting.status === 'Scheduled' ? 'bg-primary' : 'bg-warning'">
                  {{ meeting.status }}
                </span>
              </div>
              <div class="col-md-2 text-center">
                <button class="btn btn-outline-primary btn-sm me-1">
                  <i class="fa-solid fa-eye"></i>
                </button>
                <button class="btn btn-outline-secondary btn-sm">
                  <i class="fa-solid fa-download"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results Message -->
        <div v-if="filteredMeetings.length === 0" class="no-results">
          <i class="fa-solid fa-calendar-days"></i>
          <h5>No meetings found</h5>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </section>
    </main>
  </section>
  <Footer/>
</template>

<script setup>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import { ref, computed } from "vue"

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
  { id: 'members', label: 'Current Members', icon: 'fa-solid fa-users' },
  { id: 'meetings', label: 'Meeting Schedule & Records', icon: 'fa-solid fa-calendar-days' }
]

const tabsMap = {
  members: "members",
  meetings: "meetings"
}

// Tab navigation method
const setTab = (id) => {
  activeTab.value = id
}

// View mode methods
const setViewMode = (mode) => {
  viewMode.value = mode
}

const setMeetingsViewMode = (mode) => {
  meetingsViewMode.value = mode
}

// Members Data (from your uploaded committee)
const members = [
  { 
    name: "Dr. V S Ratna Kumari", 
    position: "Chairman & Principal",
    image: new URL('@/assets/management/principal.jpg', import.meta.url).href
  },
  { 
    name: "Sri. D. Prabhakar Reddy", 
    position: "Management Member",
    image: new URL('@/assets/management/secretary.jpg', import.meta.url).href
  },
  { 
    name: "Sri. K. Ramakrishna Prasad", 
    position: "HOD - EEE",
    image: new URL('@/assets/faculty/cse/CS04.jpg', import.meta.url).href
  },
  { 
    name: "Dr. K. Bhaskar Mutyalu", 
    position: "HOD - MECH",
    image: new URL('@/assets/faculty/cse/CS07.jpg', import.meta.url).href
  },
  { 
    name: "Dr. P. Sekhar Babu", 
    position: "HOD - ECE",
    image: new URL('@/assets/faculty/cse/CS10.jpg', import.meta.url).href
  },
  { 
    name: "Dr. Sk. Yakoob", 
    position: "HOD - CSE",
    image: new URL('@/assets/faculty/cse/CS11.jpg', import.meta.url).href
  },
  { 
    name: "Dr. Sk. MeeraSaheb", 
    position: "HOD - H&S",
    image: new URL('@/assets/faculty/cse/CS18.jpg', import.meta.url).href
  },
  { 
    name: "Dr. D. N. V. Krishna Reddy", 
    position: "HOD - MBA",
    image: new URL('@/assets/faculty/cse/CS22.jpg', import.meta.url).href
  },
  { 
    name: "Sri. G. Upendra", 
    position: "Librarian",
    image: new URL('@/assets/faculty/cse/CS04.jpg', import.meta.url).href
  },
  { 
    name: "Dr. CH. Vijaya Kumar", 
    position: "NAAC Coordinator",
    image: new URL('@/assets/faculty/cse/CS07.jpg', import.meta.url).href
  },
  { 
    name: "Sri. K. Ramakrishna Prasad", 
    position: "IQAC Coordinator",
    image: new URL('@/assets/faculty/cse/CS10.jpg', import.meta.url).href
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
  // Start with selected year or default to current year
  const yearToShow = selectedMeetingYear.value || activeYear.value
  let filtered = meetings[yearToShow] || []
  
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

const meetingYears = ["2024-25", "2023-24", "2022-23", "2021-22"]
const activeYear = ref("2024-25")

const meetings = {
  "2024-25": [
    { no: "Meeting 1", status: "Completed", summary: "Approval of academic calendar & syllabus updates" },
    { no: "Meeting 2", status: "Completed", summary: "Review of results & quality enhancement measures" },
  ],
  "2023-24": [
    { no: "Meeting 1", status: "Completed", summary: "Industry collaboration review" },
  ],
  "2022-23": [
    { no: "Meeting 1", status: "Completed", summary: "NAAC preparation & documentation" },
  ],
  "2021-22": [
    { no: "Meeting 1", status: "Completed", summary: "Approval of R22 academic regulations" },
  ],
}
</script>

<style scoped>
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
  transition: all 0.3s ease;
  min-height: 40px;
  min-width: fit-content;
  flex-shrink: 0;
}

.chip i {
  color: var(--navy);
}

.chip.active {
  border-color: var(--navy);
  background: rgba(30, 64, 175, 0.08);
  color: var(--navy);
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
</style>
