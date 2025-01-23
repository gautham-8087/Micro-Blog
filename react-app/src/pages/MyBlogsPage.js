import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const MyBlogsPage = () => {
  const { blogs, user } = useContext(BlogContext);
  const userBlogs = blogs.filter((blog) => blog.author === user);

  return (
    <div className="my-blogs">
      <h2>My Blogs</h2>
      {userBlogs.length ? (
        userBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>You haven't written any blogs yet.</p>
      )}
    </div>
  );
};

export default MyBlogsPage;