<template>
  <div class="events-circulars-page">
    <Header />
    <NavBar />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1><i class="fa-solid fa-calendar-days"></i> Events & Circulars</h1>
          <p class="subtitle">Stay updated with every announcement and activity at SSIT</p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container py-5">
      <!-- Tab Buttons -->
      <div class="tabs-container">
        <button 
          :class="['tab-btn', activeTab === 'events' && 'active']" 
          @click="activeTab = 'events'"
        >
          <i class="fa-solid fa-calendar-days"></i>
          <span>Events</span>
          <span class="badge">{{ filteredEvents.length }}</span>
        </button>
        <button 
          :class="['tab-btn', activeTab === 'circulars' && 'active']" 
          @click="activeTab = 'circulars'"
        >
          <i class="fa-regular fa-file-lines"></i>
          <span>Circulars</span>
          <span class="badge">{{ filteredCirculars.length }}</span>
        </button>
      </div>

      <!-- Filters Section -->
      <div class="filters-section">
        <div class="filter-group">
          <div class="search-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input 
              type="text" 
              v-model="query" 
              :placeholder="`Search ${activeTab}...`"
              class="search-input"
            />
          </div>
          <select v-model="month" class="month-select">
            <option value="">All Months</option>
            <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
          </select>
        </div>
      </div>

      <!-- Events Table -->
      <div v-if="activeTab === 'events'" class="table-container">
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th class="col-date">Date</th>
                <th class="col-title">Event Title</th>
                <th class="col-venue">Time & Venue</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(event, index) in filteredEvents" :key="`event-${index}`">
                <td class="date-col">
                  <div class="date-badge">
                    <span class="date-day">{{ event.day }}</span>
                    <span class="date-month">{{ event.month }}</span>
                  </div>
                </td>
                <td class="title-col">
                  <span class="event-title">{{ event.title }}</span>
                </td>
                <td class="venue-col">
                  <i class="fa-solid fa-clock"></i>
                  <span>{{ event.time }}</span>
                  <template v-if="event.venue">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{{ event.venue }}</span>
                  </template>
                </td>
                <td class="actions-col">
                  <div class="action-buttons">
                    <a v-if="event.brochure" :href="event.brochure" target="_blank" class="btn-action">
                      <i class="fa-solid fa-download"></i> Brochure
                    </a>
                    <a v-if="event.link" :href="event.link" target="_blank" class="btn-action btn-primary">
                      <i class="fa-solid fa-external-link"></i> View
                    </a>
                  </div>
                </td>
              </tr>
              <tr v-if="filteredEvents.length === 0">
                <td colspan="4" class="empty-state">
                  <i class="fa-solid fa-inbox"></i>
                  <p>No events found matching your criteria</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Circulars Table -->
      <div v-else class="table-container">
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th class="col-date">Date</th>
                <th class="col-title">Circular Title</th>
                <th class="col-published">Published</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(circular, index) in filteredCirculars" :key="`circular-${index}`">
                <td class="date-col">
                  <div class="date-badge">
                    <span class="date-day">{{ circular.day }}</span>
                    <span class="date-month">{{ circular.month }}</span>
                  </div>
                </td>
                <td class="title-col">
                  <span class="circular-title">{{ circular.title }}</span>
                </td>
                <td class="published-col">
                  <i class="fa-solid fa-calendar-check"></i>
                  <span>{{ circular.date }}</span>
                </td>
                <td class="actions-col">
                  <div class="action-buttons">
                    <a v-if="circular.link" :href="circular.link" target="_blank" class="btn-action btn-primary">
                      <i class="fa-solid fa-file-pdf"></i> View
                    </a>
                  </div>
                </td>
              </tr>
              <tr v-if="filteredCirculars.length === 0">
                <td colspan="4" class="empty-state">
                  <i class="fa-solid fa-inbox"></i>
                  <p>No circulars found matching your criteria</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import data from '@/data/events-circulars-data.json'

const activeTab = ref('events')
const query = ref('')
const month = ref('')
const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']

const allEvents = ref([])
const allCirculars = ref([])

