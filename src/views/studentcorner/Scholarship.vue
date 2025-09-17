<template>
  <article class="hetero" :aria-label="i18n.ariaLabel">
    <!-- HERO -->
    <header class="hero" role="banner">
      <div class="container hero__grid">
        <div class="hero__brand">
          <div class="brand-logos">
            <img :src="assets.heteroLogo" alt="Hetero" class="logo" />
            <span class="x">×</span>
            <img :src="assets.ssitLogo" alt="SSIT" class="logo" />
          </div>
          <h1 class="title">
            <span class="eyebrow">HETERO SPONSORSHIP PROGRAM</span>
            Hetero Student Sponsorship Program
          </h1>
          <p class="subtitle">
            Sponsor <strong>100 bright students</strong> for B.Tech programs at
            <strong>Sai Spurthi Institute of Technology</strong>
          </p>

          <ul class="hero__meta" aria-label="Program details">
            <li><i class="fa-solid fa-calendar-day" aria-hidden="true"></i> Exam Date: <strong>{{ formatDate(program.examDate) }}</strong></li>
            <li><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Venue: <strong>{{ program.venue }}</strong></li>
            <li><i class="fa-solid fa-shield-heart" aria-hidden="true"></i> Sponsor: <strong>Hetero (Leading Pharmaceutical Company)</strong></li>
            <li><i class="fa-solid fa-building-columns" aria-hidden="true"></i> Institution: <strong>{{ program.institution }}</strong></li>
          </ul>

          <div class="cta-row">
            <a class="btn btn--primary" :href="links.registration" target="_blank" rel="noopener" @click="$emit('register')">
              <i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Register Online
            </a>
            <button class="btn" @click="printDoc"><i class="fa-solid fa-print" aria-hidden="true"></i> Print</button>
            <button class="btn" :disabled="!canShare" @click="share">
              <i class="fa-solid fa-share-nodes" aria-hidden="true"></i> Share
            </button>
          </div>
        </div>

        <aside class="hero__right card">
          <h2 class="h6">{{ i18n.countdown }}</h2>
          <div v-if="countdown.status==='future'" class="countdown" role="timer" aria-live="polite">
            <div class="cell"><span>{{ countdown.dd }}</span><small>Days</small></div>
            <div class="cell"><span>{{ countdown.hh }}</span><small>Hours</small></div>
            <div class="cell"><span>{{ countdown.mm }}</span><small>Mins</small></div>
            <div class="cell"><span>{{ countdown.ss }}</span><small>Secs</small></div>
          </div>
          <div v-else class="badge badge--done">
            <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
            <span v-if="countdown.status==='today'">Exam is today</span>
            <span v-else>Exam completed</span>
          </div>

          <div class="hero__nums">
            <div class="num-card">
              <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
              <div><b>100</b><small>Bright Students</small></div>
            </div>
            <div class="num-card">
              <i class="fa-solid fa-award" aria-hidden="true"></i>
              <div><b>₹30,000</b><small>Joining Incentive</small></div>
            </div>
            <div class="num-card">
              <i class="fa-solid fa-money-check-dollar" aria-hidden="true"></i>
              <div><b>4 Years</b><small>Fee Coverage</small></div>
            </div>
          </div>
        </aside>
      </div>
    </header>

    <!-- OVERVIEW -->
    <section class="container grid-2">
      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-bullseye" aria-hidden="true"></i> Program Overview</h2>
        <p>
          <strong>Objective:</strong> Sponsor 100 meritorious students pursuing B.Tech in
          ECE, EEE, MECH, CSE, CSM (AI &amp; ML), and AID (AI &amp; Data Science) through full tuition fee coverage
          and a joining incentive, supported by <strong>Hetero</strong>.
        </p>
        <p class="muted">{{ program.institutionFull }}</p>
      </section>

      <!-- BRANCHES -->
      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-diagram-project" aria-hidden="true"></i> Available Branches</h2>
        <div class="chips">
          <button
            v-for="b in branches"
            :key="b.code"
            class="chip"
            :class="{active: selectedBranch===b.code}"
            @click="selectedBranch=b.code"
            :aria-pressed="selectedBranch===b.code"
          >
            <i :class="b.icon" aria-hidden="true"></i> {{ b.name }}
          </button>
        </div>
        <p class="muted" v-if="selectedBranch">Selected: <strong>{{ branchLabel }}</strong></p>
      </section>
    </section>

    <!-- ELIGIBILITY -->
    <section class="container grid-2">
      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-clipboard-check" aria-hidden="true"></i> Eligibility Criteria</h2>
        <div class="criteria">
          <div class="criteria__block">
            <h3 class="h6">For Sponsorship Eligibility Test</h3>
            <ul class="check">
              <li>Intermediate in MPC with <b>375+ marks</b> in 1st year</li>
              <li>CBSE: <b>8.5+ CGPA</b> in 10th Class</li>
            </ul>
          </div>
          <div class="criteria__block">
            <h3 class="h6">For Hetero Sponsorship Program</h3>
            <ul class="check">
              <li>Intermediate in MPC with <b>80%+</b> marks</li>
              <li>CBSE: <b>B1+ Grade</b> in 12th Class</li>
              <li>Must secure seat via <b>TS-EAMCET Counselling</b> (eligible branches)</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- ELIGIBILITY CHECKER -->
      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i> Self-Assessment</h2>
        <form class="form" @submit.prevent>
          <label class="form__row">
            <span>Intermediate 1st Year Marks (MPC)</span>
            <input type="number" v-model.number="form.marksInter1" min="0" max="470" placeholder="e.g., 420" />
          </label>

          <label class="form__row">
            <span>10th Class CGPA (CBSE)</span>
            <input type="number" v-model.number="form.cgpa10" min="0" max="10" step="0.1" placeholder="e.g., 9.2" />
          </label>

          <label class="form__row">
            <span>12th Grade (CBSE) Letter Grade</span>
            <select v-model="form.grade12">
              <option value="">Select grade</option>
              <option>A1</option><option>A2</option><option>B1</option><option>B2</option>
              <option>C1</option><option>C2</option>
            </select>
          </label>

          <label class="form__row">
            <span>Intermediate Overall %</span>
            <input type="number" v-model.number="form.percentInter" min="0" max="100" step="0.1" placeholder="e.g., 82.5" />
          </label>

          <label class="form__checkbox">
            <input type="checkbox" v-model="form.hasEamcetSeat" />
            <span>I have (or will secure) a seat via TS-EAMCET in an eligible branch</span>
          </label>

          <div class="results">
            <div class="result">
              <span class="badge" :class="eligibleTest ? 'badge--ok' : 'badge--no'">
                <i :class="eligibleTest ? 'fa-solid fa-check' : 'fa-solid fa-xmark'" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Eligibility Test:</strong>
                <div class="muted">{{ eligibleTest ? 'You meet the test criteria.' : 'You do not yet meet the test criteria.' }}</div>
              </div>
            </div>
            <div class="result">
              <span class="badge" :class="eligibleProgram ? 'badge--ok' : 'badge--no'">
                <i :class="eligibleProgram ? 'fa-solid fa-check' : 'fa-solid fa-xmark'" aria-hidden="true"></i>
              </span>
              <div>
                <strong>Hetero Sponsorship Program:</strong>
                <div class="muted">
                  {{ eligibleProgram ? 'You meet the scholarship criteria.' : 'You do not yet meet the program criteria.' }}
                </div>
              </div>
            </div>
          </div>

          <div class="form__actions">
            <a :href="links.registration" target="_blank" rel="noopener" class="btn btn--primary">
              Proceed to Registration
            </a>
          </div>
        </form>
      </section>
    </section>

    <!-- BENEFITS + CALCULATOR -->
    <section class="container grid-2">
      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-sack-dollar" aria-hidden="true"></i> Sponsorship Benefits</h2>
        <ul class="benefits">
          <li><i class="fa-solid fa-circle-check"></i> Complete <b>4-year tuition fee coverage</b> including miscellaneous fees</li>
          <li><i class="fa-solid fa-circle-check"></i> <b>₹30,000</b> joining incentive (cash prize) at Orientation</li>
        </ul>
      </section>

      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-calculator" aria-hidden="true"></i> Benefits Calculator</h2>
        <form class="form" @submit.prevent>
          <label class="form__row">
            <span>Annual Tuition (₹)</span>
            <input type="number" min="0" v-model.number="calc.annualTuition" placeholder="e.g., 95000" />
          </label>
          <label class="form__row">
            <span>Annual Misc Fees (₹)</span>
            <input type="number" min="0" v-model.number="calc.annualMisc" placeholder="e.g., 15000" />
          </label>
          <div class="totals">
            <div><small>4-Year Tuition + Misc</small><strong>₹{{ formatNumber(totalCovered) }}</strong></div>
            <div><small>Plus Joining Incentive</small><strong>₹{{ formatNumber(totalWithIncentive) }}</strong></div>
          </div>
        </form>
      </section>
    </section>

    <!-- ACHIEVEMENTS -->
    <section class="container card">
      <h2 class="section-title"><i class="fa-solid fa-trophy" aria-hidden="true"></i> Achievement Wall</h2>
      <p class="congrats">“CONGRATULATIONS SAI SPURTHIANS on OUTSTANDING ACHIEVEMENT”</p>
      <p class="muted">From 2021-22 Batch</p>

      <div class="stats" ref="statsRef">
        <div class="stat" v-for="s in stats" :key="s.branch">
          <div class="stat__label">{{ s.branch }}</div>
          <div class="stat__value">
            <span class="big">{{ s._count }}</span><small>/{{ s.total }} placed</small>
          </div>
          <div class="bar"><span :style="{width: (s._count/s.total*100)+'%'}"></span></div>
        </div>
      </div>

      <div class="companies">
        <img v-for="c in companies" :key="c.name" :src="c.logo" :alt="c.name" />
      </div>
    </section>

    <!-- PROCESS -->
    <section class="container card">
      <h2 class="section-title"><i class="fa-solid fa-timeline" aria-hidden="true"></i> Three Ways to Participate</h2>
      <ol class="timeline">
        <li>
          <div class="dot" aria-hidden="true"></div>
          <div class="txt">
            <strong>Write Online Exam</strong>
            <p>Use the official website link.</p>
            <a class="link" :href="links.registration" target="_blank" rel="noopener">Register Online</a>
          </div>
        </li>
        <li>
          <div class="dot" aria-hidden="true"></div>
          <div class="txt">
            <strong>Walk-in on 05-03-2023</strong>
            <p>Bring Inter I year mark sheet and ID proof. Reporting: <b>10:00 A.M.</b> Venue: SSIT.</p>
          </div>
        </li>
        <li>
          <div class="dot" aria-hidden="true"></div>
          <div class="txt">
            <strong>Campus Exam Registration</strong>
            <p>Contact the numbers below for assistance with campus registration.</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- CONTACT -->
    <section class="container grid-2">
      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-headset" aria-hidden="true"></i> Contact Center</h2>
        <div class="contacts">
          <a v-for="ph in contacts.phones" :key="ph" class="contact" :href="`tel:${ph}`">
            <i class="fa-solid fa-phone" aria-hidden="true"></i> {{ ph }}
          </a>
          <a class="contact" :href="`mailto:${contacts.email}`"><i class="fa-solid fa-envelope"></i> {{ contacts.email }}</a>
          <a class="contact" :href="contacts.website" target="_blank" rel="noopener"><i class="fa-solid fa-globe"></i> {{ contacts.websiteLabel }}</a>
          <div class="chip">EAMCET Code: <b>SAIS</b></div>
        </div>
      </section>

      <section class="card">
        <h2 class="section-title"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Quick Actions</h2>
        <div class="quick">
          <a class="btn btn--primary" :href="links.registration" target="_blank" rel="noopener">
            <i class="fa-solid fa-user-plus" aria-hidden="true"></i> Register Now
          </a>
          <a class="btn" :href="whatsAppLink" target="_blank" rel="noopener">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp
          </a>
          <button class="btn" @click="share" :disabled="!canShare">
            <i class="fa-solid fa-share-nodes" aria-hidden="true"></i> Share
          </button>
        </div>
      </section>
    </section>

    <!-- CTA FOOTER -->
    <footer class="cta-footer" role="contentinfo">
      <div class="container cta-footer__grid">
        <div class="info">
          <h3>Join the Hetero Student Sponsorship Program</h3>
          <p>Transform your engineering journey with 4-year fee coverage and a ₹30,000 joining incentive.</p>
        </div>
        <div class="actions">
          <a class="btn btn--gold" :href="links.registration" target="_blank" rel="noopener">
            <i class="fa-solid fa-rocket" aria-hidden="true"></i> Apply Today
          </a>
          <a class="btn btn--ghost" :href="contacts.website" target="_blank" rel="noopener">
            <i class="fa-solid fa-circle-info" aria-hidden="true"></i> Program Details
          </a>
        </div>
      </div>
    </footer>

    <!-- Sticky quick-contact -->
    <a class="fab fab--phone" :href="`tel:${contacts.phones[0]}`" aria-label="Call us">
      <i class="fa-solid fa-phone"></i>
    </a>
    <a class="fab fab--wa" :href="whatsAppLink" target="_blank" rel="noopener" aria-label="WhatsApp">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </article>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'

