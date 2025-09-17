<template>
  <div class="hostels-page">
    <!-- Header & Nav -->
    <Header />
    <NavBar />

    <!-- Hero -->
    <header class="hero">
      <div class="overlay"></div>
      <div class="hero-content text-center">
        <h1 class="title">Hostel Facilities</h1>
        <p class="subtitle">Comfortable & Safe Living for Students</p>
      </div>
    </header>

    <main class="container content">
      <!-- General Facilities -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-building-user"></i> Facilities
        </h2>
        <ul class="facility-list">
          <li v-for="(f, i) in facilities" :key="i">
            <i class="fa-solid fa-check-circle"></i> {{ f }}
          </li>
        </ul>
        <p class="mt-2">
          Every student is closely <strong>monitored by Hostel Wardens</strong>
          to ensure safety, discipline, and academic growth.
        </p>
      </section>

      <!-- Boys Hostel -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-person"></i> Boys Hostel
        </h2>
        <p>
          A separate limited hostel accommodation is available for boys with
          <strong>3-bedded rooms</strong>, each provided with a cot, chair, and
          study table. Facilities include gym, TV room, hot/cool water,
          generator backup, and faculty-supervised study hours with reading
          halls.
        </p>
        <p>
          Hygienic and nutritive food is provided at subsidized rates in the
          cafeteria, supporting both academics and social interaction.
        </p>
        <h4 class="mt-3">Wardens</h4>
        <ul class="wardens">
          <li>Mr. Kanaka Raju – 📞 9842270579</li>
          <li>Mr. Ch. Sivaji – 📞 8341132414</li>
        </ul>
      </section>

      <!-- Girls Hostel -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-person-dress"></i> Girls Hostel
        </h2>
        <p>
          SSIT has excellent hostel facilities for girls with
          <strong>3 blocks</strong> accommodating seniors and juniors:
        </p>
        <ul>
          <li>I Block – III & IV B.Tech: 66 rooms (3 per room)</li>
          <li>II Block – II B.Tech: 28 rooms (3 per room)</li>
          <li>
            III Block – I B.Tech, MCA, MBA: 36 rooms (3 per room), total
            strength <strong>362 students</strong>
          </li>
        </ul>
        <p>
          Similar to boys hostel, facilities include gym, TV room, hot/cool
          water, generator backup, and supervised study hours. The cafeteria
          provides hygienic and nutritious food at subsidized prices.
        </p>
        <h4 class="mt-3">Wardens</h4>
        <ul class="wardens">
          <li>Vijaya Lakshmi – 📞 9505456453</li>
          <li>Sravani Kumari – 📞 9553131273</li>
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

const facilities = [
  "Internet Facility in Hostels",
  "Newspapers for every room",
  "Study Hours (8:30 PM – 10:30 PM)",
  "Generator Facility for Uninterrupted Power",
  "Mineral Water",
  "General Stores for daily needs",
  "Games for Physical Fitness (4:00 PM – 6:00 PM)",
  "Gym Room",
  "TV Room",
  "Bakery",
  "Hot Water Facility",
  "Phone Facility to talk with parents",
  "Cot, Chair, and Table provided for each student",
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

/* Cards */
.content {
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.facility-list {
  list-style: none;
  padding: 0;
}
.facility-list li {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.facility-list i {
  color: var(--orange);
}
.wardens {
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
}
.wardens li {
  font-size: 1rem;
  margin: 0.3rem 0;
  color: var(--muted);
}
</style>
