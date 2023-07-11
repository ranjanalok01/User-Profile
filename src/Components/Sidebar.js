import React from "react";
import {NavLink} from 'react-router-dom';

function Sidebar(){
    return(
      <div className="sidebar">
        <ul>
            <li><NavLink exact activeClassName="active" to="/profile"> Profile</NavLink></li>
            <li> <NavLink activeClassName="active" to="/Posts" > Posts</NavLink></li>
           <li> <NavLink activeClassName="active" to="/Gallery">Gallery</NavLink></li>
           <li> <NavLink activeClassName="active" to="/Todo">ToDo</NavLink></li>
        </ul>
        
        </div>
     
    );
}
export default Sidebar;