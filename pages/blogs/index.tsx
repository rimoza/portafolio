import React from 'react';
import ArticleList from '../../components/Blog/ArticlesList/ArticleList';

import { articlesData } from '../../dummyData';

const BlogPage = () => {
    
    if(!articlesData) {
        return null;
    }

  return (
    <div>
        <ArticleList articlesData={articlesData} />
    </div>
  )
}

export default BlogPage;