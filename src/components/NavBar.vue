<template>
  <nav
    class="navbar navbar-expand-lg shadow-sm sticky-top bg-white"
    :class="{ 'scrolled': isScrolled }"
  >
    <div class="container">
      <!-- 🔹 Logo (only when scrolled) -->
      <a v-if="isScrolled" class="navbar-brand" href="#">
        <img src="@/assets/college-logo.png" alt="College Logo" class="navbar-logo" />
      </a>

      <!-- Mobile Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav mx-auto">

          <!-- Home -->
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <!-- About -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
            <ul class="dropdown-menu shadow">
              <li><router-link to="/management" class="dropdown-item">Management</router-link></li>
              <li><router-link to="/society" class="dropdown-item">Society</router-link></li>
              <li><router-link to="/vision-mission" class="dropdown-item">Vision & Mission</router-link></li>
              <li><router-link to="/quality-policy" class="dropdown-item">Quality Policy</router-link></li>
              <li><router-link to="/governing-body" class="dropdown-item">Governing Body</router-link></li>
              <li><router-link to="/principal-desk" class="dropdown-item">Principal</router-link></li>
              <li><router-link to="/academic-council" class="dropdown-item">Academic Council</router-link></li>
            </ul>
          </li>

          <!-- Academics -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Academics</a>
            <div class="dropdown-menu mega-menu p-4 shadow-lg">
              <div class="row">
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-2">Academics</h6>
                  <router-link to="/academic-regulations" class="dropdown-item">Academic Regulations</router-link>
                  <router-link to="/academic-calendar" class="dropdown-item">Academic Calendar</router-link>
                  <router-link to="/incentives" class="dropdown-item">Incentives</router-link>
                  <router-link to="/awards" class="dropdown-item">Awards & Recognitions</router-link>
                  <router-link to="/committees" class="dropdown-item">Committees</router-link>
                  <router-link to="/approvals" class="dropdown-item">Approvals</router-link>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-2">Departments</h6>
                  <router-link to="/cse" class="dropdown-item">CSE</router-link>
                  <router-link to="/cse-ai" class="dropdown-item">CSE (AI & ML)</router-link>
                  <router-link to="/cse-aids" class="dropdown-item">CSE (AI & DS)</router-link>
                  <router-link to="/ece" class="dropdown-item">ECE</router-link>
                  <router-link to="/eee" class="dropdown-item">EEE</router-link>
                  <router-link to="/mech" class="dropdown-item">MECH</router-link>
                  <router-link to="/sh" class="dropdown-item">S & H</router-link>
                  <router-link to="/polytechnic" class="dropdown-item">Polytechnic</router-link>
                  <router-link to="/examination-branch" class="dropdown-item">Examination Branch</router-link>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-2">Placements</h6>
                  <router-link to="/placements-records" class="dropdown-item">Placement Records</router-link>
                  <router-link to="/companies" class="dropdown-item">Companies</router-link>
                </div>
              </div>
            </div>
          </li>

          <!-- Admissions & Accreditations -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Admissions & Accreditations</a>
            <div class="dropdown-menu mega-menu p-4 shadow-lg">
              <div class="row">
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-2">Admissions</h6>
                  <router-link to="/admission-procedure" class="dropdown-item">Admission Procedure</router-link>
                  <router-link to="/fee-structure" class="dropdown-item">Fee Structure</router-link>
                  <router-link to="/admission-form" class="dropdown-item">Admission Form</router-link>
                  <router-link to="/contact-admission" class="dropdown-item">Contact for Admission</router-link>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-2">Accreditations / Quality</h6>
                  <router-link to="/iqac" class="dropdown-item">IQAC</router-link>
                  <router-link to="/iiqa" class="dropdown-item">IIQA</router-link>
                  <router-link to="/ssr" class="dropdown-item">SSR</router-link>
                  <router-link to="/dvv" class="dropdown-item">DVV</router-link>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-2">Rankings</h6>
                  <router-link to="/nirf-overall" class="dropdown-item">NIRF Overall</router-link>
                  <router-link to="/nirf-engineering" class="dropdown-item">NIRF Engineering</router-link>
                  <router-link to="/nirf-management" class="dropdown-item">NIRF Management</router-link>
                </div>
              </div>
            </div>
          </li>

          <!-- Examinations -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Examinations</a>
            <div class="dropdown-menu mega-menu p-4 shadow-lg">
              <div class="row">
                <div class="col-md-6">
                  <h6 class="fw-bold text-uppercase mb-2">Examinations</h6>
                  <router-link to="/coe" class="dropdown-item">COE</router-link>
                  <router-link to="/exam-notices" class="dropdown-item">Notices</router-link>
                  <router-link to="/exam-regulations" class="dropdown-item">Academic Regulations</router-link>
                  <router-link to="/exam-calendar" class="dropdown-item">Academic Calendar</router-link>
                  <router-link to="/exam-syllabus" class="dropdown-item">Syllabus</router-link>
                  <router-link to="/exam-timetables" class="dropdown-item">Timetables</router-link>
                  <router-link to="/exam-results" class="dropdown-item">Results</router-link>
                </div>
                <div class="col-md-6">
                  <h6 class="fw-bold text-uppercase mb-2">More</h6>
                  <router-link to="/exam-portal" class="dropdown-item">Examination Portal</router-link>
                  <router-link to="/malpractice-guidelines" class="dropdown-item">Malpractice Guidelines</router-link>
                  <h6 class="fw-bold text-uppercase mt-3 mb-2">JNTUH Specific</h6>
                  <router-link to="/jntuh-circulars" class="dropdown-item">Circulars</router-link>
                  <router-link to="/jntuh-syllabus" class="dropdown-item">Syllabus</router-link>
                  <router-link to="/jntuh-timetables" class="dropdown-item">Timetables</router-link>
                  <router-link to="/jntuh-results" class="dropdown-item">Results</router-link>
                </div>
              </div>
            </div>
          </li>

          <!-- Campus -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Campus</a>
            <div class="dropdown-menu mega-menu p-4 shadow-lg dropdown-menu-end">
              <div class="row">
                <div class="col-md-8">
                  <h6 class="fw-bold text-uppercase mb-3">Amenities</h6>
                  <div class="row">
                    <div class="col-md-6">
                      <router-link to="/library" class="dropdown-item">Library</router-link>
                      <router-link to="/digital-library" class="dropdown-item">Digital Library</router-link>
                      <router-link to="/english-labs" class="dropdown-item">English Labs</router-link>
                      <router-link to="/seminar-hall" class="dropdown-item">Seminar Hall</router-link>
                      <router-link to="/hostels" class="dropdown-item">Hostels</router-link>
                      <router-link to="/cafeteria" class="dropdown-item">Cafeteria</router-link>
                      <router-link to="/e-classrooms" class="dropdown-item">E-Classrooms</router-link>
                    </div>
                    <div class="col-md-6">
                      <router-link to="/staff-quarters" class="dropdown-item">Staff Quarters</router-link>
                      <router-link to="/college-temple" class="dropdown-item">College Temple</router-link>
                      <router-link to="/internet" class="dropdown-item">Internet</router-link>
                      <router-link to="/ict-facilities" class="dropdown-item">ICT Facilities</router-link>
                      <router-link to="/sports" class="dropdown-item">Sports & Games</router-link>
                      <router-link to="/transportation" class="dropdown-item">Transportation</router-link>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-3">Gallery</h6>
                  <router-link to="/campus-gallery" class="dropdown-item">Campus Photos</router-link>
                </div>
              </div>
            </div>
          </li>

          <!-- Student Corner -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Student Corner</a>
            <div class="dropdown-menu mega-menu p-4 shadow-lg dropdown-menu-end">
              <div class="row">
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-3">Student Services</h6>
                  <router-link to="/scholarship" class="dropdown-item">Scholarship</router-link>
                  <router-link to="/clubs" class="dropdown-item">Clubs</router-link>
                  <router-link to="/nss" class="dropdown-item">NSS (Social Service)</router-link>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-3">Alumni</h6>
                  <router-link to="/alumni-invitation-21-22" class="dropdown-item">Invitation (Year 21-22)</router-link>
                  <router-link to="/alumni-registration" class="dropdown-item">Alumni Registration</router-link>
                  <router-link to="/view-alumni" class="dropdown-item">View Alumni Students</router-link>
                </div>
                <div class="col-md-4">
                  <h6 class="fw-bold text-uppercase mb-3">Feedback / Grievances</h6>
                  <router-link to="/grievance-form" class="dropdown-item">Grievance Form</router-link>
                  <router-link to="/ic-committee" class="dropdown-item">IC Committee</router-link>
                  <router-link to="/aicte-feedback" class="dropdown-item">AICTE Feedback</router-link>
                  <router-link to="/teacher-feedback" class="dropdown-item">Teacher Feedback</router-link>
                  <router-link to="/student-feedback" class="dropdown-item">Student Feedback</router-link>
                  <router-link to="/employer-feedback" class="dropdown-item">Employer Feedback</router-link>
                  <router-link to="/alumni-feedback" class="dropdown-item">Alumni Feedback</router-link>
                </div>
              </div>
            </div>
          </li>

          <!-- Quick Links -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Quick Links</a>
            <ul class="dropdown-menu shadow">
              <li><router-link to="/strengths" class="dropdown-item">Strengths</router-link></li>
              <li><router-link to="/social-service" class="dropdown-item">Social Service</router-link></li>
              <li><router-link to="/incentives" class="dropdown-item">Incentives</router-link></li>
              <li><router-link to="/login" class="dropdown-item">Login</router-link></li>
            </ul>
          </li>

          <!-- Contact -->
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 120;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Logo */
.navbar-logo {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Top-level links */
.nav-link {
  font-weight: 500;
  color: #333 !important;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.nav-link:hover,
.nav-link:focus {
  background: #ff6f00;
  color: #fff !important;
}

/* Dropdown items */
.dropdown-item {
  font-weight: 500;
  color: #333 !important;
  padding: 8px 14px;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.dropdown-item:hover {
  background: #ff6f00;
  color: #fff !important;
}

/* ====== Mega Menu ====== */
.mega-menu {
  position: absolute;
  top: 100%;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  width: auto;
  min-width: 600px;
  max-width: min(90vw, 900px);
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

/* Section headings */
.mega-menu h6 {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  background-color: #ff6f00;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: center;
}

/* Column dividers */
.mega-menu .col-md-4 {
  border-right: 1px solid #eee;
}
.mega-menu .col-md-4:last-child {
  border-right: none;
}

/* Column dividers for 2-column layout */
.mega-menu .col-md-6 {
  border-right: 1px solid #eee;
}
.mega-menu .col-md-6:last-child {
  border-right: none;
}

/* Column dividers for 8-column layout */
.mega-menu .col-md-8 {
  border-right: 1px solid #eee;
}
.mega-menu .col-md-8:last-child {
  border-right: none;
}

/* Links inside mega menu */
.mega-menu .dropdown-item {
  font-weight: 500;
  color: #333 !important;
  padding: 6px 10px;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: block;
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Regular dropdown items (About, Quick Links) - same font size */
.dropdown-menu .dropdown-item {
  font-size: 14px;
  font-weight: 500;
}

.mega-menu .dropdown-item:hover,
.mega-menu .dropdown-item:focus,
.mega-menu .dropdown-item:active {
  background-color: #ff6f00 !important;
  color: #fff !important;
  outline: none !important;
  box-shadow: none !important;
  text-decoration: none !important;
}

/* General dropdown item styles */
.dropdown-item:hover,
.dropdown-item:focus,
.dropdown-item:active,
.dropdown-item.router-link-active,
.dropdown-item.router-link-exact-active {
  background-color: #ff6f00 !important;
  color: #fff !important;
  outline: none !important;
  box-shadow: none !important;
  text-decoration: none !important;
}

/* Override Bootstrap's default dropdown item styles */
:deep(.navbar .dropdown-menu .dropdown-item:hover),
:deep(.navbar .dropdown-menu .dropdown-item:focus),
:deep(.navbar .dropdown-menu .dropdown-item:active) {
  background-color: #ff6f00 !important;
  color: #fff !important;
}

/* Additional deep selector for mega menu items */
:deep(.mega-menu .dropdown-item:hover),
:deep(.mega-menu .dropdown-item:focus),
:deep(.mega-menu .dropdown-item:active) {
  background-color: #ff6f00 !important;
  color: #fff !important;
}

/* Alignment helpers */
:deep(.dropdown-menu-start) {
  left: 0;
  right: auto;
}
:deep(.dropdown-menu-end) {
  right: 0;
  left: auto;
}

/* Responsive */
@media (max-width: 991px) {
  .mega-menu {
    min-width: 100%;
    max-width: 100%;
    padding: 1rem;
  }
  .mega-menu .row {
    flex-direction: column;
  }
  .mega-menu .col-md-4,
  .mega-menu .col-md-6 {
    border-right: none;
    margin-bottom: 1rem;
  }
}


</style>
