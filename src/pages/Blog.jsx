import React from "react";
import "./Blog.css";
import { news } from "../components/cubes";
import { AiOutlinePlus } from "react-icons/ai";

const Blog = () => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="blog">
      <h1 className="blog-title">News</h1>
      <div className="blog-blogs">
        {news.map((a, index) => {
          return (
            <div key={a.title} className="blog-blogs-blog">
              <div className="container">
                <img
                  src={a.img}
                  alt={a.title}
                  className="blog-blogs-blog-img"
                />
                <div className="overlay scale-up-center">
                  <div className="content">
                    <AiOutlinePlus className="aiplus " />
                  </div>
                </div>
              </div>
              <div className="blog-blogs-blog-content">
                <h1 className="blog-blogs-blog-content-title">{a.title}</h1>

                <p className="blog-blogs-blog-content-description">
                  {truncateString(a.description, 110)}
                </p>
                <p className="blog-blogs-blog-content-time">{a.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
