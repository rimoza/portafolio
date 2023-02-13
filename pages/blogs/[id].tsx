import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

import client from "../../api/sanityClient";
import { IBlogPostData } from "../../types";
import Container from "../../components/Container/Container";
import ArticleHero from "../../components/ArticleHero/ArticleHero";
import RecentPublished from "../../components/RecentPublished/RecentPublished";

const BlogItemPage = ({ article }: { article: IBlogPostData}) => {
  console.log('article:', article)
  const router = useRouter();

  if (!article) {
    return (
      <Container>
        <div className="h-[500px] flex justify-center items-center">
          <div className="alert bg-[#bcb9b9]">
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
              <span className="text-xl font-semibold">
                The Article Is Found
              </span>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <ArticleHero title={article.title} imageUrl={article.imageUrl} />
      <div className="mx-5 md:mx-0">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <p className="text-sm text-gray-600 mb-4 italic">
          by {article.author} on {article.datePublished}
        </p>
        <div className="mb-4">
          <h2 className="text-2xl mb-2 font-semibold">Introduction</h2>
          <p className="mb-2 text-xl leading-relaxed">
            {article.content.introduction}
          </p>
          <h2 className="text-2xl mb-2 font-semibold">---</h2>
          <p className="mb-2 text-xl leading-relaxed">{article.content.body}</p>
          {article.content.steps.map((step) => {
            return (
              <div key={step.stepNumber}>
                <h3 className="text-xl mb-2 font-semibold">
                  Step: {step.stepNumber}
                </h3>
                <p className="mb-2 text-xl leading-relaxed">
                  {step.instruction}
                </p>
              </div>
            );
          })}
          <h2 className="text-2xl mb-2 font-semibold">Conclusion</h2>
          <p className="mb-2 text-xl leading-relaxed">
            {article.content.conclusion}
          </p>
        </div>
        <div className="mt-10 flex justify-center relative">
          <Image
            className="h-96 w-full max-w-6xl rounded-xl object-cover  inset-0 lg:w-4/5 transform hover:scale-[1.01] transition-all cursor-pointer"
            src={article.imageUrl}
            alt={article.title}
            width={500}
            height={500}
          />
        </div>
      </div>
      <RecentPublished article={article} />
    </Container>
  );
};

export default BlogItemPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  console.log('params:', params);
  if (!params) return { props: {} };

  const query = `*[_id == $itemId] {_id, title, author, datePublished, 'imageUrl': featuredImage.asset->url, category, tags[], content}`;
  console.log('query:', query);

  try {
    const article = await client.fetch(query, { itemId: params.id });
    return {
      props: {
        article: article[0],
      },
    };
  } catch (error) {
    console.log("error:", error);
  }

  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await client.fetch(`*[_type == "blogs"] | {_id, title, author, datePublished, 'imageUrl': featuredImage.asset->url, category, tags[], content}`);
    console.log('blogs:', blogs);

  if (!blogs) return { paths: [], fallback: false };

  const paths =
    blogs.map((article: IBlogPostData) => ({
      params: {
        id: article._id.toString(),
      },
    })) || [];

  return {
    paths,
    fallback: false,
  };
};
