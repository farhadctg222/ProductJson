import React, { useState } from 'react';
import  './Header.css'
import { Link } from 'react-router-dom';
import Shop from '../Shop/Shop';


const Header = () => {
    
  
    return (
        <div>
           
            
           <ul>
            <Link to="/shop">Shop</Link> <Link to="/review">Review</Link> 
            <Link to="/manage">Manage Inventory</Link>
            <Link to="login">SignIn</Link>
           
           </ul>
        </div>
    );
};

export default Header;