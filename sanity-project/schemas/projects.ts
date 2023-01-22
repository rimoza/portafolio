export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Website', value: 'website'},
          {title: 'is system', value: 'system'},
        ],
      },
    },
    {
      name: 'websiteUrl',
      title: 'Website URL',
      type: 'url',
    },
    {
      name: 'system',
      title: 'System',
      type: 'string',
    },
  ],
}
