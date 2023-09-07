import React, { useState } from 'react';
import './shop.css'
import { Link } from 'react-router-dom';

const Shop = (props) => {
 
  
    
    const {title,description,price,image,id}= props.product
   
    return (
        <div className='shopContainer'>
            <div className="shopImage">
              <img src={image} alt="" />
              

            </div>
            <div className="shopDetail">
               <Link to={"/product/"+id}>{title}</Link>
           
                <p>{description}</p>
             
               <h4>Price ${price}</h4>
            { props.showaddcard && <button className='button' onClick={()=>props.handle(props.product)} style={{padding:'20px',backgroundColor:'green',color:'white'}}>Bye Now</button>}
            </div>
            
        </div>
    );
};

export default Shop;