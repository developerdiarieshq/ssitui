<template>
  <div class="exam-notifications-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Exam Notifications Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <h1 class="title">Exam Notifications</h1>
          <p class="tagline">Stay Updated • Important Announcements • Timely Information</p>
          <ul class="quickfacts" aria-label="Quick facts">
            <li>
              <span class="qf-label">Total Notifications</span>
              <span class="qf-value">{{ notifications.length }}</span>
            </li>
            <li>
              <span class="qf-label">Active</span>
              <span class="qf-value">{{ activeNotifications }}</span>
            </li>
            <li>
              <span class="qf-label">This Month</span>
              <span class="qf-value">{{ thisMonthNotifications }}</span>
            </li>
          </ul>
        </div>
        <picture class="hero-art" aria-hidden="true">
          <img
            src="@/assets/engineering-students-lab.png"
            alt="Exam Notifications - Stay Informed"
            class="hero-img"
          />
        </picture>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content" id="content">
      <!-- Loading State -->
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading notifications...</p>
      </div>
      
      <!-- Error State -->
      <div v-else-if="error" class="error-state">
        <h2>Error</h2>
        <p>{{ error }}</p>
      </div>
      
      <!-- Main Content -->
      <div v-else>
        <!-- FILTER SELECTION -->
        <section class="card-section">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-filter"></i> Filter Notifications</h2>
            
            <div class="filter-selection">
              <div class="filter-controls">
                <div class="view-toggle">
                  <button 
                    class="view-btn"
                    :class="{ active: viewMode === 'list' }"
                    @click="setViewMode('list')"
                    title="List View"
                  >
                    <i class="fas fa-list"></i>
                  </button>
                  <button 
                    class="view-btn"
                    :class="{ active: viewMode === 'grid' }"
                    @click="setViewMode('grid')"
                    title="Grid View"
                  >
                    <i class="fas fa-th"></i>
                  </button>
                </div>
                
                <div class="filter-dropdown">
                  <select 
                    id="filterSelect"
                    v-model="activeFilter" 
                    @change="setFilter(activeFilter)"
                    class="filter-select"
                  >
                    <option 
                      v-for="filter in filterOptions" 
                      :key="filter.id"
                      :value="filter.id"
                    >
                      {{ filter.label }} {{ getFilterCount(filter.id) > 0 ? `(${getFilterCount(filter.id)})` : '' }}
                    </option>
                  </select>
                  <label for="filterSelect" class="filter-label">Select Filter:</label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- NOTIFICATIONS SECTION -->
        <section class="notifications-section">
          <div 
            class="notifications-container"
            :class="{ 'list-view': viewMode === 'list', 'grid-view': viewMode === 'grid' }"
          >
            <div 
              v-for="(notification, index) in filteredNotifications" 
              :key="notification.id"
              class="notification-card"
              :class="{
                'urgent': notification.priority === 'urgent',
                'high': notification.priority === 'high',
                'normal': notification.priority === 'normal'
              }"
              :style="{ animationDelay: (index * 0.1) + 's' }"
              @click="openNotification(notification)"
            >
              <div class="notification-header">
                <div class="notification-icon">
                  <i :class="notification.icon"></i>
                </div>
                <div class="notification-meta">
                  <div class="notification-title">{{ notification.title }}</div>
                  <div class="notification-date">{{ formatDate(notification.date) }}</div>
                </div>
                <div class="notification-badge" :class="notification.priority">
                  {{ notification.priority.toUpperCase() }}
                </div>
              </div>
              
              <div class="notification-content">
                <p class="notification-description">{{ notification.description }}</p>
                
                <div class="notification-tags">
                  <span 
                    v-for="tag in notification.tags" 
                    :key="tag"
                    class="notification-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
              
              <div class="notification-footer">
                <div class="notification-actions">
                  <button class="action-btn" @click.stop="downloadNotification(notification)">
                    <i class="fas fa-download"></i>
                    Download
                  </button>
                  <button class="action-btn" @click.stop="shareNotification(notification)">
                    <i class="fas fa-share"></i>
                    Share
                  </button>
                </div>
                <div class="notification-status">
                  <i class="fas fa-eye" v-if="notification.read"></i>
                  <i class="fas fa-eye-slash" v-else></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- NOTIFICATION MODAL -->
        <div v-if="selectedNotification" class="modal-overlay" @click="closeNotification">
          <div class="modal-content" @click.stop>
            <div class="modal-header">
              <h3>{{ selectedNotification.title }}</h3>
              <button class="close-btn" @click="closeNotification">
                <i class="fas fa-times"></i>
              </button>
            </div>
            
            <div class="modal-body">
              <div class="modal-meta">
                <div class="meta-item">
                  <i class="fas fa-calendar"></i>
                  <span>{{ formatDate(selectedNotification.date) }}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-tag"></i>
                  <span>{{ selectedNotification.category }}</span>
                </div>
                <div class="meta-item">
                  <i class="fas fa-exclamation-triangle"></i>
                  <span>{{ selectedNotification.priority.toUpperCase() }}</span>
                </div>
              </div>
              
              <div class="modal-content-text">
                <p>{{ selectedNotification.fullContent }}</p>
              </div>
              
              <div class="modal-attachments" v-if="selectedNotification.attachments">
                <h4>Attachments:</h4>
                <div class="attachment-list">
                  <div 
                    v-for="attachment in selectedNotification.attachments" 
                    :key="attachment.name"
                    class="attachment-item"
                  >
                    <i :class="getAttachmentIcon(attachment.type)"></i>
                    <span>{{ attachment.name }}</span>
                    <button class="download-attachment" @click="downloadAttachment(attachment)">
                      <i class="fas fa-download"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="modal-footer">
              <button class="btn btn-primary" @click="markAsRead(selectedNotification)">
                <i class="fas fa-check"></i>
                Mark as Read
              </button>
              <button class="btn btn-secondary" @click="closeNotification">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ExamNotifications',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      loading: false,
      error: null,
      activeFilter: 'all',
      viewMode: 'list', // Default to list view
      selectedNotification: null,
      
      filterOptions: [
        { id: 'all', label: 'All', icon: 'fas fa-list' },
        { id: 'urgent', label: 'Urgent', icon: 'fas fa-exclamation-triangle' },
        { id: 'high', label: 'High Priority', icon: 'fas fa-exclamation-circle' },
        { id: 'normal', label: 'Normal', icon: 'fas fa-info-circle' },
        { id: 'exam-schedule', label: 'Exam Schedule', icon: 'fas fa-calendar-alt' },
        { id: 'results', label: 'Results', icon: 'fas fa-chart-line' },
        { id: 'hall-tickets', label: 'Hall Tickets', icon: 'fas fa-ticket-alt' },
        { id: 'revaluation', label: 'Revaluation', icon: 'fas fa-redo' }
      ],
      
      notifications: [
        {
          id: 1,
          title: 'Semester End Examinations - December 2024',
          description: 'Important notification regarding the conduct of semester end examinations for December 2024 session.',
          fullContent: 'All students are hereby informed that the semester end examinations for December 2024 session will commence from 15th December 2024. Students are required to download their hall tickets from the examination portal and follow all examination guidelines strictly.',
          date: '2024-12-01',
          category: 'Exam Schedule',
          priority: 'urgent',
          icon: 'fas fa-calendar-alt',
          tags: ['Examinations', 'Hall Tickets', 'December 2024'],
          read: false,
          attachments: [
            { name: 'Exam Schedule.pdf', type: 'pdf' },
            { name: 'Guidelines.doc', type: 'doc' }
          ]
        },
        {
          id: 2,
          title: 'Hall Ticket Download Available',
          description: 'Hall tickets for December 2024 semester examinations are now available for download.',
          fullContent: 'Students can now download their hall tickets from the examination portal. Please ensure you have cleared all dues and maintained the required attendance before downloading.',
          date: '2024-12-02',
          category: 'Hall Tickets',
          priority: 'high',
          icon: 'fas fa-ticket-alt',
          tags: ['Hall Tickets', 'Download', 'December 2024'],
          read: false,
          attachments: [
            { name: 'Download Instructions.pdf', type: 'pdf' }
          ]
        },
        {
          id: 3,
          title: 'Results Declaration - November 2024',
          description: 'Results for November 2024 semester examinations have been declared.',
          fullContent: 'The results for November 2024 semester examinations are now available. Students can check their results on the examination portal using their roll numbers.',
          date: '2024-12-03',
          category: 'Results',
          priority: 'high',
          icon: 'fas fa-chart-line',
          tags: ['Results', 'November 2024', 'Declaration'],
          read: true,
          attachments: [
            { name: 'Result Summary.pdf', type: 'pdf' }
          ]
        },
        {
          id: 4,
          title: 'Revaluation Applications Open',
          description: 'Applications for revaluation of November 2024 examination papers are now open.',
          fullContent: 'Students who wish to apply for revaluation of their November 2024 examination papers can submit their applications online. The last date for submission is 10th December 2024.',
          date: '2024-12-04',
          category: 'Revaluation',
          priority: 'normal',
          icon: 'fas fa-redo',
          tags: ['Revaluation', 'Applications', 'November 2024'],
          read: false,
          attachments: [
            { name: 'Revaluation Form.pdf', type: 'pdf' },
            { name: 'Fee Structure.pdf', type: 'pdf' }
          ]
        },
        {
          id: 5,
          title: 'CBT Examination Schedule',
          description: 'Computer Based Test (CBT) examination schedule for missed CIE students.',
          fullContent: 'Students who missed Continuous Internal Examinations (CIE) can now register for CBT examinations. The schedule and registration details are available on the examination portal.',
          date: '2024-12-05',
          category: 'Exam Schedule',
          priority: 'normal',
          icon: 'fas fa-laptop',
          tags: ['CBT', 'CIE', 'Registration'],
          read: false,
          attachments: [
            { name: 'CBT Schedule.pdf', type: 'pdf' }
          ]
        },
        {
          id: 6,
          title: 'Examination Guidelines Update',
          description: 'Updated examination guidelines and rules for all students.',
          fullContent: 'Please note that there have been some updates to the examination guidelines. All students are required to read and follow the updated guidelines strictly during examinations.',
          date: '2024-12-06',
          category: 'General',
          priority: 'normal',
          icon: 'fas fa-clipboard-list',
          tags: ['Guidelines', 'Rules', 'Update'],
          read: false,
          attachments: [
            { name: 'Updated Guidelines.pdf', type: 'pdf' }
          ]
        },
        {
          id: 7,
          title: 'Supplementary Examinations',
          description: 'Notification regarding supplementary examinations for failed students.',
          fullContent: 'Students who have failed in any subject(s) in the current semester can apply for supplementary examinations. The application deadline is 15th December 2024.',
          date: '2024-12-07',
          category: 'Exam Schedule',
          priority: 'high',
          icon: 'fas fa-graduation-cap',
          tags: ['Supplementary', 'Failed Students', 'Application'],
          read: false,
          attachments: [
            { name: 'Supplementary Application Form.pdf', type: 'pdf' }
          ]
        },
        {
          id: 8,
          title: 'Grade Sheet Distribution',
          description: 'Grade sheets for completed examinations are ready for collection.',
          fullContent: 'Students who have completed their examinations can now collect their grade sheets from the examination office. Please bring your ID card and hall ticket for verification.',
          date: '2024-12-08',
          category: 'Results',
          priority: 'normal',
          icon: 'fas fa-certificate',
          tags: ['Grade Sheets', 'Collection', 'Verification'],
          read: false,
          attachments: [
            { name: 'Collection Schedule.pdf', type: 'pdf' }
          ]
        }
      ]
    }
  },
  
  computed: {
    filteredNotifications() {
      if (this.activeFilter === 'all') {
        return this.notifications
      }
      return this.notifications.filter(notification => {
        if (this.activeFilter === 'exam-schedule') {
          return notification.category === 'Exam Schedule'
        }
        if (this.activeFilter === 'results') {
          return notification.category === 'Results'
        }
        if (this.activeFilter === 'hall-tickets') {
          return notification.category === 'Hall Tickets'
        }
        if (this.activeFilter === 'revaluation') {
          return notification.category === 'Revaluation'
        }
        return notification.priority === this.activeFilter
      })
    },
    
    activeNotifications() {
      return this.notifications.filter(n => !n.read).length
    },
    
    thisMonthNotifications() {
      const currentMonth = new Date().getMonth()
      const currentYear = new Date().getFullYear()
      return this.notifications.filter(notification => {
        const notificationDate = new Date(notification.date)
        return notificationDate.getMonth() === currentMonth && notificationDate.getFullYear() === currentYear
      }).length
    }
  },
  
  methods: {
    setFilter(filterId) {
      this.activeFilter = filterId
    },
    
    setViewMode(mode) {
      this.viewMode = mode
    },
    
    getFilterCount(filterId) {
      if (filterId === 'all') return this.notifications.length
      if (filterId === 'exam-schedule') return this.notifications.filter(n => n.category === 'Exam Schedule').length
      if (filterId === 'results') return this.notifications.filter(n => n.category === 'Results').length
      if (filterId === 'hall-tickets') return this.notifications.filter(n => n.category === 'Hall Tickets').length
      if (filterId === 'revaluation') return this.notifications.filter(n => n.category === 'Revaluation').length
      return this.notifications.filter(n => n.priority === filterId).length
    },
    
    openNotification(notification) {
      this.selectedNotification = notification
      this.markAsRead(notification)
    },
    
    closeNotification() {
      this.selectedNotification = null
    },
    
    markAsRead(notification) {
      notification.read = true
    },
    
    downloadNotification(notification) {
      // Simulate download
      console.log('Downloading notification:', notification.title)
      // In real app, this would trigger actual download
    },
    
    shareNotification(notification) {
      // Simulate sharing
      if (navigator.share) {
        navigator.share({
          title: notification.title,
          text: notification.description,
          url: window.location.href
        })
      } else {
        // Fallback for browsers that don't support Web Share API
        console.log('Sharing notification:', notification.title)
      }
    },
    
    downloadAttachment(attachment) {
      console.log('Downloading attachment:', attachment.name)
      // In real app, this would trigger actual download
    },
    
    getAttachmentIcon(type) {
      const icons = {
        'pdf': 'fas fa-file-pdf',
        'doc': 'fas fa-file-word',
        'docx': 'fas fa-file-word',
        'xls': 'fas fa-file-excel',
        'xlsx': 'fas fa-file-excel',
        'txt': 'fas fa-file-alt',
        'jpg': 'fas fa-file-image',
        'png': 'fas fa-file-image',
        'zip': 'fas fa-file-archive'
      }
      return icons[type] || 'fas fa-file'
    },
    
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  color: #fff;
  background: var(--ink);
  padding: 80px 0;
  overflow: hidden;
}

