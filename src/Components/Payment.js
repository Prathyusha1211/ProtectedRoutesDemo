import React, { Component } from 'react';
import './Payment.css'; // Import your CSS file for payment page styling

export class Payment extends Component {
  render() {
    return (
      <div className='payment-container'>
        <h2 className='payment-title'>Payment</h2>
        <div className='payment-form'>
          <form>
            <div className='form-group'>
              <label htmlFor='cardNumber'>Card Number</label>
              <input
                type='text'
                className='form-control'
                id='cardNumber'
                name='cardNumber'
                placeholder='Enter your card number'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='expiryDate'>Expiry Date</label>
              <input
                type='text'
                className='form-control'
                id='expiryDate'
                name='expiryDate'
                placeholder='MM/YYYY'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cvv'>CVV</label>
              <input
                type='text'
                className='form-control'
                id='cvv'
                name='cvv'
                placeholder='Enter CVV'
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Pay Now
            </button>
          </form>
        </div>
      </div>
    );
  }
}


