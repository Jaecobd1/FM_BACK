export default {
    name: 'post',
    type: 'document',
    title: 'News Post',
    fields: [{
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'content',
            type: 'text',
            title: 'Post Content'
        },
        {
            name: 'author',
            type: 'object',
            fields: [{
                title: 'Author',
                name: 'author',
                type: 'reference',
                to: [{ type: 'researcher' }]
            }]
        },
        {
            name: 'postLocation',
            type: 'geopoint',
            title: 'Location',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            readOnly: 'true',
            description: 'This is the URL extension for the post',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input.toLower()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }
    ]
}