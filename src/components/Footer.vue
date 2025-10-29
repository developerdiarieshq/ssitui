<template>
  <footer class="footer">
    <!-- Main Footer Content -->
    <div class="footer-content pt-5 pb-3">
      <div class="container">
      <div class="row g-4">
        <!-- Logo & About -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center mb-3">
            <img src="@/assets/college-logo.png" alt="SSIT College Logo" class="footer-logo me-3" />
            <div>
              <h5 class="fw-bold text-white mb-1">Sai Spurthi Institute of Technology</h5>
              <small class="text-light-muted">NAAC 'B+' Grade • AICTE Approved</small>
            </div>
          </div>
          <p class="text-light-muted mb-3">
            Empowering students with quality technical education, innovation, and industry-ready skills since 2001. 
            Affiliated to JNTUH and managed by VIPASSANA Educational Society.
          </p>
          
          <!-- Accreditations -->
          <div class="accreditation-badges">
            <div class="badge-item">
              <i class="fa-solid fa-award"></i>
              <span>NAAC 'B+'</span>
            </div>
            <div class="badge-item">
              <i class="fa-solid fa-certificate"></i>
              <span>AICTE</span>
            </div>
            <div class="badge-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>JNTUH</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6">
          <h6 class="footer-heading">Quick Links</h6>
          <ul class="list-unstyled footer-links">
            <li><router-link to="/"><i class="fa-solid fa-chevron-right me-2"></i>Home</router-link></li>
            <li><router-link to="/about-us"><i class="fa-solid fa-chevron-right me-2"></i>About Us</router-link></li>
            <li><router-link to="/admissions"><i class="fa-solid fa-chevron-right me-2"></i>Admissions</router-link></li>
            <li><router-link to="/placements"><i class="fa-solid fa-chevron-right me-2"></i>Placements</router-link></li>
            <li><router-link to="/contact"><i class="fa-solid fa-chevron-right me-2"></i>Contact</router-link></li>
          </ul>
        </div>

        <!-- Academics -->
        <div class="col-lg-2 col-md-6">
          <h6 class="footer-heading">Academics</h6>
          <ul class="list-unstyled footer-links">
            <li><router-link to="/cse"><i class="fa-solid fa-chevron-right me-2"></i>CSE</router-link></li>
            <li><router-link to="/cse-ai"><i class="fa-solid fa-chevron-right me-2"></i>CSE (AI)</router-link></li>
            <li><router-link to="/cse-ai-ds"><i class="fa-solid fa-chevron-right me-2"></i>CSE (AI & DS)</router-link></li>
            <li><router-link to="/ece"><i class="fa-solid fa-chevron-right me-2"></i>ECE</router-link></li>
            <li><router-link to="/eee"><i class="fa-solid fa-chevron-right me-2"></i>EEE</router-link></li>
            <li><router-link to="/mech"><i class="fa-solid fa-chevron-right me-2"></i>MECH</router-link></li>
            <li><router-link to="/mba"><i class="fa-solid fa-chevron-right me-2"></i>MBA</router-link></li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div class="col-lg-4 col-md-6">
          <h6 class="footer-heading">Contact Information</h6>
          <div class="contact-info">
            <div class="contact-item">
              <i class="fa-solid fa-location-dot"></i>
              <div>
                <strong>Address:</strong>
                <p>B. Gangaram (Post), Sathupalli (Mandal)<br>Khammam District, Telangana – 507303</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-envelope"></i>
              <div>
                <strong>Email:</strong>
                <p><a href="mailto:sssit.principal@gmail.com">sssit.principal@gmail.com</a></p>
              </div>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-phone"></i>
              <div>
                <strong>Phone:</strong>
                <p><a href="tel:+918761288278">08761-288278</a> / <a href="tel:+919032956083">9032956083</a></p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="social-section">
            <h6 class="footer-heading mt-4">Follow Us</h6>
            <div class="social-icons">
              <a href="#" class="social-icon" aria-label="Facebook" title="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon" aria-label="Twitter" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon" aria-label="Instagram" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-icon" aria-label="LinkedIn" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-icon" aria-label="YouTube" title="YouTube">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Links Bar -->
      <div class="important-links-bar">
        <div class="row g-2">
          <div class="col-md-auto">
            <router-link to="/mandatory-disclosure" class="important-link">
              <i class="fa-solid fa-file-lines me-2"></i>Mandatory Disclosure
            </router-link>
          </div>
          <div class="col-md-auto">
            <router-link to="/anti-ragging" class="important-link">
              <i class="fa-solid fa-shield-halved me-2"></i>Anti-Ragging
            </router-link>
          </div>
          <div class="col-md-auto">
            <router-link to="/grievance" class="important-link">
              <i class="fa-solid fa-comments me-2"></i>Grievance Redressal
            </router-link>
          </div>
          <div class="col-md-auto">
            <router-link to="/iqac" class="important-link">
              <i class="fa-solid fa-check-circle me-2"></i>IQAC
            </router-link>
          </div>
          <div class="col-md-auto">
            <router-link to="/policies" class="important-link">
              <i class="fa-solid fa-book me-2"></i>Policies
            </router-link>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="footer-divider" />

      <!-- Bottom Bar -->
      <div class="footer-bottom text-center">
        <p class="copyright-text mb-2">
          © {{ year }} Sai Spurthi Institute of Technology. All Rights Reserved.
        </p>
        <p class="made-love mb-2">
          <i class="fa-solid fa-heart"></i> Crafted with Excellence at SSIT
        </p>
        <small class="text-light-muted">
          Designed & Developed by CSE Department
        </small>
      </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <button 
      v-show="showTopButton" 
      class="scroll-top" 
      @click="scrollToTop" 
      aria-label="Scroll to top"
      title="Back to Top">
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
/* Footer Base Styles */
.footer {
  background: linear-gradient(180deg, #1a2238 0%, #0d1625 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
}

/* Footer Content */
.footer-content {
  position: relative;
}

.footer-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FF7701, transparent);
}

