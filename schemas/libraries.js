export default {
    name: 'libraries',
    type: 'document',
    title: 'Libraries',
    fields: [{
            name: 'title',
            title: 'Name of Library',
            type: 'string'
        },
        {
            name: 'librarian',
            title: 'Name of Contact',
            type: 'string'
        },
        {
            name: 'contactTitle',
            title: 'Title of Contact',
            type: 'string'
        },
        {
            type: 'image',
            name: 'image',
            title: 'Image'
        },
        {
            name: 'city',
            type: 'string',
            title: 'City'
        },
        {
            name: 'state',
            type: 'string',
            title: 'State'
        },
        {
            name: 'email',
            type: 'string',
            title: "Email"
        },
        {
            name: 'address',
            type: 'text',
            title: 'Mailing Address'
        },
        {
            type: 'geopoint',
            name: 'location',
            title: 'Library Coordinates'
        }
    ]
}