<template>
  <div>
    <!-- Global Header & Navbar -->
    <Header />
    <NavBar />

    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay"></div>
      <div class="hero-content container text-center">
        <h1 class="display-4 fw-bold">Social Services</h1>
        <p class="lead">
          Empowering Communities — Serving Society through Sai Spurthi Students Seva Samithi (SSSSS)
        </p>
      </div>
    </section>

    <!-- About -->
    <section class="container py-5">
      <h2 class="section-title">About Our Social Services</h2>
      <p>
        Sai Spurthi Institute of Technology has always been actively involved in social activities
        under the banner of <strong>Sai Spurthi Students Seva Samithi (SSSSS)</strong>.
        The Trust works hard for the upliftment of rural and backward sections of society and
        feels delighted to serve the needy.
      </p>
    </section>

    <!-- Activities -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="section-title">Our Key Social Service Activities</h2>
        <div class="row g-4">
          <div v-for="a in activities" :key="a.title" class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm service-card">
              <div class="card-body text-center">
                <i :class="a.icon"></i>
                <h5 class="mt-3">{{ a.title }}</h5>
                <p class="text-muted">{{ a.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Contact -->
    <footer class="contact-section py-5">
      <div class="container text-center">
        <h2 class="section-title">Get Involved</h2>
        <p>Join us in making a difference through volunteering, donations, or partnerships.</p>
        <p>
          Email: <a href="mailto:socialservices@ssit.edu.in">socialservices@ssit.edu.in</a>
        </p>
        <p>Phone: +91-98765-43210</p>
      </div>
    </footer>

    <!-- Global Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import NavBar from "../../components/NavBar.vue";
import Footer from "../../components/Footer.vue";

export default {
  name: "SocialServices",
  components: { Header, NavBar, Footer },
  data() {
    return {
      activities: [
        {
          title: "Blood Donation & Eye Camps",
          desc: "Organizing regular blood donation drives and free eye checkups for the community.",
          icon: "fa-solid fa-hand-holding-medical fa-2x text-danger",
        },
        {
          title: "Health Checkups & Free Medicines",
          desc: "Conducting free health camps with medicines distributed to rural populations.",
          icon: "fa-solid fa-stethoscope fa-2x text-success",
        },
        {
          title: "Support to Needy & Orphans",
          desc: "Monthly ration and clothes donation to widows, orphans, and the underprivileged.",
          icon: "fa-solid fa-box-heart fa-2x text-warning",
        },
        {
          title: "Charity Contributions",
          desc: "Donations to charitable trusts supporting handicapped and needy people.",
          icon: "fa-solid fa-people-carry-box fa-2x text-primary",
        },
        {
          title: "Motivational Training",
          desc: "Workshops and skill development sessions for unemployed youth in rural areas.",
          icon: "fa-solid fa-chalkboard-user fa-2x text-info",
        },
      ],
    };
  },
};
</script>

<style scoped>
:root {
  --brand-blue: #0b3d91;
  --brand-orange: #ff6f00;
  --brand-light: #f7f9fc;
}

/* Hero */
.hero {
  position: relative;
  background: url("https://images.unsplash.com/photo-1509099836639-18ba1795216d") center/cover no-repeat;
  height: 50vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero .overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(11, 61, 145, 0.65);
}
.hero-content { position: relative; z-index: 1; }

/* Section Titles */
.section-title {
  color: var(--brand-blue);
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
}

/* Service Cards */
.service-card i { font-size: 2rem; color: var(--brand-orange); }

/* Contact */
.contact-section {
  background: var(--brand-blue);
  color: #fff;
}
.contact-section a { color: #fff; text-decoration: underline; }
</style>
