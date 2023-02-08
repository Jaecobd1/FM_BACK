export default {
    name: 'engineering',
    type: 'document',
    title: 'Online Engineering Program',
    fields: [{
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Hero Image',
            name: 'hero',
            type: 'image'

        },
        {
            title: 'Written Content',
            name: 'Content',
            type: 'text'
        },
        {
            title: "Video Link",
            name: 'link',
            type: 'string'
        }
    ]
}