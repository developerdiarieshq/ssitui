<template>
  <div class="mba-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">MBA</h1>
        <p class="subtitle">B-Category Seats Application Form</p>
      </div>
    </header>

    <div class="container">

      <!-- Advertisement Link Section -->
      <div class="advertisement-section">
        <div class="advertisement-box">
          <h3><i class="fa-solid fa-bullhorn"></i> Important Notice</h3>
          <div class="advertisement-content">
            <p class="advertisement-intro">Before filling out the application form, please read the advertisement for detailed information about:</p>
            <div class="advertisement-list">
              <div class="list-item">• Eligibility criteria</div>
              <div class="list-item">• Application process</div>
              <div class="list-item">• Important dates</div>
              <div class="list-item">• Fee structure</div>
              <div class="list-item">• Required documents</div>
            </div>
          </div>
          <div class="advertisement-link-container">
            <button @click="openPdfModal('admission')" class="advertisement-link">
              <i class="fas fa-external-link-alt"></i>
              View MBA B-Category Seats Advertisement
            </button>
            <button @click="openPdfModal('application')" class="download-link">
              <i class="fas fa-download"></i>
              Download Offline Application Form
            </button>
          </div>
        </div>
      </div>

      <!-- Documents Required Section -->
      <div class="documents-section">
        <div class="documents-box">
          <h3><i class="fa-solid fa-clipboard-list"></i> DOCUMENTS / CERTIFICATES TO BE ENCLOSED</h3>
          <div class="documents-list">
            <div class="document-item">1. ICET 2025 Rank Card and Hall Ticket</div>
            <div class="document-item">2. SSC or its equivalent certificate</div>
            <div class="document-item">3. Intermediate or its equivalent certificate</div>
            <div class="document-item">4. Degree Provisional Certificate</div>
            <div class="document-item">5. Degree Consolidated Marks Memo</div>
            <div class="document-item">6. Degree Transfer Certificate</div>
            <div class="document-item">7. 9th to Degree Study & Conduct Certificates</div>
            <div class="document-item">8. Caste Certificate of BC/SC/ST (as applicable)</div>
            <div class="document-item">9. 3 Sets Zerox Copies of All Above Originals</div>
            <div class="document-item">10. 3 Copies of passport size photos (color)</div>
          </div>
          <div class="fee-note">
            <p><strong>NOTE:</strong> College Fee is Rs.54000/-.</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- PDF Viewer -->
    <PdfViewer 
      :show="showPdfModal" 
      :url="currentPdfUrl" 
      :title="currentPdfTitle"
      @close="closePdfModal"
    />
    
    <!-- Footer Component -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import PdfViewer from '@/views/utils/PdfViewer.vue'

export default {
  components: {
    Header,
    NavBar,
    Footer,
    PdfViewer
  },
  name: 'MBA',
  data() {
    return {
      showPdfModal: false,
      currentPdfUrl: '',
      currentPdfTitle: ''
    }
  },
  methods: {
    openPdfModal(type) {
      this.showPdfModal = true;
      
      if (type === 'admission') {
        this.currentPdfTitle = 'MBA B-Category Seats Advertisement';
        this.currentPdfUrl = new URL('@/assets/departments/bcategory/mba/admission.pdf', import.meta.url).href;
      } else if (type === 'application') {
        this.currentPdfTitle = 'MBA Application Form';
        this.currentPdfUrl = new URL('@/assets/departments/bcategory/mba/application.pdf', import.meta.url).href;
      }
    },
    
    closePdfModal() {
      this.showPdfModal = false;
      this.currentPdfUrl = '';
      this.currentPdfTitle = '';
    }
  }
}
</script>

<style scoped>


/* HERO */
.hero {
  background: var(--ink);
  color: #fff;
  padding: 3rem 1rem;
}

.hero .title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}

.hero .subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-top: 0.5rem;
  font-weight: 500;
}

.container {
  width: min(1180px, 92%);
  margin: auto;
}

/* Advertisement Sections */
.advertisement-section, .documents-section {
  margin-bottom: 2rem;
}

.advertisement-box {
  background: var(--card);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.documents-box {
  background: var(--card);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border: 1px solid var(--border);
}

.advertisement-box h3, .documents-box h3 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--orange);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--orange);
}

.advertisement-content {
  margin-bottom: 1.5rem;
}

.advertisement-intro {
  font-size: 1rem;
  color: var(--ink);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.advertisement-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.list-item {
  padding: 0.5rem;
  background: rgba(249, 115, 22, 0.05);
  border-radius: 0.5rem;
  color: var(--muted);
  font-weight: 500;
}

.advertisement-link-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.advertisement-link, .download-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 200px;
  justify-content: center;
  border: none;
  cursor: pointer;
}

.advertisement-link {
  background: var(--orange);
}

.advertisement-link:hover {
  background: #e55a00;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.download-link {
  background: var(--ink);
}

.download-link:hover {
  background: #0f172a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(26, 34, 56, 0.3);
}

.documents-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.75rem;
}

.document-item {
  padding: 0.75rem;
  background: rgba(249, 115, 22, 0.05);
  border-left: 4px solid var(--orange);
  border-radius: 0.25rem;
  color: var(--ink);
  font-weight: 500;
  transition: all 0.3s ease;
}

.document-item:hover {
  background: rgba(249, 115, 22, 0.1);
  transform: translateX(4px);
}

.fee-note {
  text-align: center;
  padding: 1rem;
  background: rgba(249, 115, 22, 0.1);
  border-radius: 8px;
  border: 2px solid var(--orange);
  margin-top: 1rem;
}

.fee-note p {
  color: var(--orange);
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
}


/* Responsive */
@media (max-width: 768px) {
  .title {
    font-size: 1.7rem;
  }
  
  .advertisement-link-container {
    flex-direction: column;
    align-items: center;
  }
  
  .advertisement-link, .download-link {
    min-width: 250px;
  }
}
</style>