<template>
  <div class="counselling-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO SECTION -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="container text-center hero-content">
        <h1 class="title">Counselling & Support</h1>
        <p class="subtitle">
          Confidential Guidance for Student Well-being & Academic Success
        </p>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="container content">
      <!-- About Counselling -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-hand-holding-heart"></i> About Counselling
        </h2>
        <p>
          Sai Spurthi Institute of Technology (SSIT) offers confidential and
          free professional counselling and psychological support to its
          students. Staff counsellors help students handle stressful situations,
          cope with challenges, and make better social adjustments for good
          professional performance.
        </p>
        <p>
          This initiative enables students to take full advantage of the
          academic and social environment of the college and realize their
          potential to the fullest.
        </p>
        <p>
          <strong>Mentorship Model:</strong> Every faculty member acts as a
          counsellor for <strong>20 students</strong>, conducting one-to-one
          sessions to address concerns and provide solutions.
        </p>
      </section>

      <!-- Support Areas -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-list-check"></i> Counselling & Support Areas
        </h2>
        <div class="support-grid">
          <div v-for="(s, idx) in supportAreas" :key="idx" class="support-card">
            <i :class="s.icon"></i>
            <h5>{{ s.title }}</h5>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const supportAreas = [
  { title: "Personal Adjustment Problems", icon: "fa-solid fa-user" },
  { title: "Situational Crises", icon: "fa-solid fa-triangle-exclamation" },
  { title: "Communication Skills", icon: "fa-solid fa-comments" },
  { title: "Regularity & Discipline", icon: "fa-solid fa-calendar-check" },
  { title: "Learning Skills for Lifelong Usage", icon: "fa-solid fa-lightbulb" },
  { title: "Academic Stress", icon: "fa-solid fa-book-open-reader" }
];
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
  background: url("https://images.unsplash.com/photo-1520975918311-7da615d61c94")
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
  background: rgba(30, 64, 175, 0.65);
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

/* SUPPORT GRID */
.support-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
}
.support-card {
  background: var(--bg);
  border-radius: 0.5rem;
  padding: 1.2rem;
  text-align: center;
  transition: transform 0.3s ease;
}
.support-card:hover {
  transform: translateY(-5px);
}
.support-card i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--orange);
}
.support-card h5 {
  font-weight: 600;
  color: var(--navy);
}
</style>
