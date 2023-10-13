import React, { Children } from 'react';
import './Card.css'
import img  from './farhad.png'
import { Link } from 'react-router-dom';
const Card = (props) => {
    console.log(props)
    const totall = props.card
    const all = totall.reduce((allproduct,product)=>allproduct+product.price,0)
    const all2 = Math.round(all)


    let shipinCost = 0
    if(all2>500){
        shipinCost= 30
    }else{
        shipinCost= 0
    }
    let vat = 0
    if (all2>1000) {
        vat = 15
    }else{
        vat = 0
    }
   
        return (
        <div className='orderSummary' style={{border:'1px solid red',width:'500px'}}>
            <h1 className='heading'>Order Checkout</h1>
            <h2>Order Count :{props.card.length}</h2>
            <h3>Shiping Cost :{shipinCost}</h3>
            <h4>Vat & Tax :{vat}</h4>
            <h1>Totall Price : {all2+shipinCost+vat}</h1>
           {
            props.children
           }
           <div style={{textAlign:'center'}}>
           <img style={{widows:'200px',height:'200px'}} src={img} alt="" /> <h4>www.satkania-eshop.netlify.app</h4><h5>Managing Director</h5>
          <Link to="/personal"style={{backgroundColor:'pink'}}>আমার কিছু কথা</Link>

           </div>
        </div>
    );
};

export default Card;
