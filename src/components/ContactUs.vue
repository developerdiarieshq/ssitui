<template>
    <Header/>
    <NavBar/>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Contact Us</h3>
        <div class="underscore"></div>
      </div>

      <!-- Contact Info + Form -->
      <div class="row g-4 mb-4">
        <!-- Address -->
        <div class="col-md-6">
          <div class="contact-card shadow-sm p-4 h-100">
            <h5 class="fw-bold mb-3">Our Address</h5>
            <p>Sai Spurthi Institute of Technology</p>
            <p>Sathupalli, Khammam District</p>
            <p>Telangana, India – 507303</p>

            <h5 class="fw-bold mt-4 mb-2">Email</h5>
            <p>
              <i class="fas fa-envelope me-2 text-orange"></i>
              principal@saispurthi.ac.in
            </p>

            <h5 class="fw-bold mt-4 mb-2">Phone</h5>
            <p>
              <i class="fas fa-phone me-2 text-orange"></i>
              <a href="tel:+919032956083" class="phone-link">+91 9032956083</a>
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="col-md-6">
          <div class="contact-card shadow-sm p-4 h-100">
            <h5 class="fw-bold mb-3">Send us a Message</h5>
            <form @submit.prevent="submitForm">
              <div class="mb-3">
                <input
                  type="text"
                  v-model="form.name"
                  class="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  v-model="form.email"
                  class="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="mb-3">
                <textarea
                  v-model="form.message"
                  class="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-orange w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Google Map -->
      <div class="map-container shadow-sm rounded">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.4475006212397!2d80.89761391423865!3d17.197067012794104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36840a244401e1%3A0x894ee441b464d070!2sSai%20Spurthi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1673943067418!5m2!1sen!2sin"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
  <Footer/>
</template>

<script setup>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form);
  alert("Thank you! Your message has been sent.");
};
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
  0%, 100% {
    transform: scaleX(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(0.5);
    opacity: 0.5;
  }
}

.text-orange {
  color: #FF7701;
}

.contact-card {
  background: #fff;
  border-radius: 12px;
  height: 100%;
}

.map-container {
  overflow: hidden;
  border-radius: 12px;
  margin-top: 20px;
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

.phone-link {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.phone-link:hover {
  color: #FF7701;
  text-decoration: none;
}
</style>
