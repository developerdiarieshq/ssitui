<template>
  <div class="anti-ragging-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Anti-Ragging Cell</h1>
        <p class="subtitle">
          Creating a Safe, Respectful, and Inclusive Campus Environment
        </p>
      </div>
    </header>

    <!-- BODY -->
    <main class="container content">
      <!-- About Section -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-ban"></i> About Anti-Ragging
        </h2>
        <p>
          Sai Spurthi Institute of Technology maintains a <strong>zero tolerance policy</strong>
          towards ragging. In compliance with the directives of the Hon’ble Supreme Court of India,
          AICTE, and UGC regulations, our Anti-Ragging Cell ensures that every student feels safe,
          respected, and supported.
        </p>
      </section>

      <!-- Rules & Guidelines -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-scale-balanced"></i> Rules & Guidelines
        </h2>
        <ul class="rules-list">
          <li>
            <i class="fa-solid fa-check text-orange"></i> Ragging in any form—verbal, physical, or
            psychological—is strictly prohibited.
          </li>
          <li>
            <i class="fa-solid fa-check text-orange"></i> Offenders will face severe disciplinary
            action including suspension, rustication, or legal action.
          </li>
          <li>
            <i class="fa-solid fa-check text-orange"></i> Students must report any incident of
            ragging immediately to the Anti-Ragging Cell or faculty.
          </li>
          <li>
            <i class="fa-solid fa-check text-orange"></i> Confidentiality of complainants will be
            strictly maintained.
          </li>
        </ul>
      </section>

      <!-- Committee Members -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-people-group"></i> Anti-Ragging Committee
        </h2>
        <div class="committee-grid">
          <div v-for="(m, idx) in committee" :key="idx" class="member-card">
            <h5>{{ m.name }}</h5>
            <p class="role">{{ m.role }}</p>
            <p><i class="fa-solid fa-envelope text-orange"></i> {{ m.email }}</p>
            <p><i class="fa-solid fa-phone text-orange"></i> {{ m.phone }}</p>
          </div>
        </div>
      </section>

      <!-- Helpline -->
      <section class="card helpline">
        <h2 class="section-title">
          <i class="fa-solid fa-phone-volume"></i> Helpline & Support
        </h2>
        <p>
          Students can approach the Anti-Ragging Cell directly or use the following helpline numbers
          and email for immediate support.
        </p>
        <ul>
          <li>
            <i class="fa-solid fa-phone text-orange"></i> National Helpline:
            <strong>1800-180-5522</strong>
          </li>
          <li>
            <i class="fa-solid fa-envelope text-orange"></i> Email:
            <a href="mailto:antiragging@ssit.edu.in">antiragging@ssit.edu.in</a>
          </li>
          <li>
            <i class="fa-solid fa-globe text-orange"></i> UGC Helpline Portal:
            <a href="https://www.antiragging.in" target="_blank">www.antiragging.in</a>
          </li>
        </ul>
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

const committee = [
  {
    name: "Dr. Sk. Meera Saheb",
    role: "Coordinator, Anti-Ragging Cell",
    email: "shaikmeerasaheb7@gmail.com",
    phone: "9705519877",
  },
  {
    name: "Dr. Ch. Vijaya Kumar",
    role: "Principal & Member",
    email: "principal@ssit.edu.in",
    phone: "08761-288278",
  },
  {
    name: "Mr. T Veeranna",
    role: "Member, Faculty Representative",
    email: "veeru38@gmail.com",
    phone: "9948871778",
  },
];
</script>

<style scoped>
/* THEME */
:root {
  --navy: #1e40af;
  --orange: #f97316;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

.anti-ragging-page {
  background: var(--bg);
  min-height: 100vh;
}
.container {
  width: min(1180px, 92%);
  margin: auto;
}

/* HERO */
.hero {
  background: linear-gradient(60deg, var(--navy), #153a9c);
  color: #fff;
  padding: 3rem 1rem;
}
.title {
  font-size: 2.2rem;
  font-weight: 800;
}
.subtitle {
  font-size: 1.1rem;
  color: #dbeafe;
  margin-top: 0.5rem;
}

/* CARD */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
p {
  color: #374151;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* RULES */
.rules-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.rules-list li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #374151;
}

/* COMMITTEE */
.committee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.member-card {
  border: 1px solid var(--border);
  border-left: 5px solid var(--orange);
  border-radius: 0.5rem;
  padding: 1rem;
}
.member-card h5 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--navy);
}
.member-card .role {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
}

/* HELPLINE */
.helpline ul {
  list-style: none;
  padding: 0;
}
.helpline li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #374151;
}
.text-orange {
  color: var(--orange);
  margin-right: 0.5rem;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
}
</style>
