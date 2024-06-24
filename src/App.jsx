
import React from 'react';
import PriceCard from './Components/PriceCard';
import './App.css';

function App() {
  const features = [
    { includes: false, description: '10 users included' },
    { includes: true, description: '2 GB of storage' },
    { includes: true, description: 'Email support' },
   
  ];
  const features2 = [
    { includes: true, description: '20 users included' },
    { includes: true, description: '5 GB of storage' },
    { includes: true, description: 'Priority email support' },
    { includes: false, description: '24/7 customer support' },
  ];
  const features3 = [
    { includes: true, description: 'Unlimited users' },
    { includes: true, description: '100 GB of storage' },
    { includes: true, description: 'Seperate assistant' },
    { includes: true, description: '24/7 customer support' },
    { includes: true, description: 'Free 1 month subscription' },
  ];
  

  return (
    <div className="App">
      <h1>Our Pricing Plans</h1>
      <div className="price-cards">
        <PriceCard plan="Basic" price="0" features={features} />
        <PriceCard plan="Plus" price="20" features={features2} />
        <PriceCard plan="Pro" price="30" features={features3} />
      </div>
    </div>
  );
}

export default App;
