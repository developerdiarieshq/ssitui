<template>
  <footer class="footer pt-5 pb-3">
    <div class="container">
      <div class="row g-4">
        <!-- Logo & About -->
        <div class="col-md-4">
          <div class="d-flex align-items-center mb-3">
            <img src="@/assets/college-logo.png" alt="College Logo" class="footer-logo me-2" />
            <div>
              <h5 class="fw-bold text-white mb-0">Sai Spurthi Institute of Technology</h5>
              <small class="text-muted">Sathupalli, Khammam, Telangana</small>
            </div>
          </div>
          <p class="text-muted small">
            Striving for excellence in education and innovation, empowering students with knowledge and skills.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="col-md-2">
          <h6 class="fw-bold text-white mb-3">Quick Links</h6>
          <ul class="list-unstyled footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/departments">Departments</router-link></li>
            <li><router-link to="/admissions">Admissions</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>

        <!-- Useful Links -->
        <div class="col-md-3">
          <h6 class="fw-bold text-white mb-3">Useful Links</h6>
          <ul class="list-unstyled footer-links">
            <li><a href="#">Placements</a></li>
            <li><a href="#">Examinations</a></li>
            <li><a href="#">Alumni</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Student Corner</a></li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div class="col-md-3">
          <h6 class="fw-bold text-white mb-3">Contact Us</h6>
          <p class="text-muted small mb-1"><i class="fas fa-map-marker-alt me-2"></i> Sathupalli, Khammam, Telangana</p>
          <p class="text-muted small mb-1"><i class="fas fa-envelope me-2"></i> principal@saispurthi.ac.in</p>
          <p class="text-muted small"><i class="fas fa-phone me-2"></i> +91 9032956083</p>

          <div class="d-flex gap-3 mt-3">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-secondary my-4" />

      <!-- Bottom -->
      <div class="text-center small">
        <span class="copyright-text">© {{ year }} Sai Spurthi Institute of Technology. All Rights Reserved.</span>
        <br />
        <span class="made-love">Made with ❤️ & knowledge at SSIT</span>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button 
      v-show="showTopButton" 
      class="scroll-top" 
      @click="scrollToTop" 
      aria-label="Scroll to top">
      <i class="fas fa-chevron-up"></i>
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const year = new Date().getFullYear()
const showTopButton = ref(false)

const handleScroll = () => {
  showTopButton.value = window.scrollY > 200 // show after scrolling 200px
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onUnmounted(() => window.removeEventListener("scroll", handleScroll))
</script>

<style scoped>
.footer {
  background: #1a2238;
  color: #fff;
  position: relative;
}

.footer-logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.footer-links li {
  margin-bottom: 8px;
}
.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-links a:hover {
  color: #FF7701;
}

.social-icon {
  color: #fff;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}
.social-icon:hover {
  color: #FF7701;
  transform: translateY(-3px);
}

.copyright-text {
  color: #FF7701;
  font-weight: 600;
}

.made-love {
  color: #FF7701;
  font-weight: 600;
  display: inline-block;
  margin-top: 4px;
}

/* Scroll to Top Button */
.scroll-top {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: #f97316;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 1.2rem;
  display: grid;
  place-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}
.scroll-top:hover {
  background: #ff8c32;
  transform: translateY(-3px);
}
</style>
