import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{ minWidth: '100vw' }}>
      <nav class="navbar navbar-light fixed-top" style={{ backgroundColor: '#11111', backgroundImage: '' }}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <h4 style={{ color: 'black' }} > Offer Letter Generator </h4>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
