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

      <!-- B-Category Seats -->
      <section class="card">
        <h2 class="section-title">
          <i class="fa-solid fa-graduation-cap"></i> B-Category Seats Application
        </h2>
        <p>
          Apply for B-Category seats in our various programs. Click on the program below to access 
          the application form and advertisement details.
        </p>
        <div class="b-category-grid">
          <div class="b-category-card">
            <div class="card-icon">
              <i class="fa-solid fa-laptop-code"></i>
            </div>
            <h3>B.Tech</h3>
            <p>Bachelor of Technology</p>
            <div class="card-details">
              <span class="duration">4 Years</span>
              <span class="fee">₹70,000/year</span>
            </div>
            <router-link to="/btech-b-category-seats" class="card-link">
              <i class="fa-solid fa-arrow-right"></i>
              Apply Now
            </router-link>
          </div>

          <div class="b-category-card">
            <div class="card-icon">
              <i class="fa-solid fa-briefcase"></i>
            </div>
            <h3>MBA</h3>
            <p>Master of Business Administration</p>
            <div class="card-details">
              <span class="duration">2 Years</span>
              <span class="fee">₹54,000/year</span>
            </div>
            <router-link to="/mba-b-category-seats" class="card-link">
              <i class="fa-solid fa-arrow-right"></i>
              Apply Now
            </router-link>
          </div>

          <div class="b-category-card">
            <div class="card-icon">
              <i class="fa-solid fa-cogs"></i>
            </div>
            <h3>Polytechnic</h3>
            <p>Diploma Programs</p>
            <div class="card-details">
              <span class="duration">3 Years</span>
              <span class="fee">₹14,900/year</span>
            </div>
            <router-link to="/polytechnic-b-category-seats" class="card-link">
              <i class="fa-solid fa-arrow-right"></i>
              Apply Now
            </router-link>
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
  --ink: #1a2238;
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
  background: var(--ink);
  color: #fff;
  padding: 3rem 1rem;
}

.hero .title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}

.hero .subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0.5rem;
  font-weight: 500;
}

/* CARD */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.15);
  border-color: rgba(249, 115, 22, 0.3);
}
.section-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.section-title i {
  color: var(--orange);
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

/* B-Category Cards */
.b-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.b-category-card {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.b-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(249, 115, 22, 0.15);
  border-color: var(--orange);
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--orange) 0%, #e55a00 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  font-size: 2rem;
}

.b-category-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.b-category-card p {
  color: var(--muted);
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.card-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background: rgba(249, 115, 22, 0.05);
  border-radius: 0.5rem;
}

.card-details span {
  font-weight: 600;
  color: var(--ink);
}

.duration {
  color: var(--orange);
}

.fee {
  color: var(--ink);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--orange);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
}

.card-link:hover {
  background: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
  color: white;
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
  
  .b-category-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .b-category-card {
    padding: 1.5rem;
  }
  
  .card-icon {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  .b-category-card h3 {
    font-size: 1.3rem;
  }
}
</style>
