<template>
  <Header />
  <NavBar />

  <!-- Hero -->
  <header class="trust-hero">
    <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
      <div class="pe-md-4">
        <h1 class="hero-title">Vipassana Educational Trust</h1>
        <p class="hero-subtitle">
          Enabling access to quality technical education for deserving students and empowering rural communities.
        </p>
      </div>

      <!-- Leader card -->
      <div class="leader text-center mt-4 mt-md-0">
        <img
          :src="leader.img"
          :alt="leader.name"
          class="leader-photo mb-2"
        />
        <h6 class="text-white mb-0">{{ leader.name }}</h6>
        <small class="text-light d-block">{{ leader.role }}</small>
      </div>
    </div>
  </header>

  <!-- About Trust -->
  <section class="py-5 bg-light">
    <div class="container">
      <div class="text-center mb-4">
        <h3 class="section-title">About the Trust</h3>
        <div class="underscore"></div>
      </div>

      <div class="row align-items-start g-4">
        <div class="col-lg-7">
          <article class="trust-copy">
            <p>
              <strong>Vipassana Educational Trust</strong>, under the leadership of
              <strong>Sri. D. Prabhakar Reddy</strong>, has been dedicatedly committed to advancing education opportunities for
              underprivileged yet deserving students with a vision to uplift educational standards and foster excellence in learning.
              Recognizing the importance of technical education and its role in empowering rural communities, the Trust embarked on a mission
              to extend its educational outreach by venturing into the realm of technical education.
            </p>
            <p>
              Central to its mission is the provision of <strong>merit-cum-scholarships</strong> to economically disadvantaged students, thereby ensuring
              that financial constraints do not impede deserving individuals from accessing quality education. Furthermore, the Trust places a strong emphasis
              on holistic development by actively encouraging student participation in <strong>sports and extracurricular activities</strong>, recognizing their
              integral role in fostering well-rounded individuals.
            </p>
            <p>
              The Vipassana Educational Trust’s collaboration with <strong>Dr. B. Partha Saradhi Reddy</strong> and the establishment of
              <strong> Sai Spurthi Institute of Technology (SSIT)</strong> underscore its steadfast commitment to advancing education, empowering rural communities,
              and fostering academic excellence. Through its tireless efforts, the Trust continues to serve as a beacon of hope and opportunity for countless students
              seeking to realize their educational aspirations and fulfill their potential.
            </p>
          </article>
        </div>

        <!-- Pillars -->
        <div class="col-lg-5">
          <div class="row g-3">
            <div v-for="p in pillars" :key="p.title" class="col-sm-6 col-lg-12">
              <div class="pillar-card h-100">
                <div class="icon-box">
                  <i :class="p.icon"></i>
                </div>
                <h6 class="mb-1">{{ p.title }}</h6>
                <small class="text-muted">{{ p.desc }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Collaboration band -->
      <div class="collab-band mt-5">
        <div class="row g-4 align-items-center">
          <div class="col-md-8">
            <h5 class="mb-1 text-ink fw-bold">In Collaboration with SSIT</h5>
            <p class="mb-0 text-muted">
              The Trust partners with SSIT to deliver industry-aligned technical education and scholarships that
              uplift meritorious students from rural communities.
            </p>
          </div>
          <div class="col-md-4 text-md-end">
            <router-link to="/about" class="btn btn-orange">Explore SSIT</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission / Vision -->
  <section class="py-5">
    <div class="container">
      <div class="text-center mb-4">
        <h3 class="section-title">Mission & Vision</h3>
        <div class="underscore"></div>
      </div>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="mv-card h-100">
            <div class="icon-lg"><i class="fas fa-bullseye"></i></div>
            <h5 class="fw-bold mb-2">Our Mission</h5>
            <p class="mb-0 text-muted">
              To broaden access to quality technical education through scholarships, academic support,
              and holistic development—especially for deserving students from economically challenged backgrounds.
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="mv-card h-100">
            <div class="icon-lg"><i class="fas fa-eye"></i></div>
            <h5 class="fw-bold mb-2">Our Vision</h5>
            <p class="mb-0 text-muted">
              To be a catalyst for societal transformation by nurturing skilled, ethical, and well-rounded graduates
              who contribute meaningfully to their communities and the nation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

const leader = {
  name: 'Sri D. Prabhakar Reddy',
  role: 'Secretary & Correspondent, VIPASSANA Educational Trust',
  img: new URL('@/assets/management/secretary.jpg', import.meta.url).href
}

const pillars = [
  {
    title: 'Merit-cum-Scholarships',
    icon: 'fas fa-graduation-cap',
    desc: 'Financial support to ensure talent is never denied opportunity.'
  },
  {
    title: 'Rural Empowerment',
    icon: 'fas fa-seedling',
    desc: 'Focused outreach and access to technical education in rural areas.'
  },
  {
    title: 'Holistic Development',
    icon: 'fas fa-users',
    desc: 'Encouraging sports & extracurriculars for well-rounded growth.'
  },
  {
    title: 'Technical Education',
    icon: 'fas fa-microchip',
    desc: 'Driving quality, industry-aligned programs through SSIT partnership.'
  }
]
</script>

<style scoped>
/* Theme */
:root { --orange: #FF7701; --ink: #1a2238; }
.text-ink { color: var(--ink); }

/* Hero */
.trust-hero {
  background: var(--ink);
  color: #fff;
  padding: 3rem 0;
}
.hero-title {
  font-weight: 800;
  font-size: clamp(28px, 3.6vw, 44px);
  margin-bottom: .35rem;
}
.hero-subtitle {
  max-width: 720px;
  opacity: .9;
}
.leader-photo {
  width: 130px; height: 130px; border-radius: 50%;
  object-fit: cover; border: 4px solid rgba(255,255,255,.25);
  box-shadow: 0 12px 28px rgba(0,0,0,.2);
}

/* Section headings */
.section-title {
  font-weight: 700;
  color: var(--orange);
}
.underscore {
  width: 60px; height: 4px; background: var(--orange);
  margin: 8px auto 0; border-radius: 2px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%,100%{transform:scaleX(1);opacity:1}
  50%{transform:scaleX(.5);opacity:.6}
}

/* Copy */
.trust-copy p{ text-align: justify; color:#4b5563; }

/* Pillars */
.pillar-card{
  background:#fff; border-radius:14px; padding:14px 16px;
  box-shadow:0 6px 18px rgba(0,0,0,.06);
  transition: transform .25s ease, box-shadow .25s ease;
}
.pillar-card:hover{
  transform: translateY(-4px);
  box-shadow:0 12px 24px rgba(0,0,0,.10);
}
.icon-box{
  width:48px;height:48px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  background:rgba(255,119,1,.12); color:var(--orange);
  margin-bottom:.5rem; font-size:1.15rem;
}

/* Collaboration band */
.collab-band{
  background:#fff; border-radius:14px; padding:16px 18px;
  box-shadow:0 6px 18px rgba(0,0,0,.06);
}

/* Mission / Vision */
.mv-card{
  background:#fff;border-radius:14px;padding:20px;
  box-shadow:0 6px 18px rgba(0,0,0,.06);
}
.icon-lg{
  width:56px;height:56px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  background:rgba(255,119,1,.12); color:var(--orange);
  font-size:1.25rem; margin-bottom:.6rem;
}

/* Buttons */
.btn-orange{
  background: var(--orange);
  color:#fff; font-weight:600; border-radius:8px;
}
.btn-orange:hover{ background:#e36600; }
</style>
