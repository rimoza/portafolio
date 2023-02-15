export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        title: 'Icon',
        name: 'icon',
        type: 'image',
      },
      {
        name: 'keywords',
        title: 'Keywords',
        type: 'array',
        of: [{type: 'string'}]
      }
    ]
  }