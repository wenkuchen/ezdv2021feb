import React from 'react';
import MenuItems from '../menuItems/menuItems';

const NavMenu = () => {
    console.log(MenuItems);
  return (
    <ul className='nav-links'>
        { 
        MenuItems.map(
            (item, index) => 
                <li>{item.title}</li>
             )
        }
    </ul>
  );
}

export default NavMenu;