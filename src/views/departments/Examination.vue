<template>
  <div class="exams-page">
    <!-- HEADER + NAV (keep site-wide shell) -->
    <Header />
    <NavBar />

    <!-- HERO -->
    <header class="hero" role="banner" aria-label="Examinations Hero">
      <div class="overlay"></div>
      <div class="container hero-inner">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li aria-current="page">Examinations</li>
          </ol>
        </nav>

        <div class="hero-grid">
          <div class="hero-copy">
            <h1 class="title">Examinations &amp; Results</h1>
            <p class="subtitle">Efficient, Transparent, Student-Centric Assessment</p>

            <ul class="qfacts" aria-label="Quick facts">
              <li><i class="fa-solid fa-award" aria-hidden="true"></i> Autonomous since <strong>2015</strong></li>
              <li><i class="fa-solid fa-laptop-file" aria-hidden="true"></i> <strong>Digital</strong> evaluation</li>
              <li><i class="fa-solid fa-lock" aria-hidden="true"></i> Secure results portal</li>
            </ul>
          </div>

          <picture class="hero-art" aria-hidden="true">
            <img
              class="hero-img"
              src="https://images.unsplash.com/photo-1514053026555-49ce8886ae41?q=80&w=1600&auto=format&fit=crop"
              alt="Answer sheets and exam hall"
            />
          </picture>
        </div>
      </div>
    </header>

    <!-- OVERVIEW -->
    <main class="container content" id="content">
      <section class="card-section">
        <article class="card">
          <h2 class="section-title">
            <i class="fa-solid fa-building-columns" aria-hidden="true"></i>
            Controller of Examinations (CoE)
          </h2>
          <p class="lead">
            The CoE office at SSIT administers all undergraduate and postgraduate examinations, ensures
            timely notifications, schedules, and result processing, and upholds transparency and integrity
            in assessment. We leverage secure, tech-enabled workflows, digital evaluation, and rigorous
            quality checks to deliver fair, efficient, and student-centric examination services.
          </p>
        </article>
      </section>

      <!-- QUICK-LINK BUTTONS -->
      <section class="quicklinks card-section" aria-labelledby="quicklinks-title">
        <h2 class="visually-hidden" id="quicklinks-title">Key Quick Links</h2>
        <div class="link-row">
          <a
            v-for="link in quickLinks"
            :key="link.label"
            class="qlink"
            :href="link.href"
            target="_blank"
            rel="noopener"
            :aria-label="link.label"
          >
            <i :class="link.icon" aria-hidden="true"></i>
            <span>{{ link.label }}</span>
          </a>
        </div>
      </section>

      <!-- CARD MENU GRID -->
      <section class="card-section">
        <h2 class="section-title"><i class="fa-solid fa-grid-2" aria-hidden="true"></i> Examination Services</h2>
        <div class="menu-grid">
          <article class="menu-card">
            <div class="card-top"></div>
            <div class="mc-body">
              <i class="fa-solid fa-bell mc-icon" aria-hidden="true"></i>
              <h3 class="mc-title">Notifications</h3>
              <p class="mc-text">Latest exam notifications and announcements.</p>
              <button type="button" class="btn btn-primary" @click="go('notifications')">View Notifications</button>
            </div>
          </article>

          <article class="menu-card">
            <div class="card-top"></div>
            <div class="mc-body">
              <i class="fa-regular fa-calendar-days mc-icon" aria-hidden="true"></i>
              <h3 class="mc-title">Exam Time Tables</h3>
              <p class="mc-text">Download current UG/PG timetables.</p>
              <button type="button" class="btn btn-primary" @click="go('timetables')">View Timetables</button>
            </div>
          </article>

          <article class="menu-card">
            <div class="card-top"></div>
            <div class="mc-body">
              <i class="fa-solid fa-chart-line mc-icon" aria-hidden="true"></i>
              <h3 class="mc-title">Academic Results</h3>
              <p class="mc-text">Check semester / revaluation results.</p>
              <a
                class="btn btn-primary"
                href="#"
                target="_blank"
                rel="noopener"
              >Check Results</a>
            </div>
          </article>

          <article class="menu-card">
            <div class="card-top"></div>
            <div class="mc-body">
              <i class="fa-solid fa-file-signature mc-icon" aria-hidden="true"></i>
              <h3 class="mc-title">Apply for Certificates</h3>
              <p class="mc-text">Online applications for transcripts and certificates.</p>
              <button type="button" class="btn btn-primary" @click="go('certificates')">Apply Now</button>
            </div>
          </article>
        </div>
      </section>

      <!-- OPTIONAL: FAQLIST -->
      <section class="card-section">
        <div class="grid-2">
          <article class="card">
            <h2 class="section-title">
              <i class="fa-solid fa-circle-question" aria-hidden="true"></i>
              Frequently Asked Questions
            </h2>

            <div class="accordion" role="region" aria-label="Examinations FAQs">
              <div
                v-for="(item, idx) in faqs"
                :key="item.q"
                class="acc-item"
              >
                <button
                  class="acc-trigger"
                  :aria-expanded="openFaq === idx ? 'true' : 'false'"
                  :aria-controls="`faq-panel-${idx}`"
                  :id="`faq-trigger-${idx}`"
                  @click="toggleFaq(idx)"
                >
                  <span>{{ item.q }}</span>
                  <i class="fa-solid" :class="openFaq === idx ? 'fa-minus' : 'fa-plus'" aria-hidden="true"></i>
                </button>
                <div
                  class="acc-panel"
                  :id="`faq-panel-${idx}`"
                  role="region"
                  :aria-labelledby="`faq-trigger-${idx}`"
                  v-show="openFaq === idx"
                >
                  <p class="muted">{{ item.a }}</p>
                </div>
              </div>
            </div>
          </article>

          <!-- CONTACT BOX -->
          <aside class="card contact">
            <h2 class="section-title">
              <i class="fa-solid fa-address-book" aria-hidden="true"></i>
              Contact CoE Office
            </h2>
            <ul class="contact-list">
              <li><i class="fa-solid fa-user-tie" aria-hidden="true"></i> Controller of Examinations (CoE)</li>
              <li><i class="fa-solid fa-envelope" aria-hidden="true"></i> <a href="mailto:coe@ssit.edu.in">coe@ssit.edu.in</a></li>
              <li><i class="fa-solid fa-phone" aria-hidden="true"></i> +91-87612-88888</li>
              <li><i class="fa-solid fa-clock" aria-hidden="true"></i> Mon-Fri: 9:30 AM – 5:30 PM</li>
              <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Admin Block, SSIT Campus</li>
            </ul>

            <div class="doc-links">
              <a
                class="doc"
                href="#"
                target="_blank"
                rel="noopener"
              >
                <i class="fa-solid fa-file-lines" aria-hidden="true"></i> Circulars
              </a>
              <a
                class="doc"
                href="#"
                target="_blank"
                rel="noopener"
              >
                <i class="fa-solid fa-scroll" aria-hidden="true"></i> Examination Policy (PDF)
              </a>
            </div>
          </aside>
        </div>
      </section>

      <!-- LAST UPDATED -->
      <p class="last-updated">Last Updated: {{ lastUpdated }}</p>
    </main>

    <!-- FOOTER -->
    <Footer />
  </div>
