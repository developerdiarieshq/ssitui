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
import CampusGallery from '@/views/CampusGallery.vue'
import Greivence from '@/views/greivence/Greivence.vue'
import Strength from './views/about/Strength.vue'
import MandatoryDisclosure from './views/about/MandatoryDisclosure.vue'
import Library from './views/amenities/Library.vue'
import Scholarship from './views/studentcorner/Scholarship.vue'
import Cafeteria from '@/views/amenities/Cafeteria.vue'
import SocialServices from './views/studentcorner/SocialServices.vue'
import Committees from './views/governance/Committees.vue'
import GoverningBody from './views/governance/GoverningBody.vue'
import iqac from './views/governance/iqac.vue'
import Policies from './views/governance/Policies.vue'
import Organogram from './views/governance/Organogram.vue'
import AcademicRegulations from './views/Academics/AcademicRegulations.vue'
import AcademicCalendar from './views/Academics/AcademicCalendar.vue'
import Incentives from './views/Academics/Incentives.vue'
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
import DigitalLibrary from './views/amenities/DigitalLibrary.vue'
import IctFacilities from './views/amenities/IctFacilities.vue'
import Placements from './views/Placements.vue'

// EXAMINATIONS
import Coe from './views/examinations/Coe.vue'
import ExamNotifications from './views/examinations/ExamNotifications.vue'
import Syllabus from './views/examinations/Syllabus.vue'
import Timetables from './views/examinations/Timetables.vue'
import Results from './views/examinations/Results.vue'

//DEPARTMENTS
import Cse from './views/departments/CSE.vue'
import CseAi from './views/departments/CseAi.vue'
import CseAiDs from './views/departments/CseAiDs.vue'
import Ece from './views/departments/Ece.vue'
import Sh from './views/departments/sh.vue'
import Polytechnic from './views/departments/Polytechnic.vue'
import Eee from './views/departments/Eee.vue'
import Mech from './views/departments/Mech.vue'
import Examination from './views/departments/Examination.vue'
import Mba from './views/departments/Mba.vue'

// DIPLOMA DEPARTMENTS
import DME from './views/departments/DME.vue'
import DEEE from './views/departments/DEEE.vue'
import DECE from './views/departments/DECE.vue'

// B-Category Seats Components
import MBABCategorySeats from './views/BCategorySeats/MBA.vue'
import BTECHBCategorySeats from './views/BCategorySeats/BTECH.vue'
import PolytechnicBCategorySeats from './views/BCategorySeats/Polytechnic.vue'