.hero .overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(0,0,0,.15), rgba(0,0,0,.2));
}

.hero-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 2rem;
  align-items: center;
  padding: 3.2rem 0;
}

.hero-copy .title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.hero-copy .tagline {
  color: #dbeafe;
  margin: .5rem 0 1.25rem;
  font-weight: 600;
  font-size: 1.1rem;
}

.quickfacts {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.quickfacts li {
  background: rgba(255,255,255,.12);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: .75rem;
  padding: .6rem .9rem;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.qf-label {
  display: block;
  font-size: .75rem;
  letter-spacing: .02em;
  opacity: .9;
  margin-bottom: 0.5rem;
}

.qf-value {
  font-size: 1.05rem;
  font-weight: 800;
}

.hero-art {
  text-align: center;
}

.hero-img {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
  object-fit: cover;
}

/* Content Sections */
.content {
  padding: 1.8rem 0 2.6rem;
}

.card-section {
  margin: 1.2rem 0;
}

.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.section-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.section-title i {
  color: var(--orange);
}

/* Filter Selection */
.filter-selection {
  margin-top: 1rem;
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.view-toggle {
  display: flex;
  gap: 0.5rem;
}

.view-btn {
  padding: 0.75rem;
  border: 2px solid var(--border);
  background: #fff;
  color: var(--ink);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
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
  color: #fff;
}

.view-btn i {
  font-size: 1.1rem;
}

.filter-dropdown {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-label {
  font-weight: 600;
  color: var(--ink);
  margin: 0;
  order: 2;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  background: #fff;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 200px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  order: 1;
}

.filter-select:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
}

.filter-select:hover {
  border-color: var(--orange);
}

.filter-select option {
  padding: 0.5rem;
  background: #fff;
  color: var(--ink);
}

/* Notifications Container */
.notifications-container {
  margin-top: 2rem;
}

/* Grid View */
.notifications-container.grid-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
}

/* List View */
.notifications-container.list-view {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notifications-container.list-view .notification-card {
  display: flex;
  align-items: center;
  padding: 1rem;
  min-height: auto;
}

.notifications-container.list-view .notification-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  margin-bottom: 0;
}

.notifications-container.list-view .notification-meta {
  flex: 1;
}

.notifications-container.list-view .notification-title {
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.notifications-container.list-view .notification-date {
  font-size: 0.85rem;
}

.notifications-container.list-view .notification-content {
  flex: 2;
  margin-left: 1rem;
  padding: 0;
}

.notifications-container.list-view .notification-description {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.notifications-container.list-view .notification-footer {
  margin-left: 1rem;
  padding: 0;
  background: transparent;
  border: none;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;
}

.notifications-container.list-view .notification-actions {
  flex-direction: column;
  gap: 0.25rem;
}

.notifications-container.list-view .action-btn {
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
}

.notification-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.notification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,.12);
  border-color: var(--orange);
}

.notification-card.urgent {
  border-left: 4px solid #dc3545;
}

.notification-card.high {
  border-left: 4px solid var(--orange);
}

.notification-card.normal {
  border-left: 4px solid #28a745;
}

.notification-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 1.5rem 1rem;
}

.notification-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange), #ff8c42);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.notification-meta {
  flex: 1;
}

