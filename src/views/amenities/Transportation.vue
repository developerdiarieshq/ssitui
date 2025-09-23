<template>
  <div class="page-bg">
    <!-- HEADER -->
    <Header />
    
    <!-- NAVBAR -->
    <NavBar />
    
    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Transportation Hero">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <span class="badge-pill">SSIT • Safe Commute</span>
          <span class="badge-pill">AICTE Approved</span>
        </div>

        <div class="row align-items-center mt-3 gy-4">
          <div class="col-lg-7">
            <h1 class="display-5 fw-bold">Transportation</h1>
            <p class="lead mb-3">Safe & Reliable Commute for Students</p>
            <p class="mb-0 text-white-50">
              College-operated fleet providing safe and reliable transportation for students 
              with routes organized to ensure easy access from all parts of the town.
            </p>
          </div>
          <div class="col-lg-5">
            <img
              class="img-fluid rounded-4 shadow"
              alt="SSIT Transportation - College buses for students"
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
        <!-- About Transportation -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">About Transportation Facility</h2>
          <p class="section-subtitle">College Fleet • Safe Commute • Reasonable Charges</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-8">
              <p>
                The college operates a <strong>fleet of buses</strong> to provide 
                <strong>safe and reliable transportation</strong> for students. The routes are 
                organized to ensure that students from all parts of the town can 
                easily access the college.
              </p>
              <p>
                The facility is made available at <strong>reasonable charges</strong>, 
                depending on the routes opted by students. This ensures that quality 
                education is accessible to students from various locations.
              </p>
              <p class="mb-0">
                Our transportation service is designed to provide <strong>convenience and safety</strong> 
                for students, making their daily commute to college hassle-free and secure.
              </p>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Key Features</h4>
                <div class="mb-3">
                  <i class="fa-solid fa-bus text-primary me-2"></i>
                  <strong>College Fleet</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-shield-halved text-success me-2"></i>
                  <strong>Safe & Reliable</strong>
                </div>
                <div class="mb-3">
                  <i class="fa-solid fa-route text-warning me-2"></i>
                  <strong>Multiple Routes</strong>
                </div>
                <div>
                  <i class="fa-solid fa-dollar-sign text-info me-2"></i>
                  <strong>Reasonable Charges</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Transportation Routes -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Transportation Routes</h2>
          <p class="section-subtitle">Main Pickup Points • Route Coverage • Easy Access</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Main Pickup Points</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-location-dot me-2 text-primary"></i>
                    <strong>Sathupally</strong>
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-location-dot me-2 text-success"></i>
                    <strong>Chintalapudi</strong>
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-map-marked-alt me-2 text-warning"></i>
                    <strong>Additional Routes</strong> (As per demand)
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-clock me-2 text-info"></i>
                    <strong>Flexible Timings</strong> for convenience
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Route Benefits</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-3">
                    <i class="fa-solid fa-users me-2 text-primary"></i>
                    <strong>Student Convenience:</strong> Easy access from various locations
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-shield-alt me-2 text-success"></i>
                    <strong>Safety First:</strong> Secure transportation for all students
                  </li>
                  <li class="mb-3">
                    <i class="fa-solid fa-calendar-alt me-2 text-warning"></i>
                    <strong>Regular Service:</strong> Consistent daily transportation
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-handshake me-2 text-info"></i>
                    <strong>Affordable Rates:</strong> Reasonable charges for all routes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Transportation Features -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Transportation Features</h2>
          <p class="section-subtitle">Safety • Convenience • Reliability • Affordability</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-shield-halved fa-2x text-primary mb-3"></i>
                <h5 class="h6">Safety</h5>
                <p class="small mb-0">Well-maintained buses with experienced drivers</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-clock fa-2x text-success mb-3"></i>
                <h5 class="h6">Reliability</h5>
                <p class="small mb-0">Consistent service with punctual timings</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-dollar-sign fa-2x text-warning mb-3"></i>
                <h5 class="h6">Affordable</h5>
                <p class="small mb-0">Reasonable charges based on route distance</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="elev-card p-4 h-100 text-center">
                <i class="fa-solid fa-route fa-2x text-info mb-3"></i>
                <h5 class="h6">Convenience</h5>
                <p class="small mb-0">Multiple pickup points for easy access</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Transportation Benefits -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Transportation Benefits</h2>
          <p class="section-subtitle">Student Support • Academic Excellence • Community Service</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Student Benefits</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-graduation-cap me-2 text-primary"></i>
                  <strong>Academic Focus:</strong> Reduced travel stress for better learning
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-clock me-2 text-success"></i>
                  <strong>Time Saving:</strong> Direct routes to college without delays
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-users me-2 text-warning"></i>
                  <strong>Social Interaction:</strong> Bonding with fellow students
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-home me-2 text-info"></i>
                  <strong>Family Peace:</strong> Parents' assurance of safe commute
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <h5 class="h6 text-uppercase text-muted mb-3">Community Impact</h5>
              <ul class="list-unstyled mb-0">
                <li class="mb-3">
                  <i class="fa-solid fa-map-marked-alt me-2 text-primary"></i>
                  <strong>Accessibility:</strong> Education accessible to remote areas
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-handshake me-2 text-success"></i>
                  <strong>Inclusivity:</strong> Equal opportunities for all students
                </li>
                <li class="mb-3">
                  <i class="fa-solid fa-heart me-2 text-warning"></i>
                  <strong>Care Service:</strong> College's commitment to student welfare
                </li>
                <li class="mb-0">
                  <i class="fa-solid fa-star me-2 text-info"></i>
                  <strong>Quality Education:</strong> Removing barriers to learning
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bus Fee Structure -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Bus Fee Structure</h2>
          <p class="section-subtitle">Annual Transportation Charges • Route-Based Pricing • Interactive Fee Calculator</p>
          
          <!-- Route Selection -->
          <div class="row g-4 mt-3">
            <div class="col-md-4">
              <div class="elev-card p-4">
                <h4 class="h6 text-uppercase text-muted mb-3">Select Route</h4>
                <select class="form-select" v-model="selectedRoute" @change="filterFees">
                  <option value="">All Routes</option>
                  <option v-for="route in routes" :key="route" :value="route">{{ route }}</option>
                </select>
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4">
                <h4 class="h6 text-uppercase text-muted mb-3">Search Location</h4>
                <input 
                  type="text" 
                  class="form-control" 
                  placeholder="Search pickup point..."
                  v-model="searchTerm"
                  @input="filterFees"
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="elev-card p-4">
                <h4 class="h6 text-uppercase text-muted mb-3">Fee Range</h4>
                <select class="form-select" v-model="priceRange" @change="filterFees">
                  <option value="">All Prices</option>
                  <option value="low">₹12,000 - ₹18,000</option>
                  <option value="medium">₹18,000 - ₹24,000</option>
                  <option value="high">₹24,000+</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Fee Display -->
          <div class="row g-3 mt-3" v-if="filteredFees.length > 0">
            <div class="col-12">
              <h5 class="h6 text-muted mb-3">
                Showing {{ filteredFees.length }} of {{ busFees.length }} routes
                <span v-if="selectedRoute" class="badge bg-primary ms-2">{{ selectedRoute }}</span>
              </h5>
            </div>
            <div class="col-lg-4 col-md-6" v-for="fee in filteredFees" :key="fee.id">
              <div class="elev-card p-4 h-100 fee-card">
                <div class="d-flex justify-content-between align-items-start mb-2">
                  <h6 class="h6 mb-0 text-primary">{{ fee.route }}</h6>
                  <span class="badge bg-success">Per Year</span>
                </div>
                <div class="mb-2">
                  <i class="fa-solid fa-map-marker-alt text-warning me-2"></i>
                  <strong>{{ fee.pickupPoint }}</strong>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <div class="h5 text-success mb-0">₹{{ fee.amount.toLocaleString() }}</div>
                    <small class="text-muted">Annual Fee</small>
                  </div>
                  <div class="text-end">
                    <div class="small text-muted">Monthly</div>
                    <div class="fw-bold">₹{{ Math.round(fee.amount/12).toLocaleString() }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No Results -->
          <div v-else class="text-center py-5">
            <i class="fa-solid fa-search fa-3x text-muted mb-3"></i>
            <h5 class="text-muted">No routes found matching your criteria</h5>
            <p class="text-muted">Try adjusting your search or filter options</p>
          </div>
        </div>

        <!-- Transportation Guidelines -->
        <div class="elev-card p-4 p-md-5 mb-4">
          <h2 class="section-title h4">Transportation Guidelines</h2>
          <p class="section-subtitle">Rules & Regulations • Safety Protocols • Student Responsibilities</p>
          
          <div class="row g-4 mt-3">
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Safety Rules</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i class="fa-solid fa-check me-2 text-success"></i>
                    Always wear seatbelts when available
                  </li>
                  <li class="mb-2">
                    <i class="fa-solid fa-check me-2 text-success"></i>
                    Follow driver's instructions
                  </li>
                  <li class="mb-2">
                    <i class="fa-solid fa-check me-2 text-success"></i>
                    Maintain discipline in the bus
                  </li>
                  <li class="mb-2">
                    <i class="fa-solid fa-check me-2 text-success"></i>
                    Report any issues immediately
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-check me-2 text-success"></i>
                    Respect fellow passengers
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="elev-card p-4 h-100">
                <h4 class="h6 text-uppercase text-muted mb-3">Payment Information</h4>
                <ul class="list-unstyled mb-0">
                  <li class="mb-2">
                    <i class="fa-solid fa-calendar me-2 text-primary"></i>
                    Annual fee payment (₹12,000 - ₹27,500)
                  </li>
                  <li class="mb-2">
                    <i class="fa-solid fa-route me-2 text-success"></i>
                    Route-based pricing structure
                  </li>
                  <li class="mb-2">
                    <i class="fa-solid fa-receipt me-2 text-warning"></i>
                    Receipt provided for payments
                  </li>
                  <li class="mb-2">
                    <i class="fa-solid fa-clock me-2 text-info"></i>
                    Payment before academic year starts
                  </li>
                  <li class="mb-0">
                    <i class="fa-solid fa-info-circle me-2 text-secondary"></i>
                    Contact transport office for booking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <section class="my-5">
          <div class="elev-card p-4 p-md-5 contact-card">
            <h2 class="section-title h4">Contact — Transportation</h2>
            <p class="section-subtitle">We're here to help with your transportation needs</p>
            
            <div class="row g-4 mt-3">
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-map-marker-alt text-primary me-2"></i>
                  <strong>Location:</strong> SSIT Campus, Khammam
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-envelope text-success me-2"></i>
                  <strong>Email:</strong> transport@ssit.edu.in
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-phone text-warning me-2"></i>
                  <strong>Phone:</strong> +91-98765-43210
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-clock text-info me-2"></i>
                  <strong>Office Hours:</strong> 8:00 AM - 5:00 PM
                </div>
                <div class="contact-chip mb-3">
                  <i class="fa-solid fa-calendar text-primary me-2"></i>
                  <strong>Days:</strong> Monday - Saturday
                </div>
                <div class="contact-chip">
                  <i class="fa-solid fa-user-tie text-success me-2"></i>
                  <strong>Contact:</strong> Transport Manager
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

export default {
  name: 'Transportation',
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      stats: [
        { value: "Fleet", label: "College Buses", icon: "fa-solid fa-bus fa-lg text-primary" },
        { value: "Safe", label: "Transportation", icon: "fa-solid fa-shield-halved fa-lg text-success" },
        { value: "Multiple", label: "Routes", icon: "fa-solid fa-route fa-lg text-warning" },
        { value: "Reasonable", label: "Charges", icon: "fa-solid fa-dollar-sign fa-lg text-info" },
      ],
      selectedRoute: '',
      searchTerm: '',
      priceRange: '',
      busFees: [
        // Alamuru to College
        { id: 1, route: 'Alamuru to College', pickupPoint: 'Adavinekkal', amount: 24000 },
        { id: 2, route: 'Alamuru to College', pickupPoint: 'Adavinekkal (Notice)', amount: 23500 },
        { id: 3, route: 'Alamuru to College', pickupPoint: 'Kakarla', amount: 22500 },
        { id: 4, route: 'Alamuru to College', pickupPoint: 'Kottagudem', amount: 18000 },
        { id: 5, route: 'Alamuru to College', pickupPoint: 'Palvancha', amount: 24500 },
        { id: 6, route: 'Alamuru to College', pickupPoint: 'Sathupalli', amount: 12000 },
        
        // Ashwaraopeta to College
        { id: 7, route: 'Ashwaraopeta to College', pickupPoint: 'Adavinekkal', amount: 24000 },
        { id: 8, route: 'Ashwaraopeta to College', pickupPoint: 'Banjara', amount: 24000 },
        { id: 9, route: 'Ashwaraopeta to College', pickupPoint: 'Koyagudem', amount: 21500 },
        { id: 10, route: 'Ashwaraopeta to College', pickupPoint: 'Rajupeta', amount: 24500 },
        { id: 11, route: 'Ashwaraopeta to College', pickupPoint: 'Sathupalli', amount: 16000 },
        { id: 12, route: 'Ashwaraopeta to College', pickupPoint: 'Banjara (2nd)', amount: 19000 },
        
        // Vattiagudam to College
        { id: 13, route: 'Vattiagudam to College', pickupPoint: 'Vattiagudam', amount: 24500 },
        { id: 14, route: 'Vattiagudam to College', pickupPoint: 'Duppalagudem/Vattiagudem', amount: 24000 },
        { id: 15, route: 'Vattiagudam to College', pickupPoint: 'Sarapaka', amount: 14000 },
        { id: 16, route: 'Vattiagudam to College', pickupPoint: 'Gollagudem', amount: 14000 },
        { id: 17, route: 'Vattiagudam to College', pickupPoint: 'Godavarikhani/Sathupally', amount: 14000 },
        { id: 18, route: 'Vattiagudam to College', pickupPoint: 'CMR Nagar/Sathupally', amount: 14000 },
        
        // Thirumalapalem to College
        { id: 19, route: 'Thirumalapalem to College', pickupPoint: 'Thirumalapalem/Asupeta', amount: 26500 },
        { id: 20, route: 'Thirumalapalem to College', pickupPoint: 'Rajupeta', amount: 24000 },
        { id: 21, route: 'Thirumalapalem to College', pickupPoint: 'Pinapaka', amount: 23500 },
        { id: 22, route: 'Thirumalapalem to College', pickupPoint: 'Maddupalem', amount: 15000 },
        { id: 23, route: 'Thirumalapalem to College', pickupPoint: 'Sathupalli', amount: 12000 },
        { id: 24, route: 'Thirumalapalem to College', pickupPoint: 'Mathakala', amount: 14500 },
        
        // Kalluru to College
        { id: 25, route: 'Kalluru to College', pickupPoint: 'Banjara', amount: 24500 },
        { id: 26, route: 'Kalluru to College', pickupPoint: 'Telikapalli', amount: 22500 },
        { id: 27, route: 'Kalluru to College', pickupPoint: 'Rajupeta', amount: 23500 },
        { id: 28, route: 'Kalluru to College', pickupPoint: 'Koyagudem', amount: 23000 },
        { id: 29, route: 'Kalluru to College', pickupPoint: 'Rajupeta (2nd)', amount: 23500 },
        { id: 30, route: 'Kalluru to College', pickupPoint: 'Mathakala', amount: 22600 },
        
        // Bachunapalli, Bummapeta to College
        { id: 31, route: 'Bachunapalli to College', pickupPoint: 'Bachunapalli', amount: 24500 },
        { id: 32, route: 'Bummapeta to College', pickupPoint: 'Bummapeta', amount: 18500 },
        { id: 33, route: 'Bummapeta to College', pickupPoint: 'Mathakala', amount: 15000 },
        { id: 34, route: 'Bummapeta to College', pickupPoint: 'Madumalla', amount: 14000 },
        
        // Erragunta to College
        { id: 35, route: 'Erragunta to College', pickupPoint: 'Erragunta', amount: 23500 },
        { id: 36, route: 'Erragunta to College', pickupPoint: 'Penuballi', amount: 22500 },
        { id: 37, route: 'Erragunta to College', pickupPoint: 'Rajupeta', amount: 24500 },
        { id: 38, route: 'Erragunta to College', pickupPoint: 'Kothagudem', amount: 18500 },
        { id: 39, route: 'Erragunta to College', pickupPoint: 'Lingalagudem', amount: 20500 },
        { id: 40, route: 'Erragunta to College', pickupPoint: 'Sathupalli', amount: 12000 },
        { id: 41, route: 'Erragunta to College', pickupPoint: 'Kakarla', amount: 27500 },
        { id: 42, route: 'Erragunta to College', pickupPoint: 'Notupally', amount: 12000 }
      ],
      filteredFees: []
    };
  },
  computed: {
    routes() {
      return [...new Set(this.busFees.map(fee => fee.route))];
    }
  },
  methods: {
    filterFees() {
      let filtered = this.busFees;
      
      // Filter by route
      if (this.selectedRoute) {
        filtered = filtered.filter(fee => fee.route === this.selectedRoute);
      }
      
      // Filter by search term
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase();
        filtered = filtered.filter(fee => 
          fee.pickupPoint.toLowerCase().includes(term) ||
          fee.route.toLowerCase().includes(term)
        );
      }
      
      // Filter by price range
      if (this.priceRange) {
        switch (this.priceRange) {
          case 'low':
            filtered = filtered.filter(fee => fee.amount >= 12000 && fee.amount < 18000);
            break;
          case 'medium':
            filtered = filtered.filter(fee => fee.amount >= 18000 && fee.amount < 24000);
            break;
          case 'high':
            filtered = filtered.filter(fee => fee.amount >= 24000);
            break;
        }
      }
      
      this.filteredFees = filtered;
    }
  },
  mounted() {
    // Initialize filtered fees with all data
    this.filteredFees = this.busFees;
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

/* Fee Card Styling */
.fee-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0,0,0,0.05);
}

.fee-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(0,0,0,.12) !important;
}

.form-select, .form-control {
  border: 1px solid #dee2e6;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-select:focus, .form-control:focus {
  border-color: var(--ink);
  box-shadow: 0 0 0 0.2rem rgba(11, 61, 145, 0.25);
  outline: 0;
}

.badge {
  font-size: 0.75rem;
  font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero { padding: 1.5rem 0 1rem; }
  .hero .display-5 { font-size: 2rem; }
  .content { padding: 0.5rem 0 2rem; }
  .elev-card { padding: 1.5rem !important; }
}
</style>