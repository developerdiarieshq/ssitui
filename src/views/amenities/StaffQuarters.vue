<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Staff Quarters Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Faculty Housing</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Staff Quarters</h1>
            <p class="lead mb-3">Comfortable Residential Facilities for Faculty & Staff</p>
            <p class="mb-0 text-white-50">
              Modern residential accommodations designed to provide comfortable living spaces 
              for faculty members and staff, ensuring convenience and proximity to campus.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Staff Quarters - Modern residential facility"
              src="@/assets/campuslife/modern-college-hostel-rooms.jpg"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- STATS -->
    <section class="py-4">
      <div class="container">
        <div class="row g-3">
          <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
            <div class="stat-card text-center">
              <i :class="stat.icon"></i>
              <div class="stat-number">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <main class="content">
      <div class="container">
        <!-- About Staff Quarters -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">About Staff Quarters</h2>
          <p class="section-subtitle">Better Administrative Control • Three Blocks • Complete Amenities</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                For a better <strong>administrative control</strong>, Sai Spurthi provides quarters for the employees of Sai Spurthi. 
                The Management provides sufficient number of staff quarters named <strong>A(Krishna), B(Godhavari) & C(Kinnerasani) Blocks</strong>.
              </p>
              <p>
                Every Block has <strong>'12' staff quarters</strong>. Each and every staff quarter is of a <strong>two bed room flat</strong> 
                with all provisions like <strong>'24' hours supply of electricity & purified water</strong>.
              </p>
              <p class="mb-0">
                The quarters can accommodate <strong>'41' families</strong>. There is transport facility for school going children. 
                About <strong>'30' children</strong> are getting the benefit of this facility.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Quick Facts</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-building text-primary me-2"></i>
                  <strong>3 Blocks</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-home text-success me-2"></i>
                  <strong>36 Quarters Total</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-users text-warning me-2"></i>
                  <strong>41 Families</strong>
                </div>
                <div>
                  <i class="fa-solid fa-bus text-info me-2"></i>
                  <strong>30 Children Transport</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Staff Quarters Blocks -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Staff Quarters Blocks</h2>
          <p class="section-subtitle">Three Blocks • Designated for Different Staff Categories • 12 Quarters Each</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-user-tie fa-2x text-primary mb-3"></i>
                <h5 class="h6">A-Block - Krishna</h5>
                <p class="small mb-0">This Block will accommodate principal, head of the department & professors</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-chalkboard-teacher fa-2x text-success mb-3"></i>
                <h5 class="h6">B-Block - Godhavari</h5>
                <p class="small mb-0">This block will accommodate for associative & assistant professors</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-users fa-2x text-warning mb-3"></i>
                <h5 class="h6">C-Block - Kinnerasani</h5>
                <p class="small mb-0">This Block will accommodate for non-teaching staff</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Facilities & Amenities -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Facilities & Amenities</h2>
          <p class="section-subtitle">Complete Infrastructure • Essential Services • Family Support</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Block Facilities</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-wifi text-primary me-2"></i>
                  <strong>Internet Connection:</strong> Every Block has been equipped with internet
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-phone text-success me-2"></i>
                  <strong>Telephone:</strong> Telephone connection in every block
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-tv text-warning me-2"></i>
                  <strong>Cable TV:</strong> Cable TV connection available
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-shield-halved text-info me-2"></i>
                  <strong>24 Hours Security:</strong> Security arrangement in every block
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Additional Amenities</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-bus text-primary me-2"></i>
                  <strong>Transport Facility:</strong> For school going children (30 children benefit)
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-table-tennis-paddle-ball text-success me-2"></i>
                  <strong>Playgrounds:</strong> Shuttle cock court, volley ball, cricket grounds
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-utensils text-warning me-2"></i>
                  <strong>Canteens:</strong> Two canteens - one for gents & one for ladies
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-droplet text-info me-2"></i>
                  <strong>Purified Water:</strong> 24 hours supply of purified water
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Quarter Specifications -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Quarter Specifications</h2>
          <p class="section-subtitle">Two Bedroom Flats • Complete Provisions • Modern Living</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-bed fa-2x text-primary mb-3"></i>
                <h5 class="h6">Two Bedroom Flat</h5>
                <p class="small mb-0">Each staff quarter is of a two bed room flat with all provisions</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-bolt fa-2x text-success mb-3"></i>
                <h5 class="h6">24 Hours Electricity</h5>
                <p class="small mb-0">Continuous power supply with all necessary provisions</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-droplet fa-2x text-warning mb-3"></i>
                <h5 class="h6">Purified Water</h5>
                <p class="small mb-0">24 hours supply of purified water for all quarters</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Staff Quarters Gallery -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Staff Quarters Gallery</h2>
          <p class="section-subtitle">Capturing moments of comfortable living and modern residential facilities</p>
          
          <div class="row g-3 mt-3">
            <div v-for="(image, index) in quartersImages" :key="index" class="col-md-4 col-lg-3">
              <div class="gallery-item" @click="openImageModal(index)">
                <img :src="image.src" :alt="image.title" class="img-fluid rounded shadow-sm" />
                <div class="gallery-overlay">
                  <i class="fa-solid fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Image Previewer -->
        <ImagePreviewer 
          :show="showImageModal" 
          :images="quartersImages"
          :initial-index="currentImageIndex"
          title="Staff Quarters Gallery"
          title-icon="fa-solid fa-home"
          title-icon-color="var(--orange)"
          @close="closeImageModal"
        />

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Staff Quarters</h2>
            <p class="section-subtitle">We're here to help with your accommodation needs</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> staffquarters@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Office Hours:</strong> 9:00 AM - 5:00 PM
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Days:</strong> Monday - Saturday
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-user-tie text-success me-2"></i>
                  <strong>Contact:</strong> Estate Manager
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ImagePreviewer from '../utils/ImagePreviewer.vue'

