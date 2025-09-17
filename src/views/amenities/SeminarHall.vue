<template>
  <div class="seminar-page">
    <!-- Header + Nav -->
    <Header />
    <NavBar />

    <!-- Hero Section -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="container text-center hero-content">
        <h1 class="title">Seminar Halls</h1>
        <p class="subtitle">
          State-of-the-Art Facilities for Academic & Professional Events
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container content">
      <!-- About Seminar Hall -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-building-columns"></i> About Our Seminar Hall
        </h2>
        <p>
          Sai Spurthi Institute of Technology (SSIT) has an excellent seminar
          hall located on the <strong>2nd floor</strong> with a seating
          capacity of nearly <strong>500 students</strong> at a stretch.
        </p>
        <p>
          The hall is equipped with modern presentation and audio systems,
          ensuring high-quality events and knowledge-sharing sessions.
        </p>
      </section>

      <!-- Facilities -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-laptop-file"></i> Facilities & Equipment
        </h2>
        <ul class="facility-list">
          <li>
            <i class="fa-solid fa-tv"></i> LCD Projector –
            <strong>Sony VPL-EX7</strong>
          </li>
          <li>
            <i class="fa-solid fa-volume-high"></i> Amplifier –
            <strong>AHUJA SSA-250M</strong>
          </li>
          <li>
            <i class="fa-solid fa-microphone"></i> Eleven Column Speakers –
            <strong>AHUJA ASC310T</strong>
          </li>
          <li>
            <i class="fa-solid fa-chalkboard"></i> Marker Board for
            presentations & discussions
          </li>
        </ul>
      </section>

      <!-- Inspiration -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-users"></i> Inspirational Ambience
        </h2>
        <p>
          The seminar hall is decorated with <strong>golden environmental
          photographs</strong> of eminent national and international
          personalities in science and technology. Each portrait includes a
          <strong>brief bio-data</strong>, inspiring students towards growth,
          innovation, and academic excellence.
        </p>
      </section>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
:root {
  --navy: #1e40af;
  --orange: #f97316;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

/* Hero */
.hero {
  position: relative;
  background: url("https://images.unsplash.com/photo-1581091870622-3b6f8a6a1ef0")
    center/cover no-repeat;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.hero .overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 64, 175, 0.7);
}
.hero-content {
  position: relative;
  z-index: 2;
}
.title {
  font-size: 2.4rem;
  font-weight: 800;
}
.subtitle {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #e0e7ff;
}

/* Content */
.content {
  margin-top: 2rem;
}
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}
.section-title {
  color: var(--navy);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Facility List */
.facility-list {
  list-style: none;
  padding: 0;
}
.facility-list li {
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
  color: var(--muted);
}
.facility-list i {
  color: var(--orange);
  font-size: 1.2rem;
}
</style>
