import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "../../../components/Container/Container";
import ArticleHero from "../../../components/ArticleHero/ArticleHero";
import RecentPublished from "../../../components/RecentPublished/RecentPublished";
import { articlesData } from "../../../dummyData";

export default function BlogItemPage({ params }: { params: { id: string } }) {
  const article = articlesData.find((article) => article.id === params.id);
  const recentPublished = articlesData.slice(0, 3);

  if (!article) {
    notFound();
  }

  return (
    <Container>
      <ArticleHero title={article.title} imageUrl={article.featuredImage} />
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
          {article.content.steps.map((step) => (
            <div key={step.stepNumber}>
              <h3 className="text-xl mb-2 font-semibold">
                Step: {step.stepNumber}
              </h3>
              <p className="mb-2 text-xl leading-relaxed">{step.instruction}</p>
            </div>
          ))}
          <h2 className="text-2xl mb-2 font-semibold">Conclusion</h2>
          <p className="mb-2 text-xl leading-relaxed">
            {article.content.conclusion}
          </p>
        </div>
        <div className="mt-10 flex justify-center relative">
          <Image
            className="h-96 w-full max-w-6xl rounded-xl object-cover inset-0 lg:w-4/5 transform hover:scale-[1.01] transition-all cursor-pointer"
            src={article.featuredImage}
            alt={article.title}
            width={500}
            height={500}
          />
        </div>
      </div>
      <RecentPublished recentPublished={recentPublished} />
    </Container>
  );
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id,
  }));
}