.notification-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.notification-date {
  font-size: 0.9rem;
  color: var(--muted);
}

.notification-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.notification-badge.urgent {
  background: #f8d7da;
  color: #721c24;
}

.notification-badge.high {
  background: #fff3cd;
  color: #856404;
}

.notification-badge.normal {
  background: #d4edda;
  color: #155724;
}

.notification-content {
  padding: 0 1.5rem 1rem;
}

.notification-description {
  color: #000;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.notification-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.notification-tag {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: .15rem .55rem;
  font-size: .78rem;
  color: var(--ink);
  background: rgba(249,115,22,0.05);
}

.notification-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--bg);
  border-top: 1px solid var(--border);
}

.notification-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  background: transparent;
  border: 1px solid var(--border);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  color: var(--muted);
  font-weight: 500;
}

.action-btn:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateY(-1px);
}

.notification-status {
  color: var(--muted);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e9ecef;
}

.modal-header h3 {
  margin: 0;
  color: var(--ink);
  font-weight: 800;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--muted);
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: var(--orange);
  color: #fff;
}

.modal-body {
  padding: 1.5rem;
}

.modal-meta {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--muted);
  font-size: 0.9rem;
}

.modal-content-text {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #000;
  font-size: 0.95rem;
}

.modal-attachments h4 {
  color: var(--ink);
  margin-bottom: 1rem;
  font-weight: 800;
}