defineEmits(['register'])

/* ---------- DATA ---------- */
const program = reactive({
  examDate: '2023-03-05T10:00:00+05:30',
  venue: 'Sai Spurthi Institute of Technology',
  institution: 'Sai Spurthi Institute of Technology, B.Gangaram, Sathupally, Khammam Dist.-507303',
  institutionFull: 'Sai Spurthi Institute of Technology, B.Gangaram, Sathupally, Khammam Dist.-507303'
})

const branches = [
  { code: 'ECE', name: 'ECE — Electronics & Communication', icon: 'fa-solid fa-satellite-dish' },
  { code: 'EEE', name: 'EEE — Electrical & Electronics', icon: 'fa-solid fa-bolt' },
  { code: 'MECH', name: 'MECH — Mechanical', icon: 'fa-solid fa-gears' },
  { code: 'CSE', name: 'CSE — Computer Science', icon: 'fa-solid fa-computer' },
  { code: 'CSM', name: 'CSM — CSE (AI & ML)', icon: 'fa-solid fa-robot' },
  { code: 'AID', name: 'AID — AI & Data Science', icon: 'fa-solid fa-brain' }
]

const contacts = reactive({
  phones: ['9705535655', '9491109564', '8919096826', '9963084558'],
  email: 'sssit.principal@gmail.com',
  website: 'https://www.saispurthi.ac.in',
  websiteLabel: 'www.saispurthi.ac.in'
})