//student corner

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
    { path: '/organogram', component: Organogram },
    { path: '/academic-regulations', component: AcademicRegulations },
    { path: '/academic-calendar', component: AcademicCalendar },
    { path: '/incentives', component: Incentives },
    { path: '/awards', component: Awards },
    { path: '/approvals', component: Approvals },
    { path: '/admissions', component: Admissions },
    { path: '/placements', component: Placements },
    { path: '/placements/:tab', component: Placements },
    { path: '/anti-ragging', component: AntiRagging },
    { path: '/internet', component: Internet },
    { path: '/english-labs', component: EnglishLabs },
    { path: '/counselling', component: Counselling },
    { path: '/seminar-hall', component: SeminarHall },
    { path: '/hostels', component: Hostels },
    { path: '/transportation', component: Transportation },
    { path: '/campus-gallery', component: CampusGallery },
    { path: '/e-classrooms', component: EClassRooms },
    { path: '/staff-quarters', component: StaffQuarters },
    { path: '/temple', component: Temple },
    { path: '/digital-library', component: DigitalLibrary },
    { path: '/ict-facilities', component: IctFacilities },

    // Examinations Routes
    { path: '/controller-of-examinations', component: Coe },
    { path: '/coe', component: Coe },
    { path: '/exam-notices', component: ExamNotifications },
    { path: '/exam-syllabus', component: Syllabus },
    { path: '/exam-timetables', component: Timetables },
    { path: '/exam-results', component: Results },

    { path: '/cse', component: Cse },
    { path: '/cse/:tab', component: Cse },
    { path: '/cse-ai', component: CseAi },
    { path: '/cse-ai/:tab', component: CseAi },
    { path: '/cse-ai-ds', component: CseAiDs },
    { path: '/cse-ai-ds/:tab', component: CseAiDs },
    { path: '/ece', component: Ece },
    { path: '/ece/:tab', component: Ece },
    { path: '/sh', component: Sh },
    { path: '/sh/:tab', component: Sh },
    { path: '/polytechnic', component: Polytechnic },
    { path: '/polytechnic/:tab', component: Polytechnic },
    { path: '/eee', component: Eee },
    { path: '/eee/:tab', component: Eee },
    { path: '/mech', component: Mech },
    { path: '/mech/:tab', component: Mech },
    { path: '/examination-branch', component: Examination },
    { path: '/examination-branch/:tab', component: Examination },
    { path: '/mba', component: Mba },
    { path: '/mba/:tab', component: Mba },

    // Diploma Department Routes
    { path: '/dme', component: DME },
    { path: '/dme/:tab', component: DME },
    { path: '/deee', component: DEEE },
    { path: '/deee/:tab', component: DEEE },
    { path: '/dece', component: DECE },
    { path: '/dece/:tab', component: DECE },

    // B-Category Seats Routes
    { path: '/mba-b-category-seats', component: MBABCategorySeats },
    { path: '/btech-b-category-seats', component: BTECHBCategorySeats },
    { path: '/polytechnic-b-category-seats', component: PolytechnicBCategorySeats },

    // Redirects for missing routes
    { path: '/trust', redirect: '/society' }

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
                // Don't scroll to top for tab navigation within same component
                if ((to.path.includes('/cse/') && from.path.includes('/cse/')) ||
                    (to.path.includes('/cse-ai/') && from.path.includes('/cse-ai/')) ||
                    (to.path.includes('/cse-ai-ds/') && from.path.includes('/cse-ai-ds/')) ||
                    (to.path.includes('/ece/') && from.path.includes('/ece/')) ||
                    (to.path.includes('/eee/') && from.path.includes('/eee/')) ||
                    (to.path.includes('/mech/') && from.path.includes('/mech/')) ||
                    (to.path.includes('/mba/') && from.path.includes('/mba/')) ||
                    (to.path.includes('/sh/') && from.path.includes('/sh/')) ||
                    (to.path.includes('/polytechnic/') && from.path.includes('/polytechnic/')) ||
                    (to.path.includes('/dme/') && from.path.includes('/dme/')) ||
                    (to.path.includes('/deee/') && from.path.includes('/deee/')) ||
                    (to.path.includes('/dece/') && from.path.includes('/dece/')) ||
                    (to.path.includes('/examination-branch/') && from.path.includes('/examination-branch/')) ||
                    (to.path.includes('/placements/') && from.path.includes('/placements/'))) {
                    return false
                }
                // For other navigation, scroll to top
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
                // Don't scroll to top for tab navigation within same component
                if ((to.path.includes('/cse/') && from.path.includes('/cse/')) ||
                    (to.path.includes('/cse-ai/') && from.path.includes('/cse-ai/')) ||
                    (to.path.includes('/cse-ai-ds/') && from.path.includes('/cse-ai-ds/')) ||
                    (to.path.includes('/ece/') && from.path.includes('/ece/')) ||
                    (to.path.includes('/eee/') && from.path.includes('/eee/')) ||
                    (to.path.includes('/mech/') && from.path.includes('/mech/')) ||
                    (to.path.includes('/mba/') && from.path.includes('/mba/')) ||
                    (to.path.includes('/sh/') && from.path.includes('/sh/')) ||
                    (to.path.includes('/polytechnic/') && from.path.includes('/polytechnic/')) ||
                    (to.path.includes('/dme/') && from.path.includes('/dme/')) ||
                    (to.path.includes('/deee/') && from.path.includes('/deee/')) ||
                    (to.path.includes('/dece/') && from.path.includes('/dece/')) ||
                    (to.path.includes('/examination-branch/') && from.path.includes('/examination-branch/')) ||
                    (to.path.includes('/placements/') && from.path.includes('/placements/'))) {
                    return false
                }
                // For other navigation, scroll to top
                return { top: 0 }
            }
        }
    }

    // Fallback to hash mode for maximum compatibility
    return {
        history: createWebHashHistory(),
        routes,
        scrollBehavior(to, from, savedPosition) {
            // Don't scroll to top for tab navigation within same component
            if ((to.path.includes('/cse/') && from.path.includes('/cse/')) ||
                (to.path.includes('/placements/') && from.path.includes('/placements/')) ||
                (to.path.includes('/eee/') && from.path.includes('/eee/')) ||
                (to.path.includes('/ece/') && from.path.includes('/ece/'))) {
                return false
            }
            // For other navigation, scroll to top
            return { top: 0 }
        }
    }
}

const router = createRouter(getRouterConfig())

export default router
