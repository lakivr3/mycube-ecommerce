import React from "react";
import "./Blog.css";
import { news } from "../components/cubes";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../components/cubes";
import SectionWrapper from "../components/SectionWraper";
import { Link } from "react-router-dom";

const Blog = () => {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="min-h-[100vh]">
      <div className="blog">
        <h1 className="blog-title">News</h1>
        <div className="blog-blogs">
          {news.map((a, index) => {
            return (
              <Link to={`/blog/${a.id}`} key={a.title}>
                <motion.div
                  variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                  className="blog-blogs-blog"
                >
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
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "blog");
