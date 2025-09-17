<template>
  <div class="transport-page">
    <!-- Header & Nav -->
    <Header />
    <NavBar />

    <!-- Hero -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content text-center">
        <h1 class="title">Transportation</h1>
        <p class="subtitle">Safe & Reliable Commute for Our Students</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container content">
      <!-- About Transport -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-bus"></i> About Transportation Facility
        </h2>
        <p>
          The college operates a fleet of <strong>2 buses</strong> to provide
          safe and reliable transportation for students. The routes are
          organized to ensure that students from all parts of the town can
          easily access the college.
        </p>
        <p>
          The facility is made available at <strong>reasonable charges</strong>,
          depending on the routes opted by students.
        </p>
      </section>

      <!-- Routes -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-route"></i> Main Pickup Points
        </h2>
        <ul class="routes">
          <li>
            <i class="fa-solid fa-location-dot"></i> Sathupally
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i> Chintalapudi
          </li>
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
  background: url("https://images.unsplash.com/photo-1596445836561-991daf9c2f59")
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

/* Routes */
.routes {
  list-style: none;
  padding: 0;
}
.routes li {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.routes i {
  color: var(--orange);
}
</style>
