import { scrapeSidebars } from "./theme/site-structure.js"

let sidebar = {
    text: "",
    items: [
        { text: "Design Overview", link: "/readme" },
        { text: "Contributing", link: "/contributing" }
    ]
}

export default {
    title: 'Pioneer Developer Docs',
    description: 'Browsable developer information repository for Pioneer Space Sim',
    cleanUrls: 'without-subfolders',

    themeConfig: {
        nav: [
            { text: 'Design', link: '/readme' }
        ],
        sidebar: {
            "/": sidebar,
            "/pages/": scrapeSidebars('pages')
        }
    },

    vite: {
        server: { port: 5000 }
    }
}
