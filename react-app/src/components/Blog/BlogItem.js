import React from "react";
import "../../styles/BlogItem.css";

const BlogItem = ({ blog }) => {
  return (
    <div className="blog-item">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <small>By: {blog.author}</small>
    </div>
  );
};

export default BlogItem;
