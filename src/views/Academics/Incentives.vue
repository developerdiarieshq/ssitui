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
        <p class="intro">
          Comprehensive incentive programs for both students and faculty to promote academic excellence
          and professional development.
        </p>
      </div>
    </header>

    <!-- NAV TABS -->
    <nav class="tabs container" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="setTab(tab.id)"
        :aria-selected="activeTab === tab.id"
        role="tab"
      >
        <i :class="tab.icon"></i><span class="tab-label">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- CONTENT -->
    <main class="container content" role="tabpanel">
      <!-- Student Incentives -->
      <section v-show="activeTab === 'students'" class="panel card">
        <h2 class="section-title" aria-label="Student incentives">
          <i class="fa-solid fa-user-graduate"></i><span>Student Incentives</span>
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

      <!-- Faculty Incentives -->
      <section v-show="activeTab === 'faculty'" class="panel card">
        <h2 class="section-title" aria-label="Faculty incentives">
          <i class="fa-solid fa-chalkboard-teacher"></i><span>Faculty Incentives</span>
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
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const router = useRouter();
const route = useRoute();

const activeTab = ref("students");

const tabs = [
  { id: "students", label: "Student Incentives", icon: "fa-solid fa-user-graduate", path: "/incentives/students" },
  { id: "faculty", label: "Faculty Incentives", icon: "fa-solid fa-chalkboard-teacher", path: "/incentives/faculty" }
];

const setTab = (id) => {
  activeTab.value = id;
  const tab = tabs.find(t => t.id === id);
  if (tab && tab.path) {
    router.push(tab.path);
  }
};

// Initialize active tab based on route
onMounted(() => {
  const pathToKey = {
    "/incentives/students": "students",
    "/incentives/faculty": "faculty"
  };
  const key = pathToKey[route.path];
  if (key) {
    activeTab.value = key;
  }
});

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathToKey = {
    "/incentives/students": "students",
    "/incentives/faculty": "faculty"
  };
  const key = pathToKey[newPath];
  if (key) {
    activeTab.value = key;
  }
});

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
  --orange: #FF7701;
  --ink: #1a2238;
  --navy: #1e40af;
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
  padding: 0 1rem;
}

.content {
  padding: 2rem 0;
}

/* HERO */
.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}
.title {
  font-weight: 800;
  font-size: 2.2rem;
  margin: 0 0 0.3rem 0;
  color: white;
}
.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  color: white;
}
.intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
  color: white;
}

/* TABS */
.tabs {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  margin: 1rem auto;
  width: 100%;
  max-width: none;
  display: flex;
  gap: .5rem;
  padding: .6rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
}

.tab {
  border: 1px solid var(--border);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: .5rem .9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: .5rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 40px;
  min-width: fit-content;
  flex-shrink: 0;
}

.tab i {
  color: var(--orange);
}

.tab:hover {
  background: var(--orange);
  color: #fff;
  border-color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.tab:hover i {
  color: #fff;
}

.tab.active {
  border-color: var(--orange);
  background: var(--orange);
  color: #fff;
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  transform: translateY(-2px);
  font-weight: 700;
}

.tab.active i {
  color: #fff;
}

/* CARD */
.panel {
  margin-bottom: 3rem;
  background: var(--white);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.section-title {
  font-weight: 700;
  color: var(--orange);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.section-title i {
  color: var(--orange);
  font-size: 1.5rem;
}

.intro {
  color: var(--muted);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

/* Student Scholarships */
.scholarship-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
.scholarship-card {
  background: var(--white);
  border: 1px solid rgba(255, 119, 1, 0.1);
  border-left: 5px solid var(--orange);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.scholarship-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}

.amount {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.75rem;
}

.condition {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.5;
}

/* Faculty */
.faculty-list {
  background: var(--white);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
  list-style: none;
  padding: 1.5rem;
  margin: 0;
}

.faculty-list li {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-dark);
  font-weight: 500;
  line-height: 1.6;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 119, 1, 0.1);
}

.faculty-list li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.text-orange {
  color: var(--orange);
  margin-right: 0.5rem;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .panel {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .scholarship-card {
    padding: 1rem;
  }
  
  .tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style>
