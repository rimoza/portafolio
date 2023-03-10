import React from "react";

import client from "../../api/sanityClient";

import { IBlogPostData } from "../../types";

import Container from "../../components/Container/Container";
import ArticleList from "../../components/Blog/ArticlesList/ArticleList";

const BlogPage = ({ blogs }: { blogs: IBlogPostData[] }) => {
  if (!blogs) {
    return (
      <Container>
        <div className="h-[500px] flex justify-center items-center">
          <div className="alert bg-[#bcb9b9] shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-xl font-semibold">No Articles Found</span>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div>
      <ArticleList blogs={blogs} />
    </div>
  );
};

export default BlogPage;

export async function getStaticProps() {
  const blogs = await client.fetch(
    `*[_type == "blogs"] | {_id, title, author, datePublished, 'imageUrl': featuredImage.asset->url, category, tags[], content}`
  );
  return {
    props: {
      blogs,
    },
  };
}
