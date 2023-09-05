import React, { useEffect, useState } from 'react';
import { getDatabaseCart, getShoppingCart } from '../../utilities/fakedb';
import fakedata from './../fakedata/Fakedata';
import ProductReview from '../ProductReview/ProductReview';


const Review = () => {
    const [card,setcard]= useState([])
   
    useEffect(()=>{
     const savecard = getDatabaseCart()
     const cards = Object.keys(savecard)
    
     const count = cards.map(id=> {
        const product = fakedata.find( pd => pd.id==id)
        const ddd = savecard[id]
        console.log(ddd)
       
        return product
     }
     )
   setcard(count)
       
       
      
       
    },[])
    return (
        <div>
            <h1>Review your product {card.length}</h1>
            {
                card.map(pd=><ProductReview product={pd} key={pd.id}></ProductReview>)
            }
           

          
           
        </div>
    );
};

export default Review;