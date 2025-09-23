<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Campus Gallery Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Campus Views</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Campus Gallery</h1>
            <p class="lead mb-3">Explore Our Beautiful Campus</p>
            <p class="mb-0 text-white-50">
              Discover the modern infrastructure, state-of-the-art facilities, and 
              beautiful campus environment that makes SSIT a premier educational institution.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Campus Gallery - Beautiful campus views"
              src="@/assets/campus.png"
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
        <!-- Gallery Introduction -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Campus Gallery</h2>
          <p class="section-subtitle">Modern Infrastructure • State-of-the-Art Facilities • Beautiful Environment</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                Welcome to the <strong>SSIT Campus Gallery</strong>, where you can explore the modern infrastructure, 
                state-of-the-art facilities, and beautiful campus environment that makes our institution 
                a premier destination for quality education.
              </p>
              <p>
                Our campus features <strong>modern buildings, well-equipped laboratories, spacious classrooms, 
                recreational facilities, and green spaces</strong> that provide an ideal environment for 
                academic excellence and student development.
              </p>
              <p class="mb-0">
                Browse through our gallery to get a glimpse of the facilities and infrastructure 
                that support our commitment to providing world-class education.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Gallery Features</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-images text-primary me-2"></i>
                  <strong>High-Quality Photos</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-expand text-success me-2"></i>
                  <strong>Interactive Gallery</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-building text-warning me-2"></i>
                  <strong>Campus Infrastructure</strong>
                </div>
                <div>
                  <i class="fa-solid fa-leaf text-info me-2"></i>
                  <strong>Green Campus</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery Filter -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Gallery Categories</h2>
          <p class="section-subtitle">Filter by Category • Explore Different Areas</p>
          
          <div class="row g-3 mt-3">
            <div class="col-md-3">
              <div class="elev-card p-3 text-center category-filter" 
                   :class="{ active: selectedCategory === '' }"
                   @click="filterByCategory('')">
                <i class="fa-solid fa-images fa-2x mb-2"></i>
                <h6 class="mb-0">All Photos</h6>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-3 text-center category-filter" 
                   :class="{ active: selectedCategory === 'buildings' }"
                   @click="filterByCategory('buildings')">
                <i class="fa-solid fa-building fa-2x mb-2"></i>
                <h6 class="mb-0">Buildings</h6>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-3 text-center category-filter" 
                   :class="{ active: selectedCategory === 'facilities' }"
                   @click="filterByCategory('facilities')">
                <i class="fa-solid fa-university fa-2x mb-2"></i>
                <h6 class="mb-0">Facilities</h6>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-3 text-center category-filter" 
                   :class="{ active: selectedCategory === 'campus' }"
                   @click="filterByCategory('campus')">
                <i class="fa-solid fa-leaf fa-2x mb-2"></i>
                <h6 class="mb-0">Campus Views</h6>
              </div>
            </div>
          </div>
        </div>

        <!-- Photo Gallery -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="section-title h4 mb-0">Photo Gallery</h2>
            <span class="badge bg-primary">{{ filteredPhotos.length }} Photos</span>
          </div>
          
          <div class="row g-4" v-if="filteredPhotos.length > 0">
            <div class="col-lg-4 col-md-6" v-for="photo in filteredPhotos" :key="photo.id">
              <div class="gallery-card" @click="openModal(photo)">
                <img :src="photo.src" :alt="photo.alt" class="img-fluid rounded-4 shadow" />
                <div class="gallery-overlay">
                  <div class="gallery-content">
                    <h6 class="mb-1">{{ photo.title }}</h6>
                    <p class="mb-0 small">{{ photo.description }}</p>
                    <i class="fa-solid fa-expand mt-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Photos Message -->
          <div v-else class="text-center py-5">
            <i class="fa-solid fa-images fa-3x text-muted mb-3"></i>
            <h5 class="text-muted">No photos found in this category</h5>
            <p class="text-muted">Try selecting a different category or view all photos</p>
          </div>
        </div>

        <!-- Campus Features -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Campus Features</h2>
          <p class="section-subtitle">Modern Infrastructure • Quality Facilities • Student-Friendly Environment</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-building fa-2x text-primary mb-3"></i>
                <h5 class="h6">Modern Buildings</h5>
                <p class="small mb-0">State-of-the-art academic buildings with modern architecture and design</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-microscope fa-2x text-success mb-3"></i>
                <h5 class="h6">Advanced Laboratories</h5>
                <p class="small mb-0">Well-equipped laboratories for practical learning and research activities</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-leaf fa-2x text-warning mb-3"></i>
                <h5 class="h6">Green Campus</h5>
                <p class="small mb-0">Beautiful green spaces and landscaped gardens for a peaceful environment</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Campus Gallery</h2>
            <p class="section-subtitle">Visit our campus to experience the facilities firsthand</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> info@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Campus Visits:</strong> Monday - Saturday
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Timings:</strong> 9:00 AM - 5:00 PM
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-users text-success me-2"></i>
                  <strong>Guided Tours:</strong> Available on Request
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- Image Modal -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="imageModalLabel">{{ selectedPhoto?.title }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <img :src="selectedPhoto?.src" :alt="selectedPhoto?.alt" class="img-fluid rounded" />
            <p class="mt-3 mb-0">{{ selectedPhoto?.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'CampusGallery',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "Modern", label: "Infrastructure", icon: "fa-solid fa-building fa-lg text-primary" },
        { value: "State-of-the-Art", label: "Facilities", icon: "fa-solid fa-microscope fa-lg text-success" },
        { value: "Green", label: "Campus", icon: "fa-solid fa-leaf fa-lg text-warning" },
        { value: "Quality", label: "Education", icon: "fa-solid fa-graduation-cap fa-lg text-info" },
      ],
      selectedCategory: '',
      selectedPhoto: null,
      photos: [
        {
          id: 1,
          title: 'Main Campus Building',
          description: 'Modern architecture of the main academic building',
          src: '@/assets/CampusGallery/image.png',
          alt: 'SSIT Main Campus Building',
          category: 'buildings'
        },
        {
          id: 2,
          title: 'Campus Entrance',
          description: 'Beautiful entrance to the college campus',
          src: '@/assets/CampusGallery/image copy.png',
          alt: 'SSIT Campus Entrance',
          category: 'campus'
        },
        {
          id: 3,
          title: 'Academic Block',
          description: 'Modern academic facilities and classrooms',
          src: '@/assets/CampusGallery/image copy 2.png',
          alt: 'SSIT Academic Block',
          category: 'buildings'
        },
        {
          id: 4,
          title: 'Laboratory Facilities',
          description: 'Well-equipped laboratories for practical learning',
          src: '@/assets/CampusGallery/image copy 3.png',
          alt: 'SSIT Laboratory Facilities',
          category: 'facilities'
        },
        {
          id: 5,
          title: 'Campus Grounds',
          description: 'Beautiful campus grounds and green spaces',
          src: '@/assets/CampusGallery/image copy 4.png',
          alt: 'SSIT Campus Grounds',
          category: 'campus'
        }
      ],
      filteredPhotos: []
    };
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
      this.filterPhotos();
    },
    filterPhotos() {
      if (this.selectedCategory === '') {
        this.filteredPhotos = this.photos;
      } else {
        this.filteredPhotos = this.photos.filter(photo => photo.category === this.selectedCategory);
      }
    },
    openModal(photo) {
      this.selectedPhoto = photo;
      // Bootstrap modal will be opened via data-bs-toggle
      const modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();
    }
  },
  mounted() {
    this.filteredPhotos = this.photos;
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

/* Category Filter */
.category-filter {
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-filter:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,.12);
}

.category-filter.active {
  background: var(--ink) !important;
  color: white !important;
}

.category-filter.active i {
  color: white !important;
}

/* Gallery Cards */
.gallery-card {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-card:hover {
  transform: translateY(-5px);
}

.gallery-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(11, 61, 145, 0.8) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-content {
  color: white;
  text-align: left;
}

.gallery-content h6 {
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.gallery-content p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

/* Modal Styling */
.modal-content {
  border: none;
  border-radius: 1rem;
}

.modal-header {
  border-bottom: 1px solid #dee2e6;
  border-radius: 1rem 1rem 0 0;
}

.modal-body img {
  max-height: 70vh;
  object-fit: contain;
}

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
  .gallery-card img {
    height: 200px;
  }
}
</style>
