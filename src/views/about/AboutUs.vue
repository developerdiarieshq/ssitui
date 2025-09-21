<template>
  <div class="about-page">
    <Header/>
    <NavBar/>

    <section class="about-section py-5 bg-light">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-4">
        <h3 class="section-title">About SSIT</h3>
        <div class="underscore"></div>
      </div>

      <!-- Badges Row -->
      <div class="text-center mb-5">
        <span class="badge-custom bg-blue">Affiliated to JNTUH</span>
        <span class="badge-custom bg-green">Approved by AICTE</span>
        <span class="badge-custom bg-orange">Since 2001</span>
        <span class="badge-custom bg-purple">Autonomous 2025</span>
      </div>

      <!-- Content + Video -->
      <div class="row align-items-center">
        <!-- Left: Content -->
        <div class="col-md-6 mb-4 mb-md-0">
          <p class="text-muted text-justify">
            The <strong>Sai Spurthi Institute of Technology (SSIT)</strong> was established in 2001 by the 
            <strong>Vipassana Educational Trust, Hyderabad</strong>. SSIT is located in 
            <strong>Sathupalli, Khammam district, Telangana, India</strong>, beside the state highway 
            (Khammam – Rajamundry), at a distance of 7 km (4.3 mi) from Sathupalli towards Rajamundry.
          </p>
          <p class="text-muted text-justify">
            The college is affiliated to <strong>Jawaharlal Nehru Technological University, Hyderabad</strong> 
            and approved by <strong>AICTE, Delhi</strong>. 
            The Chairman of the college is <strong>Dr. B. Partha Sarathi Reddy</strong>, CMD of Hetero Drugs, 
            and the Secretary is <strong>Sri D. Prabhakar Reddy</strong>. 
          </p>
          <p class="text-muted text-justify">
            In <strong class="text-orange">2025</strong>, SSIT was conferred <strong>Autonomous Status</strong>,
            empowering the institute to design and implement its own curriculum tailored to industry needs.
          </p>
        </div>

        <!-- Right: YouTube Video -->
        <div class="col-md-6">
          <div class="ratio ratio-16x9 shadow-lg rounded">
            <iframe
              src="https://www.youtube.com/embed/bUbphgqBZ6A"
              title="Sai Spurthi Institute of Technology"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
 <!-- <Management/> -->
    <Strengths/>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
//import Management from './Management.vue';
import Strengths from './Strengths.vue';
import Footer from '../../components/Footer.vue';

</script>

<style scoped>
.section-title {
  font-weight: 700;
  color: #FF7701;
  position: relative;
  display: inline-block;
}

/* 🔹 Animated underscore */
.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 8px auto 0 auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}

/* 🔹 Badges */
.badge-custom {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  color: #fff;
  font-weight: 600;
  margin: 0 8px 10px 8px;
  font-size: 0.9rem;
}
.bg-blue { background: #4a6cf7; }
.bg-green { background: #28a745; }
.bg-orange { background: #FF7701; }
.bg-purple { background: #6f42c1; }

.text-justify {
  text-align: justify;
}
.text-orange {
  color: #FF7701;
}
</style>