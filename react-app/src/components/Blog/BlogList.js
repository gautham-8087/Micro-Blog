import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import BlogItem from "./BlogItem";
import "../../styles/BlogList.css";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="blog-list">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
