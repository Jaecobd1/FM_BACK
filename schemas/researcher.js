export default {
    name: 'researcher',
    title: 'Researchers',
    type: 'document',
    fields: [{
            name: 'name',
            type: 'string',
            Title: 'Name'
        },
        {
            name: 'education',
            type: 'string',
            title: 'Education Level',
            description: 'example: PH. D'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'bio',
            type: 'text',
            title: 'Bio',
            description: 'Tell a little about yourself.'
        },
        {
            name: 'linkOnehref',
            title: 'Link one',
            type: 'string',
            description: "example: www.familymakers.net"

        },
        {
            name: 'linkOnename',
            title: 'Link One Title',
            type: 'string',
            description: 'example: LinkedIn'
        },
        {
            name: 'linkTwohref',
            title: 'Link Two',
            type: 'string',


        },
        {
            name: 'linkTwoName',
            title: 'Link Two Title',
            type: 'string'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            readOnly: 'false',
            description: 'This is the URL extension for the post',
            options: {
                source: 'name',
                maxLength: 200,
                slugify: input => input.toLower()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        }
    ]
}