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
              <li><router-link to="/ict-facilities" class="dropdown-item">ICT Facilities</router-link></li>
            </ul>
          </li>

          <!-- Governance -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Governance</a>
            <ul class="dropdown-menu">
              <li><router-link to="/organogram" class="dropdown-item">Organogram</router-link></li>
               <li><router-link to="/trust" class="dropdown-item">Society</router-link></li>
               <li><router-link to="/management" class="dropdown-item">Management</router-link></li>
               <li><router-link to="/governing-body" class="dropdown-item">Governing Body</router-link></li>
               <li><router-link to="/principal-desk" class="dropdown-item">Principal's Desk</router-link></li>
               <li><router-link to="/administrative" class="dropdown-item">Administrative Office</router-link></li>
              <!-- <li><a class="dropdown-item" href="#">Strategic Plan</a></li> -->
              <!-- <li><a class="dropdown-item" href="#">Academic Council</a></li> -->
              <li><router-link to="/policies" class="dropdown-item">Policies</router-link></li>
              <li><router-link to="/committees" class="dropdown-item">Committees</router-link></li>
              <li><router-link to="/r-and-d" class="dropdown-item">R&amp;D</router-link></li>
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
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Admissions</a>
            <ul class="dropdown-menu">
              <li><router-link to="/admissions" class="dropdown-item">Admission Procedure</router-link></li>
              <li><hr class="dropdown-divider"></li>
              <li><h6 class="dropdown-header">B-Category Seats</h6></li>
              <li><router-link to="/btech-b-category-seats" class="dropdown-item">B.Tech B-Category</router-link></li>
              <li><router-link to="/mba-b-category-seats" class="dropdown-item">MBA B-Category</router-link></li>
              <li><router-link to="/polytechnic-b-category-seats" class="dropdown-item">Polytechnic B-Category</router-link></li>
            </ul>
          </li>
          
          <!-- Departments -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Departments</a>
            <ul class="dropdown-menu">
              <!-- Diploma Programs -->
              <li><h6 class="dropdown-header">Diploma Programs</h6></li>
              <li><router-link to="/dme" class="dropdown-item">DME - Mechanical Engineering</router-link></li>
              <li><router-link to="/deee" class="dropdown-item">DEEE - Electrical & Electronics</router-link></li>
              <li><router-link to="/dece" class="dropdown-item">DECE - Electronics & Communication</router-link></li>
              
              <!-- Divider -->
              <li><hr class="dropdown-divider"></li>
              
              <!-- Under Graduation Programs -->
              <li><h6 class="dropdown-header">Under Graduation Programs</h6></li>
              <li><router-link to="/cse" class="dropdown-item">CSE - Computer Science</router-link></li>
              <li><router-link to="/cse-ai" class="dropdown-item">CSE AIML - AI & Machine Learning</router-link></li>
              <li><router-link to="/cse-ai-ds" class="dropdown-item">CSE AIDS - AI & Data Science</router-link></li>
              <li><router-link to="/eee" class="dropdown-item">EEE - Electrical & Electronics</router-link></li>
              <li><router-link to="/ece" class="dropdown-item">ECE - Electronics & Communication</router-link></li>
              <li><router-link to="/sh" class="dropdown-item">S&H - Science & Humanities</router-link></li>
              <li><router-link to="/mech" class="dropdown-item">MECH - Mechanical Engineering</router-link></li>
              
              <!-- Divider -->
              <li><hr class="dropdown-divider"></li>
              
              <!-- Post Graduation Programs -->
              <li><h6 class="dropdown-header">Post Graduation Programs</h6></li>
              <li><router-link to="/mba" class="dropdown-item">MBA - Business Administration</router-link></li>
              
              <!-- Divider -->
              <li><hr class="dropdown-divider"></li>
              
              <!-- Other Departments -->
              <li><h6 class="dropdown-header">Other Departments</h6></li>
              <!-- <li><router-link to="/polytechnic" class="dropdown-item">POLYTECHNIC</router-link></li> -->
              <li><router-link to="/examination-branch" class="dropdown-item">Examination Branch</router-link></li>
              <!-- <li><router-link to="/administrative-office" class="dropdown-item">Administrative Office</router-link></li> -->
            </ul>
          </li>

          <!-- Student Corner -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Student Corner</a>
            <ul class="dropdown-menu">
              <li><router-link to="/scholarship" class="dropdown-item">Scholarship</router-link></li>
