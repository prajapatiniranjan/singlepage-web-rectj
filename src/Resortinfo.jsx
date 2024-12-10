import React from "react";
import "./ResortInfo.css";

function ResortInfo() {
  return (
    <div className="resort-info" id="resort-info">
      <h1>Resort Information</h1>

      <div className="facility">
        <h2>Facility</h2>
        <ul>
          <li>Oceanfront Views</li>
          <li>Infinity Swimming Pool</li>
          <li>Spa & Wellness Center</li>
          <li>Water Sports Activities</li>
          <li>Fine Dining Restaurants</li>
          <li>24/7 Concierge Service</li>
        </ul>
      </div>

      <div className="info-container">
        <div className="resort-description">
          <p>
            Welcome to our luxurious resort, where you can experience world-class amenities, beautiful landscapes, and unparalleled relaxation. Whether you're here for a weekend getaway or an extended stay, we offer the perfect environment for both relaxation and adventure.
          </p>
          <p>
            Our resort features stunning ocean views, top-tier dining options, and a wide range of activities including water sports, spa treatments, and guided tours. Come and make unforgettable memories with us!
          </p>

          <h2>Stunning Ocean Views</h2>
          <p>
            Our resort is set against the backdrop of pristine beaches and azure waters. Each room and suite is designed to offer panoramic views of the ocean, allowing you to wake up to the gentle sounds of the waves and soak in the beauty of the horizon. The sunsets here are nothing short of magical, providing a perfect moment for relaxation or a romantic evening.
          </p>

          <h2>World-Class Dining</h2>
          <p>
            At our resort, dining is an experience in itself. We offer a range of fine dining restaurants with world-class chefs preparing exquisite dishes made from the freshest, locally sourced ingredients. Whether you're craving fresh seafood, international cuisines, or decadent desserts, you'll find something to satisfy your taste buds. Our beachside cafes offer casual dining with stunning views, and our exclusive wine and cocktail lounges provide a relaxed setting for evening drinks.
          </p>

          <h2>A Perfect Place for All Occasions</h2>
          <p>
            Whether you're here for a romantic getaway, a family vacation, a solo retreat, or a group celebration, our resort offers the ideal setting for every occasion. We pride ourselves on providing exceptional service and personalized experiences, ensuring that your stay is nothing short of perfect. Come visit us and experience a world of luxury, adventure, and relaxation that will leave you with memories that last a lifetime. We can't wait to welcome you to our resort, where paradise is just a booking away!
          </p>
        </div>

        <div className="resort-images">
          <img
            src="https://images.unsplash.com/photo-1501698335706-90b736210a61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Resort Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1470043201067-764120126eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8fDB8fHww"
            alt="Resort Image 2"
          />
        </div>
      </div>
    </div>
  );
}

export default ResortInfo;
