<template>
  <div class="englishlabs-page">
    <!-- Header + Nav -->
    <Header />
    <NavBar />

    <!-- Hero Section -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="container text-center hero-content">
        <h1 class="title">English Language Labs</h1>
        <p class="subtitle">
          Strengthening Communication Skills for Academic and Career Excellence
        </p>
      </div>
    </header>

    <!-- Content -->
    <main class="container content">
      <!-- ELCS Lab -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-graduation-cap"></i> ELCS Lab
        </h2>
        <p>
          We are proud to say we have enriched the I<sup>st</sup> year B.Tech students in
          communication skills and spoken language. Established in 2001, the lab
          trains students through multimedia computers with
          <strong>67 student consoles</strong> and a master console equipped with
          high-quality headsets.
        </p>
        <p>
          Systems use <strong>P-IV 1.8 GHz processors, 40GB HDD, and 250MB RAM</strong>
          with Windows 2000/XP operating systems. The lab software includes:
        </p>
        <ul>
          <li>Centronix (2001) – strengthening English accent</li>
          <li>Cambridge Advanced Learner's Dictionary</li>
          <li>Oxford Talking Dictionary</li>
          <li>Talk to Me</li>
          <li>English Grammar in Use</li>
          <li>Telephoning Skills</li>
        </ul>
      </section>

      <!-- Advanced English Communication Skills Lab -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-chalkboard-user"></i> Advanced English Communication Skills Lab
        </h2>
        <p>
          The Department of English and Communications plays a major role in
          strengthening the abilities of students and shaping their careers.
          This advanced lab contains <strong>39 systems with LCD monitors</strong>,
          LAN connectivity, and <strong>Globarena Latest software</strong>.
        </p>
        <p>
          The lab is also equipped with a <strong>P.A system</strong> and is highly
          beneficial to all <strong>B.Tech and MBA students</strong>.
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

/* HERO */
.hero {
  position: relative;
  background: url("https://images.unsplash.com/photo-1581092795360-fd1ca04f0952")
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

/* CONTENT */
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
.card ul {
  margin-top: 0.5rem;
  padding-left: 1.5rem;
}
.card ul li {
  margin-bottom: 0.3rem;
  color: var(--muted);
}
</style>
