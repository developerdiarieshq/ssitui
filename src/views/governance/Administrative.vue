<template>
  <div>
    <Header />
    <NavBar />

    <main class="admin-page">
      <!-- Hero -->
      <header class="hero text-center">
        <div class="container">
          <h1 class="display-5 fw-bold text-white">Administrative Structure</h1>
          <p class="lead text-white-50">
            Efficient administrative framework supporting academic excellence and institutional growth
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
        <!-- Administrative Overview -->
        <section :id="tabsMap.overview" class="card-section" v-show="activeTab==='overview'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-building"></i> Administrative Overview</h2>
            <p class="lead">
              The Administration department looks after all the admissions in the college, and monitors everything during their completion of the course. 
              The dept also look administration of the college for its smooth functioning under the guidance of the Principal and Management. 
              The dept also maintain the records of the students and staff.
            </p>
          </div>

          <div class="grid-2">
            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-sitemap"></i> Administrative Structure</h3>
              <p>
                In order to achieve the stated activities, the office has an Administrative Officer assisted by an accountant and junior assistants. 
                Additionally the office has office Assistants to work in the academic section and to assist the examination related work.
              </p>
              <h4 class="h6 mt-3 mb-2">Key Responsibilities</h4>
              <ul class="bullets">
                <li>Managing all admissions in the college</li>
                <li>Monitoring students during their course completion</li>
                <li>Overall administration under Principal and Management guidance</li>
                <li>Maintaining records of students and staff</li>
                <li>Academic section administration</li>
                <li>Examination related work assistance</li>
              </ul>
            </article>

            <article class="card">
              <h3 class="section-title-sm"><i class="fa-solid fa-laptop"></i> Technology & Systems</h3>
              <p>
                We are using modern software and systems for efficient administration and record management:
              </p>
              <ul class="bullets">
                <li><strong>Tally ERP 9.0:</strong> Software for comprehensive accounts management</li>
                <li><strong>Windows 2008 Operating System:</strong> Stable platform for operations</li>
                <li><strong>MS Office, Windows 2007:</strong> For maintaining all records and files</li>
                <li><strong>Record Management:</strong> Staff records, student records, material procurement</li>
                <li><strong>Accounts Management:</strong> Comprehensive financial tracking and reporting</li>
              </ul>
              
              <h4 class="h6 mt-3 mb-2">Our Objective</h4>
              <p>
                The Office aims at an error free maintenance of all the records in the college for smooth and efficient running 
                of the administration which in turn results effective functioning of the college.
              </p>
            </article>
          </div>
        </section>

        <!-- Administrative Staff -->
        <section :id="tabsMap.staff" class="card-section" v-show="activeTab==='staff'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-users-gear"></i> Administrative Staff</h2>
            <p class="lead">
              Our dedicated administrative team ensures efficient operations and provides comprehensive support to students, 
              faculty, and all stakeholders.
            </p>
          </div>

          <div class="staff-grid">
            <article v-for="staff in administrativeStaff" :key="staff.name" class="staff-card">
              <div class="staff-icon" :style="{ background: staff.color }">
                <i :class="staff.icon"></i>
              </div>
              <div class="staff-body">
                <h3 class="staff-title">{{ staff.designation }}</h3>
                <p class="staff-name">{{ staff.name }}</p>
                <p class="staff-dept">{{ staff.department }}</p>
                <div class="staff-contact">
                  <a v-if="staff.email" :href="`mailto:${staff.email}`" class="contact-link">
                    <i class="fa-solid fa-envelope"></i> {{ staff.email }}
                  </a>
                  <span v-if="staff.phone" class="contact-link">
                    <i class="fa-solid fa-phone"></i> {{ staff.phone }}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <!-- Departments & Sections -->
        <section :id="tabsMap.departments" class="card-section" v-show="activeTab==='departments'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-building-columns"></i> Administrative Departments</h2>
            <p class="lead">
              Our administrative departments work cohesively to support the institute's mission and ensure 
              operational excellence.
            </p>
          </div>

          <div class="grid-3">
            <article v-for="dept in departments" :key="dept.title" class="dept-card">
              <div class="dept-icon" :style="{ background: dept.color }">
                <i :class="dept.icon"></i>
              </div>
              <h3 class="dept-title">{{ dept.title }}</h3>
              <p class="dept-desc">{{ dept.description }}</p>
              <ul class="dept-functions">
                <li v-for="func in dept.functions" :key="func">{{ func }}</li>
              </ul>
            </article>
          </div>
        </section>

        <!-- Processes & Procedures -->
        <section :id="tabsMap.processes" class="card-section" v-show="activeTab==='processes'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-list-check"></i> Administrative Processes</h2>
            <p class="lead">
              Streamlined processes and well-defined procedures ensure efficient service delivery and 
              transparent operations across the institute.
            </p>
          </div>

          <div class="accordion-container">
            <div v-for="process in processes" :key="process.id" class="accordion-item">
              <button 
                class="accordion-header" 
                @click="toggleAccordion(process.id)"
                :class="{ active: activeAccordion === process.id }"
              >
                <div class="accordion-title">
                  <i :class="process.icon"></i>
                  {{ process.title }}
                </div>
                <i class="accordion-icon fa-solid fa-chevron-down" :class="{ active: activeAccordion === process.id }"></i>
              </button>
              <div class="accordion-content" v-show="activeAccordion === process.id">
                <p>{{ process.description }}</p>
                <ul class="bullets">
                  <li v-for="step in process.steps" :key="step">{{ step }}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact Information -->
        <section :id="tabsMap.contact" class="card-section" v-show="activeTab==='contact'">
          <div class="card">
            <h2 class="section-title"><i class="fa-solid fa-address-book"></i> Contact Administrative Office</h2>
            <div class="grid-2">
              <div>
                <h3 class="h6 mb-3">Office Hours</h3>
                <p><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                <p><strong>Sunday & Holidays:</strong> Closed</p>
                
                <h3 class="h6 mb-3 mt-4">General Inquiries</h3>
                <p><i class="fa-solid fa-phone"></i> +91-XXXX-XXXXXX</p>
                <p><i class="fa-solid fa-envelope"></i> admin@ssit.edu.in</p>
                <p><i class="fa-solid fa-location-dot"></i> Administrative Block, SSIT Campus</p>
              </div>
              
              <aside class="note">
                <h4 class="note-title">Quick Links</h4>
                <div class="quick-links">
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-file-alt"></i> Download Forms
                  </a>
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-calendar"></i> Academic Calendar
                  </a>
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-book"></i> Policies & Guidelines
                  </a>
                  <a href="#" class="quick-link-btn">
                    <i class="fa-solid fa-question-circle"></i> FAQs
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

