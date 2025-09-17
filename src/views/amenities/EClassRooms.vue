<template>
  <div class="eclass-page">
    <!-- Header & Nav -->
    <Header />
    <NavBar />

    <!-- Hero -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content text-center">
        <h1 class="title">E-Class Rooms</h1>
        <p class="subtitle">
          Advanced Learning Spaces for Communication & Technical Skills
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container content">
      <!-- About -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-chalkboard-user"></i> About E-Class Rooms
        </h2>
        <p>
          SSIT provides a <strong>well-furnished E-Class Room</strong> for
          students to participate in extra-curricular activities. The facility
          is designed to enhance <strong>communication development</strong> and
          <strong>technical skill development</strong>.
        </p>
        <p>
          With <strong>18 hours of dedicated internet access</strong>, the
          E-Class Rooms serve as modern learning hubs where students can engage
          in digital and interactive learning.
        </p>
      </section>

      <!-- Key Features -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-star"></i> Key Features
        </h2>
        <ul class="features">
          <li>
            <i class="fa-solid fa-chair"></i> Well-furnished learning
            environment
          </li>
          <li>
            <i class="fa-solid fa-network-wired"></i> 18 hours of high-speed
            internet
          </li>
          <li>
            <i class="fa-solid fa-users"></i> Space for extracurricular
            activities
          </li>
          <li>
            <i class="fa-solid fa-laptop-code"></i> Technical skill development
            lab
          </li>
          <li>
            <i class="fa-solid fa-language"></i> Communication development
            programs
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
  background: url("https://images.unsplash.com/photo-1584697964403-5d0d0b05de4b")
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

/* Features List */
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
    