import React from "react";

const RecentPublished = ({ articlesData }: { articlesData: any }) => {
    const latestTwoPosts = articlesData.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Recently Published</h2>
      <div className="flex flex-wrap -mx-4">
        {latestTwoPosts.map((article: any) => (
          <div className="w-1/3 px-4 mb-8" key={article.id}>
            <h3 className="text-xl font-bold mt-4">{article.title}</h3>
            <p className="text-gray-600 mt-2">
              {article.content.introduction.substring(0, 100)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPublished;
