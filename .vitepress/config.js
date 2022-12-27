import { sidebar } from "./theme/site-structure.js"

let pages = sidebar('pages')
pages.unshift({ text: "Design Document", link: "/readme" })

export default {
    title: 'Pioneer Developer Docs',
    description: 'Browsable developer information repository for Pioneer Space Sim',

    themeConfig: {
        nav: [
            { text: 'Design', link: '/readme' }
        ],
        sidebar: [
            {
                text: '',
                items: [
                    { text: 'Design Overview', link:'/readme' },
                    { text: 'Current State', link: '/pages/current_state' },
                ]
            },
            {
                text: 'Pages',
                collapsible: true,
                link: '/readme',
                items: sidebar('pages')
            }
        ]
    },

    vite: {
        server: { port: 5000 }
    }
}
