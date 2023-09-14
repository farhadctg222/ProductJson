import React, { useEffect, useState,Link,useNaviGate, useContext } from 'react';
import { clearLocalShoppingCart, getDatabaseCart, getShoppingCart, removeFromDatabaseCart } from '../../utilities/fakedb';
import fakedata from './../fakedata/Fakedata';
import ProductReview from '../ProductReview/ProductReview';
import Card from './../Card/Card';
import happuimage  from '../Review/giphy.gif'
import {useNavigate } from 'react-router-dom';


const Review = ({children,...rest}) => {
    const [card,setcard]= useState([])
    const [orderplace,setorderplace]= useState(false)
    const history = useNavigate()

    const handleRemove = (productid)=>{
        const newcard = card.filter(pd=>pd.id!==productid)
        setcard(newcard)
        removeFromDatabaseCart(productid)
    }
    const handleRemoves = ()=>{
     
      history('/shipment')
      
    }
   
    useEffect(()=>{
     const savecard = getDatabaseCart()
     const cards = Object.keys(savecard)
     
    
     const count = cards.map(id=>{
        const ss = parseFloat(id)
        const product = fakedata.find( pd => pd.id===ss)
        const ddd = savecard[ss]
        
       
        return product
     }
     )
   setcard(count)

       
       
      
       
    },[])
    let thanke;
    if(orderplace){
      thanke =  <img src={happuimage} alt="" />

    }
  
    return (
        <div className='card-shop'>
            <h1>Review your product {card.length}</h1>
           <div className="all-continar"style={{display:'flex'}}>
          <div className="card-shop-continar">
          {
                card.map(pd=><ProductReview product={pd} key={pd.id} handleRemove={handleRemove}></ProductReview>)
            }
           {
          thanke
           }
          </div>
          <div className="continar">
            <Card card={card}>
            <button onClick={handleRemoves} className='btnOrder'style={{backgroundColor:'pink',height:'100px'}}>Procceud Checkout</button>
            </Card>
          </div>

          </div>
           
        </div>
    );
};

export default Review;