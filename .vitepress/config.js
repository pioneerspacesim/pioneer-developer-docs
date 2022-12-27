import { scrapeSidebars } from "./theme/site-structure.js"

export default {
    title: 'Pioneer Developer Docs',
    description: 'A shared resource and design roadmap for Pioneer development',
    cleanUrls: 'with-subfolders',

    themeConfig: {
        nav: [
            { text: 'Design', link: '/design-document/' },
            { text: 'Contributor Guide', link: '/contribute/' },
            { text: 'Content Workflow', link: '/workflow/' },
            { text: 'Github', link: 'https://github.com/pioneerspacesim/pioneer' },
        ],
        sidebar: {
            "/contribute/": scrapeSidebars('contribute'),
            "/design-document/": scrapeSidebars('design-document'),
            "/workflow/": scrapeSidebars('workflow'),
        },
        editLink: {
            pattern: "https://github.com/pioneerspacesim/pioneer-developer-docs/edit/master/:path"
        }
    },

    vite: {
        server: { port: 5000 }
    }
}
