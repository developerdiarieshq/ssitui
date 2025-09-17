<template>
  <div class="temple-page">
    <!-- Header & Navbar -->
    <Header />
    <NavBar />

    <!-- Hero Section -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content text-center">
        <h1 class="title">Sai Baba Temple</h1>
        <p class="subtitle">
          A Place of Spirituality, Peace, and Divine Blessings at SSIT
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container content">
      <!-- About Temple -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-church"></i> About Sai Baba Temple
        </h2>
        <p>
          An extra asset of SSIT is the presence of a serene and beautiful
          <strong>Sai Baba Temple</strong> in the college premises. It was
          established to promote <em>spirituality, divinity, and mental peace</em>
          among students and staff, thereby fostering a healthy and peaceful
          campus environment.
        </p>
        <p>
          Our visionary Chairman, <strong>Dr. B. Partha Sarathi Reddy</strong>,
          a great devotee of Sai Baba, built the
          <em>"Ganapathi Dattatreya Sahitha Sai Mandir"</em> on
          <strong>30th May, 2005</strong>.
        </p>
      </section>

      <!-- Weekly Pooja -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-hands-praying"></i> Weekly Pooja
        </h2>
        <p>
          Every <strong>Thursday</strong>, special offerings and
          <em>Pooja</em> are performed at the temple, attended by students,
          faculty, and staff. These spiritual gatherings inspire positivity,
          devotion, and unity across the campus community.
        </p>
      </section>

      <!-- Importance -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-peace"></i> Importance of the Temple
        </h2>
        <ul class="features">
          <li><i class="fa-solid fa-leaf"></i> Promotes spirituality and harmony</li>
          <li><i class="fa-solid fa-heart"></i> Brings peace and mental well-being</li>
          <li><i class="fa-solid fa-people-group"></i> Builds a united campus environment</li>
          <li><i class="fa-solid fa-sun"></i> Encourages devotion and positive energy</li>
        </ul>
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
  --bg: #f9fafb;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

/* Hero */
.hero {
  position: relative;
  background: url("https://images.unsplash.com/photo-1608897013039-887169c51b83")
    center/cover no-repeat;
  height: 45vh;
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
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #e0e7ff;
}

/* Content */
.content {
  margin: 2rem 0;
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
.section-title i {
  color: var(--orange);
}

/* Features */
.features {
  list-style: none;
  padding: 0;
}
.features li {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.features i {
  color: var(--orange);
}
</style>
