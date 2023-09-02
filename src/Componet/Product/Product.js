import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import Card from '../Card/Card';

const Product = () => {
    const [product,setproduct]= useState([])
    const [card,setcard]= useState([])
    const handle = (product)=>{
       const newcard = [...card,product]
       setcard(newcard)
    }
    useEffect(()=>{
   fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(data=>setproduct(data))
    },[])
    return (
        <div className='product' style={{display:'flex'}}>
           <div className="shopProduct">
           {
                product.map(product=><Shop product={product} handle={handle}></Shop>)
            }
           </div>
           <div className="card">
            <Card card={card}></Card>
           </div>
            
        </div>
    );
};

export default Product;