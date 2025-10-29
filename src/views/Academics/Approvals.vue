<template>
  <div class="approvals-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">
          <i class="fa-solid fa-certificate"></i>
          <span>Approvals & Accreditations</span>
        </h1>
        <p class="subtitle">
          <i class="fa-solid fa-check-circle"></i>
          Official Recognition and Compliance
        </p>
        <p class="intro">
          Comprehensive information about our institutional approvals, accreditations,
          and regulatory compliance from various governing bodies.
        </p>
      </div>
    </header>

    <!-- NAVIGATION TABS -->
    <nav class="tabs container" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
        :aria-selected="activeTab === tab.id"
        role="tab"
      >
        <i :class="tab.icon"></i>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- CONTENT -->
    <main class="container content">
      <!-- AICTE APPROVALS -->
      <section v-show="activeTab === 'aicte'" class="panel">
        <h2 class="section-title">
          <i class="fa-solid fa-university"></i>
          <span>AICTE Approvals</span>
        </h2>
        <p class="section-intro">
          All India Council for Technical Education (AICTE) approval letters and extension of approval reports.
        </p>
        
        <div class="search-bar">
          <i class="fa-solid fa-search"></i>
          <input
            v-model="aicteSearch"
            type="text"
            placeholder="Search AICTE documents..."
            class="search-input"
          />
        </div>

        <div class="documents-grid">
          <div
            v-for="doc in filteredAicteDocs"
            :key="doc.id"
            class="document-card"
            @click="viewDocument(doc)"
          >
            <div class="doc-icon">
              <i class="fa-solid fa-file-pdf"></i>
            </div>
            <div class="doc-content">
              <h3 class="doc-title">{{ doc.title }}</h3>
              <p class="doc-meta">
                <span class="doc-year">{{ doc.year }}</span>
                <span class="doc-size">{{ doc.size }}</span>
              </p>
              <p class="doc-description">{{ doc.description }}</p>
            </div>
            <div class="doc-actions">
              <button class="btn-view" @click.stop="viewDocument(doc)">
                <i class="fa-solid fa-eye"></i>
                View
              </button>
              <a :href="doc.href" target="_blank" class="btn-download" @click.stop>
                <i class="fa-solid fa-download"></i>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- UNIVERSITY AFFILIATION -->
      <section v-show="activeTab === 'affiliation'" class="panel">
        <h2 class="section-title">
          <i class="fa-solid fa-graduation-cap"></i>
          <span>University Affiliation</span>
        </h2>
        <p class="section-intro">
          Affiliation letters and agreements with Jawaharlal Nehru Technological University, Hyderabad (JNTUH).
        </p>
        
        <div class="search-bar">
          <i class="fa-solid fa-search"></i>
          <input
            v-model="affiliationSearch"
            type="text"
            placeholder="Search affiliation documents..."
            class="search-input"
          />
        </div>

        <div class="documents-grid">
          <div
            v-for="doc in filteredAffiliationDocs"
            :key="doc.id"
            class="document-card"
            @click="viewDocument(doc)"
          >
            <div class="doc-icon">
              <i class="fa-solid fa-file-pdf"></i>
            </div>
            <div class="doc-content">
              <h3 class="doc-title">{{ doc.title }}</h3>
              <p class="doc-meta">
                <span class="doc-year">{{ doc.year }}</span>
                <span class="doc-size">{{ doc.size }}</span>
              </p>
              <p class="doc-description">{{ doc.description }}</p>
            </div>
            <div class="doc-actions">
              <button class="btn-view" @click.stop="viewDocument(doc)">
                <i class="fa-solid fa-eye"></i>
                View
              </button>
              <a :href="doc.href" target="_blank" class="btn-download" @click.stop>
                <i class="fa-solid fa-download"></i>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- ACCREDITATIONS -->
      <section v-show="activeTab === 'accreditations'" class="panel">
        <h2 class="section-title">
          <i class="fa-solid fa-star"></i>
          <span>Accreditations</span>
        </h2>
        <p class="section-intro">
          National Assessment and Accreditation Council (NAAC) reports and other accreditation certificates.
        </p>
        
        <div class="search-bar">
          <i class="fa-solid fa-search"></i>
          <input
            v-model="accreditationSearch"
            type="text"
            placeholder="Search accreditation documents..."
            class="search-input"
          />
        </div>

        <div class="documents-grid">
          <div
            v-for="doc in filteredAccreditationDocs"
            :key="doc.id"
            class="document-card"
            @click="viewDocument(doc)"
          >
            <div class="doc-icon">
              <i class="fa-solid fa-file-pdf"></i>
            </div>
            <div class="doc-content">
              <h3 class="doc-title">{{ doc.title }}</h3>
              <p class="doc-meta">
                <span class="doc-year">{{ doc.year }}</span>
                <span class="doc-size">{{ doc.size }}</span>
              </p>
              <p class="doc-description">{{ doc.description }}</p>
            </div>
            <div class="doc-actions">
              <button class="btn-view" @click.stop="viewDocument(doc)">
                <i class="fa-solid fa-eye"></i>
                View
              </button>
              <a :href="doc.href" target="_blank" class="btn-download" @click.stop>
                <i class="fa-solid fa-download"></i>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- COMPLIANCE & CERTIFICATES -->
      <section v-show="activeTab === 'compliance'" class="panel">
        <h2 class="section-title">
          <i class="fa-solid fa-shield-alt"></i>
          <span>Compliance & Certificates</span>
        </h2>
        <p class="section-intro">
          ISO certifications, fire safety certificates, building approvals, and other compliance documents.
        </p>
        
        <div class="search-bar">
          <i class="fa-solid fa-search"></i>
          <input
            v-model="complianceSearch"
            type="text"
            placeholder="Search compliance documents..."
            class="search-input"
          />
        </div>

        <div class="documents-grid">
          <div
            v-for="doc in filteredComplianceDocs"
            :key="doc.id"
            class="document-card"
            @click="viewDocument(doc)"
          >
            <div class="doc-icon">
              <i class="fa-solid fa-file-pdf"></i>
            </div>
            <div class="doc-content">
              <h3 class="doc-title">{{ doc.title }}</h3>
              <p class="doc-meta">
                <span class="doc-year">{{ doc.year }}</span>
                <span class="doc-size">{{ doc.size }}</span>
              </p>
              <p class="doc-description">{{ doc.description }}</p>
            </div>
            <div class="doc-actions">
              <button class="btn-view" @click.stop="viewDocument(doc)">
                <i class="fa-solid fa-eye"></i>
                View
              </button>
              <a :href="doc.href" target="_blank" class="btn-download" @click.stop>
                <i class="fa-solid fa-download"></i>
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- PDF VIEWER MODAL -->
    <div v-if="selectedDoc" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">
            <i class="fa-solid fa-file-pdf"></i>
            {{ selectedDoc.title }}
          </h3>
          <button class="modal-close" @click="closeModal">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <iframe
            :src="selectedDoc.href"
            width="100%"
            height="600px"
            style="border: none; border-radius: 8px;"
          ></iframe>
        </div>
        <div class="modal-footer">
          <a :href="selectedDoc.href" target="_blank" class="btn-download">
            <i class="fa-solid fa-download"></i>
            Download PDF
          </a>
          <button class="btn-close" @click="closeModal">Close</button>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