const links = reactive({
  registration: 'https://www.saispurthi.ac.in/sspreg.php'
})

const companies = [
  { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Tata_Consultancy_Services_Logo.svg' },
  { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Infosys_logo.svg' },
  { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Capgemini_201x_logo.svg' },
  { name: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Wipro_Primary_Logo_Color_RGB.svg' }
]

const stats = reactive([
  { branch: 'MECH', placed: 5, total: 31, _count: 0 },
  { branch: 'EEE', placed: 25, total: 40, _count: 0 },
  { branch: 'ECE', placed: 28, total: 43, _count: 0 },
  { branch: 'CSE', placed: 33, total: 45, _count: 0 }
])

const assets = {
  heteroLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Caduceus_symbol.svg',
  ssitLogo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Books-aj.svg_aj_ashton_01.svg'
}

/* ---------- STATE ---------- */
const selectedBranch = ref('CSE')

const form = reactive({
  marksInter1: null,
  cgpa10: null,
  percentInter: null,
  grade12: '',
  hasEamcetSeat: false
})

const calc = reactive({
  annualTuition: 95000,
  annualMisc: 15000
})

/* ---------- UTILS ---------- */
const i18n = {
  ariaLabel: 'Hetero Student Sponsorship Program',
  countdown: 'Countdown to Exam'
}
const canShare = computed(() => !!navigator?.share)
const whatsAppLink = computed(() => `https://wa.me/${contacts.phones[0]}?text=I%20am%20interested%20in%20the%20Hetero%20Sponsorship%20Program`)

function formatDate(d) {
  try {
    return new Date(d).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
  } catch { return d }
}
function formatNumber(n) {
  return (n ?? 0).toLocaleString('en-IN')
}

/* ---------- COUNTDOWN ---------- */
const countdown = reactive({ dd: '00', hh: '00', mm: '00', ss: '00', status: 'future' })
let timer
function tick() {
  const now = new Date()
  const target = new Date(program.examDate)
  const diff = target.getTime() - now.getTime()
  if (diff <= 0) {
    countdown.status = now.toDateString() === target.toDateString() ? 'today' : 'past'
    countdown.dd = countdown.hh = countdown.mm = countdown.ss = '00'
    return
  }
  countdown.status = 'future'
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  countdown.dd = String(d).padStart(2, '0')
  countdown.hh = String(h).padStart(2, '0')
  countdown.mm = String(m).padStart(2, '0')
  countdown.ss = String(s).padStart(2, '0')
}

/* ---------- ELIGIBILITY LOGIC ---------- */
const eligibleTest = computed(() => {
  const a = (form.marksInter1 ?? 0) >= 375
  const b = (form.cgpa10 ?? 0) >= 8.5
  return a && b
})
const eligibleProgram = computed(() => {
  const a = (form.percentInter ?? 0) >= 80
  const gradeOrder = ['A1','A2','B1','B2','C1','C2']
  const b = gradeOrder.indexOf(form.grade12) !== -1 && gradeOrder.indexOf(form.grade12) <= gradeOrder.indexOf('B1')
  const c = !!form.hasEamcetSeat
  return a && b && c
})

/* ---------- BENEFIT TOTALS ---------- */
const totalCovered = computed(() => 4 * (calc.annualTuition + calc.annualMisc))
const totalWithIncentive = computed(() => totalCovered.value + 30000)

/* ---------- SHARE/PRINT ---------- */
function share() {
  if (!canShare.value) return
  navigator.share({
    title: 'Hetero Student Sponsorship Program — SSIT',
    text: 'Sponsor for 100 bright students. Join now!',
    url: links.registration
  }).catch(() => {})
}
function printDoc(){ window.print() }

/* ---------- STATS ANIMATION ---------- */
const statsRef = ref(null)
let observer
function animateStats() {
  stats.forEach((s) => {
    const start = 0, end = s.placed, duration = 1200
    const t0 = performance.now()
    function step(t){
      const p = Math.min(1, (t - t0)/duration)
      s._count = Math.round(start + (end - start) * easeOutCubic(p))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  })
}
const easeOutCubic = (x)=>1-Math.pow(1-x,3)

/* ---------- MOUNT ---------- */
onMounted(() => {
  tick()
  timer = setInterval(tick, 1000)

  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { animateStats(); observer.disconnect() } })
    }, { threshold: 0.3 })
    if (statsRef.value) observer.observe(statsRef.value)
  } else {
    animateStats()
  }
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  if (observer) observer.disconnect()
})

