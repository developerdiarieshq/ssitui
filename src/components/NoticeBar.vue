<template>
  <div class="notice-bar">
    <div class="scrolling-text">
      <span>✨ Welcome to Sai Spurthi Institute of Technology ✨</span>
      <span>
        🔔 NEW: Click here to
        <a href="#">BTECH B- Category Seats Advertisement</a> 🔔
      </span>
      <span>
        📢 NEW: Click here to
        <a href="#">BTECH B- Category Seats Application Form</a> 📢
      </span>
    </div>
  </div>
</template>

<script setup>
// Later you can replace <span> content with props or API-driven messages.
</script>

<style scoped>
.notice-bar {
  background: #FF7701; /* brand orange */
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

.scrolling-text {
  display: inline-block;
  padding-left: 100%; /* start off screen */
  animation: scroll-left 30s linear infinite;
}

.scrolling-text span {
  margin-right: 50px; /* gap between messages */
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
