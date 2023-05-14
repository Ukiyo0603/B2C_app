
import './SubCategory.css';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import React, { useState, useEffect } from 'react'; 


function SubcategoryPage() {
  return (
    <div className="subcategory-page">
      <h1 className="subcategory-heading">Subcategory Name</h1>
      <div className="subcategory-row">
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
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
      </div>
      <div className="subcategory-row">
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
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
      </div>
      <h2 className="trending-heading">Trending</h2>
      <div className="trending-row">
      <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1000g"
          price="Rs.120"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
      </div>
      <h2 className="top-seller-heading">Top Sellers</h2>
      <div className="top-seller-row">
      <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1000g"
          price="Rs.120"
        />
        <ProductCard
          image="https://via.placeholder.com/150x150"
          title="Product name"
          weight="1500g"
          price="Rs.199"
        />
      </div>
    </div>
  );
}

function ProductCard(props) {
  const { image, title, weight, price } = props;
  const [products, setProducts] = useState([]);

  const getSubCatArray = async () => {
    const response = await fetch(`https://admindashb.onrender.com/api/subcategory/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const json = await response.json();
    setProducts(json);
}
  useEffect(() => {
    getSubCatArray();
  }, []);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-weight">{weight}</p>
      <div className="product-price">
        <p>{price}</p>
        <button className='cart-btn'><Link to="/productdetails" >Add to cart</Link></button>
      </div>
    </div>
  );
}

export default SubcategoryPage;
