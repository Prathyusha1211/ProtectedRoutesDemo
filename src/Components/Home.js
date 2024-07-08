import React from 'react';
import './Home.css'; // Import your CSS file for home page styling
import sampleImage1 from './Images/Item1.jpeg';
import sampleImage2 from './Images/Item5.jpeg';
import sampleImage3 from './Images/Item6.jpeg';
//import BackgroundImage from './Images/BackgroundImage.jpeg'

export const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner'>
        <h1>Welcome to Our Store</h1>
        <p>Discover the latest products and enjoy shopping with us!</p>
        <button className='btn btn-primary'>Shop Now</button>
      </div>
      <div className='home-highlights'>
        <div className='highlight-item'>
          <img src={sampleImage1} alt='Product 1' />
          <h3>Product A</h3>
          <p>Description of Product A</p>
        </div>
        <div className='highlight-item'>
          <img src={sampleImage2} alt='Product 2' />
          <h3>Product B</h3>
          <p>Description of Product B</p>
        </div>
        <div className='highlight-item'>
          <img src={sampleImage3} alt='Product 3' />
          <h3>Product C</h3>
          <p>Description of Product C</p>
        </div>
      </div>
      <div className='home-testimonials'>
        <h2>What Our Customers Say</h2>
        <div className='testimonial'>
          <p>"Great products and excellent service! Highly recommend."</p>
          <p>- John Doe</p>
        </div>
        <div className='testimonial'>
          <p>"Fast delivery and top-notch quality. Will shop again!"</p>
          <p>- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};


