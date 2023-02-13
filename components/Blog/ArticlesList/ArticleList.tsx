import React from "react";

import Heading from "../../UI/Heading";
import { IBlogPostData } from "../../../types";
import Container from "../../Container/Container";
import ArticleITem from "../ArticlesItem/ArticleITem";
import ArticleHero from "../../ArticleHero/ArticleHero";

const ArticleList = ({ blogs }: { blogs: IBlogPostData[] }) => {
  
  return (
    <Container>
        <ArticleHero title='All Articles' imageUrl="/images/box3.png" />
      <div className="my-10">
        <Heading>Articles</Heading>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 md:mx-0">
        {blogs.map((article: IBlogPostData) => (
            <ArticleITem key={article._id} article={article} />
        ))}
      </div>
    </Container>
  );
};

export default ArticleList;
