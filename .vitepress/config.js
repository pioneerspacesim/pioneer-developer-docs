import md_footnote from 'markdown-it-footnote'

import { scrapeSidebars } from "./theme/site-structure.js"

let mdConfig = (md) => {
    md.use(md_footnote)
}

export default {
    title: 'Pioneer Developer Docs',
    description: 'A shared resource and design roadmap for Pioneer development',
    cleanUrls: true,
    ignoreDeadLinks: true,

    themeConfig: {
        nav: [
            { text: 'Contributor Guide', link: '/contribute/' },
            { text: 'Design', link: '/design-document/' },
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

    markdown: {
        config: mdConfig,
        theme: 'material-theme-palenight'
    },

    vite: {
        server: { port: 5000 }
    }
}
