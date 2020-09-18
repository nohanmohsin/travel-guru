import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../../../Image/Logo.png'
import './Header.css';
const Header = (props) => {
    const {name} = props.user;
    
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <input type="text" name="" id="" placeholder='Enter Your destination'/>
            <nav style={{display: "inline-block"}}>
                <a className="route-link" href="#">News</a> 
                <a className="route-link" href="#">Destination</a>
                <a className="route-link" href="#">Blog</a>
                <a className="route-link" href="#">Contact</a>
                <Link to='/login'><button className='login-link'>Login</button></Link>
                <span className="route-link">{name}</span>
            </nav>
        </div>
    );
};

export default Header;