</template>

<script setup>
/**
 * Examinations.vue
 * - Vue 3 SFC using Composition API
 * - All dynamic arrays are placeholders (TODO markers) for future API hooks
 */
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

/* Quick-link buttons (external). TODO: replace/update portals when SSIT endpoints are ready */
const quickLinks = [
  { label: 'Results', icon: 'fa-solid fa-graduation-cap', href: '#' },
  { label: 'Fee Payments', icon: 'fa-solid fa-credit-card', href: '#' },
  { label: 'Circulars', icon: 'fa-solid fa-bullhorn', href: '#' },
  { label: 'Examination Policy (PDF)', icon: 'fa-solid fa-file-pdf', href: '#' }
]

/* TODO: Wire these to router or portals */
function go(section) {
  // eslint-disable-next-line no-console
  console.log(`[TODO] Navigate to ${section} page/route`)
  // Example:
  // if (section === 'notifications') router.push('/examinations/notifications')
}

/* FAQ accordion data. TODO: fetch from CMS/API */
const faqs = [
  {
    q: 'How do I apply for revaluation or photocopy?',
    a: 'Check the revaluation notification, fill the online form, pay the prescribed fee, and submit within the stipulated deadline.'
  },
  {
    q: 'What is the procedure for backlog examinations?',
    a: 'Backlog exam schedules are announced separately. Register within the portal using your hall ticket number, then download the hall ticket before exams.'
  },
  {
    q: 'Are grace marks applicable?',
    a: 'Grace marks, if applicable, follow the college regulations as per Academic Council/University guidelines. Watch for official circulars for details.'
  },
  {
    q: 'Where can I find the exam timetable?',
    a: 'Time tables are published on the Examinations page under “Exam Time Tables” and notified via official circulars.'
  }
]

