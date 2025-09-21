<template>
  <div class="academic-calendar">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">
          <i class="fa-regular fa-calendar"></i>
          <span>Academic Calendar</span>
        </h1>
        <p class="subtitle">
          <i class="fa-solid fa-calendar-days"></i>
          Plan, Prepare, and Stay Updated with Academic Schedules
        </p>
      </div>
    </header>

    <!-- FILTERS -->
    <main class="container content">
      <section class="filter card">
        <h2 class="section-title">
          <i class="fa-solid fa-filter"></i>
          <span>Search Academic Calendar</span>
        </h2>
        <form @submit.prevent="applyFilter" class="filter-form">
          <div class="form-group">
            <label for="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>Title</span>
            </label>
            <input
              id="search"
              v-model="searchQuery"
              type="text"
              placeholder="Enter event title"
              class="input"
            />
          </div>
          <div class="form-group">
            <label for="year">
              <i class="fa-regular fa-clock"></i>
              <span>Academic Year</span>
            </label>
            <select id="year" v-model="selectedYear" class="input">
              <option value="">All</option>
              <option v-for="year in years" :key="year" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label for="degree">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>Degree</span>
            </label>
            <select id="degree" v-model="selectedDegree" class="input">
              <option value="">All</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </div>
          <div class="btn-group">
            <button type="submit" class="btn-primary">
              <i class="fa-solid fa-magnifying-glass-chart"></i>
              <span>Filter</span>
            </button>
            <button type="button" class="btn-secondary" @click="resetFilter">
              <i class="fa-solid fa-rotate"></i>
              <span>Reset</span>
            </button>
          </div>
        </form>
      </section>

      <!-- TABLE -->
      <section class="table-section card">
        <h2 class="section-title">
          <i class="fa-solid fa-table-cells-large"></i>
          <span>Calendar Records</span>
        </h2>
        <div class="table-wrap">
          <table class="table table-striped" v-if="filteredData.length > 0">
            <thead>
              <tr>
                <th><i class="fa-solid fa-hashtag"></i> <span>S.No</span></th>
                <th><i class="fa-regular fa-calendar-days"></i> <span>Date</span></th>
                <th><i class="fa-regular fa-font"></i> <span>Title</span></th>
                <th><i class="fa-solid fa-calendar-week"></i> <span>Academic Year</span></th>
                <th><i class="fa-solid fa-graduation-cap"></i> <span>Degree</span></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in filteredData" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.date }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.year }}</td>
                <td>{{ item.degree }}</td>
              </tr>
            </tbody>
          </table>
          <p v-else class="no-records">No records found</p>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

// Filter state
const searchQuery = ref("");
const selectedYear = ref("");
const selectedDegree = ref("");

// Dropdown years (descending order)
const years = ["2025-26", "2024-25", "2023-24"];

// Sample data (replace with API later)
const calendarData = ref([
  { id: 1, date: "01-06-2025", title: "Commencement of Classes", year: "2025-26", degree: "UG" },
  { id: 2, date: "15-08-2025", title: "Independence Day Celebrations", year: "2025-26", degree: "UG" },
  { id: 3, date: "10-11-2024", title: "Mid Exams", year: "2024-25", degree: "PG" },
  { id: 4, date: "25-12-2024", title: "Christmas Holiday", year: "2024-25", degree: "UG" },
]);

const filteredData = computed(() => {
  return calendarData.value.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const matchesYear = selectedYear.value
      ? item.year === selectedYear.value
      : true;
    const matchesDegree = selectedDegree.value
      ? item.degree === selectedDegree.value
      : true;
    return matchesSearch && matchesYear && matchesDegree;
  });
});

function applyFilter() {
  // Handled by computed
}
function resetFilter() {
  searchQuery.value = "";
  selectedYear.value = "";
  selectedDegree.value = "";
}
</script>

<style scoped>
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --navy: #1e40af;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

.academic-calendar {
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

.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2.2rem;
  font-weight: 800;
  color: white;
  margin: 0 0 0.3rem 0;
}

.title i {
  font-size: 2.1rem;
  color: var(--orange);
}

.subtitle {
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.subtitle i {
  font-size: 1rem;
  color: var(--orange);
}

.card {
  background: var(--card);
  border: 1px solid rgba(255, 119, 1, 0.1);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
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

.filter-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-end;
}

.form-group {
  flex: 1;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.form-group label {
  font-weight: 600;
  color: var(--muted);
  font-size: 0.92rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.input {
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.62rem 0.9rem;
  font-size: 1rem;
  background: #f8fafc;
}

.btn-group {
  display: flex;
  gap: 1rem;
  margin-top: 1.1rem;
}
button {
  cursor: pointer;
  border: none;
  padding: 0.68rem 1.35rem;
  border-radius: 0.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
}
.btn-primary {
  background: var(--orange);
  color: white;
  border: 2px solid var(--orange);
  transition: all 0.3s ease;
}
.btn-primary:hover {
  background: white;
  color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}
.btn-secondary {
  background: #e5e7eb;
  color: #374151;
}
.btn-secondary:hover {
  background: #d1d5db;
}

/* TABLE */
.table-wrap {
  overflow-x: auto;
}
.table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}
.table th,
.table td {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 119, 1, 0.1);
  text-align: center;
  vertical-align: middle;
  font-weight: 500;
}
.table thead th {
  background-color: var(--orange);
  color: white;
  font-weight: 600;
  border: none;
  padding: 1rem;
  text-align: center;
  white-space: nowrap;
}
.table th i,
.table th span {
  vertical-align: middle;
}

.table-striped tbody tr:nth-child(odd) {
  background-color: rgba(255, 119, 1, 0.05);
}

.table tbody tr:hover {
  background-color: rgba(255, 119, 1, 0.1);
}

.table {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.no-records {
  text-align: center;
  padding: 2.5rem;
  color: var(--muted);
  font-weight: 600;
  font-size: 1.07rem;
}

/* Responsive */
@media (max-width: 840px) {
  .filter-form {
    flex-direction: column;
    gap: 1.2rem;
    align-items: stretch;
  }
  .btn-group {
    justify-content: flex-start;
    margin-top: 0.5rem;
  }
  .hero {
    padding: 2rem 0;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .card {
    padding: 1.5rem;
    margin: 1.5rem 0;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 1.25rem;
    gap: 0.5rem;
  }
  .subtitle {
    font-size: 1.02rem;
  }
  .section-title {
    font-size: 1.11rem;
    gap: 0.45rem;
  }
  .card {
    padding: 0.95rem;
  }
}
</style>
