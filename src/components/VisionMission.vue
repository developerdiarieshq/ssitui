<template>
  <section class="py-5 bg-white">
    <div class="container">
      <!-- Section Heading -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Foundation</h3>
        <div class="underscore"></div>
      </div>

      <!-- Cards -->
      <div class="row text-center">
        <!-- Vision -->
        <div class="col-md-4 mb-4">
          <div class="card-box shadow-sm p-4 h-100">
            <div class="icon-box mx-auto mb-3">
              <i class="fas fa-eye fa-2x text-white"></i>
            </div>
            <h5 class="fw-bold">Vision</h5>
            <p class="text-muted">
              To make the students achieve highest standards of quality technical
              education adaptable to suit the present day requirements in the
              fields of science and technology and to mould them morally into
              persons of character and integrity.
            </p>
          </div>
        </div>

        <!-- Mission -->
        <div class="col-md-4 mb-4">
          <div class="card-box shadow-sm p-4 h-100">
            <div class="icon-box mx-auto mb-3">
              <i class="fas fa-rocket fa-2x text-white"></i>
            </div>
            <h5 class="fw-bold">Mission</h5>
            <p class="text-muted">
              To awaken the students to the reality of identifying their hidden
              potentials and talents through meticulous and systematic grooming
              to gain the spirit and inventiveness to build a career full of
              glorious prospects and eventful future.
            </p>
          </div>
        </div>

        <!-- Quality Policy -->
        <div class="col-md-4 mb-4">
          <div class="card-box shadow-sm p-4 h-100">
            <div class="icon-box mx-auto mb-3">
              <i class="fas fa-check fa-2x text-white"></i>
            </div>
            <h5 class="fw-bold">Quality Policy</h5>
            <p class="text-muted">
              To provide an industry need education through high quality
              knowledge transfer with excellent skills at par with international
              standards to get good placements.
            </p>
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
  display: inline-block;
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
.card-box {
  background: #fff;
  border-radius: 12px;
  transition: all 0.3s ease;
}
.card-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Circular icons */
.icon-box {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #1a2238;     /* dark navy */
  border: 4px solid #FF7701;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
