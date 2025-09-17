<template>
  <div class="quarters-page">
    <!-- Header & Navbar -->
    <Header />
    <NavBar />

    <!-- Hero Section -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content text-center">
        <h1 class="title">Staff Quarters</h1>
        <p class="subtitle">
          Comfortable Residential Facilities for Faculty & Staff
        </p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container content">
      <!-- About Section -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-house-user"></i> About Staff Quarters
        </h2>
        <p>
          For better administrative control, Sai Spurthi Institute of Technology
          provides well-planned <strong>staff quarters</strong> for its
          employees. The management ensures all modern facilities with a
          community-friendly environment.
        </p>
        <ul class="features">
          <li><i class="fa-solid fa-bolt"></i> 24x7 electricity supply</li>
          <li><i class="fa-solid fa-faucet"></i> Purified water facility</li>
          <li><i class="fa-solid fa-wifi"></i> Internet and telephone access</li>
          <li><i class="fa-solid fa-tv"></i> Cable TV connection</li>
          <li><i class="fa-solid fa-shield-halved"></i> 24x7 security services</li>
          <li><i class="fa-solid fa-bus"></i> Transport for school-going children</li>
          <li><i class="fa-solid fa-children"></i> Playgrounds for sports and recreation</li>
          <li><i class="fa-solid fa-utensils"></i> Two canteens (separate for gents & ladies)</li>
        </ul>
      </section>

      <!-- Capacity -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-users"></i> Capacity & Facilities
        </h2>
        <p>
          The staff quarters consist of <strong>3 blocks</strong> named
          <em>Krishna (A), Godhavari (B), and Kinnerasani (C)</em>. Each block
          has <strong>12 two-bedroom flats</strong>, accommodating a total of
          <strong>41 families</strong>. About <strong>30 children</strong> of
          staff are benefitting from the dedicated school transport facility.
        </p>
      </section>

      <!-- Blocks Section -->
      <section class="blocks">
        <div class="block-card" v-for="block in blocks" :key="block.name">
          <i :class="block.icon"></i>
          <h3>{{ block.name }}</h3>
          <p>{{ block.detail }}</p>
        </div>
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

const blocks = [
  {
    name: "A-Block - Krishna",
    detail:
      "Accommodates the Principal, Heads of Departments, and Professors.",
    icon: "fa-solid fa-user-tie",
  },
  {
    name: "B-Block - Godhavari",
    detail: "Reserved for Associate and Assistant Professors.",
    icon: "fa-solid fa-chalkboard-teacher",
  },
  {
    name: "C-Block - Kinnerasani",
    detail: "Allocated for Non-teaching staff members.",
    icon: "fa-solid fa-people-group",
  },
];
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
  background: url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c")
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

/* Blocks */
.blocks {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.block-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}
.block-card:hover {
  transform: translateY(-4px);
}
.block-card i {
  font-size: 2rem;
  color: var(--orange);
  margin-bottom: 0.5rem;
}
.block-card h3 {
  color: var(--navy);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.block-card p {
  color: var(--muted);
  font-size: 0.95rem;
}
</style>
