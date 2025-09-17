<template>
    <Header/>
    <NavBar/>
  <section class="strengths-section py-5">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Strengths</h3>
        <div class="underscore"></div>
        <p class="text-muted">Pillars that define excellence at SSIT</p>
      </div>

      <!-- Intro Paragraph -->
      <div class="mb-5">
        <p class="text-muted text-justify">
          The college has inherent strength in providing excellent state-of-the-art infrastructure facilities in terms of 
          buildings, labs, and staff for all branches of engineering. The teaching staff is highly motivated, conduct classes 
          as per schedule, and complete the syllabus in time to enable students to prepare for examinations. 
          Communication skills are also imparted to students so that they can attend interviews confidently for placements.
        </p>
      </div>

      <!-- Strengths Grid -->
      <div class="row g-4">
        <div
          v-for="(item, i) in strengths"
          :key="i"
          class="col-md-6 col-lg-4"
        >
          <div class="strength-card h-100 p-4 shadow-sm">
            <div class="icon-box mb-3">
              <i :class="item.icon"></i>
            </div>
            <h5 class="fw-bold mb-3">{{ item.title }}</h5>
            <p class="text-muted">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
const strengths = [
  {
    title: "NAAC Accreditation",
    desc: "Only College in Telangana (Except Greater Hyderabad), Accredited by NAAC of UGC as ‘B’ Grade.",
    icon: "fas fa-award"
  },
  {
    title: "AICTE & JNTUH Affiliation",
    desc: "Approved by AICTE, New Delhi and affiliated to JNTU Hyderabad, Telangana.",
    icon: "fas fa-university"
  },
  {
    title: "ISO Certified",
    desc: "ISO 9001 - 2008 Certified Institution ensuring quality standards.",
    icon: "fas fa-certificate"
  },
  {
    title: "Faculty & Mentorship",
    desc: "Faculty-student ratio of 1:15 with a mentor allotted for every 20 students.",
    icon: "fas fa-chalkboard-teacher"
  },
  {
    title: "Communication & Soft Skills",
    desc: "Dedicated CSS department with professional trainers to enhance student skills.",
    icon: "fas fa-comments"
  },
  {
    title: "Laboratories & Research",
    desc: "33 academic laboratories and 3 research laboratories supporting innovation.",
    icon: "fas fa-flask"
  },
  {
    title: "Hi-Speed Internet",
    desc: "44 Mbps high-speed internet connectivity across campus and hostels.",
    icon: "fas fa-wifi"
  },
  {
    title: "Ragging Free Campus",
    desc: "Discipline with 100% ragging-free environment and holistic development.",
    icon: "fas fa-user-shield"
  },
  {
    title: "E-Learning Mode",
    desc: "Modern e-learning teaching practices integrated into the curriculum.",
    icon: "fas fa-laptop-code"
  },
  {
    title: "Well-being",
    desc: "Yoga and meditation classes to ensure physical and mental well-being.",
    icon: "fas fa-heart"
  },
  {
    title: "Sports & Games",
    desc: "International standard facilities for indoor & outdoor games with coaches.",
    icon: "fas fa-basketball-ball"
  },
  {
    title: "Campus Facilities",
    desc: "PCO/STD/ISD, Fax, Post Office, ATM (AXIS Bank), Guest House within campus.",
    icon: "fas fa-building"
  },
  {
    title: "Research Oriented Learning",
    desc: "Focus on problem-solving and research-based academic culture.",
    icon: "fas fa-search"
  },
  {
    title: "100% Placements",
    desc: "Consistently achieving 100% placements for eligible students in the last 4 years.",
    icon: "fas fa-briefcase"
  }
]
</script>

<style scoped>
.strengths-section {
  background: #f8f9fc;
}

.section-title {
  font-weight: 700;
  color: #FF7701;
}

.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 10px auto 20px;
  border-radius: 2px;
}

.strength-card {
  background: #fff;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}
.strength-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.icon-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 119, 1, 0.1);
  color: #FF7701;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto 1rem auto;
  transition: 0.3s ease;
}
.strength-card:hover .icon-box {
  background: #FF7701;
  color: #fff;
}
</style>
