import React, { useEffect } from 'react';
import axios from 'axios';
import {API_URL} from '../config/index';
import ProductImage from "./product.png";

const HomePage = (props) => {
    const { ordobj } = props;
    useEffect(() => {
      console.log(ordobj)
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
    
        if (query.get("success")) {
          console.log("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
          console.log(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

      const handlesubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("product", ordobj.product);
        formData.append("customer", ordobj.customer);
        formData.append("quantity", ordobj.quantity);
        formData.append("price", ordobj.price);
        formData.append("address", ordobj.address);
        formData.append("phone", ordobj.phone);
        formData.append("date", ordobj.date);
        formData.append("status", ordobj.status);
        console.log(formData);

        axios.post(`https://customerbac.onrender.com/api/payment/`, formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => console.log("Error : \n" + error))
         
      }

    return (
        <section className=''>
            <div className="product">
            <img
                src={ProductImage}
                alt="The cover of Product Image"
            />
            <div className="description">
            <h3>Product Name</h3>
            <h5>₹ 20.00</h5>
            </div>
            </div>
            <form action="api/payment" method="POST" onSubmit={handlesubmit}>
            <button type="submit" onClick={handlesubmit}>
                Checkout
            </button>
            </form>
        </section>
    );
};
export default HomePage;