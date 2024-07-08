// Header.js

import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './Header.css';

export class Header extends Component {
  handleLogout = () => {
    const { onLogout } = this.props;
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      onLogout();
    }
  };

  render() {
    const { isAuthenticated } = this.props;

    return (
      <ul className='menu-items'>
        <li>
          <NavLink exact to='/' activeClassName='active-link'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' activeClassName='active-link'>
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to='/orders' activeClassName='active-link'>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to='/payment' activeClassName='active-link'>
            Payment
          </NavLink>
        </li>
        {!isAuthenticated ? (
          <li>
            <NavLink to='/login' activeClassName='active-link'>
              Login
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink to='/logout' activeClassName='active-link' onClick={this.handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    );
  }
}
