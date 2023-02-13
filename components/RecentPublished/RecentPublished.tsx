import React from "react";
import Link from "next/link";

import { IBlogPostData } from "../../types";

const RecentPublished = ({ recentPublished }: { recentPublished: IBlogPostData[] }) => {
  const latestTwoPosts = recentPublished.slice(0, 3);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Recently Published</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {latestTwoPosts.map((article: IBlogPostData) => (
          <Link
            href={`/blogs?id=${article._id}`}
            key={article._id}
            className="mb-8 cursor-pointer hover:underline w-full dark:text-[#000]"
          >
            <div className="px-4 py-5 bg-base-100 dark:text-[#fff] dark:bg-base-100 rounded-md shadow-md">
              <h3 className="text-xl font-bold mt-4">{article.title}</h3>
              <p className="text-gray-600 mt-2">
                {article.content.introduction.substring(0, 100)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPublished;