export default {
  name: 'StaffQuarters',
  components: {
    Header,
    NavBar,
    Footer,
    ImagePreviewer
  },
  data() {
    return {
      stats: [
        { value: "36", label: "Staff Quarters", icon: "fa-solid fa-home fa-lg text-primary" },
        { value: "41", label: "Families", icon: "fa-solid fa-users fa-lg text-success" },
        { value: "30", label: "Children Transport", icon: "fa-solid fa-bus fa-lg text-warning" },
        { value: "24/7", label: "Security", icon: "fa-solid fa-shield-halved fa-lg text-info" },
      ],
      quartersImages: [
        { 
          src: new URL('@/assets/images/quarters/a_quarters.jpg', import.meta.url).href,
          title: 'A-Block Quarters',
          desc: 'A-Block (Krishna) - Principal, HOD & Professors quarters'
        },
        { 
          src: new URL('@/assets/images/quarters/a_quarters1.jpg', import.meta.url).href,
          title: 'A-Block Quarters Interior',
          desc: 'Modern two-bedroom flat in A-Block quarters'
        },
        { 
          src: new URL('@/assets/images/quarters/a_quarters2.jpg', import.meta.url).href,
          title: 'A-Block Quarters Facility',
          desc: 'A-Block quarters with complete amenities'
        },
        { 
          src: new URL('@/assets/images/quarters/a_quarters3.jpg', import.meta.url).href,
          title: 'A-Block Quarters View',
          desc: 'A-Block quarters exterior and surroundings'
        },
        { 
          src: new URL('@/assets/images/quarters/b_quarters.jpg', import.meta.url).href,
          title: 'B-Block Quarters',
          desc: 'B-Block (Godhavari) - Associate & Assistant Professors quarters'
        },
        { 
          src: new URL('@/assets/images/quarters/c_quarters.jpg', import.meta.url).href,
          title: 'C-Block Quarters',
          desc: 'C-Block (Kinnerasani) - Non-teaching staff quarters'
        },
      ],
      showImageModal: false,
      currentImageIndex: 0,
    };
  },
  methods: {
    openImageModal(index) {
      this.currentImageIndex = index;
      this.showImageModal = true;
    },
    closeImageModal() {
      this.showImageModal = false;
    },
  },
};
</script>

<style scoped>
/* CSS VARIABLES */
:root {
  --orange: #FF7701;
  --ink: #0b3d91;
  --muted: #6c757d;
}

/* UTILITY CLASSES */
.container{ width:min(1180px,92%); margin-inline:auto; }
.mb-0{margin-bottom:0} .mt-1{margin-top:1rem} .mt-2{margin-top:1.25rem}
.mb-2{margin-bottom:.75rem} .h5{font-size:1.1rem} .h6{font-size:1rem}
.text-muted{color:var(--muted)} .muted{color:var(--muted)}
.lead{font-size:1.2rem; color:#fff; font-weight:600}

/* PAGE BACKGROUND */
.page-bg { background: linear-gradient(180deg, #fff 0%, #eef3ff 100%); }

/* HERO */
.hero { background: var(--ink); color: #fff; padding: 2rem 0 1.5rem; }
.hero .text-white-50 { color: rgba(255, 255, 255, 0.9) !important; font-size: 1.1rem; }
.badge-pill { background: rgba(255,255,255,0.15); border-radius: 999px; padding: .25rem .75rem; }
.stat-card { background:#fff; border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); padding:1rem; color: #0b3d91; }
.stat-number { font-weight:800; color:#0b3d91; }

/* CONTENT */
.content{ padding:1rem 0 2.6rem }
.card-section{ margin:1.2rem 0 }
.elev-card { border-radius:1rem; box-shadow:0 6px 24px rgba(0,0,0,.08); background:#fff; }
.section-title { color:#0b3d91; font-weight:800; }
.contact-chip { border:1px dashed rgba(0,0,0,.1); border-radius:999px; padding:.35rem .75rem; }

/* Ensure all text is visible */
.elev-card {
  color: #000;
}

.elev-card h1,
.elev-card h2,
.elev-card h3,
.elev-card h4,
.elev-card h5,
.elev-card h6 {
  color: var(--ink);
}

.elev-card p,
.elev-card span,
.elev-card li,
.elev-card label,
.elev-card td,
.elev-card th {
  color: #000;
}

.elev-card .h4,
.elev-card .h6 {
  color: var(--ink) !important;
}

/* Contact section styling */
.contact-card .section-title,
.contact-card .section-subtitle {
  color: var(--ink) !important;
}

.contact-card .contact-chip {
  color: #000 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero { padding: 1.5rem 0 1rem; }
  .hero .display-5 { font-size: 2rem; }
  .content { padding: 0.5rem 0 2rem; }
  .elev-card { padding: 1.5rem !important; }
}

/* Gallery Styles */
.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay i {
  color: white;
  font-size: 2rem;
}
</style>