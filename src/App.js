import React, { useState, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Cart } from './Components/Cart';
import { Home } from './Components/Home';
import { Orders } from './Components/Orders';
import { Payment } from './Components/Payment';
import Login from './Components/Login';
import './App.css';
//import PrivateRoute from './Components/PrivateRoute';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogin = () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      window.location.href = '/';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage on logout
    setToken(null); // Clear token state
  };


  return (
    <BrowserRouter>
      <div className='app-container'>
        {!token ? (
          <div className='greeting-container'>
            <h3>Login to access the app</h3>
          </div>
        ) : (
          <div className='greeting-container'>
            <h1>Happy Shopping</h1>
          </div>
        )}
        <Header isAuthenticated={token} onLogout={handleLogout} />
        {/* Without Authentication */}
        {/* <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />}/>
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes> */}

        {/* First Approach */}
        {/* <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/orders' element={token ? <Orders /> : <Navigate to='/login' />} />
          <Route path='/cart' element={token ? <Cart /> : <Navigate to='/login' />} />
          <Route path='/payment' element={token ? <Payment /> : <Navigate to='/login' />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes> */}




        {/* Second Approach */}
        {/* <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route path='/orders' element={token ? <Orders /> : <Navigate to='/login' />} />
          <Route path='/cart' element={<PrivateRoute isLoggedIn={token}>
            <Cart/>
            <h1>Hello user</h1>
          </PrivateRoute>} />
          <Route path='/payment' element={token ? <Payment /> : <Navigate to='/login' />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes> */}

        {/* Protected Route Approach */}
        <Routes>
          <Route path='/' element={<Home />} exact/>
          <Route element={<ProtectedRoute isLoggedIn={token}/>}>
            <Route path='/orders' element={<Orders />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
          </Route>
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;

