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
/* Theme Variables */
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --muted: #6b7280;
}

.page-bg {
  background: linear-gradient(180deg, #fff 0%, #f7f9fc 100%);
}

/* HERO */
.hero {
  background: var(--ink);
  padding: 3rem 0;
}

.hero h1,
.hero p {
  color: #fff;
}

.hero h1 {
  margin-bottom: 1rem;
}

.hero .lead {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  font-weight: 500;
}

/* SECTION TITLE */
.section-title {
  color: var(--ink);
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--orange);
  border-radius: 2px;
  animation: underscorePulse 2s ease-in-out infinite;
}

@keyframes underscorePulse {
  0%, 100% {
    width: 60px;
    opacity: 1;
  }
  50% {
    width: 80px;
    opacity: 0.8;
  }
}

/* ELEVATED CARD */
.elev-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0,0,0,.08);
  border: 2px solid rgba(255, 119, 1, 0.1);
  transition: all 0.3s ease;
}

.elev-card:hover {
  border-color: var(--orange);
  box-shadow: 0 10px 30px rgba(255, 119, 1, 0.2);
}

/* POLICY CARDS */
.policy-card {
  transition: all 0.3s ease;
  cursor: pointer;
}

.policy-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(255, 119, 1, 0.25);
  border-color: var(--orange);
  background: linear-gradient(135deg, #fff 0%, rgba(255, 119, 1, 0.03) 100%);
}

.policy-icon {
  font-size: 2.5rem;
  color: var(--orange);
  transition: all 0.3s ease;
}

.policy-card:hover .policy-icon {
  transform: scale(1.15) rotate(5deg);
  color: #e55a00;
}

.policy-card h5 {
  color: var(--ink);
  font-size: 1.05rem;
  transition: color 0.3s ease;
}

.policy-card:hover h5 {
  color: var(--orange);
}

/* BUTTONS */
.btn-outline-primary {
  border-color: var(--orange);
  color: var(--orange);
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .policy-icon {
    font-size: 2rem;
  }
}
</style>
