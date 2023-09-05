import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
const Card = (props) => {
    
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
            <h1 className='heading'>Order Summary</h1>
            <h2>Order Count :{props.card.length}</h2>
            <h3>Shiping Cost :{shipinCost}</h3>
            <h4>Vat & Tax :{vat}</h4>
            <h1>Totall Price : {all2+shipinCost+vat}</h1>
            <Link to='/review'><button style={{padding:'10px'}}>Order Confirm</button></Link>
            
        </div>
    );
};

export default Card;