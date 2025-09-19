<template>
  <header>
    <!-- Top Utility Bar -->
    <div class="top-utility-bar py-1">
      <div class="container d-flex justify-content-end">
        <a href="#">NAAC</a>
        <a href="#">NIRF</a>
        <a href="#">IIQA</a>
        <a href="#">Gallery</a>
        <a href="#">Alumni</a>
        <router-link to="/contact" class="nav-link">Contact</router-link>
          <router-link to="/greivence" class="nav-link">Greivence</router-link>
        
      </div>
    </div>

    <!-- Top Header -->
    <div class="top-bar">
      <!-- Desktop Content -->
      <div class="container d-flex justify-content-between align-items-center flex-wrap d-none d-md-flex">
        <!-- Left: Logo + Info -->
        <div class="d-flex align-items-center">
          <img src="@/assets/college-logo.png" alt="College Logo" class="logo me-3" />
          <div>
            <div class="college-name">Sai Spurthi Institute of Technology</div>
            <div class="tagline">Autonomous | Estd: 2001</div>
            <div class="affiliation">Approved by AICTE, Affiliated to JNTU Hyderabad</div>
            <div class="affiliation">
              <i class="fas fa-envelope me-1"></i> principal@saispurthi.ac.in |
              <i class="fas fa-phone me-1"></i> 9032956083
            </div>
          </div>
        </div>

        <!-- Right: Accreditations -->
        <div class="text-end">
          <div class="accreditation-logos mb-2">
            <img src="@/assets/aicte.png" alt="AICTE" />
            <img src="@/assets/iic.png" alt="IIC" />
             <img src="@/assets/ugc.png" alt="UGC" />
            <img src="@/assets/nab.png" alt="NAAC" />
            <img src="@/assets/iso.png" alt="ISO" /> 
          </div>
          <div class="college-code">EAPCET CODE : SAIS</div>
        </div>
      </div>

      <!-- Mobile Content - Header Image -->
      <div class="container d-block d-md-none">
        <img src="@/assets/Header.png" alt="Sai Spurthi Institute of Technology" class="mobile-header-image" />
      </div>
    </div>
  </header>
</template>

<script setup>
// no script yet, static content for now
</script>

<style scoped>
/* 🔹 Top Utility Bar */
.top-utility-bar {
  background: #FF7701;
  font-size: 0.85rem;
}
.top-utility-bar a {
  color: #fff;
  text-decoration: none;
  margin-left: 15px;
}
.top-utility-bar a:hover {
  text-decoration: underline;
}

/* 🔹 Top Bar */
.top-bar {
  background: linear-gradient(90deg, #FFF8F0 0%, #FFE4CC 100%);
  border-bottom: 2px solid #FF6F00;
  padding: 12px 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.top-bar .college-name {
  font-size: 1.6rem;
  font-weight: 700;
  color: #FF7701;          /* Brand Orange */
  text-transform: uppercase;
}
.top-bar .tagline,
.top-bar .affiliation {
  font-size: 0.95rem;
  color: #333;
}
.top-bar .affiliation {
  font-size: 0.85rem;
  color: #444;
}

/* 🔹 Logo Styling */
.logo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  animation: logoFloat 3s ease-in-out infinite alternate;
}
.logo:hover {
  transform: scale(1.05);
  border-color: #FFEB3B;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
}
@keyframes logoFloat {
  from { transform: translateY(0px); }
  to   { transform: translateY(-5px); }
}

/* 🔹 Accreditation Logos */
.accreditation-logos img {
  height: 60px;
  margin-left: 7px;
  transition: transform 0.2s ease;
}
.accreditation-logos img:hover {
  transform: scale(1.1);
}

/* 🔹 College Code Badge */
.college-code {
  display: inline-block;
  background: #FF7701;
  color: #fff;
  font-weight: 700;
  padding: 6px 15px;
  border-radius: 4px;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  margin-top: 5px;
}

/* 🔹 Mobile Header Image */
.mobile-header-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

</style>

