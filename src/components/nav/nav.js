import React from 'react';
import Button from './button';
import NavMenu from './navMenu';

function Nav () {
  return (
    <div className="nav-container">
      <nav>
          <h1>LogoHere</h1>
          <NavMenu />
          <Button />
      </nav>

    </div>
  );
}

export default Nav;