/* ---------- COMPUTEDS ---------- */
const branchLabel = computed(() => branches.find(b => b.code === selectedBranch.value)?.name || '')

</script>

<style scoped>
/* -------- TOKENS -------- */
:root{
  --navy:#0b3d91;          /* corporate blue */
  --blue:#1e40af;          /* deep */
  --teal:#0ea5a6;          /* accent greenish */
  --gold:#f59e0b;          /* gold accent */
  --sky:#3b82f6;           /* bright blue */
  --ink:#0f172a;           /* text */
  --muted:#475569;         /* muted text */
  --bg:#f5f7fb;
  --card:#ffffff;
  --ring: rgba(62,140,255,.35);
  --radius: 16px;
  --shadow: 0 12px 36px rgba(2,6,23,.10);
}

* { box-sizing: border-box; }
.h6{ font-size:.95rem; margin:0 0 6px; letter-spacing:.2px; }
.muted{ color:var(--muted); }
.container{ max-width: 1120px; margin-inline:auto; padding: 20px; }
.card{
  background: var(--card); border:1px solid #e5e9f2; border-radius: var(--radius);
  box-shadow: var(--shadow); padding: 18px;
}
.section-title{
  display:flex; align-items:center; gap:10px; margin:0 0 10px;
  font-size:1.15rem; color: var(--blue); font-weight:800;
}

