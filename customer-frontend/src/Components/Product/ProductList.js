import React from 'react';
import './ProductList.css';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { image, title, weight, price } = props;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-weight">{weight}</p>
      <div className="product-price">
        <p>{price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="product-list-page">
      <nav className="top-nav">
        <ul>
          <li><Link to="/product/fresh">Fresh Vegetables</Link></li>
          <li><Link to="/product/seasonal">Seasonal Fresh Fruits</Link></li>
          <li><Link to="/product/freshly-cut">Freshly Cut</Link></li>
        </ul>
      </nav>
      <div className="product-list-container">
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="250g"
          price="Rs.79"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="250g"
          price="Rs.79"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="500g"
          price="Rs.59"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1000g"
          price="Rs.120"
        />
      </div>
      <div className="product-list-container">
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="250g"
          price="Rs.79"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="250g"
          price="Rs.79"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="500g"
          price="Rs.120"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1000g"
          price="Rs.200"
        />
      </div>
    </div>
  );
}

export default ProductList;
