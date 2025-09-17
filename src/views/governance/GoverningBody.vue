<template>
  <div>
    <Header />
    <NavBar />

    <main class="gb-page">
      <!-- Hero -->
      <header class="hero text-center">
        <div class="container">
          <h1 class="display-5 fw-bold text-white">Governing Body</h1>
          <p class="lead text-white-50">
            Leadership committed to academic excellence, governance, and student welfare
          </p>
          <p class="tagline">VIPASSANA Educational Society • Sai Spurthi Institute of Technology</p>
        </div>
      </header>

      <!-- Sidebar + Content -->
      <div class="container py-5 d-flex flex-lg-row flex-column gap-4">
        <!-- Sidebar -->
        <aside class="sidebar">
          <h3 class="h5">Quick Links</h3>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#members"><i class="fa-solid fa-users"></i> Governing Body Members</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#minutes"><i class="fa-solid fa-file-alt"></i> Governing Body Minutes</a>
            </li>
          </ul>
        </aside>

        <!-- Main Content -->
        <section class="flex-grow-1">
          <!-- Members -->
          <div id="members" class="mb-5">
            <h2 class="section-title">Governing Body Members</h2>
            <p class="mb-3 text-muted">
              The Governing Body provides strategic direction, academic oversight, and ensures the institute’s compliance
              with AICTE and JNTUH guidelines.
            </p>
            <div class="table-responsive">
              <table class="table modern-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Member Name</th>
                    <th>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(m, i) in members" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ m.name }}</td>
                    <td>{{ m.role }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Minutes -->
          <div id="minutes">
            <h2 class="section-title">Governing Body Minutes</h2>
            <p class="mb-3 text-muted">Minutes of past meetings are available for public access.</p>
            <div class="table-responsive">
              <table class="table modern-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Meeting Date</th>
                    <th>Document</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(d, i) in minutes" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ d.date }}</td>
                    <td>
                      <a :href="d.link" target="_blank" class="btn btn-sm btn-outline-primary">
                        <i class="fa-regular fa-file-pdf"></i> View
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "GoverningBody",
  components: { Header, NavBar, Footer },
  data() {
    return {
      members: [
        { name: "Dr. B. Pardha Saradhi Reddy", role: "Chairman" },
        { name: "Sri. D. Prabhakar Reddy", role: "Secretary & Correspondent" },
        { name: "Sri. B. Vamsi Krishna Reddy", role: "Member" },
        { name: "Dr. K. Ratnakar Reddy", role: "Member" },
        { name: "Smt. B. Anvida", role: "Member" },
        { name: "Smt. B. Kalavathi", role: "Member" },
        { name: "Dr. M. Venu Gopala Rao", role: "Member" },
        { name: "Dr. V. Venkateswara Reddy", role: "JNTUH Nominee" },
        { name: "Sri. M. Raj Kumar", role: "SBTET Nominee" },
        { name: "Sri. K.V. Jawahar", role: "Member" },
        { name: "Dr. V.S.R. Kumari", role: "Member Secretary" },
      ],
      minutes: [
        { date: "09-10-2020", link: "#" },
        { date: "09-08-2016", link: "#" },
        { date: "08-10-2017", link: "#" },
        { date: "08-09-2018", link: "#" },
        { date: "02-04-2016", link: "#" },
        { date: "01-12-2021", link: "#" },
        { date: "01-12-2020", link: "#" },
        { date: "01-10-2019", link: "#" },
      ],
    };
  },
};
</script>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(60deg, #1e40af, #0b3d91);
  padding: 3rem 1rem;
}
.hero .display-5 { font-weight: 700; }
.hero .tagline { font-size: 0.9rem; margin-top: 0.5rem; color: #facc15; }

/* Sidebar */
.sidebar {
  flex: 0 0 220px;
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
}
.sidebar .nav-link {
  color: #1e40af;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
.sidebar .nav-link:hover {
  color: #ff6f00;
}

/* Section Titles */
.section-title {
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1rem;
}

/* Modern Tables */
.modern-table {
  border-collapse: separate;
  border-spacing: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}
.modern-table thead {
  background: #ff6f00;
  color: #fff;
}
.modern-table th,
.modern-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}
.modern-table tbody tr:hover {
  background: #f3f4f6;
}
</style>
