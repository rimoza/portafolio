import React from "react";
import { useRouter } from "next/router";

import { articlesData } from "../../dummyData";
import Container from "../../components/Container/Container";

const BlogItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <Container>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
        <div className="mb-4">
          <img src={article.featuredImage} alt={article.title} />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          by {article.author} on {article.datePublished}
        </p>
        <div className="mb-4">
          <h2 className="text-lg font-medium mb-2">{article.title}</h2>
          <p>{article.content.introduction}</p>
          <p>{article.content.body}</p>
          {article.content.steps.map((step) => {
            return (
              <div key={step.stepNumber}>
                <h3>Step: {step.stepNumber}</h3>
                <p>{step.instruction}</p>
              </div>
            );
          })}
          <p>{article.content.conclusion}</p>
        </div>
      </div>
    </Container>
  );
};

export default BlogItemPage;
