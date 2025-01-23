import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import CreateBlog from "./components/Blog/CreateBlog";
import BlogProvider from "./context/BlogContext";
import MyBlogsPage from "./pages/MyBlogsPage";
const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
            <Route path="/my-blogs" element={<MyBlogsPage/>}/>
          </Routes>
        </main>
        <Footer />
      </Router>
    </BlogProvider>
  );
};

export default App;
