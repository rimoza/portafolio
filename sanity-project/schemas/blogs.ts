export default {
    name: "article",
    title: "Article",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "author",
        title: "Author",
        type: "string",
      },
      {
        name: "datePublished",
        title: "Date Published",
        type: "date",
      },
      {
        name: "featuredImage",
        title: "Featured Image",
        type: "image",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
      },
      {
        name: "content",
        title: "Content",
        type: "object",
        fields: [
          {
            name: "introduction",
            title: "Introduction",
            type: "string",
          },
          {
            name: "body",
            title: "Body",
            type: "string",
          },
          {
            name: "steps",
            title: "Steps",
            type: "array",
            of: [
              {
                type: "object",
                fields: [
                  {
                    name: "stepNumber",
                    title: "Step Number",
                    type: "number",
                  },
                  {
                    name: "instruction",
                    title: "Instruction",
                    type: "string",
                  },
                ],
              },
            ],
          },
          {
            name: "conclusion",
            title: "Conclusion",
            type: "string",
          },
        ],
      },
    ],
  };
  