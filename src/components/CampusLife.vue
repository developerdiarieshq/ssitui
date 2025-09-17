<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Campus Life</h3>
        <div class="underscore"></div>
        <p class="text-muted">
          Experience vibrant campus life with modern facilities, diverse activities, and a supportive community
          that fosters personal and academic growth.
        </p>
      </div>

      <!-- Campus Life Image Cards -->
      <div class="row g-4 mb-5">
        <div v-for="(item, index) in campusItems" :key="index" class="col-md-4 col-sm-6">
          <div class="card h-100 shadow-sm campus-card border-0">
            <img :src="item.img" class="card-img-top" :alt="item.title" />
            <div class="card-body text-center">
              <h6 class="fw-bold text-orange">{{ item.title }}</h6>
            </div>
          </div>
        </div>
      </div>

      <!-- Campus Info Cards -->
      <div class="row g-4 mb-4">
        <div v-for="(info, index) in campusInfo" :key="index" class="col-md-4">
          <div class="card shadow-sm h-100 text-center p-4 info-card">
            <h5 class="fw-bold mb-3">{{ info.title }}</h5>
            <p class="text-muted">{{ info.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-4">
        <button class="btn btn-orange">Take Virtual Campus Tour</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const campusItems = [
  { title: "Students in Laboratory", img: new URL('@/assets/campuslife/engineering-students-lab.png', import.meta.url).href },
  { title: "Sports Activities", img: new URL('@/assets/campuslife/college-campus-sports-activities.jpg', import.meta.url).href },
  { title: "Hostel Facilities", img: new URL('@/assets/campuslife/modern-college-hostel-rooms.jpg', import.meta.url).href },
  { title: "Library Study", img: new URL('@/assets/campuslife/students-in-college-library-studying.jpg', import.meta.url).href },
  { title: "Cultural Events", img: new URL('@/assets/campuslife/college-cultural-fest-and-events.jpg', import.meta.url).href },
  { title: "Auditorium", img: new URL('@/assets/campuslife/engineering-college-auditorium.jpg', import.meta.url).href }
]

const campusInfo = [
  {
    title: "Hostel Facilities",
    desc: "Modern hostel accommodation with Wi-Fi, mess facilities, recreation rooms, and 24/7 security for a comfortable stay."
  },
  {
    title: "Sports & Recreation",
    desc: "Comprehensive sports facilities including cricket, football, basketball, volleyball, and indoor games for physical fitness."
  },
  {
    title: "Cultural Activities",
    desc: "Regular cultural events, technical festivals, workshops, and seminars that enhance creativity and leadership skills."
  }
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
.text-orange {
  color: #FF7701;
}
.campus-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}
.campus-card img {
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.campus-card:hover img {
  transform: scale(1.05);
}
.campus-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}
.info-card {
  border-radius: 12px;
}
.btn-orange {
  background: #FF7701;
  color: #fff;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px 20px;
}
.btn-orange:hover {
  background: #e65f00;
}
</style>
