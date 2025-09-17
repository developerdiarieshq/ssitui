<template>
  <div class="admissions-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Admissions</h1>
        <p class="subtitle">Your Pathway to Academic Excellence at SSIT</p>
      </div>
    </header>

    <!-- BODY -->
    <main class="container content">
      <!-- Admission Procedure -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-list-check"></i> Admission Procedure
        </h2>
        <p>
          A candidate should possess the eligibility of 10+2 qualification from
          Board of Intermediate, Government of Andhra Pradesh with Mathematics,
          Physics and Chemistry as his/her optional subjects, or any other
          equivalent examination recognized as equivalent thereto. A student to
          step in four-year degree course in Engineering except NRI quota must
          qualify in
          <strong>Engineering, Agricultural Sciences And Medical Common Entrance Test (EAMCET)</strong>,
          a State-Level Entrance Test conducted by the Govt. of Andhra Pradesh.
          Students who qualify in EAMCET entrance test will be admitted strictly
          on merit basis.
        </p>
        <p>
          The Convener of EAMCET admits on merit secured in Intermediate or an
          equivalent examination and the rank secured in the EAMCET. The
          Management admits candidates for the Management and NRI quota based on
          merit and should possess first class in optional subjects:
          Mathematics, Physics, and Chemistry.
        </p>
        <p>
          The Convener of ECET admits 10% of the candidates from the stream of
          Diploma Holders should pass in a diploma from Andhra Pradesh State
          Government or an equivalent examination.
        </p>
      </section>

      <!-- Fee Structure -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-coins"></i> Fee Structure
        </h2>
        <div class="table-wrap">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Programme</th>
                <th>Duration</th>
                <th>Counselling Fee</th>
                <th>NRI / Management Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(f, idx) in fees" :key="idx">
                <td>{{ f.program }}</td>
                <td>{{ f.duration }}</td>
                <td>{{ f.counselling }}</td>
                <td>{{ f.management }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Eligibility -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-user-check"></i> Eligibility
        </h2>
        <div class="table-wrap">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Programme</th>
                <th>For Seats Through Counselling</th>
                <th>Management Quota Seats</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(e, idx) in eligibility" :key="idx">
                <td>{{ e.program }}</td>
                <td v-html="e.counselling"></td>
                <td v-html="e.management"></td>
              </tr>
            </tbody>
          </table>
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

const fees = [
  {
    program: "Diploma",
    duration: "3 Years",
    counselling: "₹14,900 / Year",
    management: "₹14,900 / Year",
  },
  {
    program: "UG (B.Tech)",
    duration: "4 Years",
    counselling: "₹70,000 / Year",
    management: "₹70,000 / Year",
  },
  {
    program: "PG (MBA)",
    duration: "2 Years",
    counselling: "₹54,000 / Year",
    management: "₹54,000 / Year",
  },
];

const eligibility = [
  {
    program: "Under Graduation (B.Tech)",
    counselling:
      "* Qualifying at EAMCET<br>(Counseling Code : SAIS)",
    management:
      "** A pass in 10+2 in M.P.C. with at least 60% either in aggregate or in group subjects or qualifying at EAMCET.",
  },
  {
    program: "Post Graduation (MBA)",
    counselling:
      "* Qualifying at ICET<br>(Counseling Code : SAIS)",
    management:
      "** A pass in any Degree with at least 60% either in aggregate or qualifying at ICET.",
  },
  {
    program: "Diploma (Polytechnic)",
    counselling:
      "* Qualifying at CEEP<br>(Counseling Code : SAIS)",
    management:
      "** A pass in SSC with at least 60% either in aggregate or qualifying at CEEP.",
  },
];
</script>

<style scoped>
/* THEME */
:root {
  --navy: #1e40af;
  --orange: #f97316;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
}

.admissions-page {
  background: var(--bg);
  min-height: 100vh;
}
.container {
  width: min(1180px, 92%);
  margin: auto;
}

/* HERO */
.hero {
  background: linear-gradient(60deg, var(--navy), #153a9c);
  color: #fff;
  padding: 3rem 1rem;
}
.title {
  font-size: 2.2rem;
  font-weight: 800;
}
.subtitle {
  font-size: 1.1rem;
  color: #dbeafe;
  margin-top: 0.5rem;
}

/* CARD */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
p {
  color: #374151;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* TABLE */
.table-wrap {
  overflow-x: auto;
}
.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 0.85rem;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: top;
}
.table thead th {
  background: var(--orange);
  color: #fff;
  font-weight: 700;
}
.table-striped tbody tr:nth-child(odd) {
  background: #f9fafb;
}

/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
  .table th,
  .table td {
    font-size: 0.9rem;
  }
}
</style>