x              <li><router-link to="/anti-ragging" class="dropdown-item">Anti Ragging</router-link></li>
               <router-link to="/sports" class="dropdown-item">Sports</router-link>
              <li><router-link to="/cafeteria" class="dropdown-item">Cafeteria</router-link></li>
              <li><router-link to="/social-services" class="dropdown-item">Social Services</router-link></li>
            </ul>
          </li>

          <!-- Clubs -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Clubs</a>
            <ul class="dropdown-menu">
              <li><router-link to="/elite-club" class="dropdown-item">Elite Club</router-link></li>
              <li><router-link to="/cultural-club" class="dropdown-item">Cultural Club</router-link></li>
              <li><router-link to="/photography-club" class="dropdown-item">Photography Club</router-link></li>
              <li><router-link to="/technical-club" class="dropdown-item">Technical Club</router-link></li>
              <li><router-link to="/environmental-club" class="dropdown-item">Environmental Club</router-link></li>
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
          <li class="nav-item">
            <router-link to="/placements" class="nav-link">Placements</router-link>
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
/* Enhanced Navigation Effects */
.nav-link {
  font-weight: 500;
  color: #333 !important;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 111, 0, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  background-color: #FF6F00;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 111, 0, 0.3);
}

/* Dropdown Toggle Effects */
.dropdown-toggle::after {
  transition: transform 0.3s ease;
}

.nav-item.dropdown:hover .dropdown-toggle::after {
  transform: rotate(180deg);
}

/* Enhanced Dropdown Menu */
.dropdown-menu {
  min-width: 100%;
  width: max-content;
  max-width: 90vw;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  border: none;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}

.nav-item.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Dropdown Item Effects */
.dropdown-item {
  font-weight: 500;
  color: #333;
  padding: 10px 20px;
  border-radius: 0;
  transition: all 0.3s ease;
  position: relative;
  margin: 2px 8px;
  border-radius: 6px;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
}

.dropdown-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #FF6F00, #FF8C00);
  transition: width 0.3s ease;
  z-index: -1;
  border-radius: 6px;
}

.dropdown-item:hover::before {
  width: 100%;
}

.dropdown-item:hover {
  background-color: transparent;
  color: #fff !important;
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(255, 111, 0, 0.2);
}

/* Dropdown Header Styling */
.dropdown-header {
  font-weight: 600;
  color: #FF6F00;
  background: linear-gradient(90deg, rgba(255, 111, 0, 0.1), rgba(255, 140, 0, 0.1));
  padding: 12px 20px;
  margin: 4px 8px;
  border-radius: 6px;
  border-left: 4px solid #FF6F00;
}

/* Dropdown Divider */
.dropdown-divider {
  margin: 8px 0;
  border-color: rgba(255, 111, 0, 0.2);
  border-width: 1px;
}

/* Specific styling for departments dropdown */
.nav-item.dropdown:has(.dropdown-header) .dropdown-menu {
  min-width: 350px;
  width: auto;
}

.nav-item.dropdown:has(.dropdown-header) .dropdown-item {
  padding: 8px 16px;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Responsive Navigation Effects */
@media (max-width: 991.98px) {
  /* Disable hover effects on mobile */
  .nav-link:hover {
    background-color: transparent;
    color: #333 !important;
    transform: none;
    box-shadow: none;
  }
  
  .nav-link:hover::before {
    left: -100%;
  }
  
  .nav-item.dropdown:hover .dropdown-toggle::after {
    transform: none;
  }
  
  .nav-item.dropdown:hover .dropdown-menu {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
  }
  
  .dropdown-item:hover {
    background-color: #FF6F00;
    color: #fff !important;
    transform: none;
    box-shadow: none;
  }
  
  .dropdown-item:hover::before {
    width: 0;
  }
  
  /* Mobile-specific dropdown behavior */
  .dropdown-menu.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  /* Mobile dropdown width adjustments */
  .dropdown-menu {
    min-width: 100%;
    max-width: 100vw;
    width: 100%;
  }
  
  .nav-item.dropdown:has(.dropdown-header) .dropdown-menu {
    min-width: 100%;
    width: 100%;
  }
}

</style>
