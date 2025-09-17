<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Events &amp; Circulars</h3>
        <div class="underscore"></div>
      </div>

      <div class="row">
        <!-- Events -->
        <div class="col-md-6 mb-4">
          <h5 class="fw-bold text-orange mb-3">Upcoming Events</h5>
          <ul class="list-unstyled">
            <li
              v-for="(event, index) in events"
              :key="index"
              class="event-card d-flex mb-3 shadow-sm rounded overflow-hidden"
            >
              <!-- Date box -->
              <div class="date-box text-center">
                <div class="day">{{ event.day }}</div>
                <div class="month">{{ event.month }}</div>
              </div>

              <!-- Content -->
              <div class="flex-grow-1 p-3 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h6 class="fw-bold mb-2">{{ event.title }}</h6>
                  <small class="text-muted">{{ event.time }} | {{ event.venue }}</small>
                </div>
                <div class="mt-2">
                  <a v-if="event.brochure" :href="event.brochure" class="btn btn-dark btn-sm me-2">BROCHURE</a>
                  <a v-if="event.link" :href="event.link" class="btn btn-dark btn-sm">VIEW WEBSITE</a>
                </div>
              </div>
            </li>
          </ul>
          <!-- View All Events Button -->
          <div class="text-center">
            <a href="/events" class="btn btn-outline-orange">View All</a>
          </div>
        </div>

        <!-- Circulars -->
        <div class="col-md-6 mb-4">
          <h5 class="fw-bold text-orange mb-3">Latest Circulars</h5>
          <ul class="list-unstyled">
            <li
              v-for="(circular, index) in circulars"
              :key="index"
              class="circular-card d-flex mb-3 shadow-sm rounded overflow-hidden"
            >
              <!-- Date box -->
              <div class="date-box text-center">
                <div class="day">{{ circular.day }}</div>
                <div class="month">{{ circular.month }}</div>
              </div>

              <!-- Content -->
              <div class="flex-grow-1 p-3 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h6 class="fw-bold mb-2">{{ circular.title }}</h6>
                  <small class="text-muted">Published: {{ circular.date }}</small>
                </div>
                <div class="mt-2">
                  <a v-if="circular.link" :href="circular.link" class="btn btn-dark btn-sm">View</a>
                </div>
              </div>
            </li>
          </ul>
          <!-- View All Circulars Button -->
          <div class="text-center">
            <a href="/circulars" class="btn btn-outline-orange">View All</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const events = [
  { day: '15', month: 'FEB', title: 'National Science Day Celebration', time: '10:00 AM', venue: 'Auditorium', brochure: '#', link: '#' },
  { day: '28', month: 'FEB', title: 'Workshop on AI & ML', time: '2:00 PM', venue: 'Seminar Hall', brochure: '#', link: '#' },
  { day: '05', month: 'MAR', title: 'Annual Sports Meet', time: '9:00 AM', venue: 'College Grounds', brochure: '#', link: '#' }
]

const circulars = [
  { day: '10', month: 'FEB', title: 'Exam Schedule for B.Tech Semester II', date: '10 Feb 2025', link: '#' },
  { day: '08', month: 'FEB', title: 'Holiday Notice for Maha Shivaratri', date: '8 Feb 2025', link: '#' },
  { day: '05', month: 'FEB', title: 'Revised Academic Calendar 2025', date: '5 Feb 2025', link: '#' }
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

/* Date Box */
.date-box {
  min-width: 70px;
  background: #FF7701; /* red */
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 0;
}
.date-box .day {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1;
}
.date-box .month {
  font-size: 0.9rem;
  text-transform: uppercase;
}

/* Event card */
.event-card, .circular-card {
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.event-card:hover, .circular-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

/* Buttons */
.btn-outline-orange {
  border: 2px solid #FF7701;
  color: #FF7701;
  font-weight: 600;
  padding: 5px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
}
.btn-outline-orange:hover {
  background: #FF7701;
  color: #fff;
}

.btn-dark {
  font-weight: 600;
  font-size: 0.8rem;
  padding: 4px 12px;
}
</style>
