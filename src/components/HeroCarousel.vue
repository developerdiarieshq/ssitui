<template>
  <div id="heroCarousel" class="carousel slide carousel-fade shadow-lg" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
      <button 
        v-for="(slide, index) in carouselData" 
        :key="index"
        type="button" 
        :data-bs-target="`#heroCarousel`" 
        :data-bs-slide-to="index" 
        :class="{ active: index === 0 }"
        :aria-label="`Slide ${index + 1}`"
      ></button>
    </div>

    <!-- Slides -->
    <div class="carousel-inner rounded-3">
      <div 
        v-for="(slide, index) in carouselData" 
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img 
          :src="slide.image" 
          class="d-block w-100 carousel-img" 
          :alt="slide.alt"
          :title="slide.title"
        >
        <!-- <div class="carousel-caption d-none d-md-block" v-if="slide.caption">
          <h2 class="fw-bold">{{ slide.caption.title }}</h2>
          <p>{{ slide.caption.description }}</p>
        </div> -->
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
import { ref } from 'vue'

// Carousel data object
const carouselData = ref([
{
    image: new URL('@/assets/image.png', import.meta.url).href,
    // alt: 'College Events',
    // title: 'College Events'
  },
  {
    image: new URL('@/assets/campus2.jpg', import.meta.url).href,
    // alt: 'Modern Labs and Infrastructure',
    // title: 'Laboratory Facilities'
  },
  {
    image: new URL('@/assets/6.jpg', import.meta.url).href,
    // alt: 'Campus View',
    // title: 'Campus Overview'
  },
  {
    image: new URL('@/assets/8.jpg', import.meta.url).href,
    // alt: 'College Events',
    // title: 'College Events'
  }
])

// Optional: Add methods for dynamic carousel management
const addSlide = (slideData) => {
  carouselData.value.push(slideData)
}

const removeSlide = (index) => {
  if (carouselData.value.length > 1) {
    carouselData.value.splice(index, 1)
  }
}

const updateSlide = (index, slideData) => {
  if (index >= 0 && index < carouselData.value.length) {
    carouselData.value[index] = slideData
  }
}

// Expose methods for parent components if needed
defineExpose({
  addSlide,
  removeSlide,
  updateSlide,
  carouselData
})
</script>

<style scoped>
/* Carousel Container */
#heroCarousel {
  height: 85vh;
  overflow: hidden;
}

.carousel-inner {
  height: 100%;
}

.carousel-item {
  height: 100%;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(90%);
  min-height: 100%;
}

/* Custom Indicators - Circles */
.carousel-indicators {
  margin-bottom: 1rem;
}

.carousel-indicators [data-bs-target] {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  margin: 0 6px;
  transition: all 0.3s ease;
}

.carousel-indicators [data-bs-target]:hover {
  background-color: rgba(255, 119, 1, 0.7);
  border-color: #FF7701;
}

.carousel-indicators [data-bs-target].active {
  background-color: #FF7701;
  border-color: #FF7701;
  transform: scale(1.2);
}

/* Caption Styling */
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

/* Control Buttons */
.carousel-control-prev,
.carousel-control-next {
  width: 5%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(255, 119, 1, 0.8);
  border-radius: 50%;
  width: 50px;
  height: 50px;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: #FF7701;
}

/* Responsive Design */
@media (max-width: 768px) {
  #heroCarousel {
    height: 70vh;
  }
  
  .carousel-caption h2 {
    font-size: 1.8rem;
  }
  
  .carousel-caption p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  #heroCarousel {
    height: 60vh;
  }
  
  .carousel-caption h2 {
    font-size: 1.5rem;
  }
  
  .carousel-caption p {
    font-size: 0.9rem;
  }
}

/* Animations */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
