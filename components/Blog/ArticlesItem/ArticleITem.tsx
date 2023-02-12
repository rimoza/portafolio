import React from "react";
import Link from "next/link";
import Image from "next/image";

const ArticleITem = ({ article }: { article: any }) => {
  return (
    <Link href={`/blogs/${article.id}`} className='transform hover:scale-[1.01] transition-all'>
      <div className="card w-full md:w-96 bg-base-100 dark:bg-bg">
        <figure className="p-5">
          <Image
            src={article.featuredImage}
            alt={article.title}
            width={500}
            height={500}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{article.title}</h2>
          <p> <span className='font-semibold'>Author</span> | {article.author} </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Tags: {article.tags.join(' , ')} </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleITem;
