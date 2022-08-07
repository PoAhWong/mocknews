import React from "react";
import PageTitle from "./PageTitle";
import News from "./News";
import "./Main.css";

export default function Main({ news, selectedCategory }) {
  return (
    <div className="pageBody">
      <PageTitle selectedCategory={selectedCategory} />
      {news.map((eachNews, index) => {
        return <News key={index} news={eachNews} />;
      })}
    </div>
  );
}
