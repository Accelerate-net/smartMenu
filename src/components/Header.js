import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/imgs/logo-red.png'
import "./Header.css";
// import { useStateValue } from "../contexts/StateProvider";
// import { getItemCount } from "../contexts/reducer";

function Header() {
  // const [{ basket }] = useStateValue();
  // let itemc = getItemCount(basket);
  return (
    <nav className="header">
      {/* Zaitoon text on left*/}
      <Link to="/">
        {/* <h1 className="header__logo">Zaitoon</h1> */}
        <img className="header__logo" src={logo} alt= "Zaitoon Logo"/>
      </Link>
      <div className="header__rightSection">
        {/* Search Icon */}
        <Link to="/search">
          <div className="header__search">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </Link>
        {/* Cart icon with number*/}
        {/* <Link to="/checkout">
          <div className="header__cart">
            <ion-icon name="restaurant-outline"></ion-icon>
            <div className="header__dot"></div>
            <span className="header__cartValue">{itemc}</span>
          </div>
        </Link> */}
      </div>
    </nav>
  );
}

export default Header;
