import React, { Component } from 'react';
import './Orders.css'; // Import your CSS file for orders page styling
import sampleImage4 from './Images/Item4.jpeg'
import sampleImage5 from './Images/Item5.jpeg'
import sampleImage6 from './Images/Item6.jpeg'

export class Orders extends Component {
  // Sample data for orders (replace with actual data from API or state)
  state = {
    orders: [
      {
        id: 1,
        productName: 'Product A',
        quantity: 2,
        price: 50,
        imageUrl: sampleImage4,
        deliveredDate: '2024-06-10',
      },
      {
        id: 2,
        productName: 'Product B',
        quantity: 1,
        price: 70,
        imageUrl: sampleImage5,
        deliveredDate: '2024-05-09',
      },
      {
        id: 3,
        productName: 'Product C',
        quantity: 1,
        price: 30,
        imageUrl: sampleImage6,
        deliveredDate: '2023-12-08',
      },
    ],
  };

  render() {
    return (
      <div className='orders-container'>
        <h2 className='orders-title'>Your Orders</h2>
        <div className='orders-list'>
          {this.state.orders.map((order) => (
            <div key={order.id} className='order-item'>
              <div className='order-image'>
                <img src={order.imageUrl} alt='Product' />
              </div>
              <div className='order-details'>
                <h3 className='order-product'>{order.productName}</h3>
                <p className='order-quantity'>Quantity: {order.quantity}</p>
                <p className='order-price'>Price: ${order.price}</p>
                <p className='order-delivered-date'>
                  Delivered Date: {order.deliveredDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

