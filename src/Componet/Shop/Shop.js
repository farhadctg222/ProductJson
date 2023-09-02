import React from 'react';
import './shop.css'

const Shop = (props) => {
    console.log(props)
   const {title,description,price,image}= props.product
    return (
        <div className='shopContainer'>
            <div className="shopImage">
              <img src={image} alt="" />

            </div>
            <div className="shopDetail">
               <a className='title' href="/">{title}</a>
               <p>{description}</p>
               <h4>Price ${price}</h4>
            <button className='button' onClick={()=>props.handle(props.product)} style={{padding:'20px',backgroundColor:'green',color:'white'}}>Bye Now</button>
            </div>
            
        </div>
    );
};

export default Shop;