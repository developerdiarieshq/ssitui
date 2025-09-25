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

      <!-- Menu Items -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav mx-auto">

          <!-- Home --> 
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>

          <!-- About -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
            <ul class="dropdown-menu">
              <li><router-link to="/about-us" class="dropdown-item">About SSIT</router-link></li>
              <!-- <li><router-link to="/vision-mission" class="dropdown-item">Vision & Mission</router-link></li> -->
              <!-- <li><router-link to="/management" class="dropdown-item">Management</router-link></li> -->
              <li><router-link to="/academic-council" class="dropdown-item">Academic Council</router-link></li>
              <li><router-link to="/strength" class="dropdown-item">Strengths</router-link></li>
              <!-- <li><a class="dropdown-item" href="#">Quality Policy</a></li> -->
              <li><router-link to="/mandatory-disclosure" class="dropdown-item">Mandatory Disclosure</router-link></li>
              <li><a class="dropdown-item" href="#">ICT Facilities</a></li>
            </ul>
          </li>

          <!-- Governance -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Governance</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Organogram</a></li>
               <li><router-link to="/trust" class="dropdown-item">Trust</router-link></li>
               <li><router-link to="/governing-body" class="dropdown-item">Governing Body</router-link></li>
                <li><router-link to="/principal-desk" class="dropdown-item">Principal's Desk</router-link></li>
              <li><a class="dropdown-item" href="#">Strategic Plan</a></li>
              <li><a class="dropdown-item" href="#">Academic Council</a></li>
              <li><router-link to="/policies" class="dropdown-item">Policies</router-link></li>
              <li><router-link to="/committees" class="dropdown-item">Committees</router-link></li>
              <li><a class="dropdown-item" href="#">R&amp;D</a></li>
              <li><router-link to="/iqac" class="dropdown-item">IQAC</router-link></li>
              
            </ul>
          </li>

          <!-- Academics -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Academics</a>
            <ul class="dropdown-menu">
              <li><router-link to="/academic-regulations" class="dropdown-item">Academic Regulations</router-link></li>
              <li><router-link to="/academic-calendar" class="dropdown-item">Academic Calendar</router-link></li>
              <li><router-link to="/incentives" class="dropdown-item">Incentives</router-link></li>
            </ul>
          </li>

          <!-- Admissions -->
          <li class="nav-item dropdown">
            <!-- <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Admissions</a> -->
            <router-link to="/admissions" class="nav-link">Admissions</router-link>
            <!-- <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Admission Procedure</a></li>
              <li><a class="dropdown-item" href="#">Fee Structure</a></li>
            </ul> -->
          </li>

          <!-- Student Corner -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Student Corner</a>
            <ul class="dropdown-menu">
              <li><router-link to="/scholarship" class="dropdown-item">Scholarship</router-link></li>
              <li><router-link to="/anti-ragging" class="dropdown-item">Anti Ragging</router-link></li>
               <router-link to="/sports" class="dropdown-item">Sports</router-link>
              <li><router-link to="/cafeteria" class="dropdown-item">Cafeteria</router-link></li>
              <li><router-link to="/social-services" class="dropdown-item">Social Services</router-link></li>
            </ul>
          </li>

          <!-- Departments -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Departments</a>
            <ul class="dropdown-menu">
              <li><router-link to="/cse" class="dropdown-item">CSE</router-link></li>
              <li><router-link to="/cse-ai" class="dropdown-item">CSE (AI & ML)</router-link></li>
              <li><router-link to="/cse-ai-ds" class="dropdown-item">CSE (AI & DS)</router-link></li> 
              <li><router-link to="/ece" class="dropdown-item">ECE</router-link></li>
              <li><router-link to="/eee" class="dropdown-item">EEE</router-link></li>
              <li><router-link to="/sh" class="dropdown-item">S&amp;H</router-link></li>
              <li><router-link to="/mech" class="dropdown-item">MECH</router-link></li>
              <li><router-link to="/mba" class="dropdown-item">MBA</router-link></li>
              <li><router-link to="/polytechnic" class="dropdown-item">POLYTECHNIC</router-link></li>
              <li><router-link to="/examination-branch" class="dropdown-item">Examination Branch</router-link></li>
              <li><router-link to="/administrative-office" class="dropdown-item">Administrative Office</router-link></li>
            </ul>
          </li>

          <!-- Amenities -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Amenities</a>
            <ul class="dropdown-menu">
              <li><router-link to="/library" class="dropdown-item">Library</router-link></li>
              <!-- <li><a class="dropdown-item" href="#">Library</a></li> -->
              <li><a class="dropdown-item" href="#">Digital Library</a></li>
              <li><router-link to="/internet" class="dropdown-item">Internet</router-link></li>
              <li><router-link to="/english-labs" class="dropdown-item">English Labs</router-link></li>
              <li><router-link to="/counselling" class="dropdown-item">Counselling</router-link></li>
              <li><router-link to="/seminar-hall" class="dropdown-item">Seminar Halls</router-link></li>
              <li><router-link to="/sports" class="dropdown-item">Sports & Games</router-link></li>
              <li><router-link to="/hostels" class="dropdown-item">Hostels</router-link></li>
              <li><router-link to="/transportation" class="dropdown-item">Transportation</router-link></li>
             <li><router-link to="/e-classrooms" class="dropdown-item">E-Class Rooms</router-link></li>
              <li><router-link to="/staff-quarters" class="dropdown-item">Staff Quarters</router-link></li>
              <li><router-link to="/temple" class="dropdown-item">Temple in College</router-link></li>
            </ul>
          </li>

          <!-- Placements -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Placements</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Placements Record</a></li>
              <li><a class="dropdown-item" href="#">Companies</a></li>
            </ul>
          </li>

          <!-- Careers -->
          <li class="nav-item">
            <a class="nav-link" href="#">Careers</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  // Show logo when scroll passes header (120px threshold, adjust as needed)
  isScrolled.value = window.scrollY > 120
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar-logo {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  object-fit: cover;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.nav-link {
  font-weight: 500;
  color: #333 !important;
}
.nav-link:hover,
.dropdown-item:hover {
  color: #FF6F00 !important;
}
.dropdown-menu {
  min-width: 220px;
  max-height: 70vh;
  overflow-y: auto;
}
/* Main nav items */
.nav-link {
  font-weight: 500;
  color: #333 !important;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #FF6F00;  /* orange background */
  color: #fff !important;     /* white text */
}

/* Dropdown menu items */
.dropdown-item {
  font-weight: 500;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background-color: #FF6F00;  /* orange background */
  color: #fff !important;
}

</style>
