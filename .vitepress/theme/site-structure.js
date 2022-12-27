
import fg from 'fast-glob'
import matter from 'gray-matter'
import categories from '../../categories.json'

export function scrapeSidebars(dir) {
    const files = fg.sync([ dir + '/*.md' ])

    let sidebarList = []
    for (key in categories) {
        categories[key].items = []
    }

    files.forEach((file) => {
        const { data } = matter.read(file)

        let category = data.category || "uncategorized"

        if (!categories[category]) {
            console.log(`${file} no such category ${category}`)
            return
        }

        if (data.hidden) {
            return
        }
        
        categories[category].items.push({
            text: data.title || file,
            link: `/${file.replace('.md', '')}`
        })
    })

    for (key in categories) {
        if (categories[key].items.length > 0) {
            sidebarList.push(categories[key])
        }
    }

    return sidebarList
}
