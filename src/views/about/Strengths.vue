<template>
  <section class="strengths-section py-5">
    <div class="container">
      <!-- Section Title -->
      <div class="text-center mb-5">
        <h3 class="section-title">Our Strengths</h3>
        <div class="underscore"></div>
        <p class="text-muted">Key pillars that define excellence at SSIT</p>
      </div>

      <!-- Strengths Cards -->
      <div class="row g-4">
        <!-- Infrastructure & Faculty -->
        <div class="col-md-4">
          <div class="strength-card h-100 text-center p-4 shadow-sm">
            <div class="icon-box mb-3">
              <i class="fas fa-network-wired"></i>
            </div>
            <h5 class="fw-bold mb-3">Infrastructure & Faculty</h5>
            <p class="text-muted">
              Ultra Modern Labs with more than 430 Systems having multiple platforms like Linux, Windows and Ubuntu.
              24/7 Internet Facility with 300 MBPS through two different ISPs.
              Well Experienced and University Ratified Faculty.
            </p>
          </div>
        </div>

        <!-- Training & Placements -->
        <div class="col-md-4">
          <div class="strength-card h-100 text-center p-4 shadow-sm">
            <div class="icon-box mb-3">
              <i class="fas fa-briefcase"></i>
            </div>
            <h5 class="fw-bold mb-3">Training & Placements</h5>
            <p class="text-muted">
              Conducting Industry relevant Training Programmes and providing Placements in various MNCs
              through On-Campus/Off-Campus.
            </p>
          </div>
        </div>

        <!-- Research & Development -->
        <div class="col-md-4">
          <div class="strength-card h-100 text-center p-4 shadow-sm">
            <div class="icon-box mb-3">
              <i class="fas fa-flask"></i>
            </div>
            <h5 class="fw-bold mb-3">Research & Development</h5>
            <p class="text-muted">
              More than 50% Faculty Pursuing Ph.Ds from Reputed Universities and publishing their
              Research Papers in Various Good Impact Journals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// static content only
</script>

<style scoped>
.strengths-section {
  background: #f8f9fc;
}

.section-title {
  font-weight: 700;
  color: #FF7701;
}

.underscore {
  width: 60px;
  height: 4px;
  background: #FF7701;
  margin: 10px auto 20px;
  border-radius: 2px;
}

.strength-card {
  background: #fff;
  border-radius: 14px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.strength-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.icon-box {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 119, 1, 0.1);
  color: #FF7701;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto;
  transition: 0.3s ease;
}
.strength-card:hover .icon-box {
  background: #FF7701;
  color: #fff;
}
</style>
