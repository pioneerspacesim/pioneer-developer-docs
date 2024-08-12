
import fg from 'fast-glob'
import matter from 'gray-matter'
import categories from '../../categories.json'

// "simple" spaceship operator over partially-undefined types
const spaceship = (a, b) => {
    if (a !== undefined && b === undefined)
        return -1
    else if (a === undefined && b !== undefined)
        return 1
    else if (a === undefined) // both undefined
        return 0
    else
        return a < b ? -1 : (a > b ? 1 : 0)
}

export function scrapeSidebars(dir) {
    const files = fg.sync([ dir + '/**/*.md' ])

    var sidebarList = []

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
            link: `/${link}`,
            order: data.order
        })
    })

    sidebarList = sidebarList.filter((val) => val.items.length > 0)

    sidebarList.forEach((category) => {
        category.items.sort((a, b) => {
            let order = spaceship(a.order, b.order)
            return order !== 0 ? order : spaceship(a.text.toUpperCase(), b.text.toUpperCase())
        })
    })

    return sidebarList
}
