export interface IProjects {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  websiteUrl?: string;
  type?: string;
  imageUrl?: string;
}
export interface ISkills {
  id?: string;
  name: string;
  title?: string;
}

export interface IBlogPostData {
  id: string;
  title: string;
  author: string;
  datePublished: string;
  featuredImage: string;
  category: string;
  tags: string[];
  content: {
    introduction: string;
    body: string;
    steps: {
      stepNumber: number;
      instruction: string;
    }[];
    conclusion: string;
  };
  _id?: string;  // Make this optional
  imageUrl?: string;  // Make this optional
}
