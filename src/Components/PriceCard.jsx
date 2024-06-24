
import React from 'react';
import './PriceCard.css'; 

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <h2 className="price-card__plan">{plan}</h2>
      <p className="price-card__price">${price}/month</p>
      <ul className="price-card__features">
        {features.map((feature, index) => (
          <li key={index} className="price-card__feature">
            {feature.includes ? (
              <span className="tick-mark">&#10004;</span>
            ) : (
              <span className="cross-mark">&#10060;</span>
            )}
            {feature.description}
          </li>
        //   //   <li key={index} className="price-card__feature">
        //     <span className="feature-icon">
        //     {feature.includes ? (
        //       <img src="/tick.png" alt="Included" className="icon" />
        //     ) : (
        //       <img src="/cross.png" alt="Not Included" className="icon" />
        //     )}
        //   </span>
        //   {feature.description}
        // </li>
        ))}
      </ul>
      <button className="price-card__button">Choose Plan</button>
    </div>
  );
};

export default PriceCard;
