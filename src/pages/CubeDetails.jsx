import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allcubes } from "../components/cubes";
import "./CubeDetails.css";
import { AiOutlineMinus } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { useGlobalContext } from "../context/context";

const CubeDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [isdisabled, setDisabled] = useState(true);
  const { id } = useParams();
  const selectedCube = allcubes.find((cube) => cube.id === id);
  const { cart, setCart } = useGlobalContext();

  const handleCart = (cube) => {
    const filter = cart.find((c) => c.id === cube.id);
    if (filter) {
      return;
    } else {
      cube.quantity = quantity;
      const myCart = [...cart, cube];
      setCart(myCart);
      console.log(filter);
    }
  };

  useEffect(() => {
    if (quantity <= 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  });
  if (!selectedCube) {
    return <div>Item not found</div>;
  }
  return (
    <div className="min-h-[100vh]">
      <div className="selectedcube">
        <img src={selectedCube.img} alt={selectedCube.img} />
        <div className="selectedcube-details">
          <h1 className="selectedcube-details-title">{selectedCube.title}</h1>
          <h1 className="selectedcube-details-price">
            {selectedCube.price},00 €
          </h1>
          <h1 className="selectedcube-details-code">
            Article code:{" "}
            <span className="selectedcube-details-code-span">
              {selectedCube.id}
            </span>
          </h1>
          <h1 className="selectedcube-details-description">
            {selectedCube.description}
          </h1>
          <div className="selectedcube-details-quantity">
            <div className="selectedcube-details-quantity-state">
              <h1 className="selectedcube-details-quantity-state-h1">
                Quantity:
              </h1>

              <button
                disabled={isdisabled}
                onClick={() => setQuantity(quantity - 1)}
                className="selectedcube-details-quantity-state-button bg-gray-200"
              >
                <AiOutlineMinus className="minus" />
              </button>
              <div className="selectedcube-details-quantity-state-value">
                <h1>{quantity}</h1>
              </div>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="selectedcube-details-quantity-state-button bg-gray-200"
              >
                <GrFormAdd className="plus" />
              </button>
            </div>
            <div className="selectedcube-details-quantity-delivery bg-gray-100">
              <h1>Time of delivery</h1>
              <h1 className="selectedcube-details-quantity-delivery-h1">
                24-48 hours
              </h1>
            </div>
          </div>
          <button
            onClick={() => handleCart(selectedCube)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-[200px]  rubiksimage-div-btn"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CubeDetails;