/* Accordion state */
const openFaq = ref(null)
const toggleFaq = (idx) => {
  openFaq.value = openFaq.value === idx ? null : idx
}

/* Last updated */
const lastUpdated = new Date().toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

/* ─────────────────────────────────────────────────────────
   SEO (optional): If you use vue-meta or @vueuse/head, set:
   useHead({ title: 'Examinations & Results | SSIT', meta: [...] })
   ───────────────────────────────────────────────────────── */
</script>

<style scoped>
/* THEME TOKENS */
:root{
  --navy:#1e40af;
  --orange:#f97316;
  --border:#e5e7eb;
  --ink:#111827;
  --muted:#6b7280;
  --card:#fff;
  --bg:#f8fafc;
}

/* BASICS */
.container{ width:min(1180px,92%); margin-inline:auto; }
.content{ padding:2.5rem 0 3rem; background:#fff; }
.card-section{ margin:1.25rem 0; }
.card{ background:var(--card); border:1px solid var(--border); border-radius:12px; padding:1.25rem 1.2rem; box-shadow:0 8px 26px rgba(17,24,39,.06) }
.lead{ color:#334155; font-size:1.05rem; }
.section-title{ display:flex; align-items:center; gap:.6rem; margin:0 0 1rem; font-size:1.25rem; font-weight:800; color:var(--navy); }
.muted{ color:var(--muted); }

/* HERO */
.hero{ position:relative; color:#fff; background:linear-gradient(60deg,var(--navy),#153a9c); }
.hero .overlay{ position:absolute; inset:0; background:linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,.25)); }
.hero-inner{ position:relative; padding:2rem 0 2.8rem; }
.hero-grid{ display:grid; grid-template-columns:1.1fr .9fr; gap:1.6rem; align-items:center; }
.title{ font-size:2.2rem; line-height:1.15; font-weight:800; margin:0 0 .35rem; }
.subtitle{ font-weight:600; color:#dbeafe; margin:0 0 1rem; }
.qfacts{ list-style:none; display:flex; gap:.6rem; flex-wrap:wrap; padding:0; margin:0 }
.qfacts li{ background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.22); border-radius:999px; padding:.45rem .75rem; font-weight:600 }
.qfacts i{ margin-right:.4rem }
.hero-art .hero-img{ width:100%; border-radius:14px; object-fit:cover; box-shadow:0 12px 34px rgba(0,0,0,.35) }

/* BREADCRUMB */
.breadcrumb{ margin-bottom:.75rem }
.breadcrumb ol{ list-style:none; display:flex; gap:.5rem; padding:0; margin:0; color:#e5e7eb }
.breadcrumb a{ color:#e5e7eb; text-decoration:none; border-bottom:1px dashed transparent }
.breadcrumb a:hover{ border-bottom-color:#e5e7eb }
.breadcrumb li[aria-current="page"]{ opacity:.9 }

/* QUICKLINKS */
.quicklinks .link-row{ display:flex; gap:.7rem; flex-wrap:wrap }
.qlink{
  --ring:transparent;
  display:inline-flex; align-items:center; gap:.6rem;
  background:#fff; color:var(--navy);
  border:1px solid var(--border); border-radius:999px;
  padding:.6rem .95rem; font-weight:700; text-decoration:none;
  box-shadow:0 6px 22px rgba(0,0,0,.06);
  transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.qlink i{ color:var(--orange) }
.qlink:hover{ transform:translateY(-2px); border-color:var(--navy); box-shadow:0 10px 28px rgba(0,0,0,.08) }

/* MENU GRID */
.menu-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem }
.menu-card{
  background:#fff; border:1px solid var(--border); border-radius:12px; overflow:hidden;
  box-shadow:0 8px 24px rgba(0,0,0,.06);
  transition:transform .25s ease, box-shadow .25s ease;
}
.menu-card:hover{ transform:translateY(-3px); box-shadow:0 14px 36px rgba(0,0,0,.08) }
.card-top{ height:6px; background:linear-gradient(90deg,var(--navy),var(--orange)); }
.mc-body{ padding:1rem 1rem 1.15rem; display:flex; flex-direction:column; gap:.55rem }
.mc-icon{ font-size:1.5rem; color:var(--orange) }
.mc-title{ margin:.1rem 0 0; font-size:1.05rem; font-weight:800; color:var(--ink) }
.mc-text{ margin:0 0 .4rem; color:#334155 }

/* BUTTONS */
.btn{ display:inline-flex; align-items:center; gap:.5rem; border:1px solid transparent; border-radius:.7rem; padding:.55rem .9rem; font-weight:800; cursor:pointer; transition:filter .25s ease }
.btn-primary{ background:var(--navy); color:#fff }
.btn:hover{ filter:brightness(1.03) }

/* GRID HELPERS */
.grid-2{ display:grid; grid-template-columns:2fr 1.1fr; gap:1rem }

/* ACCORDION */
.accordion{ display:flex; flex-direction:column; gap:.55rem }
.acc-item{ border:1px solid var(--border); border-radius:10px; background:#fff; overflow:hidden }
.acc-trigger{
  width:100%; text-align:left; background:#fff; border:0; outline:none; cursor:pointer; display:flex; justify-content:space-between; align-items:center;
  padding:.8rem 1rem; font-weight:700; color:#0f172a;
  transition:background .25s ease;
}
.acc-trigger:hover{ background:#f9fafb }
.acc-panel{ padding:0 1rem 1rem 1rem; border-top:1px dashed var(--border) }

/* CONTACT */
.contact .contact-list{ list-style:none; padding:0; margin:0 0 .75rem; display:flex; flex-direction:column; gap:.45rem; color:#334155 }
.contact .contact-list i{ color:var(--orange); width:1.1rem }
.doc-links{ display:flex; gap:.5rem; flex-wrap:wrap }
.doc{
  display:inline-flex; align-items:center; gap:.45rem; text-decoration:none;
  border:1px solid var(--border); background:#fff; color:var(--navy);
  border-radius:.55rem; padding:.45rem .65rem; font-weight:700;
}
.doc i{ color:var(--orange) }

/* UTIL */
.last-updated{ color:var(--muted); font-size:.92rem; margin-top:1rem; }

/* ACCESSIBILITY HELPERS */
.visually-hidden{
  position:absolute!important; height:1px; width:1px; overflow:hidden; clip:rect(1px,1px,1px,1px);
  white-space:nowrap; border:0; padding:0; margin:-1px;
}

/* RESPONSIVE */
@media (max-width: 1100px){
  .hero-grid{ grid-template-columns:1fr }
}
@media (max-width: 900px){
  .menu-grid{ grid-template-columns:repeat(2,1fr) }
  .grid-2{ grid-template-columns:1fr }
}
@media (max-width: 640px){
  .menu-grid{ grid-template-columns:1fr }
  .qfacts li{ font-size:.92rem }
}
</style>
