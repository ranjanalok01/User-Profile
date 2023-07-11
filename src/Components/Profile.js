import {Component} from "react";
import { UsersData } from "./UsersData";
import Sidebar from "./Sidebar";


class Profile extends Component{ 
    constructor(props){
        super(props);
        console.log(this.props);
    
    }  
    render(){
   
    return(
        <div className="profile">
             <Sidebar />
            <h2>Profile </h2>
            <hr/>
                    <div>
                           <div className="profile-details-left">
                               <h1> Loading</h1>
                           

                            </div>
                            <div className="profile-details-right">
                            
                             
                             

                             </div>


                    </div>
        </div>
    );
    }
}
export default Profile;