import React, { useState } from "react";
import "./Detail.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const [selectedQty, setSelectedQty] = useState(1);

  const incrementQty = () => {
    setSelectedQty(selectedQty + 1);
  };

  const decrementQty = () => {
    if (selectedQty > 1) {
      setSelectedQty(selectedQty - 1);
    }
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src="https://imgs.search.brave.com/ZPqjz-A-5mwa6K9YaIHw_gOeZlD3a_9zKo1M3o9lMak/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dmVnYW4uaW8vYmxv/Zy9hc3NldHMvMTAt/aGVhbHRoaWVzdC12/ZWdldGFibGVzLXRv/LWluY2x1ZGUtaW4t/eW91ci12ZWdhbi1k/aWV0LTIwMTgtMDQt/MTYvaGVhbHRoaWVz/dC12ZWdldGFibGVz/LWRmMWNmNTUwNzEx/MDc2ZDA1MmVhYWRl/MTJjMzgyODlhMjYz/N2MzOGU1NDYxODJk/M2MwMTM2YTkwY2Iw/YmIwYjMuanBn" alt="product-image"/>
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-title">Product Title</h1>
          <p className="product-detail-description">
            Product description goes here.
          </p>
          <div className="product-detail-price">
            <p className="product-detail-price-label">Price: </p>
            <p className="product-detail-price-amount">100.00</p>
            <p className="product-detail-price-unit"> per kg</p>
          </div>
          <div className="product-detail-quantity">
            <p className="product-detail-quantity-label">Quantity:</p>
            <div className="product-detail-control">
              <button
                className="product-detail-quantity-decrement"
                onClick={decrementQty}
              >
                -
              </button>
              <input
                className="product-detail-quantity-input"
                type="number"
                value={selectedQty}
                readOnly
              />
              <button
                className="product-detail-quantity-increment"
                onClick={incrementQty}
              >
                +
              </button>
            </div>
          </div>
          <Link to="/placeorder" className="product-detail-cart">Buy Now</Link>
        </div>
    </div>
  );
};

export default Detail;