/* Logo & Branding */
.footer-logo {
  height: 60px;
  width: 60px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.05);
}

.text-light-muted {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Accreditation Badges */
.accreditation-badges {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 119, 1, 0.1);
  border: 1px solid rgba(255, 119, 1, 0.3);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  transition: all 0.3s ease;
}

.badge-item:hover {
  background: rgba(255, 119, 1, 0.2);
  transform: translateY(-2px);
}

.badge-item i {
  color: #FF7701;
  font-size: 1.1rem;
}

.badge-item span {
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Footer Headings */
.footer-heading {
  color: #FF7701;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: #FF7701;
}

/* Footer Links */
.footer-links {
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #FF7701;
  transform: translateX(5px);
}

.footer-links a i {
  font-size: 0.7rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.footer-links a:hover i {
  opacity: 1;
}

/* Contact Information */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.contact-item i {
  color: #FF7701;
  font-size: 1.2rem;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.contact-item strong {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem;
  display: block;
  margin-bottom: 0.25rem;
}

.contact-item p {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #FF7701;
}

/* Social Media */
.social-icons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 119, 1, 0.1);
  border: 1px solid rgba(255, 119, 1, 0.3);
  border-radius: 8px;
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icon:hover {
  background: #FF7701;
  border-color: #FF7701;
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(255, 119, 1, 0.4);
}

/* Important Links Bar */
.important-links-bar {
  margin-top: 2rem;
  padding: 1.25rem;
  background: rgba(255, 119, 1, 0.05);
  border: 1px solid rgba(255, 119, 1, 0.2);
  border-radius: 12px;
  text-align: center;
}

.important-links-bar .row {
  justify-content: center;
}

.important-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.98);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.important-link:hover {
  background: #FF7701;
  border-color: #FF7701;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}

.important-link i {
  opacity: 0.8;
}

.important-link:hover i {
  opacity: 1;
}

/* Footer Divider */
.footer-divider {
  border-color: rgba(255, 255, 255, 0.15);
  margin: 2rem 0 1.5rem;
}

/* Footer Bottom */
.footer-bottom {
  padding-top: 1rem;
  text-align: center;
}

.copyright-text {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0 0 0.5rem 0;
}

.made-love {
  color: #FF7701;
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 0 0.5rem 0;
}

.made-love i {
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
}

/* Scroll to Top Button */
.scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: linear-gradient(135deg, #FF7701 0%, #ff8c32 100%);
  color: #fff;
  border: none;
  border-radius: 12px;
  width: 50px;
  height: 50px;
  font-size: 1.3rem;
  display: grid;
  place-items: center;
  box-shadow: 0 6px 20px rgba(255, 119, 1, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}

.scroll-top:hover {
  background: linear-gradient(135deg, #ff8c32 0%, #FF7701 100%);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 119, 1, 0.5);
}

.scroll-top:active {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-logo {
    height: 50px;
    width: 50px;
  }

  .accreditation-badges {
    justify-content: center;
  }

  .footer-heading {
    text-align: center;
    margin-top: 2rem;
  }

  .footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .footer-links {
    text-align: center;
  }

  .footer-links a {
    justify-content: center;
  }

  .contact-info {
    text-align: center;
  }

  .contact-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .important-links-bar {
    text-align: center;
  }

  .important-link {
    margin: 0.25rem;
  }

  .scroll-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 576px) {
  .copyright-text,
  .made-love {
    font-size: 0.9rem;
  }
}
</style>
