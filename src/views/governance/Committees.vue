<template>
  <div class="committees-page">
    <!-- HEADER + NAV -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero">
      <div class="container text-center">
        <h1 class="title">Institute Level Committees</h1>
        <p class="subtitle">Ensuring Excellence Through Structured Governance</p>
        <p class="context">
          At Sai Spurthi Institute of Technology, committees strengthen governance, uphold quality,
          and safeguard student welfare. Explore roles, coordinators, and how to get support.
        </p>
      </div>
    </header>

    <!-- Controls: Search + Filters + Sort -->
    <section class="controls container" aria-label="Filters and sorting">
      <div class="controls-row">
        <div class="search-box">
          <label for="search" class="visually-hidden">Search committees</label>
          <input
            id="search"
            v-model="q"
            type="search"
            class="input"
            placeholder="Search by committee or coordinator…"
            @keydown.enter.prevent
            aria-label="Search committees by name or coordinator"
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div class="filters">
          <div class="filter-select">
            <label for="category-filter" class="visually-hidden">Filter by category</label>
            <select 
              id="category-filter"
              v-model="selectedCategory" 
              @change="updateCategoryFilter"
              aria-label="Filter by category"
            >
              <option value="">All Categories</option>
              <option 
                v-for="c in categories" 
                :key="c.key" 
                :value="c.key"
              >
                {{ c.label }}
              </option>
            </select>
            <i class="fa-solid fa-filter"></i>
          </div>

          <div class="sort-select">
            <label for="sort-select" class="visually-hidden">Sort committees</label>
            <select 
              id="sort-select"
              v-model="sortBy" 
              aria-label="Sort committees"
            >
              <option value="name-asc">Sort: A → Z</option>
              <option value="name-desc">Sort: Z → A</option>
              <option value="category">Sort: Category</option>
            </select>
            <i class="fa-solid fa-arrow-up-a-z"></i>
          </div>
        </div>
      </div>
      <div class="result-meta" role="status" aria-live="polite">
        Showing {{ filtered.length }} of {{ committees.length }} committees
      </div>
    </section>

    <!-- Grid of Committee Cards -->
    <section class="container grid" aria-label="Committee cards">
      <article
        v-for="(c, i) in paged"
        :key="c.id"
        class="card"
        :class="['cat-' + c.category]"
        tabindex="0"
        @keydown.enter.prevent="toggleOpen(c.id)"
        @keydown.space.prevent="toggleOpen(c.id)"
        :aria-expanded="openId === c.id ? 'true' : 'false'"
      >
        <header class="card-head">
          <div class="icon-wrap" :style="{ background: categoryColor(c.category) }" aria-hidden="true">
            <i :class="c.icon"></i>
          </div>
          <div class="title-block">
            <h3 class="card-title">{{ c.name }}</h3>
            <span class="badge">{{ categoryLabel(c.category) }}</span>
          </div>
        </header>

        <div class="card-body">
          <div class="coordinator">
            <i class="fa-solid fa-user-tie" aria-hidden="true"></i>
            <div>
              <div class="coord-name">{{ c.coordinator }}</div>
              <div class="coord-title">Coordinator</div>
            </div>
          </div>

          <ul class="contact-list">
            <li>
              <i class="fa-solid fa-envelope"></i>
              <a :href="`mailto:${c.email}`" :aria-label="`Email ${c.coordinator}`">{{ c.email }}</a>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a :href="`tel:${c.mobile}`" :aria-label="`Call ${c.coordinator}`">{{ c.mobile }}</a>
            </li>
          </ul>

          <p class="desc">
            {{ c.description }}
          </p>

          <div class="btn-row">
            <router-link 
              :to="getCommitteeRoute(c)" 
              class="btn view-btn"
              :aria-label="`View detailed information for ${c.name}`"
            >
              <i class="fa-solid fa-eye"></i>
              <span>View Details</span>
            </router-link>
            <div class="share-row" aria-label="Share">
              <a
                class="share"
                :href="mailtoLink(c)"
                :aria-label="`Share ${c.name} via email`"
              ><i class="fa-regular fa-paper-plane"></i></a>
              <a
                class="share"
                :href="`https://wa.me/?text=${encodeURIComponent(shareText(c))}`"
                target="_blank" rel="noopener"
                aria-label="Share on WhatsApp"
              ><i class="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <transition name="expand">
          <section
            v-if="openId === c.id"
            class="card-details"
            :id="`details-${c.id}`"
            role="region"
            :aria-label="`${c.name} details`"
          >
            <div class="detail-grid">
              <div>
                <h4>Purpose & Responsibilities</h4>
                <p>{{ c.purpose }}</p>
              </div>
              <div>
                <h4>Meeting Schedule</h4>
                <ul>
                  <li v-for="(m, mi) in c.meetings" :key="mi">{{ m }}</li>
                </ul>
              </div>
              <div>
                <h4>How Students Can Reach</h4>
                <ul>
                  <li>Email the coordinator or visit the department office.</li>
                  <li>Use the institute grievance/feedback portal when applicable.</li>
                  <li>Attend open hours listed above.</li>
                </ul>
              </div>
              <div>
                <h4>Reporting</h4>
                <p>{{ c.reporting }}</p>
              </div>
            </div>

            <div v-if="c.achievements?.length" class="achievements">
              <h4>Recent Initiatives</h4>
              <ul>
                <li v-for="(a, ai) in c.achievements" :key="ai">{{ a }}</li>
              </ul>
            </div>
          </section>
        </transition>
      </article>
    </section>

    <!-- Pagination (if needed later) -->
    <div class="container pagination" v-if="filtered.length > pageSize">
      <button class="pg-btn" :disabled="page===1" @click="page--" aria-label="Previous page">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <span>Page {{ page }} / {{ totalPages }}</span>
      <button class="pg-btn" :disabled="page===totalPages" @click="page++" aria-label="Next page">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>

    <!-- Quick Contact Panel -->
    <aside class="quick-contacts">
      <div class="container">
        <div class="qc-card">
          <div class="qc-head">
            <h2 class="section-title">
              <i class="fa-solid fa-address-book"></i>
              <span>Quick Contacts (Coordinators)</span>
            </h2>
            <a class="btn dl" href="#" @click.prevent="downloadQuickContactsPDF" title="Download Quick Contacts PDF">
              <i class="fa-solid fa-download"></i>
              <span>Download PDF</span>
            </a>
          </div>
          <div class="qc-grid">
            <div v-for="c in filtered" :key="`qc-${c.id}`" class="qc-item">
              <div class="qc-header-item">
                <div class="qc-icon" :style="{ background: categoryColor(c.category) }">
                  <i :class="c.icon"></i>
                </div>
                <div class="qc-info">
                  <h3 class="qc-name">{{ c.name }}</h3>
                  <p class="qc-coordinator">{{ c.coordinator }}</p>
                </div>
              </div>
              <div class="qc-contact">
                <a :href="`mailto:${c.email}`" class="qc-link">
                  <i class="fa-solid fa-envelope"></i>
                  <span>{{ c.email }}</span>
                </a>
                <a :href="`tel:${c.mobile}`" class="qc-link">
                  <i class="fa-solid fa-phone"></i>
                  <span>{{ c.mobile }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Recent Activities -->
    <section class="updates">
      <div class="container">
        <h2 class="section-title">
          <i class="fa-solid fa-newspaper"></i>
          <span>Recent Committee Activities</span>
        </h2>
        <div class="updates-grid">
          <article v-for="(u, i) in updates" :key="i" class="update-card">
            <div class="update-header">
              <div class="update-icon">
                <i class="fa-solid fa-calendar-check"></i>
              </div>
              <div class="update-meta">
                <span class="update-date">{{ u.date }}</span>
                <span class="update-committee">{{ u.committee }}</span>
              </div>
            </div>
            <h3 class="u-title">{{ u.title }}</h3>
            <p class="update-summary">{{ u.summary }}</p>
            <a href="#" class="u-link">
              <i class="fa-solid fa-arrow-right"></i>
              <span>Read more</span>
            </a>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="page-footer">
      <div class="container">
        <div class="assistance-section">
          <div class="assistance-card">
            <div class="assistance-icon">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div class="assistance-content">
              <h3>Need Assistance?</h3>
              <p>For committee-related queries, write to <a href="mailto:committees@saispurthi.ac.in">committees@saispurthi.ac.in</a> or contact the respective coordinator.</p>
              <div class="assistance-actions">
                <a href="mailto:committees@saispurthi.ac.in" class="assistance-btn">
                  <i class="fa-solid fa-envelope"></i>
                  <span>Email Us</span>
                </a>
                <a href="tel:+919876543210" class="assistance-btn">
                  <i class="fa-solid fa-phone"></i>
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: "Committees",
  components: {
    Header,
    NavBar,
    Footer
  },
  data() {
    return {
      // UI state
      q: "",
      selectedCategory: "",
      sortBy: "name-asc",
      openId: null,
      page: 1,
      pageSize: 12,

      // Categories (for chips)
      categories: [
        { key: "governance", label: "Governance", color: "#1e40af", icon: "fa-solid fa-shield-halved" },
        { key: "academic", label: "Academic", color: "#0f766e", icon: "fa-solid fa-microscope" },
        { key: "welfare", label: "Student Welfare", color: "#7c3aed", icon: "fa-solid fa-people-roof" },
        { key: "development", label: "Development", color: "#f97316", icon: "fa-solid fa-rocket" },
        { key: "outreach", label: "Outreach", color: "#ae3a1e", icon: "fa-solid fa-handshake-angle" },
      ],

      // Committees data (12 total)
      committees: [
        {
          id: 1,
          name: "Anti Ragging Cell",
          coordinator: "Dr. Sk. Meera Saheb",
          email: "shaikmeerasaheb7@gmail.com",
          mobile: "9705519877",
          category: "welfare",
          icon: "fa-solid fa-shield",
          description:
            "Prevents ragging and ensures a safe, respectful campus environment; handles complaints and awareness.",
          purpose:
            "Implement anti-ragging policies, conduct awareness, respond to incidents, and coordinate with authorities.",
          meetings: ["Monthly review", "Emergency as required"],
          reporting: "Reports to Principal & Governing Body",
          achievements: ["Campus-wide zero-tolerance drives", "Anonymous reporting channel launched"],
        },
        {
          id: 2,
          name: "Research & Development Cell",
          coordinator: "Dr. K Bhaskaramutyalu",
          email: "kbmutyalu@gmail.com",
          mobile: "7386055277",
          category: "academic",
          icon: "fa-solid fa-microscope",
          description: "Promotes research culture, proposals, publications, and collaborations.",
          purpose:
            "Mentor faculty/student research, facilitate grants, IPR, and linkages with research bodies.",
          meetings: ["Bi-monthly review", "Grant proposal workshops"],
          reporting: "Reports to Academic Council",
          achievements: ["5 sponsored projects facilitated", "3 patents filed"],
        },
        {
          id: 3,
          name: "SC/ST Cell",
          coordinator: "Dr. P Sekharbabu",
          email: "suma.sekher3@gmail.com",
          mobile: "9492961538",
          category: "welfare",
          icon: "fa-solid fa-people-group",
          description: "Supports SC/ST students’ welfare, scholarships, and grievance redressal.",
          purpose:
            "Ensure equitable access to scholarships, support services, and address discrimination complaints.",
          meetings: ["Quarterly review", "Helpdesk every Friday 3–5 PM"],
          reporting: "Reports to Principal & University Liaison Office",
          achievements: ["Scholarship facilitation drives", "Mentorship pods for first-years"],
        },
        {
          id: 4,
          name: "Women Empowerment Cell",
          coordinator: "Mrs. D. Sridevi",
          email: "sridevi.dosapatti@gmail.com",
          mobile: "9059433053",
          category: "welfare",
          icon: "fa-solid fa-venus",
          description:
            "Empowers women through awareness, safety training, and leadership initiatives.",
          purpose:
            "Conduct programs on safety, health, legal rights; provide counseling and support.",
          meetings: ["Monthly planning", "Self-defense workshop cycles"],
          reporting: "Reports to Principal",
          achievements: ["Annual Women in Tech conclave", "Health & wellness camps"],
        },
        {
          id: 5,
          name: "Entrepreneurship Development Cell",
          coordinator: "Dr. D.N.V. Krishna Reddy",
          email: "drdnvkreddy@gmail.com",
          mobile: "9951006189",
          category: "development",
          icon: "fa-solid fa-rocket",
          description: "Fosters entrepreneurship mindset, incubation, and startup mentoring.",
          purpose:
            "Organize bootcamps, link students to incubators, and facilitate seed funding connects.",
          meetings: ["Monthly meetups", "Demo days at semester end"],
          reporting: "Reports to Innovation & Incubation Board",
          achievements: ["Campus startup challenge", "2 pre-incubated teams"],
        },
        {
          id: 6,
          name: "Grievance Redressal & Internal Compliance Cell",
          coordinator: "Mr. T Veeranna",
          email: "veeru38@gmail.com",
          mobile: "9948871778",
          category: "governance",
          icon: "fa-solid fa-life-ring",
          description:
            "Addresses grievances and ensures statutory compliance with institutional policies.",
          purpose:
            "Receive and resolve grievances fairly; ensure POSH and regulatory compliance.",
          meetings: ["Fortnightly review", "Immediate convene for sensitive cases"],
          reporting: "Reports to Governing Body",
          achievements: ["Online grievance portal roll-out", "SLA-based resolution tracking"],
        },
        {
          id: 7,
          name: "Industry Institute Interaction Cell",
          coordinator: "Dr. D.N.V. Krishna Reddy",
          email: "drdnvkreddy@gmail.com",
          mobile: "9951006189",
          category: "outreach",
          icon: "fa-solid fa-handshake",
          description:
            "Builds partnerships with industry for internships, projects, and placements.",
          purpose:
            "Arrange MoUs, guest lectures, live projects, and industry visits for experiential learning.",
          meetings: ["Monthly partner sync", "Quarterly MoU review"],
          reporting: "Reports to Placement & Training Office",
          achievements: ["3 new MoUs this year", "Industry lecture series launched"],
        },
        {
          id: 8,
          name: "Institution Innovation Cell",
          coordinator: "Mr. N. Venkateswara Rao",
          email: "nallanti2@gmail.com",
          mobile: "9951734877",
          category: "development",
          icon: "fa-solid fa-lightbulb",
          description:
            "Drives innovation challenges, design thinking, and IP awareness.",
          purpose:
            "Conduct hackathons, IPR sessions, and mentor innovation projects.",
          meetings: ["Monthly ideation forums", "IPR clinic bi-monthly"],
          reporting: "Reports to Innovation Council",
          achievements: ["Campus hackathon with 200+ participants", "Prototype showcase day"],
        },
        {
          id: 9,
          name: "IQAC - Internal Quality Assurance Cell",
          coordinator: "Mr. K Rama Krishna Prasad",
          email: "ramakrishna.pe@gmail.com",
          mobile: "9154645060",
          category: "governance",
          icon: "fa-solid fa-certificate",
          description:
            "Assures and enhances academic and administrative quality standards.",
          purpose:
            "Design quality benchmarks, conduct audits, collect stakeholder feedback, and publish AQAR.",
          meetings: ["Quarterly IQAC meets", "Annual academic audit"],
          reporting: "Reports to Governing Body/NAAC",
          achievements: ["Outcome-based education initiatives", "Online feedback dashboards"],
        },
        {
          id: 10,
          name: "Minority Cell",
          coordinator: "Dr. Sk. Meera Saheb",
          email: "shaikmeerasaheb7@gmail.com",
          mobile: "9705519877",
          category: "welfare",
          icon: "fa-solid fa-hands-praying",
          description:
            "Facilitates support and welfare measures for minority students.",
          purpose:
            "Awareness on schemes, address grievances, ensure inclusive practices.",
          meetings: ["Quarterly review", "Open desk first Monday monthly"],
          reporting: "Reports to Principal",
          achievements: ["Scholarship awareness drives", "Mentoring cohorts"],
        },
        {
          id: 11,
          name: "National Service Scheme (NSS) Cell",
          coordinator: "Mr. B. Seetaramulu",
          email: "seetharam0528@gmail.com",
          mobile: "9010007914",
          category: "outreach",
          icon: "fa-solid fa-people-carry-box",
          description:
            "Promotes volunteerism and community service initiatives.",
          purpose:
            "Plan NSS camps, blood donation drives, environmental and social outreach.",
          meetings: ["Event-based planning", "Annual NSS camp schedule"],
          reporting: "Reports to NSS University Coordinator",
          achievements: ["Tree plantation week", "Village literacy campaign"],
        },
        {
          id: 12,
          name: "OBC Cell",
          coordinator: "Mr. Ch. Balakrishna",
          email: "balu.cheepu@gmail.com",
          mobile: "9705183832",
          category: "welfare",
          icon: "fa-solid fa-users-line",
          description:
            "Supports OBC students with schemes, counseling, and grievance handling.",
          purpose:
            "Facilitate scholarships, foster inclusive campus, and respond to grievances.",
          meetings: ["Quarterly review", "Helpdesk every Wednesday 2–4 PM"],
          reporting: "Reports to Principal",
          achievements: ["Scholarship facilitation counter", "Peer support network"],
        },
      ],

      // Recent updates (sample)
      updates: [
        {
          title: "Awareness Session on Anti-Ragging Guidelines",
          committee: "Anti Ragging Cell",
          date: "Aug 28, 2025",
          summary: "Campus-wide seminar covering reporting procedures and student rights.",
        },
        {
          title: "Innovation Sprint Winners Announced",
          committee: "Institution Innovation Cell",
          date: "Aug 19, 2025",
          summary: "Top 5 teams showcased prototypes; mentorship round begins next week.",
        },
        {
          title: "IQAC Quarterly Review Completed",
          committee: "IQAC",
          date: "Aug 10, 2025",
          summary: "Action items issued for curriculum mapping and lab audits.",
        },
      ],
    };
  },
  computed: {
    filtered() {
      // Search
      const term = this.q.trim().toLowerCase();
      let arr = this.committees.filter((c) => {
        const hay = `${c.name} ${c.coordinator} ${c.email} ${c.mobile}`.toLowerCase();
        const matchesSearch = !term || hay.includes(term);
        const matchesCat = !this.selectedCategory || c.category === this.selectedCategory;
        return matchesSearch && matchesCat;
      });

      // Sort
      if (this.sortBy === "name-asc") {
        arr.sort((a, b) => a.name.localeCompare(b.name));
      } else if (this.sortBy === "name-desc") {
        arr.sort((a, b) => b.name.localeCompare(a.name));
      } else if (this.sortBy === "category") {
        arr.sort((a, b) =>
          this.categoryLabel(a.category).localeCompare(this.categoryLabel(b.category)) ||
          a.name.localeCompare(b.name)
        );
      }
      return arr;
    },
    totalPages() {
      return Math.max(1, Math.ceil(this.filtered.length / this.pageSize));
    },
    paged() {
      const start = (this.page - 1) * this.pageSize;
      return this.filtered.slice(start, start + this.pageSize);
    },
    lastUpdated() {
      // adjust date as needed
      return "September 16, 2025";
    },
    lastUpdatedISO() {
      return "2025-09-16";
    },
  },
  watch: {
    q() { this.resetPage(); },
    selectedCategory() { this.resetPage(); },
    sortBy() { this.resetPage(); },
  },
  methods: {
    resetPage() {
      this.page = 1;
    },
    updateCategoryFilter() {
      this.resetPage();
    },
    toggleOpen(id) {
      this.openId = this.openId === id ? null : id;
    },
    categoryLabel(key) {
      return this.categories.find((c) => c.key === key)?.label || "Other";
    },
    categoryColor(key) {
      return this.categories.find((c) => c.key === key)?.color || "#94a3b8";
    },
    mailtoLink(c) {
      const subject = encodeURIComponent(`Inquiry: ${c.name} (SSIT)`);
      const body = encodeURIComponent(`Dear ${c.coordinator},\n\nI would like to know more about ${c.name}.\n\nRegards,\n`);
      return `mailto:${c.email}?subject=${subject}&body=${body}`;
    },
    shareText(c) {
      return `${c.name} — Coordinator: ${c.coordinator} (${c.email}, ${c.mobile}) — SSIT`;
    },
    downloadQuickContactsPDF() {
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      
      // Get current date for the PDF
      const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      // Generate HTML content for PDF
      const pdfContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Quick Contacts - SSIT Committees</title>
          <style>
            @page {
              margin: 0.5in;
              size: A4 landscape;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
            }
            .header {
              text-align: center;
              margin-bottom: 1.5rem;
              border-bottom: 2px solid #1e40af;
              padding-bottom: 0.75rem;
            }
            .header h1 {
              color: #1e40af;
              margin: 0;
              font-size: 1.8rem;
            }
            .header p {
              margin: 0.3rem 0 0 0;
              color: #666;
              font-size: 1rem;
            }
            .contacts-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 0.75rem;
              margin-top: 1rem;
            }
            .contact-item {
              border: 1px solid #e5e7eb;
              border-radius: 6px;
              padding: 0.75rem;
              background: #f9fafb;
              page-break-inside: avoid;
              min-height: 120px;
            }
            .contact-header {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 0.5rem;
            }
            .contact-icon {
              width: 32px;
              height: 32px;
              border-radius: 6px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 1rem;
            }
            .contact-info h3 {
              margin: 0;
              font-size: 0.9rem;
              color: #1e40af;
              line-height: 1.2;
            }
            .contact-info p {
              margin: 0;
              font-size: 0.8rem;
              color: #666;
              font-weight: 600;
            }
            .contact-details {
              display: flex;
              flex-direction: column;
              gap: 0.3rem;
            }
            .contact-detail {
              display: flex;
              align-items: center;
              gap: 0.4rem;
              font-size: 0.8rem;
            }
            .contact-detail i {
              width: 14px;
              color: #1e40af;
            }
            .footer {
              margin-top: 2rem;
              text-align: center;
              font-size: 0.9rem;
              color: #666;
              border-top: 1px solid #e5e7eb;
              padding-top: 1rem;
            }
            @media print {
              .contacts-grid {
                grid-template-columns: repeat(3, 1fr);
              }
              .contact-item {
                page-break-inside: avoid;
                break-inside: avoid;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Quick Contacts - Committee Coordinators</h1>
            <p>Sai Spurthi Institute of Technology</p>
            <p>Generated on: ${currentDate}</p>
          </div>
          
          <div class="contacts-grid">
            ${this.filtered.map(committee => `
              <div class="contact-item">
                <div class="contact-header">
                  <div class="contact-icon" style="background-color: ${this.categoryColor(committee.category)}">
                    <i class="${committee.icon}"></i>
                  </div>
                  <div class="contact-info">
                    <h3>${committee.name}</h3>
                    <p>${committee.coordinator}</p>
                  </div>
                </div>
                <div class="contact-details">
                  <div class="contact-detail">
                    <i class="fa-solid fa-envelope"></i>
                    <span>${committee.email}</span>
                  </div>
                  <div class="contact-detail">
                    <i class="fa-solid fa-phone"></i>
                    <span>${committee.mobile}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <div class="footer">
            <p>For more information, visit: www.saispurthi.ac.in</p>
            <p>This document contains contact information for ${this.filtered.length} committee coordinators</p>
          </div>
        </body>
        </html>
      `;
      
      // Write content to the new window
      printWindow.document.write(pdfContent);
      printWindow.document.close();
      
      // Wait for content to load, then trigger print dialog
      printWindow.onload = function() {
        printWindow.print();
        // Close the window after printing
        printWindow.onafterprint = function() {
          printWindow.close();
        };
      };
    },
    getCommitteeRoute(c) {
      // Handle specific committee routes
      if (c.name === "Anti Ragging Cell") {
        return "/anti-ragging-cell";
      }
      if (c.name === "Research & Development Cell") {
        return "/rd-cell";
      }
      if (c.name === "SC/ST Cell") {
        return "/scst-cell";
      }
      if (c.name === "Women Empowerment Cell") {
        return "/women-empowerment-cell";
      }
      if (c.name === "Entrepreneurship Development Cell") {
        return "/entrepreneurship-cell";
      }
      if (c.name === "Grievance Redressal & Internal Compliance Cell") {
        return "/grievance-cell";
      }
      
      // Generate a URL-friendly slug from committee name for other committees
      const slug = c.name
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .trim();
      return `/committee/${slug}`;
    },
  },
};
</script>

<style scoped>
/* ---------- THEME ---------- */
:root {
  --orange: #FF7701;
  --ink: #1a2238;
  --primary: #1e40af;     /* Institution blue */
  --accent:  #FF7701;     /* Orange accent */
  --ok:      #0f766e;
  --purple:  #7c3aed;
  --outreach:#ae3a1e;
  --bg:      #f7f8fb;
  --text:    #1f2937;
  --muted:   #6b7280;
  --card:    #ffffff;
  --border:  #e5e7eb;
}

/* ---------- GLOBAL ---------- */
.committees-page { background: var(--bg); color: var(--text); }
.container { width: min(1200px, 92%); margin-inline: auto; }
.visually-hidden { position: absolute; left: -10000px; }


/* ---------- HERO ---------- */
.hero { 
  background: var(--ink); 
  color: white; 
  padding: 3rem 0; 
  margin-bottom: 2rem; 
  text-align: center; 
}
.container { 
  width: min(1200px, 92%); 
  margin: auto; 
  padding: 0 1rem; 
}
.title { 
  font-weight: 800; 
  font-size: 2.2rem; 
  margin: 0 0 0.3rem 0; 
  color: white; 
}
.subtitle { 
  font-size: 1.1rem; 
  margin-bottom: 0.3rem; 
  opacity: 0.9; 
  color: white; 
}
.context { 
  font-size: 0.9rem; 
  margin-bottom: 0.5rem; 
  opacity: 0.9; 
  color: white; 
  max-width: 640px; 
  margin: 0 auto; 
  line-height: 1.5; 
}

/* ---------- CONTROLS ---------- */
.controls { padding: 1.25rem 0 0.5rem; }
.controls-row { display: flex; flex-wrap: wrap; gap: .75rem 1rem; align-items: center; justify-content: space-between; }
.search-box { position: relative; flex: 1 1 280px; }
.search-box .input {
  width: 100%; padding: .8rem 2.5rem .8rem 1rem; border-radius: .75rem;
  border: 1px solid var(--border); background: #fff; font-size: 1rem;
}
.search-box i { position: absolute; right: .9rem; top: 50%; transform: translateY(-50%); color: var(--muted); }
.filters { display: flex; gap: .75rem 1rem; align-items: center; flex-wrap: wrap; }
.filter-select { position: relative; }
.filter-select select {
  appearance: none; padding: .6rem 2.2rem .6rem .8rem; border-radius: .6rem; border: 1px solid var(--border);
  background: #fff; color: var(--text); min-width: 150px;
}
.filter-select i { position: absolute; right: .6rem; top: 50%; transform: translateY(-50%); color: var(--muted); }
.sort-select { position: relative; }
.sort-select select {
  appearance: none; padding: .6rem 2.2rem .6rem .8rem; border-radius: .6rem; border: 1px solid var(--border);
  background: #fff; color: var(--text);
}
.sort-select i { position: absolute; right: .6rem; top: 50%; transform: translateY(-50%); color: var(--muted); }
.result-meta { padding: .5rem 0 .75rem; color: var(--muted); }

/* ---------- GRID & CARD ---------- */
.grid { display: grid; gap: 1rem; padding: 1rem 0 2rem; grid-template-columns: repeat(3, 1fr); }
.card {
  background: var(--card); border: 1px solid var(--border); border-radius: 1rem; overflow: hidden;
  box-shadow: 0 8px 30px rgba(2, 6, 23, .04); outline: none;
  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease;
}
.card:hover, .card:focus { transform: translateY(-2px); border-color: #cbd5e1; box-shadow: 0 14px 40px rgba(2, 6, 23, .07); }
.card-head { display: grid; grid-template-columns: auto 1fr; gap: 1rem; padding: 1rem 1rem .5rem; align-items: center; border-bottom: 1px solid var(--border); }
.icon-wrap { width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; color: #fff; }
.icon-wrap i { font-size: 1.25rem; }
.title-block { display: flex; align-items: center; gap: .5rem; justify-content: space-between; }
.card-title { font-size: 1.05rem; margin: 0; font-weight: 700; }
.badge { font-size: .75rem; color: #fff; background: var(--accent); padding: .25rem .5rem; border-radius: .35rem; }
.card-body { padding: 1rem; display: grid; gap: .75rem; }
.coordinator { display: flex; gap: .75rem; align-items: center; }
.coordinator i{ color: var(--primary); }
.coord-name { font-weight: 700; }
.coord-title { color: var(--muted); font-size: .9rem; }
.contact-list { list-style: none; padding: 0; margin: 0; display: grid; gap: .35rem; }
.contact-list a { color: var(--primary); text-decoration: none; }
.desc { color: #374151; margin: .25rem 0 .5rem; }
.btn-row { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  gap: .75rem; 
  flex-wrap: wrap; 
}
.btn-row .btn {
  flex-shrink: 0;
}

.btn.view-btn {
  display: inline-flex; align-items: center; gap: .5rem; background: var(--orange); color: #fff;
  border: 2px solid var(--orange); padding: .55rem .9rem; border-radius: .6rem; cursor: pointer; 
  transition: all .3s ease; text-decoration: none; font-size: 0.9rem; font-weight: 600;
}
.btn.view-btn:hover { 
  background: white; 
  color: var(--orange); 
  transform: translateY(-2px); 
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3); 
}
.btn.view-btn:active { transform: translateY(1px); }
.share-row { display: inline-flex; gap: .5rem; }
.share { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; background: #eef2ff; color: var(--primary); text-decoration: none; }
.share:hover { background: #e0e7ff; }

.card-details { padding: 1rem 1rem 1.25rem; border-top: 1px dashed var(--border); background: #fafbff; }
.detail-grid { display: grid; gap: 1rem; grid-template-columns: repeat(2, 1fr); }
.detail-grid h4 { margin: 0 0 .35rem; font-size: .95rem; color: var(--primary); }
.achievements { margin-top: .5rem; }
.achievements h4 { color: var(--primary); }

.expand-enter-active, .expand-leave-active { transition: all .2s ease; }
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
.expand-enter-to, .expand-leave-from { max-height: 600px; opacity: 1; }

/* Category color accents on cards (left border on hover) */
.card.cat-governance:hover { box-shadow: 0 14px 40px rgba(30,64,175,.15); }
.card.cat-academic:hover   { box-shadow: 0 14px 40px rgba(15,118,110,.15); }
.card.cat-welfare:hover    { box-shadow: 0 14px 40px rgba(124,58,237,.15); }
.card.cat-development:hover{ box-shadow: 0 14px 40px rgba(249,115,22,.15); }
.card.cat-outreach:hover   { box-shadow: 0 14px 40px rgba(174,58,30,.15); }

/* ---------- QUICK CONTACTS ---------- */
.quick-contacts { 
  background: var(--bg); 
  border-top: 1px solid rgba(255, 119, 1, 0.1); 
  padding: 2rem 0; 
}
.qc-card { 
  background: var(--white); 
  border: 1px solid rgba(255, 119, 1, 0.1); 
  border-radius: 12px; 
  padding: 2rem; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.qc-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
}
.qc-head { 
  display: flex; 
  align-items: center; 
  gap: .75rem; 
  justify-content: space-between; 
  margin-bottom: 1.5rem;
}
.qc-head .section-title {
  margin: 0;
  font-size: 1.8rem;
  color: var(--orange);
  display: flex;
  gap: .6rem;
  align-items: center;
}
.qc-head .section-title i {
  color: var(--orange);
  font-size: 1.5rem;
}
.btn.dl { 
  background: var(--orange); 
  color: white; 
  padding: .6rem 1rem; 
  border-radius: 8px; 
  text-decoration: none; 
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 2px solid var(--orange);
}
.btn.dl:hover {
  background: white;
  color: var(--orange);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}
.qc-grid { 
  display: grid; 
  gap: 1.5rem; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
}
.qc-item { 
  background: rgba(255, 119, 1, 0.05);
  border: 1px solid rgba(255, 119, 1, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}
.qc-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}
.qc-header-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.qc-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
}
.qc-info {
  flex: 1;
}
.qc-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.25rem 0;
}
.qc-coordinator {
  font-size: 0.9rem;
  color: var(--muted);
  margin: 0;
  font-weight: 500;
}
.qc-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.qc-link { 
  color: var(--ink); 
  text-decoration: none; 
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
.qc-link:hover {
  color: var(--orange);
  transform: translateX(3px);
}
.qc-link i {
  color: var(--orange);
  width: 16px;
}

/* ---------- UPDATES ---------- */
.updates { 
  background: var(--bg); 
  padding: 2rem 0 3rem; 
  border-top: 1px solid rgba(255, 119, 1, 0.1);
}
.updates .section-title { 
  display: flex; 
  align-items: center; 
  gap: .6rem; 
  color: var(--orange); 
  margin: 0 0 2rem; 
  font-size: 1.8rem;
  font-weight: 700;
}
.updates .section-title i {
  color: var(--orange);
  font-size: 1.5rem;
}
.updates-grid { 
  display: grid; 
  gap: 1.5rem; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
}
.update-card { 
  background: var(--white); 
  border: 1px solid rgba(255, 119, 1, 0.1); 
  border-radius: 12px; 
  padding: 1.5rem; 
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.update-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 28px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}
.update-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 119, 1, 0.1);
}
.update-icon {
  width: 40px;
  height: 40px;
  background: var(--orange);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
}
.update-meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.update-date {
  font-size: 0.85rem;
  color: var(--muted);
  font-weight: 500;
}
.update-committee {
  font-size: 0.8rem;
  color: var(--orange);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.u-title { 
  margin: 0 0 1rem; 
  font-size: 1.1rem; 
  font-weight: 700; 
  color: var(--ink);
  line-height: 1.4;
}
.update-summary {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}
.u-link { 
  color: var(--orange); 
  text-decoration: none; 
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}
.u-link:hover {
  color: var(--ink);
  transform: translateX(3px);
}
.u-link i {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}
.u-link:hover i {
  transform: translateX(2px);
}

/* ---------- FOOTER ---------- */
.page-footer { 
  background: var(--bg); 
  padding: 2rem 0; 
  border-top: 1px solid rgba(255, 119, 1, 0.1);
}
.assistance-section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.assistance-card {
  background: var(--white);
  border: 1px solid rgba(255, 119, 1, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
  transition: all 0.3s ease;
}
.assistance-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(255, 119, 1, 0.15);
  border-color: var(--orange);
}
.assistance-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--orange), #ff8c42);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 3px 12px rgba(255, 119, 1, 0.3);
}
.assistance-content {
  flex: 1;
}
.assistance-content h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 0.75rem 0;
}
.assistance-content p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.5;
  margin: 0 0 1rem 0;
}
.assistance-content a {
  color: var(--orange);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.assistance-content a:hover {
  color: var(--ink);
  text-decoration: underline;
}
.assistance-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.assistance-btn {
  background: var(--orange);
  color: white !important;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  border: 2px solid var(--orange);
}
.assistance-btn:hover {
  background: white;
  color: var(--orange) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 119, 1, 0.3);
}
.assistance-btn:hover i {
  color: var(--orange);
}
.assistance-btn:hover span {
  color: var(--orange);
}
.assistance-btn i {
  font-size: 0.9rem;
  color: white;
}
.assistance-btn span {
  color: white;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 1024px) {
  .grid, .updates-grid, .qc-grid, .detail-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-inner { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .assistance-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 1.25rem;
  }
  .assistance-icon {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
  .assistance-content h3 {
    font-size: 1.2rem;
  }
  .assistance-actions {
    justify-content: center;
  }
}
@media (max-width: 640px) {
  .grid, .updates-grid, .qc-grid, .detail-grid { grid-template-columns: 1fr; }
  .controls-row { flex-direction: column; align-items: stretch; }
  .assistance-actions {
    flex-direction: column;
    align-items: center;
  }
  .assistance-btn {
    width: 100%;
    max-width: 200px;
    justify-content: center;
  }
}

/* ---------- PRINT ---------- */
@media print {
  .breadcrumb-wrap, .controls, .quick-contacts .btn.dl, .updates, .page-footer { display: none !important; }
  .card, .qc-card { box-shadow: none; border-color: #ddd; }
  .grid { grid-template-columns: 1fr 1fr; }
}
</style>
