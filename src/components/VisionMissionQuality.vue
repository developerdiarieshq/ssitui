<template>
  <section class="py-5 bg-light">
    <div class="container">
      <!-- Section Heading -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Foundation</h3>
        <div class="underscore"></div>
      </div>

      <!-- Cards -->
      <div class="row g-4">
        <!-- Vision -->
        <div class="col-md-4">
          <div class="foundation-card h-100 d-flex flex-column">
            <!-- Header -->
            <div class="card-header text-center">
              <div class="icon-box mx-auto mb-2">
                <i class="fas fa-eye"></i>
              </div>
              <h5 class="fw-bold">Vision</h5>
            </div>

            <!-- Body -->
            <div class="card-body flex-grow-1">
              <p class="text-muted">
                To make the students achieve highest standards of quality technical
                education adaptable to suit the present day requirements in the
                fields of science and technology and to mould them morally into
                persons of character and integrity.
              </p>
            </div>

            <!-- Footer -->
            <div class="card-footer text-center">
              <i class="fas fa-lightbulb me-2"></i>
              <span>Our Vision</span>
            </div>
          </div>
        </div>

        <!-- Mission -->
        <div class="col-md-4">
          <div class="foundation-card h-100 d-flex flex-column">
            <!-- Header -->
            <div class="card-header text-center">
              <div class="icon-box mx-auto mb-2">
                <i class="fas fa-rocket"></i>
              </div>
              <h5 class="fw-bold">Mission</h5>
            </div>

            <!-- Body -->
            <div class="card-body flex-grow-1">
              <p class="text-muted">
                To awaken the students to the reality of identifying their hidden
                potentials and talents through meticulous and systematic grooming
                to gain the spirit and inventiveness to build a career full of
                glorious prospects and eventful future.
              </p>
            </div>

            <!-- Footer -->
            <div class="card-footer text-center">
              <i class="fas fa-target me-2"></i>
              <span>Our Mission</span>
            </div>
          </div>
        </div>

        <!-- Quality Policy -->
        <div class="col-md-4">
          <div class="foundation-card h-100 d-flex flex-column">
            <!-- Header -->
            <div class="card-header text-center">
              <div class="icon-box mx-auto mb-2">
                <i class="fas fa-award"></i>
              </div>
              <h5 class="fw-bold">Quality Policy</h5>
            </div>

            <!-- Body -->
            <div class="card-body flex-grow-1">
              <p class="text-muted">
                To provide an industry need education through high quality
                knowledge transfer with excellent skills at par with international
                standards to get good placements.
              </p>
            </div>

            <!-- Footer -->
            <div class="card-footer text-center">
              <i class="fas fa-star me-2"></i>
              <span>Our Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// static for now
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
.foundation-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.foundation-card:hover {
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
