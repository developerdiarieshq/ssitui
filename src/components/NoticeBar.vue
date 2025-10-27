<template>
  <div class="notice-bar">
    <div class="scrolling-text">
      <span><i class="fa-solid fa-hands-praying"></i> Welcome to Sai Spurthi Institute of Technology <i class="fa-solid fa-hands-praying"></i></span>
     
      <span>
        <i class="fa-solid fa-graduation-cap"></i> NEW: Click here to
        <router-link to="/btech-b-category-seats">BTECH B- Category Seats Advertisement & Application Form</router-link> <i class="fa-solid fa-bullhorn"></i>
      </span>
      <span>
        <i class="fa-solid fa-graduation-cap"></i> NEW: Click here to
        <router-link to="/mba-b-category-seats">MBA B- Category Seats Advertisement & Application Form</router-link> <i class="fa-solid fa-graduation-cap"></i>
      </span>
    </div>
  </div>
</template>

<script setup>
// Later you can replace <span> content with props or API-driven messages.
</script>

<style scoped>
.notice-bar {
  background: #111827; /* ink color */
  color: #fff;
  font-weight: 600;
  padding: 8px 0;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.notice-bar a {
  color: #fff;
  text-decoration: underline;
}

.notice-bar a:hover {
  text-decoration: none;
  color: #FFEB3B;
}

.scrolling-text {
  display: inline-block;
  padding-left: 100%; /* start off screen */
  animation: scroll-left 30s linear infinite;
}

.scrolling-text span {
  margin-right: 50px; /* gap between messages */
}

.scrolling-text span i {
  margin: 0 4px; /* spacing around icons */
}

/* Pause animation when hovered */
.notice-bar:hover .scrolling-text {
  animation-play-state: paused;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