// Reactive data
const activeTab = ref("aicte");
const selectedDoc = ref(null);

// Search terms
const aicteSearch = ref("");
const affiliationSearch = ref("");
const accreditationSearch = ref("");
const complianceSearch = ref("");

// Tab configuration
const tabs = [
  { id: "aicte", label: "AICTE Approvals", icon: "fa-solid fa-university" },
  { id: "affiliation", label: "University Affiliation", icon: "fa-solid fa-graduation-cap" },
  { id: "accreditations", label: "Accreditations", icon: "fa-solid fa-star" },
  { id: "compliance", label: "Compliance & Certificates", icon: "fa-solid fa-shield-alt" },
];

// Document data
const aicteDocs = [
  {
    id: 1,
    title: "Extension of Approval 2023-24",
    year: "2023-24",
    size: "2.4 MB",
    description: "AICTE Extension of Approval for Academic Year 2023-24",
    href: "/src/assets/docs/mandatory/EOAReport2023-24.pdf"
  },
  {
    id: 2,
    title: "Extension of Approval 2022-23",
    year: "2022-23",
    size: "2.1 MB",
    description: "AICTE Extension of Approval for Academic Year 2022-23",
    href: "/src/assets/docs/mandatory/EOAReport2022-23.pdf"
  },
  {
    id: 3,
    title: "Extension of Approval 2021-22",
    year: "2021-22",
    size: "1.8 MB",
    description: "AICTE Extension of Approval for Academic Year 2021-22",
    href: "/src/assets/docs/mandatory/EOAReport2021-22.pdf"
  }
];

