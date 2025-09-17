<template>
  <div id="heroCarousel" class="carousel slide carousel-fade shadow-lg" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
      <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    </div>

    <!-- Slides -->
    <div class="carousel-inner rounded-3">
      <div class="carousel-item active">
        <img src="@/assets/campus1.png" class="d-block w-100 carousel-img" alt="Campus">
        <div class="carousel-caption d-none d-md-block">
          <!-- <h2 class="fw-bold">Sai Spurthi Institute of Technology</h2>
          <p>Empowering Students with Knowledge and Innovation</p> -->
        </div>
      </div>

      <div class="carousel-item">
        <img src="@/assets/campus2.jpg" class="d-block w-100 carousel-img" alt="Labs">
        <div class="carousel-caption d-none d-md-block">
          <!-- <h2 class="fw-bold">Modern Labs &amp; Infrastructure</h2>
          <p>State-of-the-art facilities for research and practical learning</p> -->
        </div>
      </div>

      <div class="carousel-item">
        <img src="@/assets/campus1.png" class="d-block w-100 carousel-img" alt="Graduation">
        <div class="carousel-caption d-none d-md-block">
          <!-- <h2 class="fw-bold">Bright Future Awaits</h2>
          <p>Join us and build a successful career path</p> -->
        </div>
      </div>
    </div>

    <!-- Controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script setup>
// Later you can make images dynamic with props or API.
</script>

<style scoped>
.carousel-img {
  height: 75vh;
  object-fit: cover;
  filter: brightness(80%); /* dark overlay for text visibility */
}

.carousel-caption {
  bottom: 20%;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
}

.carousel-caption h2 {
  font-size: 2.5rem;
  color: #fff;
  animation: fadeInDown 1s;
}

.carousel-caption p {
  font-size: 1.2rem;
  color: #f8f9fa;
  animation: fadeInUp 1s;
}

/* Simple animations */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
