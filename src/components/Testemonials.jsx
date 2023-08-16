import React from "react";
import "./Testemonials.css";
import { reviews } from "./cubes";

const Testemonials = () => {
  return (
    <div className="testemonials">
      <h1 className="testemonials-h1">Reviews</h1>
      <div className="testemonials-reviews">
        {reviews.map((review) => (
          <div key={review.name} className="testemonials-reviews-review">
            <div className="testemonials-reviews-review-image">
              <img src={review.img} alt="cubesimg" />
            </div>
            <div className="testemonials-reviews-review-content">
              <h1 className="testemonials-reviews-review-content-name">
                {review.name}
              </h1>
              <div className="testemonials-reviews-review-content-line"></div>
              <p className="testemonials-reviews-review-content-p">
                {review.p}
              </p>
              <p className="testemonials-reviews-review-content-grade">
                {review.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testemonials;
