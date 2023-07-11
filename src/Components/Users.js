import React, { useEffect, useState } from "react";
import { UsersData } from './UsersData';
import {Link} from 'react-router-dom';
import Profile from "./Profile";

function Users() {
  return (
    <div className="home-page">
    <h3 >Select an account</h3>
      {UsersData.map((item,index)=>{
      
       < Profile key={item.id} item={item} />
        return (
          

          <div>
            <div className="profile-page">
            <ol key={item.id}> 
           <img   src={item.profilepicture} />  
            <Link className="username" to="/profile" > {item.username} </Link>
           </ol>
          
            </div>
            </div>
          
            
        )
        
       

       }
       )}
       
    </div>
  );

}
export default Users;