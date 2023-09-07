import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Shop from '../Shop/Shop';
import Card from '../Card/Card';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/fakedb';
import fakedata from '../fakedata/Fakedata';

const Product = () => {
  const [product,setproduct]= useState([]).slice(0,5)
  const [card,setcard]= useState([])


  useEffect(()=>{
    const savecard = getDatabaseCart()
    const sss = Object.keys(savecard)
    const a = sss.map(pd=>{
      const fake = fakedata.find(key =>key.id==pd)
      const aa = savecard[pd]
      console.log(fake)
      return fake
    })
    setcard(a)
  
  },[])
   
    const handle = (product)=>{
       const newcard = [...card,product]
       setcard(newcard)
       const  adnewproduct = newcard.filter(pd=>pd.id===product.id)
       console.log(handle)
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
            <Card card={card}>
            <Link to='/review'>
                  <button>Order Review</button>
                  </Link>
            </Card>
           </div>
            
        </div>
    );
};

export default Product;