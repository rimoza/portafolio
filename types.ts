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

export interface IBlogPostData {
  slice(arg0: number, arg1: number): any;
  _id: string;
  imageUrl: string;
  id: string;
  title: string;
  author: string;
  datePublished: string;
  category: string;
  tags: string[];
  content: {
    introduction: string;
    body: string;
    steps: {
      stepNumber: number;
      instruction: string;
    }[];
    category: string;
    conclusion: string;
  };
}
