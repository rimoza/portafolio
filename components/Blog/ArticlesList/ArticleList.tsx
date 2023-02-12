import React from "react";

import Heading from "../../UI/Heading";
import Container from "../../Container/Container";
import ArticleITem from "../ArticlesItem/ArticleITem";

const ArticleList = ({ articlesData }: { articlesData: any }) => {
  return (
    <Container>
      <div className="my-10">
        <Heading>Articles</Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 md:mx-0">
        {articlesData.map((article: any) => (
            <ArticleITem key={article.id} article={article} />
        ))}
      </div>
    </Container>
  );
};

export default ArticleList;