const router = useRouter()
const route = useRoute()

// Tabs configuration
const tabs = [
  { id: 'overview', label: 'Overview', icon: 'fa-solid fa-building', path: '/administrative/overview' },
  { id: 'staff', label: 'Staff', icon: 'fa-solid fa-users-gear', path: '/administrative/staff' },
  { id: 'departments', label: 'Departments', icon: 'fa-solid fa-building-columns', path: '/administrative/departments' },
  { id: 'processes', label: 'Processes', icon: 'fa-solid fa-list-check', path: '/administrative/processes' },
  { id: 'contact', label: 'Contact', icon: 'fa-solid fa-address-book', path: '/administrative/contact' }
]

const tabsMap = {
  overview: 'overview',
  staff: 'staff',
  departments: 'departments',
  processes: 'processes',
  contact: 'contact'
}

const activeTab = ref('overview')
const activeAccordion = ref('')

const setTab = (id) => {
  activeTab.value = id
  const tab = tabs.find(t => t.id === id)
  if (tab && tab.path) {
    router.push(tab.path)
  }
}

// Initialize active tab based on route
onMounted(() => {
  const pathToKey = {
    '/administrative/overview': 'overview',
    '/administrative/staff': 'staff',
    '/administrative/departments': 'departments',
    '/administrative/processes': 'processes',
    '/administrative/contact': 'contact'
  }
  const key = pathToKey[route.path]
  if (key) {
    activeTab.value = key
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathToKey = {
    '/administrative/overview': 'overview',
    '/administrative/staff': 'staff',
    '/administrative/departments': 'departments',
    '/administrative/processes': 'processes',
    '/administrative/contact': 'contact'
  }
  const key = pathToKey[newPath]
  if (key) {
    activeTab.value = key
  }
})

const toggleAccordion = (id) => {
  activeAccordion.value = activeAccordion.value === id ? '' : id
}

// Administrative Staff Data
const administrativeStaff = [
  {
    name: 'Dr. Ch. Vijaya Kumar',
    designation: 'Principal',
    department: 'Administrative Office',
    email: 'principal@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-user-tie',
    color: '#f97316'
  },
  {
    name: 'G. Rajendra prasad Reddy',
    designation: 'Office Superintendent',
    department: 'Administrative Office',
    email: 'superintendent@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-briefcase',
    color: '#3b82f6'
  },
  {
    name: 'G. Venkatarami Reddy',
    designation: 'Cashier',
    department: 'Finance & Accounts',
    email: 'cashier@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-coins',
    color: '#10b981'
  },
  {
    name: 'M.O. Mallikarjuna Rao',
    designation: 'Sr.Assistant',
    department: 'Administrative Office',
    email: 'srassistant@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-user-gear',
    color: '#8b5cf6'
  },
  {
    name: 'R. Rama Rao',
    designation: 'Jr.Assistant',
    department: 'Administrative Office',
    email: 'jrassistant@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-user',
    color: '#f59e0b'
  },
  {
    name: 'C. Siva Prasad',
    designation: 'StenoGrapher',
    department: 'Administrative Office',
    email: 'steno@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-keyboard',
    color: '#ec4899'
  },
  {
    name: 'R. Kanaka Raju',
    designation: 'Boys Hostel Warden',
    department: 'Student Welfare',
    email: 'boyshostel@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-building',
    color: '#06b6d4'
  },
  {
    name: 'Ch. Vijaya',
    designation: 'Girls Hostel Warden',
    department: 'Student Welfare',
    email: 'girlshostel@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-building',
    color: '#d946ef'
  },
  {
    name: 'D. Sravana Kumari',
    designation: 'Girls Hostel Warden',
    department: 'Student Welfare',
    email: 'girlshostel2@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-building',
    color: '#a855f7'
  },
  {
    name: 'P. Ramakrishna',
    designation: 'Mess Supervisor',
    department: 'Hostel Services',
    email: 'mess@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-utensils',
    color: '#84cc16'
  },
  {
    name: 'B.Srinivasa Reddy',
    designation: 'Driver',
    department: 'Transportation',
    email: 'transport@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-bus',
    color: '#f97316'
  },
  {
    name: 'U. Tirupathi Rao',
    designation: 'Attender',
    department: 'Support Services',
    email: 'support@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-hand-holding-hand',
    color: '#6366f1'
  },
  {
    name: 'N.Uma Maheswara Rao',
    designation: 'Attender',
    department: 'Support Services',
    email: 'support2@ssit.edu.in',
    phone: '08761-288278',
    icon: 'fa-solid fa-hand-holding-hand',
    color: '#0ea5e9'
  }
]

// Departments Data
const departments = [
  {
    title: 'Academic Administration',
    description: 'Manages academic planning, curriculum development, and faculty coordination.',
    icon: 'fa-solid fa-book-open',
    color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    functions: [
      'Curriculum management',
      'Faculty coordination',
      'Academic planning',
      'Quality assurance'
    ]
  },
  {
    title: 'Examination Section',
    description: 'Handles all examination-related activities, result processing, and certifications.',
    icon: 'fa-solid fa-file-alt',
    color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    functions: [
      'Exam scheduling',
      'Result processing',
      'Certificate issuance',
      'Hall ticket generation'
    ]
  },
  {
    title: 'Admissions Office',
    description: 'Manages student admissions, registrations, and enrollment processes.',
    icon: 'fa-solid fa-user-plus',
    color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    functions: [
      'Student admissions',
      'Registration process',
      'Document verification',
      'Fee management'
    ]
  },
  {
    title: 'Finance & Accounts',
    description: 'Oversees financial management, budgeting, and accounting operations.',
    icon: 'fa-solid fa-coins',
    color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    functions: [
      'Budget planning',
      'Financial reporting',
      'Fee collection',
      'Audit compliance'
    ]
  },
  {
    title: 'Human Resources',
    description: 'Manages faculty and staff recruitment, development, and welfare.',
    icon: 'fa-solid fa-users',
    color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    functions: [
      'Recruitment',
      'Staff development',
      'Payroll management',
      'Leave administration'
    ]
  },
  {
    title: 'Infrastructure & Maintenance',
    description: 'Ensures proper maintenance and development of campus infrastructure.',
    icon: 'fa-solid fa-building',
    color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    functions: [
      'Facility maintenance',
      'Infrastructure development',
      'Asset management',
      'Safety compliance'
    ]
  }
]

// Processes Data
const processes = [
  {
    id: 'admission',
    title: 'Admission Process',
    icon: 'fa-solid fa-user-graduate',
    description: 'Step-by-step procedure for student admissions and enrollment.',
    steps: [
      'Online application submission through official portal',
      'Document verification and eligibility check',
      'Counseling and seat allotment based on merit',
      'Fee payment and enrollment confirmation',
      'Orientation and course registration'
    ]
  },
  {
    id: 'examination',
    title: 'Examination Process',
    icon: 'fa-solid fa-file-alt',
    description: 'Comprehensive examination management and result declaration process.',
    steps: [
      'Examination schedule notification',
      'Hall ticket generation and distribution',
      'Examination conduct with invigilation',
      'Answer sheet evaluation and verification',
      'Result declaration and transcript issuance'
    ]
  },
  {
    id: 'grievance',
    title: 'Grievance Redressal',
    icon: 'fa-solid fa-hands-helping',
    description: 'Transparent mechanism for addressing student and staff grievances.',
    steps: [
      'Submit grievance through official portal or in-person',
      'Acknowledgment and case number assignment',
      'Investigation and fact-finding by committee',
      'Resolution and communication to concerned parties',
      'Follow-up and feedback collection'
    ]
  },
  {
    id: 'leave',
    title: 'Leave Management',
    icon: 'fa-solid fa-calendar-check',
    description: 'Systematic process for faculty and staff leave applications.',
    steps: [
      'Submit leave application through portal or written request',
      'Approval from immediate supervisor/HOD',
      'HR department verification and record update',
      'Arrangement for substitute/backup if required',
      'Return to duty reporting'
    ]
  }
]
</script>

<style scoped>
/* THEME TOKENS */
:root {
  --orange: #f97316;
  --ink: #1a2238;
  --muted: #6b7280;
  --border: #e5e7eb;
  --card: #fff;
}

/* GENERIC */
.container {
  width: min(1180px, 92%);
  margin-inline: auto;
}

.lead {
  font-size: 1.05rem;
  color: #374151;
  line-height: 1.6;
}

.h6 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
}