/* -------- HERO -------- */
.hero{
  background: linear-gradient(135deg, var(--blue), #1346b9 40%, #0ea5a6);
  color:#fff;
  padding: 28px 0 10px;
}
.hero__grid{
  display:grid; grid-template-columns: 1.15fr .85fr; gap:16px;
}
@media (max-width: 900px){ .hero__grid{ grid-template-columns: 1fr; } }

.hero__brand .title{ margin:8px 0 6px; font-size: clamp(1.4rem, 3.2vw, 2.2rem); font-weight:900; line-height:1.15; }
.hero__brand .eyebrow{ display:block; font-size:.85rem; letter-spacing:.2em; opacity:.95; color:#e0eaff; }
.subtitle{ margin:0 0 10px; font-size:1.05rem; color:#eef2ff; }
.hero__meta{ list-style:none; padding:0; margin:10px 0 14px; display:grid; gap:6px; }
.hero__meta i{ color:#cfe4ff; }

.brand-logos{ display:flex; align-items:center; gap:10px; }
.brand-logos .logo{ width:56px; height:56px; object-fit:contain; background:#fff; border-radius: 12px; padding:6px; box-shadow: var(--shadow); }
.brand-logos .x{ opacity:.8; font-weight:700; }

.cta-row{ display:flex; gap:10px; flex-wrap:wrap; }
.btn{
  background:#fff; color:var(--ink); font-weight:700; border:1px solid #e5e9f2; border-radius: 10px;
  padding:10px 14px; display:inline-flex; align-items:center; gap:8px; box-shadow: var(--shadow);
}
.btn:hover{ box-shadow: 0 0 0 5px var(--ring); border-color:transparent; }
.btn--primary{ background: var(--navy); color:#fff; border-color: transparent; }
.btn--ghost{ background: transparent; border-style:dashed; }
.btn--gold{ background: linear-gradient(135deg, #fcd34d, #f59e0b); color:#1f2937; border:0; }

.hero__right .countdown{ display:flex; gap:8px; margin:6px 0 12px; }
.hero__right .cell{ display:grid; place-items:center; background:#0d1b57; border:1px solid rgba(255,255,255,.15); border-radius: 10px; padding:8px 10px; min-width:60px; }
.hero__right .cell span{ font-size:1.25rem; font-weight:900; line-height:1; }
.badge{ display:inline-flex; align-items:center; gap:8px; padding:8px 12px; background:#083; color:#fff; border-radius:999px; font-weight:700; }
.badge--done{ background:#06603f; }
.hero__nums{ display:flex; gap:10px; flex-wrap:wrap; }
.num-card{ display:flex; gap:10px; align-items:center; background:#0f2d7a; border:1px solid rgba(255,255,255,.15); border-radius: 12px; padding:10px 12px; }
.num-card i{ color:#a7f3d0; }
.num-card b{ display:block; font-size:1.1rem; }

/* -------- LAYOUT -------- */
.grid-2{ display:grid; grid-template-columns: 1fr 1fr; gap:16px; }
@media (max-width: 900px){ .grid-2{ grid-template-columns: 1fr; } }

/* Branch chips */
.chips{ display:flex; flex-wrap:wrap; gap:10px; }
.chip{
  background:#f0f6ff; border:1px solid #d7e3ff; padding:8px 12px; border-radius: 999px; font-weight:700;
}
.chip.active{ background:#e0f7f7; border-color:#b8ecec; box-shadow: 0 0 0 4px rgba(14,165,166,.2); }

/* Criteria */
.criteria{ display:grid; gap:12px; }
.check{ padding-left: 20px; }
.check li{ margin:.35rem 0; }

/* Form / calc */
.form{ display:grid; gap:10px; }
.form__row{ display:grid; gap:6px; }
.form__row input, .form__row select{
  border:1px solid #dbe2ee; border-radius:10px; padding:10px; outline:none; font:inherit;
}
.form__row input:focus, .form__row select:focus{ box-shadow: 0 0 0 4px var(--ring); border-color: transparent; }
.form__checkbox{ display:flex; align-items:flex-start; gap:10px; }
.form__actions{ display:flex; gap:10px; margin-top: 6px; }
.results{ display:grid; gap:10px; margin-top:6px; }
.result{ display:flex; gap:10px; align-items:flex-start; }
.badge--ok{ background:#0a7f47; }
.badge--no{ background:#b91c1c; }

/* Calc totals */
.totals{ display:grid; grid-template-columns: 1fr 1fr; gap:10px; }
.totals > div{ background:#f8fafc; border:1px dashed #e5e9f2; border-radius: 12px; padding:10px; }
.totals strong{ font-size:1.05rem; }

/* Achievements */
.congrats{ font-weight:900; color:var(--blue); margin: 2px 0 6px; }
.stats{ display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:12px; }
.stat__label{ font-weight:800; color:#334155; }
.stat__value{ font-weight:800; font-size:1.1rem; }
.stat__value .big{ font-size:1.6rem; color:var(--navy); }
.bar{ height:8px; background:#eef2ff; border-radius: 999px; overflow:hidden; margin-top:6px; }
.bar span{ display:block; height:100%; background: linear-gradient(90deg, var(--sky), var(--teal)); }

.companies{ display:flex; flex-wrap:wrap; gap:16px; align-items:center; margin-top: 14px; }
.companies img{ height:28px; filter: grayscale(100%); opacity:.85; }

/* Timeline */
.timeline{ list-style:none; padding:0; margin:0; display:grid; gap:12px; }
.timeline li{ display:flex; gap:10px; align-items:flex-start; }
.dot{ width:10px; height:10px; border-radius:50%; background:var(--gold); margin-top:7px; box-shadow:0 0 0 3px rgba(245,158,11,.25); }
.txt strong{ display:block; }

/* Contacts */
.contacts{ display:flex; flex-wrap:wrap; gap:10px; }
.contact{ display:inline-flex; align-items:center; gap:8px; background:#f8fafc; border:1px dashed #e5e9f2; border-radius: 12px; padding:8px 12px; text-decoration:none; color:var(--ink); }
.contact:hover{ box-shadow:0 0 0 4px var(--ring); }
.chip{ display:inline-flex; gap:8px; align-items:center; border:1px solid #e5e9f2; border-radius:999px; padding:6px 10px; background:#fff; }

/* CTA footer */
.cta-footer{ background: linear-gradient(135deg, var(--navy), #0e3aa0); color:#fff; margin-top: 16px; }
.cta-footer__grid{ display:grid; grid-template-columns: 1fr auto; gap:12px; align-items:center; }
@media (max-width: 820px){ .cta-footer__grid{ grid-template-columns: 1fr; } }
.cta-footer .actions{ display:flex; gap:10px; flex-wrap:wrap; }
.btn--gold:hover{ filter: brightness(1.05); }

/* FABs */
.fab{
  position: fixed; right: 18px; width: 50px; height: 50px; border-radius: 50%;
  display:grid; place-items:center; color:#fff; box-shadow: var(--shadow); z-index: 20;
}
.fab--phone{ bottom: 86px; background:#0a7f47; }
.fab--wa{ bottom: 24px; background:#25D366; }

/* Print */
@media print{
  .fab, .cta-footer, .btn, .quick, .cta-row { display:none !important; }
  .card{ box-shadow:none; }
  .hero{ background:#000 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
</style>
