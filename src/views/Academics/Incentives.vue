<template>
  <div class="incentives-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Incentives & Scholarships</h1>
        <p class="subtitle">Sai Spurthi Institute of Technology recognizes and rewards merit & excellence</p>
      </div>
    </header>

    <!-- BODY -->
    <main class="container content">
      <!-- Students -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-user-graduate"></i> Student Incentives
        </h2>
        <p class="intro">
          SSIT offers generous scholarships and fee concessions to meritorious students during admissions
          and ensures continuity based on performance.
        </p>

        <div class="scholarship-grid">
          <div class="scholarship-card" v-for="(s, idx) in studentSchemes" :key="idx">
            <div class="amount">{{ s.amount }}</div>
            <p class="condition">{{ s.condition }}</p>
          </div>
        </div>
      </section>

      <!-- Faculty -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-chalkboard-teacher"></i> Faculty Incentives
        </h2>
        <p class="intro">
          To encourage continuous learning, research, and student mentoring, SSIT provides the following
          incentives for faculty:
        </p>
        <ul class="faculty-list">
          <li v-for="(f, idx) in facultySchemes" :key="idx">
            <i class="fa-solid fa-check text-orange"></i> {{ f }}
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

const studentSchemes = [
  {
    amount: "Full Fee Waiver (₹70,000/year)",
    condition:
      "For students securing 950+ marks in 10+2 and below 12,000 rank in EAMCET. Continued for 4 years with ≥80% in subsequent years.",
  },
  {
    amount: "50% Fee Concession (₹35,000/year)",
    condition:
      "For students securing 900+ marks in 10+2 and below 25,000 rank in EAMCET.",
  },
  {
    amount: "₹16,000 Fee Concession",
    condition:
      "For students securing 850+ marks in 10+2 and below 40,000 rank in EAMCET.",
  },
  {
    amount: "₹10,000 Fee Concession",
    condition:
      "For students securing 800+ marks in 10+2 and below 50,000 rank in EAMCET.",
  },
  {
    amount: "₹5,500 Scholarship",
    condition:
      "For students securing A Grade in 10+2 or below 75,000 rank in EAMCET.",
  },
];

const facultySchemes = [
  "Registration fee, TA & DA for attending seminars, workshops, or conferences (national/international) to present technical papers.",
  "₹500 cash award per student (1:20 counseling ratio) for mentoring students towards a successful career.",
];
</script>

<style scoped>
/* Theme */
:root {
  --navy: #1e40af;
  --orange: #f97316;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

.incentives-page {
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
.intro {
  color: var(--muted);
  margin-bottom: 1.5rem;
}

/* Student Scholarships */
.scholarship-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.scholarship-card {
  background: #fefefe;
  border: 1px solid var(--border);
  border-left: 5px solid var(--orange);
  border-radius: 0.5rem;
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.scholarship-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}
.amount {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.5rem;
}
.condition {
  font-size: 0.95rem;
  color: var(--muted);
}

/* Faculty */
.faculty-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.faculty-list li {
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
