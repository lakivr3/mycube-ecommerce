import "./BlogDetails.css";
import { useParams } from "react-router-dom";
import { news } from "../components/cubes";
const BlogDetails = () => {
  const { id } = useParams();
  const selectedBlog = news.find((a) => a.id == id);
  console.log(selectedBlog);
  return (
    <div className="  smallscreen-blog ">
      <div className="blogdetails">
        <div className="blogdetails-details">
          <div className="blogdetails-details-text">
            <h1 className="blogdetails-details-text-title">
              {selectedBlog.title}
            </h1>

            <p className="blogdetails-details-text-p">
              {selectedBlog.description}
            </p>
            <img src={selectedBlog.img} alt={selectedBlog.title} />
            <p className="blogdetails-details-text-time">{selectedBlog.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
