<template>
  <section class="py-5 bg-light">
    <div class="container text-center">
      <!-- Section Title -->
      <h3 class="section-title">Our MoUs &amp; Industry Collaborations</h3>
      <div class="underscore"></div> <!-- 🔹 Added underline -->

      <div class="row g-4 mt-4">
        <!-- Loop through MoUs -->
        <div v-for="(mou, index) in mous" :key="index" class="col-md-3 col-6">
          <div class="p-3 border rounded bg-white shadow-sm h-100">
            <img
              :src="mou.logo"
              class="img-fluid mb-2"
              :alt="mou.title"
              style="max-height:60px;"
            />
            <h6 class="mt-2">{{ mou.title }}</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mous = [
  { logo: new URL('@/assets/microsoft.png', import.meta.url).href, title: 'Microsoft Windows' },
  { logo: new URL('@/assets/cisco.png', import.meta.url).href, title: 'CISCO Networking Academy' },
  { logo: new URL('@/assets/task.png', import.meta.url).href, title: 'TASK (Telangana Academy for Skill and Knowledge)' },
  { logo: new URL('@/assets/wipro.png', import.meta.url).href, title: 'Wipro' },
  { logo: new URL('@/assets/eswecha.png', import.meta.url).href, title: 'Eswecha' },
  { logo: new URL('@/assets/campus.png', import.meta.url).href, title: 'Campus Connect' },
  { logo: new URL('@/assets/oracle.png', import.meta.url).href, title: 'Oracle Academy' },
  { logo: new URL('@/assets/mission10x.png', import.meta.url).href, title: 'Mission 10X' }
]
</script>

<style scoped>
/* Image hover effect */
section img {
  transition: transform 0.3s ease;
}
section img:hover {
  transform: scale(1.1);
}

/* Section title */
.section-title {
  font-weight: 700;
  color: #FF7701;
  margin-bottom: 8px;
}

/* 🔹 Orange underline */
.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 0 auto 30px auto; /* center underline */
  border-radius: 2px;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scaleX(1); opacity: 1; }
  50% { transform: scaleX(0.5); opacity: 0.5; }
}
</style>
