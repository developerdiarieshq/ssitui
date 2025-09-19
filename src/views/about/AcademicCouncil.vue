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
          class="nav-chip"
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
        <div class="row g-4">
          <div
            v-for="m in members"
            :key="m.name"
            class="col-md-4"
          >
            <div class="card h-100 shadow-sm border-0 member-card">
              <div class="card-body text-center">
                <div class="icon mb-3">
                  <i class="fas fa-user-circle fa-3x text-orange"></i>
                </div>
                <h5 class="fw-bold">{{ m.name }}</h5>
                <p class="role text-orange">{{ m.position }}</p>
                <p class="small text-muted mb-1"><i class="fas fa-university"></i> SSIT</p>
                <p v-if="m.email" class="small mb-1"><i class="fas fa-envelope"></i> {{ m.email }}</p>
                <p v-if="m.phone" class="small mb-0"><i class="fas fa-phone"></i> {{ m.phone }}</p>
              </div>
            </div>
          </div>
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

        <!-- Year Tabs -->
        <ul class="nav nav-pills justify-content-center mb-4">
          <li v-for="year in meetingYears" :key="year" class="nav-item">
            <button
              class="nav-link"
              :class="{ active: activeYear === year }"
              @click="activeYear = year"
            >
              {{ year }}
            </button>
          </li>
        </ul>

        <!-- Meetings List -->
        <div>
          <div
            v-for="(meeting, i) in meetings[activeYear]"
            :key="i"
            class="card mb-3 shadow-sm"
          >
            <div class="card-body">
              <h6 class="fw-bold mb-1">
                Academic Council Meeting - {{ activeYear }} ({{ meeting.no }})
              </h6>
              <p class="text-muted small mb-1">Status: <span class="text-success">{{ meeting.status }}</span></p>
              <p class="small mb-0">Summary: {{ meeting.summary }}</p>
            </div>
          </div>
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
import { ref } from "vue"

const activeTab = ref("members")

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

// Members Data (from your uploaded committee)
const members = [
  { name: "Dr. V S Ratna Kumari", position: "Chairman & Principal", email: "principal@ssit.ac.in", phone: "+91-XXXX-XXXXXX" },
  { name: "Sri. D. Prabhakar Reddy", position: "Management Member" },
  { name: "Sri. K. Ramakrishna Prasad", position: "HOD - EEE" },
  { name: "Dr. K. Bhaskar Mutyalu", position: "HOD - MECH" },
  { name: "Dr. P. Sekhar Babu", position: "HOD - ECE" },
  { name: "Dr. Sk. Yakoob", position: "HOD - CSE" },
  { name: "Dr. Sk. MeeraSaheb", position: "HOD - H&S" },
  { name: "Dr. D. N. V. Krishna Reddy", position: "HOD - MBA" },
  { name: "Sri. G. Upendra", position: "Librarian" },
  { name: "Dr. CH. Vijaya Kumar", position: "NAAC Coordinator" },
  { name: "Sri. K. Ramakrishna Prasad", position: "IQAC Coordinator" },
]

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
}

/* Member Cards */
.member-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.role {
  font-weight: 600;
}

/* Orange Accent */
.text-orange {
  color: var(--orange);
}
</style>
