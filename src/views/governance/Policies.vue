<template>
  <section class="page-bg">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero text-center text-white py-5">
      <div class="container">
        <h1 class="display-5 fw-bold">Institutional Policies</h1>
        <p class="lead">Guidelines for Governance, Research, Recruitment, and Code of Conduct</p>
      </div>
    </header>

    <!-- POLICIES -->
    <main class="container py-5">
      <h2 class="section-title text-center mb-4">Our Policies</h2>
      <div class="row g-4">
        <div v-for="p in policies" :key="p.title" class="col-6 col-md-4 col-lg-3">
          <div class="policy-card elev-card text-center p-4 h-100">
            <i :class="p.icon" class="policy-icon mb-3"></i>
            <h5 class="fw-bold mb-2">{{ p.title }}</h5>
            <a href="#" class="btn btn-sm btn-outline-primary">View Document</a>
          </div>
        </div>
      </div>
    </main>

    <!-- FOOTER -->
    <Footer />
  </section>
</template>

<script>
import Header from "../../components/Header.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "Policies",
  components: { Header, NavBar, Footer },
  data() {
    return {
      policies: [
        { title: "Research Policy", icon: "fa-solid fa-flask" },
        { title: "Incentive Policy", icon: "fa-solid fa-coins" },
        { title: "E-Governance Policy", icon: "fa-solid fa-globe" },
        { title: "Recruitment Policy", icon: "fa-solid fa-user-plus" },
        { title: "Promotion Policy", icon: "fa-solid fa-chart-line" },
        { title: "Service Rules", icon: "fa-solid fa-clipboard-list" },
        { title: "Code of Conduct", icon: "fa-solid fa-scale-balanced" },
      ],
    };
  },
};
</script>

<style scoped>
.page-bg {
  background: #f7f9fc;
}

/* HERO */
.hero {
  background: linear-gradient(60deg, #1e40af, #143f8c);
}
.hero h1,
.hero p {
  color: #fff;
}

/* SECTION TITLE */
.section-title {
  color: #1e40af;
  font-weight: 700;
}

/* POLICY CARDS */
.policy-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.policy-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.policy-icon {
  font-size: 2rem;
  color: #ff6f00;
}
</style>
