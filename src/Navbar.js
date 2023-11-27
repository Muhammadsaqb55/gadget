import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

function Navbar() {

  const location = useLocation(); // Use useLocation to access the current location

  return (
    
    <div class="main-wrapper">
      <header class="header">
        <nav class="navbar navbar-expand-lg header-nav">
          <div class="navbar-header">
            <a id="mobile_btn" href="javascript:void(0);">
              <span class="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            <a href="index.html" class="navbar-brand logo">
              <img src="/assets/images/logo.png" class="img-fluid" alt="Logo" />
            </a>
          </div>
          <div class="main-menu-wrapper">
            <div class="menu-header">
              <a href="index.html" class="menu-logo">
                <img src="/assets/img/logo.png" class="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" class="menu-close" href="javascript:void(0);">
                <i class="fas fa-times"></i>
              </a>
            </div>
            <ul class="main-nav">

            <li>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: location.pathname === '/' ? '#F96B07' : '#212529',
                  borderBottom: location.pathname === '/' ? '3px solid' : '#F96B07',
                  fontWeight: location.pathname === '/' ? 'bold' : '645',
                }}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/manufacturer"
               
                style={{
                  textDecoration: 'none',
                  color: location.pathname === '/manufacturer' ? '#F96B07' : '#212529',
                  borderBottom: location.pathname === '/manufacturer' ? '3px solid' : '#F96B07',
                  fontWeight: location.pathname === '/manufacturer' ? 'bold' : '645',
                }}
              >
                Best Price Guarantee
              </Link>
            </li>


              <li class="">
                <a href="#" style={{
                  textDecoration: 'none',
                  color: '#212529',
                  fontWeight : '645',
                }}>Support</a>
                
              </li>


              <li>
              <Link
                to="/devices"
                style={{
                  textDecoration: 'none',
                  color: location.pathname === '/devices' ? '#F96B07' : '#212529',
                  borderBottom: location.pathname === '/devices' ? '3px solid' : '#F96B07',
                  fontWeight: location.pathname === '/devices' ? 'bold' : '645',
                }}
              >
                Sell my Device
              </Link>
            </li>


            <li>
              <Link
                to="/checkout"
                style={{
                  textDecoration: 'none',
                  color: location.pathname === '/checkout' ? '#F96B07' : '#212529',
                  borderBottom: location.pathname === '/checkout' ? '3px solid' : '#F96B07',
                  fontWeight: location.pathname === '/checkout' ? 'bold' : '645',
                }}
              >
                Checkout
              </Link>
            </li>

            {/* <li>
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: location.pathname === '/login' ? '#F96B07' : '#212529',
                  borderBottom: location.pathname === '/login' ? '3px solid' : '#F96B07',
                  fontWeight: location.pathname === '/login' ? 'bold' : '645',
                }}
              >
                Login
              </Link>
            </li> */}
{/*          
          <li>
          <div className="dropdown" style={{marginTop: '30px'}}>
          <button className="gadget-btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dashboard Screens
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="/dashboard1">dashboard1</a></li>
          <li><a className="dropdown-item" href="/dashboard2">dashboard2</a></li>
          <li><a className="dropdown-item" href="/dashboard3">dashboard3</a></li>
          <li><a className="dropdown-item" href="/dashboard4">dashboard4</a></li>
          <li><a className="dropdown-item" href="/dashboard5">dashboard5</a></li>
          <li><a className="dropdown-item" href="/masterdashboard1">Master Dashboard1</a></li>
          <li><a className="dropdown-item" href="/masterdashboard2">Master Dashboard2</a></li>
          <li><a className="dropdown-item" href="/recycler">Recycler</a></li>
          </ul>
          </div>
          </li> */}
          <li><a href="/login" ><button class="gadget-btn">View other Gadgets</button></a></li>
        </ul>


          </div>
        </nav>
      </header>


    </div>
  );
}

export default Navbar;
