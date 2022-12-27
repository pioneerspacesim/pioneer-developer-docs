
import fg from 'fast-glob'
import matter from 'gray-matter'
import categories from '../../categories.json'

export function scrapeSidebars(dir) {
    const files = fg.sync([ dir + '/*.md' ])

    let sidebarList = []

    for (key in categories) {
        // duplicate the category entry but share the items list for easy access
        categories[key].items = []
        sidebarList.push(Object.assign({}, categories[key]))
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

        let link = file.replace('index.md', '').replace('.md', '')
        
        categories[category].items.push({
            text: data.title || file.replace(dir + '/', ''),
            link: `/${link}`
        })
    })

    return sidebarList.filter((val) => val.items.length > 0)
}
