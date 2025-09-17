<template>
  <section class="committees-page" aria-labelledby="page-title">
    <!-- Breadcrumb -->
    <nav class="breadcrumb-wrap" aria-label="Breadcrumb">
      <ol class="breadcrumb container">
        <li><a href="/" aria-label="Home">Home</a></li>
        <li><a href="/governance" aria-label="Governance">Governance</a></li>
        <li aria-current="page">Institute Level Committees</li>
      </ol>
    </nav>

    <!-- Header / Hero -->
    <header class="hero">
      <div class="container hero-inner">
        <div>
          <h1 id="page-title" class="display-title">Institute Level Committees</h1>
          <p class="subtitle">Ensuring Excellence Through Structured Governance</p>
          <p class="intro">
            At Sai Spurthi Institute of Technology, committees strengthen governance, uphold quality,
            and safeguard student welfare. Explore roles, coordinators, and how to get support.
          </p>
        </div>
        <div class="hero-art" aria-hidden="true">
          <i class="fa-solid fa-sitemap"></i>
        </div>
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
          <fieldset class="filter-chips" aria-label="Category filters">
            <legend class="visually-hidden">Filter by category</legend>
            <button
              v-for="c in categories"
              :key="c.key"
              class="chip"
              :class="{ active: activeCats.includes(c.key) }"
              @click="toggleCat(c.key)"
              :aria-pressed="activeCats.includes(c.key)"
            >
              <i :class="c.icon" aria-hidden="true"></i>
              <span>{{ c.label }}</span>
            </button>
          </fieldset>

          <label class="sort-select">
            <span class="visually-hidden">Sort committees</span>
            <select v-model="sortBy" aria-label="Sort committees">
              <option value="name-asc">Sort: A → Z</option>
              <option value="name-desc">Sort: Z → A</option>
              <option value="category">Sort: Category</option>
            </select>
            <i class="fa-solid fa-arrow-up-a-z"></i>
          </label>
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
            <button class="btn more" @click="toggleOpen(c.id)" :aria-controls="`details-${c.id}`">
              <span v-if="openId !== c.id">More Details</span>
              <span v-else>Hide Details</span>
              <i class="fa-solid" :class="openId === c.id ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
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
            <i class="fa-solid fa-address-book"></i>
            <h2>Quick Contacts (Coordinators)</h2>
            <a class="btn dl" href="#" @click.prevent title="Download PDF (sample)">Download PDF</a>
          </div>
          <div class="qc-grid">
            <div v-for="c in filtered" :key="`qc-${c.id}`" class="qc-item">
              <strong>{{ c.name }}</strong>
              <span>— {{ c.coordinator }}</span>
              <a :href="`mailto:${c.email}`" class="qc-link">{{ c.email }}</a>
              <a :href="`tel:${c.mobile}`" class="qc-link">{{ c.mobile }}</a>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Recent Activities -->
    <section class="updates">
      <div class="container">
        <h2 class="section-title"><i class="fa-regular fa-newspaper"></i> Recent Committee Activities</h2>
        <div class="updates-grid">
          <article v-for="(u, i) in updates" :key="i" class="update-card">
            <h3 class="u-title">{{ u.title }}</h3>
            <div class="u-meta">{{ u.date }} • {{ u.committee }}</div>
            <p>{{ u.summary }}</p>
            <a href="#" class="u-link">Read more</a>
          </article>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="page-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3>Need Assistance?</h3>
            <p>For committee-related queries, write to <a href="mailto:committees@ssit.edu.in">committees@ssit.edu.in</a> or contact the respective coordinator.</p>
          </div>
          <nav aria-label="Related pages">
            <h3>Related Links</h3>
            <ul class="footer-links">
              <li><a href="/governance/iqac">IQAC</a></li>
              <li><a href="/policies/anti-ragging">Anti-Ragging Policy</a></li>
              <li><a href="/cells/rd">R&D Cell</a></li>
            </ul>
          </nav>
          <div>
            <h3>Page Info</h3>
            <p class="updated">Last updated: <time :datetime="lastUpdatedISO">{{ lastUpdated }}</time></p>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "Committees",
  data() {
    return {
      // UI state
      q: "",
      activeCats: [],
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
        const matchesCat = this.activeCats.length === 0 || this.activeCats.includes(c.category);
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
    activeCats() { this.resetPage(); },
    sortBy() { this.resetPage(); },
  },
  methods: {
    resetPage() {
      this.page = 1;
    },
    toggleCat(cat) {
      const i = this.activeCats.indexOf(cat);
      if (i >= 0) this.activeCats.splice(i, 1);
      else this.activeCats.push(cat);
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
  },
};
</script>

<style scoped>
/* ---------- THEME ---------- */
:root {
  --primary: #1e40af;     /* Institution blue */
  --accent:  #f97316;     /* Orange accent */
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

/* ---------- BREADCRUMB ---------- */
.breadcrumb-wrap { background: #eef2ff; border-bottom: 1px solid var(--border); }
.breadcrumb { display: flex; gap: .5rem; padding: .75rem 0; margin: 0; list-style: none; }
.breadcrumb li { color: var(--muted); }
.breadcrumb a { color: var(--primary); text-decoration: none; }
.breadcrumb li+li::before { content: "›"; margin: 0 .5rem; color: #64748b; }

/* ---------- HERO ---------- */
.hero { background: linear-gradient(135deg, #1e40af 0%, #1c3a8d 60%); color: #fff; }
.hero-inner { display: grid; grid-template-columns: 1fr auto; gap: 2rem; padding: 3rem 0; align-items: center; }
.display-title { font-size: clamp(1.75rem, 3vw, 2.5rem); margin: 0 0 .25rem; }
.subtitle { font-size: 1.05rem; margin: 0 0 .75rem; color: #c7d2fe; }
.intro { margin: 0; color: #e0e7ff; max-width: 64ch; }
.hero-art { font-size: clamp(48px, 10vw, 96px); opacity: .2; }

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
.filter-chips { display: flex; gap: .5rem; border: 0; margin: 0; padding: 0; }
.chip {
  display: inline-flex; align-items: center; gap: .5rem; border: 1px solid var(--border);
  background: #fff; color: var(--text); padding: .5rem .75rem; border-radius: 999px; cursor: pointer;
  transition: all .25s ease;
}
.chip i{ color: var(--muted); }
.chip.active { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(30,64,175,.15); }
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
.btn-row { display: flex; align-items: center; justify-content: space-between; gap: .5rem; }
.btn.more {
  display: inline-flex; align-items: center; gap: .5rem; background: var(--primary); color: #fff;
  border: 0; padding: .55rem .9rem; border-radius: .6rem; cursor: pointer; transition: background .2s ease, transform .1s ease;
}
.btn.more:hover { background: #243fa7; }
.btn.more:active { transform: translateY(1px); }
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
.quick-contacts { background: #fff; border-top: 1px solid var(--border); padding: 1.5rem 0; }
.qc-card { background: #fff; border: 1px solid var(--border); border-radius: 1rem; padding: 1rem; }
.qc-head { display: flex; align-items: center; gap: .75rem; justify-content: space-between; }
.qc-head h2 { margin: 0; font-size: 1.1rem; color: var(--primary); display: flex; gap: .5rem; align-items: center; }
.qc-head i { color: var(--primary); }
.btn.dl { background: var(--accent); color: #fff; padding: .5rem .75rem; border-radius: .6rem; text-decoration: none; }
.qc-grid { display: grid; gap: .75rem; grid-template-columns: repeat(3, 1fr); margin-top: .75rem; }
.qc-item { display: grid; gap: .15rem; font-size: .95rem; }
.qc-link { color: var(--primary); text-decoration: none; }

/* ---------- UPDATES ---------- */
.updates { background: #f8fafc; padding: 1.75rem 0 2.25rem; }
.section-title { display: flex; align-items: center; gap: .5rem; color: var(--primary); margin: 0 0 1rem; }
.updates-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }
.update-card { background: #fff; border: 1px solid var(--border); border-radius: .9rem; padding: 1rem; box-shadow: 0 8px 30px rgba(2,6,23,.04); }
.u-title { margin: 0 0 .25rem; font-size: 1rem; font-weight: 700; }
.u-meta { color: var(--muted); font-size: .9rem; margin-bottom: .5rem; }
.u-link { color: var(--primary); text-decoration: none; }

/* ---------- FOOTER ---------- */
.page-footer { background: #111827; color: #d1d5db; padding: 1.75rem 0; }
.footer-grid { display: grid; gap: 1rem; grid-template-columns: repeat(3, 1fr); }
.footer-links { list-style: none; margin: .25rem 0 0; padding: 0; display: grid; gap: .25rem; }
.footer-links a { color: #e5e7eb; text-decoration: none; }
.updated { color: #9ca3af; }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 1024px) {
  .grid, .updates-grid, .footer-grid, .qc-grid, .detail-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-inner { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .grid, .updates-grid, .footer-grid, .qc-grid, .detail-grid { grid-template-columns: 1fr; }
  .controls-row { flex-direction: column; align-items: stretch; }
}

/* ---------- PRINT ---------- */
@media print {
  .breadcrumb-wrap, .controls, .quick-contacts .btn.dl, .updates, .page-footer { display: none !important; }
  .card, .qc-card { box-shadow: none; border-color: #ddd; }
  .grid { grid-template-columns: 1fr 1fr; }
}
</style>
