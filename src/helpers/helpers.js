const slugify = require('slugify')

const generateSlug = (string) => {
    return slugify(string, {
        replacement: '-',
        remove: undefined,
        lower: true,
        strict: true,
    })
}

export default { generateSlug }
