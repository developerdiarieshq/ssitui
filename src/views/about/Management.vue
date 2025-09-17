<template>
  <section class="management-page">
    <!-- Hero -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Leadership &amp; Management</h1>
        <p class="subtitle">Guiding Excellence Through Visionary Leadership</p>
      </div>
    </header>

    <!-- Profiles Grid -->
    <div class="container my-5">
      <div class="row g-4">
        <div
          v-for="p in profiles"
          :key="p.name"
          class="col-md-4"
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
</template>

<script setup>
import { ref } from 'vue'

const profiles = ref([
  {
    role: 'Chairman',
    name: 'Dr. B. Pardha Saradhi Reddy',
    img: new URL('@/assets/management/chairman.jpg', import.meta.url).href,
    summary:
      'Philanthropist and education champion focused on accessible, high-quality technical education.',
    desc:
      "Dr. B. Pardha Saradhi Reddy's endeavor to establish an institute with a philanthropic mission underscores his commitment to addressing societal needs through education. By prioritizing the provision of high-quality technical education to economically disadvantaged rural communities, he is contributing significantly to upliftment and opportunity creation in these areas. The institute's focus on creating an enriching academic environment amidst natural serenity reflects a strategic approach to fostering holistic education, facilitating creativity, critical thinking, and a deeper connection to nature."
  },
  {
    role: 'Secretary & Correspondent',
    name: 'Sri D. Prabhakar Reddy',
    img: new URL('@/assets/management/secretary.jpg', import.meta.url).href,
    summary:
      'Visionary academic leader steering value-added education and student transformation.',
    desc:
      'Sri D. Prabhakar Reddy, a renowned academician in the vicinity, has been promoting quality technical education through the VIPASSANA Educational Society. He has been nurturing many young rural students towards all-round progression through value-added education. As a visionary leader, he witnesses the transformation of average intermediate students into disciplined and sincere engineers of future India. He takes active interest in the day-to-day smooth running of the college through watchful monitoring and serves as a constant source of inspiration for students and staff.'
  },
  {
    role: 'Trustee',
    name: 'Smt. Bandi Anvida',
    img: new URL('@/assets/management/Trustee-1.png', import.meta.url).href,
    summary:
      'Trustee dedicated to inclusive growth, ethical governance, and student success.',
    desc:
      'Smt. Bandi Anvida serves as the trustee of VIPASSANA EDUCATIONAL SOCIETY, demonstrating unwavering dedication and expertise in guiding the institution. With profound commitment to advancing education and fostering community development, she plays a pivotal role in shaping strategic direction and policies. Her visionary leadership focuses on fostering an inclusive environment where every student has access to quality education and opportunities for personal growth, centered around academic excellence, ethical values, and community engagement.'
  }
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

/* Hero */
.hero {
  background: linear-gradient(180deg, rgba(255, 119, 1, 0.06) 0%, rgba(255, 119, 1, 0.02) 100%),
    url('https://images.unsplash.com/photo-1523246191871-c4d6a3f9a6a1?q=80&w=1920&auto=format&fit=crop')
      center/cover no-repeat;
  padding: 2rem 0;
}
.title {
  color: var(--ink);
  font-weight: 800;
}
.subtitle {
  color: var(--muted);
  max-width: 720px;
  margin: 0 auto;
}

/* Cards */
.profile-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
</style>
