import "./Card.css";
import { Link } from "react-router-dom";
//import React, { useState, useEffect } from "react";
//import axios from "axios";

const cardsData = [
  {
    id: 1,
    title: "Vegetables",
    image:
      "https://imgs.search.brave.com/ZPqjz-A-5mwa6K9YaIHw_gOeZlD3a_9zKo1M3o9lMak/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dmVnYW4uaW8vYmxv/Zy9hc3NldHMvMTAt/aGVhbHRoaWVzdC12/ZWdldGFibGVzLXRv/LWluY2x1ZGUtaW4t/eW91ci12ZWdhbi1k/aWV0LTIwMTgtMDQt/MTYvaGVhbHRoaWVz/dC12ZWdldGFibGVz/LWRmMWNmNTUwNzEx/MDc2ZDA1MmVhYWRl/MTJjMzgyODlhMjYz/N2MzOGU1NDYxODJk/M2MwMTM2YTkwY2Iw/YmIwYjMuanBn",
    offer: "upto 10% off",
    color: "#228B22",
    backcolor: "#8FBC8F",
  },
  {
    id: 2,
    title: "Fruits",
    image:
      "https://imgs.search.brave.com/C02wfPsv9M1nx-in56bA0MuPXlD1tjAsq4twreGkiA8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/OERrMmNET3VrMTBl/Z1JzUTlWYVFBSGFF/OCZwaWQ9QXBp",
    offer: "upto 5% off",
    color: "#FFD700",
    backcolor: "#FFF8DC",
  },
  {
    id: 3,
    title: "Branded Food",
    image:
      "https://imgs.search.brave.com/GbEbhrmULLCpLUWMk8DHI31TSjOUyjq3LhimJChOQC4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMuYm9uYXBwZXRp/dC5jb20vcGhvdG9z/LzVhZWNhMGY2YWJm/ZDU1NjU0YmQxZTZk/OC8xNjo5L3dfMjU4/MCxjX2xpbWl0L2Jy/aXRpc2gtc25hY2tz/LmpwZz9tYmlkPXNv/Y2lhbF9yZXR3ZWV0",
    offer: "upto 7% off",
    color: "#FFA500",
    backcolor: "#FFDAB9",
  },
  {
    id: 4,
    title: "Non Veg",
    image:
      "https://gurukrupafoods.com/images/product/frozen-nonveg/Raw_Chicken/Chicken%20Drumstick%20with%20skin.jpg",
    offer: "upto 3% off",
    color: "#8B0000",
    backcolor: "#CD5C5C",
  },
  {
    id: 5,
    title: "Home Core",
    image:
      "https://i.pinimg.com/originals/90/bc/0c/90bc0c906fc30587b4863d0e6089f364.jpg",
    offer: "upto 8% off",
    color: "#800080",
    backcolor: "#E6E6FA",
  },
  {
    id: 6,
    title: "Beverages",
    image:
      "https://agronfoodprocessing.com/wp-content/uploads/2021/03/beve.jpg",
    offer: "upto 10% off",
    color: "#1E90FF",
    backcolor: "#ADD8E6",
  },
  {
    id: 7,
    title: "Kitchen",
    image: "https://via.placeholder.com/200",
    offer: "upto 5% off",
    color: "#FF1493",
    backcolor: "#FFB6C1",
  },
  {
    id: 8,
    title: "Mobiles",
    image:
      "https://assets.thehansindia.com/h-upload/2022/04/30/1600x960_1289668-mobiles-11.jpg",
    offer: "upto 7% off",
    color: "#008080",
    backcolor: "#AFEEEE",
  },
  {
    id: 9,
    title: "Electronics",
    image:
      "https://t3.ftcdn.net/jpg/02/35/84/44/360_F_235844454_RTTLpnm2asRdwNJ97MU0ENJqnCSUdXQv.jpg",
    offer: "upto 3% off",
    color: "#F3C6A7",
    backcolor: "#FFFACD",
  },
  {
    id: 10,
    title: "Fashionwear",
    image: "https://via.placeholder.com/200",
    offer: "upto 8% off",
    color: "#FFC0CB",
    backcolor: "#FFF0F5",
  },
  {
    id: 11,
    title: "Footwear",
    image: "https://via.placeholder.com/200",
    offer: "upto 3% off",
    color: "#00CED1",
    backcolor: "#AFEEEE",
  },
  {
    id: 12,
    title: "Dryfruits",
    image:
      "https://imgs.search.brave.com/8ts73uGu43TPfxHBCJyfYUVohSwPqOs7651iQgRbGYA/rs:fit:693:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5V/eERTNnZhQkd4SnU3/MVBCVTQzc1hRSGFG/RSZwaWQ9QXBp",
    offer: "upto 8% off",
    color: "#DAA520",
    backcolor: "#FAFAD2",
  },
];


const Cards = () => {
/* const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/category/")
      .then((response) => {
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  */
  return (
    <div>
      <h1>Shop By Category</h1>
      <div className="cards">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="card"
            style={{ backgroundColor: card.backcolor }}
          >
            <img src={card.image} alt="card-image" className="card-image" />
            <div className="card-title">{card.title}</div>
            <Link
              to="/product"
              className="card-offer"
              style={{ backgroundColor: card.color }}
            >
              {card.offer}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const Last = () => {
  return (
    <div className="container">
      <div className="content">
        <Cards />
      </div>
    </div>
  );
};

export default Last;
