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
        name: 'keywords',
        title: 'Keywords',
        type: 'array',
        of: [{type: 'string'}]
      }
    ]
  }