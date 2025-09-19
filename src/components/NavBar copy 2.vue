  <template>
    <nav
      class="mega-nav"
      role="navigation"
      aria-label="Primary"
    >
      <div class="nav-container">
        <!-- Hamburger for < 900px -->
        <button
          class="hamburger"
          :aria-expanded="isMobileOpen ? 'true' : 'false'"
          aria-controls="primary-menu"
          @click="toggleMobile"
        >
          <span class="hamburger-bar" />
          <span class="hamburger-bar" />
          <span class="hamburger-bar" />
          <span class="sr-only">Toggle Menu</span>
        </button>

        <!-- Top-level menu -->
        <ul
          id="primary-menu"
          class="menu"
          :class="{ open: isMobileOpen }"
          role="menubar"
        >
          <li
            v-for="(item, i) in menuModel"
            :key="item.id"
            class="menu-item"
            role="none"
            ref="menuRefs"
            @mouseenter="onOpen(i)"
            @mouseleave="onClose(i)"
          >
            <!-- Top-level button/link -->
            <button
              v-if="item.children"
              class="menu-link has-caret"
              role="menuitem"
              :aria-haspopup="true"
              :aria-expanded="openIndex === i"
              @click="onToggle(i)"
              @keydown="onTopKeydown($event, i)"
            >
              <span>{{ item.label }}</span>
              <span class="caret" aria-hidden="true">▼</span>
            </button>

            <a
              v-else
              class="menu-link"
              role="menuitem"
              :href="item.to"
              @keydown.enter.prevent
            >
              {{ item.label }}
            </a>

            <!-- DROPDOWN: classic list -->
            <transition name="fade-slide">
              <ul
                v-if="item.children && !item.mega"
                v-show="openIndex === i"
                class="dropdown"
                :class="positionClass(i)"
                role="menu"
                :style="dropdownStyle(i)"
                @keydown.esc.prevent="onClose(i)"
              >
                <li
                  v-for="child in item.children"
                  :key="child.id"
                  class="dropdown-item"
                  role="none"
                >
                  <a
                    class="dropdown-link"
                    role="menuitem"
                    :href="child.to"
                    tabindex="0"
                  >
                    {{ child.label }}
                  </a>
                </li>
              </ul>
            </transition>

            <!-- DROPDOWN: mega menu -->
            <transition name="fade-slide">
              <div
                v-if="item.children && item.mega"
                v-show="openIndex === i"
                class="mega"
                :class="positionClass(i)"
                role="menu"
                :style="dropdownStyle(i)"
                @keydown.esc.prevent="onClose(i)"
              >
                <div class="mega-grid" :style="megaGridStyle(item)">
                  <div
                    v-for="group in item.children"
                    :key="group.id"
                    class="mega-col"
                    role="none"
                  >
                    <div
                      v-if="group.title"
                      class="mega-title"
                      role="presentation"
                    >
                      {{ group.title }}
                    </div>

                    <!-- flat list -->
                    <ul v-if="group.items" class="mega-list" role="none">
                      <li
                        v-for="sub in group.items"
                        :key="sub.id"
                        role="none"
                      >
                        <a
                          class="mega-link"
                          :href="sub.to"
                          role="menuitem"
                          tabindex="0"
                        >
                          {{ sub.label }}
                        </a>
                      </li>
                    </ul>

                    <!-- nested (e.g., Departments, Placements, JNTUH, etc.) -->
                    <div v-if="group.groups" class="mega-subgroups">
                      <div
                        v-for="sg in group.groups"
                        :key="sg.id"
                        class="mega-subgroup"
                      >
                        <div class="mega-subtitle">{{ sg.title }}</div>
                        <ul class="mega-list" role="none">
                          <li
                            v-for="leaf in sg.items"
                            :key="leaf.id"
                            role="none"
                          >
                            <a
                              class="mega-link"
                              :href="leaf.to"
                              role="menuitem"
                            >
                              {{ leaf.label }}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </nav>
  </template>

  <script setup>
  /**
   * Mega menu with:
   * - Overflow-aware dropdown positioning (left/right flip; keeps 20px safe margin)
   * - Keyboard navigation (Tab/Enter/Escape)
   * - Mobile hamburger (<900px) with accordion-like open/close
   * - Menu model (replace `to: '#'` with real routes/links)
   */
  import { ref, reactive, onMounted, onBeforeUnmount, nextTick } from 'vue'

  /* ---------------------- MENU MODEL ---------------------- */
  /* Replace `to: '#'` with your real links. You can add/remove freely. */
  const menuModel = [
    { id: 'home', label: 'Home', to: '/' },

    {
      id: 'about',
      label: 'About',
      mega: false,
      children: [
        { id: 'mgmt', label: 'Management', to: '#'},
        { id: 'soc', label: 'Society', to: '#'},
        { id: 'vm', label: 'Vision & Mission', to: '#'},
        { id: 'qp', label: 'Quality Policy', to: '#'},
        { id: 'gb', label: 'Governing Body', to: '#'},
        { id: 'pr', label: 'Principal', to: '#'},
        { id: 'ac', label: 'Academic Council', to: '#'}
      ]
    },

    {
      id: 'academics',
      label: 'Academics',
      mega: true,
      /* Mega menu = array of column groups */
      children: [
        {
          id: 'acad-core',
          title: 'Academics',
          items: [
            { id: 'regs', label: 'Academic Regulations', to: '#'},
            { id: 'cal', label: 'Academic Calendar', to: '#'},
            { id: 'incent', label: 'Incentives', to: '#'},
            { id: 'awards', label: 'Awards & Recognitions', to: '#'},
            { id: 'comm', label: 'Committees', to: '#'},
            { id: 'appr', label: 'Approvals', to: '#'}
          ]
        },
        {
          id: 'acad-depts',
          title: 'Departments',
          groups: [
            {
              id: 'depts-1',
              title: 'Engineering',
              items: [
                { id: 'cse', label: 'Computer Science Engineering (CSE)', to: '#'},
                { id: 'ece', label: 'Electronics & Communication Engineering (ECE)', to: '#'},
                { id: 'eee', label: 'Electrical & Electronics Engineering (EEE)', to: '#'},
                { id: 'aids', label: 'AI & Data Science (AI & DS)', to: '#'},
                { id: 'aiml', label: 'Artificial Intelligence & Machine Learning (AIML)', to: '#'}
              ]
            },
            {
              id: 'depts-2',
              title: 'More',
              items: [
                { id: 'mech', label: 'Mechanical Engineering (MECH)', to: '#'},
                { id: 'sh', label: 'Science & Humanities (S&H)', to: '#'},
                { id: 'mba', label: 'Master of Business Administration (MBA)', to: '#'},
                { id: 'poly', label: 'Polytechnic', to: '#'}
              ]
            }
          ]
        },
        {
          id: 'placements',
          title: 'Placements',
          groups: [
            {
              id: 'pl-group',
              title: 'Placement Cell',
              items: [
                { id: 'pl-rec', label: 'Placement Records', to: '#'},
                { id: 'pl-comp', label: 'Companies', to: '#'}
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'admissions',
      label: 'Admissions & Accreditations',
      mega: true,
      children: [
        {
          id: 'adms',
          title: 'Admissions',
          items: [
            { id: 'ad-proc', label: 'Admission Procedure', to: '#'},
            { id: 'fee', label: 'Fee Structure', to: '#'},
            { id: 'form', label: 'Admission Form', to: '#'},
            { id: 'ad-contact', label: 'Contact for Admission', to: '#'}
          ]
        },
        {
          id: 'acc',
          title: 'Accreditations / Quality',
          items: [
            { id: 'iqac', label: 'IQAC', to: '#'},
            { id: 'iiqa', label: 'IIQA', to: '#'},
            { id: 'ssr', label: 'SSR', to: '#'},
            { id: 'dvv', label: 'DVV', to: '#'}
          ]
        },
        {
          id: 'rank',
          title: 'Rankings',
          items: [
            { id: 'nirf-all', label: 'NIRF Overall', to: '#'},
            { id: 'nirf-eng', label: 'NIRF Engineering', to: '#'},
            { id: 'nirf-mgmt', label: 'NIRF Management', to: '#'}
          ]
        }
      ]
    },

    {
      id: 'exams',
      label: 'Examinations',
      mega: true,
      children: [
        {
          id: 'exam-core',
          title: 'Autonomous',
          items: [
            { id: 'coe', label: 'Controller of Examinations (COE)', to: '#'},
            { id: 'notices', label: 'Notices', to: '#'},
            { id: 'ex-regs', label: 'Academic Regulations', to: '#'},
            { id: 'ex-cal', label: 'Academic Calendar', to: '#'},
            { id: 'syllabi', label: 'Syllabus', to: '#'},
            { id: 'times', label: 'Timetables', to: '#'},
            { id: 'results', label: 'Results', to: '#'},
            { id: 'portal', label: 'Examination Portal', to: '#'},
            { id: 'mal', label: 'Malpractice Guidelines', to: '#'}
          ]
        },
        {
          id: 'jntuh',
          title: 'JNTUH Specific',
          items: [
            { id: 'jn-circ', label: 'Circulars', to: '#'},
            { id: 'jn-syl', label: 'Syllabus', to: '#'},
            { id: 'jn-time', label: 'Timetables', to: '#'},
            { id: 'jn-res', label: 'Results', to: '#'}
          ]
        }
      ]
    },

    {
      id: 'campus',
      label: 'Campus',
      mega: true,
      children: [
        {
          id: 'amen',
          title: 'Amenities',
          items: [
            { id: 'lib', label: 'Library', to: '#'},
            { id: 'dlib', label: 'Digital Library', to: '#'},
            { id: 'englab', label: 'English Lab', to: '#'},
            { id: 'sem', label: 'Seminar Halls', to: '#'},
            { id: 'host', label: 'Hostels', to: '#'},
            { id: 'cafe', label: 'Cafeteria', to: '#'},
            { id: 'ecls', label: 'E-Classrooms', to: '#'},
            { id: 'quarters', label: 'Staff Quarters', to: '#'},
            { id: 'templ', label: 'College Temple', to: '#'},
            { id: 'net', label: 'Internet', to: '#'},
            { id: 'ict', label: 'ICT Facilities', to: '#'},
            { id: 'sports', label: 'Sports & Games', to: '#'},
            { id: 'trans', label: 'Transportation', to: '#'}
          ]
        },
        {
          id: 'gal',
          title: 'Gallery',
          items: [
            { id: 'cam-photos', label: 'Campus Photos', to: '#'}
          ]
        }
      ]
    },

    {
      id: 'student',
      label: 'Student Corner',
      mega: true,
      children: [
        {
          id: 'svc',
          title: 'Student Services',
          items: [
            { id: 'scholar', label: 'Scholarship', to: '#'},
            { id: 'clubs', label: 'Clubs', to: '#'},
            { id: 'nss', label: 'NSS (Social Service)', to: '#'}
          ]
        },
        {
          id: 'alumni',
          title: 'Alumni',
          items: [
            { id: 'inv', label: 'Invitation (Year 21-22)', to: '#'},
            { id: 'reg', label: 'Alumni Registration', to: '#'},
            { id: 'view', label: 'View Alumni Students', to: '#'}
          ]
        },
        {
          id: 'fb',
          title: 'Feedback / Grievances',
          items: [
            { id: 'gform', label: 'Grievance Form', to: '#'},
            { id: 'ic', label: 'IC Committee', to: '#'},
            { id: 'aicte', label: 'AICTE Feedback', to: '#'},
            { id: 'tfeed', label: 'Teacher Feedback', to: '#'},
            { id: 'sfeed', label: 'Student Feedback', to: '#'},
            { id: 'emp', label: 'Employer Feedback', to: '#'},
            { id: 'af', label: 'Alumni Feedback', to: '#'}
          ]
        }
      ]
    },

    {
      id: 'quick',
      label: 'Quick Links',
      mega: false,
      children: [
        { id: 'strength', label: 'Strengths', to: '#'},
        { id: 'socserv', label: 'Social Service', to: '#'},
        { id: 'q-incent', label: 'Incentives', to: '#'},
        { id: 'login', label: 'Login', to: '#'}
      ]
    },

    { id: 'contact', label: 'Contact', to: '#'}
  ]

  /* ---------------------- STATE ---------------------- */
  const openIndex = ref(null)          // which top-level dropdown is open
  const isMobileOpen = ref(false)
  const menuRefs = ref([])             // refs to LI nodes
  const dropdownRects = reactive({})   // cache of computed widths

  /* ---------------------- HELPERS ---------------------- */
  const closeAll = () => { openIndex.value = null }
  const toggleMobile = () => { isMobileOpen.value = !isMobileOpen.value }

  const onOpen = (i) => {
    if (isSmall()) return
    openIndex.value = i
    nextTick(() => computeFlip(i))     // compute position after DOM paints
  }
  const onClose = (i) => {
    if (isSmall()) return
    if (openIndex.value === i) openIndex.value = null
  }
  const onToggle = (i) => {
    // Mobile: tap to toggle, Desktop: also allows click
    openIndex.value = openIndex.value === i ? null : i
    nextTick(() => computeFlip(i))
  }

  /* Keyboard on top-level button */
  const onTopKeydown = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle(i)
    } else if (e.key === 'Escape') {
      closeAll()
    }
  }

  /* Responsive breakpoint helper */
  const isSmall = () => window.matchMedia('(max-width: 900px)').matches

  /* ---------------------- POSITIONING ---------------------- */
  /**
   * Ensures dropdown never exceeds viewport bounds.
   * Adds a "right" class to align end when near the right edge,
   * and sets a max width/left offset to preserve a 20px safe margin.
   */
  const computeFlip = (i) => {
    const li = menuRefs.value[i]
    if (!li) return
    const drop = li.querySelector('.dropdown, .mega')
    if (!drop) return

    // reset classes/inline styles
    drop.classList.remove('right')
    drop.style.maxWidth = ''
    drop.style.left = ''
    drop.style.right = ''

    const vw = window.innerWidth
    const safe = 20
    const rect = drop.getBoundingClientRect()
    const liRect = li.getBoundingClientRect()

    // If dropdown would overflow right edge -> right align
    if (rect.right > vw - safe) {
      drop.classList.add('right')
    }

    // After alignment, enforce safe margins
    const newRect = drop.getBoundingClientRect()
    const overflowLeft = newRect.left < safe
    const overflowRight = newRect.right > vw - safe

    if (overflowLeft) {
      drop.style.left = `${safe - liRect.left}px`
    }
    if (overflowRight) {
      const max = vw - safe * 2
      drop.style.maxWidth = `${max}px`
    }

    // cache (optional debug / could be used for smarter logic)
    dropdownRects[i] = {
      left: newRect.left, right: newRect.right, width: newRect.width
    }
  }

  /* Returns style object—currently empty but kept for extension */
  const dropdownStyle = () => ({})
  /* Returns a class for alignment; we compute 'right' via computeFlip */
  const positionClass = () => ({})

  /* Mega grid columns: auto-fit columns >= 220px */
  const megaGridStyle = (item) => {
    const baseMin = 240
    const cols = Math.max(1, item.children.length)
    return {
      gridTemplateColumns: `repeat(${cols}, minmax(${baseMin}px, 1fr))`
    }
  }

  /* ---------------------- LIFECYCLE ---------------------- */
  const onResize = () => {
    // Recompute active dropdown on resize to keep it in view
    if (openIndex.value !== null) nextTick(() => computeFlip(openIndex.value))
  }
  onMounted(() => {
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', () => closeAll(), { passive: true })
    // Click outside to close
    document.addEventListener('click', (e) => {
      const nav = document.querySelector('.mega-nav')
      if (nav && !nav.contains(e.target)) closeAll()
    })
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', onResize)
  })
  </script>

  <style scoped>
  :root {
    --navy: #1e40af;
    --orange: #f97316;
    --ink: #212121;
    --muted: #4b5563;
    --border: #e5e7eb;
    --bg: #fafafa;
  }

  /* A11y helper */
  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden;
    clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }

  /* NAV WRAPPER */
  .mega-nav {
    background: #fff;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
    color: var(--ink);
  }
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 .75rem;
    display: flex;
    align-items: center;
    min-height: 56px;
  }

  /* HAMBURGER */
  .hamburger {
    display: none;
    margin-right: .5rem;
    background: transparent;
    border: 0;
    padding: .25rem;
    cursor: pointer;
  }
  .hamburger:focus-visible { outline: 2px solid var(--orange); outline-offset: 2px; }
  .hamburger-bar {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--ink);
    margin: 5px 0;
    transition: background .25s ease;
  }

  /* TOP-LEVEL MENU */
  .menu {
    display: flex;
    flex-wrap: wrap;         /* prevents horizontal scroll */
    gap: .5rem 1rem;
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
  }
  .menu-item { position: relative; }
  .menu-link {
    appearance: none;
    background: transparent;
    border: 0;
    color: var(--ink);
    font-weight: 700;
    font-size: 15px;
    padding: .8rem .35rem;
    cursor: pointer;
    transition: color .25s ease, background .25s ease;
    line-height: 1;
  }
  .menu-link:hover,
  .menu-link:focus-visible { color: var(--orange); }
  .menu-link.has-caret { display: inline-flex; align-items: center; gap: .45rem; }
  .caret { font-size: .75rem; transform: translateY(1px); color: var(--muted); }

  /* DROPDOWN (standard) */
  .dropdown {
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    min-width: 240px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: .6rem;
    padding: .5rem 0;
    box-shadow: 0 8px 24px rgba(0,0,0,.08);
    margin-top: .4rem;
    z-index: 1100;
  }
  .dropdown.right { left: auto; right: 0; }
  .dropdown-item { white-space: nowrap; }
  .dropdown-link {
    display: block;
    padding: .55rem 1rem;
    color: var(--ink);
    text-decoration: none;
    font-weight: 600;
    line-height: 1.2;
    min-height: 44px; /* touch target */
  }
  .dropdown-link:hover,
  .dropdown-link:focus-visible {
    background: rgba(249,115,22,.08);
    color: var(--orange);
  }

  /* MEGA MENU */
  .mega {
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: .8rem;
    padding: 1rem;
    box-shadow: 0 12px 28px rgba(0,0,0,.09);
    margin-top: .4rem;
    z-index: 1100;
    max-width: calc(100vw - 40px); /* 20px safe margin each side */
  }
  .mega.right { left: auto; right: 0; }
  .mega-grid {
    display: grid;
    gap: 1rem 1.25rem;
  }
  .mega-col { min-width: 240px; }
  .mega-title {
    font-weight: 800;
    color: var(--navy);
    margin-bottom: .5rem;
    padding-bottom: .35rem;
    border-bottom: 1px solid var(--border);
  }
  .mega-subgroups {
    display: grid;
    gap: .75rem 1rem;
  }
  .mega-subgroup { min-width: 220px; }
  .mega-subtitle {
    font-weight: 700;
    margin-bottom: .35rem;
    color: #333;
  }
  .mega-list { list-style: none; padding: 0; margin: 0; }
  .mega-link {
    display: block;
    text-decoration: none;
    color: var(--ink);
    font-weight: 600;
    padding: .45rem 0;
    min-height: 44px; /* touch target */
  }
  .mega-link:hover,
  .mega-link:focus-visible {
    color: var(--orange);
    background: rgba(249,115,22,.06);
    border-radius: .4rem;
    padding-left: .35rem;
    transition: all .2s ease;
  }

  /* TRANSITION */
  .fade-slide-enter-from,
  .fade-slide-leave-to { opacity: 0; transform: translateY(-6px); }
  .fade-slide-enter-active,
  .fade-slide-leave-active { transition: all .18s ease; }

  /* ACCESSIBILITY FOCUS */
  .menu-link:focus-visible,
  .dropdown-link:focus-visible,
  .mega-link:focus-visible {
    outline: 2px solid var(--orange);
    outline-offset: 2px;
    border-radius: .35rem;
  }

  /* MOBILE */
  @media (max-width: 900px) {
    .hamburger { display: inline-block; }
    .menu {
      display: none;
      flex-direction: column;
      gap: .25rem;
      width: 100%;
      padding: .5rem 0 1rem;
    }
    .menu.open { display: flex; }
    .menu-item { width: 100%; }
    .menu-link { width: 100%; text-align: left; padding: .9rem .2rem; border-bottom: 1px dashed var(--border); }
    .dropdown, .mega {
      position: static;
      border: 1px solid var(--border);
      margin: .4rem 0 0 .5rem;
      box-shadow: none;
      width: calc(100% - 1rem);
      max-width: 100%;
    }
    .mega-grid {
      grid-template-columns: 1fr; /* single column on small screens */
    }
  }
  </style>
  