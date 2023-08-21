import React from "react";
import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import { news } from "../components/cubes";
const BlogDetails = () => {
  const { id } = useParams();
  const selectedBlog = news.find((a) => a.id == id);
  console.log(selectedBlog);
  return (
    <div className="blogdetails">
      <div>
        <img src={selectedBlog.img} alt="" />
      </div>
    </div>
  );
};

export default BlogDetails;
