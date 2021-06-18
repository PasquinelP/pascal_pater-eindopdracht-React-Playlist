import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="app-nav">
      <ul className="app-nav__list">
        <Link to="/">
          <li className="app-nav__item">Home playlist</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