.mb-3 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

/* HERO */
.hero {
  background: var(--ink);
  padding: 3rem 0;
  color: #fff;
}

.display-5 {
  font-size: 2.2rem;
  font-weight: 800;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.75);
}

.tagline {
  font-size: 0.9rem;
  opacity: 0.9;
  margin-top: 0.5rem;
}

/* SUBNAV */
.subnav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid var(--border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.subnav-inner {
  display: flex;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  flex-wrap: wrap;
}

.chip {
  border: 1px solid var(--border);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: 0.5rem 0.9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transition: all 0.2s ease;
  cursor: pointer;
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

/* CONTENT */
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
  padding: 1.5rem 1.25rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
}

.section-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1rem;
}

.section-title i {
  color: var(--orange);
}

.section-title-sm {
  font-weight: 800;
  color: var(--ink);
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

/* GRIDS */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  margin-top: 1.2rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-top: 1.2rem;
}

/* BULLETS */
.bullets {
  padding-left: 1.2rem;
}

.bullets li {
  margin: 0.4rem 0;
  color: #374151;
}

/* STAFF GRID */
.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
  margin-top: 1.2rem;
}

.staff-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.25rem;
  background: #fff;
  display: flex;
  gap: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.staff-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.staff-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.staff-body {
  flex: 1;
}

