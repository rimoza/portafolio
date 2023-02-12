export interface IProjects {
  websiteUrl: string;
  type: string;
  imageUrl: string;
  _id: string;
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

export interface ISkills {
  id?: string;
  name: string;
  title?: string;
}

export interface BlogPostData {
  id: string;
  title: string;
  author: string;
  date_published: string;
  featured_image: string;
  category: string;
  tags: string[];
  content: {
    introduction: string;
    body: string;
    steps: {
      step_number: number;
      instruction: string;
    }[];
    category: string;
    conclusion: string;
  };
}