const affiliationDocs = [
  {
    id: 4,
    title: "JNTUH Affiliation Certificate",
    year: "Current",
    size: "1.2 MB",
    description: "Official affiliation certificate from Jawaharlal Nehru Technological University, Hyderabad",
    href: "/docs/JNTUH_Affiliation.pdf"
  },
  {
    id: 5,
    title: "Affiliation Agreement",
    year: "2023",
    size: "0.8 MB",
    description: "Memorandum of Understanding and affiliation agreement with JNTUH",
    href: "/docs/JNTUH_Agreement.pdf"
  }
];

const accreditationDocs = [
  {
    id: 6,
    title: "NAAC Assessment Report",
    year: "Grade B+",
    size: "3.2 MB",
    description: "National Assessment and Accreditation Council assessment report with Grade B+ accreditation",
    href: "/docs/NAAC_Report.pdf"
  },
  {
    id: 7,
    title: "NAAC Certificate",
    year: "Grade B+",
    size: "0.5 MB",
    description: "Official NAAC certificate confirming Grade B+ accreditation status",
    href: "/docs/NAAC_Certificate.pdf"
  }
];

const complianceDocs = [
  {
    id: 8,
    title: "ISO 9001:2015 Certificate",
    year: "Current",
    size: "0.6 MB",
    description: "ISO 9001:2015 Quality Management System certification",
    href: "/docs/ISO_9001_2015.pdf"
  },
  {
    id: 9,
    title: "Fire Safety Certificate",
    year: "Latest",
    size: "0.4 MB",
    description: "Fire safety compliance certificate from local fire department",
    href: "/docs/Fire_Safety.pdf"
  },
  {
    id: 10,
    title: "Building Approval Certificate",
    year: "Latest",
    size: "0.7 MB",
    description: "Municipal building approval and occupancy certificate",
    href: "/docs/Building_Approval.pdf"
  },
  {
    id: 11,
    title: "Environmental Clearance",
    year: "Latest",
    size: "0.9 MB",
    description: "Environmental clearance certificate for campus operations",
    href: "/docs/Environmental_Clearance.pdf"
  }
];

// Computed filtered documents
const filteredAicteDocs = computed(() => {
  const query = aicteSearch.value.toLowerCase();
  return aicteDocs.filter(doc => 
    doc.title.toLowerCase().includes(query) ||
    doc.year.toLowerCase().includes(query) ||
    doc.description.toLowerCase().includes(query)
  );
});

const filteredAffiliationDocs = computed(() => {
  const query = affiliationSearch.value.toLowerCase();
  return affiliationDocs.filter(doc => 
    doc.title.toLowerCase().includes(query) ||
    doc.year.toLowerCase().includes(query) ||
    doc.description.toLowerCase().includes(query)
  );
});

const filteredAccreditationDocs = computed(() => {
  const query = accreditationSearch.value.toLowerCase();
  return accreditationDocs.filter(doc => 
    doc.title.toLowerCase().includes(query) ||
    doc.year.toLowerCase().includes(query) ||
    doc.description.toLowerCase().includes(query)
  );
});

const filteredComplianceDocs = computed(() => {
  const query = complianceSearch.value.toLowerCase();
  return complianceDocs.filter(doc => 
    doc.title.toLowerCase().includes(query) ||
    doc.year.toLowerCase().includes(query) ||
    doc.description.toLowerCase().includes(query)
  );
});

// Methods
const viewDocument = (doc) => {
  selectedDoc.value = doc;
};

