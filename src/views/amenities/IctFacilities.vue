<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="ICT Facilities Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • ICT Infrastructure</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">ICT Facilities</h1>
            <p class="lead mb-3">Information & Communication Technology</p>
            <p class="mb-0 text-white-50">
              Comprehensive ICT infrastructure supporting modern education, 
              research, and administrative operations across the campus.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT ICT Facilities - Technology infrastructure"
              src="@/assets/campuslife/engineering-students-lab.png"
            />
          </div>
        </div>
      </div>
    </header>

    <!-- CONTENT -->
    <main class="content">
      <div class="container">
        
        <!-- Overview Section -->
        <div class="elev-card p-4 mb-4">
          <h2 class="section-title mb-3">
            <i class="fa-solid fa-desktop text-primary me-2"></i>
            ICT Infrastructure Overview
          </h2>
          <p class="lead-text mb-3">
            Sai Spurthi Institute of Technology is equipped with state-of-the-art Information and Communication Technology (ICT) 
            infrastructure to support modern teaching, learning, research, and administrative operations. Our comprehensive ICT 
            facilities ensure seamless connectivity, efficient resource management, and enhanced educational experiences.
          </p>
          
          <!-- Statistics -->
          <div class="row g-4 mt-3">
            <div class="col-md-3">
              <div class="stat-card text-center p-3">
                <i class="fa-solid fa-laptop fa-2x text-primary mb-2"></i>
                <h3 class="stat-number mb-1">400+</h3>
                <p class="stat-label mb-0">Computer Systems</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stat-card text-center p-3">
                <i class="fa-solid fa-network-wired fa-2x text-success mb-2"></i>
                <h3 class="stat-number mb-1">100 Mbps</h3>
                <p class="stat-label mb-0">Internet Speed</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stat-card text-center p-3">
                <i class="fa-solid fa-wifi fa-2x text-info mb-2"></i>
                <h3 class="stat-number mb-1">100%</h3>
                <p class="stat-label mb-0">Wi-Fi Coverage</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="stat-card text-center p-3">
                <i class="fa-solid fa-server fa-2x text-warning mb-2"></i>
                <h3 class="stat-number mb-1">24/7</h3>
                <p class="stat-label mb-0">Server Uptime</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Computing Infrastructure -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h3 class="section-title-sm mb-3">
                <i class="fa-solid fa-computer text-primary me-2"></i>
                Computer Labs
              </h3>
              <ul class="facility-list">
                <li><strong>400+ Systems:</strong> Latest configuration computers with LAN connectivity</li>
                <li><strong>Multiple Platforms:</strong> Windows, Linux, and Ubuntu operating systems</li>
                <li><strong>Licensed Software:</strong> AutoCAD, MATLAB, MS Office, and specialized engineering tools</li>
                <li><strong>Department Labs:</strong> Dedicated computer labs for CSE, ECE, EEE, and MECH departments</li>
                <li><strong>CAD/CAM Lab:</strong> Advanced design and manufacturing software</li>
                <li><strong>Separate Project Room:</strong> 66 systems dedicated for final year projects</li>
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h3 class="section-title-sm mb-3">
                <i class="fa-solid fa-network-wired text-success me-2"></i>
                Network Infrastructure
              </h3>
              <ul class="facility-list">
                <li><strong>High-Speed Connectivity:</strong> 100 Mbps dedicated internet connection</li>
                <li><strong>Multiple ISPs:</strong> Network redundancy through three different service providers</li>
                <li><strong>Campus-Wide LAN:</strong> All systems connected through structured cabling</li>
                <li><strong>Wi-Fi Coverage:</strong> Wireless internet access across campus</li>
                <li><strong>Network Security:</strong> Firewalls and content filtering systems</li>
                <li><strong>Bandwidth Management:</strong> Optimized distribution for academic and administrative use</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Software & Applications -->
        <div class="elev-card p-4 mb-4">
          <h3 class="section-title-sm mb-3">
            <i class="fa-solid fa-code text-info me-2"></i>
            Software & Applications
          </h3>
          <div class="row g-4">
            <div class="col-md-6">
              <h4 class="h6 text-primary mb-3">Academic Software</h4>
              <ul class="facility-list">
                <li><strong>Engineering Tools:</strong> AutoCAD, SolidWorks, ANSYS</li>
                <li><strong>Programming:</strong> Microsoft Visual Studio, Eclipse, NetBeans</li>
                <li><strong>Simulation:</strong> MATLAB, Simulink, LabVIEW</li>
                <li><strong>Database:</strong> Oracle, MySQL, SQL Server</li>
                <li><strong>Web Development:</strong> Dreamweaver, VS Code</li>
                <li><strong>Cloud Platforms:</strong> AWS Academy, Microsoft Azure</li>
              </ul>
            </div>
            <div class="col-md-6">
              <h4 class="h6 text-primary mb-3">Administrative Software</h4>
              <ul class="facility-list">
                <li><strong>ERP System:</strong> Integrated campus management software</li>
                <li><strong>Accounts:</strong> Tally ERP 9.0 for financial management</li>
                <li><strong>Office Suite:</strong> Microsoft Office 365</li>
                <li><strong>Record Management:</strong> Digital documentation system</li>
                <li><strong>Examination:</strong> Online examination and result portal</li>
                <li><strong>Communication:</strong> Email and collaboration tools</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- E-Learning & Digital Resources -->
        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h3 class="section-title-sm mb-3">
                <i class="fa-solid fa-graduation-cap text-warning me-2"></i>
                E-Learning Resources
              </h3>
              <ul class="facility-list">
                <li><strong>Digital Library:</strong> Access to e-books, e-journals, and online databases</li>
                <li><strong>NPTEL Videos:</strong> IIT/IISc lecture videos and online courses</li>
                <li><strong>MOOCs Platform:</strong> Integration with Coursera, edX, and SWAYAM</li>
                <li><strong>Learning Management System:</strong> Online assignment submission and grading</li>
                <li><strong>Virtual Labs:</strong> Remote access to experimental simulations</li>
                <li><strong>Video Conferencing:</strong> Facilities for online lectures and seminars</li>
              </ul>
            </div>
            </div>
            
          <div class="col-md-6">
            <div class="elev-card p-4 h-100">
              <h3 class="section-title-sm mb-3">
                <i class="fa-solid fa-shield-halved text-danger me-2"></i>
                Security & Support
              </h3>
              <ul class="facility-list">
                <li><strong>Antivirus Protection:</strong> Licensed antivirus on all systems</li>
                <li><strong>Data Backup:</strong> Regular automated backup systems</li>
                <li><strong>CCTV Integration:</strong> Digital surveillance and monitoring</li>
                <li><strong>Access Control:</strong> Secure authentication and user management</li>
                <li><strong>Technical Support:</strong> Dedicated IT helpdesk for troubleshooting</li>
                <li><strong>Maintenance:</strong> Regular hardware and software updates</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Student Access & Services -->
        <div class="elev-card p-4 mb-4">
          <h3 class="section-title-sm mb-3">
            <i class="fa-solid fa-users text-success me-2"></i>
            Student Access & Services
          </h3>
          <div class="row g-4">
              <div class="col-md-4">
              <div class="service-card">
                <i class="fa-solid fa-clock fa-2x text-primary mb-3"></i>
                <h4 class="h6">Extended Hours</h4>
                <p class="mb-0">Computer labs open from 8:00 AM to 8:00 PM on working days</p>
                </div>
              </div>
              <div class="col-md-4">
              <div class="service-card">
                <i class="fa-solid fa-user-graduate fa-2x text-success mb-3"></i>
                <h4 class="h6">Student Accounts</h4>
                <p class="mb-0">Individual login credentials for all students with email access</p>
                </div>
              </div>
              <div class="col-md-4">
              <div class="service-card">
                <i class="fa-solid fa-print fa-2x text-info mb-3"></i>
                <h4 class="h6">Printing Facilities</h4>
                <p class="mb-0">Multiple printers and scanners available across labs</p>
              </div>
                </div>
              </div>
            </div>
            
        <!-- Future Plans -->
        <div class="elev-card p-4 mb-4">
          <h3 class="section-title-sm mb-3">
            <i class="fa-solid fa-rocket text-primary me-2"></i>
            Future Enhancements
          </h3>
          <div class="row g-3">
            <div class="col-md-6">
              <div class="enhancement-item">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                <span>Upgrading to 1 Gbps internet connectivity</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="enhancement-item">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                <span>Implementation of AI and Machine Learning labs</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="enhancement-item">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                <span>Expansion of cloud computing infrastructure</span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="enhancement-item">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                <span>Mobile app for campus services</span>
                </div>
              </div>
            <div class="col-md-6">
              <div class="enhancement-item">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                <span>Enhanced cybersecurity measures</span>
                </div>
              </div>
            <div class="col-md-6">
              <div class="enhancement-item">
                <i class="fa-solid fa-check-circle text-success me-2"></i>
                <span>IoT lab for research and development</span>
              </div>
                </div>
              </div>
            </div>
            
            <!-- Contact Information -->
        <div class="elev-card p-4">
          <h3 class="section-title-sm mb-4 text-center">
            <i class="fa-solid fa-address-book text-primary me-2"></i>
            IT Department Contact
          </h3>
              <div class="row g-3 justify-content-center">
                <div class="col-md-4">
              <div class="contact-chip text-center p-3">
                <i class="fa-solid fa-envelope text-primary fa-2x mb-2"></i>
                <p class="mb-1"><strong>Email</strong></p>
                <p class="mb-0">ict@ssit.edu.in</p>
                  </div>
                </div>
                <div class="col-md-4">
              <div class="contact-chip text-center p-3">
                <i class="fa-solid fa-phone text-success fa-2x mb-2"></i>
                <p class="mb-1"><strong>Phone</strong></p>
                <p class="mb-0">08761-288278</p>
                  </div>
                </div>
                <div class="col-md-4">
              <div class="contact-chip text-center p-3">
                <i class="fa-solid fa-map-marker-alt text-warning fa-2x mb-2"></i>
                <p class="mb-1"><strong>Location</strong></p>
                <p class="mb-0">IT Block, SSIT Campus</p>
                  </div>
                </div>
              </div>
            </div>

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

export default {
  name: 'IctFacilities',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      // Placeholder data for future use
    };
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

/* Additional Styles */
.section-title-sm {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--ink);
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #374151;
}

.stat-label {
  font-size: 0.9rem;
  color: #6b7280;
  font-weight: 600;
}

.facility-list {
  list-style: none;
  padding-left: 0;
}

.facility-list li {
  padding: 0.5rem 0;
  border-bottom: 1px dashed rgba(0,0,0,0.1);
  color: #374151;
  line-height: 1.6;
}

.facility-list li:last-child {
  border-bottom: none;
}

.service-card {
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background: rgba(11, 61, 145, 0.03);
  transition: all 0.3s ease;
}

.service-card:hover {
  background: rgba(11, 61, 145, 0.08);
  transform: translateY(-3px);
}

.enhancement-item {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: rgba(34, 197, 94, 0.05);
  transition: all 0.3s ease;
}

.enhancement-item:hover {
  background: rgba(34, 197, 94, 0.1);
  transform: translateX(5px);
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
}
</style>
