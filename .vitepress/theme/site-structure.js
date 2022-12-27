
import fg from 'fast-glob'
import matter from 'gray-matter'

export function sidebar(dir) {
    const files = fg.sync([ dir + '/*.md' ])
    let fileList = []

    files.forEach((file) => {
        const { data } = matter.read(file)
        fileList.push({
            text: data.title || file,
            link: `/${file.replace('.md', '')}`,
        })
    })

    return fileList
}
