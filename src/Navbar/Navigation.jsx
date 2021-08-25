import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
// import { ReactComponent as Logo } from "../images/logo.svg";

import './navigation.scss';

const Navigation = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo">
        <NavLink className="nav__title" to="/">
          <p><span>Ielts</span> Journey</p>
        </NavLink>
      </div>

      <nav className="navbar">
        <ul className={click ? "nav-items active" : "nav-items"}>
          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/' className="nav__links">
              Home
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Reading' className="nav__links">
              Reading
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Writing' className="nav__links">
              Writing
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Writing/Task1' className="nav__links">
            Task<span>1</span>
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Writing/Task2' className="nav__links">
              Task<span>2</span>
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Listening' className="nav__links">
              Listening
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Speaking' className="nav__links">
              Speaking
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Faq' className="nav__links">
              Faq
            </Link>
          </li>

          <li className="nav__item" onClick={closeMobileMenu}>
            <Link to='/Contact' className="nav__links">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>      
    </div>
  );
}
export default Navigation;