onMounted(() => {
  allEvents.value = data.events || []
  allCirculars.value = data.circulars || []
})

const normalized = s => (s || '').toLowerCase()

const filteredEvents = computed(() => {
  return allEvents.value.filter(e => {
    const matchQuery = normalized(e.title).includes(normalized(query.value))
    const matchMonth = month.value ? (e.month || '').toUpperCase().startsWith(month.value) : true
    return matchQuery && matchMonth
  })
})

const filteredCirculars = computed(() => {
  return allCirculars.value.filter(c => {
    const matchQuery = normalized(c.title).includes(normalized(query.value))
    const matchMonth = month.value ? (c.month || '').toUpperCase().startsWith(month.value) : true
    return matchQuery && matchMonth
  })
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: #1a2238;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.hero-content .subtitle {
  font-size: 1.1rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

/* Tabs */
.tabs-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #e5e7eb;
}

.tab-btn {
  flex: 1;
  padding: 1rem 2rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #6b7280;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.tab-btn:hover {
  color: #ff6f00;
  background: rgba(255, 111, 0, 0.05);
}

.tab-btn.active {
  color: #ff6f00;
  border-bottom-color: #ff6f00;
  background: rgba(255, 111, 0, 0.08);
}

.tab-btn .badge {
  background: #e5e7eb;
  color: #1a2238;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
}

.tab-btn.active .badge {
  background: #ff6f00;
  color: white;
}

/* Filters */
.filters-section {
  margin-bottom: 2rem;
}

.filter-group {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
}

.search-box {
  position: relative;
  flex: 1;
  max-width: 400px;
}

.search-box i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #ff6f00;
  box-shadow: 0 0 0 3px rgba(255, 111, 0, 0.1);
}

.month-select {
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.month-select:focus {
  outline: none;
  border-color: #ff6f00;
}

/* Table */
.table-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table thead {
  background: #f9fafb;
}

.data-table th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 700;
  color: #1a2238;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.data-table tbody tr {
  transition: all 0.2s ease;
}

.data-table tbody tr:hover {
  background: rgba(255, 111, 0, 0.04);
}

.data-table td {
  padding: 1rem 1.5rem;
  border-top: 1px solid #e5e7eb;
}

/* Date Badge */
.date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ff6f00;
  color: white;
  padding: 0.75rem;
  border-radius: 10px;
  min-width: 70px;
}

.date-day {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.date-month {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.95;
}

/* Column Widths */
.col-date { width: 120px; }
.col-title { min-width: 250px; }
.col-venue { width: 250px; }
.col-published { width: 200px; }
.col-actions { width: 180px; text-align: right; }

/* Title Column */
.title-col .event-title,
.title-col .circular-title {
  font-weight: 700;
  color: #1a2238;
  display: block;
}

/* Venue Column */
.venue-col {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.venue-col i {
  color: #9ca3af;
}

/* Actions */
.actions-col {
  text-align: right;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.btn-action {
  padding: 0.5rem 1rem;
  border: 2px solid #1a2238;
  background: white;
  color: #1a2238;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  transition: all 0.2s ease;
}

.btn-action:hover {
  background: #1a2238;
  color: white;
}

.btn-primary {
  background: #ff6f00;
  border-color: #ff6f00;
  color: white;
}

.btn-primary:hover {
  background: #e66400;
  border-color: #e66400;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #9ca3af;
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state p {
  font-size: 1.1rem;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 1.75rem;
  }

  .tab-btn {
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
  }

  .tab-btn span:nth-child(2) {
    display: none;
  }

  .filter-group {
    flex-direction: column;
  }

  .search-box {
    max-width: 100%;
  }

  .data-table th,
  .data-table td {
    padding: 0.75rem;
    font-size: 0.875rem;
  }

  .date-badge {
    min-width: 60px;
    padding: 0.5rem;
  }

  .date-day {
    font-size: 1.25rem;
  }

  .action-buttons {
    flex-direction: column;
  }

  .btn-action {
    width: 100%;
    justify-content: center;
  }
}
</style>
