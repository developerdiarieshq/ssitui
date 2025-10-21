<template>
  <div class="hostels-page">
    <Header/>
    <NavBar/>
    <section class="page-bg">
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Hostels Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Home Away From Home</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Hostel Facilities</h1>
            <p class="lead mb-3">Comfortable & Safe Living for Students</p>
            <p class="mb-0 text-white-50">
              Modern hostel facilities with comprehensive amenities, 24/7 security, 
              and dedicated wardens to ensure a safe and conducive environment for academic excellence.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Hostel - Modern student accommodation"
              src="@/assets/campuslife/modern-college-hostel-rooms.jpg"
            />
          </div>
        </div>

        <!-- Stats -->
        <div class="row g-3 mt-3" aria-label="Hostel summary statistics">
          <div class="col-6 col-md-3" v-for="stat in stats" :key="stat.label">
            <div class="stat-card h-100">
              <div class="d-flex align-items-center gap-3">
                <div class="stat-icon">
                  <i :class="stat.icon"></i>
                </div>
                <div>
                  <div class="stat-number">{{ stat.value }}</div>
                  <div class="stat-label">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- CONTENT -->
    <main id="content" tabindex="-1">
      <div class="container py-5">
        <!-- About Hostels -->
        <div class="elev-card p-4 p-md-5 mb-5 overview-section">
          <h2 class="section-title h3">About Hostels</h2>
          <p class="section-subtitle">Modern Facilities • 24/7 Security • Academic Support</p>
          <p>
            SSIT provides excellent hostel accommodation with comprehensive facilities to ensure 
            comfortable and safe living for students. Every student is being monitored by 
            Hostel Wardens to maintain discipline, safety, and academic growth.
          </p>
          <p class="mb-0">
            The college also provides <strong>Cot, Chair, and Table</strong> for each and every student, 
            ensuring a comfortable study environment within their living space.
          </p>
        </div>

        <!-- Hostel Facilities -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Hostel Facilities</h2>
          <p class="section-subtitle">Comprehensive Amenities • Modern Infrastructure • Student Support</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Basic Amenities</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-wifi me-2 text-primary"></i>Internet Facility in Hostels</li>
                  <li><i class="fa-solid fa-newspaper me-2 text-success"></i>Newspapers for every Room</li>
                  <li><i class="fa-solid fa-clock me-2 text-warning"></i>Study Hours (8:30pm-10:30pm)</li>
                  <li><i class="fa-solid fa-bolt me-2 text-info"></i>Generator Facility for Uninterrupted Power</li>
                  <li><i class="fa-solid fa-tint me-2 text-danger"></i>Providing Mineral Water</li>
                  <li><i class="fa-solid fa-store me-2 text-secondary"></i>General Stores for Regular needs</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Recreation & Health</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-dumbbell me-2 text-primary"></i>Games for Physical Fitness (4:00pm-6:00pm)</li>
                  <li><i class="fa-solid fa-dumbbell me-2 text-success"></i>Gym Room</li>
                  <li><i class="fa-solid fa-tv me-2 text-warning"></i>TV Room</li>
                  <li><i class="fa-solid fa-bread-slice me-2 text-info"></i>Bakery</li>
                  <li><i class="fa-solid fa-shower me-2 text-danger"></i>Hot Water Facility</li>
                  <li><i class="fa-solid fa-phone me-2 text-secondary"></i>Phone Facility to Talk with Parents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Boys Hostel -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Boys Hostel</h2>
          <p class="section-subtitle">3-Bedded Rooms • Modern Facilities • Faculty Supervision</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                A separate limited hostel accommodation is available for boys on the campus, which accommodates 
                in <strong>3 bedded rooms</strong> and provided table and chair for each. The hostel facility is 
                provided only on first come first served basis.
              </p>
              <p>
                The hostel is provided with Gym, TV room, hot water, cool water and generator. We conduct 
                study hours by faculty and provide reading halls also.
              </p>
              <p>
                Extra care in providing hygienic and nutritive food at subsidized rates in its cafeteria. 
                So, with doubled stamina, students continue their academic discussions, career plans, and 
                spicy chats in the excellent insides of the cafeteria setting themselves free from the 
                inevitable spells of fatigue.
              </p>
              <p class="mb-0">
                The daily activities of the hostel are observed by the wardens.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Hostel Wardens</h4>
                <div class="mb-3">
                  <strong>Mr. Kanaka Raju</strong><br>
                  <i class="fa-solid fa-phone text-success me-2"></i>9842270579
                </div>
                <div>
                  <strong>Mr. Ch. Sivaji</strong><br>
                  <i class="fa-solid fa-phone text-success me-2"></i>8341132414
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Girls Hostel -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Girls Hostel</h2>
          <p class="section-subtitle">3 Blocks • 362 Students • Modern Facilities • Faculty Supervision</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                A separate limited hostel accommodation is available for girls on the campus, which accommodates 
                in <strong>3 bedded rooms</strong> and provided table and chair for each. The hostel facility is 
                provided only on first come first served basis.
              </p>
              <p>
                The hostel is provided with Gym, TV room, hot water, cool water and generator. We conduct 
                study hours by faculty and provide reading halls also.
              </p>
              <p>
                Extra care in providing hygienic and nutritive food at subsidized rates in its cafeteria. 
                So, with doubled stamina, students continue their academic discussions, career plans, and 
                spicy chats in the excellent insides of the cafeteria setting themselves free from the 
                inevitable spells of fatigue.
              </p>
              <p>
                SSIT has excellent Girls Hostels and it provides <strong>3 blocks</strong> for seniors and juniors girls:
              </p>
              <ul class="mb-0">
                <li><strong>I Block</strong> – III and IV B-Tech students: <strong>66 rooms</strong> (3 members for each room)</li>
                <li><strong>II Block</strong> – II B-Tech students: <strong>28 rooms</strong> (3 members for each room)</li>
                <li><strong>III Block</strong> – I B-Tech, MCA, and MBA students: <strong>36 rooms</strong> (3 members for each room)</li>
              </ul>
              <p class="mt-3 mb-0">
                <strong>Total strength of this hostel is 362 members.</strong> The daily activities of the hostel are observed by the wardens.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Hostel Wardens</h4>
                <div class="mb-3">
                  <strong>Vijaya Lakshmi</strong><br>
                  <i class="fa-solid fa-phone text-success me-2"></i>9505456453
                </div>
                <div class="mb-3">
                  <strong>Sravani Kumari</strong><br>
                  <i class="fa-solid fa-phone text-success me-2"></i>9553131273
                </div>
              </div>
            </div>
          </div>

          <!-- Hostel Blocks Details -->
          <div class="row g-4 mt-4">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">I Block</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-users me-2 text-primary"></i><strong>Students:</strong> III & IV B.Tech</li>
                  <li><i class="fa-solid fa-door-open me-2 text-success"></i><strong>Rooms:</strong> 66 rooms</li>
                  <li><i class="fa-solid fa-bed me-2 text-warning"></i><strong>Capacity:</strong> 3 per room</li>
                  <li><i class="fa-solid fa-user-graduate me-2 text-info"></i><strong>Total:</strong> 198 students</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">II Block</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-users me-2 text-primary"></i><strong>Students:</strong> II B.Tech</li>
                  <li><i class="fa-solid fa-door-open me-2 text-success"></i><strong>Rooms:</strong> 28 rooms</li>
                  <li><i class="fa-solid fa-bed me-2 text-warning"></i><strong>Capacity:</strong> 3 per room</li>
                  <li><i class="fa-solid fa-user-graduate me-2 text-info"></i><strong>Total:</strong> 84 students</li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">III Block</h4>
                <ul class="list-unstyled mb-0">
                  <li><i class="fa-solid fa-users me-2 text-primary"></i><strong>Students:</strong> I B.Tech, MCA, MBA</li>
                  <li><i class="fa-solid fa-door-open me-2 text-success"></i><strong>Rooms:</strong> 36 rooms</li>
                  <li><i class="fa-solid fa-bed me-2 text-warning"></i><strong>Capacity:</strong> 3 per room</li>
                  <li><i class="fa-solid fa-user-graduate me-2 text-info"></i><strong>Total:</strong> 108 students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Hostel Gallery -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Hostel Gallery</h2>
          <p class="section-subtitle">Capturing moments of comfortable living and modern facilities</p>
          
          <div class="row g-3 mt-3">
            <div v-for="(image, index) in hostelImages" :key="index" class="col-md-4 col-lg-3">
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
          :images="hostelImages"
          :initial-index="currentImageIndex"
          title="Hostel Facilities Gallery"
          title-icon="fa-solid fa-bed"
          title-icon-color="var(--orange)"
          @close="closeImageModal"
        />

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Hostel Office</h2>
            <p class="section-subtitle">We're here to help you with accommodation and hostel-related queries.</p>
            <div class="d-flex flex-wrap gap-3">
              <span class="contact-chip"><i class="fa-solid fa-location-dot text-danger"></i> SSIT Campus, Khammam</span>
              <span class="contact-chip"><i class="fa-solid fa-envelope text-primary"></i> hostel@ssit.edu.in</span>
              <span class="contact-chip"><i class="fa-solid fa-phone text-success"></i> +91-98765-43210</span>
            </div>
          </div>
        </section>
      </div>
    </main>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header.vue';
