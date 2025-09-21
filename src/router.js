import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// Pages
import Home from '@/components/Home.vue'
import AboutUs from '@/views/about/AboutUs.vue'
import PrincipalDesk from '@/views/about/PrincipalDesk.vue'
import Society from '@/views/about/Society.vue'
import AcademicCouncil from './views/about/AcademicCouncil.vue'
import Management from './views/about/Management.vue'
import VisionMission from './views/about/VisionMission.vue'
import Quality from './views/about/Quality.vue'
import ContactUs from '@/components/ContactUs.vue'
import Sports from '@/views/studentcorner/Sports.vue'
import Greivence from '@/views/greivence/Greivence.vue'
import Strength from './views/about/Strength.vue'
import MandatoryDisclosure from './views/about/MandatoryDisclosure.vue'
import Library from './views/amenities/Library.vue'
import Scholarship from './views/studentcorner/Scholarship.vue'
import Cafeteria from '@/views/studentcorner/Cafeteria.vue'
import SocialServices from './views/studentcorner/SocialServices.vue'
import Committees from './views/governance/Committees.vue'
import GoverningBody from './views/governance/GoverningBody.vue'
import iqac from './views/governance/iqac.vue'
import Policies from './views/governance/Policies.vue'
import AcademicRegulations from './views/academics/AcademicRegulations.vue'
import AcademicCalendar from './views/Academics/AcademicCalendar.vue'
import incentives from './views/Academics/incentives.vue'
import Awards from './views/Academics/Awards.vue'
import Approvals from './views/Academics/Approvals.vue'
import Admissions from './views/Admissions/Admissions.vue'
import AntiRagging from './views/studentcorner/AntiRagging.vue'
import Internet from './views/amenities/Internet.vue'
import EnglishLabs from './views/amenities/EnglishLabs.vue'
import Counselling from './views/amenities/Counselling.vue'
import SeminarHall from './views/amenities/SeminarHall.vue'
import Hostels from './views/amenities/Hostels.vue'
import Transportation from './views/amenities/Transportation.vue'
import EClassRooms from './views/amenities/EClassRooms.vue'
import StaffQuarters from './views/amenities/StaffQuarters.vue'
import Temple from './views/amenities/Temple.vue'

//DEPARATMENTS
import Cse from './views/departments/Cse.vue'
import CseAi from './views/departments/CseAi.vue'
import CseAiDs from './views/departments/CseAiDs.vue'
import Ece from './views/departments/Ece.vue'
import Sh from './views/departments/Sh.vue'
import Polytechnic from './views/departments/Polytechnic.vue'
import Eee from './views/departments/Eee.vue'
import Mech from './views/departments/Mech.vue'
import Examination from './views/departments/Examination.vue'





//staudent corenr

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about-us', component: AboutUs },
    { path: '/principal-desk', component: PrincipalDesk },
    { path: '/academic-council', component: AcademicCouncil },
    { path: '/management', component: Management },
    { path: '/vision-mission', component: VisionMission },
    { path: '/quality-policy', component: Quality },
    { path: '/strength', component: Strength },
    { path: '/mandatory-disclosure', component: MandatoryDisclosure },
    { path: '/society', component: Society },
    { path: '/contact', component: ContactUs },
    { path: '/sports', component: Sports },
    { path: '/greivence', component: Greivence },
    { path: '/library', component: Library },
    { path: '/scholarship', component: Scholarship },
    { path: '/cafeteria', component: Cafeteria },
    { path: '/social-services', component: SocialServices },
    { path: '/committees', component: Committees },
    { path: '/governing-body', component: GoverningBody },
    { path: '/iqac', component: iqac },
    { path: '/policies', component: Policies },
    { path: '/academic-regulations', component: AcademicRegulations },
    { path: '/academic-calendar', component: AcademicCalendar },
    { path: '/incentives', component: incentives },
    { path: '/awards', component: Awards },
    { path: '/approvals', component: Approvals },
    { path: '/admissions', component: Admissions },
    { path: '/anti-ragging', component: AntiRagging },
    { path: '/internet', component: Internet },
    { path: '/english-labs', component: EnglishLabs },
    { path: '/counselling', component: Counselling },
    { path: '/seminar-hall', component: SeminarHall },
    { path: '/hostels', component: Hostels },
    { path: '/transportation', component: Transportation },
    { path: '/e-classrooms', component: EClassRooms },
    { path: '/staff-quarters', component: StaffQuarters },
    { path: '/temple', component: Temple },
    { path: '/cse', component: Cse },
    { path: '/cse-ai', component: CseAi },
    { path: '/cse-aids', component: CseAiDs },
    { path: '/ece', component: Ece },
    { path: '/sh', component: Sh },
    { path: '/polytechnic', component: Polytechnic },
    { path: '/eee', component: Eee },
    { path: '/mech', component: Mech },
    { path: '/examination-branch', component: Examination }

]

// Universal router configuration that works on any hosting platform
const getRouterConfig = () => {
    // Detect if we're on GitHub Pages with a custom domain or subdirectory
    const isGitHubPages = window.location.hostname.includes('github.io') ||
        window.location.pathname.includes('/ssitui/') ||
        process.env.NODE_ENV === 'production' && window.location.pathname !== '/'

    // Detect if we're in development mode
    const isDevelopment = process.env.NODE_ENV === 'development'

    // For GitHub Pages with subdirectory, use the subdirectory path
    if (isGitHubPages && window.location.pathname.includes('/ssitui/')) {
        return {
            history: createWebHistory('/ssitui/'),
            routes,
            scrollBehavior(to, from, savedPosition) {
                return { top: 0 }
            }
        }
    }

    // For other platforms (Apache, Nginx, Netlify, Vercel, etc.), use clean URLs
    if (isDevelopment || !isGitHubPages) {
        return {
            history: createWebHistory(),
            routes,
            scrollBehavior(to, from, savedPosition) {
                return { top: 0 }
            }
        }
    }

    // Fallback to hash mode for maximum compatibility
    return {
        history: createWebHashHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            return { top: 0 }
        }
    }
}

const router = createRouter(getRouterConfig())

export default router