.attachment-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.attachment-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.attachment-item i {
  color: var(--muted);
  width: 20px;
}

.download-attachment {
  background: var(--orange);
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  transition: all 0.3s ease;
}

.download-attachment:hover {
  background: #e55a00;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e9ecef;
  justify-content: flex-end;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
}

.btn-primary:hover {
  background: #e55a00;
  border-color: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249,115,22,0.3);
}

.btn-secondary {
  background: var(--ink);
  color: #fff;
  border-color: var(--ink);
}

.btn-secondary:hover {
  background: #000;
  border-color: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* Loading and Error States */
.loading-state, .error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--orange);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.error-state h2 {
  color: #e74c3c;
  margin-bottom: 10px;
}

.error-state p {
  color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-copy .title {
    font-size: 2rem;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .view-toggle {
    justify-content: center;
  }
  
  .filter-dropdown {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
  
  .filter-select {
    min-width: 100%;
  }
  
  .notifications-container.list-view .notification-card {
    flex-direction: column;
    align-items: stretch;
  }
  
  .notifications-container.list-view .notification-header,
  .notifications-container.list-view .notification-content,
  .notifications-container.list-view .notification-footer {
    margin-left: 0;
    flex: none;
  }
  
  .quickfacts {
    justify-content: center;
  }
  
  .notifications-grid {
    grid-template-columns: 1fr;
  }
  
  .filter-tabs {
    justify-content: center;
  }
  
  .filter-btn {
    min-width: 100px;
  }
  
  .modal-overlay {
    padding: 1rem;
  }
  
  .modal-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .modal-footer {
    flex-direction: column;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 60px 0;
  }
  
  .hero-copy .title {
    font-size: 1.8rem;
  }
  
  .quickfacts {
    flex-direction: column;
    align-items: center;
  }
  
  .quickfacts li {
    width: 100%;
    max-width: 200px;
  }
  
  .notification-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .notification-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .notification-actions {
    justify-content: center;
  }
}
</style>
