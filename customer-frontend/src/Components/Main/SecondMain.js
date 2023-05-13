import React from "react";
import "./SecondMain.css";
import Advertisement from "../Asset/adv.jpeg"
import { Link } from "react-router-dom";

const subcategory = [
  {
    title: "Vegetables",
    images: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
  },

  {
    title: "Fruits",
    images: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
  },

  {
    title: "Non Veg",
    images: [
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
      "https://via.placeholder.com/100",
    ],
  },

  // Add more sections here with their respective images
];
const SecondMain = () => {
  return (
    <div className="second-container">
      <div className="advertisement">
        <img
          src={Advertisement}
          alt="Advertisement"
          className="advertisement-photo"
        />
      </div>
      <div className="highlight-section">
        <h3 className="highlight-title">Highlights</h3>

        <div className="small-photos">
          <img
            src="https://via.placeholder.com/100"
            alt="Photo 1"
            className="small-photo"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Photo 2"
            className="small-photo"
          />
          <img
            src="https://via.placeholder.com/100"
            alt="Photo 3"
            className="small-photo"
          />
        </div>
      </div>
      <div className="subcategory-container">
        {subcategory.map((section, index) => (
          <div className="section" key={index}>
            <h3 className="section-title">{section.title}</h3>
            <div className="image-container">
              {section.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`Image ${i + 1}`}
                  className="section-image"
                />
              ))}
            </div>
            <div className="view-btn">
              <Link to="/subcategory" className="view-button">
                View All
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondMain;
