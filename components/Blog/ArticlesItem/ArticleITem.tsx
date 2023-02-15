import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IBlogPostData } from "../../../types";

const ArticleITem = ({ article }: { article: IBlogPostData }) => {
  return (
    <div className="card w-full md:w-96 bg-base-100 dark:text-bg">
      <Link
        href={`/blogs/${article._id}`}
        className="transform hover:scale-[1.01] transition-all"
      >
        <figure className="p-5">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={500}
            height={500}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p>
            <span className="font-semibold">Author</span> | {article.author}
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              Tags: {article.tags.join(" , ")}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleITem;
