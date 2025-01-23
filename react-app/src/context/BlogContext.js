import React, { createContext, useState } from "react";
export const BlogContext = createContext();
const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Welcome to MyBlog", content: "This is the first blog.", author: "Admin" },
  ]);

  const [user, setUser] = useState(null);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs, user, setUser }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;