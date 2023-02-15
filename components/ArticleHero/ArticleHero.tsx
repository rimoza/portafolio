import React from "react";

const ArticleHero = ({ title, imageUrl }: { title: string; imageUrl: string }) => {
  return (
    <div
      className="bg-cover bg-center h-64 my-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex items-center justify-center h-full px-6 py-4 bg-bg opacity-75">
        <h1 className="text-3xl font-bold text-[#fff]">{title}</h1>
      </div>
    </div>
  );
};

export default ArticleHero;
