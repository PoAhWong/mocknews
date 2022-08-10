import { Link } from "react-router-dom";
import "./CategoryBar.css";

const categories = [
  "science",
  "sports",
  "business",
  "health",
  "tech",
  "politics",
  "travel",
];

export default function CategoryBar({ selectedCategory }) {
  return (
    <div className="categoryBar">
      {categories.map((category, index) => {
        return (
          <button
            className={
              category === selectedCategory ? "selectedButton" : "category"
            }
            key={index}
          >
            <Link
              className={category === selectedCategory ? "selected" : "links"}
              to={`/news/${category}`}
            >
              {category.toUpperCase()}
            </Link>
          </button>
        );
      })}
    </div>
  );
}
