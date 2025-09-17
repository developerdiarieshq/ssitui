<template>
  <Header/>
  <NavBar/>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Grievance & Feedback</h3>
        <div class="underscore"></div>
        <p class="text-muted">Submit enquiries, feedback, and grievances through the respective forms below.</p>
      </div>

     <!-- Cards Grid -->
<div class="row g-4">
  <div v-for="(card, index) in cards" :key="index" class="col-md-3 col-sm-6">
    <div class="card h-100 shadow-sm border-0 text-center p-3 grievance-card">
      <div class="icon-box mx-auto mb-3">
        <i :class="card.icon"></i>
      </div>
      <h6 class="fw-bold mb-3">{{ card.title }}</h6>

      <!-- If modalId exists, open modal -->
      <button
        v-if="card.modalId"
        class="btn btn-orange w-100"
        data-bs-toggle="modal"
        :data-bs-target="card.modalId"
      >
        Open
      </button>

      <!-- Otherwise, route to page -->
      <router-link v-else :to="card.link" class="btn btn-orange w-100">
        Open
      </router-link>
    </div>
  </div>
</div>

      
    </div>
  </section>
  <EnquiryFormModal/>
  <Footer/>
</template>

<script setup>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import EnquiryFormModal from './EnquiryFormModal.vue';
const cards = [
  { title: 'Enquiry Form', icon: 'fas fa-question-circle', modalId: '#enquiryModal' },
  { title: 'Grievances Form', icon: 'fas fa-exclamation-triangle', modalId: '#grievanceModal' },
  { title: 'IC Committee', icon: 'fas fa-users', link: '/committee' },
  { title: 'AICTE Feedback', icon: 'fas fa-university', link: '/aicte-feedback' },
  { title: 'Teacher Feedback', icon: 'fas fa-chalkboard-teacher', link: '/teacher-feedback' },
  { title: 'Student Feedback', icon: 'fas fa-user-graduate', link: '/student-feedback' },
  { title: 'Employer Feedback', icon: 'fas fa-briefcase', link: '/employer-feedback' },
  { title: 'Alumni Feedback', icon: 'fas fa-user-friends', link: '/alumni-feedback' },
]

</script>

<style scoped>
.section-title {
  font-weight: 700;
  color: #FF7701;
}
.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 8px auto 30px auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}

.grievance-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.grievance-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}
.icon-box {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: #1a2238;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 3px solid #FF7701;
  transition: 0.3s;
}
.icon-box:hover {
  background: #FF7701;
  color: #fff;
}
.btn-orange {
  background: #FF7701;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.btn-orange:hover {
  background: #e65f00;
}
</style>
