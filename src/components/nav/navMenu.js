import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
    <Switch>
      {
        MenuItems.map(
          (item,index) =>
            <Route exact path={item.url} component={item.component}> </Route>
        )
      }
        <Route >No Match</Route>
    </Switch>
    </Router>
  )
} 

export default NavMenu;