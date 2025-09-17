<template>
  <footer class="footer pt-5 pb-3">
    <div class="container">
      <div class="row g-4">
        <!-- Logo & About -->
        <div class="col-md-4">
          <div class="d-flex align-items-center mb-3">
            <img src="@/assets/college-logo.png" alt="College Logo" class="footer-logo me-2" />
            <h5 class="fw-bold text-white mb-0">Sai Spurthi Institute of Technology</h5>
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

        <!-- Contact -->
        <div class="col-md-3">
          <h6 class="fw-bold text-white mb-3">Contact Us</h6>
          <p class="text-muted small mb-1"><i class="fas fa-map-marker-alt me-2"></i> Sathupalli, Khammam, Telangana</p>
          <p class="text-muted small mb-1"><i class="fas fa-envelope me-2"></i> principal@saispurthi.ac.in</p>
          <p class="text-muted small"><i class="fas fa-phone me-2"></i> +91 9032956083</p>
        </div>

        <!-- Social -->
        <div class="col-md-3">
          <h6 class="fw-bold text-white mb-3">Follow Us</h6>
          <div class="d-flex gap-3">
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
      <div class="text-center text-muted small">
        © {{ new Date().getFullYear() }} Sai Spurthi Institute of Technology. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
// no script needed
</script>

<style scoped>
.footer {
  background: #1a2238;
  color: #fff;
}

.footer-logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
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
}
</style>
