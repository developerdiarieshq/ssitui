<template>
  <Header/>
  <NavBar/>
  <section class="management-page">
    <!-- Hero Section -->
    <header class="hero text-center text-white">
      <div class="container">
        <h1 class="title">Leadership & Management</h1>
        <p class="subtitle">Guiding Excellence Through Visionary Leadership</p>
        <p class="context">
          Sai Spurthi Institute of Technology | 
          Established in 2001 by VIPASSANA Educational Society | 
          Affiliated to JNTU Hyderabad | AICTE Approved
        </p>
      </div>
    </header>

    <!-- Profiles Grid -->
    <div class="container my-5">
      <div class="row g-4">
        <div
          v-for="p in profiles"
          :key="p.name"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <div class="card h-100 shadow-sm border-0 text-center profile-card">
            <div class="photo-wrap">
              <img
                class="photo"
                :src="p.img"
                :alt="`${p.name} – ${p.role}`"
                loading="lazy"
              />
            </div>

            <div class="card-body">
              <h5 class="name">{{ p.name }}</h5>
              <p class="role">{{ p.role }}</p>
              <p v-if="p.summary" class="summary">{{ p.summary }}</p>

              <!-- View Profile Button -->
              <button
                class="btn btn-orange mt-3"
                @click="openModal(p)"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Governing Body Button -->
    <div class="text-center mt-5 mb-4">
      <router-link to="/governing-body" class="btn btn-outline-orange btn-lg px-5">
        <i class="fas fa-users me-2"></i>View Governing Body
      </router-link>
    </div>

    <!-- Custom Modal -->
    <div v-if="selectedProfile" class="custom-modal-overlay" @click.self="closeModal">
      <div class="custom-modal">
        <div class="custom-modal-header">
          <h5>{{ selectedProfile.name }}</h5>
          <button class="btn-close" @click="closeModal"></button>
        </div>
        <div class="custom-modal-body text-center">
          <img
            :src="selectedProfile.img"
            class="photo mb-3"
            :alt="selectedProfile.name"
            style="width:120px;height:120px"
          />
          <h6 class="text-orange">{{ selectedProfile.role }}</h6>
          <p class="fw-semibold">{{ selectedProfile.summary }}</p>
          <p class="text-muted text-justify">{{ selectedProfile.desc }}</p>
        </div>
        <div class="custom-modal-footer text-end">
          <button class="btn btn-secondary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../../components/Header.vue'
import NavBar from '../../components/NavBar.vue'
import Footer from '../../components/Footer.vue'

const profiles = ref([
  {
    role: 'CHAIRMAN',
    name: 'Dr. B. Pardha Saradhi Reddy',
    img: new URL('@/assets/management/chairman.jpg', import.meta.url).href,
    summary:
      'Noted industrialist, founder of HETERO Pharmaceuticals, and Member of Parliament with philanthropic vision.',
    desc:
      'Sri Dr. B. Pardha Saradhi Reddy is a noted industrialist, the founder of HETERO Pharmaceuticals, Hyd, a member of Parliament, and a resident of Kandukuru, Khammam District, TS. He established the institute with a philanthropic motto to impart quality technical education that can lift the poorer aspirations of the rural surroundings in a serene and enthralling academic and natural ambience. The motive of establishing the college here is to impart quality technical education to the rural people and to uplift the economically backward students talent to greater levels.'
  },
  {
    role: 'SECRETARY & CORRESPONDENT',
    name: 'Sri D. Prabhakar Reddy',
    img: new URL('@/assets/management/secretary.jpg', import.meta.url).href,
    summary:
      'Renowned academician promoting quality technical education through VIPASSANA Educational Society.',
    desc:
      'Sri D. Prabhakar Reddy, a renowned academician in the vicinity, has been promoting an institute for the noble cause of promoting quality technical education through the VIPASSANA Educational Society, thanks to the enthused idea of Dr. B. Pardha Saradhi Reddy garu, who established the institute. It has been nurturing the many young poor rural lots towards all-round progression, which is possible only through value-added education. Sri D. Prabhakar Reddy is a visionary to witness the revolution of converting a near average student in intermediate into a disciplined and sincere engineer of a future India. He constantly advises the staff to put this concept in practice. Sri D. Prabhakar Reddy takes active interest in the day-to-day smooth running of the college through watchful monitoring of the college. He periodically visits the college to consolidate the functioning as per the plan that has been drawn earlier. He is a constant source of inspiration for the students and staff of the college.'
  },
  {
    role: 'VIPASSANA EDUCATIONAL TRUSTEE',
    name: 'Smt. Bandi Anvida',
    img: new URL('@/assets/management/Trustee-1.png', import.meta.url).href,
    summary:
      'Trustee dedicated to advancing education and fostering community development.',
    desc:
      'Smt. Bandi Anvida serves as the trustee of VIPASSANA EDUCATIONAL SOCIETY, demonstrating unwavering dedication and expertise in guiding our institution. With a profound commitment to advancing education and fostering community development, Smt. Anvida plays a pivotal role in shaping the strategic direction and policies of our trust. Her visionary leadership and steadfast support are instrumental in driving our mission forward, ensuring the success and empowerment of our students and stakeholders. I am committed to fostering an inclusive environment where every student has access to quality education and opportunities for personal growth. My vision for the college is centered around academic excellence, ethical values, and community engagement. I believe in providing students with a well-rounded education that equips them with the skills and knowledge to succeed in an ever-changing world. Together, let us work towards realizing this vision and creating a brighter future for our students and communities.'
  },
])

const selectedProfile = ref(null)

const openModal = (profile) => {
  selectedProfile.value = profile
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProfile.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.management-page {
  --orange: #FF7701;
  --ink: #1a2238;
  --muted: #6b7280;
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

/* Cards */
.profile-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
  margin: 0 auto;
}
.profile-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
}
.photo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 119, 1, 0.15);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}
.profile-card:hover .photo {
  transform: scale(1.05);
}
.name {
  font-weight: 700;
  margin-top: 0.5rem;
}
.role {
  color: var(--orange);
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.summary {
  font-weight: 500;
  color: var(--ink);
}

/* Custom Modal */
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.custom-modal {
  background: #fff;
  border-radius: 12px;
  max-width: 700px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.custom-modal-header {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.custom-modal-body {
  padding: 1.5rem;
}
.custom-modal-footer {
  padding: 1rem;
  border-top: 1px solid #ddd;
}
.btn-orange {
  background: var(--orange);
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.btn-orange:hover {
  background: #e65f00;
}

/* Outline Orange Button */
.btn-outline-orange {
  background: transparent;
  color: var(--orange);
  border: 2px solid var(--orange);
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.btn-outline-orange:hover {
  background: var(--orange);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}

/* Responsive adjustments for 3 cards */
@media (min-width: 1200px) {
  .row {
    justify-content: center;
  }
  .col-lg-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

@media (max-width: 991.98px) {
  .profile-card {
    max-width: 400px;
  }
}
</style>
