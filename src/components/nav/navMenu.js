import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import MenuItems from '../menuItems/menuItems';

const NavMenu = () => {
    console.log(MenuItems);
  return (
    <Router>
    <ul className='nav-links'>
        { 
        MenuItems.map(
            (item, index) => 
             <Link to={item.url}>
               <li>{item.title}</li>
             </Link>     
             )
        }
    </ul>
    </Router>
  );
}

export default NavMenu;