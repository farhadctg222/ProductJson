import React from 'react';

const ProductReview = (props) => {
    console.log(props)
    const {title,price,id} = props.product
    return (
        <div className='review-continar'>
             
            <div className="reviewItem"style={{border:'1px solid green',marginBottom:'20px'}}>
                <h1>Title: {title}</h1>
                <h2>Price : ${price}</h2>
                <h4>Product Id: {id}</h4>
                <h5>Quantity: 1</h5>
                <button onClick={()=>props.handleRemove(id)}>Remove</button>
            </div>
            <div className="card-continar">
                
            </div>
            
            
        </div>
        
    );
};

export default ProductReview;