const closeModal = () => {
  selectedDoc.value = null;
};
</script>

<style scoped>
/* Theme Variables */
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --navy: #1e40af;
  --bg: #f7f9fc;
  --card: #fff;
  --border: #e5e7eb;
  --muted: #6b7280;
  --success: #10b981;
  --warning: #f59e0b;
}

.approvals-page {
  background: var(--bg);
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  width: min(1180px, 92%);
  margin: auto;
  padding: 0 1rem;
}

.content {
  padding: 2rem 0;
}

/* HERO SECTION */
.hero {
  background: var(--ink);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
  text-align: center;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 800;
  font-size: 2.2rem;
  margin: 0 0 0.3rem 0;
  color: white;
}

.title i {
  font-size: 2.1rem;
  color: var(--orange);
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  opacity: 0.9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}

.subtitle i {
  font-size: 1rem;
  color: var(--orange);
}

.intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;
  color: white;
}

/* NAVIGATION TABS */
.tabs {
  position: sticky;
  top: 0;
  z-index: 20;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  margin: 1rem auto;
  width: 100%;
  max-width: none;
  display: flex;
  gap: .5rem;
  padding: .6rem 0;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
}

.tab {
  border: 1px solid var(--border);
  background: #fff;
  color: #111;
  border-radius: 999px;
  padding: .5rem .9rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: .5rem;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 40px;
  min-width: fit-content;
  flex-shrink: 0;
}

.tab i {
  color: var(--ink);
}

.tab.active {
  border-color: var(--ink);
  background: rgba(30, 64, 175, 0.08);
  color: var(--ink);
}

/* CONTENT PANELS */
.panel {
  background: var(--card);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 119, 1, 0.1);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 0.5rem;
}

.section-title i {
  color: var(--orange);
  font-size: 1.4rem;
}

.section-intro {
  color: var(--muted);
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* SEARCH BAR */
.search-bar {
  position: relative;
  margin-bottom: 2rem;
  max-width: 400px;
}

.search-bar i {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted);
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  background: white;
}

.search-input:focus {
  outline: none;
  border-color: var(--orange);
  box-shadow: 0 0 0 3px rgba(255, 119, 1, 0.1);
}

/* DOCUMENTS GRID */
.documents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.document-card {
  background: white;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.document-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}

.doc-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #ff6b6b, var(--orange));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}

.doc-content {
  flex: 1;
}

.doc-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.doc-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.85rem;
}

.doc-year {
  background: rgba(255, 119, 1, 0.1);
  color: var(--orange);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
}

.doc-size {
  color: var(--muted);
  font-weight: 500;
}

.doc-description {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.doc-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-view, .btn-download {
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-view {
  background: var(--orange);
  color: white;
}

.btn-view:hover {
  background: #e55a00;
  transform: translateY(-1px);
}

.btn-download {
  background: var(--orange);
  color: white;
}

.btn-download:hover {
  background: #e55a00;
  transform: translateY(-1px);
}

/* MODAL */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--ink);
  margin: 0;
}

.modal-title i {
  color: #dc2626;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: var(--muted);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: var(--border);
  color: var(--ink);
}

.modal-body {
  padding: 1rem;
  flex: 1;
  overflow: auto;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn-close {
  background: var(--muted);
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-close:hover {
  background: #4b5563;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .hero {
    padding: 2rem 0;
  }
  
  .title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
    flex-direction: column;
    gap: 0.3rem;
  }
  
  .tabs {
    padding: 0.5rem 0;
    gap: 0.3rem;
  }
  
  .tab {
    padding: 0.4rem 0.7rem;
    font-size: 0.9rem;
  }
  
  .panel {
    padding: 1.5rem 1rem;
  }
  
  .documents-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .document-card {
    padding: 1rem;
  }
  
  .modal-content {
    margin: 0.5rem;
    max-height: 95vh;
  }
  
  .modal-header, .modal-footer {
    padding: 1rem;
  }
  
  .modal-body {
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .doc-actions {
    flex-direction: column;
  }
  
  .btn-view, .btn-download {
    width: 100%;
  }
}
</style>