import React from "react";
import Users from "./Users";
import {Routes, Route} from 'react-router-dom';
import Profile from "./Profile";
import Posts from "./Posts";
import Gallery from "./Gallery";
import ToDo from "./ToDo";

class Home extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
           <Routes>

            <Route exact path="/" Component={Users}/>
            <Route path="/profile" Component={Profile} />
            <Route path="/posts" Component={Posts} />
            <Route path="/Gallery" Component={Gallery} />
            <Route path="/Todo" Component={ToDo} />

           </Routes>
            


         

        );
    }

}

export default Home;