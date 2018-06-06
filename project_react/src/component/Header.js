import React, { Component } from 'react';
import {Route} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-0" >
      <div class="container py-auto">
        <a className="navbar-brand" href="index.html" ><img src="./img/petlogo4.png" width='50px' height='50px' alt=""/></a>
        <a className="navbar-brand" href="plist1.html" >Belanja</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <form className=" form-inline mx-auto my-2 my-sm-0" >
                    <input className="form-control form-co mr-sm-2" type="search" placeholder="Cari..." aria-label="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Cari</button>
            </form>
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <a className="nav-link" href="cart1.html"><img src="./img/icons8-shopping-cart-50.png" alt="" style={{height: '25px', width: '25px'}}/></a>
            </li>
            <li className="nav-item">
              <a href ="/registration" className="nav-link">Register</a>
            </li>
            <li className="nav-item">
              <a href="login.html" className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </div>
    );
  }
}

export default Header;
