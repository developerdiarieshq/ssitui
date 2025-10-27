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
  --orange: #FF7701;
  --ink: #1a2238;
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
  background: var(--ink);
  color: #fff;
  padding: 3rem 1rem;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 119, 1, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 119, 1, 0.05) 0%, transparent 50%);
  pointer-events: none;
}
.title {
  font-size: 2.2rem;
  font-weight: 800;
  position: relative;
  z-index: 1;
}
.subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0.5rem;
  position: relative;
  z-index: 1;
}

/* CARD */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 119, 1, 0.15);
  border-color: rgba(255, 119, 1, 0.3);
}
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  position: relative;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--orange);
  border-radius: 2px;
}
.section-title i {
  color: var(--orange);
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
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 119, 1, 0.05);
  border-left: 3px solid var(--orange);
  border-radius: 0 8px 8px 0;
  transition: all 0.3s ease;
}
.rules-list li:hover {
  background: rgba(255, 119, 1, 0.1);
  transform: translateX(5px);
}
.rules-list li i {
  color: var(--orange);
  font-size: 1.1rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

/* COMMITTEE */
.committee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.member-card {
  border: 2px solid var(--border);
  border-left: 5px solid var(--orange);
  border-radius: 1rem;
  padding: 1.5rem;
  background: var(--card);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}
.member-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}
.member-card h5 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: var(--ink);
}
.member-card .role {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.member-card p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

/* HELPLINE */
.helpline {
  background: linear-gradient(135deg, rgba(255, 119, 1, 0.05) 0%, rgba(255, 119, 1, 0.02) 100%);
  border: 2px solid rgba(255, 119, 1, 0.2);
}
.helpline ul {
  list-style: none;
  padding: 0;
}
.helpline li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  border-left: 3px solid var(--orange);
  transition: all 0.3s ease;
}
.helpline li:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateX(5px);
  box-shadow: 0 2px 8px rgba(255, 119, 1, 0.1);
}
.text-orange {
  color: var(--orange);
  font-size: 1.1rem;
  flex-shrink: 0;
}
.helpline a {
  color: var(--orange);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
.helpline a:hover {
  color: #e55a00;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
  .hero {
    padding: 2rem 1rem;
  }
  .card {
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
  .section-title {
    font-size: 1.2rem;
  }
  .committee-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .member-card {
    padding: 1rem;
  }
  .rules-list li,
  .helpline li {
    padding: 0.5rem;
    gap: 0.5rem;
  }
}
</style>
