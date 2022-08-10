import React from "react";
import "./News.css";

export default function News({ news }) {
  return (
    <div className="newsBox">
      <h2>{news.title}</h2>
      <div className="newsBody">
        <div className="imgContainer">
          <img src={news.image_url} alt="" />
        </div>
        <p className="newsDescription">
          {news.description.concat(" ").repeat(4)}{" "}
          <a target="_blank" href={news.url}>
            Read More...
          </a>
        </p>
      </div>
      <hr className="news-hr"></hr>
    </div>
  );
}