import NavBar from '../../components/NavBar.vue';
import Footer from '../../components/Footer.vue';
import ImagePreviewer from '../utils/ImagePreviewer.vue';

export default {
  name: "Hostels",
  components: {
    Header,
    NavBar,
    Footer,
    ImagePreviewer
  },
  data() {
    return {
      stats: [
        { value: "362", label: "Girls Hostel Capacity", icon: "fa-solid fa-female fa-lg text-primary" },
        { value: "3-Bedded", label: "Room Type", icon: "fa-solid fa-bed fa-lg text-success" },
        { value: "24/7", label: "Security", icon: "fa-solid fa-shield-halved fa-lg text-warning" },
        { value: "Study Hours", label: "8:30pm-10:30pm", icon: "fa-solid fa-clock fa-lg text-danger" },
      ],
      hostelImages: [
        { 
          src: new URL('@/assets/images/hostels/boys.jpg', import.meta.url).href,
          title: 'Boys Hostel',
          desc: 'Modern boys hostel accommodation with 3-bedded rooms'
        },
        { 
          src: new URL('@/assets/images/hostels/boys1.jpg', import.meta.url).href,
          title: 'Boys Hostel Room',
          desc: 'Comfortable boys hostel room with modern amenities'
        },
        { 
          src: new URL('@/assets/images/hostels/boys2.jpg', import.meta.url).href,
          title: 'Boys Hostel Facility',
          desc: 'Boys hostel common area and facilities'
        },
        { 
          src: new URL('@/assets/images/hostels/girls.jpg', import.meta.url).href,
          title: 'Girls Hostel',
          desc: 'Modern girls hostel with 3 blocks and 362 capacity'
        },
        { 
          src: new URL('@/assets/images/hostels/girls1.jpg', import.meta.url).href,
          title: 'Girls Hostel Room',
          desc: 'Comfortable girls hostel room with study facilities'
        },
        { 
          src: new URL('@/assets/images/hostels/girls2.jpg', import.meta.url).href,
          title: 'Girls Hostel Block',
          desc: 'Girls hostel block with modern infrastructure'
        },
        { 
          src: new URL('@/assets/images/hostels/girls3.jpg', import.meta.url).href,
          title: 'Girls Hostel Facility',
          desc: 'Girls hostel common area and recreational facilities'
        },
        { 
          src: new URL('@/assets/images/hostels/girls4.jpg', import.meta.url).href,
          title: 'Girls Hostel Interior',
          desc: 'Girls hostel interior with modern amenities'
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
/* THEME TOKENS */
:root{
  --navy:#1e40af; --navy-2:#153a9c;
  --orange:#f97316; --bg:#f7f9fc; --card:#fff;
  --border:#e5e7eb; --muted:#6b7280; --ink:#111827;
}

/* GENERIC */
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

/* Content section headings specifically */
.elev-card .h4 {
  color: var(--ink) !important;
}

.elev-card .h6 {
  color: var(--ink) !important;
}

/* Overview section specific styling */
.overview-section .section-title {
  color: var(--ink) !important;
}

.overview-section .section-subtitle {
  color: var(--ink) !important;
}

.overview-section p {
  color: #000 !important;
}

/* Contact section specific styling */
.contact-card .section-title {
  color: var(--ink) !important;
}

.contact-card .section-subtitle {
  color: var(--ink) !important;
}

.contact-card .contact-chip {
  color: #000 !important;
}

.stat-label {
  color: #0b3d91;
  font-size: 0.9rem;
}

.stat-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 119, 1, 0.1);
}

.stat-icon i {
  font-size: 1.5rem;
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
