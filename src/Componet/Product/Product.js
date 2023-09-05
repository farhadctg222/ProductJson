import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import Card from '../Card/Card';
import ProductDetals from '../ProductDeatals/ProductDetals';
import { addToDatabaseCart, addToDb } from '../../utilities/fakedb';

const Product = (props) => {
  
   
  

    const [product,setproduct]= useState([])
    const [card,setcard]= useState([])
    const handle = (product)=>{
       const newcard = [...card,product]
       setcard(newcard)
       const  adnewproduct = newcard.filter(pd=>pd.id===product.id)
      addToDatabaseCart(product.id,adnewproduct)
     
    }
    useEffect(()=>{
   fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(data=>setproduct(data))
    },[])
    return (
        <div className='product' style={{display:'flex'}}>
            <h1></h1>
           <div className="shopProduct">
           {
                product.map(product=><Shop showaddcard={true}
                    product={product}handle={handle}key={product.id}></Shop>)
                    
            }
           </div>
           <div className="card">
            <Card card={card}></Card>
           </div>
            
        </div>
    );
};

export default Product;