// Shared placement data service
export const placementService = {
    // Top companies data (from Placements.vue)
    topCompanies: [
        {
            name: 'Accenture',
            category: 'Consulting',
            offers: 12,
            avgPackage: 6.5,
            logo: new URL('@/assets/companies/Accenture.png', import.meta.url).href
        },
        {
            name: 'Capgemini',
            category: 'IT Services',
            offers: 8,
            avgPackage: 5.8,
            logo: new URL('@/assets/companies/Capgemini.svg', import.meta.url).href
        },
        {
            name: 'Hexaware',
            category: 'IT Services',
            offers: 6,
            avgPackage: 5.5,
            logo: new URL('@/assets/companies/HW.png', import.meta.url).href
        },
        {
            name: 'Infosys',
            category: 'IT Services',
            offers: 18,
            avgPackage: 5.2,
            logo: new URL('@/assets/companies/Infosys.png', import.meta.url).href
        },
        {
            name: 'Tech Mahindra',
            category: 'IT Services',
            offers: 15,
            avgPackage: 4.8,
            logo: new URL('@/assets/companies/TechM.png', import.meta.url).href
        },
        {
            name: 'Microsoft',
            category: 'Product',
            offers: 5,
            avgPackage: 12,
            logo: new URL('@/assets/microsoft.png', import.meta.url).href
        }
    ],

    // Get top placements for PlacementHighlights component
    getTopPlacements() {
        return this.topCompanies.slice(0, 5).map((company, index) => ({
            id: index + 1,
            company: company.name,
            students: company.offers.toString(),
            logo: company.logo
        }))
    },

    // Get top recruiters
    getTopRecruiters() {
        return [
            {
                name: 'Tech Mahindra',
                logo: new URL('@/assets/companies/TechM.png', import.meta.url).href,
                info: 'Leading IT Services'
            },
            {
                name: 'Infosys',
                logo: new URL('@/assets/companies/Infosys.png', import.meta.url).href,
                info: 'Global Technology'
            },
            {
                name: 'Wipro',
                logo: new URL('@/assets/wipro.png', import.meta.url).href,
                info: 'IT Solutions'
            },
            {
                name: 'Microsoft',
                logo: new URL('@/assets/microsoft.png', import.meta.url).href,
                info: 'Technology Giant'
            },
            {
                name: 'Oracle',
                logo: new URL('@/assets/oracle.png', import.meta.url).href,
                info: 'Database Solutions'
            },
            {
                name: 'Cisco',
                logo: new URL('@/assets/cisco.png', import.meta.url).href,
                info: 'Networking Leader'
            }
        ]
    },

    // Campus placements 2025 data
    getCampusPlacements2025() {
        return {
            title: 'Campus Placements 2025:',
            companies: [
                { name: 'Cognizant', students: 154 },
                { name: 'Infosys', students: 42 },
                { name: 'Tech Mahindra', students: 28 },
                { name: 'HCL Tech', students: 27 },
                { name: 'Capgemini', students: 17 },
                { name: 'GlobalLogic', students: 38 },
                { name: 'TCS', students: 18 }
            ]
        }
    }
}
