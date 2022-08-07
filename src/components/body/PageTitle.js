import React from "react";
import "./PageTitle.css";

export default function PageTitle({ selectedCategory }) {
  return !!selectedCategory ? (
    <div className="titleBox">
      {selectedCategory[0].toUpperCase() +
        selectedCategory.slice(1) +
        " Stories"}
    </div>
  ) : (
    <div className="titleBox">Top Stories</div>
  );
}
