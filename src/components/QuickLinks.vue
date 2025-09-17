<template>
  <section class="py-5 bg-white">
    <div class="container">
      <!-- Heading -->
      <div class="text-center mb-5">
        <h3 class="section-title">Quick Links</h3>
        <div class="underscore"></div>
      </div>

      <!-- Grid -->
      <div class="row g-4 text-center">
        <!-- Online Classes -->
        <div class="col-6 col-md-3">
          <div class="quick-card shadow-sm p-4 h-100">
            <i class="fas fa-laptop-code quick-icon mb-3"></i>
            <h6 class="fw-bold">Online Classes</h6>
          </div>
        </div>

        <!-- Exam Results -->
        <div class="col-6 col-md-3">
          <div class="quick-card shadow-sm p-4 h-100">
            <i class="fas fa-file-alt quick-icon mb-3"></i>
            <h6 class="fw-bold">Exam Results</h6>
          </div>
        </div>

        <!-- News -->
        <div class="col-6 col-md-3">
          <div class="quick-card shadow-sm p-4 h-100">
            <i class="fas fa-newspaper quick-icon mb-3"></i>
            <h6 class="fw-bold">News</h6>
          </div>
        </div>

        <!-- Webmail -->
        <div class="col-6 col-md-3">
          <div class="quick-card shadow-sm p-4 h-100">
            <i class="fas fa-envelope quick-icon mb-3"></i>
            <h6 class="fw-bold">Webmail</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static section – no script required
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
  margin: 8px auto 0 auto;
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}

/* Cards */
.quick-card {
  background: #fff;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.quick-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  background: #FFF8F0;
}

/* Icons */
.quick-icon {
  font-size: 2.5rem;
  color: #FF7701;
  transition: transform 0.3s ease, color 0.3s ease;
}
.quick-card:hover .quick-icon {
  transform: scale(1.2);
  color: #d95c00;
}
</style>
    