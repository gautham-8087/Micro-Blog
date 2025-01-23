import React, { useState, useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import "../../styles/CreateBlog.css";

const CreateBlog = () => {
  const { blogs, setBlogs } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      id: blogs.length + 1,
      title,
      content,
      author: "Current User",
    };
    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="create-blog">
      <h2>Write a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your blog here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">Post Blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;