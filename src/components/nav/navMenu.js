import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuItems from '../menuItems/menuItems';

import Home from '../../pages/home';
import Services from '../../pages/services';
import About from '../../pages/about';

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
    
    <Switch>
      {
        MenuItems.map(
          (item,index) =>
            <Route exact path={item.url} component={item.component}></Route>
        )
      } 
        <Route exact path="/"><Home/></Route>
        <Route path="/services"><Services/></Route>
        <Route path="/about"><About/></Route>
        <Route >No Match<Home/></Route>
    </Switch>
    
    </Router>
  ) // the Switch menu items iterated from MenuItems.js not working
} 

export default NavMenu;