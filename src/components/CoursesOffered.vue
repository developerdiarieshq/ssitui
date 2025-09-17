<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Courses Offered</h3>
        <div class="underscore"></div>
      </div>

      <!-- Cards -->
      <div class="row g-4">
        <!-- Loop through course categories -->
        <div class="col-md-4" v-for="(program, index) in programs" :key="index">
          <div class="course-card h-100 d-flex flex-column">
            <!-- Header -->
            <div class="card-header text-center">
              <div class="icon-box mx-auto mb-2">
                <i :class="program.icon"></i>
              </div>
              <h5 class="fw-bold">{{ program.title }}</h5>
            </div>

            <!-- Body -->
            <div class="card-body flex-grow-1">
              <ul class="list-unstyled">
                <li
                  v-for="(course, i) in program.courses"
                  :key="i"
                  class="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom"
                >
                  <span>{{ course.name }}</span>
                  <span class="badge-pill">{{ course.intake }}</span>
                </li>
              </ul>
            </div>

            <!-- Footer -->
            <div class="card-footer text-center">
              Total Students: <strong>{{ totalIntake(program.courses) }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const programs = [
  {
    title: "Polytechnic Programs",
    icon: "fas fa-tools",
    courses: [
      { name: "Diploma in Computer Science (DCS)", intake: 60 },
      { name: "Diploma in Electronics & Computer Engineering (DECE)", intake: 30 },
      { name: "Diploma in Electrical & Electronics Engineering (DEEE)", intake: 30 },
    ],
  },
  {
    title: "Under Graduation Programs",
    icon: "fas fa-graduation-cap",
    courses: [
      { name: "Computer Science & Engineering (CSE)", intake: 120 },
      { name: "CSE (AI & ML)", intake: 60 },
      { name: "Artificial Intelligence & Data Science (AID)", intake: 60 },
      { name: "Electronics & Communication Engineering", intake: 60 },
      { name: "Electrical & Electronics Engineering", intake: 30 },
      { name: "Mechanical Engineering", intake: 30 },
    ],
  },
  {
    title: "Post Graduation Programs",
    icon: "fas fa-user-tie",
    courses: [{ name: "Master of Business Administration (MBA)", intake: 60 }],
  },
];

const totalIntake = (courses) => courses.reduce((sum, c) => sum + c.intake, 0);
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
  0%, 100% {
    transform: scaleX(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(0.5);
    opacity: 0.5;
  }
}

/* Card */
.course-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.course-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
}

/* Header */
.card-header {
  background: #1a2238;
  color: #fff;
  padding: 20px;
}
.icon-box {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: #FF7701;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 10px;
}

/* Body */
.card-body {
  padding: 20px;
}
.card-body li {
  font-size: 0.95rem;
}

/* Badge */
.badge-pill {
  background: #FF7701;
  color: #fff;
  border-radius: 20px;
  padding: 4px 12px;
  font-weight: 600;
}

/* Footer */
.card-footer {
  background: #fff3ee;
  color: #d35400;
  font-weight: 600;
  padding: 12px;
  font-size: 0.95rem;
  border-top: 1px solid #f1f1f1;
}
</style>
