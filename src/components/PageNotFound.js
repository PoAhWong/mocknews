import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Go Back to Home Page</Link>
    </div>
  );
};

export default PageNotFound;
