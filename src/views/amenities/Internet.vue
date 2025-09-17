<template>
  <div class="internet-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="container text-center hero-content">
        <h1 class="title">Internet Facility</h1>
        <p class="subtitle">
          Always Connected – Enriched 44 Mbps Bandwidth for Students, Staff & Hostels
        </p>
      </div>
    </header>

    <!-- BODY CONTENT -->
    <main class="container content">
      <!-- About -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-wifi"></i> About Internet Facility
        </h2>
        <p>
          Sai Spurthi Institute of Technology (SSIT) is enriched with a dedicated internet facility
          offering <strong>44 Mbps bandwidth</strong>, exclusively for staff, students, staff quarters,
          and the girls’ hostel with <strong>24/7 unlimited access</strong>.
        </p>
        <p>
          The campus is supported by <strong>two providers</strong> –
          BSNL Broadband (40 Mbps) and Reliance NET LINKS (4 Mbps).
          SSIT ensures seamless connectivity through:
        </p>
        <ul>
          <li>Dedicated internet lab for students with <strong>60 systems</strong> (8:30 AM – 7:30 PM)</li>
          <li>Separate lab in the <strong>girls’ hostel with 20 systems</strong></li>
          <li>Wi-Fi internet access across campus</li>
          <li>Facility extended to <strong>all staff quarters</strong></li>
        </ul>
      </section>

      <!-- Features -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-list-check"></i> Key Features
        </h2>
        <div class="features-grid">
          <div v-for="(f, idx) in features" :key="idx" class="feature">
            <i :class="f.icon"></i>
            <h5>{{ f.title }}</h5>
            <p>{{ f.detail }}</p>
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

const features = [
  {
    title: "High-Speed Connectivity",
    detail: "Dedicated 44 Mbps internet facility across campus.",
    icon: "fa-solid fa-bolt text-orange"
  },
  {
    title: "Student Internet Lab",
    detail: "60 systems dedicated for students (8:30 AM – 7:30 PM).",
    icon: "fa-solid fa-computer text-navy"
  },
  {
    title: "Girls Hostel Lab",
    detail: "20 systems exclusively for girl students.",
    icon: "fa-solid fa-house-user text-green"
  },
  {
    title: "Staff Quarters",
    detail: "Reliable connectivity extended to staff residences.",
    icon: "fa-solid fa-people-roof text-blue"
  },
  {
    title: "Multiple Providers",
    detail: "BSNL Broadband (40 Mbps) & Reliance NET LINKS (4 Mbps).",
    icon: "fa-solid fa-network-wired text-purple"
  },
  {
    title: "Campus-Wide Wi-Fi",
    detail: "Seamless Wi-Fi connectivity across the institution.",
    icon: "fa-solid fa-wifi text-orange"
  }
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
  background: url("https://images.unsplash.com/photo-1519389950473-47ba0277781c") center/cover no-repeat;
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
  color: #dbeafe;
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

/* FEATURES */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.feature {
  background: var(--bg);
  border-radius: 0.5rem;
  padding: 1.2rem;
  text-align: center;
  transition: transform 0.3s ease;
}
.feature:hover {
  transform: translateY(-5px);
}
.feature i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--orange);
}
.feature h5 {
  font-weight: 700;
  margin-bottom: 0.3rem;
  color: var(--navy);
}
</style>
