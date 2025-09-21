<template>
  <div>
    <Header />
    <NavBar />

    <main class="gb-page">
      <!-- Hero -->
      <header class="hero text-center">
        <div class="container">
          <h1 class="display-5 fw-bold text-white">Governing Body</h1>
          <p class="lead text-white-50">
            Leadership committed to academic excellence, governance, and student welfare
          </p>
          <p class="tagline">VIPASSANA Educational Society • Sai Spurthi Institute of Technology</p>
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
        <!-- Governing Body Members -->
        <section :id="tabsMap.members" class="card-section" v-show="activeTab==='members'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-users"></i> Governing Body Members</h2>
            <p class="lead">
              The Governing Body provides strategic direction, academic oversight, and ensures the institute's compliance
              with AICTE and JNTUH guidelines.
            </p>
          </div>

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
                <select class="form-select filter-select" v-model="selectedRole">
                  <option value="">All Positions</option>
                  <option value="Chairman">Chairman</option>
                  <option value="Secretary & Correspondent">Secretary & Correspondent</option>
                  <option value="JNTUH Nominee">JNTUH Nominee</option>
                  <option value="SBTET Nominee">SBTET Nominee</option>
                  <option value="Member">Member</option>
                  <option value="Member Secretary">Member Secretary</option>
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

          <!-- Members Display -->
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
                <p class="member-position">{{ member.role }}</p>
              </div>
            </div>
          </div>

          <!-- List View -->
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
                  <span class="member-position-list">{{ member.role }}</span>
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

        <!-- Governing Body Minutes -->
        <section :id="tabsMap.minutes" class="card-section" v-show="activeTab==='minutes'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-file-alt"></i> Governing Body Minutes</h2>
            <p class="lead">
              The Governing Body shall guide the college while fulfilling the objectives for which the college has been granted an autonomous status.
              Minutes of past meetings are available for public access.
            </p>
          </div>

          <!-- Search and Filter Controls -->
          <div class="controls-card">
            <div class="row g-3 align-items-center">
              <div class="col-md-3">
                <div class="search-box">
                  <i class="fa-solid fa-search search-icon"></i>
                  <input 
                    type="text" 
                    class="form-control search-input" 
                    placeholder="Search by meeting date..."
                    v-model="minutesSearchQuery"
                  >
                </div>
              </div>
              <div class="col-md-2">
                <select class="form-select filter-select" v-model="selectedYear">
                  <option value="">All Years</option>
                  <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
                </select>
              </div>
              <div class="col-md-2">
                <select class="form-select filter-select" v-model="selectedMonth">
                  <option value="">All Months</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="col-md-3">
                <div class="view-toggle">
                  <button 
                    class="view-btn" 
                    :class="{ active: minutesViewMode === 'grid' }"
                    @click="setMinutesViewMode('grid')"
                    title="Grid View"
                  >
                    <i class="fa-solid fa-th"></i>
                  </button>
                  <button 
                    class="view-btn" 
                    :class="{ active: minutesViewMode === 'list' }"
                    @click="setMinutesViewMode('list')"
                    title="List View"
                  >
                    <i class="fa-solid fa-list"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-2">
                <div class="results-count">
                  <span class="count-text">{{ filteredMinutes.length }} minute(s)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Minutes Display - Grid View -->
          <div v-if="minutesViewMode === 'grid'" class="minutes-grid">
            <div class="minute-card" v-for="(minute, index) in filteredMinutes" :key="index">
              <div class="minute-header">
                <i class="fa-solid fa-file-pdf minute-icon"></i>
                <span class="minute-number">{{ index + 1 }}</span>
              </div>
              <div class="minute-content">
                <h6 class="minute-date">{{ minute.date }}</h6>
                <p class="minute-description">{{ minute.title || 'Meeting Minutes' }}</p>
                <button 
                  @click="openPdfViewer(minute)" 
                  class="btn btn-outline-primary btn-sm me-2"
                >
                  <i class="fa-solid fa-eye me-1"></i>View
                </button>
                <a :href="minute.link" target="_blank" class="btn btn-outline-secondary btn-sm">
                  <i class="fa-solid fa-download me-1"></i>Download
                </a>
              </div>
            </div>
          </div>

          <!-- Minutes Display - List View -->
          <div v-if="minutesViewMode === 'list'" class="minutes-list">
            <div class="list-header">
              <div class="row">
                <div class="col-md-2">
                  <strong>No.</strong>
                </div>
                <div class="col-md-3">
                  <strong>Meeting Date</strong>
                </div>
                <div class="col-md-4">
                  <strong>Title</strong>
                </div>
                <div class="col-md-3 text-center">
                  <strong>Actions</strong>
                </div>
              </div>
            </div>
            <div class="minute-list-item" v-for="(minute, index) in filteredMinutes" :key="index">
              <div class="row align-items-center">
                <div class="col-md-2">
                  <span class="minute-number-list">{{ index + 1 }}</span>
                </div>
                <div class="col-md-3">
                  <span class="minute-date-list">{{ minute.date }}</span>
                </div>
                <div class="col-md-4">
                  <span class="minute-title-list">{{ minute.title || 'Meeting Minutes' }}</span>
                </div>
                <div class="col-md-3 text-center">
                  <button 
                    @click="openPdfViewer(minute)" 
                    class="btn btn-outline-primary btn-sm me-1"
                  >
                    <i class="fa-solid fa-eye"></i>
                  </button>
                  <a :href="minute.link" target="_blank" class="btn btn-outline-secondary btn-sm">
                    <i class="fa-solid fa-download"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- No Results Message -->
          <div v-if="filteredMinutes.length === 0" class="no-results">
            <i class="fa-solid fa-file-alt"></i>
            <h5>No minutes found</h5>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        </section>

        <!-- PDF Viewer Modal -->
        <div v-if="showPdfViewer" class="pdf-modal-overlay" @click="closePdfViewer">
          <div class="pdf-modal" @click.stop>
            <div class="pdf-modal-header">
              <h5 class="pdf-modal-title">{{ selectedMinute?.title || 'Meeting Minutes' }}</h5>
              <button @click="closePdfViewer" class="pdf-close-btn">
                <i class="fa-solid fa-times"></i>
              </button>
            </div>
            <div class="pdf-modal-body">
              <div v-if="pdfLoading" class="pdf-loading">
                <i class="fa-solid fa-spinner fa-spin"></i>
                <p>Loading PDF...</p>
              </div>
              <div v-else-if="pdfError" class="pdf-error">
                <i class="fa-solid fa-exclamation-triangle"></i>
                <p>{{ pdfError }}</p>
                <button @click="closePdfViewer" class="btn btn-primary">Close</button>
              </div>
              <div v-else class="pdf-container">
                <iframe 
                  :src="pdfViewerUrl" 
                  class="pdf-iframe"
                  sandbox="allow-scripts allow-same-origin"
                  referrerpolicy="no-referrer"
                ></iframe>
              </div>
            </div>
            <div class="pdf-modal-footer">
              <button @click="downloadPdf" class="btn btn-outline-primary">
                <i class="fa-solid fa-download me-1"></i>Download PDF
              </button>
              <button @click="closePdfViewer" class="btn btn-secondary">
                <i class="fa-solid fa-times me-1"></i>Close
              </button>
            </div>
          </div>
      </div>
      </main>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "GoverningBody",
  components: { Header, NavBar, Footer },
  data() {
    return {
      activeTab: 'members',
      tabs: [
        { id: 'members', label: 'Members', icon: 'fa-solid fa-users' },
        { id: 'minutes', label: 'Minutes', icon: 'fa-solid fa-file-alt' }
      ],
      tabsMap: {
        members: 'members',
        minutes: 'minutes'
      },
      searchQuery: '',
      selectedRole: '',
      viewMode: 'grid', // 'grid' or 'list'
      minutesSearchQuery: '',
      selectedYear: '',
      selectedMonth: '',
      minutesViewMode: 'grid', // 'grid' or 'list'
      showPdfViewer: false,
      selectedMinute: null,
      pdfLoading: false,
      pdfError: null,
      pdfViewerUrl: '',
      members: [
        { 
          name: "Dr. B. Pardha Saradhi Reddy", 
          role: "Chairman",
          image: new URL('@/assets/management/chairman.jpg', import.meta.url).href
        },
        { 
          name: "Sri. D. Prabhakar Reddy", 
          role: "Secretary & Correspondent",
          image: new URL('@/assets/management/secretary.jpg', import.meta.url).href
        },
        { 
          name: "Sri. B. Vamsi Krishna Reddy", 
          role: "Member",
          image: new URL('@/assets/management/Trustee-1.png', import.meta.url).href
        },
        { 
          name: "Dr. K. Ratnakar Reddy", 
          role: "Member",
          image: new URL('@/assets/management/principal.jpg', import.meta.url).href
        },
        { 
          name: "Smt. B. Anvida", 
          role: "Member",
          image: new URL('@/assets/management/Trustee-1.png', import.meta.url).href
        },
        { 
          name: "Smt. B. Kalavathi", 
          role: "Member",
          image: new URL('@/assets/management/Trustee-1.png', import.meta.url).href
        },
        { 
          name: "Dr. M. Venu Gopala Rao", 
          role: "Member",
          image: new URL('@/assets/management/principal.jpg', import.meta.url).href
        },
        { 
          name: "Dr. V. Venkateswara Reddy", 
          role: "JNTUH Nominee",
          image: new URL('@/assets/management/principal.jpg', import.meta.url).href
        },
        { 
          name: "Sri. M. Raj Kumar", 
          role: "SBTET Nominee",
          image: new URL('@/assets/management/principal.jpg', import.meta.url).href
        },
        { 
          name: "Sri. K.V. Jawahar", 
          role: "Member",
          image: new URL('@/assets/management/principal.jpg', import.meta.url).href
        },
        { 
          name: "Dr. V.S.R. Kumari", 
          role: "Member Secretary",
          image: new URL('@/assets/management/principal.jpg', import.meta.url).href
        },
      ],
      minutes: [
        { date: "15-12-2025", title: "Annual Meeting 2025", link: "#", year: "2025", month: "12" },
        { date: "10-11-2025", title: "Monthly Review Meeting", link: "#", year: "2025", month: "11" },
        { date: "20-10-2025", title: "Academic Policy Review", link: "#", year: "2025", month: "10" },
        { date: "05-09-2025", title: "Budget Planning Session", link: "#", year: "2025", month: "09" },
        { date: "18-08-2025", title: "Infrastructure Development", link: "#", year: "2025", month: "08" },
        { date: "25-07-2025", title: "Faculty Recruitment", link: "#", year: "2025", month: "07" },
        { date: "12-06-2025", title: "Examination Committee", link: "#", year: "2025", month: "06" },
        { date: "30-05-2025", title: "Research & Development", link: "#", year: "2025", month: "05" },
        { date: "15-04-2025", title: "Placement Review", link: "#", year: "2025", month: "04" },
        { date: "22-03-2025", title: "Academic Calendar 2025-26", link: "#", year: "2025", month: "03" },
        { date: "08-02-2025", title: "Strategic Planning", link: "#", year: "2025", month: "02" },
        { date: "20-01-2025", title: "New Year Planning", link: "#", year: "2025", month: "01" },
        { date: "18-12-2024", title: "Annual Meeting 2024", link: "#", year: "2024", month: "12" },
        { date: "15-11-2024", title: "NAAC Preparation", link: "#", year: "2024", month: "11" },
        { date: "28-10-2024", title: "Autonomous Status Review", link: "#", year: "2024", month: "10" },
        { date: "10-09-2024", title: "Academic Excellence", link: "#", year: "2024", month: "09" },
        { date: "25-08-2024", title: "Student Welfare", link: "#", year: "2024", month: "08" },
        { date: "12-07-2024", title: "Faculty Development", link: "#", year: "2024", month: "07" },
        { date: "30-06-2024", title: "Mid-Year Review", link: "#", year: "2024", month: "06" },
        { date: "15-05-2024", title: "Technology Integration", link: "#", year: "2024", month: "05" },
        { date: "22-04-2024", title: "Industry Collaboration", link: "#", year: "2024", month: "04" },
        { date: "08-03-2024", title: "Research Initiatives", link: "#", year: "2024", month: "03" },
        { date: "20-02-2024", title: "Quality Assurance", link: "#", year: "2024", month: "02" },
        { date: "10-01-2024", title: "Annual Planning", link: "#", year: "2024", month: "01" },
        { date: "20-12-2023", title: "Year End Review 2023", link: "#", year: "2023", month: "12" },
        { date: "15-11-2023", title: "Academic Performance", link: "#", year: "2023", month: "11" },
        { date: "28-10-2023", title: "Infrastructure Updates", link: "#", year: "2023", month: "10" },
      ],
    };
  },
  computed: {
    filteredMembers() {
      let filtered = this.members;
      
      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(member => 
          member.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      
      // Filter by selected role
      if (this.selectedRole) {
        filtered = filtered.filter(member => member.role === this.selectedRole);
      }
      
      return filtered;
    },
    filteredMinutes() {
      let filtered = this.minutes;
      
      // Filter by search query
      if (this.minutesSearchQuery) {
        filtered = filtered.filter(minute => 
          minute.date.toLowerCase().includes(this.minutesSearchQuery.toLowerCase()) ||
          (minute.title && minute.title.toLowerCase().includes(this.minutesSearchQuery.toLowerCase()))
        );
      }
      
      // Filter by selected year
      if (this.selectedYear) {
        filtered = filtered.filter(minute => minute.year === this.selectedYear);
      }
      
      // Filter by selected month
      if (this.selectedMonth) {
        filtered = filtered.filter(minute => minute.month === this.selectedMonth);
      }
      
      return filtered;
    },
    availableYears() {
      const years = [...new Set(this.minutes.map(minute => minute.year))];
      return years.sort((a, b) => b - a); // Descending order (newest first)
    }
  },
  methods: {
    setTab(tabId) {
      this.activeTab = tabId;
    },
    setViewMode(mode) {
      this.viewMode = mode;
    },
    setMinutesViewMode(mode) {
      this.minutesViewMode = mode;
    },
    openPdfViewer(minute) {
      this.selectedMinute = minute;
      this.pdfLoading = true;
      this.pdfError = null;
      this.showPdfViewer = true;
      
      // Create secure PDF viewer URL
      // Using PDF.js viewer with security measures
      const pdfUrl = encodeURIComponent(minute.link);
      this.pdfViewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfUrl}&toolbar=1&navpanes=1&scrollbar=1&statusbar=1&messages=1&wrap=1`;
      
      // Simulate loading (in real implementation, you'd check if PDF loads successfully)
      setTimeout(() => {
        this.pdfLoading = false;
        // In a real implementation, you'd check if the PDF loaded successfully
        // For demo purposes, we'll assume it loads successfully
      }, 1500);
    },
    closePdfViewer() {
      this.showPdfViewer = false;
      this.selectedMinute = null;
      this.pdfLoading = false;
      this.pdfError = null;
      this.pdfViewerUrl = '';
    },
    downloadPdf() {
      if (this.selectedMinute && this.selectedMinute.link) {
        // Create a secure download link
        const link = document.createElement('a');
        link.href = this.selectedMinute.link;
        link.download = `${this.selectedMinute.title || 'meeting-minutes'}-${this.selectedMinute.date}.pdf`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
};
</script>

<style scoped>
/* CSS Variables */
:root {
  --ink: #1a2238;
  --navy: #1e40af;
  --orange: #FF7701;
  --border: #e5e7eb;
  --card: #fff;
}

/* Hero - Academic Council Style */
.hero {
  background: var(--ink);
  padding: 3rem 0;
}
.hero .display-5 { font-weight: 800; font-size: 2.2rem; }
.hero .lead { font-size: 1.1rem; margin-bottom: 0.3rem; }
.hero .tagline { font-size: 0.9rem; margin-top: 0.5rem; color: #fff; opacity: 0.9; }

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

/* Content */
.content {
  padding: 2rem 0;
}

.card-section {
  margin-bottom: 3rem;
}

.card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  margin-bottom: 2rem;
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

/* Section Titles */
.section-title {
  font-weight: 800;
  color: var(--navy);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.35rem;
}

.section-title i {
  color: var(--orange);
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
  border-color: #FF7701;
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
  color: #1a2238;
}

.member-position {
  color: var(--orange);
  font-weight: 600;
  margin-bottom: 0;
}

/* Minutes Grid */
.minutes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.minute-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 119, 1, 0.1);
  display: flex;
  flex-direction: column;
}

.minute-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
  border-color: #FF7701;
}

.minute-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.minute-icon {
  color: var(--orange);
  font-size: 1.5rem;
}

.minute-number {
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
}

.minute-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.minute-date {
  font-weight: 700;
  color: #1a2238;
  margin-bottom: 0.5rem;
}

.minute-description {
  color: #6b7280;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.btn-outline-primary {
  border-color: var(--orange);
  color: var(--orange);
}

.btn-outline-primary:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: white;
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

/* Minutes List View */
.minutes-list {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  overflow: hidden;
}

.minute-list-item {
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  transition: background-color 0.3s ease;
}

.minute-list-item:last-child {
  border-bottom: none;
}

.minute-list-item:hover {
  background: rgba(255, 119, 1, 0.05);
}

.minute-number-list {
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
}

.minute-date-list {
  font-weight: 700;
  color: var(--navy);
}

.minute-title-list {
  color: #6b7280;
  font-weight: 500;
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

/* PDF Modal */
.pdf-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.pdf-modal {
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 1000px;
  height: 90%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.pdf-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--navy);
  color: white;
  border-radius: 12px 12px 0 0;
}

.pdf-modal-title {
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.pdf-close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.pdf-close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.pdf-modal-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  position: relative;
}

.pdf-loading {
  text-align: center;
  color: var(--navy);
}

.pdf-loading i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--orange);
}

.pdf-error {
  text-align: center;
  color: var(--navy);
}

.pdf-error i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #dc3545;
}

.pdf-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pdf-iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

.pdf-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  background: #f8f9fa;
  border-radius: 0 0 12px 12px;
}

/* Responsive */
@media (max-width: 768px) {
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .minutes-grid {
    grid-template-columns: 1fr;
  }
  
  .subnav-inner {
    justify-content: flex-start;
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
  
  .list-header .row > div,
  .member-list-item .row > div {
    text-align: center !important;
  }
  
  .list-header .row > div:first-child,
  .member-list-item .row > div:first-child {
    text-align: left !important;
  }
  
  /* PDF Modal Mobile */
  .pdf-modal {
    width: 95%;
    height: 95%;
    margin: 0;
  }
  
  .pdf-modal-header {
    padding: 0.75rem 1rem;
  }
  
  .pdf-modal-title {
    font-size: 1rem;
  }
  
  .pdf-modal-footer {
  padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .pdf-modal-footer .btn {
    width: 100%;
  }
}
</style>