.staff-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.25rem;
}

.staff-name {
  font-size: 0.95rem;
  color: var(--orange);
  font-weight: 600;
  margin: 0 0 0.25rem;
}

.staff-dept {
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0 0 0.75rem;
}

.staff-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-link {
  font-size: 0.85rem;
  color: #374151;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-link i {
  color: var(--orange);
}

.contact-link:hover {
  color: var(--orange);
}

/* DEPARTMENT CARDS */
.dept-card {
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 1.5rem;
  background: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.dept-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.dept-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.dept-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.5rem;
}

.dept-desc {
  color: #374151;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.dept-functions {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dept-functions li {
  padding: 0.4rem 0;
  font-size: 0.85rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dept-functions li:before {
  content: '✓';
  color: var(--orange);
  font-weight: 700;
}

/* ACCORDION */
.accordion-container {
  margin: 1.5rem 0;
  border: 1px solid var(--border);
  border-radius: 1rem;
  overflow: hidden;
  background: #fff;
}

.accordion-item {
  border-bottom: 1px solid var(--border);
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.accordion-header:hover {
  background: rgba(249, 115, 22, 0.05);
}

.accordion-header.active {
  background: var(--orange);
  color: #fff;
}

.accordion-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.accordion-title i {
  color: var(--orange);
  font-size: 1.2rem;
}

.accordion-header.active .accordion-title i {
  color: #fff;
}

.accordion-icon {
  color: var(--orange);
  font-size: 1rem;
  transition: transform 0.2s ease;
}

.accordion-icon.active {
  transform: rotate(180deg);
}

.accordion-header.active .accordion-icon {
  color: #fff;
}

.accordion-content {
  padding: 0 1.5rem 1.5rem;
  background: #fff;
}

/* NOTE BOX */
.note {
  background: linear-gradient(180deg, #f8fafc, #eef4ff);
  border: 1px dashed var(--border);
  border-radius: 0.9rem;
  padding: 1.25rem;
}

.note-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 1rem;
}

.quick-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-link-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  color: var(--ink);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
}

.quick-link-btn i {
  color: var(--orange);
}

.quick-link-btn:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateX(4px);
}

.quick-link-btn:hover i {
  color: #fff;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .grid-2,
  .grid-3 {
    grid-template-columns: 1fr;
  }

  .staff-grid {
    grid-template-columns: 1fr;
  }

  .display-5 {
    font-size: 1.8rem;
  }
}
</style>

