import React, { Component } from 'react';
import './Cart.css'; // Import your CSS file for cart styling
import sampleImageOne from './Images/Item1.jpeg'
import sampleImageTwo from './Images/Item2.webp'

export class Cart extends Component {

  render() {
    

    return (
      <div className='cart-container'>
        <h2 className='cart-title'>Your Shopping Cart</h2>
        <div className='cart-items'>
          {/* Example of displaying cart items */}
          <div className='cart-item'>
            <div className='item-image'>
              <img src={sampleImageOne} alt='Item' />
            </div>
            <div className='item-details'>
              <h3 className='item-name'>Plant Pot</h3>
              <p className='item-description'>Product Description</p>
              <div className='item-actions'>
                <span className='item-price'>$10.00</span>
                <button className='btn btn-sm btn-outline-danger'>Remove</button>
              </div>
            </div>
          </div>

          <div className='cart-item'>
            <div className='item-image'>
              <img src={sampleImageTwo} alt='Item' />
            </div>
            <div className='item-details'>
              <h3 className='item-name'>Fish Pot</h3>
              <p className='item-description'>Product Description</p>
              <div className='item-actions'>
                <span className='item-price'>$20.00</span>
                <button className='btn btn-sm btn-outline-danger'>Remove</button>
              </div>
            </div>
          </div>

          
          {/* Repeat above structure for each item in the cart */}
        </div>
        <div className='cart-summary'>
          <h4>Cart Summary</h4>
          <div className='summary-details'>
            <div className='summary-item'>
              <span>Subtotal:</span>
              <span>$30.00</span>
            </div>
            <div className='summary-item'>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className='summary-item total'>
              <span>Total:</span>
              <span>$30.00</span>
            </div>
          </div>
          <button className='btn btn-primary btn-block mt-3'>Checkout</button>
        </div>
      </div>
    );
  }
}

